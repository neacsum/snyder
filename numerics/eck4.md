---
title: Numerical Examples - Eckert IV Projection
menuTitle: Eckert IV
weight: 250
description: Numerical examples for Eckert IV projection
mathjax: 2
css: numerics.css
date: 2024-03-29
lastmod: 2024-03-30
---


<script src="../js/format.js"> </script>
<script src="../js/eck.js"> </script>

# Numerical Examples for Eckert IV Projection 

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
  <td>$\lambda_0=\;$<input id="lam0_in" value="-90" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_in" value="-50" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_in" value="-75" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="eck4.set_fwd()"/></td>
</tr>
</table>
Find $x, y$.

From equation [(32-4)]({{<relref "sect_32#32-4">}}), using $(\phi/2)$ or {{<math span="theta0">}}-25^\circ{{</math>}} as the first trial $\theta$
{{<math div="delta">}}
\eqalign{
\Delta\theta =& -[(-25^\circ)\times\pi/180^\circ+\sin(-25^\circ)\cos(-25^\circ)+2\sin(-25^\circ) \cr
              & -(2+\pi/2)\sin(-50^\circ)]/[2\cos(-25^\circ)\times(1-\cos(-25^\circ))] \cr
             =& -17.7554344^\circ 
}
{{</math>}}
The next trial {{<math span="theta1">}}\theta = (-25^\circ)+(-17.7554344^\circ) = -42.7554344^\circ{{</math>}}. Using this in place of {{<math span="theta0_1">}}-25^\circ{{</math>}} for $\theta$ in equation [(32-4)]({{<relref "sect_32#32-4">}}), subsequent iterations produce the following:
{{<math div="iter">}}
\eqalign{\Delta\theta' &= -2.9912099^\circ\cr 
 \theta &= -45.7466443^\circ \cr\Delta\theta' &= -0.1113894^\circ\cr 
 \theta &= -45.8580337^\circ \cr\Delta\theta' &= -0.0001573^\circ\cr 
 \theta &= -45.858191^\circ \cr\Delta\theta' &= 0^\circ}
{{</math>}}

Since there is no change to seven decimal places, {{<math span="theta">}}\theta = -45.858191^\circ{{</math>}}. Using [(32-1a)]({{<relref "sect_32#32-1a">}}) and [(32-2a)]({{<relref "sect_32#32-2a">}}),
{{<math div="x">}}
\eqalign{
  x &= 0.4222382\times1.0\times[-75^\circ-(-90^\circ)]\times(\pi/180^\circ)\times[1+\cos(-45.858191^\circ)]\cr
    &= 0.1875270\text{ units}
}
{{</math>}}
{{<math div="y">}}
\eqalign{
  y &= 1.3265004\times1.0\times\sin(-45.858191^\circ) \cr
    &= -0.9519210\text{ units}
}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given: $R, \lambda_0$, for forward example
<table>
  <tr>
    <td>$x=\;$<input id="x_in" value="0.1875270" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_in" value="-0.9519210" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="eck4.set_inv()"/></td>
</table>
Find $\phi, \lambda$.

Using equations [(32-9a)]({{<relref "sect_32#32-9a">}}), [(32-10)]({{<relref "sect_32#32-10">}}), and [(32-11a)]({{<relref "sect_32#32-11a">}}) in order,
{{<math div="inv_theta">}}
\eqalign{
  \theta &= \arcsin[-0.9519210/(1.3265004\times1.0)] \cr
         &= -45.8581925^\circ
}
{{</math>}}
{{<math div="phi">}}
\eqalign{
  \phi =& \arcsin\{[-45.8581925^\circ\times\pi/180^\circ+\sin(-45.8581925^\circ)\cos(-45.8581925^\circ)\cr
        & +2\sin(-45.8581925^\circ)]/(2+\pi/2)\} \cr
       =& -50.0000015^\circ
}
{{</math>}}
{{<math div="lam">}}
\eqalign{
  \lambda =& -90^\circ+0.1875270/\{0.4222382\times1.0\times[1+\cos(-45.8581925^\circ)]\}\cr
          =& -74.9999993^\circ
}
{{</math>}}