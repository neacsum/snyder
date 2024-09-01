var sph = {
  r: 1,
  phi0: 0,
  lam0: -75*D2R,
  k0: 1,
  set_fwd (){
    this.r = +document.getElementById("r_in").value;
    this.phi0 = document.getElementById("phi0_sph_in").value*D2R;
    this.lam0 = document.getElementById("lam0_sph_in").value*D2R;
    this.k0 = +document.getElementById("k0_sph_in").value;

    const {r, phi0,lam0,k0} = this;
    let phi = document.getElementById("phi_sph_in").value*D2R;
    let lam = document.getElementById("lambda_sph_in").value*D2R;

    let b = Math.cos(phi)*Math.sin(lam-lam0);
    let jax = `\\eqalign {
      B &= \\cos ${deg(phi)} \\sin[${deg(lam,true)}-${deg(lam0)}] \\cr
        &= \\cos ${deg(phi)} \\sin ${deg(lam-lam0)} = ${fmt(b, true)}
    }`
    MathJax.Hub.getAllJax("B_sph")[0].Text(jax);

    let x = 1/2*r*k0*Math.log((1+b)/(1-b));
    jax = `\\eqalign{
      x &= \\unicode{xbd} \\times ${r} \\times ${k0} \\ln[(1+${fmt(b)})/(1-${fmt(b)})] \\cr
        &= ${fmt(x,true)} \\;\\text{units}
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);

    let y = r*k0*(Math.atan(Math.tan(phi)/Math.cos(lam-lam0))-phi0);
    jax = `\\eqalign{
      y &= ${r}\\times${k0}\\times\\{\\arctan[\\tan ${deg(phi)}/\\cos${deg(lam-lam0)} - ${phi0}^\\circ]\\} \\cr
        &= ${r}\\times${k0}\\times${fmt(Math.atan(Math.tan(phi)/Math.cos(lam-lam0))-phi0)}^\\circ\\pi/180^\\circ \\cr
        &= ${fmt(y,true)}\\; \\text{units}
    }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);

    let k = k0/Math.sqrt(1-b**2);
    jax = `k = ${k0}/(1-${fmt(b)}^2)^{1/2} = ${fmt(k,true)}`;
    MathJax.Hub.getAllJax("k_sph")[0].Text(jax);

    document.getElementById("x_sph_in").value = x;
    document.getElementById("y_sph_in").value = y;
    this.set_inv ();
  },
  set_inv () {
    const {r, phi0, lam0, k0} = this;
    const x = +document.getElementById("x_sph_in").value;
    const y = +document.getElementById("y_sph_in").value;

    let d= y/(r*k0)+phi0;
    let jax =`D = ${fmt(y)}/(${r}\\times ${k0}) + ${deg(phi0)} = ${fmt(d)}\\;\\text{radians}`;
    MathJax.Hub.getAllJax("d_sph")[0].Text(jax);

    let temp = x/(r*k0);
    jax=`\\eqalign {
      \\sinh(x/Rk_0) &= \\sinh[${fmt(x)}/(${r}\\times${k0})] \\cr
                     &= (\\mathrm{e}^{${fmt(temp)}} - \\mathrm{e}^{${fmt(temp)}})/2 \\cr
                     &= ${fmt(Math.sinh(x/(r*k0)))}
    }`
    MathJax.Hub.getAllJax("sinh")[0].Text(jax);
    jax=`\\eqalign {
      \\cosh(x/Rk_0) &= \\cosh[${fmt(x)}/(${r}\\times${k0})] \\cr
                     &= (\\mathrm{e}^{${fmt(temp)}} + \\mathrm{e}^{${fmt(temp)}})/2 \\cr
                     &= ${fmt(Math.cosh(x/(r*k0)))}
    }`
    MathJax.Hub.getAllJax("cosh")[0].Text(jax);

    let phi = Math.asin(Math.sin(d)/Math.cosh(x/(r*k0)));
    jax=`\\eqalign{
      \\phi &= \\arcsin(\\sin ${fmt(d)}/${fmt(Math.cosh(x/(r*k0)))}) = \\arcsin(${fmt(Math.sin(d))}/${fmt(Math.cosh(x/(r*k0)))}) \\cr
            &= ${deg(phi, true)}
    }`
    MathJax.Hub.getAllJax("phi_sph")[0].Text(jax);

    let lam = lam0+Math.atan(Math.sinh(x/(r*k0))/Math.cos(d));
    jax=`\\eqalign{
      \\lambda &= ${deg(lam0,true)} + \\arctan[${fmt(Math.sinh(x/(r*k0)))}/${fmt(Math.cos(d))}] \\cr
               &= ${deg(lam0,true)} + \\arctan ${fmt(Math.sinh(x/(r*k0))/Math.cos(d))} = ${deg(lam0,true)} + ${fmt(Math.atan(Math.sinh(x/(r*k0))/Math.cos(d)))} \\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lambda_sph")[0].Text(jax);
  }
}

var ell = {
  a: 6378206.4,
  e2:  0.00676866,
  phi0: 0,
  lam0: -75*D2R,
  k0: 0.9996,

  select (ellip) {
    if (ellip == 0) { //Clarke-1866
      this.a = 6378206.4;
      inv_f = 294.9786982;
    } else if (ellip == 1) { //WGS-84
      this.a = 6378137.;
      inv_f = 298.257223563;
    }
    this.e2 = 2/inv_f - 1/inv_f**2;
    this.e = Math.sqrt(this.e2);
    MathJax.Hub.getAllJax("ellip_a")[0].Text(`a=${this.a}`);
    MathJax.Hub.getAllJax("ellip_e2")[0].Text(`e^2=${this.fmt(e2)}`);
  
    this.set_fwd ();
  },
  set_fwd () {
    this.lam0 = document.getElementById("lam0_ell_in").value*D2R;
    this.phi0 = document.getElementById("phi0_ell_in").value*D2R;
    this.k0 = +document.getElementById("k0_ell_in").value;

    const {a, e2, phi0, lam0, k0} = this;
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam = document.getElementById("lambda_ell_in").value*D2R;

    const eprime2 = e2/(1-e2);
    let jax = `e'^2 = ${fmt(e2)}/(1-${fmt(e2)}) = ${fmt(eprime2)}`;
    MathJax.Hub.getAllJax("eprime2")[0].Text(jax);

    const N = a/Math.sqrt(1-e2*Math.sin(phi)**2);
    jax = `N = ${a}/(1-${e2}\\sin^2${deg(phi)})^{1/2} = ${fmt(N, true, 2)}\\;\\text{m}`;
    MathJax.Hub.getAllJax("N")[0].Text(jax);

    const T = Math.tan(phi)**2;
    jax = `T = \\tan^2 ${deg(phi)} = ${fmt(T)}`
    MathJax.Hub.getAllJax("T")[0].Text(jax);

    const C = eprime2*Math.cos(phi)**2;
    jax = `C = ${fmt(eprime2)}\\cos^2 ${deg(phi)} = ${fmt(C)}`;
    MathJax.Hub.getAllJax("C")[0].Text(jax);

    const A = (lam - lam0)*Math.cos(phi);
    jax = `A = (\\cos${deg(phi)})\\times[${deg(lam,true)} - ${deg(lam0)}]\\pi/180^\\circ = ${fmt(A)}`;
    MathJax.Hub.getAllJax("A")[0].Text(jax);

    const M=a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi) - 35*e2**3/3072*Math.sin(6*phi));
    jax=`\\begin{align}
    M =&${a}[(1-${fmt(e2)}/4-3\\times ${fmt(e2)}^2/64 - 5\\times ${fmt(e2)}^3/256)\\times ${deg(phi)}\\times\\pi/180^\\circ \\cr
       &-(3\\times ${fmt(e2)}/8+3\\times ${fmt(e2)}^2/32 +45\\times${fmt(e2)}^3/1024)\\sin(2\\times${deg(phi)}) \\cr
       &+(15\\times ${fmt(e2)}^2/256 +45\\times ${fmt(e2)}^3/1024)\\sin(4\\times ${deg(phi)}) \\cr
       &-(35\\times ${fmt(e2)}^3/3072)\\sin(6\\times${deg(phi)})] \\cr
      =& ${fmt(M,true,2)}\\;\\text{m}
    \\end{align}`;
    MathJax.Hub.getAllJax("M")[0].Text(jax);

    const M0 = a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi0 - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi0)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi0) - 35*e2**3/3072*Math.sin(6*phi0));
    jax=`\\begin{align}
    M_0 =&${a}[(1-${fmt(e2)}/4-3\\times ${fmt(e2)}^2/64 - 5\\times ${fmt(e2)}^3/256)\\times ${deg(phi0)}\\times\\pi/180^\\circ \\cr
       &-(3\\times ${fmt(e2)}/8+3\\times ${fmt(e2)}^2/32 +45\\times${fmt(e2)}^3/1024)\\sin(2\\times${deg(phi0)}) \\cr
       &+(15\\times ${fmt(e2)}^2/256 +45\\times ${fmt(e2)}^3/1024)\\sin(4\\times ${deg(phi0)}) \\cr
       &-(35\\times ${fmt(e2)}^3/3072)\\sin(6\\times${deg(phi0)})] \\cr
      =& ${fmt(M0,true,2)}\\;\\text{m}
    \\end{align}`;
    MathJax.Hub.getAllJax("M0")[0].Text(jax);
 
    const x= k0*N*(A+(1-T+C)*A**3/6+(5-18*T+T**2+72*C-58*eprime2)*A**5/120);
    jax = `\\begin{align}
      x =& ${k0}\\times${fmt(N,2)}\\times[${fmt(A)}+(1-${fmt(T)}+${fmt(C)}) \\cr
         &\\times${fmt(A)}^3/6+(5-18\\times${fmt(T)}+${fmt(T)}^2+72\\times${fmt(C)} \\cr
         &-58\\times${fmt(eprime2)})\\times${fmt(A)}^5/120] \\cr
        =&${fmt(x,true,2)}\\;\\text{m} 
    \\end{align}`;
    MathJax.Hub.getAllJax("x_ell")[0].Text(jax);

    const y = k0*(M-M0+N*Math.tan(phi)*(A**2/2+(5-T+9*C+4*C**2)*A**4/24 + (61-58*T+T**2+600*C-330*eprime2)*A**6/720));
    jax=`\\begin{align}
      y =& ${k0}\\times\\{${fmt(M,false,2)}-${fmt(M0,false,2)}+${fmt(N,false,2)}\\times${fmt(Math.tan(phi))}\\times[${fmt(A)}^2/2 \\cr
         & +(5-${fmt(T)}+9\\times${fmt(C)}+4\\times${fmt(C)}^2)\\times${fmt(A)}^4/24 \\cr
         & +(61-58\\times${T.toFixed(7)}+${T.toFixed(7)}^2+600\\times${C.toFixed(7)}-330 \\cr
         & \\times${fmt(eprime2)})\\times${fmt(A)}^6/720]\\} \\cr
        =& ${fmt(y,true,2)}\\;\\text{m}
    \\end{align}`;
    MathJax.Hub.getAllJax("y_ell")[0].Text(jax);

    const k = k0*(1+(1+C)*A**2/2+(5-4*T+42*C+13*C**2-28*eprime2)*A**4/24+(61-148*T+16*T**2)*A**6/720);
    jax = `\\begin{align}
      k =&${k0}\\times[1+(1+${fmt(C)})\\times${fmt(A)}^2/2+(5-4\\times${fmt(T)}+42 \\cr
         &\\;\\times${fmt(C)}+13\\times${fmt(C)}^2-28\\times${fmt(eprime2)})\\times${fmt(A)}^4/24 \\cr
         &\\;+(61-148\\times${T.toFixed(7)}+16\\times${T.toFixed(7)}^2)\\times${A.toFixed(7)}^6/720] \\cr
        =& ${k.toFixed(7)} 
    \\end{align}`;
    MathJax.Hub.getAllJax("k_ell")[0].Text(jax);

    const k1=k0*(1+(1+eprime2*Math.cos(phi)**2)*x**2/(2*k0**2*N**2));
    jax = `\\begin{align}
      k =&${k0}\\times[1+(1+${fmt(eprime2)}\\cos^2 ${deg(phi)})\\times${fmt(x,false,2)}^2 \\cr
         &(2\\times${fmt(k0)}^2\\times${fmt(N)}^2)] \\cr
        =&${fmt(k1,true)}
    \\end{align}`;
    MathJax.Hub.getAllJax("k_ell1")[0].Text(jax);

    document.getElementById("x_ell_in").value = x.toFixed(2);
    document.getElementById("y_ell_in").value = y.toFixed(2);
    this.set_inv ();
  },
  set_inv () {
    const {a, e2, phi0, lam0, k0} = this;
    const x = +document.getElementById("x_ell_in").value;
    const y = +document.getElementById("y_ell_in").value;

    const eprime2 = e2/(1-e2);
    let jax = `e'^2 = ${fmt(e2)}/(1-${fmt(e2)}) = ${fmt(eprime2)}`;
    MathJax.Hub.getAllJax("eprime2-inv")[0].Text(jax);

    const M0 = a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi0 - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi0)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi0) - 35*e2**3/3072*Math.sin(6*phi0));
    jax=`\\begin{align}
    M_0 =&${a}[(1-${fmt(e2)}/4-3\\times ${fmt(e2)}^2/64 - 5\\times ${fmt(e2)}^3/256)\\times ${deg(phi0)}\\times\\pi/180^\\circ \\cr
       &-(3\\times ${fmt(e2)}/8+3\\times ${fmt(e2)}^2/32 +45\\times${fmt(e2)}^3/1024)\\sin(2\\times${deg(phi0)}) \\cr
       &+(15\\times ${fmt(e2)}^2/256 +45\\times ${fmt(e2)}^3/1024)\\sin(4\\times ${deg(phi0)}) \\cr
       &-(35\\times ${fmt(e2)}^3/3072)\\sin(6\\times${deg(phi0)})] \\cr
      =& ${fmt(M0,true,2)}\\;\\text{m}
    \\end{align}`;
    MathJax.Hub.getAllJax("M0_inv")[0].Text(jax);

    const M = M0+y/k0;
    jax = `M = ${fmt(M0,false,2)} + ${fmt(y,false,0)}/${fmt(k0)} = ${fmt(M)}\\;\\text{m}`;
    MathJax.Hub.getAllJax("M-inv")[0].Text(jax);

    const e1 = (1-Math.sqrt(1-e2))/(1+Math.sqrt(1-e2));
    jax = `\\eqalign{
      e_1 &= [1-(1-${fmt(e2)})^{1/2}]/[1+(1-${fmt(e2)})^{1/2}] \\cr
          &= ${fmt(e1)}
    }`
    MathJax.Hub.getAllJax("e1")[0].Text(jax);

    const mu=M/(a*(1-e2/4-3*e2**2/64-5*e2**3/256))
    jax = `\\begin{align}
      \\mu =& ${fmt(M,2)}/[${a}\\times(1-${fmt(e2)}/4-3\\times${fmt(e2)}^2/64 \\cr
            &\\;-5\\times${fmt(e2)}^3/256)] \\cr
           =&${fmt(mu,true)}\\;\\text{radian}
    \\end{align}`
    MathJax.Hub.getAllJax("mu")[0].Text(jax);

    const phi1 = mu + (3*e1/2-27*e1**3/32)*Math.sin(2*mu)+(21*e1**2/16-55*e1**4/32)*Math.sin(4*mu)
               + (151*e1**3/96)*Math.sin(6*mu);
    jax = `\\begin{align}
    \\phi_1 =& ${fmt(mu)} + (3\\times${fmt(e1)}/2-27\\times${fmt(e1)}^3/32)\\sin(2\\times${fmt(mu)}) \\cr
            & +(21\\times${fmt(e1)}^2/16-55\\times${fmt(e1)}^4/32)\\sin(4\\times${fmt(mu)}) \\cr
            & +(151\\times${fmt(e1)}^3/96)\\sin(6\\times${fmt(mu)}) \\cr
           =& ${fmt(phi1,true)}\\;\\text{radian} \\cr
           =& ${fmt(phi1,true)}\\times180^\\circ/\\pi \\cr
           =& ${deg(phi1, true)}
    \\end{align}`
    MathJax.Hub.getAllJax("phi1")[0].Text(jax);

    const C1 =eprime2*Math.cos(phi1)**2
    jax = `C_1 = ${fmt(eprime2)}\\cos^2(${deg(phi1)}) = ${fmt(C1,true)}`
    MathJax.Hub.getAllJax("C1")[0].Text(jax);

    const T1 = Math.tan(phi1)**2;
    jax = `T_1=\\tan^2${deg(phi1)} = ${fmt(T1,true)}`
    MathJax.Hub.getAllJax("T1")[0].Text(jax);

    const N1=a/Math.sqrt(1-e2*Math.sin(phi1)**2);
    jax = `N_1=${a}/(1-${fmt(e2)}\\sin^2${deg(phi1)})^{1/2} = ${fmt(N1,true,2)}\\;\\text{m}`
    MathJax.Hub.getAllJax("N1")[0].Text(jax);

    const R1=a*(1-e2)/(1-e2*Math.sin(phi1)**2)**(3/2);
    jax = `\\eqalign{
      R_1 &=${a}\\times(1-${fmt(e2)})/(1-${fmt(e2)}\\sin^2${deg(phi1)})^{3/2} \\cr
          &= ${fmt(R1,true,2)}\\;\\text{m}}`
    MathJax.Hub.getAllJax("R1")[0].Text(jax);

    const D=x/(N1*k0);
    jax =`D=${fmt(x,false,0)}/(${fmt(N1,false,2)}\\times${fmt(k0)}) = ${fmt(D,true)}`;
    MathJax.Hub.getAllJax("D")[0].Text(jax);

    const phi = phi1 -(N1*Math.tan(phi1)/R1)*(D**2/2 - (5+3*T1+10*C1-4*C1^2-9*eprime2)*D**4/24
                +(61+90*T1+298*C1+45*T1**2-252*eprime2-3*C1**2)*D**6/720);
    jax = `\\eqalign{
      \\phi =& ${deg(phi)} -(${N1.toFixed(2)}\\times \\tan${deg(phi1)}/${fmt(R1,false,2)})\\times [${fmt(D)}^2/2 \\cr
             & -(5+3\\times${fmt(T1)}+10\\times${fmt(C1)}-4\\times${fmt(C1)}^2-9\\times${fmt(eprime2)}) \\cr
             & \\times ${fmt(D)}^4/24 +(61+90\\times${fmt(T1)}+298\\times${fmt(C1)}+45\\times${fmt(T1)}^2\\cr
             & -252\\times${fmt(eprime2)}-3\\times${fmt(C1)}^2)\\times ${fmt(D)}/720]\\times180^\\circ/\\pi \\cr
            =& ${deg(phi,true)} 
      }`;
    MathJax.Hub.getAllJax("phi")[0].Text(jax);

    const lam= lam0 +(D-(1+2*T1 +C1)*D**3/6+(5-2*C1 +28*T1-3*C1**2 + 8*eprime2 + 24*T1**2)*D**5/120)/Math.cos(phi1);
    jax = `\\eqalign{ 
      \\lambda =& ${deg(lam0,true)} + [${fmt(D)} - (1 + 2\\times${fmt(T1)} + ${fmt(C1)})${fmt(D)}^3/6 \\cr
                & +(5 - 2\\times${fmt(C1)} +28\\times${fmt(T1)} -3\\times${fmt(C1)}^2 + 8\\times${fmt(eprime2)} \\cr
                & +24\\times${fmt(T1)}^2)/${fmt(D)}^5/120]/\\cos${deg(phi1)} \\cr
               =& ${deg(lam,true)}
      }`;
    MathJax.Hub.getAllJax("lambda")[0].Text(jax);
  }
}
