---
title: Numerical Examples - Stereographic Projection
menuTitle: Stereographic
weight: 140
description: Numerical examples for Stereographic projection
mathjax: 2
css: numerics.css
date: 2024-02-07
lastmod: 2024-02-13
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/stereo.js"> </script>
{{</rawHTML>}}

# Numerical Examples for Stereographic Projection 

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
  <td>Central scale factor:</td>
  <td>$k_0=\;$<input id="k0_sph_in" value="1.0" size="5"/></td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sph_in" value="30" size="5"/> &deg;</td>
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

Find $x, y, k$

Using equations [(21-4)]({{<ref "sect_21#21-4">}}), [(21-2)]({{<ref "sect_21#21-2">}}), and [(21-3)]({{<ref "sect_21#21-3">}}) in order,
{{<math div="k_sph">}}
\eqalign {
  k &= 2\times 1.0/[1+\sin40^\circ\sin30^\circ+\cos40^\circ\cos30^\circ\cos(-75^\circ-(-100^\circ))] \cr
    &= 1.0402304
}
{{</math>}}
{{<math div="x_sph">}}
\eqalign{
  x &= 1.0\times1.0402304\cos30^\circ\sin(-75^\circ-(-100^\circ)) \cr
    &= 0.3807224\;\text{units}
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
      y &= 1.0\times1.0402304[\cos40^\circ\sin30^\circ - \sin40^\circ\cos30^\circ\cos(-75^\circ-(-100^\circ))] \cr
        &= -0.1263802\;\text{units}
    }
{{</math>}}
Examples of other forward equations are omitted, since the above equations are general.

### Inverse Equations
Inversing forward example:

Given $R, \phi_1, \lambda_0, k_0$ for forward example
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Point:</td>
  <td>$x=\;$<input id="x_sph_in" value="0.3807224" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td>$y=\;$<input id="y_sph_in" value="-0.1263802" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$

Using equations [(21-18)]({{<ref "sect_21#21-18">}}) and [(21-19)]({{<ref "sect_21#21-19">}}),
{{<math div="rho_sph">}}
\rho = [0.3807224^2 + (-0.1263802)^2]^{1/2} = 0.4011502\;\text{units}
{{</math>}}
{{<math div="c_sph">}}
\eqalign{
  c &= 2 \arctan[0.4011502/(2\times1.0\times1.0)] \cr
    &= 22.6832261^\circ
}
{{</math>}}
Using equations [(21-14)]({{<ref "sect_21#21-14">}}) and [(21-15)]({{<ref "sect_21#21-15">}}),
{{<math div="phi_sph">}}
\eqalign{
  \phi =& \arcsin[\cos22.6832261^\circ\sin40^\circ + (-0.1263802)\sin22.6832261^\circ \cr
          & \cos40^\circ/0.4011502] \cr
        =& 29.9999991^\circ 
}
{{</math>}}
{{<math div="lam_sph">}}
\eqalign{
  \lambda =& -100^\circ + \arctan[-0.1503837\sin12.9082572^\circ/(0.2233906 \cr
            &\cos40^\circ\cos12.9082572^\circ - (-0.1651911)\sin40^\circ \sin12.9082572^\circ)] \cr
            =& -109.9999978^\circ 
}
{{</math>}}

## ELLIPSOID 
### Oblique Aspect
#### Forward Equations
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
  <td></td>
  <td>$e=$</td>
  <td id="ellip_e">0.0822719</td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_1=$</td>
  <td><input id="phi1_ell_in" value="40" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=$</td>
  <td><input id="lam0_ell_in" value="-100" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Central scale factor:</td>
  <td>$k_0=$</td><td><input id="k0_ell_in" value="0.9999" size="5"/></td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="phi_ell_in" value="30.0" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$</td>
  <td><input id="lam_ell_in" value="-90.0" size="5">&deg;</td>
</tr>
<tr>
  <td colspan="3" style="text-align:center"><input type="button" value="Set" onclick="ell.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, k$

From equation [(3-1)]({{<ref "sect_21#3-1">}}),
{{<math div="chi1">}}
\eqalign{
  \chi_1 =& 2\arctan\{ \tan(45^\circ + 40^\circ/2)[(1-0.0822719\sin40^\circ)/ \cr
            & (1+0.0822719\sin40^\circ)]^{0.0822719/2} \} -90^\circ \cr
          =& 2\arctan2.1351882-90^\circ \cr
          =& 39.8085922^\circ
}
{{</math>}}
{{<math div="chi">}}
\eqalign{
  \chi =& 2\arctan\{ \tan(45^\circ + 30^\circ/2)[(1-0.0822719\sin30^\circ)/ \cr
          & (1+0.0822719\sin30^\circ)]^{0.0822719/2} \} -90^\circ \cr
        =& 2\arctan1.7261956-90^\circ \cr
        =& 29.8318339^\circ
}
{{</math>}}
From equation [(14-15)]({{<ref "sect_21#14-15">}}),
{{<math div="m1">}}
\eqalign{
  m_1 &= \cos40^\circ/(1-0.0067687\sin^240^\circ)^{1/2} \cr
      &= 0.7671179
}
{{</math>}}
{{<math div="m">}}
\eqalign{
  m &= \cos30^\circ/(1-0.0067687\sin^230^\circ)^{1/2} \cr
    &= 0.8667591
}
{{</math>}}
From equation [(21-27)]({{<ref "sect_21#21-27">}}),
{{<math div="A">}}
\eqalign{
  A =& 2\times6378206.4\times0.9999\times0.7671179/\{ \cos39.8085922^\circ \cr
      & [1+\sin39.8085922^\circ\sin29.8318339^\circ + \cos39.8085922^\circ \cr
      & \cos29.8318339^\circ\cos(-90^\circ-(-100^\circ))]\} \cr
    =& 6450107.68\;\text{m}
}
{{</math>}}
From equations [(21-24)]({{<ref "sect_21#21-24">}}), [(21-25)]({{<ref "sect_21#21-24">}}), and [(21-26)]({{<ref "sect_21#21-26">}}),
{{<math div="x">}}
\eqalign{
  x &= 6450107.68\cos29.8318339^\circ\sin(-90^\circ-(-100^\circ)) \cr
    &= 971630.79\;\text{m}
}
{{</math>}}
{{<math div="y">}}
\eqalign{
  y =& 6450107.68[\cos39.8085922^\circ\sin29.8318339^\circ \cr
      & - \sin39.8085922^\circ\cos29.8318339^\circ\cos(-90^\circ-(-100^\circ))] \cr
    =& -1063049.26\;\text{m} 
}
{{</math>}}
{{<math div="k">}}
\eqalign{
  k &= 6378206.40\cos29.8318339^\circ/(6378206.40\times0.8667591) \cr
    &= 1.0121248
}
{{</math>}}
#### Inverse Equations
Inversing forward example:

Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="971630.79" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="-1063049.26" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find: $\phi, \lambda$

From equation [(14-15)]({{<ref "sect_21#14-15">}}),
{{<math div="m1_inv">}}
\eqalign{
  m_1 &= \cos40^\circ/(1-0.0067687\sin^240^\circ)^{1/2} \cr
      &= 0.7671179
}
{{</math>}}
From equation [(3-11)]({{<ref "sect_21#3-11">}}), as in the forward oblique example,
{{<math div="chi1_inv">}}
\chi_1 = 39.8085922^\circ
{{</math>}}
From equations [(20-18)]({{<ref "sect_21#20-18">}}) and [(21-38)]({{<ref "sect_21#21-38">}}),
{{<math div="rho_inv">}}
\eqalign{
  \rho &= [971630.79^2 + (-1063049.26)^2]^{1/2} \cr
        &= 1440187.53\text{ m}
}
{{</math>}}
{{<math div="ce_inv">}}
\eqalign{
  c_e =& 2\arctan[1440187.57\cos39.8085922^\circ/(2\times6378206.40 \cr
        & \times0.9999)\times0.7671179] \cr
      =& 12.9018251^\circ
}
{{</math>}}
From equation [(21-37)]({{<ref "sect_21#21-37">}}),
{{<math div="chi_inv">}}
\eqalign{
  \chi =& \arcsin[\cos12.9018251^\circ\sin0.6947910040690184+(-1063049.3)\sin12.9018251^\circ\cr
          & \cos39.8085922^\circ/1440187.57] \cr
        =& 29.8318335^\circ 
}
{{</math>}}
Using $\chi$ as the first trial $\phi$ in equation [(3-4)]({{<ref "sect_21#3-4">}}),
{{<math div="phi0_inv">}}
\eqalign{
  \phi =& 2\arctan\{ \tan(45^\circ + 29.8318335^\circ/2)[(1-0.0822719\sin29.8318335^\circ)/ \cr
          & (1+0.0822719\sin29.8318335^\circ)]^{0.0822719/2} \} -90^\circ \cr
        =& 29.9991438^\circ
}
{{</math>}}
Using this new trial value in the same equation for $\phi$, not for $\chi$,
{{<math div="phi1_inv">}}
\eqalign{
  \phi =& 2\arctan\{ \tan(45^\circ + 29.8318335^\circ/2)[(1-0.0822719\sin29.9991438^\circ)/ \cr
          & (1+0.0822719\sin29.9991438^\circ)]^{0.0822719/2} \} -90^\circ \cr
        =& 29.9999953^\circ
}
{{</math>}}
Repeating with {{<math span="phi1_inv_1">}}29.9999953^\circ{{</math>}} in place of {{<math span="phi0_inv_1">}}29.9991438^\circ{{</math>}}, the next trial $\phi$ is
{{<math div="phi_inv">}}
\phi = 29.9999996^\circ
{{</math>}}
The next trial calculation produces the same $\phi$ to seven decimals. Therefore,
this is $\phi$.

Using equation [(21-36)]({{<ref "sect_21#21-37">}}),
{{<math div="lam_inv">}}
\eqalign{
      \lambda =& -100^\circ+\arctan[971630.8\sin12.9018251^\circ \cr
             & (1440187.57\cos39.8085922^\circ\cos12.9018251^\circ \cr
             & -(-1063049.30)\sin39.8085922^\circ\sin12.9018251^\circ)] \cr
            =& -100^\circ+\arctan(216946.86/1230366.77) \cr
            =& -100^\circ+10.0000000^\circ \cr
            =& -90.0000000^\circ
    }
{{</math>}}

Instead of the iterative equation [(3-4)]({{<ref "sect_21#3-4">}}), series equation [(3-5)]({{<ref "sect_21#3-5">}}) may be used (omitting terms with $e^8$ here for simplicity):
{{<math div="phi_inv_alt">}}
\eqalign{
  \phi =& 29.8318335^\circ\times \pi/180^\circ + (0.0067687/2 + 5\times0.0067687^2/24 \cr
          & 0.0067687^3/12)\sin(2\times29.8318335^\circ)+(7\times0.0067687^2/48 \cr
          & + 29\times0.0067687^3/240)\sin(4\times29.8318335^\circ) \cr
          & + (7\times0.0067687^3/120)\sin(6\times29.8318335^\circ) \cr
        =& 0.5235988\text{ radian} \cr
        =& 29.9999995^\circ
}
{{</math>}}

### Polar Aspect With Known $k_0$
#### Forward Equations
{{< rawHTML >}}
Given: <br/>
<table>
<tr>
  <td>
    <select id="pol1" onchange="pol1.select(this.options[this.selectedIndex].value)">
      <option value="0" selected>International</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td>$a=$</td>
  <td id="pol1_a">6378206.4 m</td>
</tr>
<tr>
  <td></td>
  <td>$e^2=$</td>
  <td id="pol1_e2">0.00672267</td>
</tr>
<tr>
  <td></td>
  <td>$e=$</td>
  <td id="pol1_e">0.0819919</td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_1=$</td>
  <td><select id="phi1_pol1_in">
      <option value="-90" selected>-90&deg; (South Pole)</option>
      <option value="90">90&deg; (North Pole)</option>
    </select></td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=$</td>
  <td><input id="lam0_pol1_in" value="-100" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Central scale factor:</td>
  <td>$k_0=$</td><td><input id="k0_pol1_in" value="0.994" size="5"/></td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="phi_pol1_in" value="-75.0" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$</td>
  <td><input id="lam_pol1_in" value="150.0" size="5">&deg;</td>
</tr>
<tr>
  <td colspan="3" style="text-align:center"><input type="button" value="Set" onclick="pol1.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, k$

<div id="south_pole1">
Since this is the south polar aspect, for calculations change signs of $x, y, \phi_1, \lambda_1$, and $\lambda_0$: {{<math span="lam0_val">}}\lambda_0=100^\circ{{</math>}}, {{<math span="phi_val">}}\phi=75^\circ{{</math>}}, {{<math span="lam_val">}}\lambda=-150^\circ{{</math>}}
</div>

Using equations [(15-9)]({{<ref "sect_21#15-9">}}) and [(21-33)]({{<ref "sect_21#21-9">}}),
{{<math div="t_pol1">}}
\eqalign{
  t &= \tan(45^\circ-75^\circ/2)/[(1-0.0822719\sin 75^\circ)/(1+0.0822719\sin 75^\circ)]^{0.0822719/2} \cr
    &= 0.1325179
}
{{</math>}}
{{<math div="rho_pol1">}}
\eqalign{
  \rho =& 2\times6378388.0\times0.994\times0.1325120/[(1+0.0819919)^{(1+0.0819919)} \cr
          & \times(1-0.0819919)^{(1-0.0819919)}] \cr
        =& 1674638.30\text{ m}
}
{{</math>}}
Using equations [(21-30)]({{<ref "sect_21#21-30">}}) and [(21-31)]({{<ref "sect_21#21-31">}}),
{{<math div="x_pol1">}}
\eqalign{
  x &= 1674638.31\sin(-150^\circ-100^\circ) \cr
    &= 1573645.26\text{ m}
}
{{</math>}}
{{<math div="y_pol1">}}
\eqalign{
  y &= -1674638.31\cos(-150^\circ-100^\circ) \cr
    &= 572760.03\text{ m}
}
{{</math>}}
<div id="south_pole2">
Changing signs of x and y for the south polar aspect,
{{<math div="xs_pol1">}}
x = -1573645.26\text{ m}
{{</math>}}
{{<math div="ys_pol1">}}
y = -572760.03\text{ m}
{{</math>}}
</div>

From equation [(14-15)]({{<ref "sect_21#14-15">}}),
{{<math div="m_pol1">}}
\eqalign{
  m &= \cos 75^\circ/(1-0.0067227\sin^275^\circ)^{1/2}\cr
    &= 0.2596346
}
{{</math>}}
From equation [(21-32)]({{<ref "sect_21#21-32">}}),
{{<math div="k_pol1">}}
\eqalign{
  k &= 1674638.31/(6378388.0\times0.2596346) \cr
    &= 1.0112244
}
{{</math>}}
#### Inverse Equations

Inversing forward example:  
Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_pol1_in" value="-1573645.3" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_pol1_in" value="-572760.0" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="pol1.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find: $\phi, \lambda$
<div id="south_pole3">
Since this is the south polar aspect, for calculations change signs as stated in text: {{<math span="lam0_val_inv">}}\lambda_0=100^\circ{{</math>}}, {{<math span="x_val">}}x=1573645.3\text{ m}{{</math>}}, {{<math span="y_val">}}y=572760.0\text{ m}{{</math>}}.
</div>

From equations [(20-18)]({{<ref "sect_21#20-18">}}) and [(21-39)]({{<ref "sect_21#21-39">}}),
{{<math div="rho_pol1_inv">}}
\eqalign{
  \rho &= (1573645.3^2 + 572760.0^2)^{1/2} \cr
        &= 1674638.33\text{ m}
}
{{</math>}}
{{<math div="t_pol1_inv">}}
\eqalign{
  t =& 1674638.33\times[(1+0.0819919)^{(1+0.0819919)} \cr
      & (1-0.0819919)^{(1-0.0819919)}]^{1/2}/(2\times6378388.0\times0.994) \cr
    =& 0.1325120 
}
{{</math>}}

To iterate with equation [(7-9)]({{<ref "sect_21#7-9">}}), use as the first trial $\phi$,
{{<math div="phi0_pol1_inv">}}
\eqalign{
  \phi &= 90^\circ - 2\arctan 0.1325120 \cr
        &= 74.9031986^\circ
}
{{</math>}}
Substituting in [(7-9)]({{<ref "sect_21#7-9">}}),
{{<math div="phi1_pol1_inv">}}
\eqalign{
  \phi =& 90^\circ - 2\arctan\{0.1325120\times[(1-0.0819919\sin74.9031986^\circ)/ \cr
          & (1+0.0819919\sin74.9031986^\circ)]^{0.0819919/2} \} \cr
        =& 74.9999558^\circ
}
{{</math>}}
Using this second trial $\phi$ in the same equation instead of {{<math span="phi0_pol1_inv_1">}}74.9031986^\circ{{</math>}},
{{<math div="phi_pol1_inv">}}
\phi = 74.9999997^\circ
{{</math>}}
The third trial gives the same value to seven places.

From equation [(20-16)]({{<ref "sect_21#20-16">}}), using ATAN2 function and after adjusting the result to $(-180^\circ,\\;+180^\circ]$ range, 
{{<math div="lam_pol1_inv">}}
\eqalign{
  \lambda &= 100^\circ + \arctan[1573645.3/(-572760.0)] \cr
            &= -150.0000016^\circ
}
{{</math>}}

<div id="south_pole4">
The sign of $\phi$ and $\lambda$ must be reversed for the south polar aspect. Finally,
{{<math div="phi_pol1_inv_val">}}
\phi = -74.9999997^\circ
{{</math>}}

{{<math div="lam_pol1_inv_val">}}
\lambda = 150.0000016^\circ
{{</math>}}
</div>

### Polar Aspect With Known $\phi_c$
#### Forward Equations
{{< rawHTML >}}
Given: <br/>
<table>
<tr>
  <td>
    <select id="pol2" onchange="pol2.select(this.options[this.selectedIndex].value)">
      <option value="0" selected>International</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td>$a=$</td>
  <td id="pol2_a">6378206.4 m</td>
</tr>
<tr>
  <td></td>
  <td>$e^2=$</td>
  <td id="pol2_e2">0.00672267</td>
</tr>
<tr>
  <td></td>
  <td>$e=$</td>
  <td id="pol2_e">0.0819919</td>
</tr>
<tr>
  <td>Standard parallel:</td>
  <td>$\phi_c=$</td>
  <td><input id="phic_pol2_in" value="-71" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=$</td>
  <td><input id="lam0_pol2_in" value="-100" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="phi_pol2_in" value="-75.0" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$</td>
  <td><input id="lam_pol2_in" value="150.0" size="5">&deg;</td>
</tr>
<tr>
  <td colspan="3" style="text-align:center"><input type="button" value="Set" onclick="pol2.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, k$

<div id="south_pole5">
Since this is the south polar aspect, for calculations change signs of $x, y, \phi_c, \lambda_1$, and $\lambda_0$: {{<math span="phic_val">}}\phi_c=71^\circ{{</math>}}, {{<math span="lam0_pol2_val">}}\lambda_0=100^\circ{{</math>}}, {{<math span="phi_pol2_val">}}\phi=75^\circ{{</math>}}, {{<math span="lam_pol2_val">}}\lambda=-150^\circ{{</math>}}
</div>

Using equation [(15-9)]({{<ref "sect_21#15-9">}}),
{{<math div="t_pol2">}}
\eqalign{
  t &= \tan(45^\circ-75^\circ/2)/[(1-0.0819919\sin 75^\circ)/(1+0.0819919\sin 75^\circ)]^{0.0819919/2} \cr
    &= 0.1325120
}
{{</math>}}
For $t_c$ substitute {{<math span="phic_val_1">}}71^\circ{{</math>}} in place of {{<math span="phi_val_1">}}75^\circ{{</math>}} in [(15-9)]({{<ref "sect_21#15-9">}}), and
{{<math div="tc_pol2">}}
\eqalign{
  t_c &= \tan(45^\circ-71^\circ/2)/[(1-0.0819919\sin 71^\circ)/(1+0.0819919\sin 71^\circ)]^{0.0819919/2} \cr
    &= 0.1684118
}
{{</math>}}
From equations [(14-15)]({{<ref "sect_21#14-15">}}) and [(21-34)]({{<ref "sect_21#21-34">}}),
{{<math div="mc_pol2">}}
\eqalign{
m_c &= \cos 71^\circ/(1-0.0067227\sin^271^\circ)^{1/2}\cr
    &= 0.3265509
}
{{</math>}}
{{<math div="rho_pol2">}}
\eqalign{
  \rho &= 6378388.0\times0.3265509\times0.1325120/0.1684118 \cr
        &= 1638869.54\text{ m}
}
{{</math>}}
Equations [(21-30)]({{<ref "sect_21#21-30">}}), [(21-31)]({{<ref "sect_21#21-31">}}), and [(21-32)]({{<ref "sect_21#14-15">}}) are used as in the preceding south polar example,
{{<math div="x_pol2">}}
\eqalign{
  x &= 1638869.54\sin(-150^\circ-100^\circ) \cr
    &= 1540033.61\text{ m}
}
{{</math>}}
{{<math div="y_pol2">}}
\eqalign{
  y &= -1638869.54\cos(-150^\circ-100^\circ) \cr
    &= 560526.39\text{ m}
}
{{</math>}}
<div id="south_pole6">
Changing signs of x and y for the south polar aspect,
{{<math div="xs_pol2">}}
x = -1540033.61\text{ m}
{{</math>}}
{{<math div="ys_pol2">}}
y = -560526.39\text{ m}
{{</math>}}
</div>

{{<math div="m_pol2">}}
\eqalign{
  m &= \cos 75^\circ/(1-0.0067227\sin^275^\circ)^{1/2}\cr
    &= 0.2596346
}
{{</math>}}
{{<math div="k_pol2">}}
\eqalign{
  k &= 1638869.54/(6378388.0\times0.2596346) \cr
    &= 0.9896256
}
{{</math>}}

#### Inverse Equations

Inversing forward example:  
Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_pol2_in" value="-1540033.6" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_pol2_in" value="-560526.4" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="pol2.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find: $\phi, \lambda$
<div id="south_pole7">
Since this is the south polar aspect, for calculations change signs as stated in text: {{<math span="phic_pol2_val_inv">}}\phi_c=71^\circ{{</math>}}, {{<math span="lam0_pol2_val2_inv">}}\lambda_0=100^\circ{{</math>}}, {{<math span="x_pol2_val2">}}x=1540033.6\text{ m}{{</math>}}, {{<math span="y_pol2_val2">}}y=560526.4\text{ m}{{</math>}}.
</div>

From equations [(15-9)]({{<ref "sect_21#15-9">}}) and [(14-15)]({{<ref "sect_21#14-15">}}), as calculated in the corresponding forward example,

{{<math div="tc_pol2_inv">}}
\eqalign{
  t_c &= \tan(45^\circ-71^\circ/2)/[(1-0.0819919\sin 71^\circ)/(1+0.0819919\sin 71^\circ)]^{0.0819919/2} \cr
    &= 0.1684118
}
{{</math>}}
{{<math div="mc_pol2_inv">}}
\eqalign{
  m_c &= \cos 71^\circ/(1-0.0067227\sin^271^\circ)^{1/2}\cr
    &= 0.3265509
}
{{</math>}}

From equations [(20-18)]({{<ref "sect_21#20-18">}}) and [(21-40)]({{<ref "sect_21#21-40">}}),
{{<math div="rho_pol2_inv">}}
\eqalign{
  \rho &= [1540033.6^2 + 560526.4^2]^{1/2} \cr
        &= 1638869.53\text{ m}
}
{{</math>}}
{{<math div="t_pol2_inv">}}
\eqalign{
  t &= 1638869.53\times0.1684118/(6378388.0\times0.3265509) \cr
    &= 0.1325120
}
{{</math>}}
For the first trial $\phi$ in equation [(7-9)]({{<ref "sect_21#7-9">}})
{{<math div="phi0_pol2_inv">}}
\eqalign{
  \phi &= 90^\circ - 2\arctan 0.1325120 \cr
        &= 74.9031989^\circ
}
{{</math>}}
Substituting in [(7-9)]({{<ref "sect_21#7-9">}}),
{{<math div="phi1_pol2_inv">}}
\eqalign{
  \phi =& 90^\circ - 2\arctan\{0.1325120\times[(1-0.0819919\sin74.9031989^\circ)/ \cr
          & (1+0.0819919\sin74.9031989^\circ)]^{0.0819919/2} \} \cr
        =& 74.9999561^\circ
}
{{</math>}}
Replacing {{<math span="phi0_pol2_inv_1">}}74.9031989^\circ{{</math>}} with {{<math span="phi1_pol2_inv_1">}}74.9999561^\circ{{</math>}}, the next trial $\phi$ is
{{<math div="phi_pol2_inv">}}
\phi = 75.0000001^\circ
{{</math>}}
The next iteration results in the same $\phi$ to seven places.

From equation [(20-16)]({{<ref "sect_21#20-16">}}), using ATAN2 function and after adjusting the result to $(-180^\circ,\\;+180^\circ]$ range, 
{{<math div="lam_pol2_inv">}}
\eqalign{
  \lambda &= 100^\circ + \arctan[1540033.6/(-560526.4)] \cr
            &= -149.9999997^\circ
}
{{</math>}}

<div id="south_pole8">
The sign of $\phi$ and $\lambda$ must be reversed for the south polar aspect. Finally,
{{<math div="phi_pol2_inv_val">}}
\phi = -75.0000001^\circ
{{</math>}}

{{<math div="lam_pol2_inv_val">}}
\lambda = 149.9999997^\circ
{{</math>}}
</div>

