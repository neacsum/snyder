---
title: Numerical Examples - Albers Equal-Area Conic Projection
weight: 70
description: Numerical examples for Albers Equal-Area Conic projection
mathjax: 2
css: numerics.css
menuTitle: Albers Equal-Area Conic
date: 2023-02-16
lastmod: 2024-02-20
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/aea.js"> </script>
{{</rawHTML>}}
# Numerical Examples for Albers Equal-Area Conic Projection
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
  <td>Standard parallels:</td>
  <td>$\phi_1=\;$<input id="phi1_sph_in" value="29.5" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\phi_2=\;$<input id="phi2_sph_in" value="45.5" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Origin:</td>
  <td>$\phi_0=\;$<input id="phi0_sph_in" value="23.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;$<input id="lam0_sph_in" value="-96.0" size="5"/>&deg;</td>
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
Find $\rho, \theta, x, y, k, h, \omega$

From equations [(14-6)]({{<ref "sect_14#14-6">}}), [(14-5)]({{<ref "sect_14#14-5">}}), [(14-3)]({{<ref "sect_14#14-3">}}), [(14-3a)]({{<ref "sect_14#14-3a">}}), and [(14-4)]({{<ref "sect_14#14-4">}}) in order
{{<math div="n">}}
  \eqalign {
    n &= (\sin29.5^\circ +\sin45.5^\circ)/2 \cr
      &= 0.6028370
  }
{{</math>}}
{{<math div="C">}}
  \eqalign{
    C &= \cos^2 29.5^\circ+2\times0.6028370\sin29.5^\circ \cr
      &= 1.3512213
  }
{{</math>}}
{{<math div="rho">}}
  \eqalign{
    \rho &= 1.0\times(1.3512213-2\times0.6028370\sin35.0^\circ)^{1/2}/0.6028370 \cr
         &= 1.3473026 \;\text{units}
  }
{{</math>}}
{{<math div="rho0">}}
  \eqalign{
    \rho_0 &= 1.0\times(1.3512213-2\times0.6028370\sin23^\circ)^{1/2}/0.6028370 \cr
           &= 1.5562263 \;\text{units}
  }
{{</math>}}
{{<math div="theta">}}
  \eqalign{
    \theta &= 0.6028370\times[(-75.0^\circ)-(-96^\circ)] \cr
           &= 12.6595771^\circ
  }
{{</math>}}
From equations [(14-1)]({{<ref "sect_14#14-1">}}) [(14-2)]({{<ref "sect_14#14-2">}}) and [(14-7)]({{<ref "sect_14#14-7">}}) in order,
{{<math div="x">}}
  \eqalign{
    x &= 1.3473026\sin 12.6595771^\circ \cr
      &= 0.2952720 \;\text{units}
  }
{{</math>}}
{{<math div="y">}}
  \eqalign{
    y &= 1.5562263 - 1.3473026\cos 12.6595771^\circ \cr
      &= 0.2416774 \;\text{units}
  }
{{</math>}}
{{<math div="h">}}
  \eqalign{
    h &= \cos 35.0^\circ/(1.3512213-2\times 0.6028370\sin 35.0^\circ) \cr
      &= 1.0085547
  }
{{</math>}}
and
{{<math div="k">}}k=1/1.0085547=0.9915178{{</math>}}
From equation [(4-9)]({{<ref "sect_4#4-9">}}),
{{<math div="omega">}}
  \eqalign{
    \sin&frac12;\omega &= |1.0085547-0.9915178|/(1.0085547+0.9915178) \cr
           \omega &= 0.9761175^\circ
  }
{{</math>}}

### Inverse Equations
Inversing forward example:

Given: $R, \phi_1, \phi_2, \phi_0, \lambda_0$ for forward example
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_sph_in" value="0.2952720" size="7"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_sph_in" value="0.2416774" size="7"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sphere.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\rho, \theta, \phi, \lambda$.

As in the forward example, from equations [(14-6)]({{<ref "sect_14#14-6">}}), [(14-5)]({{<ref "sect_14#14-5">}}), and [(14-3a)]({{<ref "sect_14#14-3a">}}) in order
{{<math div="n_inv">}}
  \eqalign {
    n &= (\sin29.5^\circ +\sin45.5^\circ)/2 \cr
      &= 0.6028370
  }
{{</math>}}
{{<math div="C_inv">}}
  \eqalign{
    C &= \cos^2 29.5^\circ+2\times0.6028370\sin29.5^\circ \cr
      &= 1.3512213
  }
{{</math>}}
{{<math div="rho0_inv">}}
  \eqalign{
    \rho_0 &= 1.0\times(1.3512213-2\times0.6028370\sin23^\circ)^{1/2}/0.6028370 \cr
           &= 1.5562263 \;\text{units}
  }
{{</math>}}
From equations [(14-10)]({{<ref "sect_14#14-10">}}), [(14-11)]({{<ref "sect_14#14-11">}}), [(14-8)]({{<ref "sect_14#14-8">}}), and [(14-9)]({{<ref "sect_14#14-9">}}) in order,
{{<math div="rho_inv">}}
  \eqalign{
    \rho &=[0.2952720^2 + (1.5562263-0.2416774)^2]^{1/2} \cr
         &= 1.3473027 \;\text{units}    
  }
{{</math>}}
{{<math div="theta_inv">}}
\eqalign{
  \theta =& \arctan[0.2952720/(1.5562263-0.2416774)] \cr
          =& 12.6595763^\circ 
}
{{</math>}}
{{<math div="phi">}}
  \eqalign{
    \phi &=\arcsin\{[1.3512213-(1.3473027\times0.6028370/1)^2]/(2\times0.6028370) \} \cr
         &=\arcsin 0.5735764 \cr
         &=34.9999974^\circ
  }
{{</math>}}
{{<math div="lambda">}}
  \eqalign{
    \lambda &= 12.6595763^\circ/0.6028370 + (-96^\circ) \cr
            &= 20.9999988^\circ + (-96^\circ) \cr
            &= -75.0000012^\circ
  }
{{</math>}}
## ELLIPSOID
### Forward Equations
{{< rawHTML >}}
Given: <br/>
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
  <td style="text-align:right">or:</td>
  <td id="ellip_e">$e=0.0822719$</td>
</tr>
<tr>
  <td>Standard parallels:</td>
  <td>$\phi_1=\;$<input id="phi1_ell_in" value="29.5" size="5"/></td>
</tr>
<tr>
  <td></td>
  <td>$\phi_2=\;$<input id="phi2_ell_in" value="45.5" size="5"/></td>
</tr>
<tr>
  <td>Origin:</td>
  <td>$\phi_0=\;$<input id="phi0_ell_in" value="23.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;$<input id="lam0_ell_in" value="-96.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$<input id="phi_ell_in" value="35" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$<input id="lambda_ell_in" value="-75" size="5">&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="ell.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $\rho, \theta, x, y, k, h, \omega$.

From equation [(14-15)]({{<ref "sect_14#14-15">}}),
{{<math div="m1">}}
  \eqalign{
    m1 &=\cos 29.5^\circ/(1-0.0067687\sin^2 29.5^\circ)^{1/2} \cr
       &=0.8710708
  }
{{</math>}}
{{<math div="m2">}}
\eqalign{
  m2 &=\cos 45.5^\circ/(1-0.0067687\sin^2 45.5^\circ)^{1/2} \cr
      &=0.7021191
}
{{</math>}}
From equation [(3-12)]({{<ref "sect_3#3-12">}}),
{{<math div="q1">}}
  \eqalign{
    q_1 =& (1-0.0067687)\{\sin 29.5^\circ/(1-0.0067687) \cr
         & -[1/(2\times0.0822719)\ln[(1-0.0822719\sin^2 29.5^\circ)/ \cr
         & (1+0.0822719\sin^2 29.5^\circ)] \} \cr
        =& 0.9792529 
  }
{{</math>}}
Using the same formula for $q_2$, (with $\phi_2$, instead of $\phi_1$),
{{<math div="q2">}}q_2=1.4201080{{</math>}}
Using the same formula for $q_0$ (with $\phi_0$ instead of $\phi_1$),
{{<math div="q0">}}q_0=0.7767080{{</math>}}
From equations [(14-14)]({{<ref "sect_14#14-14">}}), [(14-13)]({{<ref "sect_14#14-13">}}), and [(14-12a)]({{<ref "sect_14#14-12a">}}) in order,
{{<math div="n_ell">}}
  \eqalign{
    n &= (0.8710708^2 - 0.7021191^2)/(1.4201080-0.9792529) \cr
      &= 0.6029035
  }
{{</math>}}
{{<math div="C_ell">}}
  \eqalign{
    C &= 0.8710708^2+0.6029035\times0.9792529 \cr
     &= 1.3491594
  }
{{</math>}}
{{<math div="rho0_ell">}}
  \eqalign{
    \rho_0 &= 6378206.4\times(1.3491594-0.6029035\times0.7767080)^{1/2}/0.6029035 \cr
           &= 9929079.57 \;\text{m}
  }
{{</math>}}
These are the constants for the map.

Using equation [(3-12)]({{<ref "sect_14#3-12">}}), but with $\phi$ in place of $\phi_1$:
{{<math div="q_ell">}}
  q=1.1410831
{{</math>}}

From equations [(14-12)]({{<ref "sect_14#14-12">}}), [(14-4)]({{<ref "sect_14#14-4">}}), [(14-1)]({{<ref "sect_14#14-1">}}), and [(14-2)]({{<ref "sect_14#14-2">}}) in order,
{{<math div="rho_ell">}}
  \eqalign{
    \rho &= 6378206.4\times(1.3491594-0.6029035\times1.1410831)^{1/2}/0.6029035 \cr
         &= 8602328.23 \;\text{m}
  }
{{</math>}}
{{<math div="theta_ell">}}
  \theta = 0.6029035\times[-75^\circ-(-96^\circ)] = 12.6609735^\circ
{{</math>}}
{{<math div="x_ell">}}
  x = 8602328.23\sin 12.6609735^\circ = 1885472.73\;\text{m}
{{</math>}}
{{<math div="y_ell">}}
  \eqalign{
    y &=9929079.57 - 8602328.23\cos 12.6609735^\circ \cr
      &=1535925.00\;\text{m}
  }
{{</math>}}
From equations [(14-15)]({{<ref "sect_14#14-15">}}), [(14-16)]({{<ref "sect_14#14-16">}}), [(14-18)]({{<ref "sect_14#14-18">}}), and [(4-9)]({{<ref "sect_4#4-9">}}) in order,
{{<math div="m_ell">}}
  \eqalign{
    m &=\cos 35^\circ/(1-0.0067687\sin^2 35^\circ)^{1/2} \cr
      &=0.8200656
  }
{{</math>}}
{{<math div="k_ell">}}
  \eqalign{
    k &=8602328.23\times0.6029035/(6378206.4\times0.8200656) \cr
      &= 0.9915546
  }{{</math>}}
{{<math div="h_ell">}}h=1/0.9915546=1.0085173{{</math>}}
{{<math div="omega_ell">}}
  \eqalign{
    \sin &frac12;\omega &= |1.0085173-0.9915546|/(1.0085173+0.9915546) \cr
          \omega &= 0.9718683^\circ
  }
{{</math>}}

### Inverse Equations
Inversing forward example:

Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="1885472.73" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="1535925.00" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\rho, \theta, \phi, \lambda$.

The same constants $n, C, \rho_0$, are calculated with the same equations as those
used for the forward example. For the particular point:

From equation [(14-10)]({{<ref "sect_14#14-10">}}),
{{<math div="rho_ell_inv">}}
  \eqalign{
    \rho &=[1885472.73^2+(9929079.57 - 1535925.00)^2]^{1/2} \cr
         &=8602328.23\;\text{m}
  }
{{</math>}}
From equation [(14-11)]({{<ref "sect_14#14-11">}}),
{{<math div="theta_ell_inv">}}
  \eqalign{
    \theta =& \arctan[1885472.73/(9929079.57-1535925.00)] \cr
           =& 12.6609735^\circ \text{Since the denominator is positive,} \cr
            & \text{there is no adjustment to } \theta
  }
{{</math>}}
From equation [(14-19)]({{<ref "sect_14#14-19">}}),
{{<math div="q_ell_inv">}}
  \eqalign {
    q &= [1.3491594-(8602328.23\times0.6029035/6378206.4)^2]/0.6029035 \cr
      &= 1.1410831
  }
{{</math>}}

Using for the first trial $\phi$ the arcsin of <span id="phi_iter0">$(1.1410831/2)$</span> or <span id="phi_iter0_1">$34.7879968^\circ$</span>calculate a new $\phi$ from equation [(3-16)]({{<ref "sect_14#3-16">}}),
{{<math div="phi_iter1">}}
  \eqalign{
    \phi =& 34.7879968^\circ+[(1-0.0067687\sin^234.7879968^\circ)^2/(2\cos 34.7879968^\circ)] \cr
          &\times\{1.1410831(1-0.0067687)-\sin 34.7879968^\circ/(1-0.0067687\sin^234.7879968^\circ) \cr
          &+[1/(2\times0.0822719)]\ln[(1-0.0822719\sin34.7879968^\circ) \cr
          &/(1+0.0822719\sin34.7879968^\circ)]\}\times 180^\circ/\pi \cr
         =& 34.9990287^\circ
  }
{{</math>}}
Note that $180^\circ/\pi$ is included to convert to degrees. Replacing <span id="phi_iter0_2">$34.7879968^\circ$</span> by <span id="phi_iter1_1">$34.9990287^\circ$</span> for the second trial, the calculation using equation (3-16) now provides a third $\phi$ of <span id="phi_iter2">$34.9999967^\circ$</span>. A third iteration yields <span id="phi_iter3">$34.9999999^\circ$</span> and the fourth iteration produces:
{{<math div="phi_iter4">}}\phi = 35.0000000^\circ{{</math>}}
For the longitude use equation [(14-9)]({{<ref "sect_14#14-9">}})
{{<math div="lam_ell_inv">}}
  \eqalign{
    \lambda &= (-96^\circ)+12.6609735^\circ/0.6029035 \cr
            &= -75.0000000^\circ
  }
{{</math>}}


