---
title: Numerical Examples - Mercator Projection
weight: 20
description: Numerical examples for Mercator projection
mathjax: 2
css: numerics.css
menuTitle: Mercator
date: 2023-02-06
lastmod: 2024-02-24
---
<script src="../js/format.js"> </script>
<script src="../js/mercator.js"></script>
# Numerical Examples for Mercator Projection
## SPHERE
### Forward Equations
Given
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_in" value="1.0" size="5" /> unit</td>
</tr>
<tr>
  <td>Central meridian:</td>
  <td>$\lambda_0=\;$<input id="lam0_sph_in" value="-180.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_in" value="35.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lambda_in" value="-75.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sphere.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, k$

Using equations [(7-1)]({{<relref "sect_7#7-1">}}) , [(7-2)]({{<relref "sect_7#7-2">}}), and [(7-3)]({{<relref "sect_7#7-3">}}),
{{<math div="x_sph">}}\eqalign {
  x &= \pi\times1.0\times[(-75.0^\circ) - (-180.0^\circ)]/180^\circ \cr
    &= 1.8325957\;\text{units}
} {{</math>}}
{{<math div="y_sph">}}\eqalign {
  y &= 1.0\times\ln\tan(45^\circ+35.0^\circ/2) = 1.0\times\ln\tan(62.5^\circ) \cr
    &= 1.0\times \ln 1.9209821 = 0.6528366\;\text{units}
} {{</math>}}
{{<math div="k_sph">}}h = k = \sec 35.0^\circ = 1/\cos 35.0^\circ = 1/0.8191520 = 1.2207746 {{</math>}}

### Inverse Equations 
Given: $R, \lambda_0$ for forward example
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_sph_in" value="1.8325957" size="7"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_sph_in" value="0.6528366" size="7"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sphere.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

Using equations [(7-4)]({{<relref "sect_7#7-4">}}) and [(7-5)]({{<relref "sect_7#7-5">}}),
{{<math div="phi_inv">}} \eqalign{
    \phi &= 90^\circ - 2\arctan(\mathrm{e}^{-0.6528366/1.0}) \cr
          &= 90^\circ - 2\arctan(0.5205670) \cr
          &= 90^\circ - 2\times27.5^\circ =
          35.0^\circ
  }{{</math>}}
{{<math div="lambda_inv">}} \lambda = (1.8325957/1.0)\times180^\circ/\pi+(-180.0^\circ)= -75.0^\circ
{{</math>}}
## ELLIPSOID
{{< rawHTML >}}
Given: <br/>
<table>
<tr>
  <td>
    <select id="ellip" onchange="ellip.select(this.options[this.selectedIndex].value)")>
      <option value="0" selected>Clarke 1866</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td id="ellip_a">$a=6378206.4\,\text{m}$</td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td id="ellip_e2">$e^2=0.00676866$</td>
  <td></td>  
</tr>
<tr>
  <td style="text-align:right">or:</td>
  <td id="ellip_e">$e=0.0822719$</td>
  <td></td>
</tr>
<tr>
  <td style="text-align:right">Central meridian:</td>
  <td>$\lambda_0=\;$<input id="lam0_ell_in" value="-180.0" size="5"/>&deg;</td>
  <td><input type="button" value="Set" onclick="ellip.parameters()"></td>
</tr>
</table>
{{</rawHTML>}}

### Forward Equations
{{<rawHTML>}}
<table>
  <tr>
    <td>Point:</td>
    <td>$\phi=$<input id="phi_ell_in" value="35.0" size="5">&deg;</td>
  </tr>
    <td></td>
    <td>$\lambda=$<input id="lambda_ell_in" value="-75.0" size="5">&deg;</td>
  </tr>
  <tr>
    <td></td>
    <td><input type="button" value="Set" onclick="ellip.set_fwd()"></td>
  </tr>
</table>
{{</rawHTML>}}
Find $x, y, k$. Using equations [(7-6)]({{<relref "sect_7#7-6">}}), [(7-7)]({{<relref "sect_7#7-7">}}), and [(7-8)]({{<relref "sect_7#7-8">}}),

{{<math div="x_ell">}}
  x = 6378137.0000000\times[-75^\circ - (-180^\circ)] \times \pi/180^\circ= 11688546.53
{{</math>}}
{{<math div="y_ell">}} \eqalign{
  y &= 6378206.4\ln\left[\tan(45^\circ+35.0^\circ/2)\left(\frac{1-0.0822719\sin35.0^\circ}{1+0.0822719\sin35.0^\circ}\right)^{0.0822719/2}\right] \cr
    &= 6378206.4\ln[1.9209821\times0.9961223] \cr
    &= 6378206.4\ln 1.9135332 = 4139145.66
}
{{</math>}}
{{<math div="k_ell">}} \eqalign {
    k &= (1-0.0067687\sin^2 35.0^\circ)^{1/2}/\cos 35.0^\circ \cr
      &= 1.2194146
  }
{{</math>}}
### Inverse Equations
Inversing forward example:

Given: $a, e, \lambda_0$ for forward example,
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="11688673.72" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="4139145.64" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ellip.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

Using equation [(7-10)]({{<ref "sect_7#7-10">}}),
{{<math div="t_val">}}
  t = \mathrm{e}^{-4139145.6/6378206.4} = 0.5225935
{{</math>}}
From equation [(7-11)]({{<ref "sect_7#7-11">}}), the first trial $\phi$
{{<math div="phi_0">}}
  \phi = 90^\circ - 2\arctan 0.5225935 = 34.8174474^\circ
{{</math>}}
Using this value on the right side of equation [(7-9)]({{<ref "sect_7#7-9">}}),
{{<math div="phi_1">}}\begin{align}
  \phi =& 90^\circ - 2\arctan\{0.5225935[(1-0.0822719\sin34.8174477^\circ)/ \cr
        & (1+0.0822719\sin34.8174477^\circ)]^{0.0822719/2} \} \cr
       =& 34.9991681^\circ 
  \end{align}
{{</math>}}
Replacing <span id="phi_0_t">$ 34.8174477^\circ$</span> with <span id="phi_1_t">$ 34.9991681^\circ$ </span> for the second trial, recalculation using [(7-9)]({{<ref "sect_7#7-9">}}) gives <span id="phi_2">$ 34.9999963^\circ$</span>. The third trial gives <span id="phi_3">$ 35.0000000^\circ$</span>, which does not change (to seven places) with recalculation.

For $\lambda$, using equation [(7-12)]({{<ref "sect_7#7-12">}}),
{{<math div="lambda_ell">}}
\lambda = 11688673.72/6378206.4\times 180^\circ/\pi+(-180^\circ) = -75.0000000
{{</math>}}

---
Using equations [(7-13)]({{<ref "sect_7#7-13">}}) and [(3-5)]({{<ref "sect_3#3-5">}}) instead, to find &phi;,
{{<math div="chi">}} \eqalign {
  \chi &= 90^\circ - 2\arctan 0.5225935 \cr
        &= 90^\circ - 55.1825523^\circ \cr
        &= 34.8174477^\circ
  }
{{</math>}}
using $t$ as calculated above from [(7-10)]({{<ref "sect_7#7-10">}}). Using [(3-5)]({{<ref "sect_3#3-5">}}), $\chi$ is inserted as in the example given above for inverse auxiliary latitude $\chi$
{{<math div="phi_alt">}}
\phi = 34.9999999^\circ
{{</math>}}
