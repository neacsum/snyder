var sph = {
  R: 1.0,
  lam0: -75*D2R,
  set_fwd () {
    this.R = document.getElementById("r_in").value;
    this.lam0 = document.getElementById("lam0_in").value*D2R;

    const {R, lam0} = this
    const phi = document.getElementById("phi_in").value*D2R;
    const lam = document.getElementById("lam_in").value*D2R;

    let jax;
    MathJax.Hub.getAllJax("phi0")[0].Text(deg(phi, true));

    let theta_prime = phi;
    let delta = -(theta_prime + Math.sin(theta_prime) - Math.PI*Math.sin(phi))/(1+Math.cos(theta_prime));
    jax = `\\eqalign{
      \\Delta\\theta' =& -[${deg(theta_prime)}+\\sin${deg(theta_prime)}-\\pi\\sin${deg(phi)}]/ \\cr
                & [1+\\cos${deg(theta_prime)}]\\times 180^\\circ/\\pi \\cr
               =& ${deg(delta, true)}
    }`
    MathJax.Hub.getAllJax("delta_1")[0].Text(jax);
    jax = `\\theta' = ${deg(theta_prime)} +${deg(delta)} = ${deg(theta_prime+delta, true)}` 
    MathJax.Hub.getAllJax("theta_prime_1")[0].Text(jax);
    theta_prime += delta;

    let i=0;
    var p = document.getElementById("iter");
    p.innerHTML = "$$ \\eqalign{"
    const epsilon = 1e-9
    while (Math.abs(delta) > epsilon && i<7)
    {
      delta = -(theta_prime + Math.sin(theta_prime) - Math.PI*Math.sin(phi))/(1+Math.cos(theta_prime));
      p.innerHTML += `\\Delta\\theta' &= ${deg(delta, true)}`;
      if (Math.abs(delta) > epsilon)
      {
        theta_prime += delta;
        p.innerHTML += `\\cr \n \\theta' &= ${deg(theta_prime, true)} \\cr`;
      }
      i++;
    }
    p.innerHTML += "} $$";

//    document.getElementById("iter").appendChild(p);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, p]);

    const theta = theta_prime/2;
    jax =`\\eqalign{
      \\theta &= ${deg(theta_prime,true)}/2 \\cr
              &= ${deg(theta, true)}
    }`
    MathJax.Hub.getAllJax("theta")[0].Text(jax);

    const x = Math.sqrt(8)/Math.PI*R*(lam-lam0)*Math.cos(theta);
    jax = `\\eqalign{
      x =& (8^{1/2}/\\pi)\\times${fmt(R,false,0)}\\times[${deg(lam, true)}-${deg(lam0)}]\\cos${deg(theta)}\\times\\pi/180^\\circ \\cr
        =& ${fmt(x, true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("x")[0].Text(jax);
    document.getElementById("x_in").value = fmt(x, true);

    const y = Math.sqrt(2)*R*Math.sin(theta);
    jax = `\\eqalign{
      y &= 2^{1/2}\\times${fmt(R,false,0)}\\times\\sin${deg(theta)} \\cr
        &= ${fmt(y, true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("y")[0].Text(jax);
    document.getElementById("y_in").value = fmt(y, true);
    this.set_inv();
  },

  set_inv () {
    const {R, lam0} = this;

    const x = +document.getElementById("x_in").value;
    const y = +document.getElementById("y_in").value;

    let jax;
    const theta = Math.asin(y/(Math.sqrt(2)*R));
    jax = `\\eqalign{
      \\theta &= \\arcsin[${fmt(y,true)}/(2^{1/2}\\times${fmt(R,false,0)})] \\cr
              &= ${deg(theta, true)}
    }`
    MathJax.Hub.getAllJax("inv_theta")[0].Text(jax);

    const phi = Math.asin((2*theta+Math.sin(2*theta))/Math.PI);
    jax = `\\eqalign{
      \\phi &= \\arcsin\\{[2\\times${deg(theta)}\\times\\pi/180^\\circ +\\sin[2\\times${deg(theta)}]]/\\pi\\} \\cr
            &= ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("inv_phi")[0].Text(jax);
  
    const lam = lam0 + Math.PI*x/(Math.sqrt(8)*Math.cos(theta));
    jax = `\\eqalign{
      \\lambda &= ${deg(lam0, true)}+\\pi\\times${fmt(x)}/[8^{1/2}\\cos${deg(theta)}]\\times180^\\circ/\\pi \\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("inv_lam")[0].Text(jax);
  }
}