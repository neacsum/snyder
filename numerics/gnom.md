---
title: Numerical Examples - Gnomonic Projection
menuTitle: Gnomonic
weight: 150
description: Numerical examples for Gnomonic projection
mathjax: 2
css: numerics.css
date: 2024-02-13
lastmod: 2024-02-13
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/gnom.js"> </script>
{{</rawHTML>}}

# Numerical Examples for Gnomonic Projection 

## SPHERE
### Forward Equations
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_sph_in" value="1.0" size="5" /> units</td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_1=\;$<input id="phi1_sph_in" value="40" size="5"/> &deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;$<input id="lam0_sph_in" value="-100" size="5"/> &deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sph_in" value="30" size="5"/> &deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_sph_in" value="-110" size="5"/> &deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}

Find $x, y$

Using equation [(5-3)]({{<ref "sect_22#5-3">}}),
{{<math div="cosc">}}
\eqalign{
  \cos c &= \sin 40^\circ \sin 30^\circ + \cos 40^\circ \cos 30^\circ \cos [-110^\circ-(-100^\circ)] \cr
          &= 0.9747290
}
{{</math>}}
<div id="not_vis" style="display:none">
Since $\cos c$ is zero or negative, the point cannot be plotted.
</div>
<div id="vis">

Since $\cos c$ is positive (not zero or negative), the point is in view and may be plotted. Using equations [(22-3)]({{<ref "sect_22#22-3">}}) through [(22-5)]({{<ref "sect_22#22-5">}}) in order,
{{<math div="kprime">}}
\eqalign{
  k' &= 1/0.9747290 \cr
      &= 1.0259262 
}
{{</math>}}
{{<math div="x_sph">}}
\eqalign{
  x &= 1.0\times1.0259262\cos 30^\circ\sin[-110^\circ-(-100^\circ)] \cr
    &= -0.1542826\text{ units}
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y =& 1.0\times1.0259262\times\{\cos40^\circ\sin30^\circ - \sin40^\circ \cr
      & \cos30^\circ\cos[-110^\circ-(-100^\circ)] \} \cr
    =& -0.1694739\text{ units} 
}
{{</math>}}

Examples of other forward equations are omitted, since the above equations are general.
</div>

### Inverse Equations
Inversing forward example:

Given $R, \phi_1, \lambda_0$ for forward example
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Point:</td>
  <td>$x=\;$<input id="x_sph_in" value=" -0.1542826" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td>$y=\;$<input id="y_sph_in" value="-0.1694739" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$

Using equations [(20-18)]({{<ref "sect_22#20-18">}}) and [(22-16)]({{<ref "sect_22#22-16">}}),
{{<math div="rho">}}
\eqalign{
  \rho &= [( -0.1542826)^2 + (-0.1694739)^2]^{1/2} \cr
        &= 0.2291823 \text{ units}
}
{{</math>}}
{{<math div="c">}}
\eqalign{
  c &= \arctan(0.2291823/1.0) \cr
    &= 12.9082593^\circ
}
{{</math>}}
Using equations [(20-14)]({{<ref "sect_22#20-14">}}) and [(20-15)]({{<ref "sect_22#20-15">}}),
{{<math div="phi_inv">}}
\eqalign{
  \phi =& \arcsin[\cos12.9082593^\circ\sin40^\circ+(-0.1694739)\cr
          & \sin12.9082593^\circ\cos40^\circ/0.2291823]\cr
        =& 29.9999988^\circ 
}
{{</math>}}
{{<math div="lam_inv">}}
\eqalign{
  \lambda =& -100^\circ +\arctan[ -0.1542826\sin12.9082593^\circ/ \cr
            & (0.2291823\cos40^\circ\cos12.9082593^\circ - (-0.1694739) \cr
            & \sin40^\circ\sin12.9082593^\circ)] \cr
            =& -100^\circ +\arctan(-0.0344653/0.1954624) \cr
            =& -109.9999993^\circ
}
{{</math>}}
