var sph = {
  r : 1, phi1 : 40*D2R, lam0 : -100*D2R, k0: 1.0,
  set_fwd () {
    this.r = document.getElementById("r_sph_in").value;
    this.phi1 = document.getElementById("phi1_sph_in").value*D2R;
    this.lam0 = document.getElementById("lam0_sph_in").value*D2R;
    this.k0 = document.getElementById("k0_sph_in").value;

    const {r, lam0, phi1, k0} = this
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lam_sph_in").value*D2R;

    let jax;
    const k = 2*k0/(1+Math.sin(phi1)*Math.sin(phi)+Math.cos(phi1)*Math.cos(phi)*Math.cos(lam-lam0));
    jax = `\\eqalign {
      k &= 2\\times ${fmt(k0,false,0)}/[1+\\sin${deg(phi1)}\\sin${deg(phi)}+\\cos${deg(phi1)}\\cos${deg(phi)}\\cos(${deg(lam,true)}-${deg(lam0)})] \\cr
        &= ${fmt(k, true)}
    }`
    MathJax.Hub.getAllJax("k_sph")[0].Text(jax);

    const x = r*k*Math.cos(phi)*Math.sin(lam-lam0);
    jax =`\\eqalign{
      x &= ${fmt(r,true,0)}\\times${fmt(k)}\\cos${deg(phi)}\\sin(${deg(lam,true)}-${deg(lam0)}) \\cr
        &= ${fmt(x, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);
    document.getElementById("x_sph_in").value = fmt(y,true);

    const y = r*k*(Math.cos(phi1)*Math.sin(phi)-Math.sin(phi1)*Math.cos(phi)*Math.cos(lam-lam0));
    jax = `\\eqalign{
      y &= ${fmt(r,true,0)}\\times${fmt(k)}[\\cos${deg(phi1)}\\sin${deg(phi,true)} - \\sin${deg(phi1)}\\cos${deg(phi,true)}\\cos(${deg(lam,true)}-${deg(lam0)})] \\cr
        &= ${fmt(y,true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
    document.getElementById("y_sph_in").value = fmt(y,true);
    this.set_inv()
  },
  set_inv () {
    const {r, phi1, lam0, k0} = this;
    const x = document.getElementById("x_sph_in").value;
    const y = document.getElementById("y_sph_in").value;

    let jax;

    const rho = Math.sqrt(x**2 + y**2);
    jax = `
      \\rho = [${fmt(x,false,0)}^2 + ${fmt(y,false,0)}^2]^{1/2} = ${fmt(rho)}\\;\\text{units}
    `
    MathJax.Hub.getAllJax("rho_sph")[0].Text(jax);

    const c = 2*Math.atan(rho/(2*r*k0));
    jax = `\\eqalign{
      c &= 2 \\arctan[${fmt(rho)}/(2\\times${fmt(r,false,0)}\\times${fmt(k0,false,0)})] \\cr
        &= ${deg(c, true)}
    }`
    MathJax.Hub.getAllJax("c_sph")[0].Text(jax);

    const phi = Math.asin(Math.cos(c)*Math.sin(phi1)+(y*Math.sin(c)*Math.cos(phi1)/rho));
    jax = `\\eqalign{
      \\phi =& \\arcsin[\\cos${deg(c)}\\sin${deg(phi1)} + ${fmt(y,false,0)}\\sin${deg(c)} \\cr
             & \\cos${deg(phi1)}/${fmt(rho)}] \\cr
            =& ${deg(phi, true)} 
    }`
    MathJax.Hub.getAllJax("phi_sph")[0].Text(jax);

    const lam = lam0 + Math.atan2(x*Math.sin(c), rho*Math.cos(phi1)*Math.cos(c) - y*Math.sin(phi1)*Math.sin(c));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)} + \\arctan[${fmt(x,true,0)}\\sin${deg(c)}/(${fmt(rho,true)} \\cr
                &\\cos${deg(phi1)}\\cos${deg(c)} - ${fmt(y,false,0)}\\sin${deg(phi1)} \\sin${deg(c)})] \\cr
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

  chi (phi) {
    const sphi = Math.sin(phi);
    return 2*Math.atan(Math.sqrt((1+sphi)/(1-sphi)*((1-this.e*sphi)/(1+this.e*sphi))**this.e))-Math.PI/2;
  },

  set_fwd () {
    const {a, e, e2} = this;
    let jax;
    const phi1 = document.getElementById("phi1_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;
    const k0 = document.getElementById("k0_ell_in").value;
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam = document.getElementById("lam_ell_in").value*D2R;

    const chi1 = this.chi(phi1);
    let tmp = Math.tan(Math.PI/4+phi1/2)*((1-e*Math.sin(phi1))/(1+e*Math.sin(phi1)))**(e/2);
    jax = `\\eqalign{
      \\chi_1 =& 2\\arctan\\{ \\tan(45^\\circ + ${deg(phi1)}/2)[(1-${fmt(e)}\\sin${deg(phi1)})/ \\cr
               & (1+${fmt(e)}\\sin${deg(phi1)})]^{${fmt(e)}/2} \\} -90^\\circ \\cr
              =& 2\\arctan${fmt(tmp)}-90^\\circ \\cr
              =& ${deg(chi1, true)}
    }`
    MathJax.Hub.getAllJax("chi1")[0].Text(jax);

    const chi = this.chi(phi);
    tmp = Math.tan(Math.PI/4+phi/2)*((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2);
    jax = `\\eqalign{
      \\chi =& 2\\arctan\\{ \\tan(45^\\circ + ${deg(phi)}/2)[(1-${fmt(e)}\\sin${deg(phi)})/ \\cr
             & (1+${fmt(e)}\\sin${deg(phi)})]^{${fmt(e)}/2} \\} -90^\\circ \\cr
            =& 2\\arctan${fmt(tmp)}-90^\\circ \\cr
            =& ${deg(chi, true)}
    }`
    MathJax.Hub.getAllJax("chi")[0].Text(jax);

    const m1 = this.m(phi1);
    jax = `\\eqalign{
      m_1 &= \\cos${deg(phi1)}/(1-${fmt(e2)}\\sin^2${deg(phi1)})^{1/2} \\cr
          &= ${fmt(m1, true)}
    }`
    MathJax.Hub.getAllJax("m1")[0].Text(jax);

    const m = this.m(phi);
    jax = `\\eqalign{
      m &= \\cos${deg(phi)}/(1-${fmt(e2)}\\sin^2${deg(phi)})^{1/2} \\cr
        &= ${fmt(m, true)}
    }`
    MathJax.Hub.getAllJax("m")[0].Text(jax);

    const A = 2*a*k0*m1/(Math.cos(chi1)*(1+Math.sin(chi1)*Math.sin(chi)+Math.cos(chi1)*Math.cos(chi)*Math.cos(lam-lam0)));
    jax = `\\eqalign{
      A =& 2\\times${fmt(a,false,0)}\\times${fmt(k0,false,0)}\\times${fmt(m1)}/\\{ \\cos${deg(chi1)} \\cr
         & [1+\\sin${deg(chi1)}\\sin${deg(chi)} + \\cos${deg(chi1)} \\cr
         & \\cos${deg(chi)}\\cos(${deg(lam,true)}-${deg(lam0)})]\\} \\cr
        =& ${fmt(A,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("A")[0].Text(jax);

    const x = A*Math.cos(chi)*Math.sin(lam-lam0);
    jax =`\\eqalign{
      x &= ${fmt(A,false,2)}\\cos${deg(chi)}\\sin(${deg(lam,true)}-${deg(lam0)}) \\cr
        &= ${fmt(x,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("x")[0].Text(jax);
    document.getElementById("x_ell_in").value = fmt(x,true,1);

    const y = A*(Math.cos(chi1)*Math.sin(chi)-Math.sin(chi1)*Math.cos(chi)*Math.cos(lam-lam0));
    jax = `\\eqalign{
      y =& ${fmt(A,false,2)}[\\cos${deg(chi1)}\\sin${deg(chi)} \\cr
         & - \\sin${deg(chi1)}\\cos${deg(chi)}\\cos(${deg(lam,true)}-${deg(lam0)})] \\cr
        =& ${fmt(y,true,2)}\\;\\text{m} 
    }`
    MathJax.Hub.getAllJax("y")[0].Text(jax);
    document.getElementById("y_ell_in").value = fmt(y,true,1);

    const k = A*Math.cos(chi)/(a*m);
    jax = `\\eqalign{
      k &= ${fmt(a,false,2)}\\cos${deg(chi)}/(${fmt(a,true,2)}\\times${fmt(m)}) \\cr
        &= ${fmt(k,true)}
    }`
    MathJax.Hub.getAllJax("k")[0].Text(jax);
    this.set_inv ()
  },
  set_inv () {
    const {a, e, e2} = this;
    let jax;
    const phi1 = document.getElementById("phi1_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;
    const k0 = document.getElementById("k0_ell_in").value;
    const x = +document.getElementById("x_ell_in").value;
    const y = +document.getElementById("y_ell_in").value;

    const m1 = this.m(phi1);
    jax = `\\eqalign{
      m_1 &= \\cos${deg(phi1)}/(1-${fmt(e2)}\\sin^2${deg(phi1)})^{1/2} \\cr
          &= ${fmt(m1, true)}
    }`
    MathJax.Hub.getAllJax("m1_inv")[0].Text(jax);
   
    const chi1 = this.chi(phi1);
    MathJax.Hub.getAllJax("chi1_inv")[0].Text(`\\chi_1 = ${deg(chi1,true)}`);

    const rho = Math.sqrt(x**2+y**2);
    jax = `\\eqalign{
      \\rho &= [${fmt(x,false,0)}^2 + ${fmt(y,false,0)}^2]^{1/2} \\cr
            &= ${fmt(rho, true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("rho_inv")[0].Text(jax);

    const ce = 2*Math.atan(rho*Math.cos(chi1)/(2*a*k0*m1));
    jax = `\\eqalign{
      c_e =& 2\\arctan[${fmt(rho,false,2)}\\cos${deg(chi1)}/(2\\times${fmt(a,true,2)} \\cr
           & \\times${fmt(k0,false,0)})\\times${fmt(m1)}] \\cr
          =& ${deg(ce,true)}
    }`
    MathJax.Hub.getAllJax("ce_inv")[0].Text(jax);

    const chi = Math.asin(Math.cos(ce)*Math.sin(chi1)+y*Math.sin(ce)*Math.cos(chi1)/rho);
    jax = `\\eqalign{
      \\chi =& \\arcsin[\\cos${deg(ce)}\\sin${chi1}+${fmt(y,false,0)}\\sin${deg(ce)}\\cr
             & \\cos${deg(chi1)}/${fmt(rho,false,2)}] \\cr
            =& ${deg(chi, true)} 
    }`
    MathJax.Hub.getAllJax("chi_inv")[0].Text(jax);

    const phi_func = (phi)=>{return 2*Math.atan(Math.tan(Math.PI/4+chi/2)*((1+e*Math.sin(phi))/(1-e*Math.sin(phi)))**(e/2))-Math.PI/2}
    let phi_inv = phi_func(chi);
    jax = `\\eqalign{
      \\phi =& 2\\arctan\\{ \\tan(45^\\circ + ${deg(chi)}/2)[(1-${fmt(e)}\\sin${deg(chi)})/ \\cr
             & (1+${fmt(e)}\\sin${deg(chi)})]^{${fmt(e)}/2} \\} -90^\\circ \\cr
            =& ${deg(phi_inv, true)}
    }`
    MathJax.Hub.getAllJax("phi0_inv")[0].Text(jax);
    MathJax.Hub.getAllJax("phi0_inv_1")[0].Text(deg(phi_inv));

    jax = `\\eqalign{
      \\phi =& 2\\arctan\\{ \\tan(45^\\circ + ${deg(chi)}/2)[(1-${fmt(e)}\\sin${deg(phi_inv)})/ \\cr
             & (1+${fmt(e)}\\sin${deg(phi_inv)})]^{${fmt(e)}/2} \\} -90^\\circ \\cr
            =& ${deg(phi_func(phi_inv), true)}
    }`
    MathJax.Hub.getAllJax("phi1_inv")[0].Text(jax);
    phi_inv = phi_func(phi_inv);
    MathJax.Hub.getAllJax("phi1_inv_1")[0].Text(deg(phi_inv, true));
    phi_inv = phi_func(phi_inv);
    MathJax.Hub.getAllJax("phi_inv")[0].Text(`\\phi = ${deg(phi_inv, true)}`);
    
    const lam = lam0 + Math.atan2(x*Math.sin(ce), rho*Math.cos(chi1)*Math.cos(ce)-y*Math.sin(chi1)*Math.sin(ce));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)}+\\arctan[${fmt(x,true,0)}\\sin${deg(ce)} \\cr
             & (${fmt(rho,true,2)}\\cos${deg(chi1)}\\cos${deg(ce)} \\cr
             & -${fmt(y,false,2)}\\sin${deg(chi1)}\\sin${deg(ce)})] \\cr
            =& ${deg(lam0,true)}+\\arctan(${fmt(x*Math.sin(ce), true, 2)}/${fmt(rho*Math.cos(chi1)*Math.cos(ce)-y*Math.sin(chi1)*Math.sin(ce), false,2)}) \\cr
            =& ${deg(lam0,true)}+${deg(Math.atan2(x*Math.sin(ce), rho*Math.cos(chi1)*Math.cos(ce)-y*Math.sin(chi1)*Math.sin(ce)))} \\cr
            =& ${deg(lam,true)}
    }`
    MathJax.Hub.getAllJax("lam_inv")[0].Text(jax);

    phi_inv = chi+(e2/2+5*e2**2/24+e2**3/12+13*e2**4/360)*Math.sin(2*chi)
             + (7*e2**2/48+29*e2**3/240+811*e2**4/11520)*Math.sin(4*chi)
             + (7*e2**3/120+81*e2**4/1150)*Math.sin(6*chi)
             + 4279*e2**4/161280*Math.sin(8*chi);
    jax = `\\eqalign{
      \\phi =& ${deg(chi)}\\times \\pi/180^\\circ + (${fmt(e2)}/2 + 5\\times${fmt(e2)}^2/24 \\cr
             & ${fmt(e2)}^3/12)\\sin(2\\times${deg(chi)})+(7\\times${fmt(e2)}^2/48 \\cr
             & + 29\\times${fmt(e2)}^3/240)\\sin(4\\times${deg(chi)}) \\cr
             & + (7\\times${fmt(e2)}^3/120)\\sin(6\\times${deg(chi)}) \\cr
            =& ${fmt(phi_inv)}\\text{ radian} \\cr
            =& ${deg(phi_inv, true)}
    }`
    MathJax.Hub.getAllJax("phi_inv_alt")[0].Text(jax);
  }
}


var pol1 = {
  a: 6378388.,
  e2:  0.00672267,
  e: 0.0819919,
  southern: true,
  k0: 0.994,
  lam0: -100*D2R,

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
    document.getElementById("pol1_a").innerHTML = this.a + " m";
    document.getElementById("pol1_e2").innerHTML = this.e2.toFixed(7);
    document.getElementById("pol1_e").innerHTML = this.e.toFixed(7);

    this.set_fwd();
  },

  set_fwd () {
    this.lam0 = document.getElementById("lam0_pol1_in").value*D2R;
    this.k0 = document.getElementById("k0_pol1_in").value;
    this.southern = (document.getElementById("phi1_pol1_in").value == -90);
    
    const {a, e, e2, k0} = this;
    let jax;
    let lam0 = this.lam0;
    let phi = document.getElementById("phi_pol1_in").value*D2R;
    let lam = document.getElementById("lam_pol1_in").value*D2R;

    if (this.southern) {
      document.getElementById("south_pole1").style.display = "block"
      lam0 = -lam0;
      MathJax.Hub.getAllJax("lam0_val")[0].Text(`\\lambda_0=${deg(lam0,true)}`);
      phi = -phi;
      MathJax.Hub.getAllJax("phi_val")[0].Text(`\\phi=${deg(phi,true)}`);
      lam = -lam;
      MathJax.Hub.getAllJax("lam_val")[0].Text(`\\lambda=${deg(lam,true)}`);
    } else {
      document.getElementById("south_pole1").style.display = "none"
    }

    const t = Math.tan(Math.PI/4-phi/2)/((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2);
    jax=`\\eqalign{
      t &= \\tan(45^\\circ-${deg(phi)}/2)/[(1-${fmt(e)}\\sin ${deg(phi)})/(1+${fmt(e)}\\sin ${deg(phi)})]^{${fmt(e)}/2} \\cr
        &= ${fmt(t, true)}
    }`;
    MathJax.Hub.getAllJax("t_pol1")[0].Text(jax);

    const rho = 2*a*k0*t/Math.sqrt((1+e)**(1+e)*(1-e)**(1-e));
    jax=`\\eqalign{
      \\rho =& 2\\times${fmt(a,false,0)}\\times${fmt(k0,false,0)}\\times${fmt(t)}/[(1+${fmt(e)})^{(1+${fmt(e)})} \\cr
             & \\times(1-${fmt(e)})^{(1-${fmt(e)})}] \\cr
            =& ${fmt(rho,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("rho_pol1")[0].Text(jax);

    let x = rho*Math.sin(lam-lam0);
    jax = `\\eqalign{
      x &= ${fmt(rho,true,2)}\\sin(${deg(lam,true)}-${deg(lam0)}) \\cr
        &= ${fmt(x, true, 2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("x_pol1")[0].Text(jax);

    let y = -rho*Math.cos(lam-lam0);
    jax = `\\eqalign{
      y &= ${fmt(-rho,true,2)}\\cos(${deg(lam,true)}-${deg(lam0)}) \\cr
        &= ${fmt(y, true, 2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("y_pol1")[0].Text(jax);

    if (this.southern) {
      document.getElementById("south_pole2").style.display = "block"
      x = -x;
      MathJax.Hub.getAllJax("xs_pol1")[0].Text(`x = ${fmt(x, true,2)}\\text{ m}`);
      y = -y;
      MathJax.Hub.getAllJax("ys_pol1")[0].Text(`y = ${fmt(y, true,2)}\\text{ m}`);
    } else {
      document.getElementById("south_pole2").style.display = "none"
    }

    const m = Math.cos(phi)/Math.sqrt(1-e2*Math.sin(phi)**2);
    jax = `\\eqalign{
      m &= \\cos ${deg(phi)}/(1-${fmt(e2)}\\sin^2${deg(phi)})^{1/2}\\cr
        &= ${fmt(m, true)}
    }`
    MathJax.Hub.getAllJax("m_pol1")[0].Text(jax);

    const k = rho/(a*m);
    jax =`\\eqalign{
      k &= ${fmt(rho,true,2)}/(${fmt(a,true,0)}\\times${fmt(m)}) \\cr
        &= ${fmt(k, true)}
    }`
    MathJax.Hub.getAllJax("k_pol1")[0].Text(jax);

    document.getElementById("x_pol1_in").value = fmt(x,true,1);
    document.getElementById("y_pol1_in").value = fmt(y,true,1);
    this.set_inv ();
  },

  set_inv () {
    const {a, e, e2, k0} = this;
    let jax;

    let lam0 = this.lam0;
    let x = +document.getElementById("x_pol1_in").value;
    let y = +document.getElementById("y_pol1_in").value;
 
    if (this.southern) {
      document.getElementById("south_pole3").style.display = "block"
      lam0 = -lam0;
      MathJax.Hub.getAllJax("lam0_val_inv")[0].Text(`\\lambda_0=${deg(lam0,true)}`);
      x = -x;
      MathJax.Hub.getAllJax("x_val")[0].Text(`x=${fmt(x, true, 0)}\\text{ m}`);
      y = -y;
      MathJax.Hub.getAllJax("y_val")[0].Text(`y=${fmt(y, true, 0)}\\text{ m}`);
    } else {
      document.getElementById("south_pole3").style.display = "none"
    }
    const rho = Math.sqrt(x**2+y**2);
    jax = `\\eqalign{
      \\rho &= (${fmt(x,false,0)}^2 + ${fmt(y,false,0)}^2)^{1/2} \\cr
            &= ${fmt(rho, true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("rho_pol1_inv")[0].Text(jax);
    const t = rho*Math.sqrt((1+e)**(1+e)*(1-e)**(1-e))/(2*a*k0);
    jax =`\\eqalign{
      t =& ${fmt(rho,false,2)}\\times[(1+${fmt(e)})^{(1+${fmt(e)})} \\cr
         & (1-${fmt(e)})^{(1-${fmt(e)})}]^{1/2}/(2\\times${fmt(a,false,0)}\\times${fmt(k0,false,0)}) \\cr
        =& ${fmt(t,true)} 
    }`
    MathJax.Hub.getAllJax("t_pol1_inv")[0].Text(jax);

    let phi = Math.PI/2-2*Math.atan(t);
    jax = `\\eqalign{
      \\phi &= 90^\\circ - 2\\arctan ${fmt(t)} \\cr
           &= ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("phi0_pol1_inv")[0].Text(jax);
    MathJax.Hub.getAllJax("phi0_pol1_inv_1")[0].Text(deg(phi, true));

    const phi_func = (phi) =>{return Math.PI/2 - 2*Math.atan(t*((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2))}
    phi1 = phi_func(phi);
    jax =`\\eqalign{
      \\phi =& 90^\\circ - 2\\arctan\\{${fmt(t)}\\times[(1-${fmt(e)}\\sin${deg(phi)})/ \\cr
             & (1+${fmt(e)}\\sin${deg(phi)})]^{${fmt(e)}/2} \\} \\cr
            =& ${deg(phi1,true)}
    }`
    MathJax.Hub.getAllJax("phi1_pol1_inv")[0].Text(jax);
    phi = phi_func(phi1);
    jax = `\\phi = ${deg(phi,true)}`
    MathJax.Hub.getAllJax("phi_pol1_inv")[0].Text(jax);
    let lam = lam0+Math.atan2(x,-y);
    lam = lon_adj(lam);
    jax =`\\eqalign{
      \\lambda &= ${deg(lam0,true)} + \\arctan[${fmt(x,false,0)}/${fmt(-y,false,0)}] \\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_pol1_inv")[0].Text(jax);
    if (this.southern) {
      document.getElementById("south_pole4").style.display = "block"
      phi = -phi;
      lam = -lam;
      MathJax.Hub.getAllJax("phi_pol1_inv_val")[0].Text(`\\phi = ${deg(phi,true)}`);
      MathJax.Hub.getAllJax("lam_pol1_inv_val")[0].Text(`\\lambda = ${deg(lam,true)}`);
    } else {
      document.getElementById("south_pole4").style.display = "none"
    }
  }
}

var pol2 = {
  a: 6378388.,
  e2:  0.00672267,
  e: 0.0819919,
  phic: -71*D2R,
  lam0: -100*D2R,
  southern: true,

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
    document.getElementById("pol2_a").innerHTML = this.a + " m";
    document.getElementById("pol2_e2").innerHTML = this.e2.toFixed(7);
    document.getElementById("pol2_e").innerHTML = this.e.toFixed(7);

    this.set_fwd();
  },

  set_fwd () {
    this.phic = document.getElementById("phic_pol2_in").value*D2R;
    this.lam0 = document.getElementById("lam0_pol2_in").value*D2R;
    this.southern = (this.phic < 0);
    
    const {a, e, e2} = this;
    let phic = this.phic;
    let lam0 = this.lam0;
    let jax;

    let phi = document.getElementById("phi_pol2_in").value*D2R;
    let lam = document.getElementById("lam_pol2_in").value*D2R;

    if (this.southern) {
      document.getElementById("south_pole5").style.display = "block"
      phic = -phic;
      MathJax.Hub.getAllJax("phic_val")[0].Text(`\\phi_c=${deg(phic,true)}`);
      lam0 = -lam0;
      MathJax.Hub.getAllJax("lam0_pol2_val")[0].Text(`\\lambda_0=${deg(lam0,true)}`);
      phi = -phi;
      MathJax.Hub.getAllJax("phi_pol2_val")[0].Text(`\\phi=${deg(phi,true)}`);
      lam = -lam;
      MathJax.Hub.getAllJax("lam_pol2_val")[0].Text(`\\lambda=${deg(lam,true)}`);

    } else {
      document.getElementById("south_pole5").style.display = "none"
    }
    MathJax.Hub.getAllJax("phic_val_1")[0].Text(deg(phic,true));
    MathJax.Hub.getAllJax("phi_val_1")[0].Text(deg(phi,true));

    const t = Math.tan(Math.PI/4-phi/2)/((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2);
    jax=`\\eqalign{
      t &= \\tan(45^\\circ-${deg(phi)}/2)/[(1-${fmt(e)}\\sin ${deg(phi)})/(1+${fmt(e)}\\sin ${deg(phi)})]^{${fmt(e)}/2} \\cr
        &= ${fmt(t, true)}
    }`;
    MathJax.Hub.getAllJax("t_pol2")[0].Text(jax);

    const tc = Math.tan(Math.PI/4-phic/2)/((1-e*Math.sin(phic))/(1+e*Math.sin(phic)))**(e/2);
    jax=`\\eqalign{
      t_c &= \\tan(45^\\circ-${deg(phic)}/2)/[(1-${fmt(e)}\\sin ${deg(phic)})/(1+${fmt(e)}\\sin ${deg(phic)})]^{${fmt(e)}/2} \\cr
          &= ${fmt(tc, true)}
    }`;
    MathJax.Hub.getAllJax("tc_pol2")[0].Text(jax);

    const mc = Math.cos(phic)/Math.sqrt(1-e2*Math.sin(phic)**2);
    jax = `\\eqalign{
      m_c &= \\cos ${deg(phic)}/(1-${fmt(e2)}\\sin^2${deg(phic)})^{1/2}\\cr
          &= ${fmt(mc, true)}
      }`
    MathJax.Hub.getAllJax("mc_pol2")[0].Text(jax);
    
    const rho = a*mc*t/tc;
    jax = `\\eqalign{
      \\rho &= ${fmt(a,true,0)}\\times${fmt(mc)}\\times${fmt(t)}/${fmt(tc)} \\cr
            &= ${fmt(rho,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("rho_pol2")[0].Text(jax);

    let x = rho*Math.sin(lam-lam0);
    jax = `\\eqalign{
      x &= ${fmt(rho,true,2)}\\sin(${deg(lam,true)}-${deg(lam0)}) \\cr
        &= ${fmt(x, true, 2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("x_pol2")[0].Text(jax);

    let y = -rho*Math.cos(lam-lam0);
    jax = `\\eqalign{
      y &= ${fmt(-rho,true,2)}\\cos(${deg(lam,true)}-${deg(lam0)}) \\cr
        &= ${fmt(y, true, 2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("y_pol2")[0].Text(jax);

    if (this.southern) {
      document.getElementById("south_pole6").style.display = "block"
      x = -x;
      MathJax.Hub.getAllJax("xs_pol2")[0].Text(`x = ${fmt(x, true,2)}\\text{ m}`);
      y = -y;
      MathJax.Hub.getAllJax("ys_pol2")[0].Text(`y = ${fmt(y, true,2)}\\text{ m}`);
    } else {
      document.getElementById("south_pole6").style.display = "none"
    }

    const m = Math.cos(phi)/Math.sqrt(1-e2*Math.sin(phi)**2);
    jax = `\\eqalign{
      m &= \\cos ${deg(phi)}/(1-${fmt(e2)}\\sin^2${deg(phi)})^{1/2}\\cr
        &= ${fmt(m, true)}
    }`
    MathJax.Hub.getAllJax("m_pol2")[0].Text(jax);

    const k = rho/(a*m);
    jax =`\\eqalign{
      k &= ${fmt(rho,true,2)}/(${fmt(a,true,0)}\\times${fmt(m)}) \\cr
        &= ${fmt(k, true)}
    }`
    MathJax.Hub.getAllJax("k_pol2")[0].Text(jax);

    document.getElementById("x_pol2_in").value = fmt(x,true,1);
    document.getElementById("y_pol2_in").value = fmt(y,true,1);
    this.set_inv ();
  },
  set_inv () {
    const {a, e, e2} = this;
    let jax;

    let lam0 = this.lam0;
    let phic = this.phic;
    let x = +document.getElementById("x_pol2_in").value;
    let y = +document.getElementById("y_pol2_in").value;
    if (this.southern) {
      document.getElementById("south_pole7").style.display = "block"
      phic = -phic;
      MathJax.Hub.getAllJax("phic_pol2_val_inv")[0].Text(`\\phi_c=${deg(phic,true)}`);
      lam0 = -lam0;
      MathJax.Hub.getAllJax("lam0_pol2_val2_inv")[0].Text(`\\lambda_0=${deg(lam0,true)}`);
      x = -x;
      MathJax.Hub.getAllJax("x_pol2_val")[0].Text(`x=${fmt(x, true, 0)}\\text{ m}`);
      y = -y;
      MathJax.Hub.getAllJax("y_pol2_val")[0].Text(`y=${fmt(y, true, 0)}\\text{ m}`);
    } else {
      document.getElementById("south_pole7").style.display = "none"
    }
    const tc = Math.tan(Math.PI/4-phic/2)/((1-e*Math.sin(phic))/(1+e*Math.sin(phic)))**(e/2);
    jax=`\\eqalign{
      t_c &= \\tan(45^\\circ-${deg(phic)}/2)/[(1-${fmt(e)}\\sin ${deg(phic)})/(1+${fmt(e)}\\sin ${deg(phic)})]^{${fmt(e)}/2} \\cr
        &= ${fmt(tc, true)}
    }`;
    MathJax.Hub.getAllJax("tc_pol2_inv")[0].Text(jax);

    const mc = Math.cos(phic)/Math.sqrt(1-e2*Math.sin(phic)**2);
    jax = `\\eqalign{
      m_c &= \\cos ${deg(phic)}/(1-${fmt(e2)}\\sin^2${deg(phic)})^{1/2}\\cr
        &= ${fmt(mc, true)}
    }`
    MathJax.Hub.getAllJax("mc_pol2_inv")[0].Text(jax);

    const rho = Math.sqrt(x**2+y**2);
    jax = `\\eqalign{
      \\rho &= [${fmt(x,false,0)}^2 + ${fmt(y,false,0)}^2]^{1/2} \\cr
            &= ${fmt(rho, true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("rho_pol2_inv")[0].Text(jax);

    const t = rho*tc/(a*mc);
    jax = `\\eqalign{
      t &= ${fmt(rho,true,2)}\\times${fmt(tc)}/(${fmt(a,true,0)}\\times${fmt(mc)}) \\cr
        &= ${fmt(t)}
    }`
    MathJax.Hub.getAllJax("t_pol2_inv")[0].Text(jax);

    let phi = Math.PI/2-2*Math.atan(t);
    jax = `\\eqalign{
      \\phi &= 90^\\circ - 2\\arctan ${fmt(t)} \\cr
           &= ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("phi0_pol2_inv")[0].Text(jax);
    MathJax.Hub.getAllJax("phi0_pol2_inv_1")[0].Text(deg(phi, true));

    const phi_func = (phi) =>{return Math.PI/2 - 2*Math.atan(t*((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2))}
    phi1 = phi_func(phi);
    jax =`\\eqalign{
      \\phi =& 90^\\circ - 2\\arctan\\{${fmt(t)}\\times[(1-${fmt(e)}\\sin${deg(phi)})/ \\cr
             & (1+${fmt(e)}\\sin${deg(phi)})]^{${fmt(e)}/2} \\} \\cr
            =& ${deg(phi1,true)}
    }`
    MathJax.Hub.getAllJax("phi1_pol2_inv")[0].Text(jax);
    MathJax.Hub.getAllJax("phi1_pol2_inv_1")[0].Text(deg(phi1, true));
    phi = phi_func(phi1);
    jax = `\\phi = ${deg(phi,true)}`
    MathJax.Hub.getAllJax("phi_pol2_inv")[0].Text(jax);

    let lam = lam0+Math.atan2(x,-y);
    lam = lon_adj(lam);
    jax =`\\eqalign{
      \\lambda &= ${deg(lam0,true)} + \\arctan[${fmt(x,false,0)}/${fmt(-y,false,0)}] \\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_pol2_inv")[0].Text(jax);
    if (this.southern) {
      document.getElementById("south_pole8").style.display = "block"
      phi = -phi;
      lam = -lam;
      MathJax.Hub.getAllJax("phi_pol2_inv_val")[0].Text(`\\phi = ${deg(phi,true)}`);
      MathJax.Hub.getAllJax("lam_pol2_inv_val")[0].Text(`\\lambda = ${deg(lam,true)}`);
    } else {
      document.getElementById("south_pole8").style.display = "none"
    }

  }
}