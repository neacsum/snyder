---
title: Auxiliary Latitudes
weight: 10
description: Numerical examples for auxiliary latitudes
mathjax: 2
css: numerics.css
date: 2023-02-06
lastmod: 2024-02-24
---
<script src="../js/format.js"> </script>
<script src="../js/aux_lat.js"> </script>

# Numerical Examples for Auxiliary Latitudes
{{< rawHTML >}}
For all examples under this heading, the <select id="ellip" onchange="ell.select(this.options[this.selectedIndex].value)")>
      <option value="0" selected>Clarke 1866</option>
      <option value="1">WGS-84</option>
    </select>
    ellipsoid will be used.

<table>
<tr>
  <td id="ellip_a">$a=6378206.4\,\text{m}$</td>
  <td>a is not needed here</td>
</tr>
<tr>
  <td id="ellip_e2">$e^2=0.00676866$</td>
  <td>or:</td>  
</tr>
<tr>
  <td id="ellip_e">$e=0.0822719$</td>
  <td></td>
</tr>
</table>
{{</rawHTML>}}

Auxiliary latitudes will be calculated for geodetic latitude $\phi =$ <input id="phi_in" value="40" size="3">&deg;<input type="button" value="Set" onclick="ell.set_phi()">

## Conformal latitude
Using closed equation [(3-1)]({{<ref "sect_3#3-1" >}}):
{{<math div="chi_lat">}}
\eqalign{
  \chi =& 2\arctan\{\tan{(45^\circ + 40^\circ/2)}[(1-0.0822719\sin{40^\circ})/(1+0.0822719 \cr
        & \sin{40^\circ})]^{0.0822719/2}\}-90^\circ \cr
        =& 2\arctan\{ 2.1445069 [0.8995456]^{0.0822719/2} \} -90^\circ \cr
        =& 2\arctan(2.1351882) - 90^\circ \cr
        =& 2\times 64.9042961^\circ - 90^\circ \cr
        =& 39.8085922^\circ
}
{{</math>}}   

Using series equation [(3-2)]({{<ref "sect_3#3-2">}}), obtaining $\chi$ first in radians, and omitting terms with $e^8$ for simplicity:
{{<math div="chi_lat1">}}
\eqalign{
    \chi =& 40^\circ\times\pi/180^\circ-(0.0067687 + 5 \times 0.0067687^2/24 + 3 \times 0.0067687^3/32)\times \sin(2\times 40^\circ)+ \cr
          & (5 \times 0.0067687^2/48 + 7 \times 0.0067687^3/80)\times \sin(4\times 40^\circ)- \cr
          & (13 \times 0.0067687^3/480) \times \sin(6\times 40^\circ) \cr
          =& 0.6981317 - (0.0033891)\times 0.9848078 \cr
          & (0.0000048)\times 0.3420201 - (0.0000000)\times (-0.8660254) \cr
          =& 0.6947910\;\textrm{radian} = 39.8085923^\circ
}
{{</math>}}

----

For inverse calculations, using closed equation [(3-4)]({{<ref "sect_3#3-4">}}) with iteration and given  
$\chi$=<input id="chi_in" value="39.8085923" size="9">&deg; <input type="button" value="Set" onclick="ell.set_inv_chi()">, find $\phi$:

First trial:
{{<math div="inv_chi1">}}
\eqalign{
\phi =& 2\arctan\{\tan (45^\circ+ 39.8085923^\circ/2) [(1+0.0822719\sin 39.8085923^\circ)/ \cr
      & (1-0.0822719\sin 39.8085923^\circ)]^{0.0822719/2} \} - 90^\circ \cr
      =& 2\arctan\{2.1351882 [1.1112023]^{0.0411359} \} - 90^\circ \cr
      =& 129.9992367^\circ - 90^\circ \cr
      =& 39.9992367^\circ
}
{{</math>}}

Second trial:
{{<math div="inv_chi2">}}
\eqalign{
\phi =& 2\arctan\{ \tan (45^\circ+ 39.8085923^\circ/2) [(1+0.0822719\sin{39.9992367^\circ}/ \cr
        & (1-0.0822719\sin{39.9992367^\circ})]^{0.0411359}\}-90^\circ \cr
      =& 2\arctan(129.9999971^\circ)-90^\circ = 39.9999971^\circ
}
{{</math>}}

The third trial gives <span id="inv_chi3">$ 40.0000001^\circ $</span>also given by the fourth trial.

----
Using series equation [(3-5)]({{<ref "sect_3#3-5">}}):
{{<math div="inv_chi_ser">}}
\eqalign{
\phi =& 39.8085923^\circ\times \pi/180^\circ \cr
      & +(0.0822719^2/2 + 5\times 0.0822719^4/24 + 0.0822719^6/12)\sin(2\times 39.8085923^\circ) \cr
      &+ (7\times 0.0822719^4/48 + 29\times0.0822719^6/240)\sin(4\times 39.8085923^\circ) \cr
      &+ (7\times 0.0822719^6/120) \sin(6\times39.8085923^\circ) \cr
     =& 0.6947910 + (0.0033939)\times 0.9836256 \cr
      &+ (0.0000067)\times 0.3545461 \cr
      &+ (0.0000000)\times (-0.8558300) \cr
     =& 0.6981317\;\text{radian} = 40.0000001^\circ
}
{{</math>}}

## Isometric latitude
Using equation [(3-7)]({{<ref "sect_3#3-7">}}):
{{<math div="psi">}}
\eqalign{
\psi =& \ln\{\tan(45^\circ+40^\circ/2)[ (1-0.0822719\sin(40^\circ)/(1+0.0822719\sin(40^\circ)]^{0.0822719/2} \} \cr
      =& \ln2.1351882 \cr
      =& 0.7585548 
}
{{</math>}}

Using equation [(3-8)]({{<ref "sect_3#3-8">}}8) with the value of $\chi$ resulting from the above examples:
{{<math div="psi1">}}
\eqalign{
\psi =& \ln\tan(45^\circ + 39.8085923^\circ/2) \cr
     =& \ln(2.1351882) \cr
     =& 0.7585548 
}
{{</math>}}

---
For inverse calculations, using equation [(3-9)]({{<ref "sect_3#3-9">}}9) with  
$\psi$=<input id="psi_in" value="0.7585548" size="8"> <input type="button" value="Set" onclick="ell.set_inv_psi()">:
{{<math div="inv_psi">}} \begin{align}
  \chi &= 2\arctan\mathrm{e}^{0.7585548} - 90^\circ \\
       &= 2\arctan(2.1351882) - 90^\circ \\
       &= 39.8085933^\circ
  \end{align}
{{</math>}}

From this value of $\chi, \phi$; may be found from [(3-4)]({{<ref "sect_3#3-4">}}) or [(3-5)]({{<ref "sect_3#3-5">}}) as shown above.

---
Using iterative equation [(3-10)]({{<ref "sect_3#3-10">}}), to find $\phi$:

First trial:
{{<math div="inv_psi1">}}
\eqalign{
\phi &= 2\arctan\mathsf{e}^{0.7585548} - 90^\circ \cr
      &= 39.8085933^\circ \text{, just as above}
}
{{</math>}}

Second trial:
{{<math div="inv_psi2">}}
\eqalign{
\phi =& 2\arctan\mathrm{e}^{0.7585548}[(1+0.0822719\sin 39.8085933^\circ)/(1-0.0822719 \cr
        & \sin 39.8085933^\circ)]^{0.0822719/2} - 90^\circ \cr
      =& 2\arctan (2.1351882\times 1.0043469) - 90^ \circ \\
      =& 39.9992376^\circ
}
{{</math>}}

Third trial:
{{<math div="inv_psi3">}}
\eqalign{
\phi =& 2\arctan\mathrm{e}^{0.7585548}[(1+0.0822719\sin 39.9992376^\circ)/(1-0.0822719 \cr
        & \sin 39.9992376^\circ)]^{0.0822719/2} - 90^\circ \cr
      =& 39.9999981^\circ
}
{{</math>}}

Fourth trial, substituting: <span id="inv_psi3_1">$39.9999981^\circ $</span> in place of <span id="inv_psi2_1">$39.9992376^\circ $</span>
{{<math div="inv_psi4">}}
  \phi=40.0000011^\circ
{{</math>}}

## Authalic latitude
Using equations [(3-11)]({{<ref "sect_3#3-11">}}) and [(3-12)]({{<ref "sect_3#3-12">}}):
{{<math div="q">}}
\eqalign{
q =& (1-0.0067687)\{ \sin40^\circ/(1-0.0067687\sin^240^\circ)- \cr
    & [1/(2\times0.0822719)]\ln[(1-0.0822719\sin40^\circ)/(1+0.0822719\sin40^\circ)]\} \cr
  =& 0.9932313\;(0.6445903 - 6.0774092\ln 0.8995456) \cr
  =& 1.2792602
}
{{</math>}}
{{<math div="qp">}}
\eqalign{
\beta =& \arcsin(1.2792602/1.9954814) \cr
        =& \arcsin(0.6410785) \cr
        =& 39.8722878^\circ
}
{{</math>}}
{{<math div="beta">}}
\eqalign{
\beta =& \arcsin(1.2792602/1.9954814) \cr
        =& \arcsin(0.6410785) \cr
        =& 39.8722878^\circ
}
{{</math>}}

---
Determining $\beta$ from series equation [(3-14)]({{<ref "sect_3#3-14">}}) involves the same pattern as the example for equation (3-5) given above.

---
For inverse calculations, using equation [(3-17)]({{<ref "sect_3#3-17">}}) with iterative equation [(3-16)]({{<ref "sect_3#3-16">}}), given  
$\beta$=<input id="beta_in" value="39.8722878" size="9">&deg;, <input type="button" value="Set" onclick="ell.set_inv_beta()">
  
and <span id="qp_value">$q_p = 1.9954814$</span> as determined above:
{{<math div="inv_beta0">}}\begin{align}
  q &= 1.9954814\sin39.8722878^\circ \\
    &= 1.2792603
  \end{align}
{{</math>}}

First trial:<sup>[*1]({{<relref "notes#aux_lat1">}})</sup><a name="noteref1"></a>
{{<math div="inv_beta1">}}
\eqalign{
\phi &= \arcsin(1.2792602/2) \cr
      &= 39.7642444^\circ
}
{{</math>}}

Second trial:
{{<math div="inv_beta2">}}
\eqalign{
\phi =& 39.7642444^\circ + (180^\circ/\pi)\{[(1-0.0067687\sin^2 39.7642444^\circ)^2/(2\cos 39.7642444^\circ)] \cr
        & [1.2792602/(1-0.0067687) - \sin 39.7642444^\circ/ (1-0.0067687\sin^2 39.7642444^\circ) \cr
        &+[1/(2\times0.0822719)]\ln[(1-0.0822719\sin39.7642444^\circ) \cr
        &/(1+0.0822719\sin39.7642444^\circ))]]\} \cr
      =& 39.9996022^\circ

}
{{</math>}}

Third trial, substituting <span id="inv_beta3a">$39.9996022^\circ$</span> in place of <span id="inv_beta3b">$39.7642444^\circ$</span>
{{<math div="inv_beta3">}}
  \phi=40.0000000^\circ
{{</math>}}

---
Finding &phi; from &beta; by series equation [(3-18)]({{<ref "sect_3#3-18">}}) involves the same pattern as the example for equation [(3-5)]({{<ref "sect_3#3-5">}}) given above.

## Rectifying latitude
Using equations [(3-20)]({{<ref "sect_3#3-20">}}) and [(3-21)]({{<ref "sect_3#3-21">}})
{{<math div="M">}}
\eqalign{
M =&a[(1-0.0067687/4-3\times 0.0067687^2/64 - 5\times 0.0067687^3/256)\times 40^\circ\times\pi/180^\circ \cr
   &-(3\times 0.0067687/8+3\times 0.0067687^2/32 +45\times0.0067687^3/1024)\sin(2\times40^\circ) \cr
   &+(15\times 0.0067687^2/256 +45\times 0.0067687^3/1024)\sin(4\times 40^\circ) \cr
   &-(35\times 0.0067687^3/3072)\sin(6\times40^\circ)] \cr
  =&a[0.9983057\times 0.6981317 - 0.0025426\times\sin 80^\circ] + 0.0000027\sin 160^\circ \cr
   &-0.0000000\times \sin240^\circ \cr
  =& 0.6944458a
}
{{</math>}}
{{<math div="Mp">}}
  M_p = 1.5681349a, \text{using \( 90^\circ \) in place of \( 40^\circ \) in the above example.}
{{</math>}}
{{<math div="mu">}}
  \mu = 90^\circ\times 0.6944458a/1.5681349a = 39.8563451^\circ
{{</math>}}

---
Calculation of $\mu$ from series [(3-23)]({{<ref "sect_3#3-23">}}), and the inverse $\phi$ from [(3-26)]({{<ref "sect_3#3-26">}}), is similar to the example for equation [(3-5)]({{<ref "sect_3#3-5">}}) except that $e_1$ is used rather than $e$. 

From equation [(3-24)]({{<ref "sect_3#3-24">}}),
{{<math div="e1">}}
\eqalign{
e_1 &= [1-(1-0.0067687)^{1/2}]/[1+(1-0.0067687)^{1/2}] \cr
    &= 0.001697916
}
{{</math>}}

## Geocentric latitude
Using equation [(3-28)]({{<ref "sect_3#3-28">}}),
{{<math div="phig">}}
\eqalign{
\phi_g &= \arctan[(1-0.0067687)\tan 40^\circ] \cr
      &= 39.8085032^\circ
}
{{</math>}}

## Reduced latitude
Using equation [(3-31)]({{<ref "sect_3#3-31">}}),
{{<math div="eta">}}
\eqalign{
\eta &= \arctan[(1-0.0067687)^{1/2}\tan 40^\circ] \cr
      &= 39.9042229^\circ
}
{{</math>}}
  