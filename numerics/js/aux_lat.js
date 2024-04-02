var ell = {
  a: 6378206.4,
  e: 0.0822719,
  e2:  0.00676866,
  phi: 40*D2R,
  k0: 0.9996,

  select (ellip) {
    if (ellip == 0) { //Clarke-1866
      this.a = 6378206.4;
      inv_f = 294.9786982;
    } else if (ellip == 1) { //WGS-84
      this.a = 6378137.;
      inv_f = 298.257223563;
    }
    this.e2 = 2/inv_f - 1/inv_f**2;
    this.e = Math.sqrt(e2);
    MathJax.Hub.getAllJax("ellip_a")[0].Text(`a=${a}`);
    MathJax.Hub.getAllJax("ellip_e2")[0].Text(`e^2=${fmt(e2)}`);
    MathJax.Hub.getAllJax("ellip_e")[0].Text(`e=${fmt(e)}`);

    //other formulas to update
    this.set_phi ();
  },

  set_phi(){
    this.phi = document.getElementById("phi_in").value*D2R;
    this.chi();
    this.psi();
    this.beta();
    this.mu();
    this.phig();
    this.eta();
  },

  chi() {

    const {e,e2,phi} = this;
    let t = Math.tan(Math.PI/4 + this.phi/2)*((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2);

    let jax = `\\eqalign{
      \\chi =& 2\\arctan\\{\\tan{(45^\\circ + ${deg(phi)}/2)}[(1-${fmt(e)}\\sin{${deg(phi)}})/(1+${fmt(e)} \\cr
            & \\sin{${deg(phi)}})]^{${fmt(e)}/2}\\}-90^\\circ \\cr
            =& 2\\arctan\\{ ${fmt(Math.tan(Math.PI/4+phi/2))} [${fmt((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))}]^{${fmt(e)}/2} \\} -90^\\circ \\cr
            =& 2\\arctan(${fmt(t)}) - 90^\\circ \\cr
            =& 2\\times ${deg(Math.atan(t))} - 90^\\circ \\cr
            =& ${deg(2*Math.atan(t) - Math.PI/2, true)}
    }`;

    MathJax.Hub.getAllJax("chi_lat")[0].Text(jax)
    let v = phi - (e2/2+5*e2**2/24+3*e2**3/32)*Math.sin(2*phi)
                + (5*e2**2/48+7*e2**3/80)*Math.sin(4*phi)
                - 13*e2**3/480*Math.sin(6*phi);

    jax = `\\eqalign{
        \\chi =& ${deg(phi)}\\times\\pi/180^\\circ-(${fmt(e2)} + 5 \\times ${fmt(e2)}^2/24 + 3 \\times ${fmt(e2)}^3/32)\\times \\sin(2\\times ${deg(phi)})+ \\cr
              & (5 \\times ${fmt(e2)}^2/48 + 7 \\times ${fmt(e2)}^3/80)\\times \\sin(4\\times ${deg(phi)})- \\cr
              & (13 \\times ${fmt(e2)}^3/480) \\times \\sin(6\\times ${deg(phi)}) \\cr
              =& ${fmt(phi)} - (${fmt(e2/2 + 5*e2**2/48+3*e2**3/32)})\\times ${fmt(Math.sin(2*phi))} \\cr
              & (${fmt(5*e2**2/48+7*e2**3/80)})\\times ${fmt(Math.sin(4*phi))} - (${fmt(13*e2**3/480)})\\times ${fmt(Math.sin(6*phi))} \\cr
              =& ${fmt(v,true)}\\;\\textrm{radian} = ${deg(v,true)}
    }`
    MathJax.Hub.getAllJax("chi_lat1")[0].Text(jax);
    document.getElementById("chi_in").value = fmt(v*180/Math.PI,true);
    this.set_inv_chi ();
  },
  set_inv_chi() {
    const {e,e2} = this;
    let chi = document.getElementById("chi_in").value*D2R;
    const phi_iter = (phi) => 2*Math.atan(Math.tan(Math.PI/4+chi/2)*((1+e*Math.sin(phi))/(1-e*Math.sin(phi)))**(e/2))-Math.PI/2;

    let phi1 = phi_iter(chi);
    let jax = `\\eqalign{
    \\phi =& 2\\arctan\\{\\tan (45^\\circ+ ${deg(chi)}/2) [(1+${fmt(e)}\\sin ${deg(chi)})/ \\cr
          & (1-${fmt(e)}\\sin ${deg(chi)})]^{${fmt(e)}/2} \\} - 90^\\circ \\cr
          =& 2\\arctan\\{${fmt(Math.tan(Math.PI/4+chi/2))} [${fmt((1+e*Math.sin(chi))/(1-e*Math.sin(chi)))}]^{${fmt(e/2)}} \\} - 90^\\circ \\cr
          =& ${deg(phi1+Math.PI/2)} - 90^\\circ \\cr
          =& ${deg(phi1,true)}
    }`
    MathJax.Hub.getAllJax("inv_chi1")[0].Text(jax);

    let phi2 = phi_iter(phi1);
    jax = `\\eqalign{
    \\phi =& 2\\arctan\\{ \\tan (45^\\circ+ ${deg(chi)}/2) [(1+${fmt(e)}\\sin{${deg(phi1)}}/ \\cr
            & (1-${fmt(e)}\\sin{${deg(phi1)}})]^{${fmt(e/2)}}\\}-90^\\circ \\cr
          =& 2\\arctan(${deg(phi2+Math.PI/2)})-90^\\circ = ${deg(phi2,true)}
    }`
    MathJax.Hub.getAllJax("inv_chi2")[0].Text(jax)

    let phi3 = phi_iter(phi2);
    jax = `\\phi = ${deg(phi3)}`
    MathJax.Hub.getAllJax("inv_chi3")[0].Text(jax);

    let phi = chi + (e**2/2+5*e**4/24+e**6/12)*Math.sin(2*chi) + (7*e**4/48+29*e**6/240)*Math.sin(4*chi) + (7*e**6/120)*Math.sin(6*chi)
    jax = `\\eqalign{
    \\phi =& ${deg(chi)}\\times \\pi/180^\\circ \\cr
           & +(${fmt(e)}^2/2 + 5\\times ${fmt(e)}^4/24 + ${fmt(e)}^6/12)\\sin(2\\times ${deg(chi)}) \\cr
          &+ (7\\times ${fmt(e)}^4/48 + 29\\times${fmt(e)}^6/240)\\sin(4\\times ${deg(chi)}) \\cr
          &+ (7\\times ${fmt(e)}^6/120) \\sin(6\\times${deg(chi)}) \\cr
          =& ${fmt(chi)} + (${fmt(e**2/2+5*e**4/24+e**6/12)})\\times ${fmt(Math.sin(2*chi))} \\cr
          &+ (${fmt(7*e**4/48+29*e**6/240)})\\times ${fmt(Math.sin(4*chi))} \\cr
          &+ (${fmt(7*e**6/120)})\\times ${fmt(Math.sin(6*chi))} \\cr
          =& ${fmt(phi,true)}\\;\\text{radian} = ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("inv_chi_ser")[0].Text(jax)
  },

  psi() {
    const {e,e2,phi} = this;
    let psi = Math.log(Math.tan(Math.PI/4+phi/2)*((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2));
    let jax=`\\eqalign{
    \\psi =& \\ln\\{\\tan(45^\\circ+${deg(phi)}/2)[ (1-${fmt(e)}\\sin(${deg(phi)})/(1+${fmt(e)}\\sin(${deg(phi)})]^{${fmt(e)}/2} \\} \\cr
          =& \\ln${fmt(Math.tan(Math.PI/4+phi/2)*(((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))**(e/2)))} \\cr
          =& ${fmt(psi,true)} 
    }`;
    MathJax.Hub.getAllJax("psi")[0].Text(jax);
  
    let chi = phi - (e2/2+5*e2**2/24+3*e2**3/32)*Math.sin(2*phi)
                + (5*e2**2/48+7*e2**3/80)*Math.sin(4*phi)
                - 13*e2**3/480*Math.sin(6*phi);
    let psi1 = Math.log(Math.tan(Math.PI/4+chi/2));
    jax=`\\eqalign{
    \\psi =& \\ln\\tan(45^\\circ + ${deg(chi)}/2) \\cr
          =& \\ln(${fmt(Math.tan(Math.PI/4+chi/2))}) \\cr
          =& ${fmt(psi1,true)} 
    }`;
    MathJax.Hub.getAllJax("psi1")[0].Text(jax);
    document.getElementById("psi_in").value = fmt(psi);
    this.set_inv_psi ();
  },
  
  set_inv_psi() {
    const {e,e2,phi} = this;
    let psi = +document.getElementById("psi_in").value;
    let jax =`\\eqalign{
    \\chi &= 2\\arctan\\mathrm{e}^{${fmt(psi)}} - 90^\\circ \\cr
          &= 2\\arctan(${fmt(Math.exp(psi))}) - 90^\\circ \\cr
          &= ${deg((2*Math.atan(Math.exp(psi))-Math.PI/2), true)}
    }`;
    MathJax.Hub.getAllJax("inv_psi")[0].Text(jax);
  
    let phi1 = 2*Math.atan(Math.exp(psi))-Math.PI/2;
    jax =`\\eqalign{
    \\phi &= 2\\arctan\\mathsf{e}^{${fmt(psi)}} - 90^\\circ \\cr
          &= ${deg(phi1,true)} \\text{, just as above}
    }`;
    MathJax.Hub.getAllJax("inv_psi1")[0].Text(jax);

    const phi_iter = (phi) => 2*Math.atan(Math.exp(psi)*((1+e*Math.sin(phi))/(1-e*Math.sin(phi)))**(e/2))-Math.PI/2;
    const phi2 = phi_iter(phi1);
    jax = `\\eqalign{
    \\phi =& 2\\arctan\\mathrm{e}^{${fmt(psi)}}[(1+${fmt(e)}\\sin ${deg(phi1)})/(1-${fmt(e)} \\cr
           & \\sin ${deg(phi1)})]^{${fmt(e)}/2} - 90^\\circ \\cr
          =& 2\\arctan (${fmt(Math.exp(psi))}\\times ${fmt(((1+e*Math.sin(phi1))/(1-e*Math.sin(phi1)))**(e/2))}) - 90^ \\circ \\\\
          =& ${deg(phi2,true)}
    }`;
    MathJax.Hub.getAllJax("inv_psi2")[0].Text(jax);
  
    let phi3 = phi_iter(phi2);
    jax = `\\eqalign{
    \\phi =& 2\\arctan\\mathrm{e}^{${fmt(psi)}}[(1+${fmt(e)}\\sin ${deg(phi2)})/(1-${fmt(e)} \\cr
            & \\sin ${deg(phi2)})]^{${fmt(e)}/2} - 90^\\circ \\cr
          =& ${deg(phi3,true)}
    }`;
    MathJax.Hub.getAllJax("inv_psi3")[0].Text(jax);
  
    MathJax.Hub.getAllJax("inv_psi3_1")[0].Text(deg(phi3));
    MathJax.Hub.getAllJax("inv_psi2_1")[0].Text(deg(phi2));
    let phi4 = phi_iter(phi3);
    MathJax.Hub.getAllJax("inv_psi4")[0].Text(`\\phi=${deg(phi4)}`);
  },

  beta() {
    const {e,e2,phi} = this;

    let q = (1-e2)*(Math.sin(phi)/(1-e2*Math.sin(phi)**2) - 1/(2*e)*Math.log((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))); 
    let jax = `\\eqalign{
    q =& (1-${fmt(e2)})\\{ \\sin${deg(phi)}/(1-${fmt(e2)}\\sin^2${deg(phi)})- \\cr
       & [1/(2\\times${fmt(e)})]\\ln[(1-${fmt(e)}\\sin${deg(phi)})/(1+${fmt(e)}\\sin${deg(phi)})]\\} \\cr
      =& ${fmt(1-e2)}\\;(${fmt(Math.sin(phi)/(1-e2*Math.sin(phi)**2))} - ${fmt(1/(2*e))}\\ln ${fmt((1-e*Math.sin(phi))/(1+e*Math.sin(phi)))}) \\cr
      =& ${fmt(q,true)}
    }`;
    MathJax.Hub.getAllJax("q")[0].Text(jax);
  
    let qp = (1-e2)*(1/(1-e2) - 1/(2*e)*Math.log((1-e)/(1+e))); 
    jax = `\\eqalign{
    q_p =& (1-${fmt(e2)})\\{ \\sin 90^\\circ/(1-${fmt(e2)}\\sin^2 90^\\circ)- \\cr
         & [1/(2\\times${fmt(e)})]\\ln[(1-${fmt(e)}\\sin 90^\\circ)/(1+${fmt(e)}\\sin 90^\\circ)]\\} \\cr
        =& ${fmt(qp,true)}
    }`;
    MathJax.Hub.getAllJax("qp")[0].Text(jax);
    MathJax.Hub.getAllJax("qp_value")[0].Text(`q_p = ${fmt(qp)}`);
    let beta = Math.asin(q/qp);
    jax = `\\eqalign{
    \\beta =& \\arcsin(${fmt(q)}/${fmt(qp)}) \\cr
           =& \\arcsin(${fmt(q/qp)}) \\cr
           =& ${deg(beta,true)}
    }`;
    MathJax.Hub.getAllJax("beta")[0].Text(jax);
    document.getElementById("beta_in").value = fmt(beta/D2R);
    this.set_inv_beta ();
  },
  
  set_inv_beta() {
    const {e,e2,phi} = this;
    let beta = document.getElementById("beta_in").value*D2R;
  
    let qp = (1-e2)*(1/(1-e2) - 1/(2*e)*Math.log((1-e)/(1+e)));
    MathJax.Hub.getAllJax("qp_value")[0].Text(`q_p = ${fmt(qp)}`);
  
    let q = qp*Math.sin(beta);
    let jax =  `\\eqalign{
    q &= ${fmt(qp)}\\sin${deg(beta)} \\cr
      &= ${fmt(q)}
    }`;
    MathJax.Hub.getAllJax("inv_beta0")[0].Text(jax);
  
    let phi1 = Math.asin (q/2)
    jax = `\\eqalign{
    \\phi &= \\arcsin(${fmt(q)}/2) \\cr
          &= ${deg(phi1,true)}
    }`;
    MathJax.Hub.getAllJax("inv_beta1")[0].Text(jax);
  
    let phi2 = phi1 +(1-e2*Math.sin(phi1)**2)**2/(2*Math.cos(phi1))*(q/(1-e2)-Math.sin(phi1)/(1-e2*Math.sin(phi1)**2)+Math.log((1-e*Math.sin(phi1))/(1+e*Math.sin(phi1)))/(2*e));
    jax = `\\eqalign{
    \\phi =& ${deg(phi1)} + (180^\\circ/\\pi)\\{[(1-${fmt(e2)}\\sin^2 ${deg(phi1)})^2/(2\\cos ${deg(phi1)})] \\cr
           & [${fmt(q)}/(1-${fmt(e2)}) - \\sin ${deg(phi1)}/ (1-${fmt(e2)}\\sin^2 ${deg(phi1)}) \\cr
           &+[1/(2\\times${fmt(e)})]\\ln[(1-${fmt(e)}\\sin${deg(phi1)}) \\cr
           &/(1+${fmt(e)}\\sin${deg(phi1)}))]]\\} \\cr
          =& ${deg(phi2,true)}
  
    }`;
    MathJax.Hub.getAllJax("inv_beta2")[0].Text(jax);
    MathJax.Hub.getAllJax("inv_beta3a")[0].Text(deg(phi2));
    MathJax.Hub.getAllJax("inv_beta3b")[0].Text(deg(phi1));
    
    let phi3 = phi2 +(1-e2*Math.sin(phi2)**2)**2/(2*Math.cos(phi2))*(q/(1-e2)-Math.sin(phi2)/(1-e2*Math.sin(phi2)**2)+Math.log((1-e*Math.sin(phi2))/(1+e*Math.sin(phi2)))/(2*e));
    MathJax.Hub.getAllJax("inv_beta3")[0].Text(`\\phi=${deg(phi3,true)}`);
  },
  
  mu() {
    const {e2,phi} = this;
    let m_over_a=(1-e2/4-3*e2**2/64-5*e2**3/256)*phi - (3*e2/8+3*e2**2/32+45*e2**3/1024)*Math.sin(2*phi)
    + (15*e2**2/256+45*e2**3/1024)*Math.sin(4*phi) - 35*e2**3/3072*Math.sin(6*phi);
  
    let jax=`\\eqalign{
    M =&a[(1-${fmt(e2)}/4-3\\times ${fmt(e2)}^2/64 - 5\\times ${fmt(e2)}^3/256)\\times ${deg(phi)}\\times\\pi/180^\\circ \\cr
       &-(3\\times ${fmt(e2)}/8+3\\times ${fmt(e2)}^2/32 +45\\times${fmt(e2)}^3/1024)\\sin(2\\times${deg(phi)}) \\cr
       &+(15\\times ${fmt(e2)}^2/256 +45\\times ${fmt(e2)}^3/1024)\\sin(4\\times ${deg(phi)}) \\cr
      &-(35\\times ${fmt(e2)}^3/3072)\\sin(6\\times${deg(phi)})] \\cr
      =&a[${fmt(1-e2/4-3*e2**2/64-5*e2**3/256)}\\times ${fmt(phi)} - ${fmt(3*e2/8+3*e2**2/32+45*e2**3/1024)}\\times\\sin ${deg(2*phi)}] + ${fmt(15*e2**2/256+45*e2**3/1024)}\\sin ${deg(4*phi)} \\cr
      &-${fmt(35*e2**3/3072)}\\times \\sin${deg(6*phi)} \\cr
      =& ${fmt(m_over_a)}a
    }`;
    MathJax.Hub.getAllJax("M")[0].Text(jax);
  
    let mp_over_a = (1-e2/4-3*e2**2/64-5*e2**3/256)*Math.PI/2;
    jax = `M_p = ${fmt(mp_over_a)}a, \\text{using \\( 90^\\circ \\) in place of \\( ${deg(phi)} \\) in the above example.}`
    MathJax.Hub.getAllJax("Mp")[0].Text(jax);
  
    let mu = Math.PI/2*m_over_a/mp_over_a;
    jax = `\\mu = 90^\\circ\\times ${fmt(m_over_a)}a/${fmt(mp_over_a)}a = ${deg(mu,true)}`
    MathJax.Hub.getAllJax("mu")[0].Text(jax);

    let e1= (1-Math.sqrt(1-e2))/(1+Math.sqrt(1-e2));
    jax= `\\eqalign{
    e_1 &= [1-(1-${fmt(e2)})^{1/2}]/[1+(1-${fmt(e2)})^{1/2}] \\cr
        &= ${fmt(e1,true,9)}
    }`
    MathJax.Hub.getAllJax("e1")[0].Text(jax);
  },
  
  phig () {
    const {e2,phi} = this;
    let phig = Math.atan((1-e2)*Math.tan(phi));
    let jax=`\\eqalign{
    \\phi_g &= \\arctan[(1-${fmt(e2)})\\tan ${deg(phi)}] \\cr
          &= ${deg(phig,true)}
    }`
    MathJax.Hub.getAllJax("phig")[0].Text(jax);
  },
  eta () {
    const {e2,phi} = this;
    let eta = Math.atan(Math.sqrt(1-e2)*Math.tan(phi));
    jax=`\\eqalign{
    \\eta &= \\arctan[(1-${fmt(e2)})^{1/2}\\tan ${deg(phi)}] \\cr
          &= ${deg(eta,true)}
    }`
    MathJax.Hub.getAllJax("eta")[0].Text(jax);
  }
  
}










