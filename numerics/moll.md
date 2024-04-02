---
title: Numerical Examples - Mollweide Projection
menuTitle: Mollweide
weight: 240
description: Numerical examples for Mollweide projection
mathjax: 2
css: numerics.css
date: 2024-03-28
lastmod: 2024-03-28
---

<script src="../js/format.js"> </script>
<script src="../js/moll.js"> </script>

# Numerical Examples for Mollweide Projection 

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
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
Find $x, y$.

From equation [(31-4)]({{<relref "sect_31#31-4">}}), using $\phi$ or {{<math span="phi0">}}-50^\circ{{</math>}} as the first trial $\theta'$,
{{<math div="delta_1">}}
\eqalign{
  \Delta\theta' =& -[(-50^\circ)+\sin(-50^\circ)-\pi\sin(-50^\circ)]/ \cr
            & [1+\cos(-50^\circ)]\times 180^\circ/\pi \cr
            =& -26.7818469^\circ
}
{{</math>}}
The next trial {{<math span="theta_prime_1">}}\theta' = -50^\circ-26.7818469^\circ = -76.7818469^\circ{{</math>}}. Using this in place of {{<math span="theta_prime_0">}} -50^\circ{{</math>}} for $\theta'$ (not $\phi$) in equation [(31-4)]({{<relref "sect_31#31-4">}}), subsequent iterations produce the following:
{{<math div="iter">}}
  \eqalign{\Delta\theta' &= -4.3367097^\circ\cr 
  \theta' &= -81.1185566^\circ \cr\Delta\theta' &= -0.1391597^\circ\cr 
  \theta' &= -81.2577163^\circ \cr\Delta\theta' &= -0.000145^\circ\cr 
  \theta' &= -81.2578612^\circ \cr\Delta\theta' &= 0^\circ}
{{</math>}}

Since there is no change to seven decimal places, using [(31-5)]({{<relref "sect_31#31-5">}}),
{{<math div="theta">}}
\eqalign{
      \theta &= -81.2578612^\circ/2 \cr
              &= -40.6289306^\circ
    }
{{</math>}}
Using [(31-1)]({{<relref "sect_31#31-1">}}) and [(31-2)]({{<relref "sect_31#31-2">}}),
{{<math div="x">}}
\eqalign{
  x =& (8^{1/2}/\pi)\times1.0\times[-75^\circ-(-90^\circ)]\cos(-40.6289306^\circ)\times\pi/180^\circ \cr
    =& 0.1788845\text{ units}
}
{{</math>}}
{{<math div="y">}}
\eqalign{
  y &= 2^{1/2}\times1.0\times\sin(-40.6289306^\circ) \cr
    &= -0.9208758\text{ units}
}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given: $R, \lambda_0$, for forward example
<table>
  <tr>
    <td>$x=\;$<input id="x_in" value="0.1788845" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_in" value="-0.9208758" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
Find $\phi, \lambda$.

Using equations [(31-6)]({{<relref "sect_31#3161">}}) through [(31-8)]({{<relref "sect_31#31-1">}}) in order,
{{<math div="inv_theta">}}
\eqalign{
  \theta &= \arcsin[-0.9208758/(2^{1/2}\times1.0)] \cr
          &= -40.6289311^\circ
}
{{</math>}}
{{<math div="inv_phi">}}
\eqalign{
  \phi &= \arcsin\{[2\times(-40.6289311^\circ)\times\pi/180^\circ +\sin[2\times(-40.6289311^\circ)]]/\pi\} \cr
        &= -50.0000005^\circ
}
{{</math>}}
{{<math div="inv_lam">}}
\eqalign{
  \lambda &= -90^\circ+\pi\times0.1788845/[8^{1/2}\cos(-40.6289311^\circ)]\times180^\circ/\pi \cr
            &= -74.999999^\circ
}
{{</math>}}
