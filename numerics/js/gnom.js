var sph = {
  r : 1, phi1 : 40*D2R, lam0 : -100*D2R,
  set_fwd () {
    this.r = document.getElementById("r_sph_in").value;
    this.phi1 = document.getElementById("phi1_sph_in").value*D2R;
    this.lam0 = document.getElementById("lam0_sph_in").value*D2R;

    const {r, lam0, phi1} = this
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lam_sph_in").value*D2R;

    const cosc  = Math.sin(phi1)*Math.sin(phi)+Math.cos(phi1)*Math.cos(phi)*Math.cos(lam-lam0);
    let jax = `\\eqalign{
      \\cos c &= \\sin ${deg(phi1,false)} \\sin ${deg(phi,false)} + \\cos ${deg(phi1,false)} \\cos ${deg(phi,false)} \\cos [${deg(lam,true)}-${deg(lam0,false)}] \\cr
              &= ${fmt(cosc)}
    }`
    MathJax.Hub.getAllJax("cosc")[0].Text(jax);
    if (cosc <= 0) {
      document.getElementById("vis").style = "display:none";
      document.getElementById("not_vis").style = "display:block";
      return;
    } else {
      document.getElementById("not_vis").style = "display:none";
      document.getElementById("vis").style = "display:block";
    }
    const kprime = 1/cosc;
    jax = `\\eqalign{
      k' &= 1/${fmt(cosc)} \\cr
         &= ${fmt(kprime)} 
    }`
    MathJax.Hub.getAllJax("kprime")[0].Text(jax);

    const x = r*kprime*Math.cos(phi)*Math.sin(lam-lam0);
    jax = `\\eqalign{
      x &= ${fmt(r,false,0)}\\times${fmt(kprime)}\\cos ${deg(phi,false)}\\sin[${deg(lam,true)}-${deg(lam0,false)}] \\cr
        &= ${fmt(x,true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);

    const y = r*kprime*(Math.cos(phi1)*Math.sin(phi) - Math.sin(phi1)*Math.cos(phi)*Math.cos(lam-lam0));
    jax = `\\eqalign{
      y =& ${fmt(r,false,0)}\\times${fmt(kprime)}\\times\\{\\cos${deg(phi1,false)}\\sin${deg(phi,false)} - \\sin${deg(phi1,false)} \\cr
         & \\cos${deg(phi,false)}\\cos[${deg(lam,true)}-${deg(lam0,false)}] \\} \\cr
        =& ${fmt(y, true)}\\text{ units} 
    }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
  },
  set_inv () {
    const {r, phi1, lam0} = this;
    const x = document.getElementById("x_sph_in").value;
    const y = document.getElementById("y_sph_in").value;

    let jax;

    const rho = Math.sqrt(x**2 + y**2);
    jax = `\\eqalign{
      \\rho &= [${fmt(x,false,0)}^2 + ${fmt(y,false,0)}^2]^{1/2} \\cr
            &= ${fmt(rho)} \\text{ units}
    }
    `
    MathJax.Hub.getAllJax("rho")[0].Text(jax);

    const c = Math.atan(rho/r);
    jax = `\\eqalign{
      c &= \\arctan(${fmt(rho)}/${fmt(r,false,0)}) \\cr
        &= ${deg(c, true)}
    }`
    MathJax.Hub.getAllJax("c")[0].Text(jax);

    const phi = Math.asin(Math.cos(c)*Math.sin(phi1)+(y*Math.sin(c)*Math.cos(phi1)/rho));
    jax = `\\eqalign{
      \\phi =& \\arcsin[\\cos${deg(c)}\\sin${deg(phi1,false)}+${fmt(y,false,0)}\\cr
             & \\sin${deg(c)}\\cos${deg(phi1,false)}/${fmt(rho)}]\\cr
            =& ${deg(phi, true)} 
    }`
    MathJax.Hub.getAllJax("phi_inv")[0].Text(jax);

    const lam = lam0 + Math.atan2(x*Math.sin(c), rho*Math.cos(phi1)*Math.cos(c)-y*Math.sin(phi1)*Math.sin(c));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)} +\\arctan[${fmt(x,true,0)}\\sin${deg(c)}/ \\cr
                & (${fmt(rho)}\\cos${deg(phi1,false)}\\cos${deg(c)} - ${fmt(y,false,0)} \\cr
                & \\sin${deg(phi1,false)}\\sin${deg(c)})] \\cr
               =& ${deg(lam0,true)} +\\arctan(${fmt(x*Math.sin(c), true)}/${fmt(rho*Math.cos(phi1)*Math.cos(c)-y*Math.sin(phi1)*Math.sin(c))}) \\cr
               =& ${deg(lam,true)}
    }`
    MathJax.Hub.getAllJax("lam_inv")[0].Text(jax);
  }
}