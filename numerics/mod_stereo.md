---
title: Numerical Examples - Modified Stereographic Conformal Projection
menuTitle: Modified Stereographic
weight: 190
description: Numerical examples for Modified Stereographic Conformal projection
mathjax: 2
css: numerics.css
date: 2024-03-09
lastmod: 2024-03-09
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/mod_stereo.js"> </script>
{{</rawHTML>}}

# Numerical Examples for Modified Stereographic Conformal Projection 

## SPHERE
### Forward Equations
Given[^1]

[^1]: Some of parameters for this projection are fixed

<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_in" value="1.0" size="5" /> unit</td>
</tr>
<tr>
  <td>Order of equation:</td>
  <td>$m=\;\;6$</td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_1=\;64.0^\circ$</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;-152.0^\circ$</td>
</tr>
<tr>
  <td>Constants<br/> $A_1-A_m$<br/>
  $B_1-B_m$</td>
  <td>
  
  See [Table 33]({{<relref "sect_26#table33">}}), using constants for sphere.

  </td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_in" value="60" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_in" value="-150.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>

Find $x, y, k$

Using equations [(26-1)]({{<relref "sect_26#26-1">}}) through [(26-3)]({{<relref "sect_26#26-3">}}) in order,
{{<math div="kprime">}}
\eqalign{
  k' &= 2/\{1+\sin64^\circ\sin60^\circ+\cos64^\circ\cos60^\circ\cos[-150^\circ - (-152^\circ)]\}\cr
      &= 1.0012864 
}
{{</math>}}
{{<math div="xprime">}}
\eqalign{
  x' &= 1.0012864\cos60^\circ\sin[-150^\circ-(-152^\circ)] \cr
      &= 0.0174722
}
{{</math>}}
{{<math div="yprime">}}
\eqalign{
  y' &= 1.0012864\{ \cos64^\circ\sin60^\circ - \sin64^\circ\cos60^\circ\cos[-150^\circ-(-152^\circ)]  \} \cr
      &= -0.0695721
}
{{</math>}}
Using equations in [(26-6)]({{<relref "sect_26#26-6">}}), with $j = 2$, in order,
{{<math div="r">}}
\eqalign{
  r &= 2\times0.0174722 \cr
    &= 0.0349444
}
{{</math>}}
{{<math div="sprime">}}
\eqalign{
  s' &= 0.0174722^2 + (-0.0695721)^2 \cr
      &= 0.0051456
}
{{</math>}}
{{<math div="g0">}}
g_0 = 0
{{</math>}}
{{<math div="a1">}}
\eqalign{
  a_1 &= A_6 + B_6\,i \cr
      &= 0.3660976-0.2937382\,i
}
{{</math>}}
{{<math div="b1">}}
\eqalign{
  b_1 &= A_5 + B_5\,i \cr
      &= 0.0636871-0.1408027\,i
}
{{</math>}}
{{<math div="c1">}}
\eqalign{
  c_1 &= 6.0\times(0.3660976-0.2937382\,i) \cr
      &= 2.1965856-1.7624292\,i
}
{{</math>}}
{{<math div="d1">}}
\eqalign{
  d_1 &= 5.0\times(0.0636871-0.1408027\,i) \cr
      &= 0.3184355-0.7040135\,i
}
{{</math>}}
{{<math div="a2">}}
\eqalign{
  a_2 =& b_1 + ra_1 \cr
      =& (0.0636871-0.1408027\,i)+0.0349444\times(0.3660976-0.2937382\,i) \cr
      =& 0.0764802-0.1510672\,i
}
{{</math>}}
{{<math div="b2">}}
\eqalign{
  b_2 =& A_4 +iB_4 - s'a_1\cr
      =& (-0.0153783-0.1968253\,i)-0.0051456\times(0.3660976-0.2937382\,i) \cr
      =& -0.0172621-0.1953139\,i
}
{{</math>}}
{{<math div="c2">}}
\eqalign{
  c_2 =& d_1 + rc_1 \cr
      =& (0.3184355-0.7040135\,i)+0.0349444\times(2.1965856-1.7624292\,i) \cr
      =& 0.3951938-0.7656005\,i
}
{{</math>}}
{{<math div="d2">}}
\eqalign{
  d_2 =& 4\times(A_4+iB_4) - s'c_1 \cr
      =& 4.0\times(-0.0153783-0.1968253\,i) - 0.0051456\times(2.1965856-1.7624292\,i) \cr
      =& -0.0728158-0.7782325\,i
}
{{</math>}}
Incrementing $j$ to 3,4, and 5 for the four variables $a_j,b_j,c_j, \text{ and } d_j$ in the same set of equations,
{{<math div="a3">}}
a_3 = b_2+ra_2 = -0.0145895-0.2005928\,i
{{</math>}}
{{<math div="b3">}}
b_3 = A_3 +iB_3 - s'a_2 = 0.0070671+0.0055898\,i
{{</math>}}
{{<math div="c3">}}
c_3 = d_2+rc_2 = -0.0590060-0.8049860\,i
{{</math>}}
{{<math div="d3">}}
d_3 = 3\times(A_3+iB_3) - s'c_2 = 0.0203483+0.0183769\,i
{{</math>}}
{{<math div="a4">}}
a_4 = b_3+ra_3 = 0.0065572-0.0014198\,i
{{</math>}}
{{<math div="b4">}}
b_4 = A_2 +iB_2 - s'a_3 = 0.0053264-0.0030853\,i
{{</math>}}
{{<math div="c4">}}
c_4 = d_3+rc_3 = 0.0182864-0.0097528\,i
{{</math>}}
{{<math div="d4">}}
d_4 = 2\times(A_2+iB_2) - s'c_3 = 0.0108062-0.0040929\,i
{{</math>}}
{{<math div="a5">}}
a_5 = b_4+ra_4 = 0.0055555-0.0031350\,i
{{</math>}}
{{<math div="b5">}}
b_5 = A_1 +iB_1 - s'a_4 = 0.9972186+0.0000073\,i
{{</math>}}
{{<math div="c5">}}
c_5 = d_4+rc_4 = 0.0114452-0.0044337\,i
{{</math>}}
{{<math div="d5">}}
d_5 = 1\times(A_1+iB_1) - s'c_4 = 0.9971582+0.0000502\,i
{{</math>}}
Incrementing $j$ to 6 for $a_i \text{ and } b_j$ only,
{{<math div="a6">}}
a_6 = b_5+ra_5 = 0.9974127-0.0001022\,i
{{</math>}}
{{<math div="b6">}}
b_6 = g_0 - s'a_5 = -0.0000286+0.0000161\,i
{{</math>}}
Using equations [(26-7)]({{<relref "sect_26#26-7">}}) through [(26-9)]({{<relref "sect_26#26-9">}}) in order, and with the relationship $i^2 = -1$,
{{<math div="xy">}}
\eqalign{
  x+i\,y =& 1.0\times[(0.0174722-0.0695721\,i)(0.9974127-0.0001022\,i)+ \cr
            & (-0.0000286+0.0000161\,i)] \cr
          =& 0.0173913-0.0693777\,i
}
{{</math>}}
{{<math div="x">}}
x = 0.01739129\text{ units}
{{</math>}}
{{<math div="y">}}
y = -0.06937775 \text{ units}
{{</math>}}
{{<math div="f2f1">}}
\eqalign{
  F_2+i\,F_1 =& (0.0174722-0.0695721\,i)(0.0114452-0.0044337\,i) + \cr
                & (0.9971582+0.0000502\,i) \cr
              =& 0.9970497-0.0008236\,i 
}
{{</math>}}
{{<math div="k">}}
\eqalign{
  k &= [0.9970497^2 + (-0.0008236)^2]^{1/2}\times1.0012864 \cr
    &= 0.9983327 
}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given: $R,m, \phi_1, \lambda_0, A_1-A_6,\text{ and }B_1-B_6,$ for forward example

<table id="params" class="markdown">
<tr>
  <td>Point:</td>
  <td>$x=\;$<input id="x_inv_in" value="0.01739129" size="9"/> units</td>
</tr>
<tr>
  <td></td>
  <td>$y=\;$<input id="y_inv_in" value="-0.06937775" size="9"/> units</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</tr>
</table>

Find $\phi, \lambda$

Using the Knuth algorithm equations [(26-6)]({{<relref "sect_26#26-6">}}) with [(26 -10)]({{<relref "sect_26#26-10">}}), [(26-13)]({{<relref "sect_26#26-13">}}), and [(26-8)]({{<relref "sect_26#26-8">}}),
but not in that order, the first trial{{<math span="xprime_inv">}}x' = 0.0173913/1.0{{</math>}}and{{<math span="yprime_inv">}}y' = -0.0693777/1.0{{</math>}}. Except for the values of $x'$ and $y'$,equations [(26-6)]({{<relref "sect_26#26-6">}}) are used in the same manner as they were in the forward example, resulting in
{{<math div="a6_inv">}}
a_6 = 0.9974119-0.0001021\,i
{{</math>}}
{{<math div="b6_inv">}}
b_6 = -0.0000284+0.0000161\,i
{{</math>}}
{{<math div="c5_inv">}}
c_5 = 0.0114414-0.0044528\,i
{{</math>}}
{{<math div="d5_inv">}}
d_5 = 0.9971586+0.0000493\,i
{{</math>}}

Using equations [(26-13)]({{<relref "sect_26#26-13">}}), [(26-8)]({{<relref "sect_26#26-8">}}), and [(26-10)]({{<relref "sect_26#26-10">}}) in order,
{{<math div="fxy_inv">}}
\eqalign {
  f(x'+i\,y') =& (0.0173913-0.0693777\,i)(0.9974119-0.0001021\,i) +\cr
                & (-0.0000284+0.0000161\,i) - (0.0173913-0.0693777\,i)/1.0 \cr
                =& -0.0000805+0.0001938\,i 
}
{{</math>}}
{{<math div="f2f1_inv">}}
\eqalign{
  F_2+i\,F_1 =& (0.0173913-0.0693777\,i)(0.0114414-0.0044528\,i) + \cr
                & (0.9971586+0.0000493\,i) \cr
              =& 0.9970487-0.0008219\,i 
}
{{</math>}}
{{<math div="deltaxy_inv">}}
\eqalign{
  \Delta(x'+i\,y') &= -(-0.0000805+0.0001938\,i)/(0.9970487-0.0008219\,i) \cr
                      &= 0.0000809-0.0001943\,i
}
{{</math>}}
The division in equation [(26-10)]({{<relref "sect_26#26-10">}}) uses the relationship that
$$
(a + b\\,i)/(c + d\\,i) = (ac + bd)/(c^2 + d^2) + [(bc-ad)/(c^2 + d^2)]\\,i
$$

Adding $\Delta (x' + iy') \text{ to } (x' + i y')$,
{{<math div="xyprime_inv_1">}}
\eqalign{
  (x'+i\,y') &= (0.0173913-0.0693777\,i)+(0.0000809-0.0001943\,i) \cr
              &= 0.0174722-0.0695720\,i
}
{{</math>}}
Repeating the above steps with the new values of $(x', y')$ until the value of $|\Delta(x'+i\\,y')|$ is 0 to eight decimal places.

Finally,  
{{<math div="xprime_inv_f">}}
x' = 0.017472205
{{</math>}}
{{<math div="yprime_inv_f">}}
y' = -0.069572049
{{</math>}}

Equations [(26-14)]({{<relref "sect_26#26-14">}}) through [(26-17)]({{<relref "sect_26#26-17">}}) may be used in order,
{{<math div="rho_inv">}}
\eqalign{
  \rho &= [0.0174722^2 + (-0.0695720)^2]^{1/2} \cr
        &= 0.0717325
}
{{</math>}}
{{<math div="c_inv">}}
\eqalign{
  c &= 2\arctan(0.0717325/2) \cr
    &= 4.1082071^\circ
}
{{</math>}}
{{<math div="phi_inv">}}
\eqalign{
  \phi =& \arcsin[\cos4.1082071^\circ\sin64^\circ +(-0.0695720)\times \cr
          & \sin4.1082071^\circ\cos64^\circ/0.0717325] \cr
        =& 60.0000026^\circ 
}
{{</math>}}
{{<math div="lam_inv">}}
\eqalign{
  \lambda =& -152^\circ+\arctan[0.0174722\sin4.1082071^\circ/(0.0717325 \cr
            & \cos64^\circ\cos4.1082071^\circ - (-0.0695720)\sin64^\circ\sin4.1082071^\circ)]\cr
            =& -149.9999987^\circ 
}
{{</math>}}

