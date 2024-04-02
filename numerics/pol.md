---
title: Numerical Examples - Polyconic Projection
menuTitle: Polyconic
weight: 110
description: Numerical examples for Polyconic projection
mathjax: 2
css: numerics.css
date: 2024-01-30
lastmod: 2024-01-30
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/pol.js"> </script>
{{</rawHTML>}}

# Numerical Examples for Polyconic Projection 

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
  <td>Origin:</td>
  <td>$\phi_0=\;$<input id="phi0_sph_in" value="30" size="5"/> &deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;$<input id="lam0_sph_in" value="-96" size="5"/> &deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sph_in" value="40" size="5"/> &deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_sph_in" value="-75" size="5"/> &deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}

Find $x, y, h$
{{<rawHTML>}}
<div id="sph_phi_notzero">
{{</rawHTML>}}
From equations [(18-2)]({{<ref "sect_18#18-2">}}) through [(18-4)]({{<ref "sect_18#18-4">}}),
{{<math div="E_sph">}}
\eqalign{
  E &= (-75^\circ - (-96^\circ))\sin 40^\circ \cr
    &= 13.4985398^\circ
}
{{</math>}}

{{<rawHTML>}}
</div>
<div id="sph_phi_zero" style="display:none">
{{</rawHTML>}}
From equations [(7-1)]({{<ref "sect_18#7-1">}}) and [(18-2)]({{<ref "sect_18#18-2">}}),
{{<rawHTML>}}
</div>
{{</rawHTML>}}

{{<math div="x_sph">}}
\eqalign{
  x &= 1.0\cot 40^\circ\sin 13.4985398^\circ \cr
    &= 0.2781798\;\text{units}
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y &= 1.0\times[40^\circ \times \pi/180^\circ- 30^\circ \times \pi/180^\circ + \cot40^\circ(1-\cos13.4985398^\circ)]\cr
    &= 0.2074541\;\text{units}
}
{{</math>}}

{{<rawHTML>}}
<div id="sph_phi_notzero1">
{{</rawHTML>}}
From equations [(18-6)]({{<ref "sect_18#18-6">}}) and [(18-5)]({{<ref "sect_18#18-5">}}),
{{<math div="D_sph">}}
\eqalign{
  D &= \arctan[(13.4985398^\circ\times\pi/180^\circ - \sin13.4985398^\circ)/(\sec^240^\circ-\cos13.4985398^\circ)] \cr
    &= 0.1701833^\circ
}
{{</math>}}
{{<rawHTML>}}
</div>
{{</rawHTML>}}
{{<math div="h_sph">}}
\eqalign{
  h &= (1-\cos^240^\circ\cos13.4985398^\circ)/(\sin^240^\circ\cos0.1701833^\circ) \cr
    &= 1.0392385
}
{{</math>}}

### Inverse Equations
Inversing the forward example:

Given $R, \phi_0, \lambda_0$ for forward example
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Point:</td>
  <td>$x=\;$<input id="x_sph_in" value="0.2781798" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td>$y=\;$<input id="y_sph_in" value="0.2074541" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</tr>
</table>
{{</rawHTML>}}

Find $\phi, \lambda$

Since $ y \ne -R\\times \phi_0$, use equations [(18-7)]({{<ref "sect_18#18-7">}}) and [(18-8)]({{<ref "sect_18#18-8">}}):
{{<math div="A_sph">}}
\eqalign{
  A &= 30^\circ\times \pi/180^\circ+0.2074541/1 \cr
    &= 0.7310529
}
{{</math>}}
{{<math div="B_sph">}}
\eqalign{
  B &= 0.2781798^2/1^2 + 0.7310529^2 \cr
    &= 0.6118223
}
{{</math>}}
Assuming an initial {{<math span="phin_sph">}}\phi_n = A = 0.7310529{{</math>}} radians, it is simplest to work with equation [(18-9)]({{<ref "sect_18#18-9">}}) in radians:
{{<math div="phin1_sph">}}
\eqalign{
  \phi_{n+1} =& 0.7310529 - [{\bf 0.7310529}\times (0.7310529\tan 0.7310529+1) \cr
              & - 0.7310529 -½(0.7310529^2 + 0.6118223)\tan 0.7310529]/ \cr
              & [(0.7310529 - {\bf 0.7310529})/\tan 0.7310529 - 1] \cr
              =& 0.6963533  
}
{{</math>}}
Using {{<math span="phin1_sph_1">}} 0.6963533{{</math>}} in place of {{<math span="phin_sph_1">}} 0.7310529{{</math>}} (except that the boldface retains the value of $A$) a new $\phi_{n+1}$ of {{<math span="phin2_sph">}} 0.6981266{{</math>}} radian is obtained. Again substituting this value, {{<math span="phin3_sph">}}0.6981317{{</math>}} radian is obtained. The fourth iteration results in the same answer to seven decimal places. Therefore,
{{<math div="phi_inv_sph">}}
\eqalign{
  \phi = 0.6981317 \times 180^\circ/\pi = 40.0000012^\circ
}
{{</math>}}
From equation [(18-10)]({{<ref "sect_18#18-10">}}),
{{<math div="lam_inv_sph">}}
\eqalign{
  \lambda &= [\arcsin(0.2781798\tan 40.0000012^\circ/1)]/\sin 40.0000012^\circ + (-96^\circ) \cr
            &= -75.0000010^\circ
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
  <td>Origin:</td>
  <td>$\phi_0=$</td>
  <td><input id="phi0_ell_in" value="30.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=$</td>
  <td><input id="lam0_ell_in" value="-96.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="phi_ell_in" value="40.0" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$</td>
  <td><input id="lam_ell_in" value="-75.0" size="5">&deg;</td>
</tr>
<tr>
  <td colspan="3" style="text-align:center"><input type="button" value="Set" onclick="ell.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, h$.

From equation [(3-21)]({{<ref "sect_18#3-21">}}),
{{<math div="M">}}
\eqalign{
  M =&6378206.4[(1-0.0067687/4-3\times 0.0067687^2/64 - 5\times 0.0067687^3/256)\times 40^\circ\times\pi/180^\circ \cr
    &-(3\times 0.0067687/8+3\times 0.0067687^2/32 +45\times0.0067687^3/1024)\sin(2\times40^\circ) \cr
    &+(15\times 0.0067687^2/256 +45\times 0.0067687^3/1024)\sin(4\times 40^\circ) \cr
    &-(35\times 0.0067687^3/3072)\sin(6\times40^\circ)] \cr
  =& 4429318.91\;\text{m}
}
{{</math>}}
Using {{<math span="phi0_ell">}}30^\circ{{</math>}} in place of {{<math span="phi_ell">}}40^\circ{{</math>}},
{{<math div="M0">}}
M_0 = 3319933.29\;\text{m}
{{</math>}}

From equation [(4-20)]({{<ref "sect_18#4-20">}}),
{{<math div="N">}}
\eqalign {
N &= 6378206.4/(1-0.0067687\sin^2 40^\circ)^{1/2} \cr
  &= 6387143.95\;\text{m}
}
{{</math>}}

From equations [(18-2)]({{<ref "sect_18#18-2">}}), [(18-12)]({{<ref "sect_18#18-12">}}), and [(18-13)]({{<ref "sect_18#18-13">}}),
{{<math div="E">}}
\eqalign{
E &= (-75^\circ - (-96^\circ))\sin40^\circ \cr
  &= 13.4985398^\circ
}
{{</math>}}
{{<math div="x_ell">}}
\eqalign{
x &= 6387143.95\cot 40^\circ\sin 13.4985398^\circ \cr
  &= 1776774.54\;\text{m}
}
{{</math>}}
{{<math div="y_ell">}}
\eqalign{
y =& 4429318.90 - 3319933.29 + 6387143.95\cot 40^\circ \cr
    & (1-\cos 13.4985398^\circ) \cr
  =& 1319657.78\;\text{m}
}
{{</math>}}
To calculate scale factor $h$, from equations [(18-16)]({{<ref "sect_18#18-16">}}) and [(18-15)]({{<ref "sect_18#18-15">}}),
{{<math div="D">}}
\eqalign{
D =& \arctan\{(13.4985398^\circ\times\pi/180^\circ-\sin13.4985398^\circ)/[\sec^240^\circ \cr
    & - \cos13.4985398^\circ - 0.0067687\sin^240^\circ/(1-0.0067687\sin^240^\circ)] \} \cr
  =& 0.1708381^\circ 
}
{{</math>}}
{{<math div="h">}}
\eqalign{
h =& [1-0.0067687 - 2(1-0.0067687\sin^2 40^\circ)\sin^2 ½(13.4985398^\circ)/ \cr
   & \tan^2 40^\circ]/(1-0.0067687)\cos 0.1708381^\circ \cr
  =& 1.0393954
}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="1776774.54" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="1319657.78" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find: $\phi, \lambda$

First calculating $M_0$, from equation [(3-21)]({{<ref "sect_18#3-21">}}), as in the forward example,
{{<math div="M0_inv">}}
{{</math>}}

Since $y \ne M_0$, from equations [(18-18)]({{<ref "sect_18#18-18">}}) and [(18-19)]({{<ref "sect_18#18-19">}}),
{{<math div="A_ell">}}
\eqalign{
  A &= (3319933.29+1319657.78)/6378206.4 \cr
    &= 0.7274131
}
{{</math>}}
{{<math div="B_ell">}}
\eqalign{
  B &= 1776774.54^2/6378206.4^2 + 0.7274131^2 \cr
    &= 0.6067309
}
{{</math>}}
Assuming an initial value of {{<math span="phi_n_ell">}}\phi_n = 0.7274131{{</math>}} the following calculations are made in radians from equations [(18-20)]({{<ref "sect_18#18-20">}}), [(3-21)]({{<ref "sect_18#3-21">}}), [(18-17)]({{<ref "sect_18#18-17">}}), and [(18-21)]({{<ref "sect_18#18-21">}}):
{{<math div="C">}}
\eqalign{
  C &= (1-0.0067687\sin^20.7274131)^{1/2}\tan0.7274131 \cr
    &= 0.8889365
}
{{</math>}}
{{<math div="Mn">}}
M_n = 4615626.09\;\text{m}
{{</math>}}
{{<math div="Mn_prime">}}
\eqalign{
  M'_n =& 1-0.0067687/4 - 3\times0.0067687^2/64 -5\times0.0067687^3/256 \cr
        & - 2\times (3\times0.0067687/8 + 3\times 0.0067687^2/32 \cr
        & + 45 \times 0.0067687^3/1024)\cos(2\times0.7274131) \cr
        & + 4\times(15\times0.0067687^2/256 + 45\times0.0067687^3/1024)\cos(4\times0.7274131) \cr
        & - 6\times(35\times0.0067687^3/3072)\cos(6\times0.7274131) \cr
        =& 0.9977068
}
{{</math>}}
{{<math div="M_a">}}
M_a = 4615626.09/6378206.4 = 0.7236558
{{</math>}}
{{<math div="phi_np1">}}
\eqalign{
  \phi_{n+1} =& 0.7274131 - [{\bf 0.7274131}\times(0.8889365\times0.7236558+1) \cr
                & -0.7236558 - ½(0.7236558^2 + 0.6067309)\times0.8889365]/ \cr
                & [0.0067687\sin(2\times0.7274131)\times(0.7236558^2 + 0.6067309 \cr
                & + 2\times {\bf 0.7274131} \times 0.7236558) / (4\times 0.8889365) \cr
                & + ({\bf 0.7274131} - 0.7236558)\times(0.8889365 \times 0.9977068 \cr
                & -2/\sin(2\times 0.7274131)) - 0.9977068] \cr
              =& 0.6967280\;\text{radians}                  
}
{{</math>}}
Substitution of {{<math span="phi_np1_1">}}0.6967280{{</math>}} in place of {{<math span="phi_n_1">}}0.7274131{{</math>}} in equations [(18-20)]({{<ref "sect_18#18-20">}}), [(3-21)]({{<ref "sect_18#3-21">}}), [(18-17)]({{<ref "sect_18#18-17">}}), and [(18-21)]({{<ref "sect_18#18-21">}}), except for boldface values, which are $A$, not $\phi_n$, a new $\phi_{n+1}$ of {{<math span="phi_np2">}}0.6981286{{</math>}} is obtained. Using this in place of the previous value results in a third of {{<math span="phi_np3">}}0.6981317{{</math>}}, which is unchanged by recalculation to seven decimals.
Thus,
{{<math div="phi_ell_inv">}}
\eqalign{
  \phi = 0.6981317 \times 180^\circ/\pi = 40^\circ
}
{{</math>}}
From equation [(18-22)]({{<ref "sect_18#18-22">}}), using the finally calculated $C$ of {{<math span="C3">}}0.8379255{{</math>}}
{{<math div="lam_ell_inv">}}
\eqalign{
  \lambda &= [\arcsin(1776774.54\times0.8379255/6378206.4)]/\sin40^\circ + (-96^\circ) \cr
          &= -75^\circ
}
{{</math>}}