//auxiliary function q
function qaux (phi, e)
{
  const e2 = e*e;
  return (1-e2)*(Math.sin(phi)/(1-e2*Math.sin(phi)**2) 
  - (1/(2*e)*Math.log((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))));  
}

//iterative function for phi (eq 3-16)
function phi_iter (phi, q, e) {
  let sp = Math.sin(phi)
  return phi + (1-e*e*sp**2)**2/(2*Math.cos(phi))*(q/(1-e*e)-sp/(1-e*e*sp**2)
  +1/(2*e)*Math.log((1-e*sp)/(1+e*sp)))
}

//series for length of meridional arc (eq 3-21)
function marc (phi, a, e2) {
  return a*((1-e2/4-3/64*e2**2-5/256*e2**3)*phi -
    (3/8*e2+3/32*e2**2+45/1024*e2**3)*Math.sin(2*phi) +
    (15/256*e2**2 + 45/1024*e2**3)*Math.sin(4*phi) - 35/2072*e2**3*Math.sin(6*phi));
} 

//spherical normal (equatorial) aspect
var sphe = {
  r: 1.0,
  phi_s: 30*D2R,
  lam0: 80*D2R,

  set_fwd (){
    this.r = document.getElementById("r_sphe_in").value;
    this.phi_s = document.getElementById("phis_sphe_in").value*D2R;
    this.lam0 = document.getElementById("lam0_sphe_in").value*D2R;

    const {r, phi_s, lam0} = this;
    const phi = document.getElementById("phi_sphe_in").value*D2R;
    const lam = document.getElementById("lambda_sphe_in").value*D2R;

    const x = r*(lam-lam0)*Math.cos(phi_s);
    let jax = `x = ${fmt(r,false,0)}\\times[${deg(lam,true)}-${deg(lam0)}]\\times\\cos ${deg(phi_s)} = ${fmt(x, true)}\\;\\text{units}`;
    MathJax.Hub.getAllJax("x_sphe")[0].Text(jax);
    document.getElementById("x_sphe_in").value = fmt(x, true);

    const y=r*Math.sin(phi)/Math.cos(phi_s);
    jax = `y = ${fmt(r,false,0)}\\times\\sin ${deg(phi)}/\\cos ${deg(phi_s)} = ${fmt(y, true)}\\;\\text{units}`
    MathJax.Hub.getAllJax("y_sphe")[0].Text(jax);
    document.getElementById("y_sphe_in").value = fmt(y, true);
    this.set_inv (x, y);
  },

  set_inv (x, y) {
    const {r, phi_s, lam0} = this;
    x = +document.getElementById("x_sphe_in").value;
    y = +document.getElementById("y_sphe_in").value;

    const phi = Math.asin(y/r*Math.cos(phi_s));
    let jax = `\\eqalign{
      \\phi &=\\arcsin[(${fmt(y)}/${fmt(r,false,0)})\\times\\cos${deg(phi_s)}] \\cr
           &= ${deg(phi, true)}
    }`
    MathJax.Hub.getAllJax("phi_sphe")[0].Text(jax);

    const lam = x/(r*Math.cos(phi_s)) + lam0;
    jax = `\\eqalign{
      \\lambda &= [${fmt(x,true,0)}/(${fmt(r,false,0)}\\times\\cos${deg(phi_s)})]\\times 180^\\circ/\\pi + ${deg(lam0)} \\cr
              &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_sphe")[0].Text(jax);
  }
}

var spht = {
  r: 1.0,
  phi0: -20*D2R,
  lam0: -75*D2R,
  h0: 0.98,
  set_fwd (){
    this.r = document.getElementById("r_spht_in").value;
    this.phi0 = document.getElementById("phi0_spht_in").value*D2R;
    this.lam0 = document.getElementById("lam0_spht_in").value*D2R;
    this.h0 = document.getElementById("h0_spht_in").value;

    const {r, phi0,lam0,h0} = this;
    const phi = document.getElementById("phi_spht_in").value*D2R;
    const lam = document.getElementById("lambda_spht_in").value*D2R;

    const x = r/h0*Math.cos(phi)*Math.sin(lam-lam0);
    let jax = `\\eqalign{
      x &= (${fmt(r,false,0)}/${fmt(h0,false,0)})\\times\\cos ${deg(phi)}\\sin[${deg(lam,true)}-${deg(lam0)}]\\cr
        &= ${fmt(x, true)}\\;\\text{units}
    }`;
    MathJax.Hub.getAllJax("x_spht")[0].Text(jax);
    document.getElementById("x_spht_in").value = fmt(x, true);

    const y=r*h0*(Math.atan(Math.tan(phi)/Math.cos(lam-lam0))-phi0);
    jax = `\\eqalign{
      y &= ${fmt(r,false,0)}\\times${fmt(h0,false,0)} \\times \\{ \\arctan [\\tan${deg(phi)}/\\cos(${deg(lam,true)}-${deg(lam0)})]-${deg(phi0)} \\} \\times \\pi/180^\\circ \\cr
        &=${fmt(r,false,0)}\\times${fmt(h0,false,0)} \\times ${deg(Math.atan(Math.tan(phi)/Math.cos(lam-lam0))-phi0)} \\times \\pi/180^\\circ = ${fmt(y, true)} \\; \\text{units}
    }`
    MathJax.Hub.getAllJax("y_spht")[0].Text(jax);
    document.getElementById("y_spht_in").value = fmt(y, true);

    this.set_inv (x, y);
  },
  set_inv () {
    const {r, phi0, lam0, h0} = this;
    const x = +document.getElementById("x_spht_in").value;
    const y = document.getElementById("y_spht_in").value;

    const d = y/(r*h0) + phi0;
    let jax = `\\eqalign{
      D &= ${fmt(y)}/(${fmt(r, false, 0)}\\times${fmt(h0,false, 0)}) + ${deg(phi0)}\\times180^\\circ/\\pi \\cr
        &= ${fmt(d)}
    }`
    MathJax.Hub.getAllJax("D")[0].Text(jax);
    
    const t = Math.sqrt(1-(h0*x/r)**2);
    const phi = Math.asin(t*Math.sin(d));
    jax = `\\eqalign{
      \\phi =&\\arcsin\\{[1-(${fmt(h0,false,0)}\\times${fmt(x)}/${fmt(r,false,0)})^2]^{1/2}\\cr
             & \\times\\sin(${fmt(d)} \\;\\text{radians}) \\}  \\cr
            =& ${deg(phi, true)} 
    }`
    MathJax.Hub.getAllJax("phi_spht")[0].Text(jax);
    const lam = lam0+Math.atan2(h0*x/r, t*Math.cos(d));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)}+\\arctan \\{[${fmt(h0,false,0)}\\times${fmt(x)}/${fmt(r,false,0)}]/ \\cr
                &[[1-(${fmt(h0,false,0)}\\times${fmt(x)}/${fmt(r,false,0)})^2]^{1/2}\\cos(${fmt(d)} \\;\\text{radians})] \\} \\cr
               =& ${deg(lam, true)} 
    }`
    MathJax.Hub.getAllJax("lam_spht")[0].Text(jax);
  }
}

var spho = {
  r: 1,
  h0: 0.98,
  phi1: 30*D2R, phi2: 60*D2R,
  lam1: -75*D2R, lam2: -50*D2R,
  set_fwd (){
    this.r = document.getElementById("r_spho_in").value;
    this.h0 = document.getElementById("h0_spho_in").value;
    this.phi1 = document.getElementById("phi1_spho_in").value*D2R;
    this.lam1 = document.getElementById("lam1_spho_in").value*D2R;
    this.phi2 = document.getElementById("phi2_spho_in").value*D2R;
    this.lam2 = document.getElementById("lam2_spho_in").value*D2R;

    const {r, h0, phi1, phi2, lam1, lam2} = this;
    const phi = document.getElementById("phi_spho_in").value*D2R;
    const lam = document.getElementById("lambda_spho_in").value*D2R;

    const lamp=Math.atan2(Math.cos(phi1)*Math.sin(phi2)*Math.cos(lam1) - Math.sin(phi1)*Math.cos(phi2)*Math.cos(lam2),
      Math.sin(phi1)*Math.cos(phi2)*Math.sin(lam2)-Math.cos(phi1)*Math.sin(phi2)*Math.sin(lam1));
    let jax = `\\eqalign{
      \\lambda_p =& \\arctan \\{ [\\cos ${deg(phi1)} \\sin ${deg(phi2)} \\cos ${deg(lam1)} - \\sin ${deg(phi1)} \\cos ${deg(phi2)} \\cos ${deg(lam2)}]/ \\cr
                  & [\\sin ${deg(phi1)} \\cos ${deg(phi2)} \\sin ${deg(lam2)} - \\cos ${deg(phi1)} \\sin ${deg(phi2)} \\sin ${deg(lam1)}] \\} \\cr
                 =& \\arctan (${fmt(Math.cos(phi1)*Math.sin(phi2)*Math.cos(lam1) - Math.sin(phi1)*Math.cos(phi2)*Math.cos(lam2))}/${fmt(Math.sin(phi1)*Math.cos(phi2)*Math.sin(lam2)-Math.cos(phi1)*Math.sin(phi2)*Math.sin(lam1))}) \\cr 
                 =& ${deg(lamp, true)}
    }`
    MathJax.Hub.getAllJax("lamp_spho")[0].Text(jax);

    const lam0 = lamp+Math.PI/2;
    jax = `\\lambda_0 = ${deg(lamp)} + 90^\\circ = ${deg(lam0, true)}`
    MathJax.Hub.getAllJax("lam0_spho")[0].Text(jax);
    MathJax.Hub.getAllJax("lam0_spho1")[0].Text(`\\lambda_0 = ${deg(lam0, true)}`);

    const phip = Math.atan(-Math.cos(lamp-lam1)/Math.tan(phi1));
    jax = `\\eqalign{
      \\phi_p &= \\arctan \\{-\\cos[${deg(lamp,true)}-${deg(lam1)}]/\\tan ${deg(phi1)} \\} \\cr
              &= ${deg(phip, true)}
    }`
    MathJax.Hub.getAllJax("phip_spho")[0].Text(jax);
    MathJax.Hub.getAllJax("phip1_spho")[0].Text(`${deg(-phip, true)}`);
    MathJax.Hub.getAllJax("phip2_spho")[0].Text(`\\phi_p = ${deg(phip, true)}`);
    MathJax.Hub.getAllJax("lamp1_spho")[0].Text(`${deg(lon_adj(lamp+Math.PI), true)}`);

    const x = r*h0*Math.atan2 (Math.tan(phi)*Math.cos(phip)+Math.sin(phip)*Math.sin(lam-lam0), Math.cos(lam-lam0));
    jax = `\\eqalign{
      x =& ${fmt(r,false,0)}\\times${fmt(h0,false,0)}\\arctan [\\tan ${deg(phi)} \\cos ${deg(phip)} \\cr
         & + \\sin ${deg(phip)} \\sin(${deg(lam,true)} - ${deg(lam0)})]/ \\cr
         & \\cos(${deg(lam,true)} - ${deg(lam0)}) \\cr
        =& ${fmt(r,false,0)}\\times${fmt(h0,false,0)}\\arctan [${fmt(Math.tan(phi)*Math.cos(phip)+Math.sin(phip)*Math.sin(lam-lam0),true)}/${fmt(Math.cos(lam-lam0))}] \\cr
        =& ${fmt(x, true)} \\text{ units}
    }`
    MathJax.Hub.getAllJax("x_spho")[0].Text(jax);
    document.getElementById("x_spho_in").value = fmt(x,true);

    const y=r/h0*(Math.sin(phip)*Math.sin(phi)-Math.cos(phip)*Math.cos(phi)*Math.sin(lam-lam0));
    jax=`\\eqalign{
      y =& (${fmt(r,false,0)}/${fmt(h0,false,0)})[\\sin${deg(phip)}\\sin${deg(phi)} -\\cr
         & \\cos${deg(phip)}\\cos${deg(phi)}\\sin(${deg(lam,true)}-${deg(lam0)})] \\cr
        =& ${fmt(y, true)} \\text{ units}
    }`
    MathJax.Hub.getAllJax("y_spho")[0].Text(jax);
    document.getElementById("y_spho_in").value = fmt(y,true);
    this.set_inv (x, y);
  },
  set_inv (){
    const {r, h0, phi1, phi2, lam1, lam2} = this;
    const x = +document.getElementById("x_spho_in").value;
    const y = +document.getElementById("y_spho_in").value;

    const lamp=Math.atan2(Math.cos(phi1)*Math.sin(phi2)*Math.cos(lam1) - Math.sin(phi1)*Math.cos(phi2)*Math.cos(lam2),
      Math.sin(phi1)*Math.cos(phi2)*Math.sin(lam2)-Math.cos(phi1)*Math.sin(phi2)*Math.sin(lam1));
    const lam0 = lamp+Math.PI/2;
    const phip = Math.atan(-Math.cos(lamp-lam1)/Math.tan(phi1));

    const y_term = y*h0/r;
    jax = `\\eqalign{
      yh_0/R &= ${fmt(y, true)}\\times${fmt(h0, false,0)}/${fmt(r, false, 0)} \\cr
             &= ${fmt(y_term, true)}
    }`
    MathJax.Hub.getAllJax("y_term")[0].Text(jax);

    const x_term = x/(r*h0);
    jax = `\\eqalign{
      x/(Rh_0) &= ${fmt(x, true)}/(${fmt(h0)}\\times${fmt(r, false, 0)}) \\cr
               &= ${fmt(x_term, true)}
    }`
    MathJax.Hub.getAllJax("x_term")[0].Text(jax);

    const phi = Math.asin(y_term*Math.sin(phip)+Math.sqrt(1-y_term**2)*Math.cos(phip)*Math.sin(x_term));
    jax =`\\eqalign{
      \\phi =&\\arcsin \\{ ${fmt(y_term)}\\times\\sin${deg(phip)}+[1-${fmt(y_term)}^2]^{1/2} \\cr
             &\\times\\cos${deg(phip)}\\times\\sin(${fmt(x_term, true)}\\;\\text{radians}) \\}\\cr
             &\\arcsin(${fmt(Math.sin(phi), true)}) = ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("phi_spho")[0].Text(jax);

    const lam = lam0+Math.atan2(Math.sqrt(1-y_term**2)*Math.sin(phip)*Math.sin(x_term)-y_term*Math.cos(phip),
    Math.sqrt(1-y_term**2)*Math.cos(x_term));

    jax=`\\eqalign{
      \\lambda =&${deg(lam0)}+\\arctan\\{[[1-${fmt(y_term)}^2]^{1/2}\\cr
                &\\times\\sin${deg(phip)} \\times\\sin(${fmt(x_term, true)}\\;\\text{radians})\\cr
                &-${fmt(y_term)}\\times\\cos${deg(phip)}]/\\cr
                &[[1-${fmt(y_term)}^2]^{1/2}\\times\\cos(${fmt(x_term, true)}\\;\\text{radians})]\\} \\cr
               =& ${deg(lam, true)} = ${deg(lon_adj(lam), true)}
    }`
    MathJax.Hub.getAllJax("lam_spho")[0].Text(jax);
  }
}

var elle = {
  a: 6378206.4,
  e2: 0.00676866,
  e: 0.0822719,
  phis: 5*D2R,
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
    MathJax.Hub.getAllJax("elle_a")[0].Text(`a=${this.a}`);
    MathJax.Hub.getAllJax("elle_e2")[0].Text(`e^2=${fmt(this.e2)}`);
    MathJax.Hub.getAllJax("elle_e")[0].Text(`e=${fmt(this.e)}`);
    this.set_fwd ();
  },

  set_fwd () {
    this.phis = document.getElementById ("phis_elle_in").value*D2R;
    this.lam0 = document.getElementById ("lam0_elle_in").value*D2R;

    const {a, e, e2, phis, lam0} = this;
    const phi = document.getElementById("phi_elle_in").value*D2R;
    const lam = document.getElementById("lambda_elle_in").value*D2R;

    const k0 = Math.cos(phis)/Math.sqrt(1-e2*Math.sin(phis)**2);
    let jax = `\\eqalign{
      k_0 &= \\cos${deg(phis)}/[1-${fmt(e2)}\\times\\sin${deg(phis)}]^{1/2} \\cr
          &= ${fmt(k0, true)}
    }`
    MathJax.Hub.getAllJax("k0_elle")[0].Text(jax);

    const q = (1-e2)*(Math.sin(phi)/(1-e2*Math.sin(phi)**2) 
      - (1/(2*e)*Math.log((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))));
    jax = `\\eqalign{
      q =& (1-${fmt(e2)})\\times\\{\\sin${deg(phi)}/(1-${fmt(e2)}\\times\\sin^2${deg(phi)}) \\cr
         & -[1/(2\\times${fmt(e)})]\\times\\ln[(1-${fmt(e)}\\times\\sin${deg(phi)})/ \\cr
         & (1+${fmt(e)})\\times\\sin${deg(phi)}]\\} \\cr
        =& ${fmt(q, true)} 
    }`
    MathJax.Hub.getAllJax("q_elle")[0].Text(jax);

    const x = a*k0*(lam-lam0);
    jax = `\\eqalign{
      x &= ${fmt(a, false, 0)}\\times${fmt(k0,false)}\\times[${deg(lam,true)}-${deg(lam0)}]\\times\\pi/180^\\circ \\cr
        &= ${fmt(x, true, 2)}\\,\\text{m}
    }`
    MathJax.Hub.getAllJax("x_elle")[0].Text(jax);

    const y = a*q/(2*k0);
    jax = `\\eqalign{
      y &= ${fmt(a, false, 0)}\\times${fmt(q)}/(2\\times${fmt(k0)}) \\cr
        &= ${fmt(y, true, 2)}\\,\\text{m}
    }`
    MathJax.Hub.getAllJax("y_elle")[0].Text(jax);

    document.getElementById("x_elle_in").value = fmt(x, true, 2);
    document.getElementById("y_elle_in").value = fmt(y, true, 2);
    this.set_inv ();
  },

  set_inv () {
    const {a, e, e2, phis, lam0} = this;
    const x = document.getElementById("x_elle_in").value;
    const y = document.getElementById("y_elle_in").value;

    const k0 = Math.cos(phis)/Math.sqrt(1-e2*Math.sin(phis)**2);
    let jax = `k_0 = ${fmt(k0, true)}`
    MathJax.Hub.getAllJax("k0_elle_inv")[0].Text(jax);

    const qp = 1-(1-e2)/(2*e)*Math.log((1-e)/(1+e));
    jax = `q_p = ${fmt(qp, true)}`
    MathJax.Hub.getAllJax("qp_elle")[0].Text(jax);

    const beta = Math.asin(2*y*k0/(a*qp));
    jax = `\\eqalign{
      \\beta &= \\arcsin[2\\times${fmt(y,true,0)}\\times${fmt(k0)}/(${fmt(a,true,0)}\\times${fmt(qp)})] \\cr
             &= ${deg(beta, true)}
    }`
    MathJax.Hub.getAllJax("beta_elle")[0].Text(jax);

    let qc = qp*Math.sin(beta);
    let phi = Math.asin (qc/2);
    let i=0;
    let delta = 0;
    do {
      let sp = Math.sin(phi)
      let phi_new = phi_iter(phi, qc, e);
      delta = Math.abs(phi_new-phi);
      phi = phi_new;
      i++;
    } while (delta >= 1e-7 && i<10)
    jax = `\\phi = ${deg(phi,true)}`
    MathJax.Hub.getAllJax("phi_elle")[0].Text(jax);

    const lam=lam0+x/(a*k0);
    jax = `\\eqalign{
      \\lambda &= ${deg(lam0,true)}-[${fmt(x,true,0)}/(${fmt(a,true,0)}\\times${fmt(k0)})] \\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_elle")[0].Text(jax);
  }
}

var ellt = {
  a: 6378206.4,
  e2: 0.00676866,
  e: 0.0822719,
  phi0: 30*D2R,
  lam0: -75*D2R,
  h0: 0.99,

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
    MathJax.Hub.getAllJax("ellt_a")[0].Text(`a=${this.a}`);
    MathJax.Hub.getAllJax("ellt_e2")[0].Text(`e^2=${fmt(this.e2)}`);
    MathJax.Hub.getAllJax("ellt_e")[0].Text(`e=${fmt(this.e)}`);
    this.set_fwd ();
  },

  set_fwd () {
    this.phi0 = document.getElementById ("phi0_ellt_in").value*D2R;
    this.lam0 = document.getElementById ("lam0_ellt_in").value*D2R;
    this.h0 = document.getElementById ("h0_ellt_in").value;

    const {a, e, e2, phi0, lam0, h0} = this;
    const phi = document.getElementById("phi_ellt_in").value*D2R;
    const lam = document.getElementById("lambda_ellt_in").value*D2R;
    const q = (1-e2)*(Math.sin(phi)/(1-e2*Math.sin(phi)**2) 
      - (1/(2*e)*Math.log((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))));
    jax = `\\eqalign{
      q =& (1-${fmt(e2)})\\times\\{\\sin${deg(phi)}/(1-${fmt(e2)}\\times\\sin^2${deg(phi)}) \\cr
         & -[1/(2\\times${fmt(e)})]\\times\\ln[(1-${fmt(e)}\\times\\sin${deg(phi)})/ \\cr
         & (1+${fmt(e)})\\times\\sin${deg(phi)}]\\} \\cr
        =& ${fmt(q, true)} 
    }`
    MathJax.Hub.getAllJax("q_ellt")[0].Text(jax);

    const qp = 1-(1-e2)/(2*e)*Math.log((1-e)/(1+e));
    jax = `q_p = ${fmt(qp, true)}`
    MathJax.Hub.getAllJax("qp_ellt")[0].Text(jax);

    const beta = Math.asin(q/qp);
    jax =`\\eqalign{
      \\beta &= \\arcsin(${fmt(q)}/${fmt(qp)}) \\cr
             &= ${deg(beta, true)}
    }`
    MathJax.Hub.getAllJax("beta_ellt")[0].Text(jax);

    const betac = Math.atan2(Math.tan(beta), Math.cos(lam-lam0));
    jax = `\\eqalign{
      \\beta_c &= \\arctan[\\tan ${deg(beta)}/\\cos(${deg(lam)} - ${deg(lam0)})] \\cr
               &= ${deg(betac, true)}
    }`
    MathJax.Hub.getAllJax("betac_ellt")[0].Text(jax);

    const qc = qp*Math.sin(betac);
    jax = `\\eqalign{
      q_c &= ${fmt(qp)}\\times \\sin${deg(betac)} \\cr
          &= ${fmt(qc)}
    }`
    MathJax.Hub.getAllJax("qc_ellt")[0].Text(jax);

    let phic = Math.asin(qc/2);
    jax = `\\eqalign{
      \\phi_c &= \\arcsin(${fmt(qc)}/2) \\cr
              &= ${deg(phic, true)}
    }` 
    MathJax.Hub.getAllJax("phic0_ellt")[0].Text(jax);

    let phic_new = phi_iter (phic, qc, e);
    jax = `\\eqalign{
      \\phi_c =& ${deg(phic)}+[(1-${fmt(e2)}\\sin^2 ${deg(phic)})^2/ \\cr
               & (2 \\cos ${deg(phic)})]\\times\\{${fmt(qc)}/(1-${fmt(e2)}) \\cr
               & -\\sin ${deg(phic)}/(1-${fmt(e2)}\\sin^2 ${deg(phic)}) \\cr
               & +[1/(2\\times${fmt(e)})]\\ln[(1-${fmt(e)}\\sin ${deg(phic)}) \\cr
               & /(1+${fmt(e)}\\sin ${deg(phic)})]\\}\\times 180^\\circ/\\pi \\cr
              =& ${deg(phic_new, true)}
    }`
    MathJax.Hub.getAllJax("phic1_ellt")[0].Text(jax);
    MathJax.Hub.getAllJax("phic0_ellt1")[0].Text(`${deg(phic, true)}`);
    MathJax.Hub.getAllJax("phic1_ellt1")[0].Text(`${deg(phic_new, true)}`);

    phic_new = phi_iter (phic_new, qc, e);
    MathJax.Hub.getAllJax("phic2_ellt1")[0].Text(`${deg(phic_new, true)}`);
    jax = `\\phi_c = ${deg(phic_new, true)}`
    MathJax.Hub.getAllJax("phic2_ellt")[0].Text(jax);
    phic = phic_new;

    const x = a*Math.cos(beta)*Math.cos(phic)*Math.sin(lam-lam0)/(h0*Math.cos(betac)*Math.sqrt(1-e2*Math.sin(phic)**2));
    jax = `\\eqalign{
      x =& ${fmt(a,true,0)}\\times\\cos${deg(beta)}\\times\\cos${deg(phic)}\\times\\sin[${deg(lam,true)}-${deg(lam0)}] \\cr
         & /[${fmt(h0,true, 0)}\\times\\cos ${deg(betac)}\\times(1-${fmt(e2)}\\times\\sin^2 ${deg(phic)})^{1/2}] \\cr
        =& ${fmt(x, true, 2)}\\;\\text{m} 
    }`
    MathJax.Hub.getAllJax("x_ellt")[0].Text(jax);

    const mc = marc (phic, a, e2);
    jax = `\\eqalign{
      M_c =& ${fmt(a,true,0)}\\times[(1-${fmt(e2)}/4-3\\times${fmt(e2)}^2/64 \\cr
           & -5\\times${fmt(e2)}^3/256)\\times ${deg(phic)}\\times \\pi/180^\\circ \\cr
           & -(3\\times${fmt(e2)}/8+3\\times${fmt(e2)}^2/32 \\cr
           & +45\\times${fmt(e2)}^3/1024)\\times\\sin(2\\times${deg(phic)}) \\cr
           & +(15\\times${fmt(e2)}^2/256+45\\times${fmt(e2)}^3/1024) \\cr
           & \\times \\sin(4\\times${deg(phic)}) -(35\\times${fmt(e2)}^3/3072) \\cr
           & \\times\\sin(6\\times${deg(phic)})] \\cr
          =& ${fmt(mc, true, 2)}\\;\\text{m} 
    }`
    MathJax.Hub.getAllJax("mc_ellt")[0].Text(jax);

    MathJax.Hub.getAllJax("phi0_ellt")[0].Text(`${deg(phi0,true)}`);
    MathJax.Hub.getAllJax("phic_ellt")[0].Text(`${deg(phic, true)}`);

    const m0 = marc(phi0, a, e2);
    jax = `M_0 = ${fmt(m0, true, 2)}\\;\\text{m}`;
    MathJax.Hub.getAllJax("m0_ellt")[0].Text(jax);

    const y=h0*(mc-m0);
    jax = `\\eqalign{
      y &= ${fmt(h0, true, 0)}\\times(${fmt(mc, false, 2)} - ${fmt(m0, false, 2)}) \\cr
        &= ${fmt(y, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("y_ellt")[0].Text(jax);

    document.getElementById ("x_ellt_in").value = fmt(x, true, 2);
    document.getElementById ("y_ellt_in").value = fmt(y, true, 2);
    this.set_inv ();
  },

  set_inv () {
    const {a, e, e2, phi0, lam0, h0} = this;
    const x = +document.getElementById("x_ellt_in").value;
    const y = +document.getElementById("y_ellt_in").value;

    MathJax.Hub.getAllJax("phi0_ellt_inv")[0].Text(`${deg(phi0, true)}`);

    const m0 = marc(phi0, a, e2);
    let jax = `M_0 = ${fmt(m0, true, 2)}\\;\\text{m}`;
    MathJax.Hub.getAllJax("m0_ellt_inv")[0].Text(jax);

    const mc = m0+y/h0;
    jax = `\\eqalign{
      M_c &= M_0 + ${fmt(y)}/${fmt(h0)} \\cr
          &= ${fmt(mc, true, 2)}\\;\\text{m} 
    }`    
    MathJax.Hub.getAllJax("mc_ellt_inv")[0].Text(jax);

    const muc = mc/(a*(1-e2/4-3/64*e2**2-5/256*e2**3));
    jax = `\\eqalign{
      \\mu_c =& ${fmt(mc)}/[${fmt(a)}\\times(1-${fmt(e2)}/4 \\cr
             & -3\\times${fmt(e2)}^2/64 - 5\\times${fmt(e2)}^3/256)] \\cr
            =& ${fmt(muc)}\\;\\text{radians} = ${deg(muc, true)} 
    }`
    MathJax.Hub.getAllJax("muc_ellt_inv")[0].Text(jax);

    const e1 = (1-Math.sqrt(1-e2))/(1+Math.sqrt(1-e2));
    jax = `\\eqalign{
      e_1 &= [1-(1-${fmt(e2)})^{1/2}]/[1+(1-${fmt(e2)})^{1/2}] \\cr
          &= ${fmt(e1)}
    }`
    MathJax.Hub.getAllJax("e1_ellt_inv")[0].Text(jax);
    
    const phic = muc + (3/2*e1 - 27/32*e1**3)*Math.sin(2*muc) + (21/16*e1**2- 55/32*e1**4)*Math.sin(4*muc)
      + 151/96*e1**3*Math.sin(6*muc) + 1097/512*e1**4*Math.sin(8*muc);
    jax = `\\eqalign{
      \\phi_c =& \\mu_c + (3\\times${fmt(e1)}/3 - 27\\times${fmt(e1)}^3/32)\\sin(2\\times${deg(muc)}) \\cr
               & + (21\\times${fmt(e1)}^2/16 - 55\\times${fmt(e1)}^4/32)\\sin(4\\times${deg(muc)}) \\cr
               & + (151\\times${fmt(e1)}^3/96)\\sin(6\\times${deg(muc)}) \\cr
               & + (1097\\times${fmt(e1)}^4/512)\\sin(8\\times${deg(muc)}) \\cr
              =& ${fmt(phic, true)}\\;\\text{radians} = ${deg(phic, true)} 
    }`
    MathJax.Hub.getAllJax("phic_ellt_inv")[0].Text(jax);

    const qc = (1-e2)*(Math.sin(phic)/(1-e2*Math.sin(phic)**2) 
      - (1/(2*e)*Math.log((1-e*Math.sin(phic))/(1+e*Math.sin(phic)))));
    jax = `\\eqalign{
      q_c =& (1-${fmt(e2)})\\times\\{\\sin${deg(phic)}/(1-${fmt(e2)}\\times\\sin^2${deg(phic)}) \\cr
           & -[1/(2\\times${fmt(e)})]\\times\\ln[(1-${fmt(e)}\\times\\sin${deg(phic)})/ \\cr
           & (1+${fmt(e)})\\times\\sin${deg(phic)}]\\} \\cr
          =& ${fmt(qc, true)} 
    }`
    MathJax.Hub.getAllJax("qc_ellt_inv")[0].Text(jax);

    const qp = 1-(1-e2)/(2*e)*Math.log((1-e)/(1+e));
    const betac = Math.asin(qc/qp);
    jax =`\\eqalign{
      \\beta_c &= \\arcsin(${fmt(qc)}/${fmt(qp)}) \\cr
             &= ${deg(betac, true)}
    }`
    MathJax.Hub.getAllJax("betac_ellt_inv")[0].Text(jax);

    const betaprime = -Math.asin ((h0*x*Math.cos(betac)*Math.sqrt(1-e2*Math.sin(phic)**2))/(a*Math.cos(phic)));
    jax =`\\eqalign{
      \\beta' =& -\\arcsin[${fmt(h0)}\\times${fmt(x,false,2)}\\times\\cos${deg(betac)} \\cr
               & \\times(1-${fmt(e2)}\\times\\sin^2${deg(phic)})^{1/2}/ \\cr
               & (${fmt(a,false,0)}\\times\\cos${deg(phic)})] \\cr
              =& ${deg(betaprime, true)} 
    }`
    MathJax.Hub.getAllJax("betaprime_ellt_inv")[0].Text(jax);

    const beta = Math.asin (Math.cos(betaprime)*Math.sin(betac));
    jax = `\\eqalign{
      \\beta &= \\arcsin(\\cos ${deg(betaprime)}/\\sin${deg(betac)}) \\cr
             &= ${deg(beta, true)}
    }`
    MathJax.Hub.getAllJax("beta_ellt_inv")[0].Text(jax);

    const lam = lam0-Math.atan2(Math.tan(betaprime), Math.cos(betac));
    jax = `\\eqalign{
      \\lambda &= ${deg(lam0,true)}-\\arctan(\\tan ${deg(betaprime)}/\\cos${deg(betac)}) \\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_ellt_inv")[0].Text(jax);

    const q = qp*Math.sin(beta);
    let phi = Math.asin(q/2);
    let i =0;
    let diff = 0;
    do {
      let phi_new  = phi_iter (phi, q, e);
      i++;
      diff = Math.abs (phi_new - phi);
      phi = phi_new;
    } while (diff > 1e-7*D2R && i<10);
    MathJax.Hub.getAllJax("phi_ellt_inv")[0].Text(`\\phi = ${deg(phi, true)}`);
  } 
}

var ello = {
  a: 6378206.4,
  e2: 0.00676866,
  e: 0.0822719,
  h0: 1.0,
  phi1: 30*D2R, lam1: -75*D2R,
  phi2: 40*D2R, lam2: -80*D2R,
  b: 0.9991507116, a2: -0.0008471546, a4: 0.0000021283, a6:-0.0000000054,
  b2:-0.0001412092, a22:-0.0001411259, a24: 0.0000000839, a26:0.0000000006,
  b4: -0.0000000435, a42: -0.0000000579, a44: -0.0000000144, a46: 0.0000000000,
  select (ellip) {
    if (ellip == 0) { //Clarke-1866
      this.a = 6378206.4;
      inv_f = 294.9786982;
      b=0.9991507116; a2=-0.0008471546; a4=0.0000021283; a6=-0.0000000054;
      b2=-0.0001412092; a22=-0.0001411259; a24=0.0000000839; a26=0.0000000006;
      b4=-0.0000000435; a42=-0.0000000579; a44=-0.0000000144; a46=0.0000000000;
    } else if (ellip == 1) { //WGS-84
      this.a = 6378137.;
      inv_f = 298.257223563;
      b=0.9991600674; a2=-0.0008378456; a4=0.0000020818; a6=-0.0000000052;
      b2=-0.0001396573; a22=-0.0001395758; a24=0.0000000821; a26=0.0000000006;
      b4=-0.0000000425; a42=-0.0000000567; a44=-0.0000000141; a46=0.0000000000;
    }
    this.e2 = 2/inv_f - 1/inv_f**2;
    this.e = Math.sqrt(this.e2);
    MathJax.Hub.getAllJax("ello_a")[0].Text(`a=${this.a}`);
    MathJax.Hub.getAllJax("ello_e2")[0].Text(`e^2=${fmt(this.e2)}`);
    MathJax.Hub.getAllJax("ello_e")[0].Text(`e=${fmt(this.e)}`);
    this.set_fwd ();
  },

  set_fwd () {
    this.phi1 = document.getElementById ("phi1_ello_in").value*D2R;
    this.lam1 = document.getElementById ("lam1_ello_in").value*D2R;
    this.phi2 = document.getElementById ("phi2_ello_in").value*D2R;
    this.lam2 = document.getElementById ("lam2_ello_in").value*D2R;
    this.h0 = document.getElementById ("h0_ello_in").value;

    const {a, e, e2, phi1, lam1, phi2, lam2, h0} = this;
    const phi = document.getElementById("phi_ello_in").value*D2R;
    const lam = document.getElementById("lambda_ello_in").value*D2R;

    const qp = 1-(1-e2)/(2*e)*Math.log((1-e)/(1+e));
    const q1 = qaux (phi1, e);
    const q2 = qaux (phi2, e);
    const beta1 = Math.asin(q1/qp);
    const beta2 = Math.asin(q2/qp);
    MathJax.Hub.getAllJax("beta1_ello")[0].Text(`\\beta_1 = ${deg(beta1, true)}`);
    MathJax.Hub.getAllJax("beta2_ello")[0].Text(`\\beta_2 = ${deg(beta2, true)}`);

    let term1 = Math.cos(beta1)*Math.sin(beta2)*Math.cos(lam1) - Math.sin(beta1)*Math.cos(beta2)*Math.cos(lam2);
    let term2 = Math.sin(beta1)*Math.cos(beta2)*Math.sin(lam2)-Math.cos(beta1)*Math.sin(beta2)*Math.sin(lam1);
    const lamp=Math.atan2(term1, term2);
    let jax = `\\eqalign{
      \\lambda_p =& \\arctan \\{ [\\cos ${deg(beta1)} \\sin ${deg(beta2)} \\cos ${deg(lam1)} \\cr
                  &-\\sin ${deg(beta1)} \\cos ${deg(beta2)} \\cos ${deg(lam2)}]/ \\cr
                  & [\\sin ${deg(beta1)} \\cos ${deg(beta2)} \\sin ${deg(lam2)} \\cr
                  &-\\cos ${deg(beta1)} \\sin ${deg(beta2)} \\sin ${deg(lam1)}^\\circ] \\} \\cr
                 =& \\arctan (${fmt(term1)}/${fmt(term2)}) \\cr 
                 =& ${deg(lamp, true)}
    }`
    MathJax.Hub.getAllJax("lamp_ello")[0].Text(jax);
    const betap = Math.atan(-Math.cos(lamp-lam1)/Math.tan(beta1));
    jax = `\\eqalign{
      \\beta_p &= \\arctan \\{-\\cos[${deg(lamp)}-${deg(lam1)}]/\\tan ${deg(beta1)} \\} \\cr
              &= ${deg(betap, true)}
    }`
    MathJax.Hub.getAllJax("betap_ello")[0].Text(jax);

    const q = qp*Math.sin(betap);
    let phip = Math.asin(q/2);
    let i =0;
    let diff = 0;
    do {
      let phi_new  = phi_iter (phip, q, e);
      i++;
      diff = Math.abs (phi_new - phip);
      phip = phi_new;
    } while (diff > 1e-7*D2R && i<10);
    MathJax.Hub.getAllJax("phip_ello")[0].Text(`\\phi_p = ${deg(phip, true)}`);

    const B = this.b+this.a2*Math.cos(2*phip)+this.a4*Math.cos(4*phip)+this.a6*Math.cos(6*phip);
    const A2 = this.b2 + this.a22*Math.cos(2*phip)+this.a24*Math.cos(4*phip)+this.a26*Math.cos(6*phip);
    const A4 = this.b4 + this.a42*Math.cos(2*phip)+this.a44*Math.cos(4*phip)+this.a46*Math.cos(6*phip);

    jax = `\\eqalign{
      B =& ${fmt(this.b, false, 10)}+${fmt(this.a2, false, 10)}\\cos(2\\times ${deg(phip)}) \\cr
         &+${fmt(this.a4, false, 10)}\\cos(4\\times${deg(phip)}) \\cr
         &+${fmt(this.a6, false, 10)}\\cos(6\\times${deg(phip)}) \\cr
        =& ${fmt(B, true)}
    }`
    MathJax.Hub.getAllJax("b_ello")[0].Text(jax);

    jax = `\\eqalign{
      A_2 =& ${fmt(this.b2, false, 10)}+${fmt(this.a22, false, 10)}\\cos(2\\times ${deg(phip)}) \\cr
           &+${fmt(this.a24, false, 10)}\\cos(4\\times${deg(phip)}) \\cr
           &+${fmt(this.a26, false, 10)}\\cos(6\\times${deg(phip)}) \\cr
          =& ${fmt(A2, true)}
    }`
    MathJax.Hub.getAllJax("a2_ello")[0].Text(jax);
    
    jax = `\\eqalign{
      A_4 =& ${fmt(this.b4, false, 10)}+${fmt(this.a42, false, 10)}\\cos(2\\times ${deg(phip)}) \\cr
           &+${fmt(this.a44, false, 10)}\\cos(4\\times${deg(phip)}) \\cr
           &+${fmt(this.a46, false, 10)}\\cos(6\\times${deg(phip)}) \\cr
          =& ${fmt(A4, true)}
    }`
    MathJax.Hub.getAllJax("a4_ello")[0].Text(jax);

    const beta= Math.asin (qaux(phi, e)/qp);
    MathJax.Hub.getAllJax("beta_ello")[0].Text(`\\beta = ${deg(beta, true)}`);

    term1 = Math.cos(betap)*Math.sin(beta)-Math.sin(betap)*Math.cos(beta)*Math.cos(lam-lamp);
    term2 = Math.cos(beta)*Math.sin(lam-lamp);
    const lamprime = Math.atan2(term1,term2);
    jax = `\\eqalign{
      \\lambda' =& \\arctan \\{[\\cos${deg(betap)}\\sin${deg(beta)}-\\sin${deg(betap)} \\cr
                 & \\times\\cos${deg(beta)}\\cos(${deg(lam,true)}-${deg(lamp)})] \\cr
                 & /\\cos${deg(beta)}\\sin(${deg(lam,true)}-${deg(lamp)})\\} \\cr
                =& \\arctan[${fmt(term1)}/${fmt(term2)}] \\cr
                =& ${deg(lamprime, true)}
    }`
    MathJax.Hub.getAllJax("lamprime_ello")[0].Text(jax);

    const x = a*h0*(B*lamprime + A2*Math.sin(2*lamprime) + A4*Math.sin(4*lamprime));
    jax = `\\eqalign{
      x =& ${fmt(a, true, 2)}\\times${fmt(h0, false, 0)}\\times[${fmt(B)}\\times${deg(lamprime)}\\times\\pi/180^\\circ \\cr
         & + ${fmt(A2)}\\sin(2\\times${deg(lamprime)})+ ${fmt(A4)}\\sin(4\\times${deg(lamprime)})] \\cr
        =& ${fmt(x, true, 2)}\\;\\text{m} 
    }`
    MathJax.Hub.getAllJax("x_ello")[0].Text(jax);

    const F = B+2*A2*Math.cos(2*lamprime)+4*A4*Math.cos(4*lamprime);
    jax = `\\eqalign{
      F =& ${fmt(B)}+2\\times${fmt(A2)}\\cos(2\\times${deg(lamprime)}) \\cr
         & + 4\\times${fmt(A4)}\\cos(4\\times${deg(lamprime)}) \\cr
        =& ${fmt(F, true)} 
    }` 
    MathJax.Hub.getAllJax("f_ello")[0].Text(jax);

    const y = a*qp/2*(Math.sin(betap)*Math.sin(beta)+Math.cos(betap)*Math.cos(beta)*Math.cos(lam-lamp))/(h0*F);
    jax = `\\eqalign{
      y =& (${fmt(a,true,0)}\\times${fmt(qp)}/2)\\times[\\sin${deg(betap)} \\cr
         & \\times\\sin${deg(beta)}+\\cos${deg(betap)}\\cos${deg(beta)} \\cr
         & \\times\\cos(${deg(lam,true)}-${deg(lamp)})]/(${fmt(h0, false, 0)}\\times ${fmt(F)}) \\cr
        =& ${fmt(y,true,2)} \\;\\text{m}
    }`
    MathJax.Hub.getAllJax("y_ello")[0].Text(jax);
    document.getElementById("x_ello_in").value = fmt(x,true,2);
    document.getElementById("y_ello_in").value = fmt(y,true,2);
    this.set_inv();
  },

  set_inv () {
    const {a, e, e2, phi1, lam1, phi2, lam2, h0} = this;
    const x = document.getElementById("x_ello_in").value;
    const y = document.getElementById("y_ello_in").value;

    const qp = 1-(1-e2)/(2*e)*Math.log((1-e)/(1+e));
    const q1 = qaux (phi1, e);
    const q2 = qaux (phi2, e);
    const beta1 = Math.asin(q1/qp);
    const beta2 = Math.asin(q2/qp);
    let term1 = Math.cos(beta1)*Math.sin(beta2)*Math.cos(lam1) - Math.sin(beta1)*Math.cos(beta2)*Math.cos(lam2);
    let term2 = Math.sin(beta1)*Math.cos(beta2)*Math.sin(lam2)-Math.cos(beta1)*Math.sin(beta2)*Math.sin(lam1);
    const lamp=Math.atan2(term1, term2);
  
    const betap = Math.atan(-Math.cos(lamp-lam1)/Math.tan(beta1));
    let q = qp*Math.sin(betap);
    let phip = Math.asin(q/2);
    let i =0;
    let diff = 0;
    do {
      let phi_new  = phi_iter (phip, q, e);
      i++;
      diff = Math.abs (phi_new - phip);
      phip = phi_new;
    } while (diff > 1e-7*D2R && i<10);

    MathJax.Hub.getAllJax("qp_ello_inv")[0].Text(`q_p=${fmt(qp)}`);
 
    const B = this.b+this.a2*Math.cos(2*phip)+this.a4*Math.cos(4*phip)+this.a6*Math.cos(6*phip);
    const A2 = this.b2 + this.a22*Math.cos(2*phip)+this.a24*Math.cos(4*phip)+this.a26*Math.cos(6*phip);
    const A4 = this.b4 + this.a42*Math.cos(2*phip)+this.a44*Math.cos(4*phip)+this.a46*Math.cos(6*phip);
    let lamprime = x/(a*h0*B);
    let jax = `\\eqalign{
      \\lambda' &= [${fmt(x,true,0)}/(${fmt(a,true,0)}\\times${fmt(h0,true,0)}\\times${fmt(B)})]\\times180^\\circ/\\pi \\cr
               &= ${deg(lamprime, true)}
    }`
    MathJax.Hub.getAllJax("lamprime_ello_inv1")[0].Text(jax);
    MathJax.Hub.getAllJax("lamprime_ello_inv1-1")[0].Text(`${deg(lamprime)}`);

    let lamprime2 = (x/(a*h0)-A2*Math.sin(2*lamprime)-A4*Math.sin(4*lamprime))/B;
    jax = `\\eqalign{
      \\lambda' =& [${fmt(x,true,0)}/(${fmt(a,true,0)}\\times${fmt(h0,true,0)})\\times180^\\circ/\\pi \\cr
                 & -${fmt(A2)}\\times\\sin(2\\times${deg(lamprime)}) \\cr
                 & -${fmt(A4)}\\times\\sin(4\\times${deg(lamprime)})]/${fmt(B)} \\cr
                =&  ${deg(lamprime2)}
    }`
    MathJax.Hub.getAllJax("lamprime_ello_inv2")[0].Text(jax);
    MathJax.Hub.getAllJax("lamprime_ello_inv2-1")[0].Text(`${deg(lamprime2)}`);
    lamprime = (x/(a*h0)-A2*Math.sin(2*lamprime2)-A4*Math.sin(4*lamprime2))/B;
    MathJax.Hub.getAllJax("lamprime_ello_inv3")[0].Text(`${deg(lamprime)}`);
    MathJax.Hub.getAllJax("lamprime_ello_inv")[0].Text(`\\lambda' = ${deg(lamprime)}`);

    const F = B+2*A2*Math.cos(2*lamprime)+4*A4*Math.cos(4*lamprime);
    MathJax.Hub.getAllJax("f_ello_inv")[0].Text(`F = ${fmt(F, true)}`);
   
    const betaprime = Math.asin(2*F*h0*y/(a*qp));
    jax = `\\eqalign{
      \\beta' =& \\arcsin[2\\times${fmt(F)}\\times${fmt(h0, true, 0)}\\times${fmt(y,false,0)}/ \\cr
               & (${fmt(a,true,0)}\\times${fmt(qp)})] \\cr
              =& ${deg(betaprime, true)} 
    }`
    MathJax.Hub.getAllJax("betaprime_ello_inv")[0].Text(jax);

    const beta = Math.asin(Math.sin(betap)*Math.sin(betaprime)+Math.cos(betap)*Math.cos(betaprime)*Math.sin(lamprime));
    jax = `\\eqalign{
      \\beta =& \\arcsin(\\sin${deg(betap)}\\sin${deg(betaprime)} \\cr
              & + \\cos${deg(betap)}\\sin${deg(betaprime)}\\sin${deg(lamprime)}) \\cr
             =& ${deg(beta, true)} 
    }`
    MathJax.Hub.getAllJax("beta_ello_inv")[0].Text(jax);

    term1 = Math.cos(betaprime)*Math.cos(lamprime);
    term2 = Math.cos(betap)*Math.sin(betaprime)-Math.sin(betap)*Math.cos(betaprime)*Math.sin(lamprime);
    const lam = lamp + Math.atan2(term1, term2);
    jax = `\\eqalign{
      \\lambda =& ${deg(lamp)} + \\arctan[\\cos${deg(betaprime)}\\cos${deg(lamprime)}/ \\cr
                & \\cos${deg(betap)}\\sin${deg(betaprime)} \\cr
                & - \\sin${deg(betap)}\\cos${deg(betaprime)}\\sin${deg(lamprime)}] \\cr
               =& ${deg(lamp)} + \\arctan[${fmt(term1)}/${fmt(term2)}] \\cr
               =& ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_ello_inv")[0].Text(jax);

    q = qp*Math.sin(beta);
    let phi = Math.asin(q/2);
    i =0;
    diff = 0;
    do {
      let phi_new  = phi_iter (phi, q, e);
      i++;
      diff = Math.abs (phi_new - phi);
      phi = phi_new;
    } while (diff > 1e-7*D2R && i<10);

    MathJax.Hub.getAllJax("phi_ello_inv")[0].Text(`\\phi=${deg(phi,true)}`);
   
  }
}