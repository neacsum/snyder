var sph = {
  r : 1, phi0 : 30*D2R, lam0 : -96*D2R,
  set_fwd () {
    this.r = document.getElementById("r_sph_in").value;
    this.phi0 = document.getElementById("phi0_sph_in").value*D2R;
    this.lam0 = document.getElementById("lam0_sph_in").value*D2R;

    const {r, lam0, phi0} = this
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lam_sph_in").value*D2R;

    let jax, x, y, h;
    if (phi == 0.) {
      document.getElementById("sph_phi_zero").style.display="block";
      document.getElementById("sph_phi_notzero").style.display="none";
      document.getElementById("sph_phi_notzero1").style.display="none";
      x = r*(lam-lam0);
      jax = `\\eqalign{
        x &= ${fmt(r,true,0)}\\times (${deg(lam, true)}-${deg(lam0)}) \\times \\pi/180^\\circ \\cr
          &= ${fmt(x,true)};
      }`
      MathJax.Hub.getAllJax("x_sph")[0].Text(jax);
  
      y = -r*phi0;
      jax = `\\eqalign{
        y &= -${fmt(r,true,0)}\\times ${deg(phi0)}\\times\\pi/180^\\circ \\cr
          &= ${fmt(y,true)}
      }`
      MathJax.Hub.getAllJax("y_sph")[0].Text(jax);

      h = 1+(lam-lam0)**2/2;
      jax = `\\eqalign{
        h &= 1+[(${deg(lam,true)}-${deg(lam0)})\\times\\pi/180^\\circ]^2/2 \\cr
          &= ${fmt(h)}
      }`
      MathJax.Hub.getAllJax("h_sph")[0].Text(jax);

    } else {
      document.getElementById("sph_phi_notzero").style.display="block";
      document.getElementById("sph_phi_notzero1").style.display="block";
      document.getElementById("sph_phi_zero").style.display="none";
      let E = (lam-lam0)*Math.sin(phi);
      jax = `\\eqalign{
        E &= (${deg(lam,true)} - ${deg(lam0)})\\sin ${deg(phi)} \\cr
          &= ${deg(E)}
      }`;
      MathJax.Hub.getAllJax("E_sph")[0].Text(jax);

      x = r/Math.tan(phi)*Math.sin(E);
      jax = `\\eqalign{
        x &= ${fmt(r, true, 0)}\\cot ${deg(phi)}\\sin ${deg(E)} \\cr
          &= ${fmt(x, true)}\\;\\text{units}
      }`
      MathJax.Hub.getAllJax("x_sph")[0].Text(jax);

      y = r*(phi - phi0 + (1-Math.cos(E))/Math.tan(phi));
      jax = `\\eqalign{
        y &= ${fmt(r, true, 0)}\\times[${deg(phi)} \\times \\pi/180^\\circ- ${deg(phi0)} \\times \\pi/180^\\circ + \\cot${deg(phi)}(1-\\cos${deg(E)})]\\cr
          &= ${fmt(y, true)}\\;\\text{units}
      }`
      MathJax.Hub.getAllJax("y_sph")[0].Text(jax);

      let D=Math.atan2(E-Math.sin(E),1/Math.cos(phi)**2 - Math.cos(E));
      jax = `\\eqalign{
        D &= \\arctan[(${deg(E)}\\times\\pi/180^\\circ - \\sin${deg(E)})/(\\sec^2${deg(phi)}-\\cos${deg(E)})] \\cr
          &= ${deg(D)}
      }`
      MathJax.Hub.getAllJax("D_sph")[0].Text(jax);

      let h=(1-Math.cos(phi)**2*Math.cos(E))/(Math.sin(phi)**2*Math.cos(D));
      jax = `\\eqalign{
        h &= (1-\\cos^2${deg(phi)}\\cos${deg(E)})/(\\sin^2${deg(phi)}\\cos${deg(D)}) \\cr
          &= ${fmt(h)}
      }`;
      MathJax.Hub.getAllJax("h_sph")[0].Text(jax);
    }
    document.getElementById("x_sph_in").value = fmt(x,true);
    document.getElementById("y_sph_in").value = fmt(y,true);
    this.set_inv ();
  },

  set_inv() {
    const {r, phi0, lam0} = this;
    const x = document.getElementById("x_sph_in").value;
    const y = document.getElementById("y_sph_in").value;

    let jax, phi, lam;

    if (y == -r*phi0) {

    } else {
      const A = phi0+y/r;
      jax = `\\eqalign{
        A &= ${deg(phi0,true)}\\times \\pi/180^\\circ+${fmt(y,true, 0)}/${fmt(r,true,0)} \\cr
          &= ${fmt(A)}
      }`
      MathJax.Hub.getAllJax("A_sph")[0].Text(jax);
      jax = `\\phi_n = A = ${fmt(A)}`;
      MathJax.Hub.getAllJax("phin_sph")[0].Text(jax);
      MathJax.Hub.getAllJax("phin_sph_1")[0].Text(fmt(A));

      const B = x**2/r**2 + A**2;
      jax = `\\eqalign{
        B &= ${fmt(x,true,0)}^2/${fmt(r,true,0)}^2 + ${fmt(A)}^2 \\cr
          &= ${fmt(B, true)}
      }`
      MathJax.Hub.getAllJax("B_sph")[0].Text(jax);

      const iter  = (phi) => phi - (A*(phi*Math.tan(phi)+1) - phi - 1/2*(phi**2+B)*Math.tan(phi))/((phi-A)/Math.tan(phi)-1);
      let phin = A;
      let phin1 = iter(phin);
      jax = `\\eqalign{
        \\phi_{n+1} =& ${fmt(phin)} - [{\\bf ${fmt(A)}}\\times (${fmt(phin)}\\tan ${fmt(phin)}+1) \\cr
                    & - ${fmt(phin)} -½(${fmt(phin)}^2 + ${fmt(B)})\\tan ${fmt(phin)}]/ \\cr
                    & [(${fmt(phin)} - {\\bf ${fmt(A)}})/\\tan ${fmt(phin)} - 1] \\cr
                   =& ${fmt(phin1)}  
      }`
      MathJax.Hub.getAllJax("phin1_sph")[0].Text(jax);
      MathJax.Hub.getAllJax("phin1_sph_1")[0].Text(fmt(phin1));

      let phin2 = iter(phin1);
      MathJax.Hub.getAllJax("phin2_sph")[0].Text(fmt(phin2));

      let phin3 = iter(phin2);
      MathJax.Hub.getAllJax("phin3_sph")[0].Text(fmt(phin3));

      let phi = iter(phin3);
      jax = `\\eqalign{
        \\phi = ${fmt(phi)} \\times 180^\\circ/\\pi = ${deg(phi, true)}
      }`
      MathJax.Hub.getAllJax("phi_inv_sph")[0].Text(jax);

      let lam = Math.asin(x*Math.tan(phi)/r)/Math.sin(phi) + lam0;
      jax = `\\eqalign{
        \\lambda &= [\\arcsin(${fmt(x)}\\tan ${deg(phi)}/${fmt(r,true,0)})]/\\sin ${deg(phi)} + ${deg(lam0)} \\cr
                 &= ${deg(lam, true)}
      }`
      MathJax.Hub.getAllJax("lam_inv_sph")[0].Text(jax);
    }
  }
}

var ell = {
  a: 6378206.4,
  e2:  0.00676866,
  e: 0.0822719,

  M (phi) {
    return this.a*((1-this.e2/4-3*this.e2**2/64-5*this.e2**3/256)*phi 
    - (3*this.e2/8+3*this.e2**2/32+45*this.e2**3/1024)*Math.sin(2*phi)
    + (15*this.e2**2/256+45*this.e2**3/1024)*Math.sin(4*phi)
    - 35*this.e2**3/3072*Math.sin(6*phi))
  },

  C (phi) { 
    return Math.sqrt(1-this.e2*Math.sin(phi)**2)*Math.tan(phi) 
  },

  Mprime (phi) {
    return 1 - this.e2/4 -3*this.e2**2/64 -5*this.e2**3/256 
    - 2*(3*this.e2/8 + 3*this.e2**2/32 +45*this.e2**3/1024)*Math.cos(2*phi)
    + 4*(15*this.e2**2/256 +45*this.e2**3/1024)*Math.cos(4*phi)
    -6*35*this.e2**3/3072*Math.cos(6*phi)
  },

  phi_iter (phi, A, B) {
    const Ma = this.M(phi)/this.a;
    const c = this.C(phi);
    return phi -[A*(this.C(phi)*Ma+1) - Ma - (Ma**2+B)*c/2]/[this.e2*Math.sin(2*phi)
      *(Ma**2+B-2*A*Ma)/(4*c) + (A-Ma)*(c*this.Mprime(phi) - 2/Math.sin(2*phi)) - this.Mprime(phi)]
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
    document.getElementById("ellip_a").innerHTML = this.a + " m";
    document.getElementById("ellip_e2").innerHTML = this.e2.toFixed(7);
    document.getElementById("ellip_e").innerHTML = this.e.toFixed(7);

    this.set_fwd();
  },

  set_fwd () {
    const {a, e, e2} = this;
    let jax;
    const phi0 = document.getElementById("phi0_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam = document.getElementById("lam_ell_in").value*D2R;

    
    const M= this.M(phi);
    jax=`\\eqalign{
      M =&${fmt(a,false,0)}[(1-${fmt(e2)}/4-3\\times ${fmt(e2)}^2/64 - 5\\times ${fmt(e2)}^3/256)\\times ${deg(phi)}\\times\\pi/180^\\circ \\cr
       &-(3\\times ${fmt(e2)}/8+3\\times ${fmt(e2)}^2/32 +45\\times${fmt(e2)}^3/1024)\\sin(2\\times${deg(phi)}) \\cr
       &+(15\\times ${fmt(e2)}^2/256 +45\\times ${fmt(e2)}^3/1024)\\sin(4\\times ${deg(phi)}) \\cr
       &-(35\\times ${fmt(e2)}^3/3072)\\sin(6\\times${deg(phi)})] \\cr
      =& ${fmt(M ,false,2)}\\;\\text{m}
    }`;
    MathJax.Hub.getAllJax("M")[0].Text(jax);

    MathJax.Hub.getAllJax("phi0_ell")[0].Text(deg(phi0,true));
    MathJax.Hub.getAllJax("phi_ell")[0].Text(deg(phi,true));

    const M0 = M_func(phi0);
    MathJax.Hub.getAllJax("M0")[0].Text(`M_0 = ${fmt(M0,false,2)}\\;\\text{m}`);

    const N = a/Math.sqrt(1-e2*Math.sin(phi)**2);
    jax = `\\eqalign {
      N &= ${fmt(a,true,0)}/(1-${fmt(e2)}\\sin^2 ${deg(phi,true)})^{1/2} \\cr
        &= ${fmt(N,false,2)}\\;\\text{m}
     }`
     MathJax.Hub.getAllJax("N")[0].Text(jax);
  
     const E = (lam-lam0)*Math.sin(phi);
     jax = `\\eqalign{
      E &= (${deg(lam,true)} - ${deg(lam0)})\\sin${deg(phi)} \\cr
        &= ${deg(E)}
     }`
     MathJax.Hub.getAllJax("E")[0].Text(jax);

     const x = N/Math.tan(phi)*Math.sin(E);
     jax =`\\eqalign{
      x &= ${fmt(N,false,2)}\\cot ${deg(phi)}\\sin ${deg(E)} \\cr
        &= ${fmt(x, true, 2)}\\;\\text{m}
     }`
     MathJax.Hub.getAllJax("x_ell")[0].Text(jax);
     document.getElementById("x_ell_in").value = fmt(x,true,2);

     const y = M - M0 + N/Math.tan(phi)*(1-Math.cos(E));
     jax = `\\eqalign{
      y =& ${fmt(M,false,2)} - ${fmt(M0, false, 2)} + ${fmt(N, false, 2)}\\cot ${deg(phi,true)} \\cr
         & (1-\\cos ${deg(E)}) \\cr
        =& ${fmt(y,true,2)}\\;\\text{m}
     }`
     MathJax.Hub.getAllJax("y_ell")[0].Text(jax);
     document.getElementById("y_ell_in").value = fmt(y,true,2);

     const D = Math.atan((E - Math.sin(E))/(1/Math.cos(phi)**2-Math.cos(E) - e2*Math.sin(phi)**2/(1-e2*Math.sin(phi)**2)));
     jax = `\\eqalign{
      D =& \\arctan\\{(${deg(E)}\\times\\pi/180^\\circ-\\sin${deg(E)})/[\\sec^2${deg(phi)} \\cr
         & - \\cos${deg(E)} - ${fmt(e2)}\\sin^2${deg(phi)}/(1-${fmt(e2)}\\sin^2${deg(phi)})] \\} \\cr
        =& ${deg(D)} 
     }`
     MathJax.Hub.getAllJax("D")[0].Text(jax);

     const h = (1-e2 + 2*(1-e2*Math.sin(phi)**2)*Math.sin(E/2)**2/Math.tan(phi)**2)/((1-e2)*Math.cos(D));
     jax = `\\eqalign{
      h =& [1-${fmt(e2)} - 2(1-${fmt(e2)}\\sin^2 ${deg(phi)})\\sin^2 ½(${deg(E)})/ \\cr
         & \\tan^2 ${deg(phi)}]/(1-${fmt(e2)})\\cos ${deg(D)} \\cr
        =& ${fmt(h)}
     }`
     MathJax.Hub.getAllJax("h")[0].Text(jax);
  },
  
  set_inv () {
    const {a, e, e2} = this;
    let jax;
    const phi0 = document.getElementById("phi0_ell_in").value*D2R;
    const lam0 = document.getElementById("lam0_ell_in").value*D2R;
    const x = +document.getElementById("x_ell_in").value;
    const y = +document.getElementById("y_ell_in").value;

    const M0 = this.M(phi0);
    MathJax.Hub.getAllJax("M0_inv")[0].Text(`M_0 = ${fmt(M0,false,2)}\\;\\text{m}`);

    const A = (M0+y)/a;
    jax = `\\eqalign{
      A &= (${fmt(M0, true, 2)}+${fmt(y,true,0)})/${fmt(a,true,0)} \\cr
        &= ${fmt(A)}
    }`
    MathJax.Hub.getAllJax("A_ell")[0].Text(jax);

    const B = x**2/a**2+A**2;
    jax = `\\eqalign{
      B &= ${fmt(x,false,0)}^2/${fmt(a,true,0)}^2 + ${fmt(A)}^2 \\cr
        &= ${fmt(B)}
    }`
    MathJax.Hub.getAllJax("B_ell")[0].Text(jax);

    let phi_n = A;
    MathJax.Hub.getAllJax("phi_n_ell")[0].Text(`\\phi_n = ${fmt(phi_n, true)}`);
    let C = this.C(phi_n);

    jax = `\\eqalign{
      C &= (1-${fmt(e2)}\\sin^2${fmt(phi_n)})^{1/2}\\tan${fmt(phi_n)} \\cr
        &= ${fmt(C)}
    }`
    MathJax.Hub.getAllJax("C")[0].Text(jax);

    let M_n = this.M(phi_n);
    MathJax.Hub.getAllJax("Mn")[0].Text(`M_n = ${fmt(M_n, true, 2)}\\;\\text{m}`);

    let Mn_prime = this.Mprime(phi_n);
    jax = `\\eqalign{
      M'_n =& 1-${fmt(e2)}/4 - 3\\times${fmt(e2)}^2/64 -5\\times${fmt(e2)}^3/256 \\cr
            & - 2\\times (3\\times${fmt(e2)}/8 + 3\\times ${fmt(e2)}^2/32 \\cr
            & + 45 \\times ${fmt(e2)}^3/1024)\\cos(2\\times${fmt(phi_n)}) \\cr
            & + 4\\times(15\\times${fmt(e2)}^2/256 + 45\\times${fmt(e2)}^3/1024)\\cos(4\\times${fmt(phi_n)}) \\cr
            & - 6\\times(35\\times${fmt(e2)}^3/3072)\\cos(6\\times${fmt(phi_n)}) \\cr
           =& ${fmt(Mn_prime)}
    }`
    MathJax.Hub.getAllJax("Mn_prime")[0].Text(jax);

    let M_a = M_n/a;
    jax = `M_a = ${fmt(M_n,true,2)}/${fmt(a,true,0)} = ${fmt(M_a)}`
    MathJax.Hub.getAllJax("M_a")[0].Text(jax);

    let phi_np1 = this.phi_iter(phi_n, A, B);
    jax = `\\eqalign{
      \\phi_{n+1} =& ${fmt(phi_n)} - [{\\bf ${fmt(A)}}\\times(${fmt(C)}\\times${fmt(M_a)}+1) \\cr
                   & -${fmt(M_a)} - ½(${fmt(M_a)}^2 + ${fmt(B)})\\times${fmt(C)}]/ \\cr
                   & [${fmt(e2)}\\sin(2\\times${fmt(phi_n)})\\times(${fmt(M_a)}^2 + ${fmt(B)} \\cr
                   & + 2\\times {\\bf ${fmt(A)}} \\times ${fmt(M_a)}) / (4\\times ${fmt(C)}) \\cr
                   & + ({\\bf ${fmt(A)}} - ${fmt(M_a)})\\times(${fmt(C)} \\times ${fmt(Mn_prime)} \\cr
                   & -2/\\sin(2\\times ${fmt(phi_n)})) - ${fmt(Mn_prime)}] \\cr
                  =& ${fmt(phi_np1)}\\;\\text{radians}                  
    }`
    MathJax.Hub.getAllJax("phi_np1")[0].Text(jax);
    MathJax.Hub.getAllJax("phi_np1_1")[0].Text(fmt(phi_np1, true));
    MathJax.Hub.getAllJax("phi_n_1")[0].Text(fmt(phi_n, true));
    const phi_np2 = this.phi_iter(phi_np1, A, B);
    MathJax.Hub.getAllJax("phi_np2")[0].Text(fmt(phi_np2, true));
    const phi_np3 = this.phi_iter(phi_np2, A, B);
    MathJax.Hub.getAllJax("phi_np3")[0].Text(fmt(phi_np3, true));
    const phi = phi_np3;
    jax =`\\eqalign{
      \\phi = ${fmt(phi, true)} \\times 180^\\circ/\\pi = ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("phi_ell_inv")[0].Text(jax);
    MathJax.Hub.getAllJax("C3")[0].Text(fmt(this.C(phi)));

    const lam = Math.asin(x*this.C(phi)/a)/Math.sin(phi)+lam0;
    jax = `\\eqalign{
      \\lambda &= [\\arcsin(${fmt(x,false,0)}\\times${fmt(this.C(phi))}/${fmt(a,true,0)})]/\\sin${deg(phi)} + ${deg(lam0)} \\cr
               &= ${deg(lam,true)}
    }`
    MathJax.Hub.getAllJax("lam_ell_inv")[0].Text(jax);
  }

}