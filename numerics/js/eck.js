var eck4 = {
  R: 1.0,
  lam0: -90*D2R,
  set_fwd () {
    this.R = document.getElementById("r_in").value;
    this.lam0 = document.getElementById("lam0_in").value*D2R;

    const {R, lam0} = this
    const phi = document.getElementById("phi_in").value*D2R;
    const lam = document.getElementById("lam_in").value*D2R;
    let jax;

    let theta = phi/2;
    MathJax.Hub.getAllJax("theta0")[0].Text(deg(theta, true));
    MathJax.Hub.getAllJax("theta0_1")[0].Text(deg(theta, true));
    let delta = -(theta+Math.sin(theta)*Math.cos(theta)+2*Math.sin(theta)-(2+Math.PI/2)*Math.sin(phi))/(2*Math.cos(theta)*(1+Math.cos(theta)));
    jax =`\\eqalign{
      \\Delta\\theta =& -[${deg(theta)}\\times\\pi/180^\\circ+\\sin${deg(theta)}\\cos${deg(theta)}+2\\sin${deg(theta)} \\cr
                      & -(2+\\pi/2)\\sin${deg(phi)}]/[2\\cos${deg(theta)}\\times(1-\\cos${deg(theta)})] \\cr
                     =& ${deg(delta, true)} 
    }`
    MathJax.Hub.getAllJax("delta")[0].Text(jax);
    jax = `\\theta = ${deg(theta)}+${deg(delta)} = ${deg(theta+delta, true)}` 
    MathJax.Hub.getAllJax("theta1")[0].Text(jax);
    theta += delta;

    let i=0;
    var p = document.getElementById("iter");
    p.innerHTML = "$$ \\eqalign{"
    const epsilon = 1e-9
    while (Math.abs(delta) > epsilon && i<7)
    {
      delta = -(theta+Math.sin(theta)*Math.cos(theta)+2*Math.sin(theta)-(2+Math.PI/2)*Math.sin(phi))/(2*Math.cos(theta)*(1+Math.cos(theta)));
      p.innerHTML += `\\Delta\\theta' &= ${deg(delta, true)}`;
      if (Math.abs(delta) > epsilon)
      {
        theta += delta;
        p.innerHTML += `\\cr \n \\theta &= ${deg(theta, true)} \\cr`;
      }
      i++;
    }
    p.innerHTML += "} $$";
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, p]);

    jax = `\\theta = ${deg(theta, true)}`;
    MathJax.Hub.getAllJax("theta")[0].Text(jax);

    const x = 2/Math.sqrt(Math.PI*(4+Math.PI))*R*(lam-lam0)*(1+Math.cos(theta));
    jax = `\\eqalign{
      x &= ${fmt(2/Math.sqrt(Math.PI*(4+Math.PI)))}\\times${fmt(R,false,0)}\\times[${deg(lam,true)}-${deg(lam0)}]\\times(\\pi/180^\\circ)\\times[1+\\cos${deg(theta)}]\\cr
        &= ${fmt(x, true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("x")[0].Text(jax);
    document.getElementById("x_in").value = fmt(x,true);

    const y = 2*Math.sqrt(Math.PI/(4+Math.PI))*R*Math.sin(theta);
    jax = `\\eqalign{
      y &= ${fmt(2*Math.sqrt(Math.PI/(4+Math.PI)))}\\times${fmt(R,false,0)}\\times\\sin${deg(theta)} \\cr
        &= ${fmt(y, true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("y")[0].Text(jax);
    document.getElementById("y_in").value = fmt(y,true);
    this.set_inv ();
  },
  set_inv() {
    const {R, lam0} = this;

    const x = +document.getElementById("x_in").value;
    const y = +document.getElementById("y_in").value;

    let jax;
    const theta = Math.asin(y*Math.sqrt(4+Math.PI)/(2*Math.sqrt(Math.PI))*R);
    jax = `\\eqalign{
      \\theta &= \\arcsin[${fmt(y,true)}/(${fmt(2*Math.sqrt(Math.PI/(4+Math.PI)))}\\times${fmt(R,false,0)})] \\cr
              &= ${deg(theta,true)}
    }`

    MathJax.Hub.getAllJax("inv_theta")[0].Text(jax);

    const phi = Math.asin((theta+Math.sin(theta)*Math.cos(theta)+2*Math.sin(theta))/(2+Math.PI/2));
    jax =`\\eqalign{
      \\phi =& \\arcsin\\{[${deg(theta,true)}\\times\\pi/180^\\circ+\\sin${deg(theta)}\\cos${deg(theta)}\\cr
             & +2\\sin${deg(theta)}]/(2+\\pi/2)\\} \\cr
            =& ${deg(phi,true)}
    }`
    MathJax.Hub.getAllJax("phi")[0].Text(jax);

    const lam = lam0+Math.sqrt(Math.PI*(4+Math.PI))*x/(2*R*(1+Math.cos(theta)));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0, true)}+${fmt(x)}/\\{${fmt(2/Math.sqrt(Math.PI*(4+Math.PI)))}\\times${fmt(R,false,0)}\\times[1+\\cos${deg(theta)}]\\}\\cr
               =& ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam")[0].Text(jax);
  }
}

var eck6 = {
  R: 1.0,
  lam0: -90*D2R,
  set_fwd () {
    this.R = document.getElementById("r_in").value;
    this.lam0 = document.getElementById("lam0_in").value*D2R;

    const {R, lam0} = this
    const phi = document.getElementById("phi_in").value*D2R;
    const lam = document.getElementById("lam_in").value*D2R;

    let jax;
    let theta = phi;
    MathJax.Hub.getAllJax("theta0")[0].Text(deg(theta, true));
    MathJax.Hub.getAllJax("theta0_1")[0].Text(deg(theta, true));

    let delta = -(theta+Math.sin(theta)-(1+Math.PI/2)*Math.sin(phi))/(1+Math.cos(theta));
    jax = `\\eqalign{
      \\Delta\\theta =& -[${deg(theta)}\\times\\pi/180^\\circ+\\sin${deg(theta)}-(1+\\pi/2)\\sin${deg(theta)}]/ \\cr
                      & [1+\\cos${deg(theta)}] \\cr
                     =& ${deg(delta, true)} 
    }`
    MathJax.Hub.getAllJax("delta")[0].Text(jax);
    jax = `\\theta = ${deg(theta)}+${deg(delta)} = ${deg(theta+delta, true)}` 
    MathJax.Hub.getAllJax("theta1")[0].Text(jax);
    theta += delta;

    let i=0;
    var p = document.getElementById("iter");
    p.innerHTML = "$$ \\eqalign{"
    const epsilon = 1e-9
    while (Math.abs(delta) > epsilon && i<7)
    {
      delta = -(theta+Math.sin(theta)-(1+Math.PI/2)*Math.sin(phi))/(1+Math.cos(theta));
      p.innerHTML += `\\Delta\\theta' &= ${deg(delta, true)}`;
      if (Math.abs(delta) > epsilon)
      {
        theta += delta;
        p.innerHTML += `\\cr \n \\theta &= ${deg(theta, true)} \\cr`;
      }
      i++;
    }
    p.innerHTML += "} $$";
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, p]);

    jax = `\\theta = ${deg(theta, true)}`;
    MathJax.Hub.getAllJax("theta")[0].Text(jax);

    const x = R*(lam-lam0)*(1+Math.cos(theta))/Math.sqrt(2+Math.PI);
    jax = `\\eqalign{
      x &= ${fmt(R,false,0)}\\times(${deg(lam,true)}-${deg(lam0)})\\times(\\pi/180^\\circ)\\times[1+\\cos${deg(theta)}]/(2+\\pi)^{1/2} \\cr
        &= ${fmt(x, true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("x")[0].Text(jax);
    document.getElementById("x_in").value = fmt(x,true);

    const y = 2*R*theta/Math.sqrt(2+Math.PI);
    jax = `\\eqalign{
      y &= 2\\times${fmt(R,false,0)}\\times${deg(theta)}\\times\\pi/180^\\circ/(2+\\pi)^{1/2} \\cr
        &= ${fmt(y,true)}\\text{ units}
    }`
    MathJax.Hub.getAllJax("y")[0].Text(jax);
    document.getElementById("y_in").value = fmt(y,true);

    this.set_inv;
  },
  set_inv() {
    const {R, lam0} = this;

    const x = +document.getElementById("x_in").value;
    const y = +document.getElementById("y_in").value;

    let jax;

    const theta=Math.sqrt(2+Math.PI)*y/(2*R);
    jax = `\\eqalign{
      \\theta &= (2+\\pi)^{1/2}\\times${fmt(y)}/(2\\times${fmt(R,false,0)}) \\cr
              &= ${deg(theta, true)}
    }`
    MathJax.Hub.getAllJax("inv_theta")[0].Text(jax);

    const phi = Math.asin((theta+Math.sin(theta))/(1+Math.PI/2));
    jax = `\\eqalign{
      \\phi &= \\arcsin[(${deg(theta)}\\times\\pi/180^\\circ+ \\sin${deg(theta)})/(1+\\pi/2)] \\cr
            &= ${deg(phi, true)}
    }`
    MathJax.Hub.getAllJax("phi")[0].Text(jax);

    const lam = lam0+Math.sqrt(2+Math.PI)*x/(R*(1+Math.cos(theta)));
    jax = `\\eqalign{
      \\lambda &= ${deg(lam0, true)} +(2+\\pi)^{1/2}\\times${fmt(x)}/[${fmt(R,false,0)}\\times(1+\\cos${deg(theta)})] \\cr
              &= ${deg(lam, true)}
    }`
    MathJax.Hub.getAllJax("lam")[0].Text(jax);

  }
}