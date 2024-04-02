---
title: Numerical Examples - Azimuthal Equidistant Projection
weight: 180
description: Numerical examples for Azimuthal Equidistant projection
mathjax: 2
css: numerics.css
menuTitle: Azimuthal Equidistant
date: 2024-02-24
lastmod: 2024-03-02
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/aeqd.js"> </script>
{{</rawHTML>}}
# Numerical Examples for Azimuthal Equidistant Projection
## SPHERE
### Forward Equations
Given
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_in" value="3.0" size="5" /> unit</td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_1=\;$<input id="phi1_sph_in" value="40.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;$<input id="lam0_sph_in" value="-100.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sph_in" value="-20" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_sph_in" value="100.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$

Using equations [(5-3)]({{<relref "sect_25#5-3">}}) and [(25-2)]({{<relref "sect_25#25-2">}}),
{{<math div="cosc">}}
\eqalign{
  \cos c &= \sin40^\circ\sin(-20^\circ) + \cos 40^\circ\cos(-20^\circ)\cos (100^\circ - (-100^\circ))\cr
          &= -0.8962806
}
{{</math>}}
{{<math div="c">}}
c = 153.6733925^\circ
{{</math>}}
{{<math div="kprime">}}
\eqalign{
  k' &= (153.6733925^\circ\times\pi/180^\circ)/\sin 153.6733925^\circ \cr
      &= 6.0477621
}
{{</math>}}

Using equations [(22-4)]({{<relref "sect_25#22-4">}}) and [(22-5)]({{<relref "sect_25#22-5">}}),
{{<math div="x_sph">}}
\eqalign{
  x &= 3.0\times6.0477621\cos(-20^\circ)\sin(100^\circ-(-100^\circ)) \cr
    &= -5.8311398\text{ units}
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y &= 3.0\times6.0477621[\cos40^\circ\sin(-20^\circ)-\sin40^\circ\cos(-20^\circ)\cos(100^\circ-(-100^\circ))]\cr
    &= 5.5444634\text{ units}
}
{{</math>}}

Since the above equations are general, examples of other forward formulas are not given.

### Inverse Equations
Inversing forward example:

Given: $R, \phi_1, \lambda_0$, for forward example
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_sph_in" value="-5.8311398" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_sph_in" value="5.5444634" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

Using equations [(20-18)]({{<relref "sect_25#20-18">}}) and [(25-15)]({{<relref "sect_25#25-15">}}),
{{<math div="rho_sph">}}
\eqalign{
  \rho &=[(-5.8311398)^2+5.5444634^2]^{1/2} \cr
       &= 8.0463200\text{ units}
}
{{</math>}}
{{<math div="c_inv">}}
\eqalign{
  c &= 8.0463200/3.0 \cr
    &= 2.6821067\text{ radians} \cr
    &= 153.6733925^\circ
}
{{</math>}}
Using equation [(20-14)]({{<relref "sect_25#20-14">}}),
{{<math div="phi_sph">}}
\eqalign{
  \phi &= \arcsin(\cos153.6733925^\circ\sin40^\circ-5.5444634\sin153.6733925^\circ\cos40^\circ/8.0463200) \cr
        &= -19.9999999^\circ
}
{{</math>}}
Using equation [(20-15)]({{<relref "sect_25#20-15">}}), using ATAN2 function and after adjusting the result to $(-180^\circ,\\;+180^\circ]$ range,
{{<math div="lam_sph">}}
\eqalign{
  \lambda =& -100^\circ + \arctan[(-5.8311398)\sin153.6733925^\circ/(8.0463200\cos40^\circ\cr
           & \cos153.6733925^\circ - 5.5444634\sin40^\circ\sin153.6733925^\circ)] \cr
          =& 99.9999999^\circ
}
{{</math>}}
## ELLIPSOID 
### Polar Aspect
#### Forward Equations
{{< rawHTML >}}
Given: <br/>
<table>
<tr>
  <td>
    <select id="pol" onchange="pol.select(this.options[this.selectedIndex].value)">
      <option value="0" selected>International</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td>$a=$</td>
  <td id="pol_a">6378388. m</td>
</tr>
<tr>
  <td></td>
  <td>$e^2=$</td>
  <td id="pol_e2">0.00672267</td>
</tr>
<tr>
  <td></td>
  <td>$e=$</td>
  <td id="pol_e">0.0819919</td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_1=$</td>
  <td><select id="phi1_pol_in">
      <option value="-90">-90&deg; (South Pole)</option>
      <option value="90" selected>90&deg; (North Pole)</option>
    </select></td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=$</td>
  <td><input id="lam0_pol_in" value="-100" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="phi_pol_in" value="80.0" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$</td>
  <td><input id="lam_pol_in" value="5.0" size="5">&deg;</td>
</tr>
<tr>
  <td colspan="3" style="text-align:center"><input type="button" value="Set" onclick="pol.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, k$

Using equation [(3-21)]({{<relref "sect_25#3-21">}}),
{{<math div="M_pol">}}
\eqalign{
  M =&6378388.0\times[(1-0.0067227/4-3\times 0.0067227^2/64 - 5\times 0.0067227^3/256)\times 80^\circ\times\pi/180^\circ \cr
      &-(3\times 0.0067227/8+3\times 0.0067227^2/32 +45\times0.0067227^3/1024)\sin(2\times80^\circ) \cr
      &+(15\times 0.0067227^2/256 +45\times 0.0067227^3/1024)\sin(4\times 80^\circ) \cr
      &-(35\times 0.0067227^3/3072)\sin(6\times80^\circ)] \cr
    =& 8885403.07\text{ m}
}
{{</math>}}
Using the same equation [(3-21)]({{<relref "sect_25#3-21">}}), but with $90^\circ$ in place of {{<math span="phi_pol">}}80^\circ{{</math>}},
{{<math div="Mp_pol">}}
  M_p = 10002288.30\text{ m}
{{</math>}}
Using equation [(14-15)]({{<relref "sect_25#14-15">}}),
{{<math div="m_pol">}}
\eqalign{
  m &= \cos80^\circ/(1-0.0067227\sin^280^\circ)^{1/2} \cr
    &= 0.1742171
}
{{</math>}}
Using equations [(25-16)]({{<relref "sect_25#25-16">}}), [(21-30)]({{<relref "sect_25#21-30">}}), [(21-31)]({{<relref "sect_25#21-31">}}), and [(21-32)]({{<relref "sect_25#21-32">}}),
{{<math div="rho_pol">}}
\eqalign{
  \rho &= 10002288.30-8885403.07 \cr
        &= 1116885.23\text{ m}
}
{{</math>}}
{{<math div="x_pol">}}
\eqalign{
  x &= 1116885.23\sin[5^\circ-(-100^\circ)]\cr
    &= 1078828.29\text{ m}
}
{{</math>}}
{{<math div="y_pol">}}
\eqalign{
  y &= -1116885.23\cos[5^\circ-(-100^\circ)]\cr
    &= 289071.17\text{ m}
}
{{</math>}}
{{<math div="k_pol">}}
\eqalign{
  k &= 1116885.23/(6378388.0\times0.1742171)\cr
    &= 1.0050946
}
{{</math>}}
#### Inverse Equations

Inversing forward example:  
Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_pol_in" value="1078828.3" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_pol_in" value="289071.2" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="pol.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find: $\phi, \lambda$

Using equation [(3-21)]({{<relref "sect_25#3-21">}}), as in the corresponding forward example,
{{<math div="Mp_pol_inv">}}
M_p = 10002288.30\text{ m}
{{</math>}}
Using equations [(20-18)]({{<relref "sect_25#20-18">}}), [(25-28)]({{<relref "sect_25#25-28">}}) or [(25-29)]({{<relref "sect_25#25-29">}}) for south polar case, and [(7-19)]({{<relref "sect_25#7-19">}}),
{{<math div="rho_pol_inv">}}
\eqalign{
  \rho &= [1078828.3^2 + 289071.2^2]^{1/2} \cr
       &= 1116885.25\text{ m}
}
{{</math>}}
{{<math div="M_pol_inv">}}
\eqalign{
  M &= 10002288.30 - 1116885.25 \cr
    &= 8885403.05\text{ m}
}
{{</math>}}
{{<math div="mu_pol_inv">}}
\eqalign{
  \mu =& 8885403.05/[6378388.0(1-0.0067227/4 - 3\times0.0067227^2/64 \cr
        & -5\times0.0067227^3/256)] \cr
        =& 79.9503324^\circ
}
{{</math>}}
Using equations [(3-24)]({{<relref "sect_25#3-24">}}) and [(3-26)]({{<relref "sect_25#3-26">}}),
{{<math div="e1_pol_inv">}}
\eqalign{
  e_1 &= [1-(1-0.0067227)^{1/2}]/[1+(1-0.0067227)^{1/2}] \cr
      &= 0.0016863
}
{{</math>}}
{{<math div="phi_pol_inv">}}
\eqalign{
  \phi =& 1.3953965\text{ radians}+(3\times0.0016863/2 - 27\times0.0016863^3/32)\sin(2\times79.9503324^\circ)+ \cr
          & (21\times0.0016863^2/16-55\times0.0016863^4/32)\sin(4\times79.9503324^\circ)+ \cr
          & (15\times0.0016863^3/96)\sin(6\times79.9503324^\circ)+ \cr
          & (1097\times0.0016863^4/512)\sin(8\times79.9503324^\circ) \cr
        =& 79.9999998^\circ 
}
{{</math>}}
Using equation [(20-16)]({{<relref "sect_25#20-16">}}) or [(20-17)]({{<relref "sect_25#20-17">}}) for the south polar case,
{{<math div="lam_pol_inv">}}
\eqalign{
  \lambda &= -100^\circ + \arctan[1078828.3/(-289071.2)] \cr
          &= 5.0000014^\circ
}
{{</math>}}
### Oblique Aspect (Guam)
#### Forward Equations
Given: [^1]

[^1]: Parameters for this projection are fixed

{{< rawHTML >}}
<table>
<tr>
  <td>Clarke 1866 ellipsoid</td>
  <td>$a=$</td>
  <td>6378206.4 m</td>
</tr>
<tr>
  <td></td>
  <td>$e^2=$</td>
  <td>0.00676866</td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_1=$</td>
  <td>13°28'20.87887"</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=$</td>
  <td>144°44'55.50254"</td>
</tr>
<tr>
  <td>False origin:</td>
  <td>$x_0=$</td>
  <td>50000 m</td>
</tr>
<tr>
  <td></td>
  <td>$y_0=$</td>
  <td>50000 m</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="phi_guam_in" value="13°20'20.53846&quot; N" size="15">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$</td>
  <td><input id="lam_guam_in" value="144°38'07.19265&quot; E" size="15">&deg;</td>
</tr>
<tr>
  <td colspan="3" style="text-align:center"><input type="button" value="Set" onclick="guam.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$

Using equation [(25-18)]({{<relref "sect_25#25-18">}}), after converting angles to degrees and decimals: ($\phi_1=13.472466353^\circ, \lambda_0=144.748750706^\circ$ {{<math span="phi_guam">}}\phi=13.339038461^\circ{{</math>}}, {{<math span="lam_guam">}}\lambda=144.635331292^\circ{{</math>}}),
{{<math div="xt_guam">}}
\eqalign{
  x =& 6378206.4\times(144.635331292^\circ-144.748750706^\circ)\times \pi/180^\circ\cr
      & \times\cos13.339038461^\circ/(1-0.0067687/\sin^213.339038461^\circ) \cr
    =& -12287.519\text{ m}  
}
{{</math>}}
Since $50000$ m is added to the origin for the Guam projection,
{{<math div="x_guam">}}
\eqalign{
  x &= -12287.519 + 50000.0 \cr
    &= 37712.48\text{ m}
}
{{</math>}}
From equation [(3-21)]({{<relref "sect_25#3-21">}}),
{{<math div="M_guam">}}
\eqalign{
  M =&6378206.4\times[(1-0.0067687/4-3\times 0.0067687^2/64 - 5\times 0.0067687^3/256)\times 13.3390385^\circ\times\pi/180^\circ \cr
      &-(3\times 0.0067687/8+3\times 0.0067687^2/32 +45\times0.0067687^3/1024)\sin(2\times13.3390385^\circ) \cr
      &+(15\times 0.0067687^2/256 +45\times 0.0067687^3/1024)\sin(4\times 13.3390385^\circ) \cr
      &-(35\times 0.0067687^3/3072)\sin(6\times13.3390385^\circ)] \cr
    =& 1475127.96\text{ m}
}
{{</math>}}
Substituting $\phi_1=13.472466353^\circ$ in place of {{<math span="phi_guam_1">}}13.339038461^\circ{{</math>}} in the same equation,
{{<math div="M1_guam">}}
M_1 = 1489888.76\text{ m}
{{</math>}}
Using equation [(25-19)]({{<relref "sect_25#25-19">}}), and using the x without false origin,
{{<math div="yt_guam">}}
\eqalign{
  y =& 1475127.96-1489888.76+(-12287.52)^2\tan13.339038461^\circ \cr
      & \times(1-0.0067687\sin^213.339038461^\circ)^{1/2}/(2\times6378206.4) \cr
    =& -14757.999\text{ m} 
}
{{</math>}}
Adding 50000 meters for the false origin,
{{<math div="y_guam">}}
\eqalign{
  y &= -14758.00 + 50000.0 \cr
    &= 35242.00\text{ m}
}
{{</math>}}

#### Inverse Equations

Inversing forward example:  
Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_guam_in" value="37712.48" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_guam_in" value="35242.00" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="guam.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find: $\phi, \lambda$

First subtract 50,000 m from $x$ and $y$ to relate them to actual projection origin: {{<math span="xt_guam_inv">}}x = -12287.52\text{ m} {{</math>}}, {{<math span="yt_guam_inv">}}y = -14758.00 \text{ m} {{</math>}}. Calculation of $M_1$ from equation [(3-21)]({{<relref "sect_25#3-21">}}) is exactly the same as in the forward example, or
{{<math div="M1_guam_inv">}}
M_1 = 1489888.76\text{ m}
{{</math>}}
From equation [(25-30)]({{<relref "sect_25#25-30">}}), the first trial M is found from an assumed $\phi = \phi_1$:
{{<math div="M_guam_inv_1">}}
\eqalign{
  M =& 1489888.76+(-14758.00)-(-12287.52)^2\tan13.472466353^\circ \cr
      & \times(1-0.0067687\sin^213.472466353^\circ)^{1/2}/(2\times6378206.4) \cr
    =& 1475127.93\text{ m} 
}
{{</math>}}
Using equation [(7-19)]({{<relref "sect_25#7-19">}}) and the above trial M,
{{<math div="mu_guam_inv_1">}}
\eqalign{
  \mu =& 1475127.93/[6378206.4(1-0.0067687/4 - 3\times0.0067687^2/64 \cr
        & -5\times0.0067687^3/256)] \cr
        =& 0.2316688\text{ radians}
}
{{</math>}}
Using equation [(3-24)]({{<relref "sect_25#3-24">}}),
{{<math div="e1_guam_inv">}}
\eqalign{
  e_1 &= [1-(1-0.0067687)^{1/2}]/[1+(1-0.0067687)^{1/2}] \cr
      &= 0.0016979
}
{{</math>}}
Using equation [(3-26)]({{<relref "sect_25#3-26">}}) in _radians_, although it could be converted to degrees,
{{<math div="phi_guam_inv_1">}}
\eqalign{
  \phi =& 0.2316688+(3\times0.0016979/2 - 27\times0.0016979^3/32)\sin(2\times0.2316688)+ \cr
          & (21\times0.0016979^2/16-55\times0.0016979^4/32)\sin(4\times0.2316688)+ \cr
          & (15\times0.0016979^3/96)\sin(6\times0.2316688)+ \cr
          & (1097\times0.0016979^4/512)\sin(8\times0.2316688) \cr
        =& 0.2328101\text{ radians} \cr 
        =& 0.2328101 \times 180^\circ/\pi = 13.3390382^\circ 
}
{{</math>}}
If this new trial value of $\phi$ is used in place of $\phi_1$, in equation [(25-30)]({{<relref "sect_25#25-30">}}), a new value of M is found:
{{<math div="M_guam_inv_2">}}
M = 1475127.96\text{ m}
{{</math>}}
This in turn, used in [(7-19)]({{<relref "sect_25#7-19">}}), gives
{{<math div="mu_guam_inv_2">}}
\mu = 0.2316688 \text{ radians} = 13.2736455^\circ
{{</math>}}
and from [(3-26)]({{<relref "sect_25#3-26">}}),
{{<math div="phi_guam_inv">}}
\phi = 13.3390385^\circ
{{</math>}}
The third trial, through the above equations and starting with this value of $\phi$, produces no change to seven decimal places. Thus, this is the final value of $\phi$.
Converting to degrees, minutes, and seconds,
{{<math div="phi_guam_dms">}}
\phi = 13^\circ20'20.5384''
{{</math>}}

Using equation [(25-31)]({{<relref "sect_25#25-31">}}) for longitude,
{{<math div="lam_guam_inv">}}
\eqalign{
  \lambda =& 144.7487507^\circ + [(-12287.52)\times(1-0.0067687\sin^213.3390385^\circ)^{1/2}/ \cr
            & (6378206.4\cos13.3390385^\circ)]\times 180^\circ/\pi \cr
            =& 144.6353313^\circ \cr
            =& 144^\circ38'07.1926''
}
{{</math>}}

### Oblique Aspect (Micronesia)
#### Forward Equations
Given:

{{< rawHTML >}}
<table>
<tr>
  <td>
    <select id="ellip" onchange="ell.select(this.options[this.selectedIndex].value)")>
      <option value="0" selected>Clarke 1866</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td>$a=$
  <td id="ell_a">6378206.4</td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td>$e^2=$</td>
  <td id="ell_e2">0.00676866</td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_1=$</td>
  <td><input id="phi1_ell" value="15°11'05.6830&quot;" size="15" /></td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=$</td>
  <td><input  id="lam0_ell" value="145°44'29.9720&quot;" size="15"/></td>
</tr>
<tr>
  <td>False origin:</td>
  <td>$x_0=$</td>
  <td><input id="fe_ell" value="28657.52" size="7"/> m</td>
</tr>
<tr>
  <td></td>
  <td>$y_0=$</td>
  <td><input id="fn_ell" value="67199.99" size="7"/> m</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="phi_ell_in" value="15°14'47.4930&quot;" size="15">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$</td>
  <td><input id="lam_ell_in" value="145°47'34.9080&quot;" size="15">&deg;</td>
</tr>
<tr>
  <td colspan="3" style="text-align:center"><input type="button" value="Set" onclick="ell.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$

First convert angles to degrees and decimals:
{{<math div="deg_ell">}}
\eqalign{
  \phi_1    &= 15.1849119^\circ \cr
  \lambda_0 &= 145.7416589^\circ \cr
  \phi      &= 15.2465258^\circ \cr
  \lambda   &= 145.79303^\circ
}
{{</math>}}

From equations [(4-20a)]({{<relref "sect_25#4-20a">}}), [(4-20)]({{<relref "sect_25#4-20">}}), [(25-20)]({{<relref "sect_25#25-20">}}), and [(25-21)]({{<relref "sect_25#25-21">}}) in order,
{{<math div="N1_ell">}}
\eqalign{
  N_1 &= 6378206.4/(1-0.0067687\sin^215.1849119^\circ)^{1/2} \cr
    &= 6379687.93\text{ m}
}
{{</math>}}
{{<math div="N_ell">}}
\eqalign{
  N &= 6378206.4/(1-0.0067687\sin^215.2465258^\circ)^{1/2} \cr
    &= 6379699.69\text{ m}
}
{{</math>}}
{{<math div="psi_ell">}}
\eqalign{
  \psi =& \arctan[(1-0.0067687)\tan15.2465258^\circ+0.0067687\times \cr
          & 6379687.93\times\sin15.1849119^\circ/(6379699.69\times\cos15.2465258^\circ)] \cr
        =& 15.2461374^\circ 
}
{{</math>}}
{{<math div="Az_ell">}}
\eqalign{
  Az =& \arctan\{ \sin(145.79303^\circ-145.7416589^\circ)/[\cos15.1849119^\circ \cr
      & \tan15.2461374^\circ- \sin15.1849119^\circ\cos(145.79303^\circ-145.7416589^\circ)]\} \cr
      =& 38.9881344^\circ
}
{{</math>}}
<div id="az_notzero">

Since $\sin Az \ne 0$, from equation [(25-22a)]({{<relref "sect_25#25-22a">}}),
</div>
<div id="az_zero" style="display: none">

Since $\sin Az = 0$, from equation [(25-22)]({{<relref "sect_25#25-22">}}),
</div>
{{<math div="s_ell">}}
\eqalign{
  s =& \arcsin[\sin(145.79303^\circ-145.7416589^\circ)\cos15.2461374^\circ/ \cr
      & \sin38.9881344^\circ] \cr
    =& 0.001374913\text{ radians} 
}
{{</math>}}

From equations [(25-23)]({{<relref "sect_25#25-23">}}) through [(25-27)]({{<relref "sect_25#25-27">}}) in order,

{{<math div="G_ell">}}
\eqalign{
  G &= 0.0067687^{1/2}\sin15.1849119^\circ/(1-0.0067687)^{1/2}\cr
    &= 0.021623198
}
{{</math>}}
{{<math div="H_ell">}}
\eqalign{
  H &= 0.0067687^{1/2}\sin15.1849119^\circ/(1-0.0067687)^{1/2}\cr
    &= 0.061925215
}
{{</math>}}
{{<math div="c_ell">}}
\eqalign{
  c =& 6379687.93\times0.001374913\times\{1-0.001374913^2\times0.061925215^2\times(1-0.061925215^2)/6 \cr
      & +(0.001374913^3/8)\times0.021623198\times0.061925215\times(1-2\times0.061925215^2) \cr
      & +(0.001374913^4/120)[0.061925215^2\times(4-7\times0.061925215^2)-3\times0.021623198^2\cr
      & \times(1-7\times0.061925215^2)]-(0.001374913^5/48)\times0.021623198\times0.061925215 \} \cr
    =& 8771.52\text{ m} 
}
{{</math>}}
{{<math div="x_ell">}}
\eqalign{
  x &= 8771.52\sin38.9881344^\circ + 28657.52 \cr
    &= 34176.20 \text{ m}
}
{{</math>}}
{{<math div="y_ell">}}
\eqalign{
  y &= 8771.52\cos38.9881344^\circ + 67199.99 \cr
    &= 74017.88 \text{ m}
}
{{</math>}}

#### Inverse Equations
Inversing forward example:

Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="34176.20" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="74017.88" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find: $\phi, \lambda$

From equations [(25-32)]({{<relref "sect_25#25-32">}}) through [(25-41)]({{<relref "sect_25#25-41">}}) in order,
{{<math div="c_elli">}}
\eqalign{
  c &= [(34176.2-28657.52)^2 + (74017.88-67199.99)^2]^{1/2} \cr
    &= 8771.51\text{ m}
}
{{</math>}}
{{<math div="az_elli">}}
\eqalign{
  Az &= \arctan[(34176.2-28657.52) / (74017.88-67199.99)] \cr
      &= 38.9881292^\circ
}
{{</math>}}
{{<math div="N1_elli">}}
\eqalign{
  N_1 &= 6378206.4/(1-0.0067687\sin^215.1849119^\circ)^{1/2} \cr
    &= 6379687.93\text{ m}
}
{{</math>}}
{{<math div="A_elli">}}
\eqalign{
  A =& -0.0067687\cos^215.1849119^\circ\cos^238.9881292^\circ/ \cr
      & (1-0.0067687) \cr
    =& -0.003834730
}
{{</math>}}
{{<math div="B_elli">}}
\eqalign{
  B =& 3\times0.0067687\times(1-(-0.003834730))\cos15.1849119^\circ \cr
      & \sin15.1849119^\circ\cos38.9881292^\circ/(1-0.0067687) \cr
    =& 0.004032465 
}
{{</math>}}
{{<math div="D_elli">}}
\eqalign{
  D &= 8771.51/6379687.93 \cr
    &= 0.0013749
}
{{</math>}}
{{<math div="E_elli">}}
\eqalign{
  E =& 0.0013749-(-0.003834730)\times0.0013749^3/6\cr
      & -0.004032465\times(1+3\times(-0.003834730))\times0.0013749^4/24 \cr
    =& 0.001374913 \text{ radians} \cr
    =& 0.0787767^\circ 
}
{{</math>}}
{{<math div="F_elli">}}
\eqalign{
  F =& 1-(-0.003834730)\times0.001374913^2/6-0.004032465 \cr
      & \times0.001374913^3/6 \cr
    =& 1.000000004
}
{{</math>}}
{{<math div="psi_elli">}}
{{</math>}}
{{<math div="lam_elli">}}
{{</math>}}
{{<math div="phi_elli">}}
{{</math>}}
