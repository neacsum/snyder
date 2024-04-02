class Complex {
  constructor (a, b) {
    if (a == null) {
      this.re = 0;
      this.im = 0;
      return;
    }
    if ( b == null) {
      if (a === object && a.re in a && a.im in a) {
        this.re = a.re;
        this.im = a.im;
      } else if (Array.isArray(a) && a.length === 2) {
        this.re = a[0];
        this.im = a[1];
      } else if (typeof a === 'number') {
        this.re = a;
        this.b = 0;
      } else
        throw Error ("Invalid Complex constructor args")
      return;
    }

    if (typeof a != 'number' || typeof b != 'number') 
      throw Error("Invalid Complex constructor args");

    this.re = a;
    this.im = b;  
  }

  add (n) {
    let {re, im} = this;
    if (typeof n === 'number') {
      re += n;
    } else if (Array.isArray(n) && n.length == 2) {
      re += n[0];
      im += n[1];
    } else if (n instanceof Complex) {
      re += n.re;
      im += n.im;
    } else
      throw Error("Complex.add - invalid argument");

    return new Complex (re, im);
  }

  sub (n) {
    let {re, im} = this;
    if (typeof n === 'number') {
      re -= n;
    } else if (Array.isArray(n) && n.length == 2) {
      re -= n[0];
      im -= n[1];
    } else if (n instanceof Complex) {
      re -= n.re;
      im -= n.im;
    } else
      throw Error("Complex.sub - invalid argument");

    return new Complex (re, im);
  }

  mul (n) {
    let {re, im} = this;
    if (typeof n === 'number') {
      re *= n;
      im *= n;
    } else if (Array.isArray(n) && n.length == 2) {
      re = this.re*n[0] - this.im*n[1];
      im = this.re*n[1] + this.im*n[0];
    } else if (n instanceof Complex) {
      re = n.re*this.re - n.im*this.im;
      im = n.im*this.re + n.re*this.im;
    } else
      throw Error("Complex.mul - invalid argument");
    return new Complex(re, im);
  }

  div(n) {
    let re, im;
    if (typeof n === 'number') {
      re /= n;
      im /= n;
      return new Complex(this.re/n, this.im/n);
    }
    let c, d;
    if (Array.isArray(n) && n.length == 2) {
      c = n[0];
      d = n[1];
    } else if (n instanceof Complex) {
      c = n.re;
      d = n.im;
    } else
      throw Error("Complex.div - invalid argument");
    const a = this.re, b= this.im, m = c**2 + d**2;
    re = (a*c+b*d)/m;
    im = (b*c-a*d)/m;
    return new Complex (re, im);
  }

  abs = () => Math.sqrt(this.re**2+this.im**2);
  arg = () => Math.atan2 (im, re);

  fmt(no_paren=false, dec=8) {

    if (this.im == 0)
      return fmt(this.re, no_paren, dec);

    let str = no_paren?"" : "(";
    str += fmt(this.re, true, dec);
    if (this.im > 0)
      str += "+";
    str += fmt(this.im, true,dec) +"\\,i";
    if (!no_paren)
      str += ")";
    return str;
  }
}

var sph = {
  R: 1,
  m: 6,
  phi1: 64*D2R,
  lam0: -152*D2R,
  A: [0.9972523, 0.0052513, 0.0074606, -0.0153783, 0.0636871, 0.3660976],
  B: [0,        -0.0041175, 0.0048125, -0.1968253,-0.1408027,-0.2937382],

  set_fwd () {
    const {A, B, R, m, phi1, lam0} = this;

    const phi = document.getElementById("phi_in").value*D2R;
    const lam = document.getElementById("lam_in").value*D2R;

    const kprime = 2/(1+Math.sin(phi1)*Math.sin(phi)+Math.cos(phi1)*Math.cos(phi)*Math.cos(lam-lam0));
    let jax = `\\eqalign{
      k' &= 2/\\{1+\\sin${deg(phi1)}\\sin${deg(phi)}+\\cos${deg(phi1)}\\cos${deg(phi)}\\cos[${deg(lam,true)} - ${deg(lam0)}]\\}\\cr
         &= ${fmt(kprime, true)} 
    }`
    MathJax.Hub.getAllJax("kprime")[0].Text(jax);

    const xprime = kprime*Math.cos(phi)*Math.sin(lam-lam0);
    jax = `\\eqalign{
      x' &= ${fmt(kprime)}\\cos${deg(phi)}\\sin[${deg(lam,true)}-${deg(lam0)}] \\cr
         &= ${fmt(xprime, true)}
    }`
    MathJax.Hub.getAllJax("xprime")[0].Text(jax);

    const yprime = kprime*(Math.cos(phi1)*Math.sin(phi)-Math.sin(phi1)*Math.cos(phi)*Math.cos(lam-lam0));
    jax = `\\eqalign{
      y' &= ${fmt(kprime)}\\{ \\cos${deg(phi1)}\\sin${deg(phi)} - \\sin${deg(phi1)}\\cos${deg(phi)}\\cos[${deg(lam,true)}-${deg(lam0)}]  \\} \\cr
         &= ${fmt(yprime, true)}
    }`
    MathJax.Hub.getAllJax("yprime")[0].Text(jax);

    const r = 2*xprime;
    jax =`\\eqalign{
      r &= 2\\times${fmt(xprime)} \\cr
        &= ${fmt(r,true)}
    }`
    MathJax.Hub.getAllJax("r")[0].Text(jax);

    const sprime = xprime**2 + yprime**2;
    jax =`\\eqalign{
      s' &= ${fmt(xprime)}^2 + ${fmt(yprime)}^2 \\cr
         &= ${fmt(sprime, true)}
    }`
    MathJax.Hub.getAllJax("sprime")[0].Text(jax);
    g = new Array(m+1);
    a = new Array(m+1);
    b = new Array(m+1);
    c = new Array(m+1);
    d = new Array(m+1);
    g[0] = new Complex;
    MathJax.Hub.getAllJax("g0")[0].Text("g_0 = 0");

    for (i=1; i<=m; i++)
      g[i] = new Complex(A[i-1], B[i-1]);

    a[1] = g[m];
    jax = `\\eqalign{
      a_1 &= A_6 + B_6\\,i \\cr
          &= ${a[1].fmt(true)}
    }`
    MathJax.Hub.getAllJax("a1")[0].Text(jax);

    b[1] = g[m-1];
    jax = `\\eqalign{
      b_1 &= A_5 + B_5\\,i \\cr
          &= ${b[1].fmt(true)}
    }`
    MathJax.Hub.getAllJax("b1")[0].Text(jax);

    c[1] = g[m].mul(m);
    jax =`\\eqalign{
      c_1 &= ${fmt(m,true,0)}\\times${g[m].fmt()} \\cr
          &= ${c[1].fmt(true)}
    }`
    MathJax.Hub.getAllJax("c1")[0].Text(jax);

    d[1] = g[m-1].mul(m-1);
    jax = `\\eqalign{
      d_1 &= ${fmt(m-1,true,0)}\\times${g[m-1].fmt()} \\cr
          &= ${d[1].fmt(true)}
    }`
    MathJax.Hub.getAllJax("d1")[0].Text(jax);

    a[2] = b[1].add(a[1].mul(r));
    jax = `\\eqalign{
      a_2 =& b_1 + ra_1 \\cr
          =& ${b[1].fmt()}+${fmt(r)}\\times${a[1].fmt()} \\cr
          =& ${a[2].fmt(true)}
    }`
    MathJax.Hub.getAllJax("a2")[0].Text(jax);

    b[2] = g[m-2].sub(a[1].mul(sprime));
    jax = `\\eqalign{
      b_2 =& A_4 +iB_4 - s'a_1\\cr
          =& ${g[m-2].fmt()}-${fmt(sprime)}\\times${a[1].fmt()} \\cr
          =& ${b[2].fmt(true)}
    }`
    MathJax.Hub.getAllJax("b2")[0].Text(jax);

    c[2] = d[1].add(c[1].mul(r));
    jax =`\\eqalign{
      c_2 =& d_1 + rc_1 \\cr
          =& ${d[1].fmt()}+${fmt(r)}\\times${c[1].fmt()} \\cr
          =& ${c[2].fmt(true)}
    }`
    MathJax.Hub.getAllJax("c2")[0].Text(jax);

    d[2] = g[m-2].mul(m-2).sub(c[1].mul(sprime));
    jax = `\\eqalign{
      d_2 =& 4\\times(A_4+iB_4) - s'c_1 \\cr
          =& ${m-2}\\times${g[m-2].fmt()} - ${fmt(sprime)}\\times${c[1].fmt()} \\cr
          =& ${d[2].fmt(true)}
    }`
    MathJax.Hub.getAllJax("d2")[0].Text(jax);

    for (i=3; i<m; i++)
    {
      a[i] = b[i-1].add(a[i-1].mul(r));
      jax = `a_${i} = b_${i-1}+ra_${i-1} = ${a[i].fmt(true)}`
      MathJax.Hub.getAllJax("a"+i)[0].Text(jax);

      b[i] = g[m-i].sub(a[i-1].mul(sprime));
      jax = `b_${i} = A_${m-i} +iB_${m-i} - s'a_${i-1} = ${b[i].fmt(true)}`;
      MathJax.Hub.getAllJax("b"+i)[0].Text(jax);
  
      c[i] = d[i-1].add(c[i-1].mul(r));
      jax = `c_${i} = d_${i-1}+rc_${i-1} = ${c[i].fmt(true)}`;
      MathJax.Hub.getAllJax("c"+i)[0].Text(jax);

      d[i] = g[m-i].mul(m-i).sub(c[i-1].mul(sprime));
      jax = `d_${i} = ${m-i}\\times(A_${m-i}+iB_${m-i}) - s'c_${i-1} = ${d[i].fmt(true)}`;
      MathJax.Hub.getAllJax("d"+i)[0].Text(jax);
    }

    i = m;
    a[i] = b[i-1].add(a[i-1].mul(r));
    jax = `a_${i} = b_${i-1}+ra_${i-1} = ${a[i].fmt(true)}`
    MathJax.Hub.getAllJax("a"+i)[0].Text(jax);

    b[i] = g[m-i].sub(a[i-1].mul(sprime));
    jax = `b_${i} = g_0 - s'a_${i-1} = ${b[i].fmt(true)}`;
    MathJax.Hub.getAllJax("b"+i)[0].Text(jax);

    const xyprime = new Complex(xprime, yprime);
    const xy = xyprime.mul(a[6]).add(b[6]).mul(R);
    jax = `\\eqalign{
      x+i\\,y =& ${fmt(R,true,0)}\\times[${xyprime.fmt()}${a[6].fmt()}+ \\cr
               & ${b[6].fmt()}] \\cr
              =& ${xy.fmt(true)}
    }`
    MathJax.Hub.getAllJax("xy")[0].Text(jax);

    const x = xy.re;
    MathJax.Hub.getAllJax("x")[0].Text(`x = ${fmt(x,true,8)}\\text{ units}`);
    document.getElementById("x_inv_in").value = fmt(x, true, 8);

    const y = xy.im;
    MathJax.Hub.getAllJax("y")[0].Text(`y = ${fmt(y,true,8)} \\text{ units}`);
    document.getElementById("y_inv_in").value = fmt(y, true, 8);

    const f2f1 = xyprime.mul(c[5]).add(d[5]);
    jax = `\\eqalign{
      F_2+i\\,F_1 =& ${xyprime.fmt()}${c[5].fmt()} + \\cr
                   & ${d[5].fmt()} \\cr
                  =& ${f2f1.fmt(true)} 
    }`
    MathJax.Hub.getAllJax("f2f1")[0].Text(jax);

    const k = f2f1.abs()*kprime;
    jax =`\\eqalign{
      k &= [${fmt(f2f1.re)}^2 + ${fmt(f2f1.im)}^2]^{1/2}\\times${fmt(kprime)} \\cr
        &= ${fmt(k,true)} 
    }`
    MathJax.Hub.getAllJax("k")[0].Text(jax);

    this.set_inv ()
  },

  set_inv () {
    const {A, B, R, m, phi1, lam0} = this;

    const x = +document.getElementById("x_inv_in").value;
    const y = +document.getElementById("y_inv_in").value;

    let xprime = x/R;
    let jax = `x' = ${fmt(x,true,0)}/${fmt(R,true,0)}`;
    MathJax.Hub.getAllJax("xprime_inv")[0].Text(jax);

    let yprime = y/R;
    jax = `y' = ${fmt(y,true,0)}/${fmt(R,true,0)}`;
    MathJax.Hub.getAllJax("yprime_inv")[0].Text(jax);

    let r, sprime, xyprime, xy, fxy, f2f1, deltaxy,
      g = new Array(m+1), 
      a = new Array(m+1), 
      b = new Array(m+1), 
      c = new Array(m+1),
      d = new Array(m+1);

    g[0] = new Complex;
    for (i=1; i<=m; i++)
      g[i] = new Complex(A[i-1], B[i-1]);

    a[1] = g[m];
    b[1] = g[m-1];
    c[1] = g[m].mul(m);
    d[1] = g[m-1].mul(m-1);

    //iterative function
    const iter_func = (xprime, yprime) => {
      r = 2*xprime;
      sprime = xprime**2 + yprime**2;
      for (i=2; i<m; i++)
      {
        a[i] = b[i-1].add(a[i-1].mul(r));
        b[i] = g[m-i].sub(a[i-1].mul(sprime));
        c[i] = d[i-1].add(c[i-1].mul(r));
        d[i] = g[m-i].mul(m-i).sub(c[i-1].mul(sprime));
      }
      i = m;
      a[i] = b[i-1].add(a[i-1].mul(r));
      b[i] = g[m-i].sub(a[i-1].mul(sprime));
      xyprime = new Complex(xprime,yprime);
      xy = new Complex(x, y);
      fxy = xyprime.mul(a[6]).add(b[6]).sub(xy.div(R));
      f2f1 = xyprime.mul(c[5]).add(d[5]);
      deltaxy = fxy.div(f2f1).mul(-1);
    }

    iter_func(xprime,yprime);

    jax = `a_6 = ${a[6].fmt(true)}`;
    MathJax.Hub.getAllJax("a6_inv")[0].Text(jax);
    jax = `b_6 = ${b[6].fmt(true)}`;
    MathJax.Hub.getAllJax("b6_inv")[0].Text(jax);
    jax = `c_5 = ${c[5].fmt(true)}`;
    MathJax.Hub.getAllJax("c5_inv")[0].Text(jax);
    jax = `d_5 = ${d[5].fmt(true)}`;
    MathJax.Hub.getAllJax("d5_inv")[0].Text(jax);
    
    jax = `\\eqalign {
      f(x'+i\\,y') =& ${xyprime.fmt()}${a[6].fmt()} +\\cr
                    & ${b[6].fmt()} - ${xy.fmt()}/${fmt(R,true,0)} \\cr
                   =& ${fxy.fmt(true)} 
    }`
    MathJax.Hub.getAllJax("fxy_inv")[0].Text(jax);

    jax = `\\eqalign{
      F_2+i\\,F_1 =& ${xyprime.fmt()}${c[5].fmt()} + \\cr
                   & ${d[5].fmt()} \\cr
                  =& ${f2f1.fmt(true)} 
    }`
    MathJax.Hub.getAllJax("f2f1_inv")[0].Text(jax);

    jax = `\\eqalign{
      \\Delta(x'+i\\,y') &= -${fxy.fmt()}/${f2f1.fmt()} \\cr
                         &= ${deltaxy.fmt(true)}
    }`
    MathJax.Hub.getAllJax("deltaxy_inv")[0].Text(jax);

    let xyprime_new = xyprime.add(deltaxy);
    jax = `\\eqalign{
      (x'+i\\,y') &= ${xyprime.fmt()}+${deltaxy.fmt()} \\cr
                  &= ${xyprime_new.fmt(true)}
    }`
    MathJax.Hub.getAllJax("xyprime_inv_1")[0].Text(jax);

    for(i=0; i<5 && deltaxy.abs() > 1e-8; i++)
    {
      iter_func (xyprime_new.re, xyprime_new.im);
      xyprime_new = xyprime.add(deltaxy);
    }

    xprime = xyprime_new.re;
    yprime = xyprime_new.im;
    MathJax.Hub.getAllJax("xprime_inv_f")[0].Text(`x' = ${fmt(xprime,true,9)}`);
    MathJax.Hub.getAllJax("yprime_inv_f")[0].Text(`y' = ${fmt(yprime,true,9)}`);

    const rho = Math.sqrt(xprime**2+yprime**2);
    jax = `\\eqalign{
      \\rho &= [${fmt(xprime)}^2 + ${fmt(yprime)}^2]^{1/2} \\cr
            &= ${fmt(rho,true)}
    }`
    MathJax.Hub.getAllJax("rho_inv")[0].Text(jax);

    const cc = 2*Math.atan(rho/2);
    jax = `\\eqalign{
      c &= 2\\arctan(${fmt(rho)}/2) \\cr
        &= ${deg(cc,true)}
    }`
    MathJax.Hub.getAllJax("c_inv")[0].Text(jax);

    const phi = Math.asin(Math.cos(cc)*Math.sin(phi1)+yprime*Math.sin(cc)*Math.cos(phi1)/rho);
    jax = `\\eqalign{
      \\phi =& \\arcsin[\\cos${deg(cc)}\\sin${deg(phi1)} +${fmt(yprime)}\\times \\cr
             & \\sin${deg(cc)}\\cos${deg(phi1)}/${fmt(rho)}] \\cr
            =& ${deg(phi,true)} 
    }`
    MathJax.Hub.getAllJax("phi_inv")[0].Text(jax);

    const lam = lam0+Math.atan2(xprime*Math.sin(cc), rho*Math.cos(phi1)*Math.cos(cc)-yprime*Math.sin(phi1)*Math.sin(cc));
    jax = `\\eqalign{
      \\lambda =& ${deg(lam0,true)}+\\arctan[${fmt(xprime)}\\sin${deg(cc)}/(${fmt(rho)} \\cr
                & \\cos${deg(phi1)}\\cos${deg(cc)} - ${fmt(yprime)}\\sin${deg(phi1)}\\sin${deg(cc)})]\\cr
               =& ${deg(lam, true)} 
    }`
    MathJax.Hub.getAllJax("lam_inv")[0].Text(jax);
  }
}