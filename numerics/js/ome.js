
var sph = {
  r: 1.0, 
  k0:1.0, 
  phi1: Math.PI/4, lam1: 0,
  phi2: 0, lam2: -Math.PI/2,
  phi_p:Math.PI/4, lam_p: Math.PI,

  set_fwd (){
    this.r = document.getElementById("r_in").value;
    this.k0 = document.getElementById("k0_sph_in").value;
    this.phi1 = document.getElementById("phi1_sph_in").value*D2R;
    this.lam1 = document.getElementById("lam1_sph_in").value*D2R;
    this.phi2 = document.getElementById("phi2_sph_in").value*D2R;
    this.lam2 = document.getElementById("lam2_sph_in").value*D2R;

    const {r, k0, phi1, phi2, lam1, lam2} = this;
    const phi = document.getElementById("phi_sph_in").value*D2R;
    const lam = document.getElementById("lambda_sph_in").value*D2R;

    const nom=Math.cos(phi1)*Math.sin(phi2)*Math.cos(lam1) - Math.sin(phi1)*Math.cos(phi2)*Math.cos(lam2);
    const den=Math.sin(phi1)*Math.cos(phi2)*Math.sin(lam2) - Math.cos(phi1)*Math.sin(phi2)*Math.sin(lam1);
    const lam_p =lon_adj(Math.atan2(nom, den));
    this.lam_p = lam_p; //for inverse equations
    let jax = `\\begin{align}
      \\lambda_p =& \\arctan[(\\cos${deg(phi1)}\\sin${deg(phi2)}\\cos${deg(lam1)} - \\sin${deg(phi1)}\\cos${deg(phi2)}\\cos${deg(lam2)})/ \\cr
                  &(\\sin${deg(phi1)}\\cos${deg(phi2)}\\sin${deg(lam2)} - \\cos${deg(phi1)}\\sin${deg(phi2)}\\sin${deg(lam1)}] \\cr
                 =&${deg(lam_p,true)}
    \\end{align}`        
    MathJax.Hub.getAllJax("lambda_p")[0].Text(jax);

    const phi_p = Math.atan(-Math.cos(lam_p-lam1)/Math.tan(phi1));
    this.phi_p = phi_p; //for inverse formulas
    jax = `\\eqalign{
      \\phi_p &= \\arctan[-\\cos(${deg(lam_p,true)}-${deg(lam1)})/\\tan${deg(phi1)}] \\cr
              &= ${deg(phi_p, true)}
    }`
    MathJax.Hub.getAllJax("phi_p")[0].Text(jax);
    MathJax.Hub.getAllJax("phi_p2")[0].Text(`\\phi_p=${deg(phi_p, true)}`);

    const lam_p1 = lon_adj (lam_p+Math.PI);
    jax = `\\phi=${deg(-phi_p,true)}, \\lambda=${deg(lam_p1,true)}`;
    MathJax.Hub.getAllJax("pole2")[0].Text(jax);

    const lam0=  lon_adj(lam_p+Math.PI/2);
    jax = `\\lambda_0 = ${deg(lam_p,true)} + 90^\\circ = ${deg(lam0, true)}`
    MathJax.Hub.getAllJax("lam0")[0].Text(jax);
    MathJax.Hub.getAllJax("lam0_2")[0].Text(`\\lambda_0 =${deg(lam0, true)}`);

    const A=Math.sin(phi_p)*Math.sin(phi)-Math.cos(phi_p)*Math.cos(phi)*Math.sin(lam-lam0);
    jax =`\\eqalign{
      A &= \\sin${deg(phi_p)}\\sin${deg(phi)}-\\cos${deg(phi_p)}\\cos${deg(phi)}\\sin(${deg(lam,true)}-${deg(lam0)}) \\cr
        &= ${fmt(Math.sin(phi_p))}\\times${fmt(Math.sin(phi))}-${fmt(Math.cos(phi_p))}\\times${fmt(Math.cos(phi))}\\times${fmt(Math.sin(lam-lam0))} \\cr
        &= ${fmt(A, true)}
    }`;
    MathJax.Hub.getAllJax("A_sph")[0].Text(jax);

    const x=r*k0*Math.atan2((Math.tan(phi)*Math.cos(phi_p)+Math.sin(phi_p)*Math.sin(lam-lam0)),Math.cos(lam-lam0));
    jax = `\\eqalign{
      x &=${r}\\times${k0}\\arctan\\{[\\tan${deg(phi)}\\cos${deg(phi_p)}+\\sin${deg(phi_p)}\\sin(${deg(lam,true)}-${deg(lam0)})]/\\cos(${deg(lam,true)}-${deg(lam0)})\\} \\cr
        &=${fmt(x,true)}\\text{  (computation uses the ATAN2 function)}
    }`;
    MathJax.Hub.getAllJax("x_sph")[0].Text(jax);
    document.getElementById("x_sph_in").value = fmt(x,true);

    const y=r/2*k0*Math.log((1+A)/(1-A));
    
    jax = `\\eqalign {
      y &= (1/2)\\times${r}\\times${k0}\\ln[(1+${fmt(A)})/(1-${fmt(A)})] \\cr
        &= ${fmt(y,true)}
    }`;
    MathJax.Hub.getAllJax("y_sph")[0].Text(jax);
    document.getElementById("y_sph_in").value = fmt(y,true);

    const k=k0/Math.sqrt(1-A**2);
    jax = `k=${fmt(k0)}/[1-${fmt(A)}^2]^{1/2} = ${fmt(k)}`
    MathJax.Hub.getAllJax("k_sph")[0].Text(jax);
    this.set_inv ();
  },
  set_par1 () {
    const beta = document.getElementById("beta_in").value*D2R;
    const phic = document.getElementById("phi_c_in").value*D2R;
    const lamc = document.getElementById("lambda_c_in").value*D2R;

    const phi_p = Math.asin(Math.cos(phic)*Math.sin(beta));
    this.phi_p = phi_p; //for inverse formulas
    let jax=`\\eqalign{
      \\phi_p &= \\arcsin(\\cos${deg(phic)}\\sin${deg(beta)}) \\cr
              &= ${deg(phi_p,true)}
    }`;
    MathJax.Hub.getAllJax("phi_p1")[0].Text(jax);

    const lam_p = lon_adj(Math.atan2(-Math.cos(beta), -Math.sin(phic)*Math.sin(beta))+lamc);
    this.lam_p = lam_p; //for inverse formulas
    jax =`\\eqalign{
      \\lambda_p &= \\arctan[\\cos${deg(beta)}/(-\\sin${deg(phic)}\\sin${deg(beta)})] + ${deg(lamc)} \\cr
                 &= ${deg(lam_p, true)}\\text{  (computation uses the ATAN2 function)}
    }`
    MathJax.Hub.getAllJax("lambda_p1")[0].Text(jax);
    this.set_fwd ();
  },

  set_inv () {
    const {r, k0, phi_p, lam_p} = this;
    const lam0=  lon_adj(lam_p+Math.PI/2);

    const x = +document.getElementById("x_sph_in").value;
    const y = +document.getElementById("y_sph_in").value;

    let jax=`\\eqalign{
      y/Rk_0 &= ${fmt(y,true)}/(${r}\\times${k0}) = ${fmt(y/(r*k0), true)} \\cr
      e^{${fmt(y/(r*k0), true)}} &= ${fmt(Math.exp(y/(r*k0)), true)} \\cr
      \\sinh(y/Rk_0) &= (${fmt(Math.exp(y/(r*k0)), true)}-1/${fmt(Math.exp(y/(r*k0)), true)})/2 \\cr
                     &= ${fmt(Math.sinh(y/(r*k0)), true)} \\cr
      \\cosh(y/Rk_0) &= (${fmt(Math.exp(y/(r*k0)), true)}+1/${fmt(Math.exp(y/(r*k0)), true)})/2 \\cr
                     &= ${fmt(Math.cosh(y/(r*k0)), true)} \\cr
      \\tanh(y/Rk_0) &= (${fmt(Math.exp(y/(r*k0)), true)}-1/${fmt(Math.exp(y/(r*k0)), true)})/(${fmt(Math.exp(y/(r*k0)), true)}+1/${fmt(Math.exp(y/(r*k0)), true)}) \\cr
                     &= ${fmt(Math.tanh(y/(r*k0)), true)}
    }`
    MathJax.Hub.getAllJax("hyp_func")[0].Text(jax);

    const phi=Math.asin(Math.sin(phi_p)*Math.tanh(y/(r*k0))+Math.cos(phi_p)*Math.sin(x/(r*k0))/Math.cosh(y/(r*k0)));
    jax = `\\eqalign {
      \\phi =& \\arcsin\\{\\sin${deg(phi_p)}\\times${fmt(Math.tanh(y/(r*k0)))}+\\cos${deg(phi_p)}\\sin[${fmt(x,true,0)}/(${fmt(r,false,0)}\\times${fmt(k0,false,0)})]/${fmt(Math.cosh(y/(r*k0)))} \\} \\cr
            =& \\arcsin (${fmt(Math.sin(phi_p)*Math.tanh(y/(r*k0))+Math.cos(phi_p)*Math.sin(x/(r*k0))/Math.cosh(y/(r*k0)), true)}) = ${deg(phi, true)}
    }`
    MathJax.Hub.getAllJax("phi_sph")[0].Text(jax);

    const lam=lam0+Math.atan2(Math.sin(phi_p)*Math.sin(x/(r*k0))-Math.cos(phi_p)*Math.sinh(y/(r*k0)), Math.cos(x/(r*k0)));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0)}+\\arctan\\{[\\sin${deg(phi_p)}\\sin[${fmt(x)}/(${fmt(r,false,0)}\\times${fmt(k0,false,0)})] \\cr
                & -\\cos${deg(phi_p)}\\times${fmt(Math.sinh(y/(r*k0)))}]/\\cos[${fmt(x)}/(${fmt(r,false,0)}\\times${fmt(k0,false,0)})]\\} \\cr
               =& ${deg(lam0)}+${deg(Math.atan2(Math.sin(phi_p)*Math.sin(x/(r*k0))-Math.cos(phi_p)*Math.sinh(y/(r*k0)), Math.cos(x/(r*k0))))} \\cr
               =& ${deg(lam, true)} = ${deg(lon_adj(lam), true)}
    }`
    MathJax.Hub.getAllJax("lam_sph")[0].Text(jax);
  }
}

var ell = {
  a: 6378206.4,
  e2: 0.00676866,
  e: 0.0822719,
  phi0: 40*D2R,
  phi1: 47.5*D2R,
  lam1: -122.3*D2R,
  phi2: 25.7*D2R,
  lam2: -80.2*D2R,
  x0: 4000000,
  y0: 500000,
  k0: 0.9996,

  tfun(x) {
    return Math.tan(Math.PI/4-x/2)/((1-this.e*Math.sin(x))/(1+this.e*Math.sin(x)))**(this.e/2)
  },

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
    MathJax.Hub.getAllJax("ellip_a")[0].Text(`a=${this.a}`);
    MathJax.Hub.getAllJax("ellip_e2")[0].Text(`e^2=${this.e2.toFixed(7)}`);
    MathJax.Hub.getAllJax("ellip_e")[0].Text(`e=${this.e.toFixed(7)}`);

    this.set_fwd ();
  },

  set_fwd () {
    this.phi0 = document.getElementById("phi0_ell_in").value*D2R;
    this.phi1 = document.getElementById("phi1_ell_in").value*D2R;
    this.lam1 = document.getElementById("lam1_ell_in").value*D2R;
    this.phi2 = document.getElementById("phi2_ell_in").value*D2R;
    this.lam2 = document.getElementById("lam2_ell_in").value*D2R;
    this.k0 = +document.getElementById("k0_ell_in").value;
    this.x0 = +document.getElementById("x0_ell_in").value;
    this.y0 = +document.getElementById("y0_ell_in").value;

    const {a, e, e2, k0, phi0, phi1, phi2, lam1, lam2} = this;
    const phi = document.getElementById("phi_ell_in").value*D2R;
    const lam = document.getElementById("lambda_ell_in").value*D2R;

    const B=Math.sqrt(1+e2*Math.cos(phi0)**4/(1-e2))
    let jax=`\\eqalign{
      B &=[1+${fmt(e2)}\\cos^4${deg(phi0)}/(1-${fmt(e2)})]^{1/2} \\cr
        &= ${fmt(B)}
    }`;
    MathJax.Hub.getAllJax("B_ell")[0].Text(jax);
   
    const A=a*k0*B*Math.sqrt(1-e2)/(1-e2*Math.sin(phi0)**2);
    jax = `\\eqalign{
      A =& ${a}\\times${fmt(B)}\\times${k0}\\times(1-${fmt(e2)})^{1/2} \\cr
         & (1-${fmt(e2)}\\sin^2${deg(phi0)}) \\cr
        =& ${fmt(A, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("A_ell")[0].Text(jax);
    MathJax.Hub.getAllJax("A_inv")[0].Text(`A=${fmt(A,true,2)}\\;\\text{m}`);

    const t0= this.tfun(phi0);
    jax=`\\eqalign{
      t_0 =&\\tan(45^\\circ-${deg(phi0)}/2)[(1-${fmt(e)}\\sin${deg(phi0)})/(1+${fmt(e)}\\sin${deg(phi0)})]^{${fmt(e)}/2} \\cr
          =&${fmt(t0)}
    }`
    MathJax.Hub.getAllJax("t0_ell")[0].Text(jax);

    const t1= this.tfun(phi1);
    jax=`\\eqalign{
      t_1 =&\\tan(45^\\circ-${deg(phi1)}/2)[(1-${fmt(e)}\\sin${deg(phi1)})/(1+${fmt(e)}\\sin${deg(phi1)})]^{${fmt(e)}/2} \\cr
          =&${fmt(t1)}
    }`
    MathJax.Hub.getAllJax("t1_ell")[0].Text(jax);

    const t2= this.tfun(phi2);
    jax=`\\eqalign{
      t_2 =&\\tan(45^\\circ-${deg(phi2)}/2)[(1-${fmt(e)}\\sin${deg(phi2)})/(1+${fmt(e)}\\sin${deg(phi2)})]^{${fmt(e)}/2} \\cr
          =&${fmt(t2)}
    }`
    MathJax.Hub.getAllJax("t2_ell")[0].Text(jax);

    let D=B*Math.sqrt(1-e2)/(Math.cos(phi0)*Math.sqrt(1-e2*Math.sin(phi0)**2));
    if (D < 1) {
      D=1;
    }
    jax =`\\eqalign{
      D =&${fmt(B)}\\times(1-${fmt(e2)})^{1/2}/[\\cos${deg(phi0)}\\times \\cr
         &(1-${fmt(e2)}\\sin^2${deg(phi0)})^{1/2}] \\cr
        =& ${fmt(D)}
    }`;
    MathJax.Hub.getAllJax("D_ell")[0].Text(jax);

    let E;
    if (phi0 < 0){
      E = (D-Math.sqrt(D**2-1))*t0**B;
      jax =`\\eqalign {
        E &=[${fmt(D)} - (${fmt(D)}^2-1)]\\times${fmt(t0)}^{${fmt(B)}} \\cr
          &=${fmt(E)} \\cr
          $\\text {using the "-" sign since \\(\\phi_0\\) is south or negative.}
      }`
    }
    else {
      E = (D+Math.sqrt(D**2-1))*t0**B;
      jax =`\\eqalign {
        E &=[${fmt(D)} + (${fmt(D)}^2-1)]\\times${fmt(t0)}^{${fmt(B)}} \\cr
          &=${fmt(E)} \\cr
          &\\text {using the "+" sign since \\(\\phi_0\\) is north or positive.}
      }`
    }
    MathJax.Hub.getAllJax("E_ell")[0].Text(jax);
    
    const H=t1**B;
    jax=`H = ${fmt(t1)}^{${fmt(B)}} = ${fmt(H)}`;
    MathJax.Hub.getAllJax("H_ell")[0].Text(jax);

    const L=t2**B;
    jax=`L = ${fmt(t2)}^{${fmt(B)}} = ${fmt(L)}`;
    MathJax.Hub.getAllJax("L_ell")[0].Text(jax);

    const F = E/H;
    jax = `F= ${fmt(E)}/${fmt(H)} = ${fmt(F)}`;
    MathJax.Hub.getAllJax("F_ell")[0].Text(jax);

    const G = (F-1/F)/2;
    jax = `G= (${fmt(F)}- 1/${fmt(F)})/2`
    MathJax.Hub.getAllJax("G_ell")[0].Text(jax);

    const J=(E**2-L*H)/(E**2+L*H)
    jax =`\\eqalign {
      J &= (${fmt(E)}^2-${fmt(L)}\\times${fmt(H)})/(${fmt(E)}^2+${fmt(L)}\\times${fmt(H)}) \\cr
        &= ${fmt(J)}
    }`;
    MathJax.Hub.getAllJax("J_ell")[0].Text(jax);

    const P=(L-H)/(L+H)
    jax=`P=(${fmt(L)}-${fmt(H)})/(${fmt(L)}+${fmt(H)}) = ${fmt(P)}`
    MathJax.Hub.getAllJax("P_ell")[0].Text(jax);

    const lam0=(lam1+lam2)/2-Math.atan(J*Math.tan(B*(lam1-lam2)/2)/P)/B;
    jax=`\\eqalign {
      \\lambda_0 =& [${deg(lam1)}+${deg(lam2)}]/2-\\arctan\\{${fmt(J)}\\tan[${fmt(B)} \\cr
                 & \\times(${deg(lam1)}-${deg(lam2)})/2]/${fmt(P)}\\}/${fmt(B)} \\cr
                =& ${deg((lam1+lam2)/2, true)} - \\arctan ${fmt(J*Math.tan(B*(lam1-lam2)/2)/P)}/${fmt(B)} \\cr
                =& ${deg(lam0, true)}
    }`;
    MathJax.Hub.getAllJax("lam0_ell")[0].Text(jax);

    const gam0 = Math.atan(Math.sin(B*(lam1-lam0))/G);
    jax= `\\eqalign{
      \\gamma_0 &= \\arctan \\{\\sin[${fmt(B)}\\times(${deg(lam1)}-${deg(lam0)})]/${fmt(G)}\\} \\cr
                &= ${deg(gam0, true)}
    }`;
    MathJax.Hub.getAllJax("gam0_ell")[0].Text(jax);

    const alpha_c = Math.asin(D*Math.sin(gam0));
    jax = `\\eqalign{
      \\alpha_c &= \\arcsin[${fmt(D)}\\sin${deg(gam0)}] \\cr
                &= ${deg(alpha_c, true)}
    }`
    MathJax.Hub.getAllJax("alphac_ell")[0].Text(jax);

    const t = this.tfun(phi);
    jax=`\\eqalign{
      t =&\\tan(45^\\circ-${deg(phi)}/2)[(1-${fmt(e)}\\sin${deg(phi)})/(1+${fmt(e)}\\sin${deg(phi)})]^{${fmt(e)}/2} \\cr
          =&${fmt(t)}
    }`
    MathJax.Hub.getAllJax("t_ell")[0].Text(jax);
    
    const Q = E/t**B;
    jax =`Q=${fmt(E)}/${fmt(t)}^{${fmt(B)}} = ${fmt(Q)}`;
    MathJax.Hub.getAllJax("Q_ell")[0].Text(jax);

    const S = (Q-1/Q)/2;
    jax = `S=(${fmt(Q)}-1/${fmt(Q)})/2 = ${fmt(S)}`;
    MathJax.Hub.getAllJax("S_ell")[0].Text(jax);

    const T = (Q+1/Q)/2;
    jax = `T=(${fmt(Q)}+1/${fmt(Q)})/2 = ${fmt(T)}`;
    MathJax.Hub.getAllJax("T_ell")[0].Text(jax);

    const V = Math.sin(B*(lam-lam0));
    jax=`V = \\sin[${fmt(B)}\\times(${deg(lam,true)} - ${deg(lam0)})] = ${fmt(V, true)}`
    MathJax.Hub.getAllJax("V_ell")[0].Text(jax);

    const U = (-V*Math.cos(gam0)+S*Math.sin(gam0))/T
    jax = `\\eqalign{
      U =& [${fmt(-V)}\\cos${deg(gam0)} + ${fmt(S)}\\sin${deg(gam0)}]/${fmt(T)} \\cr
        =& ${fmt(U, true)}
    }`
    MathJax.Hub.getAllJax("U_ell")[0].Text(jax);

    const v = A*Math.log((1-U)/(1+U))/(2*B)
    jax = `\\eqalign{
      v &= ${fmt(A, false, 2)}\\ln[(1+${fmt(U)})/(1-${fmt(U)})]/(2\\times${fmt(B)}) \\cr
        &= ${fmt(v, true, 2)} \\;\\text{m}
    }`
    MathJax.Hub.getAllJax("v_ell")[0].Text(jax);

    const u=A*Math.atan((S*Math.cos(gam0)+V*Math.sin(gam0))/Math.cos(B*(lam-lam0)))/B;
    jax=`\\eqalign{
      u =& ${fmt(A, false, 2)}\\arctan\\{ [${fmt(S)}\\cos ${deg(gam0)} \\cr
         & + ${fmt(V)}\\sin${deg(gam0)}]/\\cos[${fmt(B)}\\times (${deg(lam)}-${deg(lam0)})]\\} \\cr
         & / ${fmt(B)} \\cr
        =& ${fmt(u,true, 2)} \\;\\text{m}
    }`
    MathJax.Hub.getAllJax("u_ell")[0].Text(jax);

    const k=A*Math.cos(B*u/A)*Math.sqrt(1-e2*Math.sin(phi)**2)/(a*Math.cos(phi)*Math.cos(B*(lam-lam0)));
    jax =`\\eqalign{
      k =& ${fmt(A, false, 2)} \\cos[${fmt(B)}\\times${fmt(u)}/${fmt(a)}] \\cr
         & \\times(1-${fmt(e2)}\\sin^2${deg(phi)})/\\{${fmt(a)}\\cos${deg(phi)} \\cr
         & \\cos[${fmt(B)}\\times(${deg(lam)}-${deg(lam0)})] \\} \\cr
        =& ${fmt(k)} 
    }`;
    MathJax.Hub.getAllJax("k_ell")[0].Text(jax);

    const x=v*Math.cos(alpha_c) +u*Math.sin(alpha_c) + this.x0;
    jax=`\\eqalign{
      x &= ${fmt(v,false, 2)}\\cos ${deg(alpha_c)} + ${fmt(u, false, 2)}\\sin ${deg(alpha_c)} + ${this.x0} \\cr
        &= ${fmt(x, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("x_ell")[0].Text(jax);

    const y=u*Math.cos(alpha_c)-v*Math.sin(alpha_c) + this.y0;
    jax=`\\eqalign{
      y &= ${fmt(u,false, 2)}\\cos ${deg(alpha_c)} + ${fmt(v, false, 2)}\\sin ${deg(alpha_c)} + ${this.y0} \\cr
        &= ${fmt(y, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("y_ell")[0].Text(jax);
  },

  set_inv () {
    const {a, e, e2, k0, phi0, phi1, phi2, lam1, lam2} = this;
    
    const x = document.getElementById("x_ell_in").value*1;
    const y = document.getElementById("y_ell_in").value*1;

    const B=Math.sqrt(1+e2*Math.cos(phi0)**4/(1-e2))
    MathJax.Hub.getAllJax("B_inv")[0].Text(`B=${fmt(B)}`);
    const A=a*k0*B*Math.sqrt(1-e2)/(1-e2*Math.sin(phi0)**2);
    MathJax.Hub.getAllJax("A_inv")[0].Text(`A=${fmt(A,true,2)}\\;\\text{m}`);
    let D=B*Math.sqrt(1-e2)/(Math.cos(phi0)*Math.sqrt(1-e2*Math.sin(phi0)**2));
    if (D < 1) {
      D=1;
    }
    let E;
    if (phi0 < 0){
      E = (D-Math.sqrt(D**2-1))*this.tfun(phi0)**B;
    } else {
      E = (D+Math.sqrt(D**2-1))*this.tfun(phi0)**B;
    }
    MathJax.Hub.getAllJax("E_inv")[0].Text(`E=${fmt(E)}`);

    const H=this.tfun(phi1)**B;
    const L=this.tfun(phi2)**B;
    const F = E/H;
    const G = (F-1/F)/2;
    const J=(E**2-L*H)/(E**2+L*H)
    const P=(L-H)/(L+H)
    const lam0=(lam1+lam2)/2-Math.atan(J*Math.tan(B*(lam1-lam2)/2)/P)/B;
    MathJax.Hub.getAllJax("lam0_inv")[0].Text(`\\lambda_0=${deg(lam0, true)}`);
    const gam0 = Math.atan(Math.sin(B*(lam1-lam0))/G);
    MathJax.Hub.getAllJax("gam0_inv")[0].Text(`\\gamma_0=${deg(gam0, true)}`);
    const alpha_c = Math.asin(D*Math.sin(gam0));
    MathJax.Hub.getAllJax("alphac_inv")[0].Text(`\\alpha_c=${deg(alpha_c, true)}`);

    const v = (x-this.x0)*Math.cos(alpha_c)-(y-this.y0)*Math.sin(alpha_c);
    let jax=`\\eqalign{
      v =& (${fmt(x)} - ${fmt(this.x0)})\\cos${deg(alpha_c)} \\cr
         &-(${fmt(y)}-${fmt(this.y0)})\\sin${deg(alpha_c)} \\cr
        =& ${fmt(v,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("v_inv")[0].Text(jax);

    const u = (y-this.y0)*Math.cos(alpha_c)+(x-this.x0)*Math.sin(alpha_c);
    jax=`\\eqalign{
      u =& (${fmt(y)} - ${fmt(this.y0)})\\cos${deg(alpha_c)} \\cr
         &-(${fmt(x)}-${fmt(this.x0)})\\sin${deg(alpha_c)} \\cr
        =& ${fmt(u,true,2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("u_inv")[0].Text(jax);

    const Q = Math.exp(-B*v/A);
    jax =`\\eqalign{
      Q' =& \\mathrm{e}^{-(${fmt(B)}\\times${fmt(v, false, 2)}/${fmt(A, false, 2)})} = \\mathrm{e}^{${fmt(-B*v/A)}} \\cr
         =& ${fmt(Q)}
    }`
    MathJax.Hub.getAllJax("Q_inv")[0].Text(jax);

    const S = (Q-1/Q)/2;
    jax = `S' = (${fmt(Q)}-1/${fmt(Q)}) = ${fmt(S, true)}`
    MathJax.Hub.getAllJax("S_inv")[0].Text(jax);

    const T = (Q+1/Q)/2;
    jax = `T' = (${fmt(Q)}+1/${fmt(Q)})/2 = ${fmt(T)}`
    MathJax.Hub.getAllJax("T_inv")[0].Text(jax);

    const V = Math.sin(B*u/A);
    jax = `\\eqalign{
      V' =& \\sin(${fmt(B)}\\times${fmt(u,false, 2)}/${fmt(A,false, 2)}) \\cr
         =& \\sin ${deg(B*u/A)} = ${fmt(V, true)}
    }`
    MathJax.Hub.getAllJax("V_inv")[0].Text(jax);

    const U = (V*Math.cos(gam0)+S*Math.sin(gam0))/T;
    jax=`\\eqalign{
      U' =& [${fmt(V)}\\cos${deg(gam0)}+${fmt(S)}\\sin${deg(S)}]/ \\cr
          & ${fmt(T)} \\cr
         =& ${fmt(U)}
    }`
    MathJax.Hub.getAllJax("U_inv")[0].Text(jax);

    const t = (E/Math.sqrt((1+U)/(1-U)))**(1/B);
    jax = `\\eqalign{
      t &= \\{${fmt(E)}/[(1+${fmt(U)})/(1-${fmt(U)})]^{1/2} \\}^{1/${fmt(B)}} \\cr
        &= ${fmt(t, true)}
    }`
    MathJax.Hub.getAllJax("t_inv")[0].Text(jax);

    let phi=Math.PI/2-2*Math.atan(t);
    jax = `90^\\circ - 2\\arctan ${fmt(t)} = ${deg(phi, true)}`
    MathJax.Hub.getAllJax("phi_inv0")[0].Text(jax);
    let phi_old = phi;
    const phi_func = function (x) {
      return Math.PI/2 - 2*Math.atan(t*((1-e*Math.sin(x))/(1+e*Math.sin(x)))**(e/2));
    }
    let phi_new = phi_func(phi_old)
    jax = `\\eqalign{
      \\phi =& 90^\\circ - 2\\arctan\\{ ${fmt(t)}\\times[(1-${fmt(e)}\\sin ${deg(phi_old)})/ \\cr
             & (1+${fmt(e)}\\sin ${deg(phi_old)})]^{${fmt(e)}/2}\\} \\cr
            =& ${deg(phi_new)} 
    }`
    MathJax.Hub.getAllJax("phi_inv1")[0].Text(jax);
    phi_old = phi_new;
    phi_new = phi_func(phi_old);
    MathJax.Hub.getAllJax("phi_inv2")[0].Text(`${deg(phi_new)}`);
    phi_old = phi_new;
    phi_new = phi_func(phi_old);
    MathJax.Hub.getAllJax("phi_inv3")[0].Text(`\\phi = ${deg(phi_new)}`);

    const lam = lam0 - Math.atan2(S*Math.cos(gam0)-V*Math.sin(gam0), Math.cos(B*u/A))/B;
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0, true)}-\\arctan\\{[${fmt(S)}\\cos ${deg(gam0)} \\cr
                & -${fmt(V)}\\sin ${deg(gam0)}]\\cos(${fmt(B)} \\cr
                & \\times ${fmt(u,false,2)}/${fmt(A,false,2)})\\} /${fmt(B)} \\cr
               =& ${deg(lam, true)}
    }`;
    MathJax.Hub.getAllJax("lam_inv")[0].Text(jax);

    const chi = Math.PI/2-2*Math.atan(t);
    jax = `\\eqalign{
      \\chi &= 90^\\circ - 2\\arctan ${fmt(t)} \\cr
            &= ${deg(chi, true)}
    }`
    MathJax.Hub.getAllJax("chi_inv")[0].Text(jax);
    

  }
}

var ell2 = {
  a: 6378206.4,
  e2: 0.00676866,
  e: 0.0822719,
  k0: 1.0,
  phi0: 36*D2R,

  tfun(x) {
    return Math.tan(Math.PI/4-x/2)/((1-this.e*Math.sin(x))/(1+this.e*Math.sin(x)))**(this.e/2)
  },

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
    MathJax.Hub.getAllJax("ellip2_a")[0].Text(`a=${this.a}`);
    MathJax.Hub.getAllJax("ellip2_e2")[0].Text(`e^2=${this.e2.toFixed(7)}`);
    MathJax.Hub.getAllJax("ellip2_e")[0].Text(`e=${this.e.toFixed(7)}`);

    this.set_fwd ();
  },

  set_fwd () {
    const {a, e, e2} = this;
    k0 = document.getElementById("k0_ell2_in").value*1;
    phi0 = document.getElementById("phi0_ell2_in").value*D2R;
    const lamc = document.getElementById("lamc_ell2_in").value*D2R;
    const alpha_c = document.getElementById("alphac_ell2_in").value*D2R;
    const phi = document.getElementById("phi_ell2_in").value*D2R;
    const lam = document.getElementById("lambda_ell2_in").value*D2R;

    const B=Math.sqrt(1+e2*Math.cos(phi0)**4/(1-e2))
    let jax=`\\eqalign{
      B &=[1+${fmt(e2)}\\cos^4${deg(phi0)}/(1-${fmt(e2)})]^{1/2} \\cr
        &= ${fmt(B)}
    }`;
    MathJax.Hub.getAllJax("B_ell2")[0].Text(jax);

    const A=a*k0*B*Math.sqrt(1-e2)/(1-e2*Math.sin(phi0)**2);
    jax = `\\eqalign{
      A =& ${a}\\times${fmt(B)}\\times${k0}\\times(1-${fmt(e2)})^{1/2} \\cr
         & (1-${fmt(e2)}\\sin^2${deg(phi0)}) \\cr
        =& ${fmt(A, true, 2)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("A_ell2")[0].Text(jax);

    const t0= this.tfun(phi0);
    jax=`\\eqalign{
      t_0 =&\\tan(45^\\circ-${deg(phi0)}/2)[(1-${fmt(e)}\\sin${deg(phi0)})/(1+${fmt(e)}\\sin${deg(phi0)})]^{${fmt(e)}/2} \\cr
          =&${fmt(t0)}
    }`
    MathJax.Hub.getAllJax("t0_ell2")[0].Text(jax);

    let D=B*Math.sqrt(1-e2)/(Math.cos(phi0)*Math.sqrt(1-e2*Math.sin(phi0)**2));
    if (D < 1) {
      D=1;
    }
    jax =`\\eqalign{
      D =&${fmt(B)}\\times(1-${fmt(e2)})^{1/2}/[\\cos${deg(phi0)}\\times \\cr
         &(1-${fmt(e2)}\\sin^2${deg(phi0)})^{1/2}] \\cr
        =& ${fmt(D)}
    }`;
    MathJax.Hub.getAllJax("D_ell2")[0].Text(jax);

    let F;
    if (phi0 < 0) {
      F = (D-Math.sqrt(D**2-1));
      jax = `\\eqalign{
        & F = ${fmt(D)} - (1-${fmt(D)})^{1/2} = ${fmt(F)} \\cr
        & \\text{using the "-" sign since \\(\\phi_0\\) is south or negative.}
      }`
    }
    else {
      F = (D+Math.sqrt(D**2-1));
      jax = `\\eqalign{
        & F = ${fmt(D)} + (1-${fmt(D)})^{1/2} = ${fmt(F)} \\cr
        & \\text{using the "+" sign since \\(\\phi_0\\) is north or positive.}
      }`
    }
    MathJax.Hub.getAllJax("F_ell2")[0].Text(jax);
    
    const E = F*t0**B;
    jax =`E = ${fmt(F)}\\times ${fmt(t0)}^{${fmt(B)}} = ${fmt(E)}`
    MathJax.Hub.getAllJax("E_ell2")[0].Text(jax);

    const G = (F-1/F)/2;
    jax = `G= (${fmt(F)}- 1/${fmt(F)})/2 = ${fmt(G)}`
    MathJax.Hub.getAllJax("G_ell2")[0].Text(jax);

    const gam0 = Math.asin(Math.sin(alpha_c)/D);
    jax= `\\eqalign{
      \\gamma_0 &= \\arcsin [(\\sin ${deg(alpha_c)})/${fmt(D)}] \\cr
                &= ${deg(gam0, true)}
    }`;
    MathJax.Hub.getAllJax("gam0_ell2")[0].Text(jax);

    const lam0 = lamc - Math.asin(G*Math.tan(gam0))/B
    jax = `\\eqalign{
      \\lambda_0 &= ${deg(lamc, true)} - [\\arcsin(${fmt(G)}\\tan ${deg(gam0)})]/${fmt(B)} \\cr
                 &= ${deg(lam0, true)}
    }`
    MathJax.Hub.getAllJax("lam0_ell2")[0].Text(jax);

    const u0 = A/B*Math.atan(Math.sqrt(D**2-1)/Math.cos(alpha_c))
    jax =`\\eqalign{
      u_{${deg(phi0,true)},${deg(lam,true)}\\dots} =& (${fmt(A,true,2)}/${fmt(B)})\\arctan[(${fmt(D)}^2-1)^{1/2}/\\cr
       & \\cos${deg(alpha_c)}] = ${fmt(u0, true,2)}
    }`
    MathJax.Hub.getAllJax("u0_ell2")[0].Text(jax);

    const t = this.tfun(phi);
    const Q = E/t**B;
    const S = (Q-1/Q)/2;
    const T = (Q+1/Q)/2;
    const V = Math.sin(B*(lam-lam0));
    const U = (-V*Math.cos(gam0)+S*Math.sin(gam0))/T
    const v = A*Math.log((1-U)/(1+U))/(2*B)
    const u=A*Math.atan((S*Math.cos(gam0)+V*Math.sin(gam0))/Math.cos(B*(lam-lam0)))/B;
    MathJax.Hub.getAllJax("u_ell2")[0].Text(`u=${fmt(u,true, 2)}\\;\\text{m}`);
    MathJax.Hub.getAllJax("v_ell2")[0].Text(`v=${fmt(v,true, 2)}\\;\\text{m}`);
  }
  
}