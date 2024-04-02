var sph = {
  set_fwd () {
    const r = document.getElementById("r_sph_in").value;
    const lam0 = document.getElementById("lam0_sph_in").value*D2R;
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lam_sph_in").value*D2R;

    const x = r*(lam-lam0);
    let jax = `\\eqalign{
      x &= ${fmt(r,true, 0)}\\times[${deg(lam,true)}-${deg(lam0)}]\\times\\pi/180^\\circ \\cr
        &= ${fmt(x, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);

    const y = r*Math.log(Math.tan(Math.PI/4+0.4*phi))/0.8;
    jax = `\\eqalign{
      y =& ${fmt(r,true, 0)}\\times[\\ln{\\tan(45^\\circ+0.4\\times${deg(phi)})}]/0.8 \\cr
        =& (\\ln{\\tan ${deg(Math.PI/4+0.4*phi)}})/0.8 \\cr
        =& ${fmt(y, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
    const y1 = r*Math.asinh(Math.tan(0.8*phi))/0.8;
    jax = `\\eqalign{
      y &= ${fmt(r,true, 0)}\\times\\{\\arcsinh[\\tan(0.8\\times${deg(phi)})]\\}/0.8 \\cr
        &= ${fmt(r,true, 0)}\\times\\arcsinh{${fmt(Math.tan(0.8*phi))}}/0.8 \\cr
        &= ${fmt(y1, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("y_sph1")[0].Text(jax);
    const h = 1/Math.cos(0.8*phi);
    MathJax.Hub.getAllJax("h_sph")[0].Text(`h = \\sec(0.8\\times${deg(phi)}) = 1/\\cos${deg(0.8*phi)} = ${fmt(h, true)}`);

    const k = 1/Math.cos(phi);
    MathJax.Hub.getAllJax("k_sph")[0].Text(`k = \\sec${deg(phi)} = 1/\\cos${deg(phi)} = ${fmt(k, true)}`);
    const somega = (Math.cos(0.8*phi)-Math.cos(phi))/(Math.cos(0.8*phi)+Math.cos(phi));
    jax = `\\eqalign{
      \\sin{1/2\\omega} &= [\\cos(0.8\\times${deg(phi)}) - \\cos${deg(phi)}]/[\\cos(0.8\\times${deg(phi)}) + \\cos${deg(phi)}] \\cr
                        &= ${fmt(somega, true)}
    }`
    MathJax.Hub.getAllJax("somega_sph")[0].Text(jax);
    const omega = 2*Math.asin(somega);
    MathJax.Hub.getAllJax("omega_sph")[0].Text(`\\omega=${deg(omega, true)}`);
    document.getElementById("x_sph_in").value = fmt(x, true);
    document.getElementById("y_sph_in").value = fmt(y, true);
    this.set_inv (x, y);
  },

  set_inv () {
    const r = document.getElementById("r_sph_in").value;
    const lam0 = document.getElementById("lam0_sph_in").value*D2R;
    const x = +document.getElementById("x_sph_in").value;
    const y = +document.getElementById("y_sph_in").value;

    const phi = 2.5*Math.atan(Math.exp(0.8*y/r)) - 5*Math.PI/8;
    let jax = `\\eqalign{
      \\phi &= 2.5\\arctan \\mathrm{e}^{0.8\\times${fmt(y,false, 0)}/${fmt(r,true,0)}}-(5\\pi/8)\\times180^\\circ/\\pi \\cr
            &= 2.5\\arctan \\mathrm{e}^{${fmt(0.8*y/r)}} - ${fmt(5*Math.PI/8)}\\times180^\\circ/\\pi \\cr
            &= 2.5\\arctan (${fmt(Math.exp(0.8*y/r))})  - ${fmt(5*Math.PI/8)}\\times180^\\circ/\\pi \\cr
            &= 2.5\\times${deg(Math.atan(Math.exp(0.8*y/r)))} - ${deg(5*Math.PI/8)} \\cr
            &= ${deg(phi, true)}
    }`
    MathJax.Hub.getAllJax("phi_sph")[0].Text(jax);

    const phi1 = Math.atan (Math.sinh(0.8*y/r))/0.8
    jax = `\\eqalign{
      \\phi &= \\arctan[\\sinh(0.8\\times${fmt(y,false, 0)}/${fmt(r,false, 0)})]/0.8 \\cr
            &= \\arctan ${fmt(Math.sinh(0.8*y/r))}/0.8 \\cr
            &= ${deg(phi1, true)}
    }`
    MathJax.Hub.getAllJax("phi_sph1")[0].Text(jax);

    const lam = lon_adj(lam0+x/r);
    jax =`\\eqalign{
      \\lambda &= ${deg(lam0,true)} + (${fmt(x, true, 0)}/${fmt(r, false, 0)})\\times 180^\\circ/\\pi \\cr
               &= ${deg(lam0,true)} + ${deg(x/r)} \\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_sph")[0].Text(jax);
  }
}