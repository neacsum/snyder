---
title: Numerical Examples - Sinusoidal Projection
menuTitle: Sinusoidal
weight: 230
description: Numerical examples for Sinusoidal projection
mathjax: 2
css: numerics.css
date: 2024-03-26
lastmod: 2024-03-26
---

<script src="../js/format.js"> </script>
<script src="../js/sin.js"> </script>

# Numerical Examples for Sinusoidal Projection 

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
Find $x, y, h, k, \theta', \omega$.

From equations [(30-1)]({{<relref "sect_30#30-1">}}) through [(30-5)]({{<relref "sect_30#30-5">}}) in order,

{{<math div="x">}}
\eqalign{
  x &= 1.0\times[-75^\circ-(-90^\circ)]\cos(-50^\circ) \cr
    &= 0.1682814\text{ units}
}
{{</math>}}
{{<math div="y">}}
\eqalign{
  y &= 1.0\times(-50^\circ)\times\pi/180^\circ \cr
    &= -0.8726646\text{ units}
}
{{</math>}}
{{<math div="h">}}
\eqalign{
  h &= \{1+ [-75^\circ-(-90^\circ)]^2\times(\pi/180^\circ)^2\times\sin^2(-50^\circ) \}^{1/2} \cr
    &= 1.0199119
}
{{</math>}}
{{<math div="k">}}
\eqalign{
  k &= 1.0
}
{{</math>}}
{{<math div="theta_prime">}}
\eqalign{
  \theta' &= \arcsin(1/1.0199119) \cr
          &= 78.6597719^\circ
}
{{</math>}}
{{<math div="omega">}}
\eqalign{
  \omega &= 2\arctan[(1/2)[-75^\circ-(-90^\circ)]\times(\pi/180^\circ)\times\sin(-50^\circ)] \cr
         &= 11.4523842^\circ
}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given: $R, \lambda_0$, for forward example
<table>
  <tr>
    <td>$x=\;$<input id="x_in" value="0.1682814" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_in" value="-0.8726646" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
Find $\phi, \lambda$.

From equations [(30-6)]({{<relref "sect_30#30-6">}}) and [(30-7)]({{<relref "sect_30#30-7">}}),
{{<math div="phi">}}
\eqalign{
  \phi &= (-0.8726646/1.0)\times180^\circ/\pi \cr
        &= -49.9999985^\circ
}
{{</math>}}
{{<math div="lam">}}
\eqalign{
  \lambda &= -85^\circ+0.1682814/[1.0\cos(-49.9999985^\circ)]\times180^\circ/\pi \cr
          &= -70.0000007^\circ
}
{{</math>}}

## ELLIPSOID 
### Forward Equations

Given
<table>
<tr>
  <td>
    <select id="ellip" onchange="ell.select(this.options[this.selectedIndex].value)">
      <option value="0" selected>Clarke 1866</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td>$a=$</td>
  <td id="ellip_a">6378206.4 m</td>
</tr>
<tr>
  <td></td>
  <td>$e^2=$</td>
  <td id="ellip_e2">0.00676866</td>
</tr>
<tr>
  <td>Central meridian:</td>
  <td>$\lambda_0=$</td>
  <td><input id="ell_lam0_in" value="-90.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="ell_phi_in" value="-50.0" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$</td>
  <td><input id="ell_lam_in" value="-75.0" size="5">&deg;</td>
</tr>
<tr>
  <td colspan="3" style="text-align:center"><input type="button" value="Set" onclick="ell.set_fwd()"></td>
</tr>
</table>
Find: $x, y$.

Using equations [(30-8)]({{<relref "sect_30#30-8">}}), [(3-21)]({{<relref "sect_30#3-21">}}), and [(30-9)]({{<relref "sect_30#30-9">}}) in order,
{{<math div="ell_x">}}
\eqalign{
  x =& 6378206.4\times[-75^\circ-(-90^\circ)]\times(\pi/180^\circ)\cos(-50^\circ)/ \cr
      & [1-0.0067687\sin^2(-50^\circ)]^{1/2} \cr
    =& 1075471.54\text{ m}
}
{{</math>}}
{{<math div="ell_M">}}
\eqalign{
  M =& 6378206.4\times[(1-0.0067687/4-3\times0.0067687^2/64 \cr
      & -5\times0.0067687^3/256)\times (-50^\circ)\times \pi/180^\circ \cr
      & -(3\times0.0067687/8+3\times0.0067687^2/32 \cr
      & +45\times0.0067687^3/1024)\times\sin(2\times(-50^\circ)) \cr
      & +(15\times0.0067687^2/256+45\times0.0067687^3/1024) \cr
      & \times \sin(4\times(-50^\circ)) -(35\times0.0067687^3/3072) \cr
      & \times\sin(6\times(-50^\circ))] \cr
    =& -5540628.03\;\text{m} 
}
{{</math>}}
{{<math div="ell_y">}}
y = -5540628.03\text{ m}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given
<table>
  <tr>
    <td>$x=\;$<input id="ell_x_in" value="1075471.54" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="ell_y_in" value="-5540628.03" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
Find: $\phi, \lambda$

Using equations [(30-10)]({{<relref "sect_30#30-10">}}), [(7-19)]({{<relref "sect_30#7-19">}}), [(3-24)]({{<relref "sect_30#3-24">}}), [(3-26)]({{<relref "sect_30#3-26">}}), and [(30-11)]({{<relref "sect_30#30-11">}}) in order,
{{<math div="ellinv_M">}}
M = -5540628.03
{{</math>}}
{{<math div="ellinv_mu">}}
\eqalign{
  \mu =& -5540628.03 /[6378206.4\times(1-0.0067687/4 \cr
        & -3\times0.0067687^2/64 - 5\times0.0067687^3/256)] \cr
        =& -0.8701555 \;\text{radians} = -49.8562392^\circ 
}
{{</math>}}
{{<math div="ellinv_e1">}}
\eqalign{
  e_1 &= [1-(1-0.0067687)^{1/2}]/[1+(1-0.0067687)^{1/2}] \cr
      &= 0.001697916
}
{{</math>}}
{{<math div="ellinv_phi">}}
\eqalign{
  \phi =& -49.8562392^\circ+[(3\times0.0016979/2-27\times0.0016979^3/32)\sin(2\times(-49.8562392^\circ)) \cr
          &+(21\times0.0016979^2/16-55\times0.0016979^4/32)\sin(4\times(-49.8562392^\circ)) \cr
          &+(151\times0.0016979^3/96)\sin(6\times(-49.8562392^\circ)) \cr
          &+(1097\times0.0016979^4/512)\sin(8\times(-49.8562392^\circ))]\times180^\circ/\pi \cr
        =&-50.0000001^\circ 
}
{{</math>}}
{{<math div="ellinv_lam">}}
\eqalign{
  \lambda =& -90^\circ+\{1075471.54\times[1-0.0067687\sin^2(-50.0000001^\circ)]^{1/2}/ \cr
            & [6378206.4\cos(-50.0000001^\circ)]\}\times(180^\circ/\pi) \cr
            =& -75^\circ 
}
{{</math>}}
