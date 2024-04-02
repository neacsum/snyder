---
title: Numerical Examples - Miller Cylindrical Projection
weight: 50
description: Numerical examples for Miller  Cylindrical projection
mathjax: 2
css: numerics.css
menuTitle: Miller Cylindrical
date: 2023-04-13
lastmod: 2024-02-24
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/miller.js"> </script>
{{</rawHTML>}}
# Numerical Examples for Miller Cylindrical Projection
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
  <td>Central meridian:</td>
  <td>$\lambda_0=\;$<input id="lam0_sph_in" value="0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sph_in" value="50.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_sph_in" value="-75" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, h, k$

Using equations [(11-1)]({{<relref "sect_11#11-1">}}) through [(11-5)]({{<relref "sect_11#11-5">}}) in order
{{<math>}}\DeclareMathOperator{\arcsinh}{arcsinh}{{</math>}}
{{<math div="x_sph">}}
\eqalign{
  x &= 1.0\times[-75^\circ-0^\circ]\times\pi/180^\circ \cr
    &= -1.3089969\;\text{units}
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y =& 1.0\times[\ln{\tan(45^\circ+0.4\times50^\circ)}]/0.8 \cr
    =& (\ln{\tan 65^\circ)}/0.8 \cr
    =& 0.9536371\;\text{units}
}
{{</math>}}
or
{{<math div="y_sph1">}}
\eqalign{
  y &= 1.0\times\{\arcsinh[\tan(0.8\times50^\circ)]\}/0.8 \cr
    &= 1.0\times\arcsinh{0.8390996}/0.8 \cr
    &= 0.9536371\;\text{units}
}
{{</math>}}
{{<math div="h_sph">}}
h = \sec(0.8\times50^\circ) = 1/\cos40.0000000^\circ = 1.3054073
{{</math>}}
{{<math div="k_sph">}}
k = \sec50^\circ = 1/\cos50^\circ = 1.5557238
{{</math>}}
{{<math div="somega_sph">}}
\eqalign{
  \sin{1/2\omega} &= [\cos(0.8\times50^\circ) - \cos50^\circ]/[\cos(0.8\times50^\circ) + \cos50^\circ] \cr
                    &= 0.0874887
}
{{</math>}}
{{<math div="omega_sph">}}
\omega=10.0382962^\circ
{{</math>}}

### Inverse Equations
Inversing forward example:

Given: $R, \lambda_0$, for forward example
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_sph_in" value="−1.3089969" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_sph_in" value="0.9536371" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

Using equations [(11-6)]({{<relref "sect_11#11-6">}}) and [(11-7)]({{<relref "sect_11#11-7">}}),
{{<math div="phi_sph">}}
\eqalign{
  \phi &= 2.5\arctan \mathrm{e}^{0.8\times0.9536371/1.0}-(5\pi/8)\times180^\circ/\pi \cr
       &= 2.5\arctan \mathrm{e}^{0.7629097} - 1.9634954\times180^\circ/\pi \cr
       &= 2.5\arctan (2.1445070)  - 1.9634954\times180^\circ/\pi \cr
       &= 2.5\times65.0000006^\circ - 112.5000000^\circ \cr
       &= 50.0000015^\circ
}
{{</math>}}
or
{{<math div="phi_sph1">}}
\eqalign{
  \phi &= \arctan[\sinh(0.8\times(-0.8428443)/1.0)]/0.8 \cr
        &= \arctan (-0.7265425)/0.8 \cr
        &= -44.9999978^\circ
}
{{</math>}}
{{<math div="lam_sph">}}
\eqalign{
  \lambda &= -5^\circ + (-1.2217305/1.0)\times 180^\circ/\pi \cr
            &= -5^\circ + (-70.0000014^\circ) \cr
            &= -75.0000014^\circ
}
{{</math>}}