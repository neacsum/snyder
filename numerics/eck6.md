---
title: Numerical Examples - Eckert VI Projection
menuTitle: Eckert VI
weight: 260
description: Numerical examples for Eckert VI projection
mathjax: 2
css: numerics.css
date: 2024-03-30
lastmod: 2024-03-30
---


<script src="../js/format.js"> </script>
<script src="../js/eck.js"> </script>

# Numerical Examples for Eckert VI Projection 

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
  <td><input type="button" value="Set" onclick="eck6.set_fwd()"/></td>
</tr>
</table>
Find $x, y$.

From equation [(32-8)]({{<relref "sect_32#32-8">}}), using $\phi$ or or {{<math span="theta0">}}-50^\circ{{</math>}} as the first trial $\theta$
{{<math div="delta">}}
\eqalign{
  \Delta\theta =& -[(-50^\circ)\times\pi/180^\circ+\sin(-50^\circ)-(1+\pi/2)\sin(-50^\circ)]/ \cr
                  & [1+\cos(-50^\circ)] \cr
                  =& -11.5316184^\circ 
}
{{</math>}}
The next trial {{<math span="theta1">}}\theta = (-50^\circ)+(-11.5316184^\circ) = -61.5316184^\circ{{</math>}}. Using this in place of {{<math span="theta0_1">}}-50^\circ{{</math>}} for $\theta$ in equation [(32-8)]({{<relref "sect_32#32-8">}}), subsequent iterations produce the following:
{{<math div="iter">}}
\eqalign{\Delta\theta' &= -0.6337921^\circ\cr 
 \theta &= -62.1654105^\circ \cr\Delta\theta' &= -0.0021049^\circ\cr 
 \theta &= -62.1675154^\circ \cr\Delta\theta' &= 0^\circ}
{{</math>}}

Since there is no change to seven decimal places, {{<math span="theta">}}\theta = -62.1675154^\circ{{</math>}}. Using [(32-5)]({{<relref "sect_32#32-5">}}) and [(32-6)]({{<relref "sect_32#32-6">}}),
{{<math div="x">}}
\eqalign{
  x &= 1.0\times(-75^\circ-(-90^\circ))\times(\pi/180^\circ)\times[1+\cos(-62.1675154^\circ)]/(2+\pi)^{1/2} \cr
    &= 0.1693623\text{ units}
}
{{</math>}}
{{<math div="y">}}
\eqalign{
  y &= 2\times1.0\times(-62.1675154^\circ)\times\pi/180^\circ/(2+\pi)^{1/2} \cr
    &= -0.9570223\text{ units}
}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given: $R, \lambda_0$, for forward example
<table>
  <tr>
    <td>$x=\;$<input id="x_in" value="0.1693623" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_in" value="-0.8726646" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="eck6.set_inv()"/></td>
</table>
Find $\phi, \lambda$.

Using equations [(32-12)]({{<relref "sect_32#32-12">}}), [(32-13)]({{<relref "sect_32#32-13">}}), and [(32- 14)]({{<relref "sect_32#32-14">}}) in order,
{{<math div="inv_theta">}}
\eqalign{
  \theta &= (2+\pi)^{1/2}\times(-0.9570223)/(2\times1.0) \cr
         &= -62.1675178^\circ
}
{{</math>}}
{{<math div="phi">}}
\eqalign{
  \phi &= \arcsin[((-62.1675178^\circ)\times\pi/180^\circ+ \sin(-62.1675178^\circ))/(1+\pi/2)] \cr
        &= -50.0000021^\circ
}
{{</math>}}
{{<math div="lam">}}
\eqalign{
  \lambda &= -90^\circ +(2+\pi)^{1/2}\times0.1693623/[1.0\times(1+\cos(-62.1675178^\circ))] \cr
          &= -75.0000008^\circ
}
{{</math>}}
