var sph = {
  r : 1, phi1 : 40*D2R, lam0 : -75*D2R,
  set_fwd () {
    this.r = document.getElementById("r_sph_in").value;
    this.phi1 = document.getElementById("phi1_sph_in").value*D2R;
    this.lam0 = document.getElementById("lam0_sph_in").value*D2R;

    const {r, lam0, phi1} = this
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lam_sph_in").value*D2R;

    let jax;
    const rho = r*(1/Math.tan(phi1) + phi1 - phi);
    jax = `\\eqalign{
      \\rho &= ${fmt(r, true,0)}\\times[\\cot ${deg(phi1)} +(${deg(phi1)} - ${deg(phi)})\\times \\pi/180^\\circ] \\cr
            &= ${fmt(rho, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("rho_sph")[0].Text(jax);

    const E = r*(lam-lam0)*Math.cos(phi)/rho;
    jax = `\\eqalign{
      E &= ${fmt(r, true,0)}\\times[${deg(lam,true)}-${deg(lam0)}]\\cos${deg(phi)}/${fmt(rho)} \\cr
        &= ${deg(E, true)}
    }`
    MathJax.Hub.getAllJax("E_sph")[0].Text(jax);

    const x = rho*Math.sin(E);
    jax = `\\eqalign{
      x &= ${fmt(rho)}\\sin ${deg(E)} \\cr
        &= ${fmt(x, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);
    document.getElementById("x_sph_in").value = fmt(x,true)

    const y = r/Math.tan(phi1) - rho*Math.cos(E);
    jax = `\\eqalign{
      y &= ${fmt(r,true,0)}\\cot ${deg(phi1)} - ${fmt(rho)}\\cos${deg(E)} \\cr
        &= ${fmt(y, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
    document.getElementById("y_sph_in").value = fmt(y,true);

    this.set_inv ();
  },

  set_inv() {
    const {r, phi1, lam0} = this;
    const x = document.getElementById("x_sph_in").value;
    const y = document.getElementById("y_sph_in").value;

    let jax;
    const rho = Math.sqrt(x**2+(r/Math.tan(phi1)-y)**2)*Math.sign(phi1);
    jax = `\\eqalign{
      \\rho &= ${phi1<0?"-":""}[${fmt(x,false,0)}^2 + (${fmt(r,true,0)}\\cot${deg(phi1)}-${fmt(y,false,0)})^2]^{1/2} \\cr
            &= ${fmt(rho, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("rho_sph_inv")[0].Text(jax);

    const phi = 1/Math.tan(phi1) + phi1 - rho/r;
    jax = `\\eqalign{
      \\phi &= (\\cot${deg(phi1)})\\times 180^\\circ/\\pi + ${deg(phi1)} -(${fmt(rho)}/${fmt(r,true,0)})\\times 180^\\circ/\\pi \\cr
            &= ${deg(phi)}
    }`
    MathJax.Hub.getAllJax("phi_sph_inv")[0].Text(jax);

    const lam = lam0 + rho*Math.atan2(x*Math.sign(phi1), (r/Math.tan(phi1)-y)*Math.sign(phi1))/(r*Math.cos(phi));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)} + ${fmt(rho)}\\times\\{\\arctan[${fmt(x,true,0)}/(${fmt(r,true,0)}\\cot${deg(phi1)}) \\cr
                & - ${fmt(y,false,0)}]\\}/(${fmt(r,true,0)}\\cos${deg(phi)}) \\cr
               =& ${deg(lam,true)}
    }`
    MathJax.Hub.getAllJax("lam_sph_inv")[0].Text(jax);
  }
}

var ell = {
  a: 6378206.4,
  e2:  0.00676866,
  e: 0.0822719,

  m(phi) {
    return Math.cos(phi)/Math.sqrt(1-this.e2*Math.sin(phi)**2);
  },
  M (phi) {
    return this.a*((1-this.e2/4-3*this.e2**2/64-5*this.e2**3/256)*phi 
    - (3*this.e2/8+3*this.e2**2/32+45*this.e2**3/1024)*Math.sin(2*phi)
    + (15*this.e2**2/256+45*this.e2**3/1024)*Math.sin(4*phi)
    - 35*this.e2**3/3072*Math.sin(6*phi))
  },  
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
    let jax;
    const phi1 = document.getElementById("phi1_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam = document.getElementById("lam_ell_in").value*D2R;

    const m = this.m(phi);
    jax = `\\eqalign{
      m &= \\cos ${deg(phi)}/(1-${fmt(e2)}\\sin^2${deg(phi)}) \\cr
        &= ${fmt(m)}
    }`
    MathJax.Hub.getAllJax("m_fwd")[0].Text(jax);

    const M= this.M(phi);
    jax=`\\eqalign{
      M =&${fmt(a,false,0)}[(1-${fmt(e2)}/4-3\\times ${fmt(e2)}^2/64 - 5\\times ${fmt(e2)}^3/256)\\times ${deg(phi)}\\times\\pi/180^\\circ \\cr
       &-(3\\times ${fmt(e2)}/8+3\\times ${fmt(e2)}^2/32 +45\\times${fmt(e2)}^3/1024)\\sin(2\\times${deg(phi)}) \\cr
       &+(15\\times ${fmt(e2)}^2/256 +45\\times ${fmt(e2)}^3/1024)\\sin(4\\times ${deg(phi)}) \\cr
       &-(35\\times ${fmt(e2)}^3/3072)\\sin(6\\times${deg(phi)})] \\cr
      =& ${fmt(M ,false,2)}\\;\\text{m}
    }`;
    MathJax.Hub.getAllJax("M_fwd")[0].Text(jax);

    MathJax.Hub.getAllJax("phi1")[0].Text(`\\phi_1 = ${deg(phi1,true)}`);
    MathJax.Hub.getAllJax("phi")[0].Text(`${deg(phi,true)}`);

    const m1 = this.m(phi1);
    MathJax.Hub.getAllJax("m1_fwd")[0].Text(`m_1 = ${fmt(m1, true)}`);

    const M1 = this.M(phi1);
    MathJax.Hub.getAllJax("M1_fwd")[0].Text(`M_1 = ${fmt(M1,true,2)}\\;\\text{m}`);
    
    const rho = a*m1/Math.sin(phi1) + M1 - M;
    jax = `\\eqalign{
      \\rho &= ${fmt(a,true,0)}\\times${fmt(m1)}/\\sin${deg(phi1)}+${fmt(M1,false,2)}-${fmt(M,false,2)} \\cr
            &= ${fmt(rho, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho_ell")[0].Text(jax);

    const E = a*m*(lam-lam0)/rho;
    jax =`\\eqalign{
      E &= ${fmt(a,true,2)}\\times${fmt(m)}\\times[${deg(lam0,true)} - ${deg(lam)}]/${fmt(rho,true,2)} \\cr
        &= ${deg(E, true)}
    }`
    MathJax.Hub.getAllJax("E_ell")[0].Text(jax);

    const x = rho*Math.sin(E);
    jax = `\\eqalign{
      x &= ${fmt(rho,true,2)}\\sin${deg(E)} \\cr
        &= ${fmt(x, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("x_ell")[0].Text(jax);
    document.getElementById("x_ell_in").value = fmt(x,true,2);

    const y = a*m1/Math.sin(phi1) - rho*Math.cos(E)
    jax = `\\eqalign{
      y &= ${fmt(a,true,2)}\\times${fmt(m1)}\\sin${deg(phi1)}-${fmt(rho,true,2)}\\cos${deg(E)} \\cr
        &= ${fmt(y, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("y_ell")[0].Text(jax);
    document.getElementById("y_ell_in").value = fmt(y,true,2);
  },

  set_inv () {
    const {a, e, e2} = this;
    let jax;
    const phi1 = document.getElementById("phi1_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;
    const x = +document.getElementById("x_ell_in").value;
    const y = +document.getElementById("y_ell_in").value;

    const m1 = this.m(phi1);
    MathJax.Hub.getAllJax("m1_inv")[0].Text(`m_1 = ${fmt(m1,false)}`);

    const M1 = this.M(phi1);
    MathJax.Hub.getAllJax("M1_inv")[0].Text(`M_1 = ${fmt(M1,false,2)}\\;\\text{m}`);
    
    const rho = Math.sqrt(x**2+(a*m1/Math.sin(phi1)-y)**2)*Math.sign(phi1);
    jax = `\\eqalign{
      \\rho &= ${phi1<0?"-":""}[${fmt(x,false,0)}^2+(${fmt(a,true,0)}\\times${fmt(m1)}/\\sin${deg(phi1)} - ${fmt(y,false,0)})^2]^{1/2} \\cr
            &= ${fmt(rho, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho_ell_inv")[0].Text(jax);

    const M = a*m1/Math.sin(phi1)+M1-rho;
    jax = `\\eqalign{
      M &= ${fmt(a,true,0)}\\times${fmt(m1)}/\\sin${deg(phi1)} + ${fmt(M1,false,2)} - ${fmt(rho, false, 2)} \\cr
        &= ${fmt(M, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("M_ell_inv")[0].Text(jax);

    const mu = M/(a*(1-e2/4-3*e2**2/64-5*e2**3/256));
    jax = `\\eqalign{
      \\mu =& \\{${fmt(M, true, 2)}/[${fmt(a,true,0)}\\times(1-${fmt(e2)}/4 \\cr
            & -3\\times${fmt(e2)}^2/64 - 5\\times${fmt(e2)}^3/256)]\\} \\times 180^\\circ/\\pi \\cr
           =& ${deg(mu, true)} 
    }`
    MathJax.Hub.getAllJax("mu")[0].Text(jax);

    const e1 = (1-Math.sqrt(1-e2))/(1+Math.sqrt(1-e2));
    jax = `\\eqalign{
      e_1 &= [1-(1-${fmt(e2)})^{1/2}]/[1+(1-${fmt(e2)})^{1/2}] \\cr
          &= ${fmt(e1, true,9)}
    }`
    MathJax.Hub.getAllJax("e1")[0].Text(jax);

    const phi = mu + (3*e1/2-27*e1**3/32)*Math.sin(2*mu) + (21*e1**2/16 - 55*e1**4/32)*Math.sin(4*mu) + 151*e1**3/96*Math.sin(6*mu)+1097*e1**4/512*Math.sin(8*mu);
    jax = `\\eqalign{
      \\phi =& ${deg(mu, true)} +[(3\\times${fmt(e1)}/2 - 27\\times ${fmt(e1)}^3/32)\\sin(2\\times${deg(mu)}) \\cr
             & + (21\\times ${fmt(e1)}^2/16-55\\times${fmt(e1)}^4/32)\\sin(4\\times${deg(mu)}) \\cr
             & + (151\\times${fmt(e1)}^3/96)\\sin(6\\times${deg(mu)}) \\cr
             & + (1097\\times${fmt(e1)}^4/512)\\sin(8\\times${deg(mu)})]\\times180^\\circ/\\pi \\cr
            =& ${deg(phi, true)} 
    }`
    MathJax.Hub.getAllJax("phi_ell_inv")[0].Text(jax);

    const m = Math.cos(phi)/Math.sqrt(1-e2*Math.sin(phi)**2);
    jax = `\\eqalign{
      m &= \\cos${deg(phi)}/(1-${fmt(e2)}\\sin^2 ${deg(phi)})^{1/2} \\cr
        &= ${fmt(m, true)}
    }`
    MathJax.Hub.getAllJax("m_inv")[0].Text(jax);

    const lam = lam0 + rho * Math.atan2(x*Math.sign(phi1), (a*m1/Math.sin(phi1)-y)*Math.sign(phi1))/(a*m);
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)} + \\{ ${fmt(rho, false, 0)}\\times \\arctan[${fmt(x,true,0)}/ \\cr
                & (${fmt(a, true,0)}\\times${fmt(m1)}/\\sin${deg(phi1)}-${fmt(y,false,0)})]/ \\cr
                & (${fmt(a,true,0)}\\times ${fmt(m)})\\}\\times 180^\\circ/\\pi \\cr
               =& ${deg(lam, true)} 
    }`
    MathJax.Hub.getAllJax("lam_ell_inv")[0].Text(jax);
  }
}