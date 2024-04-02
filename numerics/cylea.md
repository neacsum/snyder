---
title: Numerical Examples - Cylindrical Equal-Area Projection
weight: 40
description: Numerical examples for Cylindrical Equal-Area projection
mathjax: 2
css: numerics.css
menuTitle: Cylindrical Equal-Area
date: 2023-03-14
lastmode: 2024-02-19
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/cylea.js"> </script>
{{</rawHTML>}}
# Numerical Examples for Cylindrical Equal-Area Projection
## SPHERE
### Normal aspect
#### Forward Equations
Given
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_sphe_in" value="1.0" size="5" /> unit</td>
</tr>
<tr>
  <td>Central meridian:</td>
  <td>$\lambda_0=\;$<input id="lam0_sphe_in" value="-75" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Standard parallel:</td>
  <td>$\phi_s=\;$<input id="phis_sphe_in" value="30" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sphe_in" value="35.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lambda_sphe_in" value="80.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sphe.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$

Using equations [(10-1)]({{<ref "sect_10#10-1">}}) and [(10-2)]({{<ref "sect_10#10-1">}}),
{{<math div="x_sphe">}}
  x = 1\times[80^\circ-(-75^\circ)]\times\cos 30^\circ = 2.3428242\;\text{units}
{{</math>}}
{{<math div="y_sphe">}}
y = 1\times\sin 35^\circ/\cos 30^\circ = 0.662309\;\text{units}
{{</math>}}

#### Inverse equations
Given: $R, \lambda_0, \phi_s$ for forward example,
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_sphe_in" value="2.3428242" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_sphe_in" value="0.662309" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sphe.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

Using equations [(10-6)]({{<relref "sect_10#10-6">}}) and [(10-7)]({{<relref "sect_10#10-7">}}),
{{<math div="phi_sphe">}}
\eqalign{
  \phi &=\arcsin[(0.662309/1)\times\cos30^\circ] \cr
        &= 35^\circ
}
{{</math>}}

{{<math div="lam_sphe">}}
\eqalign{
  \lambda &= [2.3428242/(1\times\cos30^\circ)]\times 180^\circ/\pi + (-75^\circ) \cr
          &= 80^\circ
}
{{</math>}}

### Transverse aspect
#### Forward equations
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_spht_in" value="1.0" size="5" /> unit</td>
</tr>
<tr>
  <td>Origin:</td>
  <td>$\phi_0=\;$<input id="phi0_spht_in" value="-20" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_0=\;$<input id="lam0_spht_in" value="-75" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Central scale factor:</td>
  <td>$h_0=\;$<input id="h0_spht_in" value="0.98" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_spht_in" value="25.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lambda_spht_in" value="-90.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="spht.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$.

Using equations [(10-3)]({{<ref "sect_10#10-3">}}) and [(8-3)]({{<ref "sect_10#8-3">}}),

{{<math div="x_spht">}}
\eqalign{
  x &= (1/0.98)\times\cos 25^\circ\sin[(-90^\circ)-(-75^\circ)]\cr
    &= -0.2393569\;\text{units}
  }
{{</math>}}
{{<math div="y_spht">}} \eqalign{
  y &= 1\times0.98 \times \{ \arctan [\tan25^\circ/\cos((-90^\circ)-(-75^\circ))]-(-20^\circ) \} \times \pi/180^\circ \cr
    &=1\times0.98 \times 45.7692621^\circ \times \pi/180^\circ = 0.7828478 \; \text{units}
  }
{{</math>}}

#### Inverse equations
Given: $R, \phi_0, \lambda_0, h_0$, for forward example
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_spht_in" value="-0.2393569" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_spht_in" value="0.7828478" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="spht.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$

Using equations [(10-10)]({{<relref "sect_10#10-10">}}), [(10-8)]({{<relref "sect_10#10-8">}}), and [(10-9)]({{<relref "sect_10#10-9">}}) in order,
{{<math div="D">}}
\eqalign{
  D &= 0.7828478/(1.0\times0.98) + (-20^\circ)\times180^\circ/\pi \cr
    &= 0.4497585
}
{{</math>}}
{{<math div="phi_spht">}}
\eqalign{
  \phi =&\arcsin\{[1-(0.98\times(-0.2393569)/1.0)^2]^{1/2}\cr
        & \times\sin(0.4497585 \;\text{radians}) \}  \cr
       =& 25^\circ 
}
{{</math>}}
{{<math div="lam_spht">}}
\eqalign{
  \lambda =& (-75^\circ)+\arctan \{[0.98\times(-0.2393569)/1.0]/ \cr
           &[[1-(0.98\times(-0.2393569)/1.0)^2]^{1/2}\cos(0.4497585 \;\text{radians})] \} \cr
          =& -90^\circ 
}
{{</math>}}

### Oblique aspect
#### Forward equations
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_spho_in" value="1.0" size="5" /></td>
  <td>unit</td>
</tr>
<tr>
  <td>Central scale factor:</td>
  <td>$h_0=\;$<input id="h0_spho_in" value="0.98" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Central line through:</td>
  <td>$\phi_1=\;$<input id="phi1_spho_in" value="30" size="5"/>&deg;</td>
  <td>$\lambda_1=\;$<input id="lam1_spho_in" value="-75" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\phi_2=\;$<input id="phi2_spho_in" value="60" size="5"/>&deg;</td>
  <td>$\lambda_2=\;$<input id="lam2_spho_in" value="-50" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_spho_in" value="-30.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lambda_spho_in" value="-100.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="spho.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$.

Using equation [(9-1)]({{<ref "sect_10#9-1">}}),
{{<math div="lamp_spho">}}
\eqalign{
  \lambda_p =& \arctan \{ [\cos 30^\circ \sin 60^\circ \cos (-75^\circ) - \sin 30^\circ \cos 60^\circ \cos (-50^\circ)]/ \cr
              & [\sin 30^\circ \cos 60^\circ \sin (-50^\circ) - \cos 30^\circ \sin 60^\circ \sin (-75^\circ)] \} \cr
            =& \arctan (0.0334174/0.5329333) \cr 
            =& 3.5880129^\circ
  }
{{</math>}}
From equation [(9-6a)]({{<ref "sect_10#9-6a">}})
{{<math div="lam0_spho">}}
  \lambda_0 = 3.5880129^\circ + 90^\circ = 93.5880129^\circ
{{</math>}}
From equation [(9-2)]({{<ref "sect_10#9-2">}})
{{<math div="phip_spho">}}
\eqalign{
  \phi_p &= \arctan \{-\cos[3.5880129^\circ-(-75^\circ)]/\tan 30^\circ \} \cr
         &= -18.9169858^\circ
  }
{{</math>}}
The other pole is then at <span id="phip1_spho">$18.9169858^\circ$</span> and <span id="lamp1_spho">$-176.4119871^\circ$</span> From
equations [(10-4)]({{<ref "sect_10#10-4">}}) and [(10-5)]({{<ref "sect_10#10-5">}}), calculating the arctan in radians<sup>[note 1]({{<ref "notes#cylea1">}})</sup><a name="noteref1"></a>:
{{<math div="x_spho">}}
\eqalign{
  x =& 1.0\times0.98\arctan [\tan (-30^\circ) \cos (-18.9169858^\circ) \cr
      & + \sin (-18.9169858^\circ) \sin(-100^\circ - 93.5880129^\circ)]/ \cr
      & \cos(-100^\circ - 93.5880129^\circ) \cr
    =& 1.0\times0.98\arctan [-0.6223338/(-0.9720102)] \cr
    =& -2.5206570 \text{ units}
}
{{</math>}}
{{<math div="y_spho">}}
\eqalign{
  y =& (1.0/0.98)[\sin(-18.9169858^\circ)\sin(-30^\circ) -\cr
      & \cos(-18.9169858^\circ)\cos(-30^\circ)\sin(-100^\circ-93.5880129^\circ)] \cr
    =& -0.0309947 \text{ units}
}
{{</math>}}
To locate a pole given a central point using equations [(9-7)]({{<ref "sect_10#9-7">}}) and [(9-8)]({{<ref "sect_10#9-8">}}), refer to the numerical example given under the [forward spherical equations]({{<ref "ome#sphere">}}) for the Oblique Mercator projection.
#### Inverse equations
Given: $R, h_0$, and central line through same points as forward example,
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_spho_in" value="-2.520657" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_spho_in" value="-0.0309947" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="spho.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$

First, $\phi_p$ and $\lambda_p$ are determined exactly as for the forward example, so that <span id="lam0_spho1">$\lambda_0=93.5880129^\circ$</span>, and <span id="phip2_spho">$\phi_p=-18.9169858^\circ$</span>. Using equations [(10-11)]({{<relref "sect_10#10-11">}}) and [(10-12)]({{<relref "sect_10#10-12">}}),
{{<math div="y_term">}}
\eqalign{
  yh_0/R &= -0.0309947\times0.98/1.0 \cr
         &= -0.0303748
}
{{</math>}}
{{<math div="x_term">}}
\eqalign{
  x/(Rh_0) &= -2.520657/(0.98\times1.0) \cr
           &= -2.572099
}
{{</math>}}
{{<math div="phi_spho">}}
\eqalign{
  \phi =&\arcsin \{ (-0.0303748)\times\sin(-18.9169858^\circ)+[1-(-0.0303748)^2]^{1/2} \cr
        &\times\cos(-18.9169858^\circ)\times\sin(-2.572099\;\text{radians}) \}\cr
        &\arcsin(-0.5) = -30.0000006^\circ
}
{{</math>}}
{{<math div="lam_spho">}}
\eqalign{
  \lambda =&93.5880129^\circ+\arctan\{[[1-(-0.0303748)^2]^{1/2}\cr
           &\times\sin(-18.9169858^\circ) \times\sin(-2.572099\;\text{radians})\cr
           &-(-0.0303748)\times\cos(-18.9169858^\circ)]/\cr
           &[[1-(-0.0303748)^2]^{1/2}\times\cos(-2.572099\;\text{radians})]\} \cr
          =& 260.0000005^\circ = -99.9999995^\circ
}
{{</math>}}
## ELLIPSOID
### Normal aspect

#### Forward equations
Given:
{{< rawHTML >}}
<table>
<tr>
  <td>
    <select id="elle" onchange="elle.select(this.options[this.selectedIndex].value)">
      <option value="0" selected>Clarke 1866</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td id="elle_a">$a=6378206.4\,\text{m}$</td>
</tr>
<tr>
  <td></td>
  <td id="elle_e2">$e^2=0.00676866$</td>
</tr>
<tr>
  <td style="text-align:right">or</td>
  <td id="elle_e">$e=0.0822719$</td>
</tr>
<tr>
  <td>Standard parallel:</td>
  <td>$\phi_s=\;$<input id="phis_elle_in" value="5.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Central meridian</td>
  <td>$\lambda_0=\;$<input id="lam0_elle_in" value="-75.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_elle_in" value="10" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=\;$<input id="lambda_elle_in" value="-78.0" size="5">&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="elle.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$.

Using equations [(10-13)]({{<relref "sect_10#10-13">}}), [(3-12)]({{<relref "sect_10#3-12">}}), [(10-14)]({{<relref "sect_10#10-14">}}), and [(10-15)]({{<relref "sect_10#10-14">}}) in order,<sup>[note 2]({{<ref "notes#cylea2">}})</sup><a name="noteref2"></a>
{{<math div="k0_elle">}}
\eqalign{
  k_0 &= \cos5^\circ/[1-0.0067687\times\sin5^\circ]^{1/2} \cr
      &= 0.9962203
}
{{</math>}}
{{<math div="q_elle">}}
\eqalign{
  q =& (1-0.0067687)\times\{\sin10^\circ/(1-0.0067687\times\sin^210^\circ) \cr
      & -[1/(2\times0.0822719)]\times\ln[(1-0.0822719\times\sin10^\circ)/ \cr
      & (1+0.0822719)\times\sin10^\circ]\} \cr
    =& 0.3449926 
}
{{</math>}}
{{<math div="x_elle">}}
\eqalign{
  x &= 6378206.4\times0.9962203\times[(-78^\circ)-(-75^\circ)]\times\pi/180^\circ \cr
    &= -332699.83\,\text{m}
}
{{</math>}}
{{<math div="y_elle">}}
\eqalign{
  y &= 6378206.4\times0.3449926/(2\times0.9962203) \cr
    &= 1104391.16\,\text{m}
}
{{</math>}}

#### Inverse equations
Given: $a, e_2,\phi_s$, and $\lambda_0$ as in forward ellipsoid example.
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_elle_in" value="-332699.83" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_elle_in" value="1104391.16" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="elle.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

After $k_0$ and $q_p$ are determined from [(10-13)]({{<relref "sect_10#10-13">}}) and [(3-12)]({{<relref "sect_10#3-12">}}) as in the forward normal
and transverse examples
{{<math div="k0_elle_inv">}}
  k_0 = 0.9962203
{{</math>}}
{{<math div="qp_elle">}}
  q_p = 1.9954814
{{</math>}}
then, from [(10-26)]({{<relref "sect_10#10-26">}}),
{{<math div="beta_elle">}}
\eqalign{
  \beta &= \arcsin[2\times1104391.16\times0.9962203/(6378206.4\times1.9954814)] \cr
          &= 9.9557112^\circ
}
{{</math>}}
Using equations [(10-17)]({{<relref "sect_10#10-17">}}) and [(3-16)]({{<relref "sect_10#3-16">}}), with subscript $c$ omitted, $\phi$ is found from $\beta$ by iteration as in the example for $\phi_c$ under the forward transverse ellipsoid example. Finally,
{{<math div="phi_elle">}}
  \phi = 10^\circ
{{</math>}}
From [(10-27)]({{<relref "sect_10#10-27">}}),
{{<math div="lam_elle">}}
\eqalign{
  \lambda &= -75^\circ+[-332699.83/(6378206.4\times0.9962203)]\times180^\circ/\pi \cr
          &= -78.0000000^\circ
}
{{</math>}}

### Transverse aspect
#### Forward equations
Given:
{{< rawHTML >}}
<table>
<tr>
  <td>
    <select id="ellt" onchange="ellt.select(this.options[this.selectedIndex].value)">
      <option value="0" selected>Clarke 1866</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td id="ellt_a">$a=6378206.4\,\text{m}$</td>
</tr>
<tr>
  <td></td>
  <td id="ellt_e2">$e^2=0.00676866$</td>
</tr>
<tr>
  <td style="text-align:right">or</td>
  <td id="ellt_e">$e=0.0822719$</td>
</tr>
<tr>
  <td>Central meridian</td>
  <td>$\lambda_0=\;$<input id="lam0_ellt_in" value="-75.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Latitude of origin:</td>
  <td>$\phi_0=\;$<input id="phi0_ellt_in" value="30.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Scale factor at $\lambda_0$:</td>
  <td>$h_0=\;$<input id="h0_ellt_in" value="0.99" size="5"/></td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_ellt_in" value="40" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=\;$<input id="lambda_ellt_in" value="-83.0" size="5">&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="ellt.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$.

Using equations [(3-12)]({{<relref "sect_10#3-12">}}) and [(3-11)]({{<relref "sect_10#3-11">}}),
{{<math div="q_ellt">}}
\eqalign{
  q =& (1-0.0067687)\times\{\sin40^\circ/(1-0.0067687\times\sin^240^\circ) \cr
     & -[1/(2\times0.0822719)]\times\ln[(1-0.0822719\times\sin40^\circ)/ \cr
     & (1+0.0822719)\times\sin40^\circ]\} \cr
    =& 1.2792602 
}
{{</math>}}
Inserting 90° in place of 40° in the same equation,
{{<math div="qp_ellt">}}
q_p = 1.9954814
{{</math>}}
{{<math div="beta_ellt">}}
\eqalign{
  \beta &= \arcsin(1.2792602/1.9954814) \cr
        &= 39.8722878^\circ
}
{{</math>}}
Using equations [(10-16)]({{<relref "sect_10#10-16">}}) and [(10-17)]({{<relref "sect_10#10_17">}}),
{{<math div="betac_ellt">}}
\eqalign{
  \beta_c &= \arctan[\tan 39.8722878^\circ/\cos((-83^\circ) - (-75^\circ))] \cr
          &= 40.1482125^\circ
}
{{</math>}}
{{<math div="qc_ellt">}}
\eqalign{
  q_c &= 1.9954814\times \sin40.1482125^\circ \cr
      &= 1.2866207
}
{{</math>}}

For the first trial $\phi_c$, in equation [(3-16)]({{<relref "sect_10#3-16">}}),
{{<math div="phic0_ellt">}}
\eqalign{
  \phi_c &= \arcsin(1.2866207/2) \cr
          &= 40.039109^\circ
}
{{</math>}}
Substituting into equation [(3-16)]({{<relref "sect_10#3-16">}}),
{{<math div="phic1_ellt">}}
\eqalign{
  \phi_c =& 40.039109^\circ+[(1-0.0067687\sin^2 40.039109^\circ)^2/ \cr
          & (2 \cos 40.039109^\circ)]\times\{1.2866207/(1-0.0067687) \cr
          & -\sin 40.039109^\circ/(1-0.0067687\sin^2 40.039109^\circ) \cr
          & +[1/(2\times0.0822719)]\ln[(1-0.0822719\sin 40.039109^\circ) \cr
          & /(1+0.0822719\sin 40.039109^\circ)]\}\times 180^\circ/\pi \cr
         =& 40.2757323^\circ
}
{{</math>}}
Substituting <span id="phic1_ellt1">$40.2757323^\circ$</span> in place of <span id="phic0_ellt1">$40.039109^\circ$</span> in the same equation, the new trial $\phi_c$, is found to be <span id="phic2_ellt1">$40.2761384^\circ$</span>. The next iteration results in no change to seven
decimal places. Thus,
{{<math div="phic2_ellt">}}
\phi_c = 40.2761384^\circ
{{</math>}}
Using equation [(10-18)]({{<relref "sect_10#10-18">}}),
{{<math div="x_ellt">}}
\eqalign{
  x =& 6378206.4\times\cos39.8722878^\circ\times\cos40.2761384^\circ\times\sin[(-83^\circ)-(-75^\circ)] \cr
     & /[0.99\times\cos 40.1482125^\circ\times(1-0.0067687\times\sin^2 40.2761384^\circ)^{1/2}] \cr
    =& -687825.78\;\text{m} 
}
{{</math>}}
Using equation [(3-21)]({{<relref "sect_10#10-21">}}),
{{<math div="mc_ellt">}}
\eqalign{
  M_c =& 6378206.4\times[(1-0.0067687-3\times0.0067687^2/64 \cr
       & -5\times0.0067687^3/256)\times 40.2761384^\circ\times \pi/180^\circ \cr
       & -(3\times0.0067687/8+3\times0.0067687^2/32 \cr
       & +45\times0.0067687^3/1024)\times\sin(2\times40.2761384^\circ) \cr
       & +(15\times0.0067687^2/256+45\times0.0067687^3/1024) \cr
       & \times \sin(4\times40.2761384^\circ) -(35\times0.0067687^3/3072) \cr
       & \times\sin(6\times40.2761384^\circ)] \cr
      =& 4459980.03\;\text{m} 
}
{{</math>}}
Substituting <span id="phi0_ellt">$30^\circ$</span> in the same equation in place of <span id="phic_ellt">$40.2761384^\circ$</span>
{{<math div="m0_ellt">}}
M_0 = 3319933.29\;\text{m}
{{</math>}}
Using equation [(10-19)]({{<relref "sect_10#10-19">}}),
{{<math div="y_ellt">}}
\eqalign{
  y &= 0.99\times(4459980.03 - 3319933.29) \cr
    &= 1128646.27\;\text{m}
}
{{</math>}}

#### Inverse equations
Given: $a, e_2, \lambda_0, \phi_0, h_0$ as in forward ellipsoid example.
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ellt_in" value="-687825.78" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ellt_in" value="1128646.27" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ellt.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

After $M_0$ is calculated from [(3-21)]({{<relref "sect_3#3-21">}}), using <span id="phi0_ellt_inv">$30^\circ$</span> in place of $\phi_c$ as in the forward ellipsoid example,
{{<math div="m0_ellt_inv">}}
M_0 = 3319933.29\;\text{m}
{{</math>}}
From [(10-28)]({{<relref "sect_10#10-28">}}),
{{<math div="mc_ellt_inv">}}
\eqalign{
  M_c &= M_0 + 1128646.27/0.99 \cr
      &= 4459980.03\;\text{m} 
}
{{</math>}}
From [(7-19)]({{<relref "sect_10#7-19">}}), [(3-24)]({{<relref "sect_10#3-24">}}) and [(3-26)]({{<relref "sect_10#3-26">}}),
{{<math div="muc_ellt_inv">}}
\eqalign{
  \mu_c =& 4459980.0306802/[6378206.4\times(1-0.0067687/4 \cr
          & -3\times0.0067687^2/64 - 5\times0.0067687^3/256)] \cr
        =& 0.7004398\;\text{radians} = 40.1322432^\circ 
}
{{</math>}}
{{<math div="e1_ellt_inv">}}
\eqalign{
  e_1 &= [1-(1-0.0067687)^{1/2}]/[1+(1-0.0067687)^{1/2}] \cr
      &= 0.0016979
}
{{</math>}}
{{<math div="phic_ellt_inv">}}
\eqalign{
  \phi_c =& \mu_c + (3\times0.0016979/3 - 27\times0.0016979^3/32)\sin(2\times40.1322432^\circ) \cr
          & + (21\times0.0016979^2/16 - 55\times0.0016979^4/32)\sin(4\times40.1322432^\circ) \cr
          & + (151\times0.0016979^3/96)\sin(6\times40.1322432^\circ) \cr
          & + (1097\times0.0016979^4/512)\sin(8\times40.1322432^\circ) \cr
         =& 0.7029512\;\text{radians} = 40.2761385^\circ 
}
{{</math>}}
Using [(3-12)]({{<relref "sect_10#3-12">}}) and [(3-11)]({{<relref "sect_10#3-11">}}), with $q_p$ calculated as in the forward example,
{{<math div="qc_ellt_inv">}}
\eqalign{
  q_c =& (1-0.0067687)\times\{\sin40.2761385^\circ/(1-0.0067687\times\sin^240.2761385^\circ) \cr
       & -[1/(2\times0.0822719)]\times\ln[(1-0.0822719\times\sin40.2761385^\circ)/ \cr
       & (1+0.0822719)\times\sin40.2761385^\circ]\} \cr
      =& 1.2866207 
}
{{</math>}}
{{<math div="betac_ellt_inv">}}
\eqalign{
  \beta_c &= \arcsin(1.2866207/1.9954814) \cr
          &= 40.1482128^\circ
}
{{</math>}}
From equations [(10-29)]({{<relref "sect_10#10-29">}}), [(10-29)]({{<relref "sect_10#10-29">}}) and [(10-31)]({{<relref "sect_10#10-31">}}),
{{<math div="betaprime_ellt_inv">}}
\eqalign{
  \beta' =& -\arcsin[0.99\times(-687825.78)\times\cos40.1482128^\circ \cr
          & \times(1-0.0067687\times\sin^240.2761385^\circ)^{1/2}/ \cr
          & (6378206.4\times\cos40.2761385^\circ)] \cr
         =& 6.131569^\circ 
}
{{</math>}}
{{<math div="beta_ellt_inv">}}
\eqalign{
  \beta &= \arcsin(\cos 6.131569^\circ/\sin40.1482128^\circ) \cr
        &= 39.8722881^\circ
}
{{</math>}}
{{<math div="lam_ellt_inv">}}
\eqalign{
  \lambda &= (-75^\circ)-\arctan(\tan 6.131569^\circ/\cos40.1482128^\circ) \cr
          &= -83^\circ
}
{{</math>}}
Using [(10-17)]({{<relref "sect_10#10-17">}}) and [(3-16)]({{<relref "sect_10#3-16">}}), with subscript c omitted, $\phi$ is found from $\beta$ by iteration
as in the example for $\phi_c$ under the forward transverse ellipsoid example. Finally,
{{<math div="phi_ellt_inv">}}
\phi = 40.0000005^\circ
{{</math>}}

### Oblique aspect

#### Forward equations
Given:
{{< rawHTML >}}
<table>
<tr>
  <td>
    <select id="ello" onchange="ello.select(this.options[this.selectedIndex].value)">
      <option value="0" selected>Clarke 1866</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td id="ello_a">$a=6378206.4\,\text{m}$</td>
</tr>
<tr>
  <td></td>
  <td id="ello_e2">$e^2=0.00676866$</td>
</tr>
<tr>
  <td style="text-align:right">or</td>
  <td id="ello_e">$e=0.0822719$</td>
</tr>
<tr>
  <td>Central scale factor:</td>
  <td>$h_0=\;$<input id="h0_ello_in" value="1.0" size="5"/></td>
</tr>
<tr>
  <td>Central line through:</td>
  <td>$\phi_1=\;$<input id="phi1_ello_in" value="30" size="5"/>&deg;</td>
  <td>$\lambda_1=\;$<input id="lam1_ello_in" value="-75" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\phi_2=\;$<input id="phi2_ello_in" value="40" size="5"/>&deg;</td>
  <td>$\lambda_2=\;$<input id="lam2_ello_in" value="-80" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_ello_in" value="42" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=\;$<input id="lambda_ello_in" value="-77.0" size="5">&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="ello.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y$.

To find the position of the pole, equations [(3-12)]({{<relref "sect_10#3-12">}}) and [(3-11)]({{<relref "sect_10#3-11">}}) are used as in the examples for the normal and transverse aspects just above, to determine $\beta_1$ from $\phi_1$ and $\beta_2$ from $\phi_2$. The results are
{{<math div="beta1_ello">}}
\beta_1 = 29.8877622^\circ
{{</math>}}
{{<math div="beta2_ello">}}
\beta_2 = 39.8722878^\circ
{{</math>}}
Inserting these values in place of $\phi_1$, and $\phi_2$ in equations [(9-1)]({{<relref "sect_10#9-1">}}) and [(9-2)]({{<relref "sect_10#9-2">}}), listed under spherical formulas for the projection<sup>[note 3]({{<ref "notes#cylea3">}})</sup><a name="noteref3"></a>
{{<math div="lamp_ello">}}
\eqalign{
    \lambda_p =& \arctan \{ [\cos 29.8877622^\circ \sin 39.8722878^\circ \cos (-75^\circ) \cr
               &-\sin 29.8877622^\circ \cos 39.8722878^\circ \cos (-80^\circ)]/ \cr
               & [\sin 29.8877622^\circ \cos 39.8722878^\circ \sin (-80^\circ) \cr
               &-\cos 29.8877622^\circ \sin 39.8722878^\circ \sin (-75^\circ)] \} \cr
              =& \arctan (0.0774469/0.1602532) \cr 
              =& 25.7934757^\circ
}
{{</math>}}
{{<math div="betap_ello">}}
\eqalign{
  \beta_p &= \arctan \{-\cos[25.7934757^\circ-(-75^\circ)]/\tan 29.8877622^\circ \} \cr
          &= 18.0472981^\circ
}
{{</math>}}
Using equations [(10-17)]({{<relref "sect_10#10-17">}}) and [(3-16)]({{<relref "sect_10#3-16">}}), with subscript _p_ instead of _c_, $\phi_p$ is found by iteration as in the example for $\phi_c$, under the transverse aspect. Finally,
{{<math div="phip_ello">}}
\phi_p = 18.1238834^\circ
{{</math>}}
Using equations [(10-20)]({{<relref "sect_10#10-20">}}) and [(10-21)]({{<relref "sect_10#10-21">}}), and table 13 for the Clarke 1866 ellipsoid<sup>[note 4]({{<ref "notes#cylea4">}})</sup><a name="noteref4"></a>, the specific Fourier coefficients are calculated:
{{<math div="b_ello">}}
\eqalign{
  B =& 0.9991507116+(-0.0008471546)\cos(2\times 18.1238836^\circ) \cr
     &+0.0000021283\cos(4\times18.1238836^\circ) \cr
     &+(-0.0000000054)\cos(6\times18.1238836^\circ) \cr
    =& 0.9984682
}
{{</math>}}
{{<math div="a2_ello">}}
\eqalign{
  A_2 =& (-0.0001412092)+(-0.0001411259)\cos(2\times 18.1238836^\circ) \cr
       &+0.0000000839\cos(4\times18.1238836^\circ) \cr
       &+0.0000000006\cos(6\times18.1238836^\circ) \cr
      =& -0.0002550
}
{{</math>}}
{{<math div="a4_ello">}}
\eqalign{
  A_4 =& (-0.0000000435)+(-0.0000000579)\cos(2\times 18.1238836^\circ) \cr
       &+(-0.0000000144)\cos(4\times18.1238836^\circ) \cr
       &+0.0000000000\cos(6\times18.1238836^\circ) \cr
      =& -0.0000001
}
{{</math>}}
Equations [(3-12)]({{<relref "sect_10#3-12">}}) and [(3-11)]({{<relref "sect_10#3-11">}}) are again used to determine $\beta$ from $\phi$, giving
{{<math div="beta_ello">}}
  \beta = 41.8710107^\circ
{{</math>}}
From equation [(10-22)]({{<relref "sect_10#10-22">}}),
{{<math div="lamprime_ello">}}
\eqalign{
  \lambda' =& \arctan \{[\cos18.0472983^\circ\sin41.8710107^\circ-\sin18.0472983^\circ \cr
            & \times\cos41.8710107^\circ\cos(-77^\circ-25.7934758^\circ)] \cr
            & /\cos41.8710107^\circ\sin(-77^\circ-25.7934758^\circ)\} \cr
           =& \arctan[0.6857020/(-0.7261631)] \cr
           =& 136.6415266^\circ
}
{{</math>}}
Using equations [(10-23)]({{<relref "sect_10#10-23">}}) through [(10-25)]({{<relref "sect_10#10-25">}}), using $q_p$ as computed above for the
transverse aspect,
{{<math div="x_ello">}}
\eqalign{
  x =& 6378206.40\times1.0\times[0.9984682\times136.6415266^\circ\times\pi/180^\circ \cr
     & + (-0.0002550)\sin(2\times136.6415266^\circ)+ (-0.0000001)\sin(4\times136.6415266^\circ)] \cr
    =& 15189353.49\;\text{m} 
}
{{</math>}}
{{<math div="f_ello">}}
\eqalign{
  F =& 0.9984682+2\times(-0.0002550)\cos(2\times136.6415266^\circ) \cr
     & + 4\times(-0.0000001)\cos(4\times136.6415266^\circ) \cr
    =& 0.9984393 
}
{{</math>}}
{{<math div="y_ello">}}
\eqalign{
  y =& (6378206.4\times1.9954814/2)\times[\sin18.0472983^\circ \cr
     & \times\sin41.8710107^\circ+\cos18.0472983^\circ\cos41.8710107^\circ \cr
     & \times\cos(-77^\circ-25.7934758^\circ)]/(1\times 0.9984393) \cr
    =& 318677.45 \;\text{m}
}
{{</math>}}

#### Inverse equations
Given: $a, e^2, h_0$, calculated pole location $(\phi_p, \lambda_p)$, calculated Fourier coefficients $B, A_2$, and $A_4$ as in the forward oblique ellipsoid example, and $R_q$ as calculated for the forward normal ellipsoid example,
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ello_in" value="15189353.49" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ello_in" value="318677.45" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ello.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

First <span id="qp_ello_inv">$q_p=1.9954814$</span> as found from [(3-12)]({{<ref "sect_10#3-12">}}) in the forward transverse example.

To solve for $\lambda'$ from [(10-32)]({{<ref "sect_10#10-32">}}), the first trial $\lambda'$ is found as described:
{{<math div="lamprime_ello_inv1">}}
\eqalign{
  \lambda' &= [15189353.49/(6378206.4\times1.0\times0.9984682)]\times180^\circ/\pi \cr
           &= 136.6561359^\circ
}
{{</math>}}
Using equation [(10-32)]({{<ref "sect_10#10-32">}}),
{{<math div="lamprime_ello_inv2">}}
\eqalign{
  \lambda' =& [15189353.49/(6378206.4\times1.0)\times180^\circ/\pi \cr
              & -(-0.0002550)\times\sin(2\times136.6561359^\circ) \cr
              & -(-0.0000001)\times\sin(4\times136.6561359^\circ)]/0.9984682 \cr
            =&  136.6415270^\circ
}
{{</math>}}

Substituting <span id="lamprime_ello_inv2-1">$136.6415270^\circ$</span>in place of <span id="lamprime_ello_inv1-1">$136.6561359^\circ$</span> in this equation, $\lambda'$ is calculated to be <span id="lamprime_ello_inv3">$136.6415266^\circ$</span>. The next iteration yields no change to seven decimal places, so that
{{<math div="lamprime_ello_inv">}}
\lambda' = 136.6415266^\circ
{{</math>}}
Equation [(10-24)]({{<ref "sect_10#10-24">}}) is used to calculate $F$ just as it was in the forward oblique example, so $F$ is again
{{<math div="f_ello_inv">}}
F = 0.9984393
{{</math>}}

From equations [(10-33)]({{<ref "sect_10#10-33">}}) through [(10-35)]({{<ref "sect_10#10-35">}}),
{{<math div="betaprime_ello_inv">}}
\eqalign{
  \beta' =& \arcsin[2\times0.9984393\times1\times318677.45/ \cr
            & (6378206.4\times1.9954814)] \cr
          =& 2.8658964^\circ 
}
{{</math>}}
{{<math div="beta_ello_inv">}}
\eqalign{
  \beta =& \arcsin(\sin18.0472983^\circ\sin2.8658964^\circ \cr
          & + \cos18.0472983^\circ\sin2.8658964^\circ\sin136.6415266^\circ) \cr
          =& 41.8710107^\circ 
}
{{</math>}}
{{<math div="lam_ello_inv">}}
\eqalign{
  \lambda =& 25.7934758^\circ + \arctan[\cos2.8658964^\circ\cos136.6415266^\circ/ \cr
           & \cos18.0472983^\circ\sin2.8658964^\circ \cr
           & - \sin18.0472983^\circ\cos2.8658964^\circ\sin136.6415266^\circ] \cr
          =& 25.7934758^\circ + \arctan[(-0.7261631)/(-0.1648933)] \cr
          =& -77.0000001^\circ
}
{{</math>}}

Using [(10-17)]({{<ref "sect_10#10-17">}}) and [(3-16)]({{<ref "sect_10#3-16">}}), $\phi$ is found from $\beta$ as previously, dropping subscript _c_ and with iteration, to produce
{{<math div="phi_ello_inv">}}
\phi=42.0000000^\circ
{{</math>}}
The computation of Fourier coefficients is not shown here, since it is lengthy and is not needed unless a different ellipsoid is desired<sup>[note 4]({{<ref "notes#cylea4">}})</sup><a name="noteref4-1"></a>. An example of computation of Fourier coefficients is given under the Space Oblique Mercator projection.
