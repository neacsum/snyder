---
title: Numerical Examples - Cassini Projection
weight: 60
description: Numerical examples for Cassini projection
mathjax: 2
css: numerics.css
menuTitle: Cassini
date: 2023-04-15
lastmod: 2024-02-16
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/cassini.js"> </script>
{{</rawHTML>}}
# Numerical Examples for Cassini Projection
## SPHERE
### Forward Equations
Given
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_sph_in" value="1.0" size="5" /> unit</td>
</tr>
<tr>
  <td>Origin:</td>
  <td>$\phi_0=\;$<input id="phi0_sph_in" value="-20" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;$<input id="lam0_sph_in" value="-75" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sph_in" value="25.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lambda_sph_in" value="-90.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}

Find $x, y$
Using equations [(8-5)]({{<relref "sect_13#8-5">}}), and [(13-1)]({{<relref "sect_13#13-1">}}) through [(13-3)]({{<relref "sect_13#13-5">}}) in order,

{{<math div="b_sph">}}
\eqalign{
  B &= \cos25^\circ\sin[(-90^\circ)-(-75^\circ)] \cr
    &= -0.2345697
}
{{</math>}}
{{<math div="x_sph">}}
\eqalign{
  x &= 1.0\times \arcsin(-0.2345697) \times \pi/180^\circ \cr
    &= -0.2367759\;\text{units}
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y &= 1.0\times \{\arctan[\tan 25^\circ/\cos[(-90^\circ)-(-75^\circ)]]-(-20^\circ)\}\times\pi/180^\circ \cr
    &= 1.0\times 45.7692621^\circ\times\pi/180^\circ = 0.7988243\;\text{units}
}
{{</math>}}
{{<math div="h_sph">}}
\eqalign{
  h' &= 1/[1-(-0.2345697)^2]^{1/2} \cr
      &= 1.0287015
}
{{</math>}}

### Inverse Equations
Inversing forward example:
Given: $R, \phi_0, \lambda_0$, for forward example
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_sph_in" value="-0.2367759" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_sph_in" value="0.7988243" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

Using equations [(13-6)]({{<relref "sect_13#13-6">}}), [(13-4)]({{<relref "sect_13#13-4">}}), and [(13-5)]({{<relref "sect_13#13-5">}}) in order,

{{<math div="d_sph">}}
\eqalign{
  D &=(0.7988243/1.0)\times 180^\circ/\pi+(-20^\circ) \cr
    &= 25.7692610^\circ
}
{{</math>}}
{{<math div="phi_sph">}}
\eqalign{
  \phi &=\arcsin\{\sin 25.7692610^\circ\cos[((-0.2367759)/1.0)\times 180^\circ/\pi] \} \cr
        &=\arcsin 0.4226182 \cr
        &= 24.9999989^\circ
}
{{</math>}}
{{<math div="lam_sph">}}
\eqalign{
  \lambda &= -75^\circ+\arctan\{\tan[(-0.2367759/1.0)\times 180^\circ/\pi]\} \cr
            &= -75^\circ + \arctan (-0.2679492) \cr
            &= -75^\circ + (-14.9999992^\circ) = -89.9999992^\circ
}
{{</math>}}

## ELLIPSOID
### Forward equations
{{< rawHTML >}}
Given: <br/>
<table>
  <tr>
    <td>
      <select id="ell" onchange="ell.select(this.options[this.selectedIndex].value)")>
        <option value="0" selected>Clarke 1866</option>
        <option value="1">WGS-84</option>
      </select>
      ellipsoid
    </td>
    <td id="ell_a">$a=6378206.4\,\text{m}$</td>
  </tr>
  <tr>
    <td></td>
    <td id="ell_e2">$e^2=0.00676866$</td>
  </tr>
  <tr>
    <td style="text-align:right">or</td>
    <td id="ell_e">$e=0.0822719$</td>
  </tr>
  <tr>
    <td>Origin:</td>
    <td>$\phi_0=\;$<input id="phi0_ell_in" value="40.0" size="5"/>&deg;</td>
  </tr>
  <tr>
    <td></td>
    <td>$\lambda_0=\;$<input id="lam0_ell_in" value="-75.0" size="5"/>&deg;</td>
  </tr>
  <tr>
    <td>Point:</td>
    <td>$\phi=$<input id="phi_ell_in" value="43" size="5">&deg;</td>
  </tr>
    <td></td>
    <td>$\lambda=$<input id="lam_ell_in" value="-73.0" size="5">&deg;</td>
  </tr>
  <tr>
    <td></td>
    <td><input type="button" value="Set" onclick="ell.set_fwd()"></td>
  </tr>
</table>
{{</rawHTML>}}
Find: $x, y, s$ at $Az =$ <input id="az_ell_in" value="30.0" size="5">&deg;&nbsp;&nbsp;<input type="button" value="Set" onclick="ell.set_fwd()">

Using equations [(4-20)]({{<relref "sect_13#4-20">}}), [(8-13)]({{<relref "sect_13#8-13">}}), [(8-15)]({{<relref "sect_13#8-15">}}), [(8-14)]({{<relref "sect_13#8-14">}}), and [(3-21)]({{<relref "sect_13#3-21">}}) in order,
{{<math div="N_ell">}}
\eqalign{
  N &= 6378206.4/(1-0.0067687\times \sin^243^\circ)^{1/2} \cr
    &= 6388270.27\;\text{m}
}
{{</math>}}
{{<math div="T_ell">}}
T = \tan^2 43^\circ = 0.8695844
{{</math>}}
{{<math div="A_ell">}}
\eqalign{
  A &= [(-73^\circ)-(-75^\circ)]\times(\pi/180^\circ)\times\cos43^\circ\cr
    &= 0.0255291
}
{{</math>}}
{{<math div="C_ell">}}
\eqalign{
  C &= 0.0067687\times\cos^2 43^\circ/(1-0.0067687) \cr
    &= 0.0036451
}
{{</math>}}
{{<math div="M_ell">}}
\begin{align}
M =& 6378206.4\times[(1-0.0067687/4-3\times 0.0067687^2/64 \cr
   &- 5\times 0.0067687^3/256)\times 43^\circ\times\pi/180^\circ \cr
   &-(3\times 0.0067687/8+3\times 0.0067687^2/32 +45\times0.0067687^3/1024)\sin(2\times43^\circ) \cr
   &+(15\times 0.0067687^2/256 +45\times 0.0067687^3/1024)\sin(4\times 43^\circ) \cr
   &-(35\times 0.0067687^3/3072)\sin(6\times43^\circ)] \cr
  =& 4762504.81\;\text{m}
\end{align}
{{</math>}}
Substituting <span id="phi0_ell">$40^\circ$</span> for <span id="phi_ell">$43^\circ$</span>  in equation [(3-21)]({{<relref "sect_13#3-21">}}),
{{<math div="M0_ell">}}
M_0 = 4429318.90\;\text{m}
{{</math>}}
Using equations [(13-7)]({{<relref "sect_13#13-7">}}) through [(13-9)]({{<relref "sect_13#13-9">}}) in order
{{<math div="x_ell">}}
\eqalign{
  x =& 6388270.27\times[0.0255291-0.8695844\times0.0255291^3/6 \cr
     & -(8-0.8695844+8\times0.0036451)\times0.8695844\cr
     & \times0.0255291^5/120] \cr
    =& 163071.13\;\text{m}     
}
{{</math>}}
{{<math div="y_ell">}}
\eqalign{
  y =& 4762504.81 - 4429318.90 + 6388270.27\times \tan 43^\circ \cr
     & \times[0.0255291^2/2+(5-0.8695844+6\times0.0036451) \cr
     & \times 0.0255291^4/24] \cr
    =& 335127.59\;\text{m}
}
{{</math>}}
{{<math div="s_ell">}}
\eqalign{
  s =& 1+ 163071.13^2\cos^230^\circ\times(1-0.0067687\times\sin^243^\circ)^2/ \cr
     & [2\times 6378206.4^2 \times(1-0.0067687)] \cr
    =& 1.0002452 
}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given: $a, e, \phi_0, \lambda_0$ for forward example,
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="163071.13" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="335127.59" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

Calculating $M_0$ from equation [(3-21)]({{<relref "sect_13#3-21">}}) as in the forward example for <span id="phi0_ell_inv">$\phi_0 = 40^\circ$</span>
{{<math div="M0_ell_inv">}}
M_0 = 4429318.90\;\text{m}
{{</math>}}
Using equations [(13-12)]({{<relref "sect_13#13-12">}}), [(7-19)]({{<relref "sect_13#7-19">}}), and [(3-24)]({{<relref "sect_13#3-24">}}) in order,
{{<math div="M1_ell_inv">}}
\eqalign{
  M_1 &= 4429318.90 + 335127.59 \cr
      &= 4764446.49\;\text{m}
}
{{</math>}}
{{<math div="mu1_ell_inv">}}
\eqalign{
  \mu_1 =& 4764446.49/[6378206.40\times (1-0.0067687/4 \cr
          & -3\times0.0067687^2/64 -5\times0.0067687^3/256)] \cr
          =& 0.7482562\;\text{radians} = 42.8719240^\circ 
}
{{</math>}}
{{<math div="e1_ell_inv">}}
\eqalign{
  e_1 &= [1-(1-0.0067687)^{1/2}]/[1-(1-0.0067687)^{1/2}] \cr
      &= 0.001697916
}
{{</math>}}
Using equations [(3-26)]({{<relref "sect_13#3-26">}}), [(8-22)]({{<relref "sect_13#8-22">}}), [(8-23)]({{<relref "sect_13#8-23">}}), [(8-24)]({{<relref "sect_13#8-24">}}), and [(13-13)]({{<relref "sect_13#13-13">}}) in order,
{{<math div="phi1_ell_inv">}}
\eqalign{
  \phi_1 =& 42.8719240^\circ + \cr
            &[(3\times0.001697916/2-27\times0.001697916^3/32)\sin(2\times42.8719240^\circ) \cr
            &+(21\times0.001697916^2/16-55\times0.001697916^4/32)\sin(4\times42.8719240^\circ) \cr
            &+(151\times0.001697916^3/96)\sin(6\times42.8719240^\circ) \cr
            &+(1097\times0.001697916^4/512)\sin(8\times42.8719240^\circ)]\times 180^\circ/\pi \cr
          =& 43.0174782^\circ 
}
{{</math>}}
{{<math div="t1_ell_inv">}}
\eqalign {
  T_1 &= \tan^243.0174782^\circ \cr
      &= 0.8706487
}
{{</math>}}
{{<math div="n1_ell_inv">}}
\eqalign{
  N_1 &= 6378206.4/(1-0.0067687\sin^243.0174782^\circ)^{1/2} \cr
      &= 6388276.87\;\text{m}
}
{{</math>}}
{{<math div="r1_ell_inv">}}
\eqalign{
  R_1 &= 6378206.40(1-0.0067687)/(1-0.0067687\sin^243.0174782^\circ)^{3/2} \cr
      &= 6365088.80\;\text{m}
}
{{</math>}}
{{<math div="d_ell_inv">}}
\eqalign{
  D &= 163071.13/6388276.87 \cr
    &= 0.0255266
}
{{</math>}}
Using equations [(13-10)]({{<relref "sect_13#13-10">}}) and [(13-11)]({{<relref "sect_13#13-11">}}) in order,
{{<math div="phi_ell_inv">}}
\eqalign{
  \phi =& 43.0174782^\circ-(6388276.87\tan43.0174782^\circ/6365088.80) \cr
          & \times [0.0255266^2/2-(1+3\times0.8706487)\times0.0255266^4/24)]\times 180^\circ/\pi \cr
        =& 42.9999951^\circ 
}
{{</math>}}
{{<math div="lam_ell_inv">}}
\eqalign{
  \lambda =& -75^\circ + \{[0.0255266-0.8706487\times0.0255266^3 \cr
            & + (1+3\times0.8706487)\times0.8706487\times0.0255266^5/15]/ \cr
            & \cos 43.0174782^\circ\}\times180^\circ/\pi \cr
            =& -73^\circ
}
{{</math>}}

