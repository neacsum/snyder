---
title: Numerical Examples - Transverse Mercator Projection
weight: 20
description: Numerical examples for Transverse Mercator projection
mathjax: 2
css: numerics.css
menuTitle: Transverse Mercator
date: 2023-02-09
lastmod: 2024-02-24
---
<script src="../js/format.js"> </script>
<script src="../js/tme.js"> </script>

# Numerical Examples for Transverse Mercator Projection
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
  <td>Origin:</td>
  <td>$\phi_0=\;$<input id="phi0_sph_in" value="0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;$<input id="lam0_sph_in" value="-75.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Central scale factor:</td>
  <td>$k_0=\;$<input id="k0_sph_in" value="1.0" size="5"/></td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sph_in" value="40.5" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lambda_sph_in" value="-73.5" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, k$

Using equations [(8-5)]({{<ref "sect_8#8-5">}}), [(8-1)]({{<ref "sect_8#8-1">}}), [(8-3)]({{<ref "sect_8#8-3">}}), and [(8-4)]({{<ref "sect_8#8-4">}}) in order
{{<math div="B_sph">}}\eqalign {
  B &= \cos 40.5^\circ \sin[(-73.5^\circ)-(-75.0^\circ)] \cr
    &= \cos 40.5^\circ \sin 1.5^\circ = 0.0199051
  }
{{</math>}}
{{<math div="x_sph">}}\eqalign{
  x &= \unicode{xbd} \times 1.0 \times 1.0 \ln[(1+0.0199051)/(1-0.0199051)] \cr
    &= 0.0199077 \; \text{units}
  }
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y &= 1.0\times1.0\times\{\arctan[\tan 40.5^\circ/\cos1.5^\circ - 0^\circ]\} \cr
    &= 1.0\times1.0\times0.7070276^\circ\pi/180^\circ \cr
    &= 0.7070276\; \text{units}
}
{{</math>}}
{{<math div="k_sph">}}
  k = 1.0/(1-0.0199051^2)^{1/2} = 1.0001982
{{</math>}}

### Inverse Equations
Inversing forward example:

Given: $R, \phi_0, \lambda_0, k_0$ for forward example
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_sph_in" value="0.0199077" size="7"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_sph_in" value="0.7070276" size="7"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

Using equation [(8-8)]({{<ref "sect_8#8-8">}})
{{<math div="d_sph">}}D = 0.7070276/(1.0\times 1.0) + 0 = 0.7070276\;\text{radians}{{</math>}}
For the hyperbolic functions of $(x/Rk_0)$, the relationships
{{<math>}}\sinh x =(\mathrm{e}^x-\mathrm{e}^{-x})/2 {{</math>}}
and
{{<math>}}\cosh x =(\mathrm{e}^x+\mathrm{e}^{-x})/2 {{</math>}}
are recalled if the function is not directly available on a given computer or calculator. In this case,
{{<math div="sinh">}}\eqalign {
  \sinh(x/Rk_0) &= \sinh[0.0199077/(1.0\times1.0)] \cr
                &= (\mathrm{e}^{0.0199077} - \mathrm{e}^{0.0199077})/2 \cr
                &= 0.0199090
  }
{{</math>}}
{{<math div="cosh">}}\eqalign {
  \cosh(x/Rk_0) &= \cosh[0.0199077/(1.0\times1.0)] \cr
                &= (\mathrm{e}^{0.0199077} + \mathrm{e}^{0.0199077})/2 \cr
                &= 1.0001982
  }
{{</math>}}
From equation [(8-6)]({{<ref "sect_8#8-6">}}), with D in radians, not degrees,
{{<math div="phi_sph">}}\eqalign{
  \phi &= \arcsin(\sin 0.7070276/1.0001982) = \arcsin(0.6495767/1.0001982) \cr
       &= 40.4999995^\circ
  }
{{</math>}}
From equation [(8-7)]({{<ref "sect_8#8-7">}}),
{{<math div="lambda_sph">}}\eqalign{
  \lambda &= -75.0^\circ + \arctan[0.0199090/0.7602960] \cr
          &= -75.0^\circ + \arctan 0.0261859 = -75.0^\circ + 1.4999972^\circ \cr
          &= -73.5000028^\circ
  }
{{</math>}}
If more decimals were supplied with the x and y calculated from the forward equations, the $\phi$ and $\lambda$ here would agree more exactly with the original values.

## ELLIPSOID
### Forward Equations
Given:
{{< rawHTML >}}
<table>
<tr>
  <td>
    <select id="ellip" onchange="ell.select(this.options[this.selectedIndex].value)">
      <option value="0" selected>Clarke 1866</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td id="ellip_a">$a=6378206.4\,\text{m}$</td>
</tr>
<tr>
  <td></td>
  <td id="ellip_e2">$e^2=0.00676866$</td>
</tr>
<tr>
  <td>Origin: (UTM zone 18)</td>
  <td>$\phi_0=\;$<input id="phi0_ell_in" value="0.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;$<input id="lam0_ell_in" value="-75.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Central scale factor</td>
  <td>$k_0=\;$<input id="k0_ell_in" value="0.9996" size="5"/></td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$<input id="phi_ell_in" value="40.5" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$<input id="lambda_ell_in" value="-73.5" size="5">&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="ell.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, k$.

Using equations [(8-12)]({{<ref "sect_8#8-12">}}) through [(8-15)]({{<ref "sect_8#8-15">}}) in order,
{{<math div="eprime2">}}e'^2 = 0.0067687/(1-0.0067687) = 0.0068148{{</math>}}
{{<math div="N">}}N = 6378206.4/(1-0.00676866\sin^240.5^\circ)^{1/2} = 6387330.52\;\text{m}{{</math>}}
{{<math div="T">}}T = \tan^2 40.5^\circ = 0.7294538{{</math>}}
{{<math div="C">}}C = 0.0068148\cos^2 40.5^\circ = 0.0039404{{</math>}}
{{<math div="A">}}A = (\cos40.5)\times[(-73.5^\circ) - (-75^\circ)]\pi/180^\circ = 0.0199074{{</math>}}
From equation [(3-21)]({{<ref "sect_3#3-21">}})[^1],
{{<math div="M">}}\begin{align}
  M =&6378206.4[(1-0.0067687/4-3\times 0.0067687^2/64 - 5\times 0.0067687^3/256)\times 40.5^\circ\times\pi/180^\circ \cr
     &-(3\times 0.0067687/8+3\times 0.0067687^2/32 +45\times0.0067687^3/1024)\sin(2\times40.5^\circ) \cr
     &+(15\times 0.0067687^2/256 +45\times 0.0067687^3/1024)\sin(4\times 40.5^\circ) \cr
     &-(35\times 0.0067687^3/3072)\sin(6\times40.5^\circ)] \cr
    =& 4484837.66\;\text{m}
  \end{align}
{{</math>}}

{{<math div="M0">}}\begin{align}
  M_0 =&6378206.4[(1-0.0067687/4-3\times 0.0067687^2/64 - 5\times 0.0067687^3/256)\times 0^\circ\times\pi/180^\circ \cr
      &-(3\times 0.0067687/8+3\times 0.0067687^2/32 +45\times0.0067687^3/1024)\sin(2\times0^\circ) \cr
      &+(15\times 0.0067687^2/256 +45\times 0.0067687^3/1024)\sin(4\times 0^\circ) \cr
      &-(35\times 0.0067687^3/3072)\sin(6\times0^\circ)] \cr
    =& 0.00\;\text{m}
  \end{align}
{{</math>}}
Equations [(8-9)]({{<ref "sect_8#8-9">}}) and [(8-10)]({{<ref "sect_8#8-10">}}) may now be used:
{{<math div="x_ell">}}\begin{align}
  x =& 0.9996\times6387330.52\times[0.0199074+(1-0.7294538+0.0039404) \cr
      &\times0.0199074^3/6+(5-18\times0.7294538+0.7294538^2+72\times0.0039404 \cr
      &-58\times0.006814784946237987)\times0.0199074^5/120] \cr
    =& 127106.47\;\text{m}
  \end{align}
{{</math>}}
{{<math div="y_ell">}}\begin{align}
  y =& 0.9996\times\{4484837.66-0.00+6387330.52\times0.8540807\times[0.0199074^2/2 \cr
     & +(5-0.7294538+9\times0.0039404+4\times0.0039404^2)\times0.0199074^4/24 \cr
     & +(61-58\times0.7294538+0.7294538^2+600\times0.0039404-330 \cr
     & \times0.0068148)\times0.0199074^6/720]\} \cr
    =& 4484124.43\;\text{m} 
  \end{align}
{{</math>}}

These values agree exactly with the UTM tabular values, except that 500,000.0m must be added to $x$ for "false eastings." To calculate $k$, using equation [(8-11)]({{<ref "sect_8#8-11">}}),
{{<math div="k_ell">}}\begin{align}
  k =& 0.9996\times[1+(1+0.0039404)\times0.0199074^2/2+(5-4\times0.7294538+42 \cr
     & \;\times0.0039404+13\times0.0039404^2-28\times0.0068148)\times0.0199074^4/24 \cr
     & \;+(61-148\times0.7294538+16\times0.7294538^2)\times0.0199074^6/720] \cr
    =& 0.9997989 
  \end{align}
{{</math>}}
Using equation [(8-16)]({{<ref "sect_8#8-16">}}) instead,
{{<math div="k_ell1">}}\begin{align}
  k =&0.9996\times[1+(1+0.0068148\cos^2 40.5^\circ)\times127106.47^2 \cr
     &(2\times0.9996^2\times6387330.52^2)] \cr
    =&0.9997989
  \end{align}
{{</math>}}
### Inverse Equations
Inversing forward example:

Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="127106.47" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="4484124.43" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

Calculating $M_0$ from equation [(3-21)]({{<ref "sect_3#3-21">}}),  
{{<math div="M0_inv">}}\begin{align}
  M_0 =&6378206.4[(1-0.0067687/4-3\times 0.0067687^2/64 - 5\times 0.0067687^3/256)\times 0^\circ\times\pi/180^\circ \cr
      &-(3\times 0.0067687/8+3\times 0.0067687^2/32 +45\times0.0067687^3/1024)\sin(2\times0^\circ) \cr
      &+(15\times 0.0067687^2/256 +45\times 0.0067687^3/1024)\sin(4\times 0^\circ) \cr
      &-(35\times 0.0067687^3/3072)\sin(6\times0^\circ)] \cr
    =& 0.00\;\text{m}
  \end{align}
{{</math>}}

From equations [(8-12)]({{<ref "sect_8#8-12">}}), [(8-20)]({{<ref "sect_8#8-20">}}), [(3-24)]({{<ref "sect_3#3-24">}}), and [(7-19)]({{<ref "sect_7#7-19">}}) in order,
{{<math div="eprime2-inv">}}e'^2 = 0.0067687/(1-0.0067687) = 0.0068148{{</math>}}
{{<math div="M-inv">}}M = 0 + 4484124.43/0.9996 = 4485918.80\;\text{m}{{</math>}}
{{<math div="e1">}}\eqalign{
  e_1 &= [1-(1-0.0067687)^{1/2}]/[1+(1-0.0067687)^{1/2}] \cr
      &= 0.0016979
  }
{{</math>}}
{{<math div="mu">}}\begin{align}
  \mu =& 4485918.80/[6378206.4\times(1-0.0067687/4-3\times0.0067687^2/64 \cr
       &\;-5\times0.0067687^3/256)] \cr
      =&0.7045135\;\text{radian}
  \end{align}
{{</math>}}
From equation [(3-26)]({{<ref "sect_3#3-26">}}), using $\mu$ in radians, omitting the last term,
{{<math div="phi1">}}\begin{align}
  \phi_1 =& 0.7045135 + (3\times0.0016979/2-27\times0.0016979^3/32)\sin(2\times0.7045135) \cr
          & +(21\times0.0016979^2/16-55\times0.0016979^4/32)\sin(4\times0.7045135) \cr
          & +(151\times0.0016979^3/96)\sin(6\times0.7045135) \cr
          =& 0.7070283\;\text{radian} \cr
          =& 0.7070283\times180^\circ/\pi \cr
          =& 40.5097362^\circ
  \end{align}
{{</math>}}
Now equations [(8-21)]({{<ref "sect_8#8-21">}}) through [(8-25)]({{<ref "sect_8#8-25">}}) may be used:
{{<math div="C1">}}C_1 = 0.0068148\cos^2(40.5097362^\circ) = 0.0039393{{</math>}}
{{<math div="T1">}}T_1=\tan^2(40.5097362^\circ) = 0.7299560{{</math>}}
{{<math div="N1">}}N_1=6378206.4/(1-0.0067687\sin^240.5097362^\circ)^{1/2} = 6387334.16\;\text{m}{{</math>}}
{{<math div="R1">}}
  \eqalign{
    R_1 &=6378206.4\times(1-0.0067687)/(1-0.0067687\sin^240.5097362^\circ)^{3/2} \cr
        &= 6362271.37\;\text{m}
  }
{{</math>}}
{{<math div="D">}}D=127106.47/(6387334.16\times0.9996) = 0.0199077{{</math>}}
Returning to equation [(8-17)]({{<ref "sect_8#8-17">}}),
{{<math div="phi">}}\begin{align}
  \phi =& 40.5097362^\circ -(6387334.16\times \tan40.5097362^\circ/6362271.37)\times [0.0199077^2/2 \cr
        & -(5+3\times0.7299560+10\times0.0039393-4\times0.0039393^2-9\times0.0068148) \cr
        & \times 0.0199077^4/24 +(61+90\times0.7299560+298\times0.0039393+45\times0.7299560^2\cr
        & -252\times0.0068148-3\times0.0039393^2)\times 0.0199077/720]\times180^\circ/\pi \cr
       =& 40.4999996^\circ 
  \end{align}
{{</math>}}
From equation [(8-18)]({{<ref "sect_8#8-18">}}),
{{<math div="lambda">}}\begin{align} 
  \lambda =& -75^\circ + [0.0199077 - (1 + 2\times0.7299560 + 0.0039393)0.0199077^3/6 \cr
          & +(5 - 2\times0.0039393 +28\times0.7299560 -3\times0.0039393^2 + 8\times0.0068148 \cr
          & +24\times0.7299560^2)/0.0199077^5/120]/\cos40.5097362^\circ \cr
         =& -73.5000000^\circ
  \end{align}
{{</math>}}

[^1]: For the length of meridional arcs, $M$ and $M_0$, Snyder uses equation [(3-22)]({{<ref "sect_3#3-22">}}) that works only for Clarke-1866 ellipsoid. Here, I changed to use the equation [(3-21)]({{<ref "sect_3#3-21">}}) that applies to any ellipsoid. 