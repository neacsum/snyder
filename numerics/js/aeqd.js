var sph = {
  r:3,
  lam0: -96.*D2R,
  phi1: 40.0*D2R,
  lam0: -100.*D2R,

  set_fwd () {
    this.r = document.getElementById("r_in").value;
    this.lam0 = document.getElementById ("lam0_sph_in").value*D2R;
    this.phi1 = document.getElementById ("phi1_sph_in").value*D2R;

    const phi = document.getElementById ("phi_sph_in").value*D2R;
    const lam = document.getElementById ("lam_sph_in").value*D2R;

    const {r, lam0, phi1} = this;
    const cosc = Math.sin(phi1)*Math.sin(phi)+Math.cos(phi1)*Math.cos(phi)*Math.cos(lam-this.lam0);
    let jax = `\\eqalign{
      \\cos c &= \\sin${deg(phi1)}\\sin${deg(phi)} + \\cos ${deg(phi1)}\\cos${deg(phi)}\\cos (${deg(lam,true)} - ${deg(lam0)})\\cr
              &= ${fmt(cosc, true)}
    }`
    MathJax.Hub.getAllJax("cosc")[0].Text(jax);

    const c = Math.acos(cosc);
    MathJax.Hub.getAllJax("c")[0].Text(`c = ${deg(c,true)}`);
    
    const kprime = c/Math.sin(c);
    jax = `\\eqalign{
      k' &= (${deg(c)}\\times\\pi/180^\\circ)/\\sin ${deg(c)} \\cr
         &= ${fmt(kprime,true)}
    }`
    MathJax.Hub.getAllJax("kprime")[0].Text(jax);
    
    const x = r*kprime*Math.cos(phi)*Math.sin(lam-lam0);
    jax = `\\eqalign{
      x &= ${fmt(r,true,0)}\\times${fmt(kprime)}\\cos${deg(phi)}\\sin(${deg(lam,true)}-${deg(lam0)}) \\cr
        &= ${fmt(x,true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);
    document.getElementById("x_sph_in").value = fmt(x,true);

    const y = r*kprime*(Math.cos(phi1)*Math.sin(phi)-Math.sin(phi1)*Math.cos(phi)*Math.cos(lam-lam0));
    jax = `\\eqalign{
      y &= ${fmt(r,true,0)}\\times${fmt(kprime)}[\\cos${deg(phi1)}\\sin${deg(phi)}-\\sin${deg(phi1)}\\cos${deg(phi)}\\cos(${deg(lam,true)}-${deg(lam0)})]\\cr
        &= ${fmt(y,true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
    document.getElementById("y_sph_in").value = fmt(y,true);

    this.set_inv();
  },
  set_inv () {
    const {r, lam0, phi1} = this;
    let x = +document.getElementById("x_sph_in").value;
    let y = +document.getElementById("y_sph_in").value;

    const rho = Math.sqrt(x**2 + y**2);
    let jax = `\\eqalign{
      \\rho &=[${fmt(x)}^2+${fmt(y)}^2]^{1/2} \\cr
            &= ${fmt(rho,true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("rho_sph")[0].Text(jax);

    const c = rho/r;
    jax = `\\eqalign{
      c &= ${fmt(rho)}/${fmt(r,false,0)} \\cr
        &= ${fmt(c, true)}\\text{ radians} \\cr
        &= ${deg(c,true)}
    }`
    MathJax.Hub.getAllJax("c_inv")[0].Text(jax);

    const phi = Math.asin(Math.cos(c)*Math.sin(phi1)+y*Math.sin(c)*Math.cos(phi1)/rho);
    jax = `\\eqalign{
      \\phi &= \\arcsin(\\cos${deg(c)}\\sin${deg(phi1)}-${fmt(y)}\\sin${deg(c)}\\cos${deg(phi1)}/${fmt(rho)}) \\cr
            &= ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("phi_sph")[0].Text(jax);

    const lam = lon_adj(lam0+Math.atan2(x*Math.sin(c), rho*Math.cos(phi1)*Math.cos(c)-y*Math.sin(phi1)*Math.sin(c)));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0, true)} + \\arctan[${fmt(x)}\\sin${deg(c)}/(${fmt(rho)}\\cos${deg(phi1)}\\cr
                & \\cos${deg(c)} - ${fmt(y)}\\sin${deg(phi1)}\\sin${deg(c)})] \\cr
               =& ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_sph")[0].Text(jax);
  }
}

var pol = {
  a: 6378388.,
  e2:  0.00672267,
  e: 0.0819919,
  southern: false,
  lam0: -100*D2R,

  M(phi) {return this.a*((1-this.e2/4-3*this.e2**2/64-5*this.e2**3/256)*phi - 
            (3*this.e2/8+3*this.e2**2/32+45*this.e2**3/1024)*Math.sin(2*phi) + 
            (15*this.e2**2/256+45*this.e2**3/1024)*Math.sin(4*phi) - 
            35*this.e2**3/3072*Math.sin(6*phi));
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
    
    const {a, e, e2, lam0, southern} = this;
    let jax;
    let phi = document.getElementById("phi_pol_in").value*D2R;
    let lam = document.getElementById("lam_pol_in").value*D2R;
 
    const M = this.M(phi);
    jax=`\\eqalign{
      M =&${fmt(a,false,0)}\\times[(1-${fmt(e2)}/4-3\\times ${fmt(e2)}^2/64 - 5\\times ${fmt(e2)}^3/256)\\times ${deg(phi)}\\times\\pi/180^\\circ \\cr
         &-(3\\times ${fmt(e2)}/8+3\\times ${fmt(e2)}^2/32 +45\\times${fmt(e2)}^3/1024)\\sin(2\\times${deg(phi)}) \\cr
         &+(15\\times ${fmt(e2)}^2/256 +45\\times ${fmt(e2)}^3/1024)\\sin(4\\times ${deg(phi)}) \\cr
         &-(35\\times ${fmt(e2)}^3/3072)\\sin(6\\times${deg(phi)})] \\cr
        =& ${fmt(M, true, 2)}\\text{ m}
    }`;
    MathJax.Hub.getAllJax("M_pol")[0].Text(jax);
    MathJax.Hub.getAllJax("phi_pol")[0].Text(deg(phi));
    const Mp = this.M(Math.PI/2);
    jax =`M_p = ${fmt(Mp,true,2)}\\text{ m}`
    MathJax.Hub.getAllJax("Mp_pol")[0].Text(jax);

    const m = Math.cos(phi)/Math.sqrt(1-e2*Math.sin(phi)**2);
    jax = `\\eqalign{
      m &= \\cos${deg(phi)}/(1-${fmt(e2)}\\sin^2${deg(phi)})^{1/2} \\cr
        &= ${fmt(m, true)}
    }`
    MathJax.Hub.getAllJax("m_pol")[0].Text(jax);

    const rho = southern?(Mp+M) : (Mp-M);

    if (southern) {
      jax = `\\eqalign{
        \\rho &= ${fmt(Mp, true,2)}+${fmt(M,false,2)} \\cr
              &= ${fmt(rho, true, 2)}\\text{ m}
      }`  
    } else {
      jax = `\\eqalign{
        \\rho &= ${fmt(Mp, true,2)}-${fmt(M,false,2)} \\cr
              &= ${fmt(rho, true, 2)}\\text{ m}
      }`
    }
    MathJax.Hub.getAllJax("rho_pol")[0].Text(jax);

    const x = rho*Math.sin(lam-lam0);
    jax = `\\eqalign{
      x &= ${fmt(rho,true,2)}\\sin[${deg(lam,true)}-${deg(lam0)}]\\cr
        &= ${fmt(x,true,2)}\\text{ m}
    }`;
    MathJax.Hub.getAllJax("x_pol")[0].Text(jax);
    document.getElementById("x_pol_in").value = fmt(x,true,1);

    const y = southern?rho*Math.cos(lam-lam0) : -rho*Math.cos(lam-lam0);
    if (southern) {
      jax = `\\eqalign{
        y &= ${fmt(rho,true,2)}\\cos[${deg(lam,true)}-${deg(lam0)}]\\cr
          &= ${fmt(y,true,2)}\\text{ m}
      }`;
    } else {
      jax = `\\eqalign{
        y &= -${fmt(rho,false,2)}\\cos[${deg(lam,true)}-${deg(lam0)}]\\cr
          &= ${fmt(y,true,2)}\\text{ m}
      }`;
    }
    MathJax.Hub.getAllJax("y_pol")[0].Text(jax);
    document.getElementById("y_pol_in").value = fmt(y,true,1);

    const k = rho/(a*m);
    jax = `\\eqalign{
      k &= ${fmt(rho, true,2)}/(${fmt(a,false,0)}\\times${fmt(m)})\\cr
        &= ${fmt(k, true)}
    }`
    MathJax.Hub.getAllJax("k_pol")[0].Text(jax);

    this.set_inv()
  },

  set_inv () {
    const {a, e, e2, lam0, southern} = this;
    let jax;

    let x = +document.getElementById("x_pol_in").value;
    let y = +document.getElementById("y_pol_in").value;

    const Mp = this.M(Math.PI/2);
    jax = `M_p = ${fmt(Mp, true,2)}\\text{ m}`
    MathJax.Hub.getAllJax("Mp_pol_inv")[0].Text(jax);

    const rho = Math.sqrt(x**2+y**2);
    jax = `\\eqalign{
      \\rho &= [${fmt(x,true,0)}^2 + ${fmt(y,false,0)}^2]^{1/2} \\cr
            &= ${fmt(rho,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("rho_pol_inv")[0].Text(jax);
    
    const M = southern?rho-Mp : Mp-rho;
    if (southern) {
      jax = `\\eqalign{
        M &= ${fmt(rho,true,2)} - ${fmt(Mp, false,2)} \\cr
          &= ${fmt(M, true, 2)}\\text{ m}
      }`
    } else {
      jax = `\\eqalign{
        M &= ${fmt(Mp,true,2)} - ${fmt(rho, false,2)} \\cr
          &= ${fmt(M, true, 2)}\\text{ m}
      }`
    }
    MathJax.Hub.getAllJax("M_pol_inv")[0].Text(jax);

    const mu = M/(a*(1-e2/4-3*e2**2/64-5*e2**3/256));
    jax = `\\eqalign{
      \\mu =& ${fmt(M,true,2)}/[${fmt(a,true,0)}(1-${fmt(e2)}/4 - 3\\times${fmt(e2)}^2/64 \\cr
            & -5\\times${fmt(e2)}^3/256)] \\cr
           =& ${deg(mu, true)}
    }`
    MathJax.Hub.getAllJax("mu_pol_inv")[0].Text(jax);

    const e1 = (1-Math.sqrt(1-e2))/(1+Math.sqrt(1-e2));
    jax = `\\eqalign{
      e_1 &= [1-(1-${fmt(e2)})^{1/2}]/[1+(1-${fmt(e2)})^{1/2}] \\cr
          &= ${fmt(e1)}
    }`
    MathJax.Hub.getAllJax("e1_pol_inv")[0].Text(jax);

    const phi = mu+(3*e1/2-27*e1**3/32)*Math.sin(2*mu)+(21*e1**2/16-55*e1**4/32)*Math.sin(4*mu) +
                151*e1**3/96*Math.sin(6*mu) + 1097*e1**4/512*Math.sin(8*mu);
    jax = `\\eqalign{
      \\phi =& ${fmt(mu,true)}\\text{ radians}+(3\\times${fmt(e1)}/2 - 27\\times${fmt(e1)}^3/32)\\sin(2\\times${deg(mu)})+ \\cr
             & (21\\times${fmt(e1)}^2/16-55\\times${fmt(e1)}^4/32)\\sin(4\\times${deg(mu)})+ \\cr
             & (15\\times${fmt(e1)}^3/96)\\sin(6\\times${deg(mu)})+ \\cr
             & (1097\\times${fmt(e1)}^4/512)\\sin(8\\times${deg(mu)}) \\cr
            =& ${deg(phi, true)} 
    }`
    MathJax.Hub.getAllJax("phi_pol_inv")[0].Text(jax);

    const lam = lam0+ Math.atan2(x, southern?y:-y);

    if (southern) {
      jax =`\\eqalign{
        \\lambda &= ${deg(lam0, true)} + \\arctan[${fmt(x,true,0)}/${fmt(y,false,0)}] \\cr
                 &= ${deg(lam, true)}
      }`
    } else {
      jax =`\\eqalign{
        \\lambda &= ${deg(lam0, true)} + \\arctan[${fmt(x,true,0)}/${fmt(-y,false,0)}] \\cr
                 &= ${deg(lam, true)}
      }`
    }
    MathJax.Hub.getAllJax("lam_pol_inv")[0].Text(jax);

  }
}

var guam = {
  a: 6378206.4,
  e2:  0.00676866,
  phi1: (13+28/60+20.87887/3600)*D2R,
  lam0: (144+44/60+55.50254/3600)*D2R,
  fe: 50000,
  fn: 50000,

  M(phi) {return this.a*((1-this.e2/4-3*this.e2**2/64-5*this.e2**3/256)*phi - 
            (3*this.e2/8+3*this.e2**2/32+45*this.e2**3/1024)*Math.sin(2*phi) + 
            (15*this.e2**2/256+45*this.e2**3/1024)*Math.sin(4*phi) - 
            35*this.e2**3/3072*Math.sin(6*phi));
  },

  set_fwd () {
    const {a,e2,phi1, lam0, fe, fn} = this;
    let jax;

    const phi = dms2r(document.getElementById("phi_guam_in").value);
    MathJax.Hub.getAllJax("phi_guam")[0].Text(`\\phi = ${deg(phi,true,9)}`);
    MathJax.Hub.getAllJax("phi_guam_1")[0].Text(deg(phi,true,9));

    const lam= dms2r(document.getElementById("lam_guam_in").value);
    MathJax.Hub.getAllJax("lam_guam")[0].Text(`\\lambda = ${deg(lam,true,9)}`);
    
    const xt = a*(lam-lam0)*Math.cos(phi)/Math.sqrt(1-e2*Math.sin(phi)**2);
    jax = `\\eqalign{
      x =& ${fmt(a,true,0)}\\times(${deg(lam,false,9)}-${deg(lam0,false,9)})\\times \\pi/180^\\circ\\cr
         & \\times\\cos${deg(phi,false,9)}/(1-${fmt(e2)}/\\sin^2${deg(phi,false,9)}) \\cr
        =& ${fmt(xt,true,3)}\\text{ m}  
    }`
    MathJax.Hub.getAllJax("xt_guam")[0].Text(jax);

    const x = xt+fe;
    jax = `\\eqalign{
      x &= ${fmt(xt,true, 3)} + ${fmt(fe,false,0)} \\cr
        &= ${fmt(x,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("x_guam")[0].Text(jax);
    document.getElementById("x_guam_in").value = fmt(x,true,2);

    const M = this.M(phi);
    jax=`\\eqalign{
      M =&${fmt(a,false,0)}\\times[(1-${fmt(e2)}/4-3\\times ${fmt(e2)}^2/64 - 5\\times ${fmt(e2)}^3/256)\\times ${deg(phi)}\\times\\pi/180^\\circ \\cr
         &-(3\\times ${fmt(e2)}/8+3\\times ${fmt(e2)}^2/32 +45\\times${fmt(e2)}^3/1024)\\sin(2\\times${deg(phi)}) \\cr
         &+(15\\times ${fmt(e2)}^2/256 +45\\times ${fmt(e2)}^3/1024)\\sin(4\\times ${deg(phi)}) \\cr
         &-(35\\times ${fmt(e2)}^3/3072)\\sin(6\\times${deg(phi)})] \\cr
        =& ${fmt(M, true, 2)}\\text{ m}
    }`;
    MathJax.Hub.getAllJax("M_guam")[0].Text(jax);

    const M1 = this.M(phi1);
    jax = `M_1 = ${fmt(M1, true,2)}\\text{ m}`
    MathJax.Hub.getAllJax("M1_guam")[0].Text(jax);

    const yt = M-M1+xt**2*Math.tan(phi)*Math.sqrt(1-e2*Math.sin(phi)**2)/(2*a);
    jax = `\\eqalign{
      y =& ${fmt(M,true,2)}-${fmt(M1,false,2)}+${fmt(xt,false,2)}^2\\tan${deg(phi,false,9)} \\cr
         & \\times(1-${fmt(e2)}\\sin^2${deg(phi,false,9)})^{1/2}/(2\\times${fmt(a,false,0)}) \\cr
        =& ${fmt(yt,true,3)}\\text{ m} 
    }`
    MathJax.Hub.getAllJax("yt_guam")[0].Text(jax);

    const y=yt+fn;
    jax = `\\eqalign{
      y &= ${fmt(yt,true,2)} + ${fmt(fn,false,0)} \\cr
        &= ${fmt(y, true, 2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("y_guam")[0].Text(jax);
    document.getElementById("y_guam_in").value = fmt(y,true,2);
    this.set_inv ();
  },

  set_inv () {
    const {a, e2, lam0, phi1, fe, fn} = this;
    let jax;

    let x = +document.getElementById("x_guam_in").value;
    let y = +document.getElementById("y_guam_in").value;

    const xt = x-fe;
    jax = `x = ${fmt(xt,true,2)}\\text{ m}`;
    MathJax.Hub.getAllJax("xt_guam_inv")[0].Text(jax);

    const yt = y-fn;
    jax = `y = ${fmt(yt,true,2)}\\text{ m}`;
    MathJax.Hub.getAllJax("yt_guam_inv")[0].Text(jax);

    const M1 = this.M(phi1);
    jax =`M_1 = ${fmt(M1,true,2)}\\text{ m}`;
    MathJax.Hub.getAllJax("M1_guam_inv")[0].Text(jax);

    const m_iter = (phi)=>M1+yt-xt**2*Math.tan(phi)*Math.sqrt(1-e2*Math.sin(phi)**2)/(2*a);
    let M = m_iter(phi1);
    jax = `\\eqalign{
      M =& ${fmt(M1,false,2)}+${fmt(yt,false,2)}-${fmt(xt,false,2)}^2\\tan${deg(phi1,false,9)} \\cr
         & \\times(1-${fmt(e2)}\\sin^2${deg(phi1,false,9)})^{1/2}/(2\\times${fmt(a,false,0)}) \\cr
        =& ${fmt(M,true,2)}\\text{ m} 
    }`
    MathJax.Hub.getAllJax("M_guam_inv_1")[0].Text(jax);

    const mu_iter = (m)=>m/(a*(1-e2/4-3*e2**2/64-5*e2**3/256))
    let mu = mu_iter(M);
    jax = `\\eqalign{
      \\mu =& ${fmt(M,true,2)}/[${fmt(a,true,0)}(1-${fmt(e2)}/4 - 3\\times${fmt(e2)}^2/64 \\cr
            & -5\\times${fmt(e2)}^3/256)] \\cr
           =& ${fmt(mu, true)}\\text{ radians}
    }`
    MathJax.Hub.getAllJax("mu_guam_inv_1")[0].Text(jax);

    const e1 = (1-Math.sqrt(1-e2))/(1+Math.sqrt(1-e2));
    jax = `\\eqalign{
      e_1 &= [1-(1-${fmt(e2)})^{1/2}]/[1+(1-${fmt(e2)})^{1/2}] \\cr
          &= ${fmt(e1)}
    }`
    MathJax.Hub.getAllJax("e1_guam_inv")[0].Text(jax);

    const phi_iter = (mu)=>mu+(3*e1/2-27*e1**3/32)*Math.sin(2*mu)+(21*e1**2/16-55*e1**4/32)*Math.sin(4*mu) +
    151*e1**3/96*Math.sin(6*mu) + 1097*e1**4/512*Math.sin(8*mu);
    let phi = phi_iter(mu);
    jax = `\\eqalign{
      \\phi =& ${fmt(mu,true)}+(3\\times${fmt(e1)}/2 - 27\\times${fmt(e1)}^3/32)\\sin(2\\times${fmt(mu)})+ \\cr
             & (21\\times${fmt(e1)}^2/16-55\\times${fmt(e1)}^4/32)\\sin(4\\times${fmt(mu)})+ \\cr
             & (15\\times${fmt(e1)}^3/96)\\sin(6\\times${fmt(mu)})+ \\cr
             & (1097\\times${fmt(e1)}^4/512)\\sin(8\\times${fmt(mu)}) \\cr
            =& ${fmt(phi,true)}\\text{ radians} \\cr 
            =& ${fmt(phi,true)} \\times 180^\\circ/\\pi = ${deg(phi, true)} 
    }`
    MathJax.Hub.getAllJax("phi_guam_inv_1")[0].Text(jax);

    M = m_iter(phi);
    jax = `M = ${fmt(M, true,2)}\\text{ m}`;
    MathJax.Hub.getAllJax("M_guam_inv_2")[0].Text(jax);

    mu = mu_iter(M);
    jax = `\\mu = ${fmt(mu)} \\text{ radians} = ${deg(mu)}`;
    MathJax.Hub.getAllJax("mu_guam_inv_2")[0].Text(jax);

    phi = phi_iter(mu);
    jax = `\\phi = ${deg(phi)}`;
    MathJax.Hub.getAllJax("phi_guam_inv")[0].Text(jax);
    jax = `\\phi = ${r2dms(phi)}`;
    MathJax.Hub.getAllJax("phi_guam_dms")[0].Text(jax);

    const lam = lam0 + xt*Math.sqrt(1-e2*Math.sin(phi)**2)/(a*Math.cos(phi));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)} + [${fmt(xt,false,2)}\\times(1-${fmt(e2)}\\sin^2${deg(phi)})^{1/2}/ \\cr
                & (${fmt(a,true,0)}\\cos${deg(phi)})]\\times 180^\\circ/\\pi \\cr
               =& ${deg(lam,true)} \\cr
               =& ${r2dms(lam)}
    }`
    MathJax.Hub.getAllJax("lam_guam_inv")[0].Text(jax);
 }
}

var ell = {
  a: 6378206.4,
  e2:  0.00676866,
  e: 0.0822719,
  phi1: (15+11/60+5.6830/3600)*D2R,
  lam0: (145+44/60+29.9720/3600)*D2R,
  fe: 28657.52,
  fn: 67199.99,
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
    document.getElementById("ell_a").innerHTML = this.a + " m";
    document.getElementById("ell_e2").innerHTML = this.e2.toFixed(7);

    this.set_fwd();
  },
  set_fwd () {
    let jax;
    this.phi1 = dms2r(document.getElementById("phi1_ell").value);
    this.lam0 = dms2r(document.getElementById("lam0_ell").value);

    const {a, e, e2, phi1, lam0, fe, fn} = this;

    const phi = dms2r(document.getElementById("phi_ell_in").value);
    const lam = dms2r(document.getElementById("lam_ell_in").value);

    jax = `\\eqalign{
      \\phi_1    &= ${deg(phi1)} \\cr
      \\lambda_0 &= ${deg(lam0)} \\cr
      \\phi      &= ${deg(phi)} \\cr
      \\lambda   &= ${deg(lam)}
    }`
    MathJax.Hub.getAllJax("deg_ell")[0].Text(jax);

    const N1 = a/Math.sqrt(1-e2*Math.sin(phi1)**2);
    jax = `\\eqalign{
      N_1 &= ${fmt(a,true,0)}/(1-${fmt(e2)}\\sin^2${deg(phi1)})^{1/2} \\cr
        &= ${fmt(N1,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("N1_ell")[0].Text(jax);

    const N = a/Math.sqrt(1-e2*Math.sin(phi)**2);
    jax = `\\eqalign{
      N &= ${fmt(a,true,0)}/(1-${fmt(e2)}\\sin^2${deg(phi)})^{1/2} \\cr
        &= ${fmt(N,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("N_ell")[0].Text(jax);

    const psi = Math.atan((1-e2)*Math.tan(phi)+e2*N1*Math.sin(phi1)/(N*Math.cos(phi)));
    jax =`\\eqalign{
      \\psi =& \\arctan[(1-${fmt(e2)})\\tan${deg(phi)}+${fmt(e2)}\\times \\cr
             & ${fmt(N1,false,2)}\\times\\sin${deg(phi1)}/(${fmt(N,true,2)}\\times\\cos${deg(phi)})] \\cr
            =& ${deg(psi)} 
    }`
    MathJax.Hub.getAllJax("psi_ell")[0].Text(jax);

    const az = Math.atan2(Math.sin(lam-lam0), Math.cos(phi1)*Math.tan(psi)-Math.sin(phi1)*Math.cos(lam-lam0));
    jax = `\\eqalign{
      Az =& \\arctan\\{ \\sin(${deg(lam,true)}-${deg(lam0)})/[\\cos${deg(phi1)} \\cr
          & \\tan${deg(psi)}- \\sin${deg(phi1)}\\cos(${deg(lam,true)}-${deg(lam0)})]\\} \\cr
         =& ${deg(az, true)}
    }`
    MathJax.Hub.getAllJax("Az_ell")[0].Text(jax);
    let s;
    if (Math.sin(az) != 0) {
      document.getElementById("az_zero").style = "display:none";
      document.getElementById("az_notzero").style = "display:block";

      s = Math.asin(Math.sin(lam-lam0)*Math.cos(psi)/Math.sin(az));
      jax = `\\eqalign{
        s =& \\arcsin[\\sin(${deg(lam,true)}-${deg(lam0)})\\cos${deg(psi)}/ \\cr
           & \\sin${deg(az)}] \\cr
          =& ${fmt(s,true,9)}\\text{ radians} 
      }`
    } else {
      document.getElementById("az_notzero").style = "display:none";
      document.getElementById("az_zero").style = "display:block";
      s = Math.asin(Math.cos(phi1)*Math.sin(psi)-Math.sin(phi1)*Math.cos(psi));
      jax = `\\eqalign{
        s =& ${Math.cos(az)<0?"-":"+"}\\arcsin[\\cos${deg(phi1)}\\sin${deg(psi)}-\\cr
           & \\sin${deg(phi1)}\\cos${deg(psi)}] \\cr
          =& ${fmt(s,true,9)}\\text{ radians} 
      }`
    }
    MathJax.Hub.getAllJax("s_ell")[0].Text(jax);

    const G = e*Math.sin(phi1)/Math.sqrt(1-e2);
    jax = `\\eqalign{
      G &= ${fmt(e2)}^{1/2}\\sin${deg(phi1)}/(1-${fmt(e2)})^{1/2}\\cr
        &= ${fmt(G,true,9)}
    }`
    MathJax.Hub.getAllJax("G_ell")[0].Text(jax);

    const H = e*Math.cos(phi1)*Math.cos(az)/Math.sqrt(1-e2);
    jax = `\\eqalign{
      H &= ${fmt(e2)}^{1/2}\\sin${deg(phi1)}/(1-${fmt(e2)})^{1/2}\\cr
        &= ${fmt(H,true,9)}
    }`
    MathJax.Hub.getAllJax("H_ell")[0].Text(jax);

    const c = N1*s*(1-s**2*H**2*(1-H**2)/2+s**3/8*G*H*(1-2*H**2)
              +s**4/120*(H**2*(4-7*H**2)-3*G**2*(1-7*H**2))-s**5/48*G*H);
    const ss= fmt(s,false,9), gg=fmt(G,false,9), hh=fmt(H,false,9);  
    jax = `\\eqalign{
      c =& ${fmt(N1,true,2)}\\times${ss}\\times\\{1-${ss}^2\\times${hh}^2\\times(1-${hh}^2)/6 \\cr
         & +(${ss}^3/8)\\times${gg}\\times${hh}\\times(1-2\\times${hh}^2) \\cr
         & +(${ss}^4/120)[${hh}^2\\times(4-7\\times${hh}^2)-3\\times${gg}^2\\cr
         & \\times(1-7\\times${hh}^2)]-(${ss}^5/48)\\times${gg}\\times${hh} \\} \\cr
        =& ${fmt(c,true,2)}\\text{ m} 
    }`
    MathJax.Hub.getAllJax("c_ell")[0].Text(jax);

    const x = c*Math.sin(az)+fe;
    jax = `\\eqalign{
      x &= ${fmt(c,false,2)}\\sin${deg(az)} + ${fmt(fe, false,0)} \\cr
        &= ${fmt(x, true, 2)} \\text{ m}
    }`
    MathJax.Hub.getAllJax("x_ell")[0].Text(jax);
    document.getElementById("x_ell_in").value = fmt(x,true,2);

    const y = c*Math.cos(az)+fn;
    jax = `\\eqalign{
      y &= ${fmt(c,false,2)}\\cos${deg(az)} + ${fmt(fn, false,0)} \\cr
        &= ${fmt(y, true, 2)} \\text{ m}
    }`
    MathJax.Hub.getAllJax("y_ell")[0].Text(jax);
    document.getElementById("y_ell_in").value = fmt(y,true,2);

    this.set_inv ();
  },

  set_inv () {
    const {a, e, e2, phi1, lam0, fe, fn} = this;
    let jax;

    const x = +document.getElementById("x_ell_in").value;
    const y = +document.getElementById("y_ell_in").value;

    const c = Math.sqrt((x-fe)**2+(y-fn)**2);
    jax = `\\eqalign{
      c &= [(${fmt(x,true,0)}-${fmt(fe,false,0)})^2 + (${fmt(y,true,0)}-${fmt(fn,false,0)})^2]^{1/2} \\cr
        &= ${fmt(c,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("c_elli")[0].Text(jax);

    const az = Math.atan2(x-fe, y-fn);
    jax = `\\eqalign{
      Az &= \\arctan[(${fmt(x,true,0)}-${fmt(fe,false,0)}) / (${fmt(y,true,0)}-${fmt(fn,false,0)})] \\cr
         &= ${deg(az, true)}
    }`
    MathJax.Hub.getAllJax("az_elli")[0].Text(jax);

    const N1 = a/Math.sqrt(1-e2*Math.sin(phi1)**2);
    jax = `\\eqalign{
      N_1 &= ${fmt(a,true,0)}/(1-${fmt(e2)}\\sin^2${deg(phi1)})^{1/2} \\cr
        &= ${fmt(N1,true,2)}\\text{ m}
    }`
    MathJax.Hub.getAllJax("N1_elli")[0].Text(jax);

    const A = -e2*Math.cos(phi1)**2*Math.cos(az)**2/(1-e2);
    jax = `\\eqalign{
      A =& -${fmt(e2)}\\cos^2${deg(phi1)}\\cos^2${deg(az)}/ \\cr
         & (1-${fmt(e2)}) \\cr
        =& ${fmt(A, true,9)}
    }`
    MathJax.Hub.getAllJax("A_elli")[0].Text(jax);

    const B = 3*e2*(1-A)*Math.sin(phi1)*Math.cos(phi1)*Math.cos(az)/(1-e2);
    jax = `\\eqalign{
      B =& 3\\times${fmt(e2)}\\times(1-${fmt(A,false,9)})\\cos${deg(phi1)} \\cr
         & \\sin${deg(phi1)}\\cos${deg(az)}/(1-${fmt(e2)}) \\cr
        =& ${fmt(B,true,9)} 
    }`
    MathJax.Hub.getAllJax("B_elli")[0].Text(jax);

    const D = c/N1;
    jax = `\\eqalign{
      D &= ${fmt(c,true,2)}/${fmt(N1,false,2)} \\cr
        &= ${fmt(D)}
    }`
    MathJax.Hub.getAllJax("D_elli")[0].Text(jax);

    const E = D - A*(1+A)*D**3/6-B*(1+3*A)*D**4/24;
    jax = `\\eqalign{
      E =& ${fmt(D,true)}-${fmt(A,false,9)}\\times${fmt(D)}^3/6\\cr
         & -${fmt(B,false,9)}\\times(1+3\\times${fmt(A,false,9)})\\times${fmt(D)}^4/24 \\cr
        =& ${fmt(E, true,9)} \\text{ radians} \\cr
        =& ${deg(E,true)} 
    }`
    MathJax.Hub.getAllJax("E_elli")[0].Text(jax);

    const F = 1-A*E**2/2-B*E**3/6;
    jax = `\\eqalign{
      F =& 1-${fmt(A,false,9)}\\times${fmt(E,false,9)}^2/6-${fmt(B,false,9)} \\cr
         & \\times${fmt(E,false,9)}^3/6 \\cr
        =& ${fmt(F,true,9)}
    }`
    MathJax.Hub.getAllJax("F_elli")[0].Text(jax);

    const psi = Math.asin(Math.sin(phi1)*Math.cos(E)+Math.cos(phi1)*Math.sin(E)*Math.cos(az));
    jax =`\\eqalign{
      \\psi =& \\arcsin[\\sin${deg(phi1)}\\cos${deg(E)}+\\cos${deg(phi1)} \\cr
             & \\times\\sin${deg(E)}\\cos${deg(az)}] \\cr
            =& ${deg(psi,true)} 
    }`
    MathJax.Hub.getAllJax("psi_elli")[0].Text(jax);

    const lam = lam0+Math.asin(Math.sin(az)*Math.sin(E)/Math.cos(psi));
    jax = `\\eqalign{
      \\lambda &= ${deg(lam0,true)}+\\arcsin(\\sin${deg(az)}\\sin${deg(E)}/\\cos${deg(psi)})\\cr
               &= ${deg(lam)} \\cr
               &= ${r2dms(lam)}
    }`
    MathJax.Hub.getAllJax("lam_elli")[0].Text(jax);

    const phi = Math.atan((1-e2*F*Math.sin(phi1)/Math.sin(psi))*Math.tan(psi)/(1-e2));
    jax = `\\eqalign{
      \\phi =& \\arctan[(1-${fmt(e2)}\\times${fmt(F,false,9)}/\\sin${deg(psi)})\\cr
             & \\times\\tan${deg(psi)}/(1-${fmt(e2)})] \\cr
            =& ${deg(phi)} \\cr
            =& ${r2dms(phi)} 
    }`
    MathJax.Hub.getAllJax("phi_elli")[0].Text(jax);
  }
}
