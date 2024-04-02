var sphere = {
  r:1,
  lam0: -96.*D2R,
  phi0: 23.0*D2R,
  phi1: 29.5*D2R,
  phi2: 45.5*D2R,

  set_fwd () {
    this.r = document.getElementById("r_in").value;
    this.lam0 = document.getElementById ("lam0_sph_in").value*D2R;
    this.phi0 = document.getElementById ("phi0_sph_in").value*D2R;
    this.phi1 = document.getElementById ("phi1_sph_in").value*D2R;
    this.phi2 = document.getElementById ("phi2_sph_in").value*D2R;

    const {r, lam0, phi0, phi1, phi2} = this;
    const phi = document.getElementById("phi_in").value*D2R;
    const lam = document.getElementById("lambda_in").value*D2R;  

    const n=(Math.sin(phi1)+Math.sin(phi2))/2
    let jax = `\\eqalign {
      n &= (\\sin${deg(phi1)} +\\sin${deg(phi2)})/2 \\cr
        &= ${fmt(n, true)}
    }`;
    MathJax.Hub.getAllJax("n")[0].Text(jax);
    MathJax.Hub.getAllJax("n_inv")[0].Text(jax);

    const C=Math.cos(phi1)**2+2*n*Math.sin(phi1);
    jax = `\\eqalign{
      C &= \\cos^2 ${deg(phi1)}+2\\times${fmt(n)}\\sin${deg(phi1)} \\cr
        &= ${fmt(C,true)}
    }`;
    MathJax.Hub.getAllJax("C")[0].Text(jax);
    MathJax.Hub.getAllJax("C_inv")[0].Text(jax);

    const rho=r*Math.sqrt(C-2*n*Math.sin(phi))/n;
    jax=`\\eqalign{
      \\rho &= ${r}\\times(${fmt(C)}-2\\times${fmt(n)}\\sin${deg(phi)})^{1/2}/${fmt(n)} \\cr
              &= ${fmt(rho, true)} \\;\\text{units}
    }`;
    MathJax.Hub.getAllJax("rho")[0].Text(jax);

    const rho0=r*Math.sqrt(C-2*n*Math.sin(phi0))/n;
    jax=`\\eqalign{
      \\rho_0 &= ${r}\\times(${fmt(C)}-2\\times${fmt(n)}\\sin${deg(phi0)})^{1/2}/${fmt(n)} \\cr
            &= ${fmt(rho0, true)} \\;\\text{units}
    }`;
    MathJax.Hub.getAllJax("rho0")[0].Text(jax);
    MathJax.Hub.getAllJax("rho0_inv")[0].Text(jax);

    const theta = n*(lam-lam0);
    jax = `\\eqalign{
      \\theta &= ${fmt(n)}\\times[${deg(lam,true)}-${deg(lam0)}] \\cr
              &= ${deg(theta,true)}
    }`;
    MathJax.Hub.getAllJax("theta")[0].Text(jax);

    const x=rho*Math.sin(theta);
    jax = `\\eqalign{
      x &= ${fmt(rho)}\\sin ${deg(theta)} \\cr
        &= ${fmt(x, true)} \\;\\text{units}
    }`;
    MathJax.Hub.getAllJax("x")[0].Text(jax);
    document.getElementById("x_sph_in").value = fmt(x,true);

    const y=rho0-rho*Math.cos(theta);
    jax = `\\eqalign{
      y &= ${fmt(rho0)} - ${fmt(rho)}\\cos ${deg(theta)} \\cr
        &= ${fmt(y,true)} \\;\\text{units}
    }`;
    MathJax.Hub.getAllJax("y")[0].Text(jax);
    document.getElementById("y_sph_in").value = fmt(y, true);

    const h=Math.cos(phi)/Math.sqrt(C-2*n*Math.sin(phi));
    jax= `\\eqalign{
      h &= \\cos ${deg(phi)}/(${fmt(C)}-2\\times ${fmt(n)}\\sin ${deg(phi)}) \\cr
        &= ${h.toFixed(7)}
    }`;
    MathJax.Hub.getAllJax("h")[0].Text(jax);
    const k = 1/h;
    jax=`k=1/${fmt(h)}=${fmt(k)}`
    MathJax.Hub.getAllJax("k")[0].Text(jax);

    const omega = 2*Math.asin(Math.abs(h-k)/(h+k));
    jax=`\\eqalign{
      \\sin ½\\omega &= |${fmt(h)}-${fmt(k)}|/(${fmt(h)}+${fmt(k)}) \\cr
              \\omega &= ${deg(omega,true)}
    }`;
    MathJax.Hub.getAllJax("omega")[0].Text(jax);
    this.set_inv ();
  },

  set_inv () {
    const {r, lam0, phi0, phi1, phi2} = this;
    let x = +document.getElementById("x_sph_in").value;
    let y = +document.getElementById("y_sph_in").value;

    const n=(Math.sin(phi1)+Math.sin(phi2))/2
    const C=Math.cos(phi1)**2+2*n*Math.sin(phi1);
    const rho0=r*Math.sqrt(C-2*n*Math.sin(phi0))/n;
    let rho=Math.sqrt(x**2 + (rho0-y)**2);
    let jax = `\\eqalign{
      \\rho &=[${fmt(x,false,0)}^2 + (${fmt(rho0)}-${fmt(y,false,0)})^2]^{1/2} \\cr
            &= ${fmt(rho)} \\;\\text{units}    
    }`;
    MathJax.Hub.getAllJax("rho_inv")[0].Text(jax);
    let theta;
    if (n < 0) {
      x = -x;
      y = -y;
      rho = -rho;
    }
    theta = Math.atan2 (x, rho0-y);
    jax = `\\eqalign{
      \\theta =& \\arctan[${fmt(x)}/(${fmt(rho0, true)}-${fmt(y)})] \\cr
              =& ${deg(theta, true)} 
      ${n<0?"\\text{ Since the \\(n\\) is negative, sign of \\(x, y\\) and \\(\\rho_0\\)} \\cr & \\text{ are reversed.}":""}
    }`;
    MathJax.Hub.getAllJax("theta_inv")[0].Text(jax);

    const phi=Math.asin((C-(rho*n/r)**2)/(2*n));
    jax = `\\eqalign{
      \\phi &=\\arcsin\\{[${fmt(C)}-(${fmt(rho)}\\times${fmt(n)}/${fmt(r,false,0)})^2]/(2\\times${fmt(n)}) \\} \\cr
            &=\\arcsin ${fmt((C-(rho*n/r)**2)/(2*n))} \\cr
            &=${deg(phi,true)}
    }`;
    MathJax.Hub.getAllJax("phi")[0].Text(jax);

    const lambda=lam0r+theta/n;
    jax = `\\eqalign{
      \\lambda &= ${deg(theta)}/${fmt(n)} + ${deg(lam0)} \\cr
               &= ${deg(theta/n)} + ${deg(lam0)} \\cr
               &= ${deg(lambda, true)}^\\circ
    }`;
    MathJax.Hub.getAllJax("lambda")[0].Text(jax);
  }
}

var ell = {
  a: 6378206.4,
  e2:  0.00676866,
  e: 0.0822719,
  lam0: -96.*D2R,
  phi0: 23.0*D2R,
  phi1: 29.5*D2R,
  phi2: 45.5*D2R,

  //q function used to calculate authalic latitude (Snyder (3-12))
  q_auth(phi) {
    return (1-this.e2)*(Math.sin(phi)/(1-this.e2*Math.sin(phi)**2)-1/(2*this.e)
           *Math.log((1-this.e*Math.sin(phi))/(1+this.e*Math.sin(phi))));
  },

  m(phi) {
    return Math.cos(phi)/Math.sqrt(1-this.e2*Math.sin(phi)**2);
  },
  
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
    MathJax.Hub.getAllJax("ellip_a")[0].Text(`a=${this.a}`);
    MathJax.Hub.getAllJax("ellip_e2")[0].Text(`e^2=${this.e2.toFixed(7)}`);
    MathJax.Hub.getAllJax("ellip_e")[0].Text(`e=${this.e.toFixed(7)}`);

    this.set_fwd();
  },
  set_fwd() {
    this.lam0 = document.getElementById("lam0_ell_in").value*D2R;
    this.phi0 = document.getElementById("phi0_ell_in").value*D2R;
    this.phi1 = document.getElementById("phi1_ell_in").value*D2R;
    this.phi2 = document.getElementById("phi2_ell_in").value*D2R;

    const {a, e, e2, phi0, phi1, phi2, lam0} = this;
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam = document.getElementById("lambda_ell_in").value*D2R;

    const m1=this.m(phi1);
    let jax = `\\eqalign{
      m1 &=\\cos ${deg(phi1)}/(1-${fmt(e2)}\\sin^2 ${deg(phi1)})^{1/2} \\cr
         &=${fmt(m1, true)}
    }`;
    MathJax.Hub.getAllJax("m1")[0].Text(jax);

    const m2=this.m(phi2);
    jax = `\\eqalign{
      m2 &=\\cos ${deg(phi2)}/(1-${fmt(e2)}\\sin^2 ${deg(phi2)})^{1/2} \\cr
         &=${m2.toFixed(7)}
    }`;
    MathJax.Hub.getAllJax("m2")[0].Text(jax);
    
    const q1=this.q_auth(phi1);
    jax = `\\eqalign{
      q_1 =& (1-${fmt(e2)})\\{\\sin ${deg(phi1)}/(1-${fmt(e2)}) \\cr
           & -[1/(2\\times${fmt(e)})\\ln[(1-${fmt(e)}\\sin^2 ${deg(phi1)})/ \\cr
           & (1+${fmt(e)}\\sin^2 ${deg(phi1)})] \\} \\cr
          =& ${fmt(q1, true)} 
    }`;
    MathJax.Hub.getAllJax("q1")[0].Text(jax);

    const q2=this.q_auth(phi2);
    MathJax.Hub.getAllJax("q2")[0].Text(`q_2=${fmt(q2,true)}`);

    const q0=this.q_auth(phi0);
    MathJax.Hub.getAllJax("q0")[0].Text(`q_0=${fmt(q0,true)}`);

    const n=(m1**2-m2**2)/(q2-q1);
    jax =`\\eqalign{
      n &= (${fmt(m1)}^2 - ${fmt(m2)}^2)/(${fmt(q2)}-${fmt(q1)}) \\cr
        &= ${fmt(n, true)}
    }`;
    MathJax.Hub.getAllJax("n_ell")[0].Text(jax);

    const C=m1**2+n*q1;
    jax = `\\eqalign{
      C &= ${fmt(m1)}^2+${fmt(n)}\\times${fmt(q1)} \\cr
        &= ${fmt(C,true)}
    }`;
    MathJax.Hub.getAllJax("C_ell")[0].Text(jax);

    const rho0 = a*Math.sqrt(C-n*q0)/n;
    jax = `\\eqalign{
      \\rho_0 &= ${fmt(a,false,0)}\\times(${fmt(C)}-${fmt(n)}\\times${fmt(q0)})^{1/2}/${fmt(n)} \\cr
              &= ${fmt(rho0,true,2)} \\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho0_ell")[0].Text(jax);

    const q=this.q_auth(phi);
    MathJax.Hub.getAllJax("q_ell")[0].Text(`q=${fmt(q,true)}`);

    const rho = a*Math.sqrt(C-n*q)/n;
    jax = `\\eqalign{
      \\rho &= ${fmt(a,false,0)}\\times(${fmt(C)}-${fmt(n)}\\times${fmt(q)})^{1/2}/${fmt(n)} \\cr
            &= ${fmt(rho,true,2)} \\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho_ell")[0].Text(jax);

    const theta=n*(lam-lam0);
    jax = `\\theta = ${fmt(n)}\\times[${deg(lam,true)}-${deg(lam0)}] = ${deg(theta,true)}`;
    MathJax.Hub.getAllJax("theta_ell")[0].Text(jax);
    const x = rho*Math.sin(theta);
    jax =`x = ${fmt(rho,true,2)}\\sin ${deg(theta)} = ${fmt(x,true,2)}\\;\\text{m}`
    MathJax.Hub.getAllJax("x_ell")[0].Text(jax);
    document.getElementById("x_ell_in").value = fmt(x,true,2);

    const y = rho0-rho*Math.cos(theta);
    jax = `\\eqalign{
      y &=${fmt(rho0,true,2)} - ${fmt(rho,false,2)}\\cos ${deg(theta)} \\cr
        &=${fmt(y,true,2)}\\;\\text{m}
    }`;
    MathJax.Hub.getAllJax("y_ell")[0].Text(jax);
    document.getElementById("y_ell_in").value = fmt(y,true,2);

    const m=this.m(phi);
    jax = `\\eqalign{
      m &=\\cos ${deg(phi)}/(1-${fmt(e2)}\\sin^2 ${deg(phi)})^{1/2} \\cr
         &=${fmt(m,true)}
    }`;
    MathJax.Hub.getAllJax("m_ell")[0].Text(jax);

    const k=rho*n/(a*m);
    jax=`\\eqalign{
      k &=${fmt(rho,true,2)}\\times${fmt(n)}/(${fmt(a,false,0)}\\times${fmt(m)}) \\cr
        &= ${fmt(k,true)}
    }`
    MathJax.Hub.getAllJax("k_ell")[0].Text(jax);
    const h=1/k
    MathJax.Hub.getAllJax("h_ell")[0].Text(`h=1/${fmt(k)}=${fmt(h)}`);

    const omega = 2*Math.asin(Math.abs(h-k)/(h+k));
    jax=`\\eqalign{
      \\sin ½\\omega &= |${fmt(h)}-${fmt(k)}|/(${fmt(h)}+${fmt(k)}) \\cr
              \\omega &= ${deg(omega, true)}
    }`;
    MathJax.Hub.getAllJax("omega_ell")[0].Text(jax);
    this.set_inv ();  
  },

  set_inv () {
    const {a, e, e2, phi0, phi1, phi2, lam0, k0} = this;
    let x = +document.getElementById("x_ell_in").value;
    let y = +document.getElementById("y_ell_in").value;

    const m1=this.m(phi1);
    const m2=this.m(phi2);
    const q0=this.q_auth(phi0);
    const q1=this.q_auth(phi1);
    const q2=this.q_auth(phi2);
    const n=(m1**2-m2**2)/(q2-q1);
    const C=m1**2+n*q1;
    let rho0 = a*Math.sqrt(C-n*q0)/n;

    let rho = Math.sqrt(x**2 + (rho0-y)**2);
    let jax = `\\eqalign{
      \\rho &=[${fmt(x,false,0)}^2+(${fmt(rho0,false,2)} - ${fmt(y,false,0)})^2]^{1/2} \\cr
            &=${fmt(rho, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho_ell_inv")[0].Text(jax);  

    let theta;
    if (n < 0) {
      x = -x;
      y = -y;
      rho0 = -rho0;
    }
    theta = Math.atan2 (x, rho0-y);
    jax = `\\eqalign{
      \\theta =& \\arctan[${fmt(x,false,2)}/(${fmt(rho0, true, 2)}-${fmt(y,false,2)})] \\cr
              =& ${deg(theta, true)} 
      ${n<0?"\\text{ Since the \\(n\\) is negative, sign of \\(x, y\\) and \\(\\rho_0\\)} \\cr & \\text{ are reversed.}":""}
    }`;
    MathJax.Hub.getAllJax("theta_ell_inv")[0].Text(jax);

    const q=(C-(rho*n/a)**2)/n
    jax=`\\eqalign {
      q &= [${fmt(C)}-(${fmt(rho,false,2)}\\times${fmt(n)}/${fmt(a,false,0)})^2]/${fmt(n)} \\cr
        &= ${fmt(q, true)}
    }`
    MathJax.Hub.getAllJax("q_ell_inv")[0].Text(jax);

    MathJax.Hub.getAllJax("phi_iter0")[0].Text(`${fmt(q)}/2`);
    let phi_old = Math.asin(q/2);
    MathJax.Hub.getAllJax("phi_iter0_1")[0].Text(`${deg(phi_old,true)}`);
    MathJax.Hub.getAllJax("phi_iter0_2")[0].Text(`${deg(phi_old,true)}`);

    //iterative function to compute phi from beta (Snyder (3-16))
    let inv_auth_lat = function(x) {
      return x+(1-e2*Math.sin(x))**2/(2*Math.cos(x))*(q/(1-e2)-Math.sin(x)/(1-e2*Math.sin(x)**2)
     +1/(2*e)*Math.log((1-e*Math.sin(x))/(1+e*Math.sin(x))));
    }

    let phi_new = inv_auth_lat(phi_old);
    let t = deg(phi_old);
    jax=`\\eqalign{
      \\phi =& ${t}+[(1-${fmt(e2)}\\sin^2${t})^2/(2\\cos ${t})] \\cr
             &\\times\\{${fmt(q)}(1-${fmt(e2)})-\\sin ${t}/(1-${fmt(e2)}\\sin^2${t}) \\cr
             &+[1/(2\\times${fmt(e)})]\\ln[(1-${fmt(e)}\\sin${t}) \\cr
             &/(1+${fmt(e)}\\sin${t})]\\}\\times 180^\\circ/\\pi \\cr
            =& ${deg(phi_new,true)}
    }`;
    MathJax.Hub.getAllJax("phi_iter1")[0].Text(jax);
    MathJax.Hub.getAllJax("phi_iter1_1")[0].Text(`${deg(phi_new, true)}`);
    phi_old = phi_new;
    phi_new = inv_auth_lat(phi_old);
    MathJax.Hub.getAllJax("phi_iter2")[0].Text(`${deg(phi_new,true)}`);
    phi_old = phi_new;
    phi_new = inv_auth_lat(phi_old);
    MathJax.Hub.getAllJax("phi_iter3")[0].Text(`${deg(phi_new,true)}`);
    phi_old = phi_new;
    phi_new = inv_auth_lat(phi_old);
    MathJax.Hub.getAllJax("phi_iter4")[0].Text(`\\phi = ${deg(phi_new,true)}`);

    const lam = lam0+theta/n;
    jax=`\\eqalign{
      \\lambda &= ${deg(lam0, true)}+${deg(theta)}/${fmt(n)} \\cr
               &= ${deg(lam,true)}
    }`;
    MathJax.Hub.getAllJax("lam_ell_inv")[0].Text(jax);
  }
}