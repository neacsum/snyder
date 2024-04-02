---
title: Numerical Examples - Bonne Projection
menuTitle: Bonne
weight: 120
description: Numerical examples for Bonne projection
mathjax: 2
css: numerics.css
date: 2024-02-02
lastmod: 2024-02-02
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/bonne.js"> </script>
{{</rawHTML>}}

# Numerical Examples for Bonne Projection 

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
  <td>Standard parallel:</td>
  <td>$\phi_1=\;$<input id="phi1_sph_in" value="40" size="5"/> &deg;</td>
</tr>
<tr>
  <td>Central meridian:</td>
  <td>$\lambda_0=\;$<input id="lam0_sph_in" value="-75" size="5"/> &deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sph_in" value="30" size="5"/> &deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_sph_in" value="-85" size="5"/> &deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}

Find $x, y$

Using equations [(19-1)]({{<ref "sect_19#19-1">}}) through [(19-4)]({{<ref "sect_19#19-4">}}) in order,

{{<math div="rho_sph">}}
\eqalign{
  \rho &= 1.0\times[\cot 40^\circ +(40^\circ - 30^\circ)\times \pi/180^\circ] \cr
        &= 1.3662865\;\text{units}
}
{{</math>}}
{{<math div="E_sph">}}
\eqalign{
  E &= 1.0\times[-85^\circ-(-75^\circ)]\cos30^\circ/1.3662865 \cr
    &= -6.3385344^\circ
}
{{</math>}}
{{<math div="x_sph">}}
\eqalign{
  x &= 1.3662865\sin (-6.3385344^\circ) \cr
    &= -0.1508418\;\text{units}
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y &= 1.0\cot 40^\circ - 1.3662865\cos(-6.3385344^\circ) \cr
    &= -0.1661807\;\text{units}
}
{{</math>}}

### Inverse Equations
Inversing forward example:
Given $R, \phi_1, \lambda_0$ for forward example
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Point:</td>
  <td>$x=\;$<input id="x_sph_in" value="-0.1508418" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td>$y=\;$<input id="y_sph_in" value="-0.1661807" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</tr>
</table>
{{</rawHTML>}}

Find $\phi, \lambda$

Using equations [(19-5)]({{<ref "sect_19#19-5">}}) through [(19-7)]({{<ref "sect_19#19-7">}}) in order
{{<math div="rho_sph_inv">}}
\eqalign{
  \rho &= [(-0.1508418)^2 + (1\cot40^\circ-(-0.1661807))^2]^{1/2} \cr
        &= 1.3662865\;\text{units}
}
{{</math>}}
{{<math div="phi_sph_inv">}}
\eqalign{
  \phi &= (\cot40^\circ)\times 180^\circ/\pi + 40^\circ -(1.3662865/1.0)\times 180^\circ/\pi \cr
        &= 30.0000012^\circ
}
{{</math>}}
{{<math div="lam_sph_inv">}}
\eqalign{
  \lambda =& -75^\circ + 1.3662865\times\{\arctan[-0.1508418/(1.0\cot40^\circ) \cr
            & - (-0.1661807)]\}/(1.0\cos30.0000012^\circ) \cr
            =& -84.9999985^\circ
}
{{</math>}}
## ELLIPSOID
### Forward Equations
{{< rawHTML >}}
Given: <br/>
<table>
<tr>
  <td>
    <select id="ellip" onchange="ell.select(this.options[this.selectedIndex].value)")>
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
  <td>Standard parallel:</td>
  <td>$\phi_1=$</td>
  <td><input id="phi1_ell_in" value="40" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Central meridian:</td>
  <td>$\lambda_0=$</td>
  <td><input id="lam0_ell_in" value="-75" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="phi_ell_in" value="30.0" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$</td>
  <td><input id="lam_ell_in" value="-85.0" size="5">&deg;</td>
</tr>
<tr>
  <td colspan="3" style="text-align:center"><input type="button" value="Set" onclick="ell.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$.

Using equations [(14-15)]({{<ref "sect_19#14-15">}}) and [(3-21)]({{<ref "sect_19#3-21">}}),
{{<math div="m_fwd">}}
\eqalign{
  m &= \cos 30^\circ/(1-0.0067687\sin^230^\circ) \cr
    &= 0.8667591
}
{{</math>}}
{{<math div="M_fwd">}}
\eqalign{
  M =&6378206.4[(1-0.0067687/4-3\times 0.0067687^2/64 - 5\times 0.0067687^3/256)\times 30^\circ\times\pi/180^\circ \cr
    &-(3\times 0.0067687/8+3\times 0.0067687^2/32 +45\times0.0067687^3/1024)\sin(2\times30^\circ) \cr
    &+(15\times 0.0067687^2/256 +45\times 0.0067687^3/1024)\sin(4\times 30^\circ) \cr
    &-(35\times 0.0067687^3/3072)\sin(6\times30^\circ)] \cr
  =& 3319933.29\;\text{m}
}
{{</math>}}
Using the same equations, but with {{<math span="phi1">}}\phi_1=40^\circ{{</math>}} in place of {{<math span="phi">}}30^\circ{{</math>}},
{{<math div="m1_fwd">}}
m_1 = 0.7671179
{{</math>}}
{{<math div="M1_fwd">}}
M_1 = 4429318.90\;\text{m}
{{</math>}}
Using equations [(19-8)]({{<ref "sect_19#19-8">}}) through [(19-11)]({{<ref "sect_19#19-11">}}) in order,
{{<math div="rho_ell">}}
\eqalign{
  \rho &= 6378206.4\times0.7671179/\sin40^\circ+4429318.90-3319933.29 \cr
        &= 8721287.35\;\text{m}
}
{{</math>}}
{{<math div="E_ell">}}
\eqalign{
  E &= 6378206.40\times0.8667591\times[-75^\circ - (-85^\circ)]/8721287.35 \cr
    &= -6.3389360^\circ
}
{{</math>}}
{{<math div="x_ell">}}
\eqalign{
  x &= 8721287.35\sin(-6.3389360^\circ) \cr
    &= -962915.09\;\text{m}
}
{{</math>}}
{{<math div="y_ell">}}
\eqalign{
  y &= 6378206.40\times0.7671179\sin40^\circ-8721287.35\cos(-6.3389360^\circ) \cr
    &= -1056065.01\;\text{m}
}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="-962915.09" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="-1056065.01" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find: $\phi, \lambda$

Using equations [(14-15)]({{<ref "sect_19#14-15">}}) and [(3-21)]({{<ref "sect_19#3-21">}}), $m_1$, and $M_1$ are calculated as in the forward
example:
{{<math div="m1_inv">}}
m_1 = 0.7671179
{{</math>}}
{{<math div="M1_inv">}}
M_1 = 4429318.90\;\text{m}
{{</math>}}
Using equations [(19-12)]({{<ref "sect_19#19-12">}}), [(19-13)]({{<ref "sect_19#19-13">}}), [(7-19)]({{<ref "sect_19#7-19">}}), [(3-24)]({{<ref "sect_19#3-24">}}), and [(3-26)]({{<ref "sect_19#3-26">}}) in order,
{{<math div="rho_ell_inv">}}
\eqalign{
  \rho &= [(-962915.09)^2+(6378206.4\times0.7671179/\sin40^\circ - (-1056065.01))^2]^{1/2} \cr
        &= 8721287.36\;\text{m}
}
{{</math>}}
{{<math div="M_ell_inv">}}
\eqalign{
  M &= 6378206.4\times0.7671179/\sin40^\circ + 4429318.90 - 8721287.36 \cr
    &= 3319933.29\;\text{m}
}
{{</math>}}
{{<math div="mu">}}
\eqalign{
  \mu =& \{3319933.29/[6378206.4\times(1-0.0067687/4 \cr
        & -3\times0.0067687^2/64 - 5\times0.0067687^3/256)]\} \times 180^\circ/\pi \cr
        =& 29.8737593^\circ 
}
{{</math>}}
{{<math div="e1">}}
\eqalign{
  e_1 &= [1-(1-0.0067687)^{1/2}]/[1+(1-0.0067687)^{1/2}] \cr
      &= 0.001697916
}
{{</math>}}
{{<math div="phi_ell_inv">}}
\eqalign{
  \phi =& 29.8737593^\circ +[(3\times0.0016979/2 - 27\times 0.0016979^3/32)\sin(2\times29.8737593^\circ) \cr
        & + (21\times 0.0016979^2/16-55\times0.0016979^4/32)\sin(4\times29.8737593^\circ) \cr
        & + (151\times0.0016979^3/96)\sin(6\times29.8737593^\circ) \cr
        & + (1097\times0.0016979^4/512)\sin(8\times29.8737593^\circ)]\times180^\circ/\pi \cr
       =& 30.0000000^\circ 
}
{{</math>}}
Using equation [(14-15)]({{<ref "sect_19#14-15">}}),
{{<math div="m_inv">}}
\eqalign{
  m &= \cos30^\circ/(1-0.0067687\sin^2 30^\circ)^{1/2} \cr
    &= 0.8667591
}
{{</math>}}
Using equation [(19-14)]({{<ref "sect_19#19-14">}}),
{{<math div="lam_ell_inv">}}
\eqalign{
  \lambda =& -75^\circ + \{ 8721287.356278036\times \arctan[-962915.09/ \cr
            & (6378206.4\times0.7671179/\sin40^\circ-(-1056065.01))]/ \cr
            & (6378206.4\times 0.8667591)\}\times 180^\circ/\pi \cr
            =& -85.0000000^\circ 
}
{{</math>}}
