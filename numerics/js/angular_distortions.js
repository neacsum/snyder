
var ell = {
  a: 6378206.4,
  e2:  0.00676866,
  phi: 40*D2R,

  select (ellip) {
    if (ellip == 0) { //Clarke-1866
      this.a = 6378206.4;
      inv_f = 294.9786982;
    } else if (ellip == 1) { //WGS-84
      this.a = 6378137.;
      inv_f = 298.257223563;
    }
    this.e2 = 2/inv_f - 1/inv_f**2;
    this.set_phi ();
  },

  set_phi() {
    const {a,e2} = this;
    phi = document.getElementById("phi_in").value*D2R;

    const r_prime = a*(1-e2)/(1-e2*Math.sin(phi)**2)**(3/2);
    let jax = `\\eqalign{
      R' &= ${a}(1-${fmt(e2)})/(1-${fmt(e2)}\\sin^2${deg(phi)})^{3/2} \\cr
         &= ${fmt(r_prime,true,2)}\\;\\text{m}
    }`;
    MathJax.Hub.getAllJax("r_prime")[0].Text(jax);

    const l_phi = r_prime*Math.PI/180;
    jax = `L_\\phi = ${fmt(r_prime,false,2)} \\times \\pi/180^\\circ = ${fmt(l_phi,true,2)}\\text{m, the length of \\(1^\\circ\\) of latitude at lat. \\(${deg(phi)}\\)}`
    MathJax.Hub.getAllJax("L_phi")[0].Text(jax);
  
    const n = a/Math.sqrt(1-e2*Math.sin(phi)**2);
    jax = `\\eqalign {
      N &= ${fmt(a,true,0)}/(1-${fmt(e2)}\\sin^2 ${deg(phi)})^{1/2} \\cr
        &= ${fmt(n,true,2)}\\;\\text{m}
     }`
    MathJax.Hub.getAllJax("n_val")[0].Text(jax);

    const l_lam = n*Math.cos(phi)*Math.PI/180;
    jax = `\\eqalign{
      L_\\lambda &= [${fmt(a,true,0)}\\cos ${deg(phi)}/(1-${fmt(e2)}\\sin^2 ${deg(phi)})^{1/2}]\\pi/180^\\circ \\cr
               &= ${fmt(l_lam,true,2)} \\;\\text{m, the length of \\(1^\\circ\\) of longitude at lat. \\(${deg(phi)}\\)}
    }`
    MathJax.Hub.getAllJax("L_lambda")[0].Text(jax);
  }
}  
