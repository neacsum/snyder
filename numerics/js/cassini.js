var sph = {
  set_fwd (){
    const r = document.getElementById("r_sph_in").value;
    const phi0 = document.getElementById("phi0_sph_in").value*D2R;
    const lam0 = document.getElementById("lam0_sph_in").value*D2R;
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lambda_sph_in").value*D2R;

    const b=Math.cos(phi)*Math.sin(lam-lam0);
    let jax = `\\eqalign{
      B &= \\cos${deg(phi)}\\sin[${deg(lam,true)}-${deg(lam0)}] \\cr
        &= ${fmt(b, true)}
    }`
    MathJax.Hub.getAllJax("b_sph")[0].Text(jax);

    const x = r*Math.asin(b);
    jax = `\\eqalign{
      x &= ${fmt(r,true,0)}\\times \\arcsin${fmt(b)} \\times \\pi/180^\\circ \\cr
        &= ${fmt(x, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);

    let term=Math.atan(Math.tan(phi)/Math.cos(lam-lam0))-phi0;
    const y=r*term;
    jax=`\\eqalign{
      y &= ${fmt(r,true,0)}\\times \\{\\arctan[\\tan ${deg(phi)}/\\cos[${deg(lam,true)}-${deg(lam0)}]]-${deg(phi0)}\\}\\times\\pi/180^\\circ \\cr
        &= ${fmt(r,true,0)}\\times ${deg(term)}\\times\\pi/180^\\circ = ${fmt(y,true)}\\;\\text{units}
    }`;
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);

    const h = 1/Math.sqrt(1-b**2);
    jax = `\\eqalign{
      h' &= 1/[1-${fmt(b)}^2]^{1/2} \\cr
         &= ${fmt(h, true)}
    }`
    MathJax.Hub.getAllJax("h_sph")[0].Text(jax);

    document.getElementById("x_sph_in").value = fmt(x, true);
    document.getElementById("y_sph_in").value = fmt(y, true);
    this.set_inv (x, y);
  },

  set_inv (x, y) {
    const r = document.getElementById("r_sph_in").value;
    const phi0 = document.getElementById("phi0_sph_in").value*D2R;
    const lam0 = document.getElementById("lam0_sph_in").value*D2R;
    x = document.getElementById("x_sph_in").value;
    y = document.getElementById("y_sph_in").value;

    const d = y/r+phi0;
    let jax = `\\eqalign{
      D &=(${fmt(y)}/${fmt(r,false,0)})\\times 180^\\circ/\\pi+${deg(phi0)} \\cr
        &= ${deg(d, true)}
    }`
    MathJax.Hub.getAllJax("d_sph")[0].Text(jax);

    const phi = Math.asin(Math.sin(d)*Math.cos(x/r));
    jax = `\\eqalign{
      \\phi &=\\arcsin\\{\\sin ${deg(d)}\\cos[(${fmt(x)}/${fmt(r,false,0)})\\times 180^\\circ/\\pi] \\} \\cr
            &=\\arcsin ${fmt(Math.sin(d)*Math.cos(x/r))} \\cr
            &= ${deg(phi, true)}
    }`;
    MathJax.Hub.getAllJax("phi_sph")[0].Text(jax);

    const lam = lam0 + Math.atan2(Math.tan(x/r),Math.cos(d));
    jax = `\\eqalign{
      \\lambda &= ${deg(lam0,true)}+\\arctan\\{\\tan[(${fmt(x,true)}/${fmt(r,false,0)})\\times 180^\\circ/\\pi]\\} \\cr
               &= ${deg(lam0,true)} + \\arctan ${fmt(Math.tan(x/r)/Math.cos(d))} \\cr
               &= ${deg(lam0,true)} + ${deg(Math.atan2(Math.tan(x/r),Math.cos(d)))} = ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_sph")[0].Text(jax);
  }
}

var ell = {
  a: 6378206.4,
  e2: 0.00676866,
  e: 0.0822719,
  phi0: 40*D2R,
  lam0: -75*D2R,

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
    MathJax.Hub.getAllJax("ell")[0].Text(`a=${this.a}`);
    MathJax.Hub.getAllJax("ell_e2")[0].Text(`e^2=${fmt(this.e2)}`);
    MathJax.Hub.getAllJax("ell_e")[0].Text(`e=${fmt(this.e)}`);

    this.set_fwd ()
  },
  set_fwd () {
    const {a, e, e2, phi0, lam0} = this;
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam = document.getElementById("lam_ell_in").value*D2R;
    const az = document.getElementById("az_ell_in").value*D2R

    const N = a/Math.sqrt(1-e2*Math.sin(phi)**2);
    let jax = `\\eqalign{
      N &= ${fmt(a, false, 0)}/(1-${fmt(e2)}\\times \\sin^2${deg(phi)})^{1/2} \\cr
        &= ${fmt(N, true, 2)}\\;\\text{m}
    }`;
    MathJax.Hub.getAllJax("N_ell")[0].Text(jax);

    const T = Math.tan(phi)**2
    jax = `T = \\tan^2 ${deg(phi)} = ${fmt(T, true)}`;
    MathJax.Hub.getAllJax("T_ell")[0].Text(jax);

    const A = (lam-lam0)*Math.cos(phi);
    jax = `\\eqalign{
      A &= [${deg(lam,true)}-${deg(lam0)}]\\times(\\pi/180^\\circ)\\times\\cos${deg(phi)}\\cr
        &= ${fmt(A, true)}
    }`
    MathJax.Hub.getAllJax("A_ell")[0].Text(jax);

    const C = e2*Math.cos(phi)**2/(1-e2);
    jax = `\\eqalign{
      C &= ${fmt(e2)}\\times\\cos^2 ${deg(phi)}/(1-${fmt(e2)}) \\cr
        &= ${fmt(C, true)}
    }`
    MathJax.Hub.getAllJax("C_ell")[0].Text(jax);

    const M =a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi) - 35*e2**3/3072*Math.sin(6*phi));
  
    jax=`\\begin{align}
    M =& ${fmt(a, false, 0)}\\times[(1-${fmt(e2)}/4-3\\times ${fmt(e2)}^2/64 \\cr
       &- 5\\times ${fmt(e2)}^3/256)\\times ${deg(phi)}\\times\\pi/180^\\circ \\cr
       &-(3\\times ${fmt(e2)}/8+3\\times ${fmt(e2)}^2/32 +45\\times${fmt(e2)}^3/1024)\\sin(2\\times${deg(phi)}) \\cr
       &+(15\\times ${fmt(e2)}^2/256 +45\\times ${fmt(e2)}^3/1024)\\sin(4\\times ${deg(phi)}) \\cr
       &-(35\\times ${fmt(e2)}^3/3072)\\sin(6\\times${deg(phi)})] \\cr
      =& ${fmt(M, true, 2)}\\;\\text{m}
    \\end{align}`
    MathJax.Hub.getAllJax("M_ell")[0].Text(jax);
  
    MathJax.Hub.getAllJax("phi0_ell")[0].Text(`${deg(phi0,true)}`);
    MathJax.Hub.getAllJax("phi_ell")[0].Text(`${deg(phi,true)}`);
    const M0 =a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi0 - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi0)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi0) - 35*e2**3/3072*Math.sin(6*phi0));
    MathJax.Hub.getAllJax("M0_ell")[0].Text(`M_0 = ${fmt(M0, true, 2)}\\;\\text{m}`);

    const x = N*(A-T*A**3/6-(8-T+8*C)*T*A**5/120);
    jax = `\\eqalign{
      x =& ${fmt(N,true,2)}\\times[${fmt(A)}-${fmt(T)}\\times${fmt(A)}^3/6 \\cr
         & -(8-${fmt(T)}+8\\times${fmt(C)})\\times${fmt(T)}\\cr
         & \\times${fmt(A)}^5/120] \\cr
        =& ${fmt(x, true, 2)}\\;\\text{m}     
    }`
    MathJax.Hub.getAllJax("x_ell")[0].Text(jax);
    document.getElementById ("x_ell_in").value = fmt(x, true, 2);

    const y = M - M0 + N*Math.tan(phi)*(A**2/2+(5-T+6*C)*A**4/24)
    jax = `\\eqalign{
      y =& ${fmt(M,true,2)} - ${fmt(M0, true,2)} + ${fmt(N,true,2)}\\times \\tan ${deg(phi)} \\cr
         & \\times[${fmt(A)}^2/2+(5-${fmt(T)}+6\\times${fmt(C)}) \\cr
         & \\times ${fmt(A)}^4/24] \\cr
        =& ${fmt(y,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("y_ell")[0].Text(jax);
    document.getElementById ("y_ell_in").value = fmt(y, true, 2);

    const s = 1+x**2*Math.cos(az)**2*(1-e2*Math.sin(phi)**2)**2/(2*a**2*(1-e2));
    jax = `\\eqalign{
      s =& 1+ ${fmt(x,false,2)}^2\\cos^2${deg(az)}\\times(1-${fmt(e2)}\\times\\sin^2${deg(phi)})^2/ \\cr
         & [2\\times ${fmt(a,true,0)}^2 \\times(1-${fmt(e2)})] \\cr
        =& ${fmt(s, true)} 
    }`
    MathJax.Hub.getAllJax("s_ell")[0].Text(jax);

    this.set_inv ();
  },

  set_inv () {
    const {a, e, e2, phi0, lam0} = this;
    const x = document.getElementById("x_ell_in").value;
    const y = document.getElementById("y_ell_in").value;

    MathJax.Hub.getAllJax("phi0_ell_inv")[0].Text(`\\phi_0 = ${deg(phi0)}`);

    const M0 =a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi0 - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi0)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi0) - 35*e2**3/3072*Math.sin(6*phi0));
    MathJax.Hub.getAllJax("M0_ell_inv")[0].Text(`M_0 = ${fmt(M0, true, 2)}\\;\\text{m}`);

    const M1 = M0+y*1;
    let jax = `\\eqalign{
      M_1 &= ${fmt(M0, false, 2)} + ${fmt(y, false, 0)} \\cr
          &= ${fmt(M1, false, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("M1_ell_inv")[0].Text(jax);

    const mu1 = M1/(a*(1-e2/4-3*e2**2/64-5*e2**3/256));
    jax = `\\eqalign{
      \\mu_1 =& ${fmt(M1, false, 2)}/[${fmt(a,false, 2)}\\times (1-${fmt(e2)}/4 \\cr
              & -3\\times${fmt(e2)}^2/64 -5\\times${fmt(e2)}^3/256)] \\cr
             =& ${fmt(mu1)}\\;\\text{radians} = ${deg(mu1, true)} 
    }`
    MathJax.Hub.getAllJax("mu1_ell_inv")[0].Text(jax);

    const e1 = (1-Math.sqrt(1-e2))/(1+Math.sqrt(1-e2));
    jax = `\\eqalign{
      e_1 &= [1-(1-${fmt(e2)})^{1/2}]/[1-(1-${fmt(e2)})^{1/2}] \\cr
            &= ${fmt(e1, true, 9)}
    }`
    MathJax.Hub.getAllJax("e1_ell_inv")[0].Text(jax);

    const phi1=mu1+(3*e1/2-27*e1**3/32)*Math.sin(2*mu1)+(21*e1**2/16-55*e1**4/32)*Math.sin(4*mu1)+
               151*e1**3/96*Math.sin(6*mu1)+1097*e1**4/512*Math.sin(8*mu1);
    jax = `\\eqalign{
      \\phi_1 =& ${deg(mu1)} + \\cr
               &[(3\\times${fmt(e1,false,9)}/2-27\\times${fmt(e1,false,9)}^3/32)\\sin(2\\times${deg(mu1)}) \\cr
               &+(21\\times${fmt(e1,false,9)}^2/16-55\\times${fmt(e1,false,9)}^4/32)\\sin(4\\times${deg(mu1)}) \\cr
               &+(151\\times${fmt(e1,false,9)}^3/96)\\sin(6\\times${deg(mu1)}) \\cr
               &+(1097\\times${fmt(e1,false,9)}^4/512)\\sin(8\\times${deg(mu1)})]\\times 180^\\circ/\\pi \\cr
              =& ${deg(phi1, true)} 
    }`
    MathJax.Hub.getAllJax("phi1_ell_inv")[0].Text(jax);

    const T1 = Math.tan(phi1)**2;
    jax = `\\eqalign {
      T_1 &= \\tan^2${deg(phi1)} \\cr
          &= ${fmt(T1, true)}
    }`
    MathJax.Hub.getAllJax("t1_ell_inv")[0].Text(jax);

    const N1 = a/Math.sqrt(1-e2*Math.sin(phi1)**2)
    jax = `\\eqalign{
      N_1 &= ${fmt(a,true,0)}/(1-${fmt(e2)}\\sin^2${deg(phi1)})^{1/2} \\cr
          &= ${fmt(N1, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("n1_ell_inv")[0].Text(jax);

    const R1 = a*(1-e2)/Math.sqrt((1-e2*Math.sin(phi1)**2)**3)
    jax = `\\eqalign{
      R_1 &= ${fmt(a,true,2)}(1-${fmt(e2)})/(1-${fmt(e2)}\\sin^2${deg(phi1)})^{3/2} \\cr
          &= ${fmt(R1, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("r1_ell_inv")[0].Text(jax);

    const D = x/N1;
    jax =`\\eqalign{
      D &= ${fmt(x,true,0)}/${fmt(N1, true,2)} \\cr
        &= ${fmt(D,true)}
    }`
    MathJax.Hub.getAllJax("d_ell_inv")[0].Text(jax);

    const phi = phi1 - (N1*Math.tan(phi1)/R1)*(D**2/2-(1-3*T1)*D**4/24);
    jax = `\\eqalign{
      \\phi =& ${deg(phi1)}-(${fmt(N1,false,2)}\\tan${deg(phi1)}/${fmt(R1,false,2)}) \\cr
             & \\times [${fmt(D)}^2/2-(1+3\\times${fmt(T1)})\\times${fmt(D)}^4/24)]\\times 180^\\circ/\\pi \\cr
            =& ${deg(phi,true)} 
    }`
    MathJax.Hub.getAllJax("phi_ell_inv")[0].Text(jax);

    const lam = lam0 + (D-T1*D**3/3+(1+3*T1)*T1*D**5/15)/Math.cos(phi1);
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)} + \\{[${fmt(D)}-${fmt(T1)}\\times${fmt(D)}^3 \\cr
                & + (1+3\\times${fmt(T1)})\\times${fmt(T1)}\\times${fmt(D)}^5/15]/ \\cr
                & \\cos ${deg(phi1)}\\}\\times180^\\circ/\\pi \\cr
               =& ${deg(lam,true)}
    }`
    MathJax.Hub.getAllJax("lam_ell_inv")[0].Text(jax);
  }
}

