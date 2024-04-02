---
title: Numerical Examples - Lambert Conformal Conical Projection
weight: 80
description: Numerical examples for Lambert Conformal Conical projection
mathjax: 2
css: numerics.css
menuTitle: Lambert Conformal Conical
date: 2023-05-16
lastmod: 2024-02-24
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/lcc.js"> </script>
{{</rawHTML>}}


# Numerical Examples for Lambert Conformal Conical Projection 

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
  <td>$\phi_1=\;$<input id="phi1_sph_in" value="33" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\phi_2=\;$<input id="phi2_sph_in" value="45" size="5"/>&deg;</td>
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

From equations [(15-3)]({{<ref "sect_15#15-1">}}), [(15-2)]({{<ref "sect_15#15-2">}}), and [(15-1a)]({{<ref "sect_15#15-1a">}}) in order
{{<math div="n_sph">}}
\eqalign{
  n &= \ln(\cos33^\circ/\cos45^\circ)/\ln[\tan(45^\circ+45^\circ/2)/\tan(45^\circ+33^\circ/2)] \cr
    &= 0.6304777
}
{{</math>}}
{{<math div="f_sph">}}
\eqalign{
  F &=[\cos33^\circ\tan^{0.6304777}(45^\circ+33^\circ/2)]/0.6304777 \cr
    &=1.9550002
}
{{</math>}}
{{<math div="rho0_sph">}}
\eqalign{
  \rho_0 &= 1.0\times1.9550002/\tan^{0.6304777}(45^\circ+23^\circ/2) \cr
          &= 1.5071429\;\text{units}
}
{{</math>}}
The above constants apply to the map generally. For the specific $\phi$ and $\lambda$, using equations [(15-1)]({{<ref "sect_15#15-1">}}), [(14-4)]({{<ref "sect_15#14-4">}}), [(14-1)]({{<ref "sect_15#14-1">}}), and [(14-2)]({{<ref "sect_15#14-2">}}) in order,
{{<math div="rho_sph">}}
\eqalign{
  \rho &= 1.0\times1.9550002/\tan^{0.6304777}(45^\circ+35^\circ/2) \cr
          &= 1.2953636\;\text{units}
}
{{</math>}}
{{<math div="theta_sph">}}
\eqalign{
  \theta &= 0.6304777\times((-75^\circ)-(-96^\circ)) \cr
          &= 13.2400316^\circ
}
{{</math>}}
{{<math div="x_sph">}}
\eqalign{
  x &= 1.2953636\sin13.2400316^\circ \cr
    &= 0.2966785\;\text{units}
}
{{</math>}}
{{<math div="y_sph">}}
\eqalign{
  y &= 1.5071429-1.2953636\cos13.2400316^\circ\cr
    &= 0.2462112\;\text{units}
}
{{</math>}}
From equation [(15-4)]({{<ref "sect_15#15-4">}}),
{{<math div="k_sph">}}
\eqalign{
  k =& \cos33^\circ\tan^{0.6304777}(45^\circ+33^\circ/2)/ \cr
     &[\cos35^\circ\tan^{0.6304777}(45^\circ+35^\circ/2)] \cr
    =& 0.9970040
}
{{</math>}}
or from equation [(4-5)]({{<ref "sect_4#4-5">}})
{{<math div="k_sph1">}}
\eqalign{
  k &= 0.6304777\times1.2953636/(1.0\times\cos35^\circ) \cr
    &= 0.9970040
}
{{</math>}}
### Inverse Equations
Inversing forward example:

Given: $R, \phi1, \phi2, \phi_0, \lambda_0$, for forward example
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_sph_in" value="0.2966785" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_sph_in" value="0.2462112" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\rho, \theta, \phi, \lambda$.

After calculating $n, F,$ and $\rho_0$ as in the forward example, obtaining the same
values, equation [(14-10)]({{<ref "sect_15#14-10">}}) is used:
{{<math div="rho_sph_inv">}}
\eqalign{
  \rho &= [0.2966785^2 + (1.5071429-0.2462112)^2]^{1/2} \cr
        &= 1.2953636
}
{{</math>}}
From equation [(14-11)]({{<ref "sect_15#14-11">}}),
{{<math div="theta_sph_inv">}}
\eqalign{
  \theta &= \arctan[0.2966785/(1.5071429-0.2462112)] \cr
          &= 13.2400331^\circ\;\text{Not adjusted since denominator is positive.}
}
{{</math>}}
From equation [(14-9)]({{<ref "sect_15#14-9">}}),
{{<math div="lam_sph_inv">}}
\eqalign{
  \lambda &= 13.2400331^\circ/0.6304777 + (-96^\circ)\cr
          &= -74.9999977^\circ
}
{{</math>}}
From equation [(15-5)]({{<ref "sect_15#15-5">}}),
{{<math div="phi_sph_inv">}}
\eqalign{
  \phi &= 2\arctan[(1.0\times1.9550002/1.2953636)^{1/0.6304777}] - 90^\circ \cr
        &= 34.9999978^\circ
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
  <td style="text-align:right">or:</td>
  <td>$e=$</td>
  <td id="ellip_e">0.0822719</td>
</tr>
<tr>
  <td>Standard parallels:</td>
  <td>$\phi_1=$</td>
  <td><input id="phi1_ell_in" value="33.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\phi_2=$</td>
  <td><input id="phi2_ell_in" value="45.0" size="5"/>&deg;</td>
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

From equation [(14-15)]({{<ref "sect_15#14-15">}}),
{{<math div="m1_ell">}}
\eqalign{
  m_1 &= \cos33^\circ/(1-0.0067687\sin^233^\circ)^{1/2} \cr
      &= 0.8395138
}
{{</math>}}
{{<math div="m2_ell">}}
\eqalign{
  m_2 &= \cos45^\circ/(1-0.0067687\sin^245^\circ)^{1/2} \cr
      &= 0.7083064
}
{{</math>}}

From equation [(15-9)]({{<ref "sect_15#15-9">}}),
{{<math div="t1_ell">}}
\eqalign{
  t_1 &= \tan(45^\circ-33^\circ/2)/[(1-0.0822719\sin 33^\circ)/(1+0.0822719\sin 33^\circ)]^{0.0822719/2} \cr
      &= 0.5449623
}
{{</math>}}
{{<math div="t2_ell">}}
t_2= 0.4162031\text{, using above with \(45^\circ\) in place of \(33^\circ\),}
{{</math>}}
{{<math div="t0_ell">}}
t_0= 0.6636390\text{, using above with \(23^\circ\) in place of \(33^\circ\),}
{{</math>}}

From equations [(15-8)]({{<ref "sect_15#15-8">}}),[(15-10)]({{<ref "sect_15#15-10">}}), and [(15-7a)]({{<ref "sect_15#15-7a">}}) in order,
{{<math div="n_ell">}}
\eqalign{
  n &= \ln(0.8395138/0.7083064)/\ln(0.5449623/0.4162031) \cr
    &= 0.6304965
}
{{</math>}}
{{<math div="f_ell">}}
\eqalign{
  F &= 0.8395138/(0.6304965\times0.5449623^{0.6304965}) \cr
    &= 1.9523837
}
{{</math>}}
{{<math div="rho0_ell">}}
\eqalign{
  \rho_0 &= 6378206.4\times1.9523837\times0.6636390^{0.6304965} \cr
         &= 9615955.20\;\text{m}
}
{{</math>}}

The above are constants for the map. For the specific $\phi, \lambda$, using equation [(15-9)]({{<ref "sect_15#15-9">}}),

<span id="t_ell">$t= 0.5225935$</span>,&nbsp;using above calculation with <span id="phi_ell1">$35^\circ$</span> in place of <span id="phi1_ell1">$33^\circ$</span>.

From equations [(15-7)]({{<ref "sect_15#15-7">}}), [(14-4)]({{<ref "sect_15#14-4">}}), [(14-1)]({{<ref "sect_15#14-1">}}) and [(14-2)]({{<ref "sect_15#14-2">}}) in order,
{{<math div="rho_ell">}}
\eqalign{
  \rho &= 6378206.4\times1.9523837\times0.5225935^{0.6304965} \cr
       &= 8271173.83\;\text{m}
}
{{</math>}}
{{<math div="theta_ell">}}
\eqalign{
  \theta &= 0.6304965\times[(-75^\circ)-(-96^\circ)] \cr
         &= 13.2404257^\circ
}
{{</math>}}
{{<math div="x_ell">}}
\eqalign{
  x &= 8271173.83\sin 13.2404257^\circ \cr
    &= 1894410.90\;\text{m}
}
{{</math>}}
{{<math div="y_ell">}}
\eqalign{
  y &= 9615955.20-8271173.83\cos13.2404257^\circ \cr
    &= 1564649.47\;\text{m}
}
{{</math>}}

From equations [(14-15)]({{<ref "sect_15#14-15">}}), [(14-16)]({{<ref "sect_15#14-16">}}),
{{<math div="m_ell">}}
\eqalign{
  m &= \cos35^\circ/(1-0.0067687\sin^235^\circ)^{1/2} \cr
    &= 0.8200656
}
{{</math>}}
{{<math div="k_ell">}}
\eqalign{
  k &= 8271173.83\times0.6304965/(6378206.4\times0.8200656) \cr
    &= 0.9970171
}
{{</math>}}

### Inverse Equations
Inversing forward example:

Given
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="1894410.90" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="1564649.47" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
The map constants $n, F$, and $\rho_0$, are calculated as in the forward example, obtaining the same values. Then, from equation [(14-10)]({{<ref "sect_15#14-10">}}),
{{<math div="rho_invell">}}
\eqalign{
  \rho &= [1894410.90^2 + (9615955.20 - 1564649.47)^2]^{1/2} \cr
        &= 8271173.84\;\text{m}
}
{{</math>}}
From equation [(14-11)]({{<ref "sect_15#14-11">}}),
{{<math div="theta_invell">}}
\eqalign{
  \theta &= \arctan[1894410.90/(9615955.20-1564649.47)]\cr
         &= 13.2404257^\circ\;\text{The denominator is positive; therefore \(\theta\) is not adjusted.}
}
{{</math>}}
From equation [(15-11)]({{<ref "sect_15#15-11">}}),
{{<math div="t_invell">}}
\eqalign{
  t &= [8271173.84/(6378206.4\times1.9523837)]^{1/0.6304965} \cr
    &= 0.5225935
}
{{</math>}}
To use equation [(7-9)]({{<ref "sect_15#7-9">}}), an initial trial $\phi$, is found as follows:
{{<math div="phi_invell0">}}
\eqalign{
      \phi &= 90^\circ - 2\arctan0.5225935\cr
           &= 34.8174476^\circ
    }
{{</math>}}
Inserting this into the right side of equation [(7-9)]({{<ref "sect_15#7-9">}}),
{{<math div="phi_invell1">}}
\eqalign{
  \phi =& 90^\circ - 2\arctan\{0.5225935\times[(1-0.0822719\sin 34.8174476^\circ)/ \cr
        & (1+0.0822719\sin 34.8174476^\circ)]^{0.0822719/2} \} \cr
       =& 34.9991681^\circ 
}
{{</math>}}
Replacing <span id="phi_invell0-1">$34.8174476^\circ$</span> with <span id="phi_invell1-1">$34.9991681^\circ$</span> for the second trial, a $\phi$, of <span id="phi_invell2">$34.9999962^\circ$ is obtained. Recalculation with the new $\phi$, results in <spna id="phi_invell3">$\phi = 35.0000000^\circ$</span>, which does not change to seven decimals with a fourth trial. Therefore,
{{<math div="phi_invell">}}
\phi=35.0000000^\circ
{{</math>}}
From equation [(14-9)]({{<ref "sect_15#14-9">}}),
{{<math div="lam_invell">}}
\eqalign{
  \lambda &= 13.2404257^\circ/0.6304965+(-96^\circ) \cr
            &= -75.0000000^\circ 
}
{{</math>}}

Examples using equations [(3-5)]({{<ref "sect_15#3-5">}}) and [(7-13)]({{<ref "sect_15#7-13">}}) are omitted here, since comparable examples for these equations have been given above.