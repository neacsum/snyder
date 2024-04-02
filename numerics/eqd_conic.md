---
title: Numerical Examples - Equidistant Conic Projection
weight: 90
description: Numerical examples for Equidistant Conic projection
mathjax: 2
css: numerics.css
menuTitle: Equidistant Conic
date: 2023-08-15
lastmode: 2024-02-16
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/eqd_conic.js"> </script>
{{</rawHTML>}}


# Numerical Examples for Equidistant Conic Projection 

## SPHERE
### Forward Equations
Given
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_sph_in" value="1.0" size="5" /> unit</td>
</tr>
<tr>
  <td>Standard parallels:</td>
  <td>$\phi_1=\;$<input id="phi1_sph_in" value="29.5" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\phi_2=\;$<input id="phi2_sph_in" value="45.5" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Origin:</td>
  <td>$\phi_0=\;$<input id="phi0_sph_in" value="23" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;$<input id="lam0_sph_in" value="-96" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sph_in" value="35.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_sph_in" value="-75.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}

Find $\rho, \theta, x, y, k$

From equations [(16-4)]({{<relref "sect_16#16-4">}}), [(16-3)]({{<relref "sect_16#16-3">}}), [(16-2)]({{<relref "sect_16#16-2">}}), [(16-1)]({{<relref "sect_16#16-1">}}), and [(14-4)]({{<relref "sect_16#14-4">}}) in order
{{<math div="n_sph">}}
\eqalign{
  n &= (\cos29.5^\circ-\cos45.5^\circ)/[(45.5^\circ-29.5^\circ)\times\pi/180^\circ] \cr
    &= 0.6067853
}
{{</math>}}
{{<math div="G_sph">}}
\eqalign{
  G &= (\cos29.5^\circ)/0.6067853 + 29.5^\circ\times\pi/180^\circ \cr
    &= 1.9492438
}
{{</math>}}
{{<math div="rho0_sph">}}
\eqalign{
  \rho_0 &= 1.0\times(1.9492438-23^\circ\times\pi/180^\circ) \cr
         &= 1.5478181\;\text{units}
}
{{</math>}}
{{<math div="rho_sph">}}
\eqalign{
  \rho &= 1.0\times(1.9492438-35^\circ\times\pi/180^\circ) \cr
       &= 1.3383786\;\text{units}
}
{{</math>}}
{{<math div="theta_sph">}}
\eqalign{
  \theta &= 0.6067853\times[-75^\circ - (-96^\circ)] \cr
         &= 12.7424921^\circ
}
{{</math>}}
Using equations [(14-1)]({{<relref "sect_16#14-1">}}), [(14-2)]({{<relref "sect_16#14-2">}}), and [(16-5)]({{<relref "sect_16#16-5">}}) in order,
{{<math div="x_sph">}}
\eqalign{
  x &= 1.3383786\sin12.7424921^\circ \cr
    &= 0.2952057\;\text{units}
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y &= 1.5478181-1.3383786\cos12.7424921^\circ \cr
    &= 0.2424021\;\text{units}
}
{{</math>}}
{{<math div="k_sph">}}
\eqalign{
  k &= (1.9492438-35^\circ\times\pi/180^\circ)/\cos35^\circ \cr
    &= 0.9914014
}
{{</math>}}
### Inverse Equations
Inversing forward example:

Given: $R, \phi1, \phi2, \phi_0, \lambda_0$, for forward example
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_sph_in" value="0.2952057" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_sph_in" value="0.2424021" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\rho, \theta, \phi, \lambda$.

Calculating $n, G,$ and $\rho_0$ as in the forward example,
{{<math div="n_g_rho0_sph_inv">}}
\eqalign{
  n &= 0.6067853 \cr
  G &= 1.9492438 \cr
  \rho_0 &= 1.5478181\;\text{units}
}
{{</math>}}
Using equations [(14-10)]({{<relref "sect_16#14-10">}}) and [(14-11)]({{<relref "sect_16#14-11">}}) in order,
{{<math div="rho_sph_inv">}}
\eqalign{
  \rho &= +[0.2952057^2+(1.5478181-0.2424021)^2]^{1/2} \cr
       &= 1.3383786\;\text{units,}\; \text{positive because \(n\) is positive}
}
{{</math>}}
{{<math div="theta_sph_inv">}}
\eqalign{
  \theta &= \arctan[0.2952057/(1.5478181-0.2424021)] \cr
         &= 12.7424936^\circ
}
{{</math>}}
Using equations [(16-6)]({{<relref "sect_16#16-6">}}) and [(14-9)]({{<relref "sect_16#14-9">}}) in order,
{{<math div="phi_sph_inv">}}
\eqalign{
  \phi &= [1.9492438 - 1.3383786/1.0]\times 180^\circ/\pi \cr
        &= 34.9999981^\circ
}
{{</math>}}
{{<math div="lam_sph_inv">}}
\eqalign{
  \lambda &= (-96^\circ) + 12.7424936^\circ/0.6067853 \cr
            &= -74.9999975^\circ
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
  <td>Standard parallels:</td>
  <td>$\phi_1=$</td>
  <td><input id="phi1_ell_in" value="29.5" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\phi_2=$</td>
  <td><input id="phi2_ell_in" value="45.5" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Origin:</td>
  <td>$\phi_0=$</td>
  <td><input id="phi0_ell_in" value="23.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=$</td>
  <td><input id="lam0_ell_in" value="-96.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="phi_ell_in" value="35.0" size="5">&deg;</td>
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
Find $\rho, \theta, x, y, k$.

From equation [(14-15)]({{<relref "sect_16#14-15">}}) and [(3-21)]({{<relref "sect_16#3-21">}}),
{{<math div="m_ell">}}
\eqalign{
  m &= \cos35^\circ/(1-0.0067687\sin^235^\circ)^{1/2} \cr
    &= 0.8200656
}
{{</math>}}
{{<math div="M_ell">}}
\eqalign{
  M =&6378206.4[(1-0.0067687/4-3\times 0.0067687^2/64 - 5\times 0.0067687^3/256)\times 35^\circ\times\pi/180^\circ \\
     &-(3\times 0.0067687/8+3\times 0.0067687^2/32 +45\times0.0067687^3/1024)\sin(2\times35^\circ) \\
     &+(15\times 0.0067687^2/256 +45\times 0.0067687^3/1024)\sin(4\times 35^\circ) \\
     &-(35\times 0.0067687^3/3072)\sin(6\times35^\circ)] \\
    =& 3874395.25\;\text{m}
}
{{</math>}}

Using the same equations, but with <span id="phi1_ell1">$\phi_1 = 29.5^\circ$</span> in place of <span id="phi_ell1">$35^\circ$</span>,
{{<math div="m1_ell">}}
m_1=0.8710708
{{</math>}}
{{<math div="M1_ell">}}
M_1=3264511.19\;\text{m}
{{</math>}}
Similarly, with  <span id="phi2_ell1">$\phi_2 = 45.5^\circ$</span> in place of <span id="phi_ell2">$35^\circ$</span>,
{{<math div="m2_ell">}}
m_2=0.7021191
{{</math>}}
{{<math div="M2_ell">}}
M_2=5040295.01\;\text{m}
{{</math>}}
and with <span id="phi0_ell1">$\phi_0 = 23^\circ$</span> in place of <span id="phi_ell3">$35^\circ$</span>
{{<math div="M0_ell">}}
M_0=2544389.74\;\text{m}
{{</math>}}

Using equations [(16-10)]({{<relref "sect_16#16-10">}}), [(16-11)]({{<relref "sect_16#16-11">}}), [(16-9)]({{<relref "sect_16#16-9">}}), [(16-8)]({{<relref "sect_16#16-8">}}), and [(14-4)]({{<relref "sect_16#14-4">}}) in order,
{{<math div="n_ell">}}
\eqalign{
  n &= 6378206.4\times(0.8710708-0.7021191)/(5040295.01-3264511.19) \cr
    &= 0.6068355
}
{{</math>}}
{{<math div="G_ell">}}
\eqalign{
  G &= 0.8710708/0.6068355+ 3264511.19/6378206.4 \cr
    &= 1.9472543
}
{{</math>}}
{{<math div="rho0_ell">}}
\eqalign{
  \rho_0 &= 6378206.4\times 1.9472543 - 2544389.74 \cr
         &= 9875600.03\;\text{m}
}
{{</math>}}
{{<math div="rho_ell">}}
\eqalign{
  \rho &= 6378206.4\times 1.9472543 - 3874395.25 \cr
       &= 8545594.52\;\text{m}
}
{{</math>}}
{{<math div="theta_ell">}}
\eqalign{
  \theta &= 0.6068355\times[-75^\circ-(-96^\circ)] \cr
         &= 12.7435456^\circ
}
{{</math>}}

Constants $n, G$, and $\rho_0$ apply to the entire map.
Using equations [(14-1)]({{<relref "sect_16#14-1">}}), [(14-2)]({{<relref "sect_16#14-2">}}), and [(16-7)]({{<relref "sect_16#16-7">}}) in order,
{{<math div="x_ell">}}
\eqalign{
  x &= 8545594.52\times \sin 12.7435456^\circ \cr
    &= 1885051.86\;\text{m}
}
{{</math>}}
{{<math div="y_ell">}}
\eqalign{
  y &= 9875600.03 - 8545594.52\times\cos12.7435456^\circ \cr
    &= 1540507.64\;\text{m}
}
{{</math>}}
{{<math div="k_ell">}}
\eqalign{
  k =& (1.9472543-3874395.25/6378206.4) \times 0.6068355/0.8200656 \cr
    =& 0.9914392
}
{{</math>}}


### Inverse Equations
Inversing forward example:

Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="1885051.86" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="1540507.64" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
Calculating $n, G$, and $\rho_0$ as in the forward example,
{{<math div="n_g_rho0_invell">}}
\eqalign{
  n &= 0.6068355 \cr
  G &= 1.9472543 \cr
  \rho_0 &= 9875600.03\;\text{m}
}
{{</math>}}
Using equations [(14-10)]({{<relref "sect_16#14-10">}}), [(14-11)]({{<relref "sect_16#14-11">}}), [(16-12)]({{<relref "sect_16#16-12">}}), [(7-19)]({{<relref "sect_16#7-19">}}), [(3-24)]({{<relref "sect_16#3-24">}}), and [(3-26)]({{<relref "sect_16#3-26">}}) in order,
{{<math div="rho_invell">}}
\eqalign{
  \rho &= +[1885051.86^2+(9875600.03-1540507.64)^2]^{1/2} \cr
        &= 8545594.52\;\text{m}\; \text{positive because \(n\) is positive}
}
{{</math>}}
{{<math div="theta_invell">}}
\eqalign{
  \theta &= \arctan[1885051.86/(9875600.03-1540507.64)] \cr
          &= 12.7435457^\circ
}
{{</math>}}
{{<math div="M_invell">}}
\eqalign{
  M &= 6378206.4\times 1.9472543 - 8545594.52 \cr
    &= 3874395.25\;\text{m}
}
{{</math>}}
{{<math div="mu_invell">}}
\eqalign{
  \mu =& 3874395.25 /[6378206.4\times(1-0.0067687/4 \cr
        & -3\times0.0067687^2/64 - 5\times0.0067687^3/256)] \cr
        =& 0.6084737 \;\text{radians} = 34.8629750^\circ 
}
{{</math>}}
{{<math div="e1_invell">}}
\eqalign{
  e_1 &= [1-(1-0.0067687)^{1/2}]/[1+(1-0.0067687)^{1/2}] \cr
      &= 0.001697916
}
{{</math>}}
{{<math div="phi_invell">}}
\eqalign{
  \phi =& 34.8629750^\circ+[(3\times0.0016979/2-27\times0.0016979^3/32)\sin(2\times34.8629750^\circ) \cr
          &+(21\times0.0016979^2/16-55\times0.0016979^4/32)\sin(4\times34.8629750^\circ) \cr
          &+(151\times0.0016979^3/96)\sin(6\times34.8629750^\circ) \cr
          &+(1097\times0.0016979^4/512)\sin(8\times34.8629750^\circ)]\times180^\circ/\pi \cr
        =&35.0000000^\circ 
}
{{</math>}}

Using equation [(14-9)]({{<relref "sect_16#14-9">}}),
{{<math div="lam_invell">}}
\eqalign{
  \lambda &= -96^\circ + 12.7435457^\circ/0.6068355 \cr
            &= -75.0000000^\circ
}
{{</math>}}
