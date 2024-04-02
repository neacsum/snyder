var sph = {
  r : 1, phi1 : 40*D2R, lam0 : -100*D2R,
  set_fwd () {
    this.r = document.getElementById("r_sph_in").value;
    this.phi1 = document.getElementById("phi1_sph_in").value*D2R;
    this.lam0 = document.getElementById("lam0_sph_in").value*D2R;

    const {r, lam0, phi1} = this
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lam_sph_in").value*D2R;

    let jax;
    const cosc = Math.sin(phi1)*Math.sin(phi)+Math.cos(phi1)*Math.cos(phi)*Math.cos(lam-lam0);
    jax = `\\eqalign{
      \\cos c &= \\sin ${deg(phi1)}\\sin${deg(phi)}+\\cos ${deg(phi1)}\\cos ${deg(phi)}\\cos(${deg(lam,true)}-${deg(lam0)}) \\cr
              &= ${fmt(cosc, true)}
    }`
    MathJax.Hub.getAllJax("cos_c")[0].Text(jax);
    if (cosc < 0) {
      document.getElementById("novis").style.display="block";
      document.getElementById("vis").style.display="none";
      return;
    }
    document.getElementById("vis").style.display="block";
    document.getElementById("novis").style.display="none";

    const x = r*Math.cos(phi)*Math.sin(lam-lam0);
    jax =`\\eqalign{
      x &= ${fmt(r,false,0)}\\cos${deg(phi)}\\sin(${deg(lam,true)}-${deg(lam0)}) \\cr
        &= ${fmt(x,true)}
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);
    document.getElementById("x_sph_in").value = fmt(x,true);

    const y = r*(Math.cos(phi1)*Math.sin(phi) - Math.sin(phi1)*Math.cos(phi)*Math.cos(lam-lam0));
    jax = `\\eqalign{
      y &= ${fmt(r,false,0)}[\\cos${deg(phi1)}\\sin${deg(phi)} - \\sin${deg(phi1)}\\cos${deg(phi)}\\cos(${deg(lam,true)}-${deg(lam0)})] \\cr
        &= ${fmt(y,true)}
    }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
    document.getElementById("y_sph_in").value = fmt(y,true);
  },
  set_inv () {
    const {r, phi1, lam0} = this;
    const x = document.getElementById("x_sph_in").value;
    const y = document.getElementById("y_sph_in").value;

    let jax;
    const rho = Math.sqrt(x**2+y**2)
    jax = `\\eqalign{
      \\rho &= [${fmt(x,false,0)}^2 + ${fmt(y,false,0)}]^{1/2} \\cr
            &= ${fmt(rho, true)}
    }`
    MathJax.Hub.getAllJax("rho_sph")[0].Text(jax);

    const c = Math.asin(rho/r);
    jax = `\\eqalign{
      c &= \\arcsin(${fmt(rho)}/${fmt(r,false,0)}) \\cr
        &= ${deg(c,true)}
    }`
    MathJax.Hub.getAllJax("c_sph")[0].Text(jax);

    const phi = Math.asin(Math.cos(c)*Math.sin(phi1)+y*Math.sin(c)*Math.cos(phi1)/rho);
    jax = `\\eqalign{
      \\phi =& \\arcsin[\\cos${deg(c)}\\sin${deg(phi1)} + ${fmt(y,false,0)}\\sin${deg(c)} \\cr
             & \\cos${deg(phi1)}/${fmt(rho)}] \\cr
            =& ${deg(phi, true)} 
    }`
    MathJax.Hub.getAllJax("phi_inv")[0].Text(jax);

    const lam = lam0 + Math.atan2(x*Math.sin(c), rho*Math.cos(phi1)*Math.cos(c) - y*Math.sin(phi1)*Math.sin(c));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)} + \\arctan[${fmt(x,true,0)}\\sin${deg(c)}/(${fmt(rho,true)} \\cr
                &\\cos${deg(phi1)}\\cos${deg(c)} - ${fmt(y,false,0)}\\sin${deg(phi1)} \\sin${deg(c)})] \\cr
               =& ${deg(lam, true)} 
    }`
    MathJax.Hub.getAllJax("lam_inv")[0].Text(jax);
  }
}