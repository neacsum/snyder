---
title: Numerical Examples - Bipolar Oblique Conic Conformal Projection
weight: 100
description: Numerical examples for Bipolar Oblique Conic Conformal projection
mathjax: 2
css: numerics.css
menuTitle: Bipolar Oblique Conic Conformal
date: 2023-08-25
lastmod: 2024-01-24
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/bocc.js"> </script>
{{</rawHTML>}}


# Numerical Examples for Bipolar Oblique Conic Conformal Projection 

## SPHERE
### Forward Equations
This example will illustrate equations [(17-14)]({{<ref "sect_17#17-14">}}) through [(17-23)]({{<ref "sect_17#17-23">}}), assuming prior calculation of the constants from equations [(17-1)]({{<ref "sect_17#17-1">}}) through [(17-13)]({{<ref "sect_17#17-13">}}).
Given
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_in" value="6370997.0" size="9" /> m</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_in" value="40.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_in" value="-90.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}

Find $x, y, k$

$$
$$
From equations [(17-14)]({{<ref "sect_17#17-14">}}) and [(17-15)]({{<ref "sect_17#17-15">}})
{{<math div="z_b">}}
\eqalign{
  z_B &= \arccos\{\sin 45^\circ\sin 40^\circ+\cos 45^\circ\cos 40^\circ\cos[(-19.9933333^\circ)-(-90^\circ)]\} \cr
      &= 50.2287516^\circ
}
{{</math>}}
{{<math div="Az_b">}}
\eqalign{
  Az_B &= \arctan\lbrace\sin[(-19.9933333^\circ)-(-90^\circ)]/[\cos 45^\circ\tan40^\circ-\sin 45^\circ\cos((-19.9933333^\circ)-(-90^\circ))]\rbrace \cr
        &= 69.4885512^\circ
}
{{</math>}}

{{<rawHTML>}}
<div id="bproj">
{{</rawHTML>}}
Since <span id="Az_b1">$69.48856^\circ$</span> is less than $104.42834^\circ$, proceed to equation [(17-16)]({{<ref "sect_17#17-16">}}).

From equations [(17-16)]({{<ref "sect_17#17-16">}}) through [(17-22)]({{<ref "sect_17#17-22">}}),
{{<rawHTML>}}
</div>
<div id="aproj" style="display:none">
{{</rawHTML>}}
Since <span id="Az_b2">$120^\circ$</span> is greater than $104.42834^\circ$, proceed to equation [(17-23)]({{<ref "sect_17#17-23">}}).  
{{<math div="z_a">}}
\eqalign{
  z_A &= \arccos\{\sin(-20^\circ)\sin(-5^\circ) + \cos(-20^\circ)\cos(-5^\circ)\cos[(-90^\circ) + 110^\circ]\} \cr
      &= 24.5676399^\circ
}
{{</math>}}
{{<math div="Az_a">}}
\eqalign{
  Az_A &= \arctan\{\sin((-90^\circ)+110^\circ)/[\cos(-20^\circ)\tan (-5^\circ)-\sin(-20^\circ)\cos((-90^\circ)+110^\circ)] \} \cr
        &= 55.0341561^\circ
}
{{</math>}}
{{<rawHTML>}}
</div>
{{</rawHTML>}}

{{<math div="rho">}}
\eqalign{
  \rho_B &= 1.8972474\times6370997.0\tan^{0.6305584}(½\times 50.2287516^\circ) \cr
          &= 7496092.0\;\text{m}
}
{{</math>}}
{{<math div="k">}}
\eqalign{
  k &= 7496092.0\times0.6305584/(6370997.0\sin 50.2287516^\circ) \cr
    &= 0.9652723
}
{{</math>}}
{{<math div="alpha">}}
\eqalign{
  \alpha &= \arccos\{ [\tan^{0.6305584}(½\times 50.2287516^\circ) + \tan^{0.6305584}½(104^\circ - 50.2287516^\circ)]/1.2724658 \} \cr
          &= 1.8750582^\circ
}
{{</math>}}
{{<math div="expr1">}}
n(Az_BA-Az_B) = 0.6305584\times(104.4283332^\circ-69.4885512^\circ) = 22.0315747^\circ
{{</math>}}

{{<rawHTML>}}
  <div id="rhobprime1">
{{</rawHTML>}}
This is greater than $\alpha$, so $\rho'_B = \rho_B$.
{{<rawHTML>}}
  </div>
  <div id="rhobprime2" style="display:none">
{{</rawHTML>}}
This is less than $\alpha$, so,
{{<math div="rhobprime">}}
{{</math>}}
{{<rawHTML>}}
  </div>
{{</rawHTML>}}

{{<math div="xprime">}}
\eqalign{
  x' &= 7496092.0\sin[0.6305584(104.4283332^\circ-69.4885512^\circ)] \cr
      &= 2811915.2\;\text{m}
}
{{</math>}}
{{<math div="yprime">}}
\eqalign{
  y' =& 7496092.0\cos[0.6305584(104.4283332^\circ-69.4885512^\circ)] \cr
      &- 1.2070912 \times 6370997.0 \cr
      =& -741667.6\;\text{m}
}
{{</math>}}

From equations [(17-32)]({{<ref "sect_17#17-32">}}) and [(17-33)]({{<ref "sect_17#17-33">}}),
{{<math div="x">}}
\eqalign{
  x &= -2811915.2\cos 45.8199707^\circ -(-741667.6)\sin 45.8199707^\circ \cr
    &= -1427776.8\;\text{m}
}
{{</math>}}
{{<math div="y">}}
\eqalign{
  y &= -(-741667.6)\cos 45.8199707^\circ + 2811915.2\sin 45.8199707^\circ \cr
    &= 2533454.4\;\text{m}
}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given: $R$, for forward example
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_in" value="-1427776.8" size="9"/> m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_in" value="2533454.4" size="9"/> m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

From equations [(17-34)]({{<ref "sect_17#17-34">}}) and [(17-35)]({{<ref "sect_17#17-35">}}),
{{<math div="xprime_inv">}}
{{</math>}}
{{<math div="yprime_inv">}}
{{</math>}}
Since $x'$ is positive, go to equations [(17-36)]({{<ref "sect_17#17-36">}}) through [(17-44)]({{<ref "sect_17#17-44">}}) in order:
{{<math div="rhoprime_b_inv">}}
{{</math>}}
{{<math div="azprime_b_inv">}}
{{</math>}}
{{<math div="rho_b_inv">}}
{{</math>}}
{{<math div="zb_inv">}}
{{</math>}}
{{<math div="alpha_inv">}}
{{</math>}}
Since $Az'_B$, is greater than $\alpha$, go to equation [(17-42)]({{<ref "sect_17#17-42">}}).
{{<math div="azb_inv">}}
{{</math>}}
{{<math div="phi_inv">}}
{{</math>}}
{{<math div="lam_inv">}}
{{</math>}}

