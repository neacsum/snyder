var sphere = {
  r:1,
  lam0: -180.*D2R,
  set_fwd () {
    this.r = document.getElementById("r_in").value;
    this.lam0 = Number(document.getElementById ("lam0_sph_in").value)*D2R;

    const {r, lam0} = this;
    const phi = document.getElementById("phi_in").value*D2R;
    const lam = document.getElementById("lambda_in").value*D2R;  
    const x = r*(lam-lam0);
    let jax = `\\eqalign {
      x &= \\pi\\times${r}\\times[${deg(lam,true)} - ${deg(lam0)}]/180^\\circ \\cr
        &= ${fmt(x, true)}\\; \\text{units}
      }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);
  
    const y = r*Math.log(Math.tan(Math.PI/4+phi/2));
    jax = `\\eqalign {
      y &= ${r}\\times\\ln\\tan(45^\\circ+${deg(phi)}/2) = ${r}\\times\\ln\\tan(${deg(Math.PI/4+(phi/2))}) \\cr
        &= ${r}\\times \\ln ${fmt(Math.tan(Math.PI/4+phi/2))} = ${fmt(y,true)}\\;\\text{units}
      }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
  
    jax =`h = k = \\sec ${deg(phi)} = 1/\\cos ${deg(phi)} = 1/${fmt(Math.cos(phi))} = ${fmt(1/Math.cos(phi), true)}`
    MathJax.Hub.getAllJax("k_sph")[0].Text(jax);
  
    document.getElementById("x_sph_in").value = fmt(x,true);
    document.getElementById("y_sph_in").value = fmt(y,true);
    this.set_inv ();  
  },
  set_inv () {
    const {r, lam0} = this;
    let x = document.getElementById("x_sph_in").value;
    let y = document.getElementById("y_sph_in").value;
    let phi = (Math.PI/2 - 2*Math.atan(Math.exp(-y/r)));
    let lam = lon_adj(x/r+lam0);
    let jax = `\\eqalign{
      \\phi &= 90^\\circ - 2\\arctan(\\mathrm{e}^{-${y}/${r}}) \\cr
            &= 90^\\circ - 2\\arctan(${fmt(Math.exp(-y/r))}) \\cr
            &= 90^\\circ - 2\\times${deg(Math.atan(Math.exp(-y/r)))} =
            ${deg(phi, true)}
      }`
    MathJax.Hub.getAllJax("phi_inv")[0].Text(jax);
    jax = `\\lambda = (${x}/${r})\\times180^\\circ/\\pi+${deg(lam0)}=${deg(lam, true)}`
    MathJax.Hub.getAllJax("lambda_inv")[0].Text(jax);  
  }
}

var ellip = {
  a: 6378206.4,
  e2:  0.00676866,
  lam0: -180.*D2R,

  select (ellip) {
    if (ellip == 0) { //Clarke-1866
      this.a = 6378206.4;
      inv_f = 294.9786982;
    } else if (ellip == 1) { //WGS-84
      this.a = 6378137.;
      inv_f = 298.257223563;
    }
    this.e2 = 2 / inv_f - 1 / inv_f ** 2;
    MathJax.Hub.getAllJax("ellip_a")[0].Text(`a=${this.a}`);
    MathJax.Hub.getAllJax("ellip_e2")[0].Text(`e^2=${fmt(this.e2)}`);
    MathJax.Hub.getAllJax("ellip_e")[0].Text(`e=${fmt(Math.sqrt(this.e2))}`);

    this.set_fwd();
  },

  parameters () {
    this.lam0 = Number(document.getElementById("lam0_ell_in").value)*D2R;
    this.set_fwd ();
  },  

  set_fwd () {
    const {a, e2, lam0} = this;
    const e = Math.sqrt(e2);
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam= document.getElementById("lambda_ell_in").value*D2R;

    const x = a*(lam-lam0);
    let jax = `x = ${fmt(a)}\\times[${deg(lam,true)} - ${deg(lam0)}] \\times \\pi/180^\\circ= ${fmt(x, true, 2)}`;
    MathJax.Hub.getAllJax("x_ell")[0].Text(jax);
  
    const t1 = Math.tan(Math.PI/4+phi/2);
    const t2 = ((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2);
    const y = a*Math.log(t1*t2);
    jax = `\\eqalign{
      y &= ${a}\\ln\\left[\\tan(45^\\circ+${deg(phi)}/2)\\left(\\frac{1-${fmt(e)}\\sin${deg(phi)}}{1+${fmt(e)}\\sin${deg(phi)}}\\right)^{${fmt(e)}/2}\\right] \\cr
        &= ${a}\\ln[${fmt(t1)}\\times${fmt(t2)}] \\cr
        &= ${a}\\ln ${fmt(t1*t2)} = ${fmt(y,true,2)}
      }`
    MathJax.Hub.getAllJax("y_ell")[0].Text(jax);
  
    jax = `\\eqalign {
      k &= (1-${fmt(e2)}\\sin^2 ${deg(phi)})^{1/2}/\\cos ${deg(phi)} \\cr
        &= ${fmt(Math.sqrt(1-e2*Math.sin(phi, false, 0)**2)/Math.cos(phi))}
    }`
    MathJax.Hub.getAllJax("k_ell")[0].Text(jax);
  
    document.getElementById("x_ell_in").value = fmt(x, true, 2);
    document.getElementById("y_ell_in").value = fmt(y, true, 2);
    this.set_inv ();
  },

  set_inv () {
    const {a, e2, lam0} = this;
    const e = Math.sqrt(e2);
    const x = document.getElementById("x_ell_in").value;
    const y = document.getElementById("y_ell_in").value;
    const t = Math.exp(-y/a);
    let jax=`t = \\mathrm{e}^{-${y}/${a}} = ${fmt(t)}`;
    MathJax.Hub.getAllJax("t_val")[0].Text(jax);
  
    const phi_0 = Math.PI/2 - 2*Math.atan(t);
    jax=`\\phi = 90^\\circ - 2\\arctan ${fmt(t)} = ${deg(phi_0)}`
    MathJax.Hub.getAllJax("phi_0")[0].Text(jax);
  
    const phi_1 = Math.PI/2 - 2*Math.atan(t*((1-e*Math.sin(phi_0))/(1+e*Math.sin(phi_0)))**(e/2));
    jax = `\\begin{align}
      \\phi =& 90^\\circ - 2\\arctan\\{${fmt(t)}[(1-${fmt(e)}\\sin${deg(phi_0)})/ \\cr
             & (1+${fmt(e)}\\sin${deg(phi_0)})]^{${fmt(e)}/2} \\} \\cr
            =& ${deg(phi_1)} 
    \\end{align}`
    MathJax.Hub.getAllJax("phi_1")[0].Text(jax);
  
    MathJax.Hub.getAllJax("phi_0_t")[0].Text(`${deg(phi_0)}`);
    MathJax.Hub.getAllJax("phi_1_t")[0].Text(`${deg(phi_1)}`);
  
    let phi_2 = Math.PI/2 - 2*Math.atan(t*((1-e*Math.sin(phi_1))/(1+e*Math.sin(phi_1)))**(e/2));
    MathJax.Hub.getAllJax("phi_2")[0].Text(`${deg(phi_2)}`);
  
    let phi_3 = Math.PI/2 - 2*Math.atan(t*((1-e*Math.sin(phi_2))/(1+e*Math.sin(phi_2)))**(e/2));
    MathJax.Hub.getAllJax("phi_3")[0].Text(`${deg(phi_3)}`);
  
    jax = `\\lambda = ${x}/${a}\\times 180^\\circ/\\pi+${deg(lam0)} = ${deg(x/a + lam0, true)}`
    MathJax.Hub.getAllJax("lambda_ell")[0].Text(jax);
  
    let chi = Math.PI/2 - 2*Math.atan(t);
    jax = `\\eqalign {
      \\chi &= 90^\\circ - 2\\arctan ${fmt(t)} \\cr
            &= 90^\\circ - ${deg(2*Math.atan(t))} \\cr
            &= ${deg(chi, true)}
    }`
    MathJax.Hub.getAllJax("chi")[0].Text(jax);
  
    let phi = chi + (e2/2+5*e2**2/24+e2**3/12)*Math.sin(2*chi) + (7*e2**2/48+29*e2**3/240)*Math.sin(4*chi) + (7*e2**3/120)*Math.sin(6*chi)
    MathJax.Hub.getAllJax("phi_alt")[0].Text(`\\phi = ${deg(phi, true)}`);
  }    
}


