var sph = {
  R: 1.0,
  lam0: -85*D2R,
  set_fwd () {
    this.R = document.getElementById("r_in").value;
    this.lam0 = document.getElementById("lam0_in").value*D2R;

    const {R, lam0} = this
    const phi = document.getElementById("phi_in").value*D2R;
    const lam = document.getElementById("lam_in").value*D2R;

    let jax;

    const theta = Math.asin(Math.abs(2*phi/Math.PI));
    jax = `\\eqalign{
      \\theta &= \\arcsin |2\\times${deg(phi)}/180^\\circ| \\cr
              &= ${deg(theta)}
    }`
    MathJax.Hub.getAllJax("theta")[0].Text(jax);

    const A = 0.5*Math.abs(Math.PI/(lam-lam0)-(lam-lam0)/Math.PI);
    jax = `\\eqalign{
      A &= ½|180^\\circ/(${deg(lam,true)}-${deg(lam0)})-(${deg(lam,true)}-${deg(lam0)})/180^\\circ| \\cr
        &= ½|${fmt(Math.PI/(lam-lam0))} - ${fmt((lam-lam0)/Math.PI)}| \\cr
        &= ${fmt(A, true)}
    }`
    MathJax.Hub.getAllJax("A")[0].Text(jax);

    const G = Math.cos(theta)/(Math.sin(theta)+Math.cos(theta)-1);
    jax = `\\eqalign{
      G &= \\cos${deg(theta)}/(\\sin${deg(theta)}+\\cos${deg(theta)}-1) \\cr
        &= ${fmt(G, true)}
    }`
    MathJax.Hub.getAllJax("G")[0].Text(jax);

    const P = G*(2/Math.sin(theta)-1);
    jax = `\\eqalign{
      P &= ${fmt(G,true)}/(2/\\sin${deg(theta)} - 1) \\cr
        &= ${fmt(P, true)}
    }`
    MathJax.Hub.getAllJax("P")[0].Text(jax);

    const Q = A**2+G;
    jax = `\\eqalign{
      Q &= ${fmt(A)}^2+${fmt(G)} \\cr
        &= ${fmt(Q, true)}
    }`
    MathJax.Hub.getAllJax("Q")[0].Text(jax);

    let x = Math.PI*R*(A*(G-P**2)+Math.sqrt(A**2*(G-P**2)**2-(P**2+A**2)*(G**2-P**2)))/(P**2+A**2);
    if (lam-lam0 < 0) {
      x *= -1;
      document.getElementById("lamdif_neg").style.display="inherit";
      document.getElementById("lamdif_pos").style.display="none";
    }else {
      document.getElementById("lamdif_neg").style.display="none";
      document.getElementById("lamdif_pos").style.display="inherit";
    }
    jax = `\\eqalign{
      x =& ${lam-lam0<0?'-':'+'}\\pi\\times${fmt(R,false,0)}\\{ ${fmt(A)}\\times(${fmt(G)}-${fmt(P)}^2) \\cr
         & +[${fmt(A)}^2\\times(${fmt(G)} - ${fmt(P)}^2)\\cr
         & -(${fmt(P)}^2 + ${fmt(A)}^2)\\times(${fmt(G)}^2 - ${fmt(P)}^2)]^{1/2}\\}/ \\cr
         & (${fmt(P)}^2+${fmt(A)}^2)\\cr
        =& ${fmt(x, true)}\\text{ units} 
    }`
    MathJax.Hub.getAllJax("x")[0].Text(jax);
    document.getElementById("x_in").value = fmt(x,true);

    let y = Math.PI*R*(P*Q-A*Math.sqrt((A**2+1)*(P**2+A**2)-Q**2))/(P**2+A**2);
    if (phi < 0) {
      y *= -1;
      document.getElementById("phi_neg").style.display="inherit";
      document.getElementById("phi_pos").style.display="none";
    }else {
      document.getElementById("phi_neg").style.display="none";
      document.getElementById("phi_pos").style.display="inherit";
    }
    jax = `\\eqalign{
      y =& ${phi<0?'-':'+'}\\pi\\times${fmt(R,false,0)}\\{ ${fmt(P)}\\times${fmt(Q)} - ${fmt(A)}\\cr
         & \\times[(${fmt(A)}^2+1)\\times(${fmt(P^2)}+${fmt(A)}^2) \\cr
         & -${fmt(Q)}^2]^{1/2} \\}/(${fmt(P)}^2 + ${fmt(A)}^2) \\cr
        =& ${fmt(y, true)}\\text{ units} 
    }`
    MathJax.Hub.getAllJax("y")[0].Text(jax);
    document.getElementById("y_in").value = fmt(y,true);
    this.set_inv ();
  },

  set_inv() {
    const {R, lam0} = this;

    const x = +document.getElementById("x_in").value;
    const y = +document.getElementById("y_in").value;

    const X = x/(Math.PI*R);
    let jax = `\\eqalign{
      X &= ${fmt(x,true,0)}/(\\pi\\times${fmt(R,false,0)}) \\cr
        &= ${fmt(X,true)}
    }`
    MathJax.Hub.getAllJax("X")[0].Text(jax);

    const Y = y/(Math.PI*R);
    jax = `\\eqalign{
      Y &= ${fmt(y,true,0)}/(\\pi\\times${fmt(R,false,0)}) \\cr
        &= ${fmt(Y,true)}
    }`
    MathJax.Hub.getAllJax("Y")[0].Text(jax);

    const c1 = -Math.abs(Y)*(1+X**2+Y**2);
    jax = `\\eqalign{
      c_1 &= -|${fmt(Y,true)}|\\times[1+${fmt(X)}^2+${fmt(Y)}^2]\\cr
          &= ${fmt(c1, true)}
    }`
    MathJax.Hub.getAllJax("c1")[0].Text(jax);

    const c2= c1-2*Y**2+X**2;
    jax = `\\eqalign{
      c_2 &= ${fmt(c1, true)}-2\\times${fmt(Y)}^2+${fmt(X)}^2 \\cr
          &= ${fmt(c2, true)}
    }`
    MathJax.Hub.getAllJax("c2")[0].Text(jax);

    const c3 = -2*c1+1+2*Y**2+(X**2+ Y**2)**2;
    jax = `\\eqalign{
      c_3 =& -2\\times${fmt(c1)}+2\\times${fmt(Y)}^2 \\cr
           & + [${fmt(X)}^2 + ${fmt(Y)}^2]^2 \\cr
          =& ${fmt(c3, true)} 
    }`
    MathJax.Hub.getAllJax("c3")[0].Text(jax);

    const d = Y**2/c3 +(2*c2**3/c3**3-9*c1*c2/c3**2)/27;
    jax = `\\eqalign{
      d =& ${fmt(Y)}^2/${fmt(c3)}+[2\\times${fmt(c2)}^3/${fmt(c3)}^3 \\cr
         & - 9\\times${fmt(c1)}\\times${fmt(c2)}/${fmt(c3)}^2]/27 \\cr
        =& ${fmt(d, true)} 
    }`
    MathJax.Hub.getAllJax("d")[0].Text(jax);

    const a1= (c1-c2**2/(3*c3))/c3;
    jax = `\\eqalign{
      a_1 =& [${fmt(c1)}-${fmt(c2)}^2/(3\\times${fmt(c3)})]/${fmt(c3)}\\cr
          =& ${fmt(a1,true)}
    }`
    MathJax.Hub.getAllJax("a1")[0].Text(jax);

    const m1 = 2*Math.sqrt(-a1/3);
    jax = `\\eqalign{
      m_1 &= 2\\times[-${fmt(a1)}/3]^{1/2} \\cr
          &= ${fmt(m1, true)}
    }`
    MathJax.Hub.getAllJax("m1")[0].Text(jax);

    const theta1 = Math.acos(3*d/(a1*m1))/3;
    jax = `\\eqalign{
      \\theta_1 &= ⅓\\arccos(3\\times${fmt(d)}/(${fmt(a1)}\\times${fmt(m1)})) \\cr
                &= ⅓\\arccos${fmt(3*d/(a1*m1))} \\cr
                &= ${deg(theta1, true)}
    }`
    MathJax.Hub.getAllJax("theta1")[0].Text(jax);

    let phi = Math.PI*(-m1*Math.cos(theta1+Math.PI/3)-c2/(3*c3));
    if (y < 0) {
      phi *= -1;
      document.getElementById("y_neg").style.display="inherit";
      document.getElementById("y_pos").style.display="none";
    }else {
      document.getElementById("y_neg").style.display="none";
      document.getElementById("y_pos").style.display="inherit";
    }
    jax = `\\eqalign{
      \\phi =& ${y<0?'-':'+'}180^\\circ\\times[${fmt(-m1)}\\cos(${deg(theta1)}+60^\\circ) \\cr
             & ${fmt(c2)}/(3\\times${fmt(m1)})] \\cr
            =& ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("phi")[0].Text(jax);

    let lam = Math.PI*(X**2+Y**2-1+Math.sqrt(1+2*(X**2-Y**2)+(X**2+Y**2)**2))/(2*X)+lam0;
    lam = lon_adj(lam);

    jax = `\\eqalign{
      \\lambda =& 180^\\circ\\times \\{ ${fmt(X)}^2 + ${fmt(Y)}^2 -1 + \\cr
                & [1+2\\times(${fmt(X)}^2-${fmt(Y)}^2) \\cr
                & +(${fmt(X)}^2+${fmt(Y)}^2)^2]^{1/2}\\}/ \\cr
                & [2\\times${fmt(X)}]+${deg(lam0)} \\cr
               =& ${deg(lam, true)} 
    }`
    MathJax.Hub.getAllJax("lam")[0].Text(jax);
 }
}