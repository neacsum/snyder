---
title: 10. Cylindrical Equal-Area projection
weight: 40
description: Cylindrical Equal-Area projection
mathjax: 3
date: 2022-08-24
lastmod: 2024-03-10
---
# 10. CYLINDRICAL EQUAL-AREA PROJECTION
## SUMMARY
- Cylindrical.
- Equal-area.
- Meridians on normal aspect are equally spaced straight lines.
- Parallels on normal aspect are unequally spaced straight lines, closest near the poles, cutting meridians at right angles.
- On transverse aspect, central meridian, each meridian 90&deg; from central meridian, and Equator are straight lines. Other meridians and parallels are complex curves.
- On oblique aspect, two meridians 180&deg; apart are straight lines. Other meridians and parallels are complex curves.
- On normal aspect, scale is true along Equator, or along two parallels equidistant from the Equator.
- On transverse aspect, scale is true along central meridian, or along two straight lines equidistant from and parallel to central meridian. (These lines are only approximately straight for the ellipsoid.)
- On oblique aspect, scale is true along chosen central line, an oblique great circle, or along two straight lines parallel to central line. Scale on ellipsoidal form is similar, but varies slightly from this pattern.
- An orthographic projection of sphere onto cylinder.
- Substantial shape and scale distortion near points 90&deg; from central line.
- Normal and transverse aspects presented by Lambert in 1772.

## HISTORY AND USAGE
The fourth of the seven projections proposed by Johann Heinrich Lambert (1772, p. 71-72) and occasionally given his name, is the Cylindrical Equal-Area (fig. 14). In the same work (p. 72-73), he described its transverse aspect (fig. 16), which has hardly been used. Even the normal aspect has seldom been used except as a textbook example of the most easily constructed equal-area projection, but several modifications of the normal aspect have been published.

These modifications consist of compressing the projection from east to west and expanding it in the same ratio from north to south, thereby moving the parallel of no distortion from the Equator to other latitudes. The earliest such modification is from Scotland: James Gall's Orthographic Cylindrical, not the same as his preferred Stereographic Cylindrical, both of which were originated in 1855, has standard parallels of 45&deg; N. and S. (Gall, 1885). Walther Behrmann (1910) of Germany chose 30°, based on certain overall distortion criteria (fig. 15). Very similar later projections were offered by Trystan Edwards of England in 1953 and Arno Peters of Germany in 1967; they were presented as revolutionary and original concepts, rather than as modifications of these prior projections with standard parallels at about 37&deg; and 45&deg;-47&deg;, respectively (Maling, 1966, 1974).

The oblique Cylindrical Equal-Area projection has been proposed with particular parameters for maps of Eurasia and Africa (Thornthwaite, 1927) and of air routes of the British Commonwealth (Poole, 1934). Different parameters are used for fig. 17. The ellipsoidal form of the oblique and transverse aspects has apparently been developed only recently (Snyder, 1985b).

## FEATURES
Like other regular cylindricals, the graticule of the normal Cylindrical Equal-Area projection consists of straight equally spaced vertical meridians perpendicular to straight unequally spaced horizontal parallels. To achieve equality of area, the parallels are spaced from the Equator in proportion to the sine of the latitude. This is the simplest equal-area projection.

The normal Cylindrical Equal-Area for the sphere is a true perspective projection onto a cylinder tangent at the Equator: The meridians are projected from the center of the sphere, and the parallels are projected with lines parallel to the equatorial plane, or orthographically from infinity. Modifications such as Behrmann's, described above, are perspective projections onto a secant cylinder. For oblique and transverse aspects, the projection may be perspectively cast on a cylinder tangent or secant at an oblique angle, or centered on a meridian.

There is no distortion of area anywhere on the projections, and no distortion of scale and shape at the standard parallels of the normal aspect, or at the standard lines of the oblique or transverse aspects. There is extreme shape and scale distortion 90&deg; from the central line, or at the poles on the normal aspect. These are the points which have infinite area and linear scale on the various aspects of the Mercator projection. This distortion, even on the modifications described above, is so great that there has been little use of any of the forms for world maps by professional cartographers, and many of them have strongly criticized the intensive promotion in the noncartographic community which has accompanied the presentation of one of the recent modifications.

The meridians and parallels of the transverse and oblique aspects which are straight or curved on the Mercator projection are straight or curved, respectively, on the Cylindrical Equal-Area, except that the curves are differently shaped.

In spite of the shape distortion in some portions of a world map, the projection is well suited for equal-area mapping of regions which are predominantly north-south in extent, or which have an oblique central line, or which lie near the Equator. This is true in the same sense that for mid-latitude regions which extend predominantly east-west, the Albers Equal-Area Conic projection is recommended for equal-area mapping. Actually, the normal Cylindrical Equal-Area is the limiting form of the Albers when the Equator or two parallels symmetrical about the Equator are made standard. If such regions to be mapped are smaller than the United States, the ellipsoidal form should be considered.
{{<figure src="../figure14.png" link="../figure14.png" caption="__FIGURE 14__.&mdash; Lambert Cylindrical Equal-Area projection. Standard parallel is Equator. Seldom used in this form but suitable for equal-area strips near the Equator.">}}
{{<figure src="../figure15.png" link="../figure15.png" caption="__FIGURE 15__.&mdash; Bhermann Cylindrical Equal-Area projection, with standard parallels at latitude 30° N and S. Same as figure 14, but compressed east to west and expanded north to south">}}
{{<figure src="../figure16.png" link="../figure16.png" caption="__FIGURE 16__.&mdash; Transverse Cylindrical Equal-Area Projection. The central meridian long. 90°W as well as long. 90°E, coincides with the Equator of the base projection.">}}
{{<figure src="../figure17.png" link="../figure17.png" caption="__FIGURE 17__.&mdash; Oblique Cylindrical Equal-Area projection, with central oblique great circle inclined 60° to the Earth's Equator. No distortion along this central line.">}}
## FORMULAS FOR THE SPHERE
The geometric construction of the Cylindrical Equal-Area projection has been described above. The forward formulas for the normal aspect are as follows, given $R, \phi_s,\lambda_0$, \phi and $\lambda$ to find $x$ and $y$ (see [numerical examples]({{<ref "cylea#sphere">}})):
{{<math tag="10-1">}} x = R(\lambda-\lambda_0)\cos\phi_s  {{</math>}}
{{<math tag="10-2">}} y = R\sin\phi/\cos\phi_s {{</math>}}
{{<math tag="10-2a">}} h = \cos\phi/\cos\phi_s{{</math>}}
{{<math tag="10-2b">}} k = 1/h {{</math>}}
where $\phi_s\$, is the standard parallel (N. or S.), or the Equator in Lambert's original form. The X axis lies along the Equator, $x$ increasing easterly. The Y axis lies
along the central meridian $\lambda_0$, $y$ increasing northerly, and the origin is $(\phi = 0°, \lambda_0)$. If $(\lambda - \lambda_0)$ lies outside the range $\pm180°$, 360° should be added or subtracted so that it will fall inside the range.
For the transverse aspect, given $h_0$, instead of $\phi_s$,
{{<math tag="10-3">}} x=(R/h_0)\cos\phi\sin(\lambda-\lambda_0) {{</math>}}
{{<math tag="8-3">}} y = Rh_0\{\arctan[\tan\phi/\cos(\lambda-\lambda_0)]-\phi_0\} {{</math>}}
where $h_0$, is the scale factor (normally 1.0) along the central meridian $\lambda_0$. The origin of the coordinates is at $(\phi_0, \lambda_0)$. The Y axis lies along the central meridian $\lambda_0$, $y$ increasing northerly, and the X axis is perpendicular, through $\phi_0$ at $\lambda_0$, $x$ increasing easterly.

For the oblique aspect, the alternatives used for the Oblique Mercator projection are used here, with modification only in the formulas for the $y$ coordinates:
1. Given two points to lie upon the central line, with latitudes and longitudes $(\phi_1, \lambda_1)$ and $(\phi_2, \lambda_2)$, and longitude increasing easterly and relative to Greenwich, the pole of the oblique transformation at $(\phi_p, \lambda_p)$ may be calculated as follows:
{{<math tag="9-1">}}\begin{align}
    \lambda_p = &\arctan[(\cos\phi_1\sin\phi_2\cos\lambda_1 - \sin\phi_1\cos\phi_2\cos\lambda_2)/ \\
                &(\sin\phi_1\cos\phi_2\sin\lambda_2 - \cos\phi_1\sin\phi_2\sin\lambda_1)] \end{align}
{{</math>}}
{{<math tag="9-2">}}\phi_p = \arctan[-\cos(\lambda_p-\lambda_1)/\tan\phi_1]{{</math>}}
The Fortran ATAN2 function or its equivalent should be used with equation (9-1), but not with (9-2). The other pole is located at $(-\phi_p,\lambda_p\pm\pi)$. Using the positive (northern) value of $\phi_p$, the following formulas give the rectangular coordinates for point $(\phi,\lambda)$, with $h_0$, the scale factor along the central line:
{{<math tag="10-4">}} x= Rh_0\arctan\{[\tan\phi\cos\phi_p+\sin\phi_p\sin(\lambda-\lambda_0)]/\cos(\lambda-\lambda_0)\} {{</math>}}
{{<math tag="10-5">}} y= (R/h_0)[\sin\phi_p\sin\phi-\cos\phi_p\cos\phi\sin(\lambda-\lambda_0)] {{</math>}}
With these formulas for the oblique aspect, the origin of rectangular coordinates lies at
{{<math tag="9-6a">}}
  \eqalign{
    \phi_0 &= 0 \cr
    \lambda_0 &=\phi_p + \pi/2
  }
{{</math>}}
and the X axis lies along the central line, $x$ increasing easterly. The transformed poles are straight lines at $y = R$ and are as long as the central line.

1. Given a central point $(\phi_z,\lambda_z)$ with longitude increasing easterly and relative to Greenwich, and azimuth $\gamma$ east of north of the central line through $(\phi_z,\lambda_z)$, the pole of the oblique transformation at $(\phi_p,\lambda_p)$ may be calculated as follows:
{{<math tag="9-7">}} \phi_p = \arcsin(\cos\phi_z\sin\gamma){{</math>}}
{{<math tag="9-8">}} \lambda_p = \arctan[-\cos\beta(-\sin\phi_z\sin\gamma)]+ \lambda_z {{</math>}}
These values of $\phi_p$ and $\lambda_p$, may then be used in equations (10-4) and (10-5) as before.

_For the inverse formulas_, first for the normal aspect, given $R, \phi_s, \lambda_0, x,$ and $y$,
to find $\phi$ and $\lambda$:
{{<math tag="10-6">}} \phi = \arcsin[(y/R)\cos\phi_s] {{</math>}}
{{<math tag="10-7">}} \lambda = x/(R\cos\phi_s) +\lambda_0 {{</math>}}
For the transverse aspect, given $h_0$, instead of $\phi_s$,
{{<math tag="10-8">}} \phi = \arcsin\{[ 1-(h_0x/R)^2]^{1/2}\sin D\}  {{</math>}}
{{<math tag="10-9">}} \lambda = \lambda_0 + \arctan\{(h_0x/R)/[[1-(h_0x/R)^2]^{1/2}\cos D]\}  {{</math>}}
where
{{<math tag="10-10">}} D = y/(Rh_0)+\phi_0, \text{using radians} {{</math>}}

For the oblique aspect, equations [(9-1)]({{<relref "sect_9#9-1">}}) and [(9-2)]({{<relref "sect_9#9-2">}}) or [(9-7)]({{<relref "sect_9#9-7">}}) and [(9-8)]({{<relref "sect_9#9-8">}}) must first be used to establish the pole of the oblique transformation, if it is not known already. Then
{{<math tag="10-11">}} \phi = \arcsin \{(yh_0R)\sin\phi_p + [1-(yh_0/R)^2]^{1/2}\cos\phi_p\sin[x/(Rh_0)]\} {{</math>}}
{{<math tag="10-12">}} \begin{align}
    \lambda = &\lambda_0 + \arctan\{[[1-(yh_0/R)^2]^{1/2}\sin\phi_p\sin[x/(Rh_0)] \cr
              &-(yh_0/R)\cos\phi_p]/[[1-(yh_0R)^2]^{1/2}\cos[x/(Rh_0)]] \} \end{align}
{{</math>}}
Note that the above equations for the oblique aspect may be used for the transverse aspect, letting $\phi_p = 0&deg;$, except that the axes are rotated 90&deg;.

## FORMULAS FOR THE ELLIPSOID
In the following formulas, the ellipsoid is transformed onto the authalic sphere, but the scale along the desired central line is made constant by variably compressing the scale along this central line to match that along the same path on the ellipsoid. To retain correct area, the distances perpendicular to the central line are increased by the same ratio. For the oblique aspect, the central line is not a geodesic, but is instead an oblique great circle on the authalic sphere.

For the forward formulas using the normal aspect, given $a, e, \phi_s, \lambda_0, \phi$, and $\lambda$, to find $x$ and $y$ (see [numerical examples]({{<ref "cylea#ellipsoid">}})), the equations are given in the order of computation:
{{<math tag="10-13">}} k_0 = \cos\phi_s/(1-e^2\sin^2\phi_s)^{1/2} {{</math>}}
{{<math tag="3-12">}} q= (1-e^2)\{ \sin{\phi}/(1-e^2\sin^2{\phi})-(1/(2e))\ln[(1-e\sin{\phi})/(1+e\sin{\phi})]\} {{</math>}}
{{<math tag="10-14">}} x = ak_0(\lambda - \lambda_0) {{</math>}}
{{<math tag="10-15">}} y = a q/(2k_0) {{</math>}}

For the transverse aspect, the subsequent formulas for the oblique aspect may be used, but the following are simpler for the transverse alone. Given $a, e, h_0, \lambda_0, \phi_0, \phi,$ and $\lambda$, to find $x$ and $y$, first $q$ is calculated from $\phi$ using equation (3-12) above. Then
{{<math tag="3-11">}} \beta = \arcsin{(q/q_p)} {{</math>}}
where $\beta$ is the authalic latitude corresponding to $\phi$, and $q_p$ is found as $q$ from
equation (3-12) for a $\lambda$ of 90&deg;.
{{<math tag="10-16">}} \beta_c = \arctan[\tan\beta/\cos(\lambda-\lambda_0)] {{</math>}}
{{<math tag="10-17">}} q_c = q_p\sin\beta_c {{</math>}}
{{<math tag="3-16">}} \phi_c = \phi_c + \frac{(1-e^2\sin^2{\phi_c})^2}{2\cos{\phi_c}}\left[ \frac{q_c}{1-e^2} - \frac{\sin{\phi_c}}{1-e^2\sin^2{\phi_c}} + 
        \frac 1{2e} \ln{\left( \frac{1-e\sin{\phi_c}}{1+e\sin{\phi_c}}\right)}\right] {{</math>}}
Equation (3-16) requires iteration by successive substitution, using $\arcsin (q_c/2)$ as the first trial $\phi_c$, on the right side, calculating $\phi_c$, on the left side, substituting this new $\phi_c$, on the right side, etc., until the change in $\phi_c$, is negligible. This does not converge if $\beta_c = \pm 90^{\circ}$, but then $\phi_c = \beta_c$.
{{<math tag="10-18">}} x = a\cos\beta\cos\phi_c\sin(\lambda-\lambda_0)/[h_0\cos\beta_c (1-e^2\sin^2\phi_c)^{1/2}] {{</math>}}
{{<math tag="3-21">}} \begin{align}
    M = a[&(1-e^2/4-3e^4/64-5e^6/256-\dots)\phi_c \\
          -&(3e^2/8+3e^4/32+45e^6/1024+\dots)\sin{2\phi_c} \\
          +&(15e^4/256+45e^6/1024+\dots)\sin{4\phi_c} \\
          -&(35e^6/3072+\dots)\sin{6\phi_c}+\dots] \end{align}
{{</math>}}
{{<math tag="10-19">}} y=h_0(M_c-M_0){{</math>}}
where $h_0$ is the scale factor along the central meridian $\lambda_0$, and $\beta_c$, and $\phi_c$, are authalic and geodetic "footpoint" latitudes, respectively, with the same $y$ value at the central meridian as the point $(\phi,\lambda)$. Constant $M_0$ is the value of $M_c$ calculated from (3-21) with latitude of origin $\phi_0$, in place of $\phi_c$. To avoid iteration, equations (10-17) and (3-16) may be replaced with the following series:
{{<math tag="3-18">}} \begin{align}
    \phi_c = \beta_c &+ (e^2/3+31e^4/180+517e^6/5040+\dots)\sin{2\beta_c} \\
                 &+ (23e^4/360+251e^6/3780+\dots)\sin{4\beta_c} \\
                 &+ (761e^6/45360+\dots)\sin{6\beta_c}+\dots \end{align}
{{</math>}}

For the oblique aspect, the location of the pole $(\phi_p,\lambda_p)$ may be given, or it may be computed as described under the section on formulas for the sphere above. Points $\phi_1, \phi_2, \phi_p$ and $\phi_z$, however, are replaced in equations {{%eqref "9-1"%}}, {{%eqref "9-2"%}}, {{%eqref "9-7"%}} and {{%eqref "9-8"%}} with $\beta_1, \beta_2, \beta_p$ and $\beta_z$ respectively, and $\beta_p$ is finally converted to $\phi_p$, using equations {{%eqref "10-17"%}} and {{%eqref "3-16"%}}, or just {{%eqref "3-18"%}}, and subscripts $p$ instead of $c$.

If the ellipsoid is either the Clarke 1866 or the International, Fourier constants may be taken from table 13.
{{<figure src="../table13.png" link="../table13.png" caption="__TABLE 13__.&mdash; Fourier coefficients for oblique and transverse Cylindrical Equal-Area projection for the ellipsoid">}}
If it is a different ellipsoid, coefficients should be calculated as described after these formulas. They may be converted to the specific coefficients for the pole in use as follows:
{{<math tag="10-20">}} B =b + a_2\cos2\phi_p + a_4\cos4\phi_p + a_6\cos6\phi_p+\dots {{</math>}}
{{<math tag="10-21">}} A_n = b_n +a'_{n2}\cos 2\phi_p + a'_{n4}\cos 4\phi_p+a'_{n6}\cos 6\phi_p+\dots  {{</math>}}
where
{{<math>}} n=2\text{ and }4 {{</math>}}
From $\phi$, $\beta$ is determined using equations (3-12) and (3-11) above, and, if $\beta_p$ was not obtained earlier, it is calculated by substituting $\phi_p$ for $\phi$ in (3-12) and obtaining $\beta_p$ from (3- 11). Then,
{{<math tag="10-22">}} \lambda' = \arctan\{[\cos\beta_p\sin\beta-\sin\beta_p\cos\beta\cos(\lambda-\lambda_p)]/[\cos\beta\sin(\lambda-\lambda_p)]\} {{</math>}}
{{<math tag="10-23">}} x = ah_0[B\lambda'+A_2\sin2\lambda'+A_4\sin4\lambda'+A_6\sin6\lambda'+\dots] {{</math>}}
{{<math tag="10-24">}} F = B + 2A_2\cos2\lambda' + 4A_4\cos4\lambda'+6A_6\cos6\lambda'+\dots {{</math>}}
{{<math tag="10-25">}} y = (aq_p/2)[\sin\beta_p\sin\beta+\cos\beta_p\cos\beta\cos(\lambda-\lambda_p)]/(h_0F) {{</math>}}
The axes are as stated for the corresponding aspect of the spherical form. For more efficient computation of series (10-23) and (10-24) see p. 19.

For the _inverse formulas for the ellipsoid_, the normal aspect will be discussed first. Given $a, e, \phi_s,\lambda_0, x$, and $y$, to find $\phi$ and $\lambda$ (see p. 284 for numerical examples), $k_0$ is determined from {{%eqref "10-13"%}}, and
{{<math tag="10-26">}} \beta = \arcsin[2yk_0/(aq_p)] {{</math>}}
where $q_p$ is found from {{%eqref "3-12"%}}, using 90&deg; for $\phi$, then $\phi$ is found from $\beta$ using {{%eqref "10-17"%}} and {{%eqref "3-16"%}}, or just {{%eqref "3-18"%}}, without subscripts, these equations being listed under the forward equations above.
{{<math tag="10-27">}} \lambda = \lambda_0 + x/(a\:k_0) {{</math>}}

For the transverse aspect, given $a, e, h_0, \lambda_0, x$, and $y$, to find $\phi$ and $\lambda$:
{{<math tag="10-28">}} M_c = M_0 + y/h_0 {{</math>}}
where $M_0$ is found from $\phi_0$ using {{%eqref "3-21"%}} and changing subscripts $c$ to $0$.
{{<math tag="7-19">}}\mu_c=M_c/[a(1-e^2/4-3e^4/64-5e^6/256-\dots)] {{</math>}}
{{<math tag="3-24">}} e_1 = [1-(1-e^2)^{1/2}]/[1+(1-e^2)^{1/2}] {{</math>}}
{{<math tag="3-26">}} \begin{align}
    \phi_c = \mu_c &+ (3e_1/2-27e_1^3/32+\dots)\sin{2\mu_c} \\
               & +(21e_1^2/16-55e_1^4/32+\dots)\sin{4\mu_c} \\
               & +(151e_1^3/96-\dots)\sin{6\mu_c} + (1097e_1^4/512-\dots)\sin{8\mu_c}+\dots \end{align}
{{</math>}}
Authalic latitude $\beta_c$, is determined for $\phi_c$, using equations {{%eqref "3-12"%}} and {{%eqref "3-11"%}}, adding subscripts $c$ to both $\beta$ and $\phi$.
{{<math tag="10-29">}} \beta' = -\arcsin[h_0\,x\cos\beta_c(1-e^2\sin^2\phi_c)^{1/2}/(a\cos\phi_c)]  {{</math>}}
{{<math tag="10-30">}} \beta = \arcsin(\cos\beta'\sin\beta_c)  {{</math>}}
{{<math tag="10-31">}} \lambda = \lambda_0 - \arctan(\tan\beta'/\cos\beta_c)  {{</math>}}
Latitude $\phi$ is found from $\beta$ using {{%eqref "10-17"%}} and {{%eqref "3-16"%}}, or just {{%eqref "3-18"%}}, all without subscripts c.

For the oblique aspect, given $a, e, h_0, \phi_p, \lambda_p, x$, and $y$, to find $\phi$ and $\lambda$, Fourier coefficients are determined as described above for the forward oblique ellipsoidal formulas, while the pole location $(\phi_p,\lambda_p)$, may be determined if not provided, as described for the forward oblique spherical formulas, and $q_p$ is found from {{%eqref "3-12"%}} using 90&deg; for $\phi$. From $x, \lambda'$ is determined from an iterative inverse of {{%eqref "10-23"%}}:
{{<math tag="10-32">}} \lambda' = [x/(a\,h_0)-A_2\sin{2\lambda'} - A_4\sin{4\lambda'} - A_6\sin{6\lambda'} -\dots]/B {{</math>}}
Using a first trial $\lambda'=x/(a h_0 B), \lambda'$ may be found by successive substitution of trial values into the right side of this equation and solving for a new $\lambda'$ until the change in $\lambda'$ is negligible.

Equation {{%eqref "10-24"%}} above is used to find $F$ from $\lambda'$. Then,
{{<math tag="10-33">}} \beta' = \arcsin[2F\,h_0\,y/(a\,q_p)]  {{</math>}}
{{<math tag="10-34">}} \beta = \arcsin(\sin\beta_p\sin\beta'+\cos\beta_p\cos\beta'\sin\lambda')  {{</math>}}
{{<math tag="10-35">}} \lambda = \lambda_p + \arctan[\cos\beta'\cos\lambda'/(\cos\beta_p\sin\beta'-\sin\beta_p\cos\beta'\sin\lambda')]  {{</math>}}
As before, $\phi$ is found from $\beta$ using {{%eqref "10-17"%}} and {{%eqref "3-16"%}}, or just {{%eqref "3-18"%}}, all without subscripts $c$.

For the determination of Fourier coefficients, if they are not already provided, equation {{%eqref "10-23"%}} above is equivalent to the following equation which requires numerical integration:
{{<math tag="10-36">}} x/(a\,h_0) = \int_0^{\lambda'} F\mathrm{d}\lambda' {{</math>}}
where
{{<math tag="10-37">}} \begin{align}
    F=&\{\sin^2\beta_p\cos^2\phi_c/[(1-e^2\sin^2\phi_c)\cos^4\beta_c] \\
      &+(1-e^2\sin^2\phi_c)\,q_p^2\cos^2\beta_p\cos^2\lambda'/(4\cos^2\phi_c)\}^{1/2} \end{align}
{{</math>}}
In order to compute coefficients $B$ and $A_n$ in {{%eqref "10-23"%}},
{{<math tag="10-38">}}  B=(1/\pi)\int_0^{\pi/2} F \mathrm{d}\lambda' {{</math>}}
{{<math tag="10-39">}}  A_n = [4/(\pi n)]\int_0^{\pi/2} F \cos{n\lambda'}\mathrm{d}\lambda' {{</math>}}
where $n$ is 2, 4, and 6, successively. To compute coefficients which apply regardless of the value of $\phi_p$, equations (10-38) and (10-39) may be rewritten as equations {{%eqref "10-20"%}} and {{%eqref "10-21"%}}, where
{{<math>}} \begin{align}
    b &= (2/\pi) \int_0^{\pi/2} B \mathrm{d}\phi_p \tag{10-40} \\
    a_n &= (4/\pi) \int_0^{\pi/2} B\cos{n\phi_p} \mathrm{d}\phi_p \tag{10-41} \\
    b_n &= (2/\pi)\int_0^{\pi/2} A_n \mathrm{d}\phi_p \tag{10-42} \\
    a'_{mn} &= (4/\pi) \int_0^{\pi/2} A_n \cos{m\phi_p}\mathrm{d}\phi_p \tag{10-42}
\end{align} {{</math>}}
and $n$ has the values 2 and 4, while $m =$ 2, 4, and 6. To determine the coefficients from [(10-40)](#10-40) through [(10-43)](#10-43), double numerical integration is involved, but this involves a relatively modest computer program: Choosing an interval of 9&deg; (sufficient for 10-place accuracy) in both $\phi_p$ and $\lambda'$, and starting with both $\phi_p$ and $\lambda'$ at 0°, $F$ is calculated from {{%eqref "10-37"%}} as described below for each 9&deg; of $\lambda'$ from 0° to 90° and the various values of $F$ summed in accordance with Simpson's rule as applied to equations [(10-38)](#10-38) and [(10-39)](#10-39). Thus $B, A_2, A_4$ and $A_6$ are computed for $\phi_p = 0^\circ$. Similarly, the constants B and A, are computed for each 9&deg; of $\phi_p$ to and including 90°, and the various values are summed by applying Simpson's rule to [(10-40)](#10-40) through [(10-43)](#10-43), to obtain $b, a_2,$ etc.

To compute $F$ from equation [(10-37)](#10-37) for a given $\lambda'$, first $\beta_p$ is found from $\phi_p$ using {{%eqref "3-12"%}} and {{%eqref "3-11"%}}, subscripting $\phi$ and $\lambda$ with p. Then,
{{<math tag="10-44">}} \beta_c = \arcsin(\cos\beta_p\sin\lambda') {{</math>}}
Now $\phi_c$, is found from $\beta_c$, using {{%eqref "10-17"%}} and {{%eqref "3-16"%}} or just {{%eqref "3-18"%}}. All variables for [(10-37)](#10-37) are now known, except that it is indeterminate if $\phi_p = 0^\circ$ at the same time that $\lambda' = 90^\circ$. In that case, $F = (q_p/2)^{1/2}$.
