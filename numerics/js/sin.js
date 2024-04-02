var sph = {
  R: 1.0,
  lam0: -90*D2R,
  set_fwd () {
    this.R = document.getElementById("r_in").value;
    this.lam0 = document.getElementById("lam0_in").value*D2R;

    const {R, lam0} = this
    const phi = document.getElementById("phi_in").value*D2R;
    const lam = document.getElementById("lam_in").value*D2R;

    let jax;
    const x= R*(lam-lam0)*Math.cos(phi);
    jax =`\\eqalign{
      x &= ${fmt(R, false,0)}\\times[${deg(lam,true)}-${deg(lam0)}]\\cos${deg(phi)} \\cr
        &= ${fmt(x,true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("x")[0].Text(jax);
    document.getElementById("x_in").value = fmt(x,true);

    const y = R*phi;
    jax = `\\eqalign{
      y &= ${fmt(R, false,0)}\\times${deg(phi)}\\times\\pi/180^\\circ \\cr
        &= ${fmt(y, true)}\\text{ units}
    }`
    document.getElementById("y_in").value = fmt(y,true);
    MathJax.Hub.getAllJax("y")[0].Text(jax);

    const h = Math.sqrt(1+(lam-lam0)**2*Math.sin(phi)**2);
    jax = `\\eqalign{
      h &= \\{1+ [${deg(lam,true)}-${deg(lam0)}]^2\\times(\\pi/180^\\circ)^2\\times\\sin^2${deg(phi)} \\}^{1/2} \\cr
        &= ${fmt(h, true)}
    }`
    MathJax.Hub.getAllJax("h")[0].Text(jax);

    const theta_prime = Math.asin(1/h);
    jax = `\\eqalign{
      \\theta' &= \\arcsin(1/${fmt(h)}) \\cr
               &= ${deg(theta_prime, true)}
    }`
    MathJax.Hub.getAllJax("theta_prime")[0].Text(jax);

    const omega = 2*Math.atan(Math.abs((lam-lam0)*Math.sin(phi)/2));
    jax = `\\eqalign{
      \\omega &= 2\\arctan[(1/2)[${deg(lam,true)}-${deg(lam0)}]\\times(\\pi/180^\\circ)\\times\\sin${deg(phi)}] \\cr
              &= ${deg(omega, true)}
    }`
    MathJax.Hub.getAllJax("omega")[0].Text(jax);

    this.set_inv ();
  },

  set_inv() {
    const {R, lam0} = this;

    const x = +document.getElementById("x_in").value;
    const y = +document.getElementById("y_in").value;

    let jax;
    const phi = y/R;
    jax =`\\eqalign{
      \\phi &= (${fmt(y,true)}/${fmt(R,true,0)})\\times180^\\circ/\\pi \\cr
            &= ${deg(phi, true)}
    }`
    MathJax.Hub.getAllJax("phi")[0].Text(jax);

    const lam = lam0 + x/(R*Math.cos(phi));
    jax = `\\eqalign{
      \\lambda &= ${deg(lam0,true)}+${fmt(x)}/[${fmt(R,true,0)}\\cos${deg(phi)}]\\times180^\\circ/\\pi \\cr
               &= ${deg(lam,true)}
    }`
    MathJax.Hub.getAllJax("lam")[0].Text(jax);

  }
}

var ell = {
  a: 6378206.4,
  e2: 0.00676866,
  e: 0.0822719,
  lam0: -90*D2R,

  //series for length of meridional arc (eq 3-21)
  marc (phi) {
  const {a, e2} = this;
  return a*((1-e2/4-3/64*e2**2-5/256*e2**3)*phi -
    (3/8*e2+3/32*e2**2+45/1024*e2**3)*Math.sin(2*phi) +
    (15/256*e2**2 + 45/1024*e2**3)*Math.sin(4*phi) - 35/2072*e2**3*Math.sin(6*phi));
  }, 

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
    MathJax.Hub.getAllJax("ell_a")[0].Text(`a=${this.a}`);
    MathJax.Hub.getAllJax("ell_e2")[0].Text(`e^2=${fmt(this.e2)}`);
    this.set_fwd ();
  },

  set_fwd () {
    this.lam0 = document.getElementById ("ell_lam0_in").value*D2R;

    const {a, e2, lam0} = this;

    const phi = document.getElementById("ell_phi_in").value*D2R;
    const lam = document.getElementById("ell_lam_in").value*D2R;

    x = a*(lam-lam0)*Math.cos(phi)/Math.sqrt(1-e2*Math.sin(phi)**2);
    let jax = `\\eqalign{
      x =& ${fmt(a,true,0)}\\times[${deg(lam, true)}-${deg(lam0)}]\\times(\\pi/180^\\circ)\\cos${deg(phi)}/ \\cr
         & [1-${fmt(e2)}\\sin^2${deg(phi)}]^{1/2} \\cr
        =& ${fmt(x, true, 2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("ell_x")[0].Text(jax);
    document.getElementById("ell_x_in").value = fmt(x,true,2);

    const M = this.marc(phi);
    jax = `\\eqalign{
      M =& ${fmt(a,true,0)}\\times[(1-${fmt(e2)}/4-3\\times${fmt(e2)}^2/64 \\cr
         & -5\\times${fmt(e2)}^3/256)\\times ${deg(phi)}\\times \\pi/180^\\circ \\cr
         & -(3\\times${fmt(e2)}/8+3\\times${fmt(e2)}^2/32 \\cr
         & +45\\times${fmt(e2)}^3/1024)\\times\\sin(2\\times${deg(phi)}) \\cr
         & +(15\\times${fmt(e2)}^2/256+45\\times${fmt(e2)}^3/1024) \\cr
         & \\times \\sin(4\\times${deg(phi)}) -(35\\times${fmt(e2)}^3/3072) \\cr
         & \\times\\sin(6\\times${deg(phi)})] \\cr
        =& ${fmt(M, true, 2)}\\;\\text{m} 
    }`
    MathJax.Hub.getAllJax("ell_M")[0].Text(jax);

    const y = M;
    jax =`\\eqalign{y =& ${fmt(M,true,2)}\\text{ m} }`;
    MathJax.Hub.getAllJax("ell_y")[0].Text(jax);
    document.getElementById("ell_y_in").value = fmt(y,true,2);
  },
  set_inv () {
    const {a, e, e2, phi0, lam0} = this;
    const x = +document.getElementById("ell_x_in").value;
    const y = +document.getElementById("ell_y_in").value;

    const M = y;
    let jax = `M = ${fmt(y,true,0)}`
    MathJax.Hub.getAllJax("ellinv_M")[0].Text(jax);

    const mu = M/(a*(1-e2/4-3*e2**2/64-5*e2**3/256));
    jax = `\\eqalign{
      \\mu =& ${fmt(M,true,2)} /[${fmt(a,false,0)}\\times(1-${fmt(e2)}/4 \\cr
            & -3\\times${fmt(e2)}^2/64 - 5\\times${fmt(e2)}^3/256)] \\cr
           =& ${fmt(mu, true)} \\;\\text{radians} = ${deg(mu,true)} 
    }`
    MathJax.Hub.getAllJax("ellinv_mu")[0].Text(jax);

    const e1 = (1-Math.sqrt(1-e2))/(1+Math.sqrt(1-e2));
    jax = `\\eqalign{
      e_1 &= [1-(1-${fmt(e2)})^{1/2}]/[1+(1-${fmt(e2)})^{1/2}] \\cr
          &= ${fmt(e1,true,9)}
    }`
    MathJax.Hub.getAllJax("ellinv_e1")[0].Text(jax);

    const phi = mu + (3*e1/2-27*e1**3/32)*Math.sin(2*mu)+
      +(21*e1**2/16-55*e1**4/32)*Math.sin(4*mu)+
      +(151*e1**3/96)*Math.sin(6*mu)+1097*e1**4/512*Math.sin(8*mu);
    jax = `\\eqalign{
      \\phi =& ${deg(mu,true)}+[(3\\times${fmt(e1)}/2-27\\times${fmt(e1)}^3/32)\\sin(2\\times${deg(mu)}) \\cr
             &+(21\\times${fmt(e1)}^2/16-55\\times${fmt(e1)}^4/32)\\sin(4\\times${deg(mu)}) \\cr
             &+(151\\times${fmt(e1)}^3/96)\\sin(6\\times${deg(mu)}) \\cr
             &+(1097\\times${fmt(e1)}^4/512)\\sin(8\\times${deg(mu)})]\\times180^\\circ/\\pi \\cr
            =&${deg(phi,true)} 
    }`
    MathJax.Hub.getAllJax("ellinv_phi")[0].Text(jax);

    const lam = lam0 + x*Math.sqrt(1-e2*Math.sin(phi)**2)/(a*Math.cos(phi));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)}+\\{${fmt(x,true,0)}\\times[1-${fmt(e2)}\\sin^2${deg(phi)}]^{1/2}/ \\cr
                & [${fmt(a,false,0)}\\cos${deg(phi)}]\\}\\times(180^\\circ/\\pi) \\cr
               =& ${deg(lam,true)} 
    }`
    MathJax.Hub.getAllJax("ellinv_lam")[0].Text(jax);
  }
}