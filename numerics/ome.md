---
title: Numerical Examples - Oblique Mercator Projection
weight: 30
description: Numerical examples for Oblique Mercator projection
mathjax: 2
css: numerics.css
menuTitle: Oblique Mercator
date: 2023-02-18
lastmod: 2024-02-20
---
{{<rawHTML>}}
<script src="../js/format.js"> </script>
<script src="../js/ome.js"> </script>
{{</rawHTML>}}

# Numerical Examples for Oblique Mercator Projection
## SPHERE
### Forward Equations
Given
{{<rawHTML>}}
<table id="params" class="markdown">
<tr>
  <td>Radius of sphere:</td>
  <td>$R=\;\;$<input id="r_in" value="1.0" size="5" /></td>
  <td>unit</td>
</tr>
<tr>
  <td>Central scale factor:</td>
  <td>$k_0=\;$<input id="k0_sph_in" value="1.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Central line through:</td>
  <td>$\phi_1=\;$<input id="phi1_sph_in" value="45" size="5"/>&deg;</td>
  <td>$\lambda_1=\;$<input id="lam1_sph_in" value="0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\phi_2=\;$<input id="phi2_sph_in" value="0" size="5"/>&deg;</td>
  <td>$\lambda_2=\;$<input id="lam2_sph_in" value="-90" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=\;$<input id="phi_sph_in" value="-30" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda=\;$<input id="lambda_sph_in" value="120" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_fwd()"/></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, k$

Using equation [(9-1)]({{<ref "sect_9#9-1">}}),
{{<math div="lambda_p">}}
  \begin{align}
    \lambda_p =& \arctan[(\cos45^\circ\sin0^\circ\cos0^\circ - \sin45^\circ\cos0^\circ\cos(-90^\circ))/ \cr
               &(\sin45^\circ\cos0^\circ\sin(-90^\circ) - \cos45^\circ\sin0^\circ\sin0^\circ] \cr
                 =&180^\circ
  \end{align}
{{</math>}}
Result is adjusted to be in the $(-180^\circ, +180^\circ]$ interval.

From equation [(9-2)]({{<ref "sect_9#9-2">}}),

{{<math div="phi_p">}}
  \eqalign{
    \phi_p &= \arctan[-\cos(180^\circ-0^\circ)/\tan45^\circ] \cr
           &= 45^\circ
  }
{{</math>}}
The other pole is then at <span id="pole2">$\phi= -45^\circ, \lambda = 0^\circ$</span>. From equation [(9-6a)]({{<ref "sect_9#9-6a">}}),
{{<math div="lam0">}}
  \lambda_0 = 180^\circ + 90^\circ = -90^\circ
{{</math>}}
From equation [(9-6)]({{<ref "sect_9#9-6">}}),
{{<math div="A_sph">}}
  \eqalign{
    A &= \sin45^\circ\sin(-30^\circ)-\cos45^\circ\cos(-30^\circ)\sin(120^\circ-(-90^\circ)) \cr
      &= 0.7071068\times(-0.5000000)-0.7071068\times0.8660254\times(-0.5000000) \cr
      &= -0.0473672
  }
{{</math>}}
From equation [(9-3)]({{<ref "sect_9#9-3">}})
{{<math div="x_sph">}}
  \eqalign{
    x &=1.0\times1.0\arctan\{[\tan(-30^\circ)\cos45^\circ+\sin45^\circ\sin(120^\circ-(-90^\circ))]/\cos(120^\circ-(-90^\circ))\} \cr
      &=-2.4201335 \;\text{units}
  }
{{</math>}}
From equation [(9-4)]({{<ref "sect_9#9-4">}}),
{{<math div="y_sph">}}
  \eqalign {
    y &= (1/2)\times1.0\times1.0\ln[(1-0.0473672)/(1+0.0473672)] \cr
      &= -0.0474026 \;\text{units}
  }
{{</math>}}
From equation [(9-5)]({{<ref "sect_9#9-5">}}),
{{<math div="k_sph">}}
  k=1.0/[1-(-0.0473672)^2]^{1/2} = 1.0011237
{{</math>}}
If the parameters are given in terms of a central point (for equations [(9-7)]({{<ref "sect_9#9-7">}}) and [(9-8)]({{<ref "sect_9#9-8">}})), we shall assume certain artificial parameters (calculated with different formulas) which give the same pole as above:<sup>[*1]({{<ref "notes#ome1">}})</sup><a name="noteref1"></a>

Given
{{<rawHTML>}}
<table id="params1" class="markdown">
<tr>
  <td>Azimuth of central line:</td>
  <td>$\beta=\;\;$<input id="beta_in" value="48.806299" size="9" /> &deg;</td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_c=\;$<input id="phi_c_in" value="20.0" size="9"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_c=\;$<input id="lambda_c_in" value="-68.6557771" size="9"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="sph.set_par1()"/></td>
</tr>
</table>
{{</rawHTML>}}
Using equations [(9-7)]({{<ref "sect_9#9-7">}}) and [(9-8)]({{<ref "sect_9#9-8">}}),
{{<math div="phi_p1">}}
  \eqalign{
    \phi_p &= \arcsin(\cos20.0^\circ\sin48.806299^\circ) \cr
           &= 45^\circ
  }
{{</math>}}
{{<math div="lambda_p1">}}
  \eqalign{
    \lambda_p &= \arctan[\cos48.806299^\circ/(-\sin20.0^\circ\sin48.806299^\circ)] + (-68.6557771^\circ) \cr
              &= 180^\circ \;\;\text{(computation uses the ATAN2 function)}
  }
{{</math>}}

### Inverse Equations
Inversing forward example:

Given:
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_sph_in" value="-2.4201335" size="9"/> units</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_sph_in" value="-0.0474026" size="9"/> units</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="sph.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

First, $\phi_p$ and $\lambda_p$ are determined, exactly as for the forward example, so that <span id="lam0_2">$\lambda_0=-90^\circ $</span>, and <span id="phi_p2">$\phi_c = 45^\circ$</span>. Determining hyperbolic functions, if not readily
available,
{{<math div="hyp_func">}}
  \eqalign{
    y/Rk_0 &= -0.0474026/(1\times1) = -0.0474026 \cr
    e^{-0.0474026} &= 0.9537034 \cr
    \sinh(y/Rk_0) &= (0.9537034-1/0.9537034)/2 \cr
                  &= -0.0474204 \cr
    \cosh(y/Rk_0) &= (0.9537034+1/0.9537034)/2 \cr
                  &= 1.0011237 \cr
    \tanh(y/Rk_0) &= (0.9537034-1/0.9537034)/(0.9537034+1/0.9537034) \cr
                  &= -0.0473671
  }
{{</math>}}
From equation [(9-9)]({{<ref "sect_9#9-9">}}),
{{<math div="phi_sph">}}
  \eqalign {
    \phi =& \arcsin\{\sin45^\circ\times(-0.0473671)+\cos45^\circ\sin[(-2.4201335)/(1\times1)]/1.0011237 \} \cr
         =& \arcsin (-0.5) = -29.999998^\circ
  }
{{</math>}}
From equation [(9-10)]({{<ref "sect_9#9-10">}}),
{{<math div="lam_sph">}}
\eqalign{
  \lambda =& (-90^\circ)+\arctan\{[\sin0.7853982^\circ\sin[(-2.4201335)/(1\times1)] \cr
           & -\cos0.7853982^\circ\times(-0.0474204)]/\cos[(-2.4201335)/(1\times1)]\} \cr
          =& (-90^\circ)+(-149.9999981^\circ) \cr
          =& -239.9999981^\circ = 120.0000019^\circ
  }
{{</math>}}

## ELLIPSOID (Alternate A)
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
  <td id="ellip_a">$a=6378206.4\,\text{m}$</td>
</tr>
<tr>
  <td></td>
  <td id="ellip_e2">$e^2=0.00676866$</td>
</tr>
<tr>
  <td style="text-align:right">or</td>
  <td id="ellip_e">$e=0.0822719$</td>
</tr>
<tr>
  <td>Central scale factor</td>
  <td>$k_0=\;$<input id="k0_ell_in" value="0.9996" size="5"/></td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_0=\;$<input id="phi0_ell_in" value="40.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td>Central line through:</td>
  <td>$\phi_1=\;$<input id="phi1_ell_in" value="47.5" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_1=\;$<input id="lam1_ell_in" value="-122.3" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\phi_2=\;$<input id="phi2_ell_in" value="25.7" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_2=\;$<input id="lam2_ell_in" value="-80.2" size="5"/>&deg;</td>
</tr>
<tr>
  <td>False coordinates:</td>
  <td>$x_0=\;$<input id="x0_ell_in" value="4000000" size="7"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$y_0=\;$<input id="y0_ell_in" value="500000" size="7"/>&deg;</td>
</tr>
<tr>
  <td>Point:</td>
  <td>$\phi=$<input id="phi_ell_in" value="40.8" size="5">&deg;</td>
</tr>
  <td></td>
  <td>$\lambda=$<input id="lambda_ell_in" value="-74.0" size="5">&deg;</td>
</tr>
<tr>
  <td></td>
  <td><input type="button" value="Set" onclick="ell.set_fwd()"></td>
</tr>
</table>
{{</rawHTML>}}
Find $x, y, k$.

Following equations [(9-11)]({{<ref "sect_9#9-11">}}) through [(9-24)]({{<ref "sect_9#9-24">}}) in order:
{{<math div="B_ell">}}
  \eqalign{
    B &=[1+0.00676866\cos^440^\circ/(1-0.00676866)]^{1/2} \cr
      &= 1.0011727
  }
{{</math>}}
{{<math div="A_ell">}}
  \eqalign{
    A =& 6378206.4\times1.0011727\times0.9996\times(1-0.00676866)^{1/2} \cr
       & (1-0.00676866\sin^240^\circ) \cr
      =& 6379333.23;
  }
{{</math>}}
{{<math div="t0_ell">}}
  \eqalign{
    t_0 =&\tan(45^\circ-40^\circ/2)[(1-0.0822719\sin40^\circ)/(1+0.0822719\sin40^\circ)]^{0.0822719/2} \cr
        =&0.4683428
  }
{{</math>}}
{{<math div="t1_ell">}}
  \eqalign{
    t_1 =&\tan(45^\circ-47.5^\circ/2)[(1-0.0822719\sin47.5^\circ)/(1+0.0822719\sin47.5^\circ)]^{0.0822719/2} \cr
        =&0.3908266
  }
{{</math>}}
{{<math div="t2_ell">}}
  \eqalign{
    t_2 =&\tan(45^\circ-25.7^\circ/2)[(1-0.0822719\sin25.7^\circ)/(1+0.0822719\sin25.7^\circ)]^{0.0822719/2} \cr
        =&0.6303639
  }
{{</math>}}
{{<math div="D_ell">}}
  \eqalign{
    D =&1.0011727\times(1-0.00676866)^{1/2}/[\cos40^\circ\times \cr
       &(1-0.00676866\sin^240^\circ)^{1/2}] \cr
      =& 1.3043327
  }
{{</math>}}
{{<math div="E_ell">}}
  \eqalign {
    E &=[1.3043327 + (1.3043327^2-1)]\times0.4683428^{1.0011727} \cr
      &=1.0021857 \cr
      &\text {using the "+" sign since \(\phi_0\) is north or positive.}
  }
{{</math>}}
{{<math div="H_ell">}}H = 0.3908266^{1.0011727} = 0.3903963{{</math>}}
{{<math div="L_ell">}}L = 0.6303639^{1.0011727} = 0.6300229{{</math>}}
{{<math div="F_ell">}}F= 1.0021857/0.3903963 = 2.5670986{{</math>}}
{{<math div="G_ell">}}G= (2.5670986- 1/2.5670986)/2{{</math>}}
{{<math div="J_ell">}}
  \eqalign {
    J &= (1.0021857^2-0.6300229\times0.3903963)/(1.0021857^2+0.6300229\times0.3903963) \cr
      &= 0.6065716
  }
{{</math>}}
{{<math div="P_ell">}}P=(0.6300229-0.3903963)/(0.6300229+0.3903963) = 0.2348315{{</math>}}
{{<math div="lam0_ell">}}
  \eqalign {
    \lambda_0 =& [(-122.3^\circ)+(-80.2^\circ)]/2-\arctan\{0.6065716\tan[1.0011727 \cr
               & \times((-122.3^\circ)-(-80.2^\circ))/2]/0.2348315\}/1.0011727 \cr
              =& -101.25^\circ - \arctan (-0.9953887)/1.0011727 \cr
              =& -56.4349627^\circ
  }
{{</math>}}
{{<math div="gam0_ell">}}
  \eqalign{
    \gamma_0 &= \arctan \{\sin[1.0011727\times((-122.3^\circ)-(-56.4349627^\circ))]/1.0887769\} \cr
             &= -39.985883^\circ
  }
{{</math>}}
{{<math div="alphac_ell">}}
  \eqalign{
    \alpha_c &= \arcsin[1.3043327\sin(-39.985883^\circ)] \cr
             &= -56.9466071^\circ
  }
{{</math>}}
These are constants for the map. For the given $\phi$, and $\lambda$, following equations [(9-25)]({{<ref "sect_9#9-25">}}) through [(9-34)]({{<ref "sect_9#9-34">}}) in order:
{{<math div="t_ell">}}
  \eqalign{
    t =&\tan(45^\circ-40.8^\circ/2)[(1-0.0822719\sin40.8^\circ)/(1+0.0822719\sin40.8^\circ)]^{0.0822719/2} \cr
      =&0.4598671
  }
{{</math>}}
{{<math div="Q_ell">}}Q=1.0021857/0.4598671^{1.0011727} = 2.1812805{{</math>}}
{{<math div="S_ell">}}S=(2.1812805-1/2.1812805)/2 = 0.8614171{{</math>}}
{{<math div="T_ell">}}T=(2.1812805+1/2.1812805)/2 = 1.3198634{{</math>}}
{{<math div="V_ell">}}V = \sin[1.0011727\times((-74^\circ) - (-56.4349627^\circ))] = -0.3021309{{</math>}}
{{<math div="U_ell">}}
  \eqalign{
    U =& [0.3021309\cos(-39.985883^\circ) + 0.8614171\sin(-39.985883^\circ)]/1.3198634 \cr
      =& -0.2440041
  }
{{</math>}}
{{<math div="v_ell">}}
  \eqalign{
    v &= 6379333.23\ln[(1+(-0.2440041))/(1-(-0.2440041))]/(2\times1.0011727) \cr
      &= 1586767.31 \;\text{m}
  }
{{</math>}}
{{<math div="u_ell">}}
  \eqalign{
    u =& 6379333.23\arctan\{ [0.8614171\cos (-39.985883^\circ) \cr
       & + (-0.3021309)\sin(-39.985883^\circ)]/\cos[1.0011727\times ((-74^\circ)-(-56.4349627^\circ))]\} \cr
       & / 1.0011727 \cr
      =& 4655443.69 \;\text{m}
  }
{{</math>}}
{{<math div="k_ell">}}
  \eqalign{
    k =& 6379333.23 \cos[1.0011727\times4655443.6913226/6378206.4] \cr
       & \times(1-0.0067687\sin^240.8^\circ)/\{6378206.4\cos40.8^\circ \cr
       & \cos[1.0011727\times((-74^\circ)-(-56.4349627^\circ))] \} \cr
      =& 1.0307554 
  }
{{</math>}}
{{<math div="x_ell">}}
  \eqalign{
    x &= 1586767.31\cos (-56.9466071^\circ) + 4655443.69\sin (-56.9466071^\circ) + 4000000 \cr
      &= 963436.08\;\text{m}
  }
{{</math>}}
{{<math div="y_ell">}}
  \eqalign{
    y &= 4655443.69\cos (-56.9466071^\circ) + 1586767.31\sin (-56.9466071^\circ) + 500000 \cr
      &= 4369142.8\;\text{m}
  }
{{</math>}}

### Inverse Equations ###
The above example for alternate A will be inverted,<sup>[*2]({{<ref "notes#ome2">}})</sup><a name="noteref2"> first using equations [(9-11)]({{<ref "sect_9#9-11">}}) through [(9-24)]({{<ref "sect_9#9-24">}}), then using equations [(9-40)]({{<ref "sect_9#9-40">}}) through [(9-48)]({{<ref "sect_9#9-48">}}). Since no new equations are involved for inverse alternate B, an example of the latter will be omitted. As stated with the inverse equations, the constants for the map are chosen as in the forward examples.

Inversing forward example for alternate A:

Given:
{{<rawHTML>}}
<table>
  <tr>
    <td>$x=\;$<input id="x_ell_in" value="963436.08" size="9"/>m</td>
  </tr>
  <tr>
    <td>$y=\;$<input id="y_ell_in" value="4369142.8" size="9"/>m</td>
  </tr>
  <tr>
    <td><input type="button" value="Set" onclick="ell.set_inv()"/></td>
</table>
{{</rawHTML>}}
Find $\phi, \lambda$.

Using equations [(9-11)]({{<ref "sect_9#9-11">}}) through [(9-24)]({{<ref "sect_9#9-24">}}) in order, again gives the following constants:
{{<math div="B_inv">}}B=1.0011727{{</math>}}
{{<math div="A_inv">}}A=6379333.23\;\text{m}{{</math>}}
{{<math div="E_inv">}}E=1.0021857{{</math>}}
{{<math div="lam0_inv">}}\lambda_0=-56.4349627^\circ{{</math>}}
{{<math div="gam0_inv">}}\gamma_0=-39.985883^\circ{{</math>}}
{{<math div="alphac_inv">}}\alpha_c=-56.9466071^\circ{{</math>}}

Following equations [(9-40)]({{<ref "sect_9#9-40">}}) through [(9-48)]({{<ref "sect_9#9-48">}}) in order:
{{<math div="v_inv">}}
  \eqalign{
    v =& (963436.08 - 4000000)\cos(-56.9466071^\circ) \cr
       &-(4369142.8-500000)\sin(-56.9466071^\circ) \cr
      =& 1586767.31\;\text{m}
  }
{{</math>}}
{{<math div="u_inv">}}
  \eqalign{
    u =& (4369142.8 - 500000)\cos(-56.9466071^\circ) \cr
       &-(963436.08-4000000)\sin(-56.9466071^\circ) \cr
      =& 4655443.69\;\text{m}
  }
{{</math>}}
{{<math div="Q_inv">}}
  \eqalign{
    Q' =& \mathrm{e}^{-(1.0011727\times1586767.31/6379333.23)} = \mathrm{e}^{(-0.2490273)} \cr
       =& 0.7795587
  }
{{</math>}}
{{<math div="S_inv">}}S' = (0.7795587-1/0.7795587) = -0.2516092{{</math>}}
{{<math div="T_inv">}}T' = (0.7795587+1/0.7795587)/2 = 1.0311679{{</math>}}
{{<math div="V_inv">}}
  \eqalign{
    V' =& \sin(1.0011727\times4655443.69/6379333.23) \cr
       =& \sin 41.8617536^\circ = 0.6673356
  }
{{</math>}}
{{<math div="U_inv">}}
  \eqalign{
    U' =& [0.6673356\cos(-39.985883^\circ)+(-0.2516092)\sin(-14.4161438^\circ)]/ \cr
        & 1.0311679 \cr
       =& 0.6526562
  }
{{</math>}}
{{<math div="t_inv">}}
  \eqalign{
    t &= \{1.0021857/[(1+0.6526562)/(1-0.6526562)]^{1/2} \}^{1/1.0011727} \cr
      &= 0.4598671
  }
{{</math>}}
The first trial $\phi$ for equation [(7-9)]({{<ref "sect_7#7-9">}}) is
{{<math div="phi_inv0">}}90^\circ - 2\arctan 0.4598671 = 40.6077094^\circ{{</math>}}
Calculating a new trial $\phi$:
{{<math div="phi_inv1">}}
  \eqalign{
    \phi =& 90^\circ - 2\arctan\{ 0.4598671\times[(1-0.0822719\sin 40.6077094^\circ)/ \cr
          & (1+0.0822719\sin 40.6077094^\circ)]^{0.0822719/2}\} \cr
         =& 40.7992509^\circ 
  }
{{</math>}}
A second iteration gives <span id="phi_inv2">$40.7999971^\circ$</span>. Third iteration gives:
{{<math div="phi_inv3">}}\phi = 40.8^\circ{{</math>}}
For longitude $\lambda$:
{{<math div="lam_inv">}}
  \eqalign{
    \lambda =& -56.4349627^\circ-\arctan\{[(-0.2516092)\cos (-39.985883^\circ) \cr
             & -0.6673356\sin (-39.985883^\circ)]\cos(1.0011727 \cr
             & \times 4655443.69/6379333.23)\} /1.0011727 \cr
            =& -74^\circ
  }
{{</math>}}

Using series equation [(3-5)]({{<ref "sect_3#3-5">}}) with [(7-13)]({{<ref "sect_7#7-13">}}), to avoid itemtion of [(7-9)]({{<ref "sect_7#7-9">}}), and beginning
with equation [(7-13)]({{<ref "sect_7#7-13">}}),
{{<math div="chi_inv">}}
  \eqalign{
    \chi &= 90^\circ - 2\arctan 0.4598671 \cr
         &= 40.6077094^\circ
  }
{{</math>}}
Since equation [(3-5)]({{<ref "sect_3#3-5">}}) is used in an example under [Auxiliary latitudes]({{<ref "aux_lat#3-5">}}), the calculation will not be shown here.

## ELLIPSOID (Alternate B)

### Forward Equations
{{< rawHTML >}}
Given: <br/>
<table>
<tr>
  <td>
    <select id="ellip2" onchange="ell2.select(this.options[this.selectedIndex].value)")>
      <option value="0" selected>Clarke 1866</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid
  </td>
  <td id="ellip2_a">$a=6378206.4\,\text{m}$</td>
</tr>
<tr>
  <td></td>
  <td id="ellip2_e2">$e^2=0.00676866$</td>
</tr>
<tr>
  <td style="text-align:right">or</td>
  <td id="ellip2_e">$e=0.0822719$</td>
</tr>
<tr>
  <td>Central scale factor</td>
  <td>$k_0=\;$<input id="k0_ell2_in" value="1.0" size="5"/></td>
</tr>
<tr>
  <td>Center:</td>
  <td>$\phi_0=\;$<input id="phi0_ell2_in" value="36.0" size="5"/>&deg;</td>
</tr>
<tr>
  <td></td>
  <td>$\lambda_c=\;$<input id="lamc_ell2_in" value="-77.7610558" size="9"/>&deg;</td>
</tr>
<tr>
  <td>Azimuth of central line:</td>
  <td>$\alpha_c=\;$<input id="alphac_ell2_in" value="14.3394883" size="9"/>&deg;</td>
</tr>
  <tr>
    <td>Point:</td>
    <td>$\phi=\;$<input id="phi_ell2_in" value="38.8092128" size="9">&deg;</td>
  </tr>
    <td></td>
    <td>$\lambda=\;$<input id="lambda_ell2_in" value="-76.8707953" size="9">&deg;</td>
  </tr>
  <tr>
    <td></td>
    <td><input type="button" value="Set" onclick="ell2.set_fwd()"></td>
  </tr>
</table>
{{</rawHTML>}}
Find: $u, v$ (example uses center of Zone 2, Path 16, Landsat mapping, with Hotine Oblique Mercator).

Using equations [(9-11)]({{<ref "sect_9#9-11">}}) through [(9-39)]({{<ref "sect_9#9-39">}}) in order,
{{<math div="B_ell2">}}
  \eqalign{
    B &=[1+0.0067687\cos^436^\circ/(1-0.0067687)]^{1/2} \cr
      &= 1.0014586
  }
{{</math>}}
{{<math div="A_ell2">}}
  \eqalign{
    A =& 6378206.4\times1.0014586\times1\times(1-0.0067687)^{1/2} \cr
       & (1-0.0067687\sin^236^\circ) \cr
      =& 6380777.05\;\text{m}
  }
{{</math>}}
{{<math div="t0_ell2">}}
  \eqalign{
    t_0 =&\tan(45^\circ-36^\circ/2)[(1-0.0822719\sin36^\circ)/(1+0.0822719\sin36^\circ)]^{0.0822719/2} \cr
        =&0.5115582
    }
{{</math>}}
{{<math div="D_ell2">}}
  \eqalign{
    D =&1.0014586\times(1-0.0067687)^{1/2}/[\cos36^\circ\times \cr
       &(1-0.0067687\sin^236^\circ)^{1/2}] \cr
      =& 1.2351194
  }
{{</math>}}
{{<math div="F_ell2">}}
  \eqalign{
    & F = 1.2351194 + (1-1.2351194)^{1/2} = 1.9600471 \cr
    & \text{using the "+" sign since \(\phi_0\) is north or positive.}
  }
{{</math>}}
{{<math div="E_ell2">}}
  E = 1.9600471\times 0.5115582^{1.0014586} = 1.0016984
{{</math>}}
{{<math div="G_ell2">}}
  G= (1.9600471- 1/1.9600471)/2 = 0.7249276
{{</math>}}
{{<math div="gam0_ell2">}}
  \eqalign{
    \gamma_0 &= \arcsin [(\sin 14.3394883^\circ)/1.2351194] \cr
             &= 11.5673996^\circ
  }
{{</math>}}
{{<math div="lam0_ell2">}}
  \eqalign{
    \lambda_0 &= -77.7610558^\circ - [\arcsin(0.7249276\tan 11.5673996^\circ)]/1.0014586 \cr
              &= -86.28148^\circ
  }
{{</math>}}
{{<math div="u0_ell2">}}
  \eqalign{
    u_{36^\circ,-76.87^\circ\dots} =& (6380777.05/1.0014586)\arctan[(1.2351194^2-1)^{1/2}/\cr
      & \cos14.3394883^\circ] = 4092868.93
  }
{{</math>}}
These are constants for the map. The calculations of $u, v, x$, and $y$ for $(\phi, \lambda)$ follow the same steps as the numerical example for equations [(9-25)]({{<ref "sect_9#9-25">}}) through [(9-34)]({{<ref "sect_9#9-34">}}) for alternate A. For the given point, it is found that
{{<math div="u_ell2">}}u=4414439.01\;\text{m}{{</math>}}
{{<math div="v_ell2">}}v=-2356.25\;\text{m}{{</math>}}
