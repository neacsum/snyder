
var sph = {
  set_fwd () {
    const r = document.getElementById("r_sph_in").value;
    const phi1 = document.getElementById("phi1_sph_in").value*D2R;
    const phi2 = document.getElementById("phi2_sph_in").value*D2R;
    const phi0 = document.getElementById("phi0_sph_in").value*D2R;
    const lam0 = document.getElementById("lam0_sph_in").value*D2R;
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lam_sph_in").value*D2R;

    const n = Math.log(Math.cos(phi1)/Math.cos(phi2))/Math.log(Math.tan(Math.PI/4+phi2/2)/Math.tan(Math.PI/4+phi1/2));
    let jax=`\\eqalign{
      n &= \\ln(\\cos${deg(phi1,false)}/\\cos${deg(phi2,false)})/\\ln[\\tan(45^\\circ+${deg(phi2,false)}/2)/\\tan(45^\\circ+${deg(phi1,false)}/2)] \\cr
        &= ${fmt(n)}
    }`
    MathJax.Hub.getAllJax("n_sph")[0].Text(jax);

    const F=Math.cos(phi1)*Math.tan(Math.PI/4+phi1/2)**n/n;
    jax=`\\eqalign{
      F &=[\\cos${deg(phi1,false)}\\tan^{${fmt(n)}}(45^\\circ+${deg(phi1,false)}/2)]/${fmt(n)} \\cr
        &=${fmt(F)}
    }`
    MathJax.Hub.getAllJax("f_sph")[0].Text(jax);

    const rho0 = r*F/Math.tan(Math.PI/4+phi0/2)**n;
    jax=`\\eqalign{
      \\rho_0 &= ${fmt(r,true,0)}\\times${fmt(F)}/\\tan^{${fmt(n)}}(45^\\circ+${deg(phi0,false)}/2) \\cr
              &= ${fmt(rho0)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("rho0_sph")[0].Text(jax);

    const rho = r*F/Math.tan(Math.PI/4+phi/2)**n;
    jax=`\\eqalign{
      \\rho &= ${fmt(r,true,0)}\\times${fmt(F)}/\\tan^{${fmt(n)}}(45^\\circ+${deg(phi,false)}/2) \\cr
              &= ${fmt(rho)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("rho_sph")[0].Text(jax);

    const theta = n*(lam-lam0);
    jax = `\\eqalign{
      \\theta &= ${fmt(n)}\\times(${deg(lam,false)}-${deg(lam0,false)}) \\cr
              &= ${deg(theta, true)}
    }`
    MathJax.Hub.getAllJax("theta_sph")[0].Text(jax);

    const x = rho*Math.sin(theta);
    jax = `\\eqalign{
      x &= ${fmt(rho)}\\sin${deg(theta)} \\cr
        &= ${fmt(x, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);
    document.getElementById ("x_sph_in").value = fmt(x);

    const y = rho0-rho*Math.cos(theta);
    jax = `\\eqalign{
      y &= ${fmt(rho0)}-${fmt(rho)}\\cos${deg(theta)}\\cr
        &= ${fmt(y, true)}\\;\\text{units}
    }`
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
    document.getElementById ("y_sph_in").value = fmt(y);

    const k = Math.cos(phi1)*Math.tan(Math.PI/4+phi1/2)**n/(Math.cos(phi)*Math.tan(Math.PI/4+phi/2)**n);
    jax = `\\eqalign{
      k =& \\cos${deg(phi1,false)}\\tan^{${fmt(n)}}(45^\\circ+${deg(phi1,false)}/2)/ \\cr
         &[\\cos${deg(phi,false)}\\tan^{${fmt(n)}}(45^\\circ+${deg(phi,false)}/2)] \\cr
        =& ${fmt(k, true)}
    }`
    MathJax.Hub.getAllJax("k_sph")[0].Text(jax);

    const k1 = n*rho/(r*Math.cos(phi))
    jax = `\\eqalign{
      k &= ${fmt(n)}\\times${fmt(rho)}/(${fmt(r,true,0)}\\times\\cos${deg(phi,false)}) \\cr
        &= ${fmt(k1)}
    }`
    MathJax.Hub.getAllJax("k_sph1")[0].Text(jax);
    this.set_inv ();
  },
  set_inv () {
    const r = document.getElementById("r_sph_in").value;
    const phi1 = document.getElementById("phi1_sph_in").value*D2R;
    const phi2 = document.getElementById("phi2_sph_in").value*D2R;
    const phi0 = document.getElementById("phi0_sph_in").value*D2R;
    const lam0 = document.getElementById("lam0_sph_in").value*D2R;
    const x = document.getElementById("x_sph_in").value;
    const y = document.getElementById("y_sph_in").value;

    const n = Math.log(Math.cos(phi1)/Math.cos(phi2))/Math.log(Math.tan(Math.PI/4+phi2/2)/Math.tan(Math.PI/4+phi1/2));
    const F=Math.cos(phi1)*Math.tan(Math.PI/4+phi1/2)**n/n;
    const rho0 = r*F/Math.tan(Math.PI/4+phi0/2)**n;

    const rho = Math.sqrt (x**2 + (rho0-y)**2);
    let jax = `\\eqalign{
      \\rho &= [${fmt(x,false,0)}^2 + (${fmt(rho0)}-${fmt(y,false,0)})^2]^{1/2} \\cr
            &= ${fmt(rho, true)}
    }`
    MathJax.Hub.getAllJax("rho_sph_inv")[0].Text(jax);

    const theta = Math.atan2(x, rho0-y);
    jax = `\\eqalign{
      \\theta &= \\arctan[${fmt(x,false,0)}/(${fmt(rho0)}-${fmt(y,false,0)})] \\cr
              &= ${deg(theta, true)}\\;\\text{${(rho0-y>0?"Not adjusted since denominator is positive.":"Adjusted since denominator is negative.")}}
    }`
    MathJax.Hub.getAllJax("theta_sph_inv")[0].Text(jax);

    const lam = lam0+theta/n;
    jax = `\\eqalign{
      \\lambda &= ${deg(theta)}/${fmt(n)} + ${deg(lam0,false)}\\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_sph_inv")[0].Text(jax);

    const phi = 2*Math.atan((r*F/rho)**(1/n))-Math.PI/2;
    jax = `\\eqalign{
      \\phi &= 2\\arctan[(${fmt(r,false,0)}\\times${fmt(F)}/${fmt(rho)})^{1/${fmt(n)}}] - 90^\\circ \\cr
            &= ${deg(phi, true)}
    }`
    MathJax.Hub.getAllJax("phi_sph_inv")[0].Text(jax);
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

  set_fwd () {
    const {a, e, e2} = this;
    const phi1 = document.getElementById("phi1_ell_in").value*D2R;
    const phi2 = document.getElementById("phi2_ell_in").value*D2R;
    const phi0 = document.getElementById("phi0_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam = document.getElementById("lam_ell_in").value*D2R;

    const m1 = Math.cos(phi1)/Math.sqrt(1-e2*Math.sin(phi1)**2);
    let jax=`\\eqalign{
      m_1 &= \\cos${deg(phi1,false)}/(1-${fmt(e2)}\\sin^2${deg(phi1,false)})^{1/2} \\cr
          &= ${fmt(m1, true)}
    }`;
    MathJax.Hub.getAllJax("m1_ell")[0].Text(jax);

    const m2 = Math.cos(phi2)/Math.sqrt(1-e2*Math.sin(phi2)**2);
    jax=`\\eqalign{
      m_2 &= \\cos${deg(phi2,false)}/(1-${fmt(e2)}\\sin^2${deg(phi2,false)})^{1/2} \\cr
          &= ${fmt(m2, true)}
    }`;
    MathJax.Hub.getAllJax("m2_ell")[0].Text(jax);

    const t1 = Math.tan(Math.PI/4-phi1/2)/((1-e*Math.sin(phi1))/(1+e*Math.sin(phi1)))**(e/2);
    jax=`\\eqalign{
      t_1 &= \\tan(45^\\circ-${deg(phi1,false)}/2)/[(1-${fmt(e)}\\sin ${deg(phi1,false)})/(1+${fmt(e)}\\sin ${deg(phi1,false)})]^{${fmt(e)}/2} \\cr
          &= ${fmt(t1, true)}
    }`;
    MathJax.Hub.getAllJax("t1_ell")[0].Text(jax);

    const t2 = Math.tan(Math.PI/4-phi2/2)/((1-e*Math.sin(phi2))/(1+e*Math.sin(phi2)))**(e/2);
    jax=`t_2= ${fmt(t2,true)}\\text{, using above with \\(${deg(phi2,true)}\\) in place of \\(${deg(phi1,true)}\\),}`
    MathJax.Hub.getAllJax("t2_ell")[0].Text(jax);

    const t0 = Math.tan(Math.PI/4-phi0/2)/((1-e*Math.sin(phi0))/(1+e*Math.sin(phi0)))**(e/2);
    jax=`t_0= ${fmt(t0,true)}\\text{, using above with \\(${deg(phi0,true)}\\) in place of \\(${deg(phi1,true)}\\),}`
    MathJax.Hub.getAllJax("t0_ell")[0].Text(jax);

    const n = (Math.log(m1)-Math.log(m2))/(Math.log(t1)-Math.log(t2));
    jax =`\\eqalign{
      n &= \\ln(${fmt(m1)}/${fmt(m2)})/\\ln(${fmt(t1)}/${fmt(t2)}) \\cr
        &= ${fmt(n, true)}
    }`
    MathJax.Hub.getAllJax("n_ell")[0].Text(jax);

    const F = m1/(n*t1**n);
    jax = `\\eqalign{
      F &= ${fmt(m1)}/(${fmt(n)}\\times${fmt(t1)}^{${fmt(n)}}) \\cr
        &= ${fmt(F, true)}
    }`
    MathJax.Hub.getAllJax("f_ell")[0].Text(jax);

    const rho0 = a*F*t0**n
    jax = `\\eqalign{
      \\rho_0 &= ${fmt(a, false, 0)}\\times${fmt(F)}\\times${fmt(t0)}^{${fmt(n)}} \\cr
              &= ${fmt(rho0, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho0_ell")[0].Text(jax);

    const t = Math.tan(Math.PI/4-phi/2)/((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2);
    jax = `t= ${fmt(t)}`
    MathJax.Hub.getAllJax("t_ell")[0].Text(jax);
    MathJax.Hub.getAllJax("phi_ell1")[0].Text(deg(phi,false));
    MathJax.Hub.getAllJax("phi1_ell1")[0].Text(deg(phi1,false));

    const rho = a*F*t**n;
    jax = `\\eqalign{
      \\rho &= ${fmt(a, false, 0)}\\times${fmt(F)}\\times${fmt(t)}^{${fmt(n)}} \\cr
            &= ${fmt(rho, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho_ell")[0].Text(jax);

    const theta = n*(lam-lam0);
    jax =`\\eqalign{
      \\theta &= ${fmt(n)}\\times[${deg(lam,false)}-${deg(lam0,false)}] \\cr
              &= ${deg(theta,true)}
    }`
    MathJax.Hub.getAllJax("theta_ell")[0].Text(jax);

    const x = rho*Math.sin(theta);
    jax = `\\eqalign{
      x &= ${fmt(rho, false,2)}\\sin ${deg(theta)} \\cr
        &= ${fmt(x, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("x_ell")[0].Text(jax);
    document.getElementById("x_ell_in").value = fmt(x, true,2);

    const y = rho0-rho*Math.cos(theta);
    jax = `\\eqalign{
      y &= ${fmt(rho0, false, 2)}-${fmt(rho,false,2)}\\cos${deg(theta)} \\cr
        &= ${fmt(y,true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("y_ell")[0].Text(jax);
    document.getElementById("y_ell_in").value = fmt(y, true,2);

    const m = Math.cos(phi)/Math.sqrt(1-e2*Math.sin(phi)**2);
    jax = `\\eqalign{
      m &= \\cos${deg(phi,false)}/(1-${fmt(e2)}\\sin^2${deg(phi,false)})^{1/2} \\cr
        &= ${fmt(m,true)}
    }`
    MathJax.Hub.getAllJax("m_ell")[0].Text(jax);

    const k = rho*n/(a*m);
    jax = `\\eqalign{
      k &= ${fmt(rho,false,2)}\\times${fmt(n)}/(${fmt(a,false,0)}\\times${fmt(m)}) \\cr
        &= ${fmt(k, true)}
    }`
    MathJax.Hub.getAllJax("k_ell")[0].Text(jax);

  },
  set_inv () {
    const {a, e, e2} = this;
    const phi1 = document.getElementById("phi1_ell_in").value*D2R;
    const phi2 = document.getElementById("phi2_ell_in").value*D2R;
    const phi0 = document.getElementById("phi0_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;

    const x = document.getElementById("x_ell_in").value;
    const y = document.getElementById("y_ell_in").value;
    const m1 = Math.cos(phi1)/Math.sqrt(1-e2*Math.sin(phi1)**2);
    const m2 = Math.cos(phi2)/Math.sqrt(1-e2*Math.sin(phi2)**2);
    const t1 = Math.tan(Math.PI/4-phi1/2)/((1-e*Math.sin(phi1))/(1+e*Math.sin(phi1)))**(e/2);
    const t2 = Math.tan(Math.PI/4-phi2/2)/((1-e*Math.sin(phi2))/(1+e*Math.sin(phi2)))**(e/2);
    const t0 = Math.tan(Math.PI/4-phi0/2)/((1-e*Math.sin(phi0))/(1+e*Math.sin(phi0)))**(e/2);
    const n = (Math.log(m1)-Math.log(m2))/(Math.log(t1)-Math.log(t2));
    const F = m1/(n*t1**n);
    const rho0 = a*F*t0**n

    const rho = Math.sqrt(x**2 + (rho0-y)**2);
    let jax = `\\eqalign{
      \\rho &= [${fmt(x,false, 0)}^2 + (${fmt(rho0, false, 2)} - ${fmt(y,false,0)})^2]^{1/2} \\cr
            &= ${fmt(rho, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho_invell")[0].Text(jax);

    const theta = Math.atan2(x, rho0-y);
    const txt = (rho0-y)>0?"The denominator is positive; therefore \\(\\theta\\) is not adjusted." :
                           "The denominator is negative; therefore \\(\\theta\\) is adjusted."
    jax = `\\eqalign{
      \\theta &= \\arctan[${fmt(x,false,0)}/(${fmt(rho0,false,2)}-${fmt(y,false,0)})]\\cr
              &= ${deg(theta)}\\;\\text{${txt}}
    }`
    MathJax.Hub.getAllJax("theta_invell")[0].Text(jax);

    const t = (rho/(a*F))**(1/n);
    jax = `\\eqalign{
      t &= [${fmt(rho,false,2)}/(${fmt(a,false,0)}\\times${fmt(F)})]^{1/${fmt(n)}} \\cr
        &= ${fmt(t, true)}
    }`
    MathJax.Hub.getAllJax("t_invell")[0].Text(jax);

    const phi_iter0 = Math.PI/2 - 2*Math.atan(t)
    jax =`\\eqalign{
      \\phi &= 90^\\circ - 2\\arctan${fmt(t)}\\cr
            &= ${deg(phi_iter0, true)}
    }`
    MathJax.Hub.getAllJax("phi_invell0")[0].Text(jax);
    MathJax.Hub.getAllJax("phi_invell0-1")[0].Text(deg(phi_iter0, true));

    const phifunc = function(phi) {return Math.PI/2 - 2*Math.atan(t*((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2))}
    const phi_iter1 = phifunc (phi_iter0)
    jax =`\\eqalign{
      \\phi =& 90^\\circ - 2\\arctan\\{${fmt(t)}\\times[(1-${fmt(e)}\\sin ${deg(phi_iter0)})/ \\cr
             & (1+${fmt(e)}\\sin ${deg(phi_iter0)})]^{${fmt(e)}/2} \\} \\cr
            =& ${deg(phi_iter1, true)} 
    }`
    MathJax.Hub.getAllJax("phi_invell1")[0].Text(jax);
    MathJax.Hub.getAllJax("phi_invell1-1")[0].Text(deg(phi_iter1, true));

    const phi_iter2 = phifunc(phi_iter1)
    MathJax.Hub.getAllJax("phi_invell2")[0].Text(deg(phi_iter2, true));
    const phi_iter3 = phifunc(phi_iter2)
    MathJax.Hub.getAllJax("phi_invell3")[0].Text(`\\phi=${deg(phi_iter3, true)}`);
    MathJax.Hub.getAllJax("phi_invell")[0].Text(`\\phi=${deg(phi_iter3, true)}`);

    const phi = phifunc(phi_iter3)
    MathJax.Hub.getAllJax("phi_invell")[0].Text(`\\phi=${deg(phi, true)}`);

    const lam = lam0 + theta/n;
    jax = `\\eqalign{
      \\lambda &= ${deg(theta)}/${fmt(n)}+${deg(lam0,false)} \\cr
               &= ${deg(lam, true)} 
    }`
    MathJax.Hub.getAllJax("lam_invell")[0].Text(jax);

  }
}