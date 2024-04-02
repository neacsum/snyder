---
title: Numerical Examples - Van der Grinten Projection
menuTitle: Van der Grinten
weight: 220
description: Numerical examples for Van der Grinten projection
mathjax: 2
css: numerics.css
date: 2024-03-17
lastmod: 2024-03-17
---
<script src="../js/format.js"> </script>
<script src="../js/vandg.js"> </script>

# Numerical Examples for Van der Grinten Projection 

## SPHERE
### Forward Equations

Given
<table class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_in" value="1.0" size="5" /> unit</td>
</tr>
<tr>
  <td>Central meridian:</td>
  <td>$\lambda_0=\;$<input id="lam0_in" value="-85" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_in" value="-50.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_in" value="-160" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
Find $x, y$.

From equations [(29-6)]({{<relref "sect_29#29-6">}}), [(29-3)]({{<relref "sect_29#29-3">}}), [(29-4)]({{<relref "sect_29#29-4">}}), [(29-5)]({{<relref "sect_29#29-5">}}), and [(29-6a)]({{<relref "sect_29#29-6a">}}) in order,
{{<math div="theta">}}
\eqalign{
  \theta &= \arcsin |2\times(-50^\circ)/180^\circ| \cr
          &= 33.7489886^\circ
}
{{</math>}}
{{<math div="A">}}
\eqalign{
  A &= ½|180^\circ/(-160^\circ-(-85^\circ))-(-160^\circ-(-85^\circ))/180^\circ| \cr
    &= ½|(-2.4000000) - (-0.4166667)| \cr
    &= 0.9916667
}
{{</math>}}
{{<math div="G">}}
\eqalign{
  G &= \cos33.7489886^\circ/(\sin33.7489886^\circ+\cos33.7489886^\circ-1) \cr
    &= 2.1483315
}
{{</math>}}
{{<math div="P">}}
\eqalign{
  P &= 2.1483315/(2/\sin33.7489886^\circ - 1) \cr
    &= 5.5856618
}
{{</math>}}
{{<math div="Q">}}
\eqalign{
  Q &= 0.9916667^2+2.1483315 \cr
    &= 3.1317343
}
{{</math>}}

From equation [(29-1)]({{<relref "sect_29#29-1">}}),
{{<math div="x">}}
\eqalign{
  x =& -\pi\times1.0\{ 0.9916667\times(2.1483315-5.5856618^2) \cr
      & +[0.9916667^2\times(2.1483315 - 5.5856618^2)\cr
      & -(5.5856618^2 + 0.9916667^2)\times(2.1483315^2 - 5.5856618^2)]^{1/2}\}/ \cr
      & (5.5856618^2+0.9916667^2)\cr
    =& -1.1954154\text{ units} 
}
{{</math>}}
<span id="lamdif_neg">
taking the initial "&mdash;" sign because $(\lambda-\lambda_0)$ is negative.
</span><span id="lamdif_pos" style="display:none">
taking the initial "+" sign because $(\lambda-\lambda_0)$ is positive.
</span>
Note that $\pi$ is not converted to $180^\circ$ here, since there is no angle in degrees to offset it. From equation [(29-2)]({{<relref "sect_29#29-2">}}),
{{<math div="y">}}
\eqalign{
  y =& -\pi\times1.0\{ 5.5856618\times3.1317343 - 0.9916667\cr
     & \times[(0.9916667^2+1)\times(7.0000000+0.9916667^2) \cr
     & -3.1317343^2]^{1/2} \}/(5.5856618^2 + 0.9916667^2) \cr
    =& -0.9960733\text{ units} 
}
{{</math>}}

<span id="phi_neg">taking the initial "&mdash;" sign because $\phi$ is negative.</span>
<span id="phi_pos" style="display:none">taking the initial "+" sign because $\phi$ is positive.</span>

### Inverse Equations
Inversing forward example:

Given: $R, \lambda_0$, for forward example
<table>
  <tr>
    <td>$x=\;$<input id="x_in" value="-1.1954154" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_in" value="-0.9960733" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
Find $\phi, \lambda$.

Using equations [(29-9)]({{<relref "sect_29#29-9">}}) through [(29-19)]({{<relref "sect_29#29-19">}}) in order,
{{<math div="X">}}
\eqalign{
  X &= -1.1954154/(\pi\times1.0) \cr
    &= -0.3805125
}
{{</math>}}
{{<math div="Y">}}
\eqalign{
  Y &= -0.9960733/(\pi\times1.0) \cr
    &= -0.3170600
}
{{</math>}}
{{<math div="c1">}}
\eqalign{
  c_1 &= -|-0.3170600|\times(1+(-0.3805125)^2+(-0.3170600)^2)\cr
      &= -0.3948401
}
{{</math>}}
{{<math div="c2">}}
\eqalign{
  c_2 &= -0.3948401-2\times(-0.3170600)^2+(-0.3805125)^2 \cr
      &= -0.4511044
}
{{</math>}}
{{<math div="c3">}}
\eqalign{
  c_1 &= -|-0.3170600|\times[1+(-0.3805125)^2+(-0.3170600)^2]\cr
      &= -0.3948401
}
{{</math>}}
{{<math div="d">}}
\eqalign{
  d =& (-0.3170600)^2/2.0509147+[2\times(-0.4511044)^3/2.0509147^3 \cr
     & - 9\times(-0.3948401)\times(-0.4511044)/2.0509147^2]/27 \cr
    =& 0.0341124 
}
{{</math>}}
{{<math div="a1">}}
\eqalign{
  a_1 =& [(-0.3948401)-(-0.4511044)^2/(3\times2.0509147)]/2.0509147\cr
      =& -0.2086455
}
{{</math>}}
{{<math div="m1">}}
\eqalign{
  m_1 &= 2\times[-(-0.2086455)/3]^{1/2} \cr
      &= 0.5274409
}
{{</math>}}
{{<math div="theta1">}}
\eqalign{
  \theta_1 &= ⅓\arccos(3\times0.0341124/((-0.2086455)\times0.5274409)) \cr
            &= ⅓\arccos(-0.9299322) \cr
            &= 52.8080829^\circ
}
{{</math>}}
{{<math div="phi">}}
\eqalign{
  \phi =& -180^\circ\times[(-0.5274409)\cos(52.8080829^\circ+60^\circ) \cr
         & (-0.4511044)/(3\times0.5274409)] \cr
        =& -49.9999985^\circ
}
{{</math>}}
<span id="y_neg">taking the initial "&mdash;" sign because $y$ is negative.</span>
<span id="y_pos" style="display:none">taking the initial "+" sign because $y$ is positive.</span>
{{<math div="lam">}}
{{</math>}}