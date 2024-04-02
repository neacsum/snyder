
var sph = {
  set_fwd () {
    const r = document.getElementById("r_sph_in").value;
    const phi1 = document.getElementById("phi1_sph_in").value*D2R;
    const phi2 = document.getElementById("phi2_sph_in").value*D2R;
    const phi0 = document.getElementById("phi0_sph_in").value*D2R;
    const lam0 = document.getElementById("lam0_sph_in").value*D2R;
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lam_sph_in").value*D2R;

    let jax;
    let n;
    if (phi1!= phi2)
    {
      n = (Math.cos(phi1)-Math.cos(phi2))/(phi2-phi1);
      jax=`\\eqalign{
        n &= (\\cos${deg(phi1,false)}-\\cos${deg(phi2,false)})/[(${deg(phi2,false)}-${deg(phi1,false)})\\times\\pi/180^\\circ] \\cr
          &= ${fmt(n, true)}
      }`;
    }
    else
    {
      n = Math.sin(phi1);
      jax = `\\eqalign{
        n &= \\sin ${deg(phi1,false)} \\cr
          &= ${fmt(n,true)}
      }`
    }
    MathJax.Hub.getAllJax("n_sph")[0].Text(jax);

    const G = Math.cos(phi1)/n+phi1;
    jax =`\\eqalign{
      G &= (\\cos${deg(phi1,false)})/${fmt(n)} + ${deg(phi1,false)}\\times\\pi/180^\\circ \\cr
        &= ${fmt(G, true)}
    }`;
    MathJax.Hub.getAllJax("G_sph")[0].Text(jax);

    const rho0 = r*(G-phi0);
    jax = `\\eqalign{
      \\rho_0 &= ${fmt(r,false,0)}\\times(${fmt(G)}-${deg(phi0,false)}\\times\\pi/180^\\circ) \\cr
              &= ${fmt(rho0)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("rho0_sph")[0].Text(jax);

    const rho = r*(G-phi);
    jax = `\\eqalign{
      \\rho &= ${fmt(r,false,0)}\\times(${fmt(G)}-${deg(phi,false)}\\times\\pi/180^\\circ) \\cr
              &= ${fmt(rho)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("rho_sph")[0].Text(jax);

    const theta = n*(lam-lam0);
    jax = `\\eqalign{
      \\theta &= ${fmt(n)}\\times[${deg(lam,true)} - ${deg(lam0,false)}] \\cr
              &= ${deg(theta, true)}
    }`
    MathJax.Hub.getAllJax("theta_sph")[0].Text(jax);

    const x = rho*Math.sin(theta);
    jax = `\\eqalign{
      x &= ${fmt(rho)}\\sin${deg(theta)} \\cr
        &= ${fmt(x, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);
    document.getElementById ("x_sph_in").value = fmt(x);

    const y = rho0-rho*Math.cos(theta);
    jax = `\\eqalign{
      y &= ${fmt(rho0)}-${fmt(rho)}\\cos${deg(theta)}\\cr
        &= ${fmt(y, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
    document.getElementById ("y_sph_in").value = fmt(y);

    const k = (G-phi)*n/Math.cos(phi);
    jax = `\\eqalign{
      k &= (${fmt(G)}-${deg(phi,false)}\\times\\pi/180^\\circ)/\\cos${deg(phi,false)} \\cr
        &= ${fmt(k, true)}
    }`
    MathJax.Hub.getAllJax("k_sph")[0].Text(jax);

    this.set_inv ();
  },
  set_inv () {
    const r = document.getElementById("r_sph_in").value;
    const phi1 = document.getElementById("phi1_sph_in").value*D2R;
    const phi2 = document.getElementById("phi2_sph_in").value*D2R;
    const phi0 = document.getElementById("phi0_sph_in").value*D2R;
    const lam0 = document.getElementById("lam0_sph_in").value*D2R;
    const x = document.getElementById("x_sph_in").value;
    const y = document.getElementById("y_sph_in").value;

    let n;
    if (phi1 != phi2)
      n = (Math.cos(phi1)-Math.cos(phi2))/(phi2-phi1);
    else
      n = Math.sin(phi1);
    const G = Math.cos(phi1)/n+phi1;
    const rho0 = r*(G-phi0);
    let jax=`\\eqalign{
      n &= ${fmt(n,true)} \\cr
      G &= ${fmt(G,true)} \\cr
      \\rho_0 &= ${fmt(rho0, true)}\\;\\text{units}
    }`;
    MathJax.Hub.getAllJax("n_g_rho0_sph_inv")[0].Text(jax);

    const rho = Math.sign(n)*Math.sqrt(x**2 + (rho0-y)**2);
    jax = `\\eqalign{
      \\rho &= ${n<0?"-":"+"}[${fmt(x)}^2+(${fmt(rho0)}-${fmt(y)})^2]^{1/2} \\cr
            &= ${fmt(rho)}\\;\\text{units,}\\; \\text{${n<0?"negative because \\(n\\) is negative" : "positive because \\(n\\) is positive"}}
    }`
    MathJax.Hub.getAllJax("rho_sph_inv")[0].Text(jax);

    const theta = Math.atan2 (n>=0?x:-x, n>=0?(rho0-y):-(rho0-y));
    jax = `\\eqalign{
      \\theta &= \\arctan[${fmt(x)}/(${fmt(rho0)}-${fmt(y)})] \\cr
              &= ${deg(theta,true)}
    }`
    MathJax.Hub.getAllJax("theta_sph_inv")[0].Text(jax);

    const phi = G - rho/r;
    jax= `\\eqalign{
      \\phi &= [${fmt(G)} - ${fmt(rho)}/${fmt(r, false, 0)}]\\times 180^\\circ/\\pi \\cr
            &= ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("phi_sph_inv")[0].Text(jax);

    const lam = lam0 + theta/n;
    jax = `\\eqalign{
      \\lambda &= ${deg(lam0,false)} + ${deg(theta)}/${fmt(n)} \\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_sph_inv")[0].Text(jax);
  }
}
var ell = {
  a: 6378206.4,
  e2:  0.00676866,
  e: 0.0822719,

  select (ellip) {
    if (ellip == 0) { //Clarke-1866
      this.a = 6378206.4;
      inv_f = 294.9786982;
    } else if (ellip == 1) { //WGS-84
      this.a = 6378137.;
      inv_f = 298.257223563;
    }
    this.e2 = 2 / inv_f - 1 / inv_f ** 2;
    this.e = Math.sqrt(this.e2);
    document.getElementById("ellip_a").innerHTML = this.a + " m";
    document.getElementById("ellip_e2").innerHTML = this.e2.toFixed(7);
    document.getElementById("ellip_e").innerHTML = this.e.toFixed(7);

    this.set_fwd();
  },

  set_fwd () {
    const {a, e, e2} = this;
    const phi1 = document.getElementById("phi1_ell_in").value*D2R;
    const phi2 = document.getElementById("phi2_ell_in").value*D2R;
    const phi0 = document.getElementById("phi0_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam = document.getElementById("lam_ell_in").value*D2R;

    const m = Math.cos(phi)/Math.sqrt(1-e2*Math.sin(phi)**2);
    let jax=`\\eqalign{
      m &= \\cos${deg(phi,false)}/(1-${fmt(e2)}\\sin^2${deg(phi,false)})^{1/2} \\cr
          &= ${fmt(m, true)}
    }`;
    MathJax.Hub.getAllJax("m_ell")[0].Text(jax);

    const M=a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi) - 35*e2**3/3072*Math.sin(6*phi));
  
    jax=`\\eqalign{
    M =&${fmt(a,true,0)}[(1-${fmt(e2)}/4-3\\times ${fmt(e2)}^2/64 - 5\\times ${fmt(e2)}^3/256)\\times ${deg(phi,false)}\\times\\pi/180^\\circ \\\\
       &-(3\\times ${fmt(e2)}/8+3\\times ${fmt(e2)}^2/32 +45\\times${fmt(e2)}^3/1024)\\sin(2\\times${deg(phi,false)}) \\\\
       &+(15\\times ${fmt(e2)}^2/256 +45\\times ${fmt(e2)}^3/1024)\\sin(4\\times ${deg(phi,false)}) \\\\
       &-(35\\times ${fmt(e2)}^3/3072)\\sin(6\\times${deg(phi,false)})] \\\\
      =& ${fmt(M, true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("M_ell")[0].Text(jax);

    MathJax.Hub.getAllJax("phi1_ell1")[0].Text(`\\phi_1=${deg(phi1,true)}`);
    MathJax.Hub.getAllJax("phi_ell1")[0].Text(`${deg(phi,true)}`);
    const m1 = Math.cos(phi1)/Math.sqrt(1-e2*Math.sin(phi1)**2); 
    const M1=a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi1 - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi1)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi1) - 35*e2**3/3072*Math.sin(6*phi1));
    MathJax.Hub.getAllJax("m1_ell")[0].Text(`m_1=${fmt(m1,true)}`);
    MathJax.Hub.getAllJax("M1_ell")[0].Text(`M_1=${fmt(M1,true,2)}\\;\\text{m}`);

    MathJax.Hub.getAllJax("phi2_ell1")[0].Text(`\\phi_2=${deg(phi2,true)}`);
    MathJax.Hub.getAllJax("phi_ell2")[0].Text(`${deg(phi,true)}`);
    const m2 = Math.cos(phi2)/Math.sqrt(1-e2*Math.sin(phi2)**2); 
    const M2=a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi2 - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi2)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi2) - 35*e2**3/3072*Math.sin(6*phi2));
    MathJax.Hub.getAllJax("m2_ell")[0].Text(`m_2=${fmt(m2,true)}`);
    MathJax.Hub.getAllJax("M2_ell")[0].Text(`M_2=${fmt(M2,true,2)}\\;\\text{m}`);
  
    MathJax.Hub.getAllJax("phi0_ell1")[0].Text(`\\phi_0=${deg(phi0,true)}`);
    MathJax.Hub.getAllJax("phi_ell3")[0].Text(`${deg(phi,true)}`);
    const M0=a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi0 - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi0)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi0) - 35*e2**3/3072*Math.sin(6*phi0));
    MathJax.Hub.getAllJax("M0_ell")[0].Text(`M_0=${fmt(M0,true,2)}\\;\\text{m}`);

    let n;
    if (phi1 != phi2)
    {
      n = a*(m1-m2)/(M2-M1);
      jax = `\\eqalign{
        n &= ${fmt(a,false,0)}\\times(${fmt(m1)}-${fmt(m2)})/(${fmt(M2,false,2)}-${fmt(M1,false,2)}) \\cr
          &= ${fmt(n,true)}
      }`
    }
    else
    {
      n  = Math.sin(phi1);
      jax = `\\eqalign{
        n &= \\sin ${deg(phi1,false)} \\cr
          &= ${fmt(n,true)}
      }`
    }
    MathJax.Hub.getAllJax("n_ell")[0].Text(jax);

    const G = m1/n + M1/a;
    jax =`\\eqalign{
      G &= ${fmt(m1)}/${fmt(n)}+ ${fmt(M1,false,2)}/${fmt(a,false,0)} \\cr
        &= ${fmt(G)}
    }`
    MathJax.Hub.getAllJax("G_ell")[0].Text(jax);

    const rho0 = a*G-M0;
    jax = `\\eqalign{
      \\rho_0 &= ${fmt(a,false,0)}\\times ${fmt(G)} - ${fmt(M0,false, 2)} \\cr
              &= ${fmt(rho0,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho0_ell")[0].Text(jax);

    const rho = a*G-M;
    jax = `\\eqalign{
      \\rho &= ${fmt(a,false,0)}\\times ${fmt(G)} - ${fmt(M,false, 2)} \\cr
              &= ${fmt(rho,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho_ell")[0].Text(jax);

    const theta = n*(lam-lam0);
    jax = `\\eqalign{
      \\theta &= ${fmt(n)}\\times[${deg(lam,true)}-${deg(lam0,false)}] \\cr
              &= ${deg(theta,false)}
    }`
    MathJax.Hub.getAllJax("theta_ell")[0].Text(jax);

    const x = rho*Math.sin(theta);
    jax = `\\eqalign{
      x &= ${fmt(rho,false,2)}\\times \\sin ${deg(theta)} \\cr
        &= ${fmt(x,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("x_ell")[0].Text(jax);

    const y = rho0-rho*Math.cos(theta);
    jax = `\\eqalign{
      y &= ${fmt(rho0,false,2)} - ${fmt(rho,false,2)}\\times\\cos${deg(theta)} \\cr
        &= ${fmt(y,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("y_ell")[0].Text(jax);

    const k = (G-M/a)*(n/m);
    jax =`\\eqalign{
      k =& (${fmt(G)}-${fmt(M,false,2)}/${fmt(a,false,0)}) \\times ${fmt(n)}/${fmt(m)} \\cr
        =& ${fmt(k,true)}
    }`
    MathJax.Hub.getAllJax("k_ell")[0].Text(jax);

    document.getElementById("x_ell_in").value = fmt(x,true,2);
    document.getElementById("y_ell_in").value = fmt(y,true,2);
    this.set_inv ();
  },
  
  set_inv () {
    const {a, e, e2} = this;
    const phi1 = document.getElementById("phi1_ell_in").value*D2R;
    const phi2 = document.getElementById("phi2_ell_in").value*D2R;
    const phi0 = document.getElementById("phi0_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;

    const x = document.getElementById("x_ell_in").value;
    const y = document.getElementById("y_ell_in").value;

    const m1 = Math.cos(phi1)/Math.sqrt(1-e2*Math.sin(phi1)**2); 
    const M1=a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi1 - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi1)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi1) - 35*e2**3/3072*Math.sin(6*phi1));
   const m2 = Math.cos(phi2)/Math.sqrt(1-e2*Math.sin(phi2)**2); 
    const M2=a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi2 - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi2)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi2) - 35*e2**3/3072*Math.sin(6*phi2));
   const M0=a*((1-e2/4-3*e2**2/64-5*e2**3/256)*phi0 - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi0)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi0) - 35*e2**3/3072*Math.sin(6*phi0));
    let n;
    if (phi1 != phi2)
      n = a*(m1-m2)/(M2-M1);
    else
      n  = Math.sin(phi1);

    const G = m1/n + M1/a;
    const rho0 = a*G-M0;
    let jax = `\\eqalign{
      n &= ${fmt(n)} \\cr
      G &= ${fmt(G)} \\cr
      \\rho_0 &= ${fmt(rho0,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("n_g_rho0_invell")[0].Text(jax);

    const rho = Math.sign(n)*Math.sqrt(x**2 + (rho0-y)**2);
    jax = `\\eqalign{
      \\rho &= ${n<0?"-":"+"}[${fmt(x,false,0)}^2+(${fmt(rho0,false,2)}-${fmt(y,false,0)})^2]^{1/2} \\cr
            &= ${fmt(rho,true,2)}\\;\\text{m}\\; \\text{${n<0?"negative because \\(n\\) is negative" : "positive because \\(n\\) is positive"}}
    }`
    MathJax.Hub.getAllJax("rho_invell")[0].Text(jax);
   
    const theta = Math.atan2 (n>=0?x:-x, n>=0?(rho0-y):-(rho0-y));
    jax = `\\eqalign{
      \\theta &= \\arctan[${fmt(x,false,0)}/(${fmt(rho0,false,2)}-${fmt(y,false,0)})] \\cr
              &= ${deg(theta,true)}
    }`
    MathJax.Hub.getAllJax("theta_invell")[0].Text(jax);

    const M = a*G-rho;
    jax =`\\eqalign{
      M &= ${fmt(a,true,0)}\\times ${fmt(G)} - ${fmt(rho,false,2)} \\cr
        &= ${fmt(M,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("M_invell")[0].Text(jax);

    const mu = M/(a*(1-e2/4-3*e2**2/64-5*e2**3/256));
    jax = `\\eqalign{
      \\mu =& ${fmt(M,false,2)} /[${fmt(a,false,0)}\\times(1-${fmt(e2)}/4 \\cr
            & -3\\times${fmt(e2)}^2/64 - 5\\times${fmt(e2)}^3/256)] \\cr
           =& ${fmt(mu,true)} \\;\\text{radians} = ${deg(mu,true)} 
    }`
    MathJax.Hub.getAllJax("mu_invell")[0].Text(jax);

    const e1 = (1-Math.sqrt(1-e2))/(1+Math.sqrt(1-e2));
    jax = `\\eqalign{
      e_1 &= [1-(1-${fmt(e2)})^{1/2}]/[1+(1-${fmt(e2)})^{1/2}] \\cr
          &= ${fmt(e1,true,9)}
    }`
    MathJax.Hub.getAllJax("e1_invell")[0].Text(jax);

    const phi = mu + (3*e1/2-27*e1**3/32)*Math.sin(2*mu)+
      +(21*e1**2/16-55*e1**4/32)*Math.sin(4*mu)+
      +(151*e1**3/96)*Math.sin(6*mu)+1097*e1**4/512*Math.sin(8*mu);
    jax = `\\eqalign{
      \\phi =& ${deg(mu)}+[(3\\times${fmt(e1)}/2-27\\times${fmt(e1)}^3/32)\\sin(2\\times${deg(mu)}) \\cr
             &+(21\\times${fmt(e1)}^2/16-55\\times${fmt(e1)}^4/32)\\sin(4\\times${deg(mu)}) \\cr
             &+(151\\times${fmt(e1)}^3/96)\\sin(6\\times${deg(mu)}) \\cr
             &+(1097\\times${fmt(e1)}^4/512)\\sin(8\\times${deg(mu)})]\\times180^\\circ/\\pi \\cr
            =&${deg(phi,true)} 
    }`
    MathJax.Hub.getAllJax("phi_invell")[0].Text(jax);

    const lam = lam0 + theta/n
    jax = `\\eqalign{
      \\lambda &= ${deg(lam0,true)} + ${deg(theta)}/${fmt(n)} \\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_invell")[0].Text(jax);
 }
}