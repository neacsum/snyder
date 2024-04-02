---
title: Numerical Examples - Orthographic Projection
menuTitle: Orthographic
weight: 130
description: Numerical examples for Orthographic projection
mathjax: 2
css: numerics.css
date: 2024-02-02
lastmod: 2024-02-07
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/ortho.js"> </script>
{{</rawHTML>}}

# Numerical Examples for Orthographic Projection 

## SPHERE
### Forward Equations
Given
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

In general calculations, to determine whether this point is beyond viewing, using
equation [(5-3)]({{<ref "sect_20#5-3">}}),
{{<math div="cos_c">}}
\eqalign{
  \cos c &= \sin 40^\circ\sin30^\circ+\cos 40^\circ\cos 30^\circ\cos(-110^\circ-(-100^\circ)) \cr
          &= 0.9747290
}
{{</math>}}

<div id="novis" style="display:none">
Since this is negative, the point is beyond the range of the map.
</div>
<div id="vis">
Since this is positive, the point is within view.

Using equations [(20-3)]({{<ref "sect_20#20-3">}}) and [(20-4)]({{<ref "sect_20#20-4">}}),
{{<math div="x_sph">}}
\eqalign{
  x &= 1.0\cos30^\circ\sin(-110^\circ-(-100^\circ)) \cr
    &= -0.1503837
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y &= 1.0[\cos40^\circ\sin30^\circ - \sin40^\circ\cos30^\circ\cos(-110^\circ-(-100^\circ))] \cr
    &= -0.1651911
}
{{</math>}}
Examples of other forward equations are omitted, since the formulas for the oblique aspect apply generally.
</div>

### Inverse Equations
Inversing forward example:
Given $R, \phi_1, \lambda_0$ for forward example
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Point:</td>
  <td>$x=\;$<input id="x_sph_in" value="-0.1503837" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td>$y=\;$<input id="y_sph_in" value="-0.1651911" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$

Using equations [(20-18)]({{<ref "sect_20#20-18">}}) and [(20-19)]({{<ref "sect_20#20-19">}}),
{{<math div="rho_sph">}}
\eqalign{
  \rho &= [(-0.1503837)^2 + (-0.1651911)]^{1/2} \cr
        &= 0.2233906
}
{{</math>}}
{{<math div="c_sph">}}
\eqalign{
  c &= \arcsin(0.2233906/1.0) \cr
    &= 12.9082572^\circ
}
{{</math>}}
Using equations [(20-14)]({{<ref "sect_20#20-14">}}) and [(20-15)]({{<ref "sect_20#20-15">}}),
{{<math div="phi_inv">}}
\eqalign{
  \phi =& \arcsin[\cos12.9082572^\circ\sin40^\circ + (-0.1651911)\sin12.9082572^\circ \cr
          & \cos40^\circ/0.2233906] \cr
        =& 30.0000004^\circ 
}
{{</math>}}
{{<math div="lam_inv">}}
\eqalign{
  \lambda =& -100^\circ + \arctan[-0.1503837\sin12.9082572^\circ/(0.2233906 \cr
            &\cos40^\circ\cos12.9082572^\circ - (-0.1651911)\sin40^\circ \sin12.9082572^\circ)] \cr
            =& -109.9999978^\circ 
}
{{</math>}}
