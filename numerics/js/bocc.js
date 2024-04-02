const n = (Math.log(Math.sin(31*D2R))-Math.log(Math.sin(73*D2R)))/(Math.log(Math.tan(31/2*D2R))-Math.log(Math.tan(73/2*D2R)));
const lam_b= -(19+59/60+36/3600)*D2R;
const Az_AB= Math.acos((Math.cos(-20*D2R)*Math.sin(45*D2R)-Math.sin(-20*D2R)*Math.cos(45*D2R)*Math.cos(lam_b+110*D2R))/Math.sin(104*D2R));
const Az_BA= Math.acos((Math.cos(45*D2R)*Math.sin(-20*D2R)-Math.sin(45*D2R)*Math.cos(-20*D2R)*Math.cos(lam_b+110*D2R))/Math.sin(104*D2R));
const T= Math.tan(31*D2R/2)**n+Math.tan(73*D2R/2)**n;
const z_c= 2*Math.atan((T/2)**(1/n));
const phic = Math.asin(Math.sin(-20*D2R)*Math.cos(z_c) + Math.cos(-20*D2R)*Math.sin(z_c)*Math.cos(Az_AB));
const Az_c = Math.asin(Math.cos(-20*D2R)*Math.sin(Az_AB)/Math.cos(phic));

const z_c_deg = z_c/D2R;
const phic_deg = phic/D2R;
const Az_c_deg = Az_c/D2R;

var sph = {

  set_fwd () {
    const r = document.getElementById("r_in").value;
    const phi = document.getElementById("phi_in").value*D2R;
    const lam = document.getElementById("lam_in").value*D2R;

    const F0=r*Math.sin(31*D2R)/(n*Math.tan(31*D2R/2)**n);
    const k0=2/(1+n*F0*Math.tan(26*D2R)**n/(r*Math.sin(52*D2R)));
    const F=k0*F0;
    const rhoc = 1/2*F*T;
    
    let jax;
    const z_b = Math.acos(Math.sin(Math.PI/4)*Math.sin(phi)+Math.cos(Math.PI/4)*Math.cos(phi)*Math.cos(lam_b-lam));
    jax = `\\eqalign{
      z_B &= \\arccos\\{\\sin45^\\circ\\sin${deg(phi)}+\\cos45^\\circ\\cos${deg(phi)}\\cos[${deg(lam_b)}-${deg(lam)}]\\} \\cr
          &= ${deg(z_b)}
    }`
    MathJax.Hub.getAllJax("z_b")[0].Text(jax);

    const Az_b = Math.atan2(Math.sin(lam_b-lam),(Math.cos(Math.PI/4)*Math.tan(phi)-Math.sin(Math.PI/4)*Math.cos(lam_b-lam)));
    jax = `\\eqalign{
      Az_B &= \\arctan\\lbrace\\sin[${deg(lam_b)}-${deg(lam)}]/[\\cos 45^\\circ\\tan ${deg(phi)}-\\sin 45^\\circ\\cos(${deg(lam_b)}-${deg(lam)})]\\rbrace \\cr
           &= ${deg(Az_b)}
    }`
    MathJax.Hub.getAllJax("Az_b")[0].Text(jax);
    MathJax.Hub.getAllJax("Az_b1")[0].Text(deg(Az_b));
    MathJax.Hub.getAllJax("Az_b2")[0].Text(deg(Az_b));

    let xprime, yprime, rho, rho_str, z, az, az1, expr_str;
    if (Az_b < Az_BA)
    {
      //projection from pole B
      document.getElementById("bproj").style.display = "block";
      document.getElementById("aproj").style.display = "none";
  
      z = z_b;
      rho_str = "\\rho_B"
      az = Az_b;
      az1 = Az_BA;
    }
    else
    {
      //projection from pole A
      document.getElementById("bproj").style.display = "none";
      document.getElementById("aproj").style.display = "block";

      const z_a = Math.acos (Math.sin(-20*D2R)*Math.sin(phi)+Math.cos(-20*D2R)*Math.cos(phi)*Math.cos(lam+110*D2R));
      jax = `\\eqalign{
        z_A &= \\arccos\\{\\sin(-20^\\circ)\\sin${deg(phi)} + \\cos(-20^\\circ)\\cos${deg(phi)}\\cos[${deg(lam)} + 110^\\circ]\\} \\cr
            &= ${deg(z_a, true)}
      }`
      MathJax.Hub.getAllJax("z_a")[0].Text(jax);

      const Az_a = Math.atan2(Math.sin(lam+110*D2R), Math.cos(-20*D2R)*Math.tan(phi)-Math.sin(-20*D2R)*Math.cos(lam+110*D2R));
      jax =`\\eqalign{
        Az_A &= \\arctan\\{\\sin(${deg(lam)}+110^\\circ)/[\\cos(-20^\\circ)\\tan ${deg(phi)}-\\sin(-20^\\circ)\\cos(${deg(lam)}+110^\\circ)] \\} \\cr
             &= ${deg(Az_a,true)}
      }`
      MathJax.Hub.getAllJax("Az_a")[0].Text(jax);
      z = z_a;
      rho_str = "\\rho_A";
      az = Az_a;
    }
    rho = F*Math.tan(z/2)**n;
    jax = `\\eqalign{
      ${rho_str} &= ${fmt(F/r)}\\times${fmt(r,false,0)}\\tan^{${fmt(n)}}(½\\times ${deg(z)}) \\cr
              &= ${fmt(rho,true,1)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("rho")[0].Text(jax);

    const k = rho*n/(r*Math.sin(z));
    jax = `\\eqalign{
      k &= ${fmt(rho,false,1)}\\times${fmt(n)}/(${fmt(r,false,0)}\\sin ${deg(z)}) \\cr
        &= ${fmt(k)}
    }`
    MathJax.Hub.getAllJax("k")[0].Text(jax);

    if (Az) {
      const alpha = Math.acos((Math.tan(z/2)**n+Math.tan((104*D2R-z)/2)**n)/T);
      jax = `\\eqalign{
        \\alpha &= \\arccos\\{ [\\tan^{${fmt(n)}}(½\\times ${deg(z)}) + \\tan^{${fmt(n)}}½(104^\\circ - ${deg(z)})]/${fmt(T)} \\} \\cr
                &= ${deg(alpha)}
      }`
      MathJax.Hub.getAllJax("alpha")[0].Text(jax);
    }
    const expr1 = n*(Az_BA-az);
    jax = `|n(Az_BA-Az_A)| = ${fmt(n)}\\times(${deg(Az_BA)}-${deg(az)}) = ${deg(expr1)}`;
    MathJax.Hub.getAllJax("expr1")[0].Text(jax);

    let rhoprime;
    if (expr1 < alpha)
    {
      document.getElementById("rhobprime1").style.display = "none";
      document.getElementById("rhobprime2").style.display = "block";
    }
    else
    {
      document.getElementById("rhobprime1").style.display = "block";
      document.getElementById("rhobprime2").style.display = "none";
      rhoprime = rho;
    }

    xprime = rhoprime * Math.sin(n*(Az_BA-Az_b));
    jax = `\\eqalign{
      x' &= ${fmt(rhoprime,false,1)}\\sin[${fmt(n)}(${deg(Az_BA)}-${deg(Az_b)})] \\cr
         &= ${fmt(xprime, true,1)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("xprime")[0].Text(jax);

    yprime = rhoprime*Math.cos(n*(Az_BA-Az_b))-rhoc;
    jax = `\\eqalign{
      y' =& ${fmt(rhoprime,false,1)}\\cos[${fmt(n)}(${deg(Az_BA)}-${deg(Az_b)})] \\cr
          &- ${fmt(rhoc/r)} \\times ${fmt(r,false,0)} \\cr
         =& ${fmt(yprime, true, 1)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("yprime")[0].Text(jax);
    
    const x = -xprime*Math.cos(Az_c) -yprime*Math.sin(Az_c);
    jax = `\\eqalign{
      x &= -${fmt(xprime,false,1)}\\cos ${deg(Az_c)} -${fmt(yprime,false,1)}\\sin ${deg(Az_c)} \\cr
        &= ${fmt(x,true,1)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("x")[0].Text(jax);

    const y = -yprime*Math.cos(Az_c) +xprime*Math.sin(Az_c);
    jax = `\\eqalign{
      y &= -${fmt(yprime,false,1)}\\cos ${deg(Az_c)} + ${fmt(xprime,false,1)}\\sin ${deg(Az_c)} \\cr
        &= ${fmt(y,true,1)}\\;\\text{m}
    }`
    MathJax.Hub.getAllJax("y")[0].Text(jax);
    

//    this.set_inv ();
  },
  set_inv () {
    const r = document.getElementById("r_sph_in").value;
    const phi1 = document.getElementById("phi1_sph_in").value*D2R;
    const phi2 = document.getElementById("phi2_sph_in").value*D2R;
    const phi0 = document.getElementById("phi0_sph_in").value*D2R;
    const lam0 = document.getElementById("lam0_sph_in").value*D2R;
    const x = document.getElementById("x_sph_in").value;
    const y = document.getElementById("y_sph_in").value;

    let n;
    if (phi1 != phi2)
      n = (Math.cos(phi1)-Math.cos(phi2))/(phi2-phi1);
    else
      n = Math.sin(phi1);
    const G = Math.cos(phi1)/n+phi1;
    const rho0 = r*(G-phi0);
    let jax=`\\eqalign{
      n &= ${fmt(n,true)} \\cr
      G &= ${fmt(G,true)} \\cr
      \\rho_0 &= ${fmt(rho0, true)}\\;\\text{units}
    }`;
    MathJax.Hub.getAllJax("n_g_rho0_sph_inv")[0].Text(jax);

    const rho = Math.sign(n)*Math.sqrt(x**2 + (rho0-y)**2);
    jax = `\\eqalign{
      \\rho &= ${n<0?"-":"+"}[${fmt(x)}^2+(${fmt(rho0)}-${fmt(y)})^2]^{1/2} \\cr
            &= ${fmt(rho)}\\;\\text{units,}\\; \\text{${n<0?"negative because \\(n\\) is negative" : "positive because \\(n\\) is positive"}}
    }`
    MathJax.Hub.getAllJax("rho_sph_inv")[0].Text(jax);

    const theta = Math.atan2 (n>=0?x:-x, n>=0?(rho0-y):-(rho0-y));
    jax = `\\eqalign{
      \\theta &= \\arctan[${fmt(x)}/(${fmt(rho0)}-${fmt(y)})] \\cr
              &= ${deg(theta,true)}
    }`
    MathJax.Hub.getAllJax("theta_sph_inv")[0].Text(jax);

    const phi = G - rho/r;
    jax= `\\eqalign{
      \\phi &= [${fmt(G)} - ${fmt(rho)}/${fmt(r, false, 0)}]\\times 180^\\circ/\\pi \\cr
            &= ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("phi_sph_inv")[0].Text(jax);

    const lam = lam0 + theta/n;
    jax = `\\eqalign{
      \\lambda &= ${deg(lam0)} + ${deg(theta)}/${fmt(n)} \\cr
               &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam_sph_inv")[0].Text(jax);
  }
}
