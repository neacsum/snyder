---
title: Numerical Examples - Lambert Azimuthal Equal-Area
menuTitle: Lambert Azimuthal Equal-Area
weight: 170
description: Numerical examples for Lambert Azimuthal Equal-Area
mathjax: 2
css: numerics.css
date: 2024-02-16
lastmod: 2024-02-16
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/laea.js"> </script>
{{</rawHTML>}}

# Numerical Examples for Lambert Azimuthal Equal-Area 

## SPHERE
### Forward Equations
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_sph_in" value="3.0" size="5" /> units</td>
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
  <td>$\phi=\;$<input id="phi_sph_in" value="-20" size="5"/> &deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lam_sph_in" value="100" size="5"/> &deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}

Find $x, y$

Using equation [(24 -2)]({{<ref "sect_24#24-2">}}),
{{<math div="kprime">}}
\eqalign{
  k' &= \{2/[1+\sin40^\circ\sin(-20^\circ)+\cos40^\circ\cos(-20^\circ)\cos(100^\circ-(-100^\circ))] \}^{1/2} \cr
      &= 4.3912175
}
{{</math>}}
Using equations [(22-4)]({{<ref "sect_24#22-4">}}) and [(22-5)]({{<ref "sect_24#22-5">}}),
{{<math div="x_sph">}}
\eqalign{
  x &= 3.0\times4.3912175\cos(-20^\circ)\sin(100^\circ-(-100^\circ)) \cr
    &= -4.2339303\text{ units} 
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y &= 3.0\times4.3912175[\cos40^\circ\sin(-20^\circ)-\sin40^\circ\cos(-20^\circ)\cos(100^\circ-(-100^\circ))] \cr
    &= 4.0257775\text{ units}
}
{{</math>}}
Examples for the polar and equatorial reductions, equations [(24-3)]({{<ref "sect_24#24-3">}}) through [(24-14)]({{<ref "sect_24#24-14">}}), are omitted, since the above general equations give the same results.

### Inverse Equations
Inversing forward example:

Given $R, \phi_1, \lambda_0$ for forward example
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Point:</td>
  <td>$x=\;$<input id="x_sph_in" value="-4.2339303" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td>$y=\;$<input id="y_sph_in" value="4.0257775" size="8"/> units</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$

Using equations [(20-18)]({{<ref "sect_24#20-18">}}) and [(24-16)]({{<ref "sect_24#24-16">}}),
{{<math div="rho_sph">}}
\eqalign{
  \rho &= [(-4.2339303)^2 + 4.0257775^2]^{1/2} \cr
        &= 5.8423497 \text{ units}
}
{{</math>}}
{{<math div="c_sph">}}
\eqalign{
  c &= 2\arcsin[5.8423497/(2\times3.0)] \cr
    &= 153.6733917^\circ
}
{{</math>}}
From equation [(20-14)]({{<ref "sect_24#20-14">}}),
{{<math div="phi_sph">}}
\eqalign{
  \phi =& \arcsin[\cos153.6733917^\circ\sin40^\circ+4.0257775\sin2.6821067\cr
        & \cos40^\circ/5.8423497] \cr
       =& -19.9999993^\circ 
}
{{</math>}}
From equation [(20-15)]({{<ref "sect_24#20-15">}}), using the ATAN2 function and adjusting longitude to be between $-180^\circ$ and $+180^\circ$,
{{<math div="lam_sph">}}
\eqalign{
  \lambda =& -100^\circ + \arctan[-4.2339303\sin153.6733917^\circ / \cr
           & (5.8423497\cos40^\circ\cos153.6733917^\circ \cr
           & -4.0257775\sin40^\circ\sin153.6733917^\circ)] \cr
          =& -100^\circ + \arctan[-1.8776951/(-5.1589246)] \cr
          =& -100^\circ + (-159.9999996^\circ) \cr
          =& 100.0000004^\circ
}
{{</math>}}
In polar spherical cases, the calculation of $\lambda$ from equations [(20-16)]({{<ref "sect_24#20-16">}}) or [(20-17)]({{<ref "sect_24#20-17">}}) is simpler than the above, but the quadrant adjustment follows the same rules.

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
  <td>Point:</td>
  <td>$\phi=$</td>
  <td><input id="phi_ell_in" value="30.0" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$</td>
  <td><input id="lam_ell_in" value="-110.0" size="5">&deg;</td>
</tr>
<tr>
  <td colspan="3" style="text-align:center"><input type="button" value="Set" onclick="ell.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$

Using equation [(3-12)]({{<ref "sect_24#3-12">}}),
{{<math div="q">}}
\eqalign{
  q =& (1-0.0067687)\{\sin 30^\circ/(1-0.0067687) \cr
     & -[1/(2\times0.0822719)\ln[(1-0.0822719\sin^2 30^\circ)/ \cr
     & (1+0.0822719\sin^2 30^\circ)] \} \cr
    =& 0.9943535 
}
{{</math>}}
Inserting {{<math span="phi1_ell">}}\phi_1 = 40^\circ{{</math>}} in place of {{<math span="phi_ell_1">}}30^\circ{{</math>}} in the same equation,
{{<math div="q1">}}
q_1 = 1.2792602
{{</math>}}
Inserting $90^\circ$ in place of {{<math span="phi_ell_2">}}30^\circ{{</math>}},
{{<math div="qp">}}
q_p= 1.9954814
{{</math>}}
Using equation [(3-11)]({{<ref "sect_24#3-11">}}),
{{<math div="beta">}}
\eqalign{
  \beta &= \arcsin(0.9943535/1.9954814) \cr
        &= 29.8877622^\circ
}
{{</math>}}
{{<math div="beta1">}}
\eqalign{
  \beta_1 &= \arcsin(1.2792602/1.9954814) \cr
          &= 39.8722878^\circ
}
{{</math>}}
Using equation [(3-13)]({{<ref "sect_24#3-13">}}),
{{<math div="Rq">}}
\eqalign{
  R_q &= 6378206.4\times(1.9954814/2)^{1/2} \cr
      &= 6370997.24\text{ m}
}
{{</math>}}
Using equation [(14-15)]({{<ref "sect_24#14-15">}}),
{{<math div="m1">}}
\eqalign{
  m_1 &= \cos40^\circ/(1-0.0067687\sin^240^\circ)^{1/2} \cr
      &= 0.7671179
}
{{</math>}}
Using equations [(24-19)]({{<ref "sect_24#24-19">}}) and [(24-20)]({{<ref "sect_24#24-20">}}),
{{<math div="B">}}
\eqalign{
  B =& 6370997.24\times\{ 2/[1+\sin39.8722878^\circ\sin29.8877622^\circ \cr
      & + \cos39.8722878^\circ\cos29.8877622^\circ\cos(-110^\circ-(-100^\circ))]\}^{1/2} \cr
    =& 6411606.09\text{ m}
}
{{</math>}}
{{<math div="D">}}
\eqalign{
  D &= 6378206.4\times0.7671179/(6370997.24\cos39.8722878^\circ) \cr
    &= 1.0006653
}
{{</math>}}
Using equations [(24-17)]({{<ref "sect_24#24-17">}}) and [(24-18)]({{<ref "sect_24#24-18">}}),
{{<math div="x_ell">}}
\eqalign{
  x &= 6411606.09\times1.0006653\cos29.8877622^\circ\sin(-110^\circ-(-100^\circ)) \cr
    &= -965932.11\text{ m}
}
{{</math>}}
{{<math div="y_ell">}}
\eqalign{
  y =& (6411606.09/1.0006653)[\cos39.8722878^\circ\sin29.8877622^\circ \cr
      & - \sin39.8722878^\circ\cos29.8877622^\circ\cos(-110^\circ-(-100^\circ))]\cr
    =& -1056814.93\text{ m} 
}
{{</math>}}
#### Inverse Equations
Inversing forward example:

Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="-965932.1" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="-1056814.9" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find: $\phi, \lambda$

Since these are the same map parameters as those used in the forward example, calculations of map constants not affected by $\phi$ and $\lambda$ are not repeated here.
{{<math div="qp_inv">}}
q_p= 1.9954814
{{</math>}}
{{<math div="beta1_inv">}}
\beta_1 = 39.8722878^\circ
{{</math>}}
{{<math div="Rq_inv">}}
R_q = 6370997.24\text{ m}
{{</math>}}
{{<math div="D_inv">}}
D = 1.0006653
{{</math>}}
Using equations [(24-28)]({{<ref "sect_24#24-28">}}), [(24-29)]({{<ref "sect_24#24-29">}}) and [(24-27)]({{<ref "sect_24#24-27">}})
{{<math div="rho_inv">}}
\eqalign{
  \rho &= [(-965932.1/1.0006653)^2 + (-1056814.9\times1.0006653)^2]^{1/2} \cr
        &= 1431827.12\text{ m}
}
{{</math>}}
{{<math div="ce_inv">}}
\eqalign{
  c_e &= 2\arcsin[1431827.12/(2\times6370997.24)]\cr
      &= 12.9039908^\circ
}
{{</math>}}
{{<math div="q_inv">}}
\eqalign{
  q =& 1.9954814[\cos12.9039908^\circ\sin39.8722878^\circ\cr
      & +1.0006653\times(-1056814.9)\sin12.9039908^\circ\cr
      & \cos39.8722878^\circ/1431827.12] \cr
    =& 0.9943535 
}
{{</math>}}
For the first trial $\phi$ in equation [(3-16)]({{<ref "sect_24#3-16">}}),
{{<math div="phi0_inv">}}
\eqalign{
  \phi &= \arcsin(0.9943535/2) \cr
        &= 29.8133914^\circ
}
{{</math>}}
Substituting into equation [(3-16)]({{<ref "sect_24#3-16">}}),
{{<math div="phi1_inv">}}
\eqalign{
      \phi = & 29.8133914^\circ+[(1-0.0822719\sin^229.8133914^\circ)^2/ \cr
              & (2\cos29.8133914^\circ)]\times \{ 0.9943535/(1-0.0067687) \cr
              & - \sin29.8133914^\circ/(1-0.0067687\sin^229.8133914^\circ) \cr
              & +[1/(2\times0.0822719)]\ln[(1-0.0822719\sin29.8133914^\circ)/ \cr
              & (1+0.0822719\sin29.8133914^\circ)] \}\times 180^\circ/\pi \cr
             =& 29.9998293^\circ 
    }
{{</math>}}
Substituting {{<math span="phi1_inv1">}}29.9998293^\circ{{</math>}} in place of {{<math span="phi0_inv1">}}29.8133914^\circ{{</math>}} in the same equation, the new trial $\phi$ is found to be
{{<math div="phi_inv">}}
\phi = 30.0000002^\circ
{{</math>}}
The next iteration results in no change to seven decimal places.

Using equation [(24-26)]({{<ref "sect_24#24-26">}}),
{{<math div="lam_inv">}}
\eqalign{
  \lambda =& -100^\circ + \arctan\{ (-965932.1)\sin12.9039908^\circ/[1.0006653 \cr
            & \times 1431827.12\cos39.8722878^\circ\cos12.9039908^\circ \cr
            & - 1.0006653^2\times(-1056814.9)\sin39.8722878^\circ\sin12.9039908^\circ] \} \cr
            =& -109.9999999^\circ
}
{{</math>}}
using the ATAN2 function.

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
  <td id="pol_a">6378206.4 m</td>
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
      <option value="90"  selected>90&deg; (North Pole)</option>
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
Find $x, y, h, k$

From equation [(3-12)]({{<ref "sect_24#3-12">}}),
{{<math div="q_pol">}}
\eqalign{
  q =& (1-0.0067227)\{\sin 80^\circ/(1-0.0067227) \cr
      & -[1/(2\times0.0819919)\ln[(1-0.0819919\sin^2 80^\circ)/ \cr
      & (1+0.0819919\sin^2 80^\circ)] \} \cr
    =& 1.9649283 
}
{{</math>}}
Using the same equation with $90^\circ$ in place of {{<math span="phi_pol1">}}80^\circ{{</math>}},
{{<math div="qp_pol">}}
q_p = 1.9955122
{{</math>}}
From equation [(14-15)]({{<ref "sect_24#14-15">}}),
{{<math div="m_pol">}}
\eqalign{
  m &= \cos80^\circ/(1-0.0067227\sin^280^\circ)^{1/2} \cr
    &= 0.1742171
}
{{</math>}}
Using equations [(24-23)]({{<ref "sect_24#24-23">}}), [(21-30)]({{<ref "sect_24#21-30">}}), [(21-31)]({{<ref "sect_24#21-31">}}), and [(21-32)]({{<ref "sect_24#21-32">}}),
{{<math div="rho_pol">}}
\eqalign{
  \rho &= 6378388.0\times(1.9955122-1.9649283)^{1/2} \cr
        &= 1115468.35\text{ m}
}
{{</math>}}
{{<math div="x_pol">}}
\eqalign{
  x &= 1115468.35\sin[5^\circ-(-100^\circ)] \cr
    &= 1077459.69\text{ m}
}
{{</math>}}
{{<math div="y_pol">}}
\eqalign{
y &= -1115468.35\cos[5^\circ-(-100^\circ)] \cr
  &= 288704.45\text{ m}
}
{{</math>}}
{{<math div="k_pol">}}
\eqalign{
  k &= 1115468.35/(6378388.0\times0.1742171) \cr
    &= 1.0038196
}
{{</math>}}
{{<math div="h_pol">}}
\eqalign{
  h &= 1/1.0038196 \cr
    &= 0.9961950
}
{{</math>}}

#### Inverse Equations
Inversing forward example:  
Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_pol_in" value="1077459.7" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_pol_in" value="288704.5" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="pol.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find: $\phi, \lambda$

First $q_p$ is found to be {{<math span="qp_pol_inv">}}1.9955122{{</math>}} from equation [(3-12)]({{<ref "sect_24#3-12">}}), as in the corresponding forward example for the polar aspect. From equations [(20-18)]({{<ref "sect_24#20-18">}}) and [(24-31)]({{<ref "sect_24#24-31">}}),
{{<math div="rho_pol_inv">}}
\eqalign{
  \rho &= (1077459.7^2 + 288704.5^2)^{1/2} \cr
        &= 1115468.37\text{ m}
}
{{</math>}}
{{<math div="q_pol_inv">}}
\eqalign{
  q &= +[1.9955122-(1115468.37/6378388.0)^2] \cr
    &= 1.9649283
}
{{</math>}}
Iterative equation [(3-16)]({{<ref "sect_24#20-18">}}) may be used to find $\phi$. The first trial $\phi$ is
{{<math div="phi0_pol_inv">}}
\eqalign{
  \phi &= \arcsin(1.9649283/2) \cr
        &= 79.2542240^\circ
}
{{</math>}}
When this is used in equation [(3-16)]({{<ref "sect_24#20-18">}}) as in the oblique inverse example, the next trial $\phi$ is found to be
{{<math div="phi1_pol_inv">}}
\phi = 79.9744266^\circ
{{</math>}}
Using this value instead, the next trial is
{{<math div="phi2_pol_inv">}}
\phi = 79.9999675^\circ
{{</math>}}
and the next,
{{<math div="phi3_pol_inv">}}
\phi = 79.9999998^\circ
{{</math>}}
From equation [(20-16)]({{<ref "sect_24#20-16">}}),
{{<math div="lam_pol_inv">}}
\eqalign{
  \lambda &= -100^\circ + \arctan[1077459.7/(-288704.5)] \cr
            &= 5.0000022^\circ
}
{{</math>}}
using the ATAN2 function and after adjusting the result to $(-180^\circ,\\;+180^\circ]$ range.

