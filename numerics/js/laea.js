var sph = {
  r : 3, phi1 : 40*D2R, lam0 : -100*D2R,
  set_fwd () {
    this.r = document.getElementById("r_sph_in").value;
    this.phi1 = document.getElementById("phi1_sph_in").value*D2R;
    this.lam0 = document.getElementById("lam0_sph_in").value*D2R;

    const {r, lam0, phi1} = this
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lam_sph_in").value*D2R;

    const kprime=Math.sqrt(2/(1+Math.sin(phi1)*Math.sin(phi)+Math.cos(phi1)*Math.cos(phi)*Math.cos(lam-lam0)));
    let jax = `\\eqalign{
      k' &= \\{2/[1+\\sin${deg(phi1,false)}\\sin${deg(phi,false)}+\\cos${deg(phi1,false)}\\cos${deg(phi,false)}\\cos(${deg(lam,true)}-${deg(lam0,false)})] \\}^{1/2} \\cr
         &= ${fmt(kprime, true)}
    }`
    MathJax.Hub.getAllJax("kprime")[0].Text(jax);
    const x = r*kprime*Math.cos(phi)*Math.sin(lam-lam0);
    jax = `\\eqalign{
      x &= ${fmt(r,false,0)}\\times${fmt(kprime)}\\cos${deg(phi,false)}\\sin(${deg(lam,true)}-${deg(lam0,false)}) \\cr
        &= ${fmt(x,true)}\\text{ units} 
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);
    document.getElementById("x_sph_in").value = fmt(x,true);

    const y = r*kprime*(Math.cos(phi1)*Math.sin(phi)-Math.sin(phi1)*Math.cos(phi)*Math.cos(lam-lam0));
    jax = `\\eqalign{
      y &= ${fmt(r,false,0)}\\times${fmt(kprime)}[\\cos${deg(phi1,false)}\\sin${deg(phi,false)}-\\sin${deg(phi1,false)}\\cos${deg(phi,false)}\\cos(${deg(lam,true)}-${deg(lam0,false)})] \\cr
        &= ${fmt(y,true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
    document.getElementById("y_sph_in").value = fmt(y,true);
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
    }`
    MathJax.Hub.getAllJax("rho_sph")[0].Text(jax);

    const c = 2*Math.asin(rho/(2*r));
    jax = `\\eqalign{
      c &= 2\\arcsin[${fmt(rho)}/(2\\times${fmt(r,false,0)})] \\cr
        &= ${deg(c, true)}
    }`
    MathJax.Hub.getAllJax("c_sph")[0].Text(jax);

    const phi = Math.asin(Math.cos(c)*Math.sin(phi1)+y*Math.sin(c)*Math.cos(phi1)/rho);
    jax = `\\eqalign{
      \\phi =& \\arcsin[\\cos${deg(c)}\\sin${deg(phi1,false)}+${fmt(y,false,0)}\\sin${fmt(c)}\\cr
             & \\cos${deg(phi1,false)}/${fmt(rho)}] \\cr
            =& ${deg(phi,true)} 
    }`
    MathJax.Hub.getAllJax("phi_sph")[0].Text(jax);

    const lam = lon_adj(lam0+Math.atan2(x*Math.sin(c), rho*Math.cos(phi1)*Math.cos(c) - y*Math.sin(phi1)*Math.sin(c)));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)} + \\arctan[${fmt(x,true,0)}\\sin${deg(c)} / \\cr
                & (${fmt(rho)}\\cos${deg(phi1,false)}\\cos${deg(c)} \\cr
                & -${fmt(y,false,0)}\\sin${deg(phi1,false)}\\sin${deg(c)})] \\cr
               =& ${deg(lam0,true)} + \\arctan[${fmt(x*Math.sin(c), true)}/${fmt(rho*Math.cos(phi1)*Math.cos(c) - y*Math.sin(phi1)*Math.sin(c))}] \\cr
               =& ${deg(lam0,true)} + ${deg(Math.atan2(x*Math.sin(c), (rho*Math.cos(phi1)*Math.cos(c) - y*Math.sin(phi1)*Math.sin(c))))} \\cr
               =& ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_sph")[0].Text(jax);
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
  m(phi) {
    return Math.cos(phi)/Math.sqrt(1-this.e2*Math.sin(phi)**2);
  },
  q(phi) {
    return (1-this.e2)*(Math.sin(phi)/(1-this.e2*Math.sin(phi)**2)-1/(2*this.e)*Math.log((1-this.e*Math.sin(phi))/(1+this.e*Math.sin(phi))));
  },
  set_fwd () {
    const {a, e, e2} = this;
    let jax;
    const phi1 = document.getElementById("phi1_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam = document.getElementById("lam_ell_in").value*D2R;

    const q = this.q(phi);
    jax = `\\eqalign{
      q =& (1-${fmt(e2)})\\{\\sin ${deg(phi,false)}/(1-${fmt(e2)}) \\cr
         & -[1/(2\\times${fmt(e)})\\ln[(1-${fmt(e)}\\sin^2 ${deg(phi,false)})/ \\cr
         & (1+${fmt(e)}\\sin^2 ${deg(phi,false)})] \\} \\cr
        =& ${fmt(q, true)} 
    }`;
    MathJax.Hub.getAllJax("q")[0].Text(jax);
    MathJax.Hub.getAllJax("phi_ell_1")[0].Text(deg(phi,false));
    MathJax.Hub.getAllJax("phi_ell_2")[0].Text(deg(phi,false));
    MathJax.Hub.getAllJax("phi1_ell")[0].Text(`\\phi_1 = ${deg(phi1,false)}`);
    const q1 = this.q(phi1);
    MathJax.Hub.getAllJax("q1")[0].Text(`q_1 = ${fmt(q1, true)}`);
    const qp = this.q(Math.PI/2);
    MathJax.Hub.getAllJax("qp")[0].Text(`q_p= ${fmt(qp, true)}`);

    const beta = Math.asin(q/qp);
    jax = `\\eqalign{
      \\beta &= \\arcsin(${fmt(q)}/${fmt(qp)}) \\cr
             &= ${deg(beta, true)}
    }`
    MathJax.Hub.getAllJax("beta")[0].Text(jax);

    const beta1 = Math.asin(q1/qp);
    jax = `\\eqalign{
      \\beta_1 &= \\arcsin(${fmt(q1)}/${fmt(qp)}) \\cr
             &= ${deg(beta1, true)}
    }`
    MathJax.Hub.getAllJax("beta1")[0].Text(jax);

    const Rq = a*Math.sqrt(qp/2);
    jax = `\\eqalign{
      R_q &= ${fmt(a,true,0)}\\times(${fmt(qp)}/2)^{1/2} \\cr
          &= ${fmt(Rq,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("Rq")[0].Text(jax);

    const m1 = this.m(phi1);
    jax = `\\eqalign{
      m_1 &= \\cos${deg(phi1,false)}/(1-${fmt(e2)}\\sin^2${deg(phi1,false)})^{1/2} \\cr
          &= ${fmt(m1,true)}
    }`
    MathJax.Hub.getAllJax("m1")[0].Text(jax);

    const B = Rq*Math.sqrt(2/(1+Math.sin(beta1)*Math.sin(beta)+Math.cos(beta1)*Math.cos(beta)*Math.cos(lam-lam0)));
    jax = `\\eqalign{
      B =& ${fmt(Rq,false,2)}\\times\\{ 2/[1+\\sin${deg(beta1)}\\sin${deg(beta)} \\cr
         & + \\cos${deg(beta1)}\\cos${deg(beta)}\\cos(${deg(lam,true)}-${deg(lam0,false)})]\\}^{1/2} \\cr
        =& ${fmt(B,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("B")[0].Text(jax);

    const D = a*m1/(Rq*Math.cos(beta1));
    jax = `\\eqalign{
      D &= ${fmt(a,true,0)}\\times${fmt(m1)}/(${fmt(Rq,false,2)}\\cos${deg(beta1)}) \\cr
        &= ${fmt(D)}
    }`
    MathJax.Hub.getAllJax("D")[0].Text(jax);

    const x = B*D*Math.cos(beta)*Math.sin(lam-lam0);
    jax =`\\eqalign{
      x &= ${fmt(B,true,2)}\\times${fmt(D)}\\cos${deg(beta)}\\sin(${deg(lam,true)}-${deg(lam0,false)}) \\cr
        &= ${fmt(x,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("x_ell")[0].Text(jax);
    document.getElementById("x_ell_in")=fmt(x,true,1);

    const y = (B/D)*(Math.cos(beta1)*Math.sin(beta)-Math.sin(beta1)*Math.cos(beta)*Math.cos(lam-lam0))
    jax = `\\eqalign{
      y =& (${fmt(B,false,2)}/${fmt(D)})[\\cos${deg(beta1)}\\sin${deg(beta)} \\cr
         & - \\sin${deg(beta1)}\\cos${deg(beta)}\\cos(${deg(lam,true)}-${deg(lam0,false)})]\\cr
        =& ${fmt(y,true,2)}\\text{ m} 
    }`
    MathJax.Hub.getAllJax("y_ell")[0].Text(jax);
    document.getElementById("y_ell_in")=fmt(y,true,1);
  },
  set_inv () {
    const {a, e, e2} = this;
    let jax;
    const phi1 = document.getElementById("phi1_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;
    const x = +document.getElementById("x_ell_in").value;
    const y = +document.getElementById("y_ell_in").value;

    const qp = this.q(Math.PI/2);
    MathJax.Hub.getAllJax("qp_inv")[0].Text(`q_p= ${fmt(qp, true)}`);

    const q1 = this.q(phi1);
    const beta1 = Math.asin(q1/qp);
    MathJax.Hub.getAllJax("beta1_inv")[0].Text(`\\beta_1 = ${deg(beta1, true)}`);
    const Rq = a*Math.sqrt(qp/2);
    MathJax.Hub.getAllJax("Rq_inv")[0].Text(`R_q = ${fmt(Rq,true,2)}\\text{ m}`);
    const m1 = this.m(phi1);
    const D = a*m1/(Rq*Math.cos(beta1));
    MathJax.Hub.getAllJax("D_inv")[0].Text(`D = ${fmt(D)}`);

    const rho = Math.sqrt((x/D)**2+(y*D)**2);
    jax = `\\eqalign{
      \\rho &= [(${fmt(x,true,0)}/${fmt(D)})^2 + (${fmt(y,true,0)}\\times${fmt(D)})^2]^{1/2} \\cr
            &= ${fmt(rho, true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("rho_inv")[0].Text(jax);

    const ce = 2*Math.asin(rho/(2*Rq));
    jax = `\\eqalign{
      c_e &= 2\\arcsin[${fmt(rho,false,2)}/(2\\times${fmt(Rq,false,2)})]\\cr
          &= ${deg(ce, true)}
    }`
    MathJax.Hub.getAllJax("ce_inv")[0].Text(jax);
    
    const q = qp*(Math.cos(ce)*Math.sin(beta1)+D*y*Math.sin(ce)*Math.cos(beta1)/rho);
    jax = `\\eqalign{
      q =& ${fmt(qp)}[\\cos${deg(ce)}\\sin${deg(beta1)}\\cr
         & +${fmt(D)}\\times${fmt(y,false,0)}\\sin${deg(ce)}\\cr
         & \\cos${deg(beta1)}/${fmt(rho,false,2)}] \\cr
        =& ${fmt(q)} 
    }`
    MathJax.Hub.getAllJax("q_inv")[0].Text(jax);

    let phi = Math.asin(q/2);
    jax =`\\eqalign{
      \\phi &= \\arcsin(${fmt(q)}/2) \\cr
            &= ${deg(phi, true)}
    }`
    MathJax.Hub.getAllJax("phi0_inv")[0].Text(jax);
    MathJax.Hub.getAllJax("phi0_inv1")[0].Text(deg(phi));

    const iter_fun = (phi)=>phi +(1-e2*Math.sin(phi)**2)**2/(2*Math.cos(phi))*(q/(1-e2)-Math.sin(phi)/(1-e2*Math.sin(phi)**2)+1/(2*e)*Math.log((1-e*Math.sin(phi))/(1+e*Math.sin(phi))));
    let phinew = iter_fun(phi);
    jax =`\\eqalign{
      \\phi = & ${deg(phi)}+[(1-${fmt(e)}\\sin^2${deg(phi)})^2/ \\cr
              & (2\\cos${deg(phi)})]\\times \\{ ${fmt(q)}/(1-${fmt(e2)}) \\cr
              & - \\sin${deg(phi)}/(1-${fmt(e2)}\\sin^2${deg(phi)}) \\cr
              & +[1/(2\\times${fmt(e)})]\\ln[(1-${fmt(e)}\\sin${deg(phi)})/ \\cr
              & (1+${fmt(e)}\\sin${deg(phi)})] \\}\\times 180^\\circ/\\pi \\cr
             =& ${deg(phinew)} 
    }`
    MathJax.Hub.getAllJax("phi1_inv")[0].Text(jax);
    MathJax.Hub.getAllJax("phi1_inv1")[0].Text(deg(phinew));
    phi = phinew;
    phi = iter_fun(phi);
    MathJax.Hub.getAllJax("phi_inv")[0].Text(`\\phi = ${deg(phi)}`);

    const lam = lam0 + Math.atan2(x*Math.sin(ce), (D*rho*Math.cos(beta1)*Math.cos(ce)- D**2*y*Math.sin(beta1)*Math.sin(ce)));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)} + \\arctan\\{ ${fmt(x,false,0)}\\sin${deg(ce)}/[${fmt(D)} \\cr
                & \\times ${fmt(rho,false,2)}\\cos${deg(beta1)}\\cos${deg(ce)} \\cr
                & - ${fmt(D)}^2\\times${fmt(y,false,0)}\\sin${deg(beta1)}\\sin${deg(ce)}] \\} \\cr
               =& ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_inv")[0].Text(jax);
  }
}

var pol = {
  a: 6378388.,
  e2:  0.00672267,
  e: 0.0819919,
  southern: false,
  lam0: -100*D2R,

  m(phi) {
    return Math.cos(phi)/Math.sqrt(1-this.e2*Math.sin(phi)**2);
  },
  q(phi) {
    return (1-this.e2)*(Math.sin(phi)/(1-this.e2*Math.sin(phi)**2)-1/(2*this.e)*Math.log((1-this.e*Math.sin(phi))/(1+this.e*Math.sin(phi))));
  },
 select (ellip) {
    if (ellip == 0) { //International
      this.a = 6378388.;
      inv_f = 297.;
    } else if (ellip == 1) { //WGS-84
      this.a = 6378137.;
      inv_f = 298.257223563;
    }
    this.e2 = 2 / inv_f - 1 / inv_f ** 2;
    this.e = Math.sqrt(this.e2);
    document.getElementById("pol_a").innerHTML = this.a + " m";
    document.getElementById("pol_e2").innerHTML = this.e2.toFixed(7);
    document.getElementById("pol_e").innerHTML = this.e.toFixed(7);

    this.set_fwd();
  },

  set_fwd () {
    this.lam0 = document.getElementById("lam0_pol_in").value*D2R;
    this.southern = (document.getElementById("phi1_pol_in").value == -90);
    
    const {a, e, e2} = this;
    let jax;
    let lam0 = this.lam0;
    let phi = document.getElementById("phi_pol_in").value*D2R;
    let lam = document.getElementById("lam_pol_in").value*D2R;
    MathJax.Hub.getAllJax("phi_pol1")[0].Text(deg(phi,true));

    const q = this.q(phi);
    jax = `\\eqalign{
      q =& (1-${fmt(e2)})\\{\\sin ${deg(phi,false)}/(1-${fmt(e2)}) \\cr
         & -[1/(2\\times${fmt(e)})\\ln[(1-${fmt(e)}\\sin^2 ${deg(phi,false)})/ \\cr
         & (1+${fmt(e)}\\sin^2 ${deg(phi,false)})] \\} \\cr
        =& ${fmt(q, true)} 
    }`;
    MathJax.Hub.getAllJax("q_pol")[0].Text(jax);

    const qp = this.q(Math.PI/2);
    MathJax.Hub.getAllJax("qp_pol")[0].Text(`q_p = ${fmt(qp,true)}`);

    const m = this.m(phi);
    jax = `\\eqalign{
      m &= \\cos${deg(phi,false)}/(1-${fmt(e2)}\\sin^2${deg(phi,false)})^{1/2} \\cr
        &= ${fmt(m,true)}
    }`
    MathJax.Hub.getAllJax("m_pol")[0].Text(jax);

    const rho = a*Math.sqrt(qp+ (this.soutehrn?q:-q));
    if (this.southern) {
      jax = `\\eqalign{
        \\rho &= ${fmt(a,true,0)}\\times(${fmt(qp)}+${fmt(q)})^{1/2} \\cr
              &= ${fmt(rho,true,2)}\\text{ m}
      }`
    } else {
      jax = `\\eqalign{
        \\rho &= ${fmt(a,true,0)}\\times(${fmt(qp)}-${fmt(q)})^{1/2} \\cr
              &= ${fmt(rho,true,2)}\\text{ m}
      }`
    }
    MathJax.Hub.getAllJax("rho_pol")[0].Text(jax);

    const x = rho*Math.sin(lam-lam0);
    jax = `\\eqalign{
      x &= ${fmt(rho,false,2)}\\sin[${deg(lam,true)}-${deg(lam0,false)}] \\cr
        &= ${fmt(x, true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("x_pol")[0].Text(jax);
    document.getElementById("x_pol_in").value = fmt(x,true,1);

    let y;
    if (this.southern) {
    y = rho*Math.cos(lam-lam0);
    jax = `\\eqalign{
      y &= ${fmt(rho,false,2)}\\cos[${deg(lam,true)}-${deg(lam0,false)}] \\cr
        &= ${fmt(y, true,2)}\\text{ m}
      }`
    } else {
      y = -rho*Math.cos(lam-lam0);
      jax = `\\eqalign{
        y &= -${fmt(rho,false,2)}\\cos[${deg(lam,true)}-${deg(lam0,false)}] \\cr
          &= ${fmt(y, true,2)}\\text{ m}
        }`
    }
    MathJax.Hub.getAllJax("y_pol")[0].Text(jax);
    document.getElementById("y_pol_in").value = fmt(y,true,1);

    const k = rho/(a*m);
    jax = `\\eqalign{
      k &= ${fmt(rho,false,2)}/(${fmt(a,false,0)}\\times${fmt(m)}) \\cr
        &= ${fmt(k,true)}
    }`
    MathJax.Hub.getAllJax("k_pol")[0].Text(jax);

    const h = 1/k;
    jax = `\\eqalign{
      h &= 1/${fmt(k)} \\cr
        &= ${fmt(h, true)}
    }`
    MathJax.Hub.getAllJax("h_pol")[0].Text(jax);
    this.set_inv ();
  },

  set_inv () {
    const {a, e, e2} = this;
    let jax;

    let lam0 = this.lam0;
    let x = +document.getElementById("x_pol_in").value;
    let y = +document.getElementById("y_pol_in").value;

    const qp = this.q(Math.PI/2);
    MathJax.Hub.getAllJax("qp_pol_inv")[0].Text(fmt(qp, true));

    const rho = Math.sqrt(x**2+y**2);
    jax = `\\eqalign{
      \\rho &= (${fmt(x,false,0)}^2 + ${fmt(y,false,0)}^2)^{1/2} \\cr
            &= ${fmt(rho, true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("rho_pol_inv")[0].Text(jax);
   
    let q = qp-(rho/a)**2;
    if (this.southern) {
      q = -q;
      jax = `\\eqalign{
        q &= -[${fmt(qp)}-(${fmt(rho,true,2)}/${fmt(a,true,0)})^2] \\cr
          &= ${fmt(q)}
      }`
    } else {
      jax = `\\eqalign{
        q &= +[${fmt(qp)}-(${fmt(rho,true,2)}/${fmt(a,true,0)})^2] \\cr
          &= ${fmt(q)}
      }`
    }
    MathJax.Hub.getAllJax("q_pol_inv")[0].Text(jax);

    let phi = Math.asin(q/2);
    jax =`\\eqalign{
      \\phi &= \\arcsin(${fmt(q)}/2) \\cr
            &= ${deg(phi, true)}
    }`
    MathJax.Hub.getAllJax("phi0_pol_inv")[0].Text(jax);

    const iter_fun = (phi)=>phi +(1-e2*Math.sin(phi)**2)**2/(2*Math.cos(phi))*(q/(1-e2)-Math.sin(phi)/(1-e2*Math.sin(phi)**2)+1/(2*e)*Math.log((1-e*Math.sin(phi))/(1+e*Math.sin(phi))));

    phi = iter_fun(phi);
    MathJax.Hub.getAllJax("phi1_pol_inv")[0].Text(`\\phi = ${deg(phi,true)}`);

    phi = iter_fun(phi);
    MathJax.Hub.getAllJax("phi2_pol_inv")[0].Text(`\\phi = ${deg(phi,true)}`);

    phi = iter_fun(phi);
    MathJax.Hub.getAllJax("phi3_pol_inv")[0].Text(`\\phi = ${deg(phi,true)}`);

    const lam = lon_adj(lam0 + Math.atan2(x, this.southern?y:-y));
    if (this.southern) {
      jax = `\\eqalign{
        \\lambda &= ${deg(lam0,true)} + \\arctan[${fmt(x,true,0)}/${fmt(y,false,0)}] \\cr
                 &= ${deg(lam, true)}
      }`
    } else {
      jax = `\\eqalign{
        \\lambda &= ${deg(lam0,true)} + \\arctan[${fmt(x,true,0)}/(-${fmt(y,false,0)})] \\cr
                 &= ${deg(lam, true)}
      }`
    }
    MathJax.Hub.getAllJax("lam_pol_inv")[0].Text(jax);
  }
}