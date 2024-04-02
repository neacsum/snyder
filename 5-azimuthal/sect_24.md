---
title: 24. Lambert Azimuthal Equal-Area projection
weight: 50
description: Lambert Azimuthal Equal-Area map projection
mathjax: 3
date: 2022-11-27
lastmod: 2024-03-10
---
# 24. LAMBERT AZIMUTHAL EQUAL-AREA PROJECTION
## SUMMARY
- Azimuthal.
- Equal-Area.
- All meridians in the polar aspect, the central meridian in other aspects, and the Equator in the equatorial aspect are straight lines.
- The outer meridian of a hemisphere in the equatorial aspect (for the sphere) and the parallels in the polar aspect (sphere or ellipsoid) are circles.
- All other meridians and parallels are complex curves.
- Not a perspective projection.
- Scale decreases radially as the distance increases from the center, the only point without distortion.
- Scale increases in the direction perpendicular to radii as the distance increases from the center.
- Directions from the center are true for the sphere and the polar ellipsoidal forms.
- Point opposite the center is shown as a circle surrounding the map (for the sphere).
- Used for maps of continents and hemispheres.
- Presented by Lambert in 1772.

## HISTORY
The last major projection presented by Johann Heinrich Lambert in his 1772 _Beiträge_ was his azimuthal equal-area projection (Lambert, 1772, p. 75-78). His name is usually applied to the projection in modem references, but it is occasionally called merely the Azimuthal (or Zenithal) Equal-Area projection. Not only is it equal-area, with, of course, the azimuthal property showing true directions from the center of the projection, but its scale at a given distance from the center varies less from the scale at the center than the scale of any of the other major azimuthals (see table 21).

Lambert discussed the polar and equatorial aspects of the Azimuthal Equal-Area projection, but the oblique aspect is just as popular now. The polar aspect was apparently independently derived by Lorgna in Italy in 1789, and the latter was called the originator in a publication a century later (USC&GS, 1882, p. 290). G. A. Ginzburg proposed two modifications of the general Lambert Azimuthal projection in 1949 to reduce the angular distortion at the expense of creating a slight distortion in area (Maling, 1960, p. 206). A common modification was devised by Ernst Hammer in 1892 and is called the Hammer or Hammer-Aitoff projection. It consists of halving the vertical coordinates of the equatorial aspect of one hemisphere and doubling the values of the meridians from center. It retains equality of area, but it is no longer azimuthal.

## FEATURES
The Lambert Azimuthal Equal-Area projection is not a perspective projection. It may be called a "synthetic" azimuthal in that it was derived for the specific purpose of maintaining equal area. The ellipsoidal form maintains equal area, but it is not quite azimuthal except in the polar aspect, so the name for the general ellipsoidal form is a slight misnomer, although it looks like the spherical azimuthal form and has most of its other characteristics.

The polar aspect (fig. 39A), like that of the Orthographic and Stereographic, has circles for parallels of latitude, all centered about the North or South Pole, and straight equally spaced radii of these circles for meridians. The difference is, once again, in the spacing of the parallels. For the Lambert, the spacing between the parallels gradually decreases with increasing distance from the pole. The opposite pole, not visible on either the Orthographic or Stereographic, may be shown
on the Lambert as a large circle surrounding the map, almost half again as far as the Equator from the center. Normally, the projection is not shown beyond one
hemisphere (or beyond the Equator in the polar aspect).

The equatorial aspect (fig. 39B) has, like the other azimuthals, a straight Equator and straight central meridian, with a circle representing the 90th meridian east and west of the central meridian. Unlike those for the Orthographic and Stereographic, the remaining meridians and parallels are uncommon complex curves. The chief visual distinguishing characteristic is that the spacing of the meridians near the 90th meridian and sf the parallels near the poles is about 0.7 of the spacing at the center of the projection, or moderately less to the eye. The parallels of latitude look considerably like circular arcs, except near the 90th meridians, where they exhibit a noticeable turn toward the nearest pole.

The oblique aspect (fig. 39C) of the Lambert Azimuthal Equal-Area resembles the Orthographic to some extent, until it is seen that crowding is far less pronounced as the distance from the center increases. Aside from the straight central meridian, all meridians and parallels are complex curves, not ellipses.

In both the equatorial and oblique aspects, the point opposite the center may be shown as a circle surrounding the map, corresponding to the opposite pole in the polar aspect. Except for the advantage of showing the entire Earth in an equal-area projection from one point, the distortion is so great beyond the inner hemisphere that for world maps the Earth should be shown as two separate hemispherical maps, the second map centered on the point opposite the center of the first map.
{{<figure src="../figure39.png" link="../figure39.png" caption="__FIGURE 39__.&mdash; Lambert Azimuthal Equal-Area projection. (A) Polar aspect showing one hemisphere; the entire globe may be included in a circle of 1.41 times the diameter of the Equator. (B) Equatorial aspect; frequently used in atlases for maps of the Eastern and Western hemispheres. (C) Oblique aspect; centered on lat. 40° N.">}}

## USAGE
The spherical form in all three aspects of the Lambert Azimuthal Equal-Area projection has appeared in recent commercial atlases for Eastern and Western Hemispheres (replacing the long-used Globular projection) and for maps of oceans and most of the continents and polar regions.

The polar aspect appears in the National Atlas (USGS, 1970, p. 148-149) for maps delineating north and south polar expeditions, at a scale of 1:39,000,000. It is used at a scale of 1:20,000,000 for the Arctic Region as an inset on the 1978 USGS Map of Prospective Hydrocarbon Provinces of the World.

The USGS has prepared six base maps of the Pacific Ocean on the spherical form of the Lambert Azimuthal Equal-Area. Four sections, at 1:10,000,000, have centers at 35° N., 150° E. ; 35° N., 135° W.; 35° S., 135° E.; and 40° S., 100° W. The Pacific-Antarctic region, at a scale of 1:8,300,000, is centered at 20° S. and 165° W., while a Pacific Basin map at 1:17,100,000 is centered at the Equator and 160° W. (The last two maps were originally erroneously labeled with scales that are too small.) The base maps have been used for individual geographic, geologic, tectonic, minerals, and energy maps. The USGS has also cooperated with the National Geographic Society in revising maps of the entire Moon drawn to the spherical form of the equatorial Lambert Azimuthal Equal-Area.

## GEOMETRIC CONSTRUCTION
The polar aspect (for the sphere) may be drawn with a simple geometric construction: In figure 40, if angle AOR is the latitude $\phi$ and P is the pole at the center, PA is the radius of that latitude on the polar map. The oblique and equatorial aspects have no direct geometric construction. They may be prepared indirectly by using other azimuthal projections (Harrison, 1943), but it is now simpler to plot automatically or manually from rectangular coordinates which are generated by a relatively simple computer program. The formulas are given below.
{{<figure src="../figure40.png" link="../figure40.png" caption="__FIGURE 40__.&mdash; Geometric construction of polar Lambert Azimuthal Equal-Area projection.">}}

## FORMULAS FOR THE SPHERE
On the Lambert Azimuthal Equal-Area projection for the sphere, a point at a given angular distance from the center of projection is plotted at a distance from the center proportional to the sine of half that angular distance, and at its true azimuth, or
{{<math tag="24-1">}}\rho = 2\,R\sin(c/2){{</math>}}
{{<math tag="20-2">}}\theta = \pi-Az = 180^\circ-Az{{</math>}}
{{<math tag="24-1a">}}h' = \cos(c/2){{</math>}}
{{<math tag="24-1b">}}k' = \sec(c/2){{</math>}}
where $c$ is the angular distance from the center, $Az$ is the azimuth east of north (see equations [(5-3)]({{<relref "sect_5#5-3">}}) through [(5-4b)]({{<relref "sect_5#5-4b">}})), and $\theta$ is the polar coordinate east of south. The term $k'$ is the scale factor in a direction perpendicular to the radius from the center of the map, not along the parallel, except in the polar aspect. The scale factor $h'$ in the direction of the radius equals $1/k'$. After combining with standard equations, the formulas for rectangular coordinates for the oblique Lambert Azimuthal Equal-Area projection may be written as follows, given $R,\phi_1, \lambda_0, \phi$, and $\lambda$:
{{<math tag="22-4">}}x = R\,k'\cos\phi\sin(\lambda-\lambda_0){{</math>}}
{{<math tag="22-5">}}y = R\,k'[\cos\phi_1\sin\phi-\sin\phi_1\cos\phi\cos(\lambda-\lambda_0)]{{</math>}}
where
{{<math tag="24-2">}}k' = \{2/[1+\sin\phi_1\sin\phi+\cos\phi_1\cos\phi\cos(\lambda-\lambda_0)]\}^{1/2}{{</math>}}
and $(\phi_1, \lambda_0)$ are latitude and longitude of the projection center and origin. The Y axis coincides with the central meridian $\lambda_0$, y increasing northerly. For the point opposite the center, at latitude $-\phi_1$ and longitude $\lambda_0\pm180^\circ$, these formulas give indeterminates. This point, if the map is to cover the entire sphere, is plotted as a circle of radius $2R$.

For the north polar Lambert Azimuthal Equal-Area, with $\phi_1=90^\circ$, since $k'$ is $k$ for the polar aspect, these formulas simplify to the following (see [numerical examples]({{<ref "laea#sphere">}})):
{{<math tag="24-3">}}x = 2R\sin(\pi/4-\phi/2)\sin(\lambda-\lambda_0){{</math>}}
{{<math tag="24-4">}}y = -2R\sin(\pi/4-\phi/2)\cos(\lambda-\lambda_0){{</math>}}
{{<math tag="24-5">}}k = \sec(\pi/4-\phi/2){{</math>}}
{{<math tag="24-6">}}h = 1/k = \cos(\pi/4-\phi/2){{</math>}}
or, using polar coordinates,
{{<math tag="24-7">}}\rho=2R\sin(\pi/4-\phi/2){{</math>}}
{{<math tag="20-9">}} \theta = (\lambda-\lambda_0){{</math>}}
For the south polar aspect, with $\phi_1=-90^\circ$,
{{<math tag="24-8">}}x = 2R\cos(\pi/4-\phi/2)\sin(\lambda-\lambda_0){{</math>}}
{{<math tag="24-9">}}y = 2R\cos(\pi/4-\phi/2)\cos(\lambda-\lambda_0){{</math>}}
{{<math tag="24-10">}}k = 1/\sin(\pi/4-\phi/2){{</math>}}
{{<math tag="24-11">}}h = \sin(\pi/4-\phi/2){{</math>}}
or
{{<math tag="24-12">}}\rho = 2R\cos(\pi/4-\phi/2){{</math>}}
{{<math tag="20-12">}}\theta = \pi - \lambda +\lambda_0{{</math>}}
For the equatorial aspect, letting $\phi_1 = 0$, $x$ is found from {{%eqref "24-4"%}}, but
{{<math tag="24-13">}}y = Rk'\sin\phi{{</math>}}
and
{{<math tag="24-14">}}k' = \{2/[1+\cos\phi\cos(\lambda-\lambda_0)]\}^{1/2}{{</math>}}
The maximum angular deformation $\omega$ for any of these aspects, derived from equations [(4-7)]({{<relref "sect_4#4-7">}}) through [(4-9)]({{<relref "sect_4#4-9">}}), and from the fact that $h' = l/k'$ for equal-area maps:
{{<math tag="24-15">}}sin(\omega/2) = (k'^2-1)/(1+k'^2){{</math>}}
_For the inverse formulas for the sphere_, given $R,\phi_1, \lambda_0, x,$ and $y$:
{{<math tag="20-14">}}\phi = \arcsin{[\cos{c}\sin\phi_1+(y\sin{c}\cos\phi_1/\rho)]} {{</math>}}

If $\rho = 0$, equations (20-14) through (20-17) are indeterminate, but $\phi = \phi_1$, and $\lambda = \lambda_0$. If $\phi_1$ is not $\pm90°$,
{{<math tag="20-15">}} \lambda = \lambda_0 + \arctan{[x\sin{c}/(\rho\cos\phi_1\cos{c}-y\sin\phi_1\sin{c})]} {{</math>}}
If $\phi_1$ is 90°,
{{<math tag="20-16">}} \lambda = \lambda_0+\arctan{[x/(-y)]} {{</math>}}
If $\phi_1$ is -90°,
{{<math tag="20-17">}}\lambda = \lambda_0 + \arctan{(x/y)} {{</math>}}
In equations (20-14) and (20-15),
{{<math tag="20-18">}} \rho = (x^2+y^2)^{1/2} {{</math>}}
{{<math tag="24-16">}} c = 2\arcsin[\rho/(2R)] {{</math>}}
It may again be noted that several of the above forward and inverse equations apply to the other azimuthals.

Table 28 lists rectangular coordinates for the equatorial aspect for a 10° graticule with a sphere of radius $R = 1.0$.
{{<figure src="../table28.png" link="../table28.png">}}
{{<figure src="../table28-1.png" link="../table28-1.png" caption="__TABLE 28__.&mdash; Lambert Azimuthal Equal-Area projection: Rectangular coordinates for equatorial aspect (sphere)">}}

## FORMULAS FOR THE ELLIPSOID
As noted above, the ellipsoidal oblique aspect of the Lambert Azimuthal Equal-Area projection is slightly nonazimuthal in order to preserve equality of area. To date, the USGS has not used the ellipsoidal form in any aspect. The formulas are analogous to the spherical equations, but involve replacing the geodetic latitude $\phi$ with authalic latitude $\beta$ (see equation [(3-11)]({{<relref "sect_3#3-11">}})). In order to achieve correct scale in all directions at the center of projection, that is, to make the center a "standard point," a slight adjustment using $D$ is also necessary. The general forward formulas for the oblique aspect are as follows, given $a, e, \phi_1, \lambda_0, \phi,$ and $\lambda$ (see [numerical examples]({{<ref "laea#ellipsoid">}})):

{{<math tag="24-17">}}x = B\,D\cos\beta\sin(\lambda-\lambda_0){{</math>}}
{{<math tag="24-18">}}y = (B/D)[\cos\beta_1\sin\beta-\sin\beta_1\cos\beta\cos(\lambda-\lambda_0)]{{</math>}}
where
{{<math tag="24-19">}}B = R_q\{2/[1+\sin\beta_1\sin\beta+\cos\beta_1\cos\beta\cos(\lambda-\lambda_0)]\}^{1/2}{{</math>}}
{{<math tag="24-20">}}D = a\,m_1/(R_q\cos\beta_1){{</math>}}
{{<math tag="3-13">}} R_q = a(q_p/2)^{1/2} {{</math>}}
{{<math tag="3-11">}} \beta = \arcsin{(q/q_p)} {{</math>}}
{{<math tag="3-12">}} q= (1-e^2)\{ \sin{\phi}/(1-e^2\sin^2{\phi})-(1/(2e))\ln[(1-e\sin{\phi})/(1+e\sin{\phi})]\} {{</math>}}
{{<math tag="14-15">}} m = \cos\phi/(1-e^2\sin^2\phi)^{1/2} {{</math>}}
and $\beta_1$ is found from (3-11), using $q_1$ for $q$, while $q_1$ and $q_p$ are found from (3-12) using $\phi_1$ and 90°, respectively, for $\phi$, and $m_1$, is found from (14-15), calculated for $\phi_1$. The origin occurs at $(\phi_1,\lambda_0)$, the Y axis coinciding with the central meridian $\lambda_0$, and y increasing northerly. For the equatorial aspect, the equations simplify as follows:
{{<math tag="24-21">}}x = a\cos\beta\sin(\lambda-\lambda_0)\{2/[1+\cos\beta\cos(\lambda-\lambda_0)]\}^{1/2}{{</math>}}
{{<math tag="24-22">}}y = (R_q^2/a)\sin\beta\{2/[1+\cos\beta\cos(\lambda-\lambda_0)]\}^{1/2}{{</math>}}
For the polar aspects, D is indeterminate using equations above, but the following equations may be used instead. For the north polar aspect, $\phi_1 = 90^\circ$,
{{<math tag="21-30">}}x = \rho\sin(\lambda-\lambda_0){{</math>}}
{{<math tag="21-31">}}y = -\rho\cos(\lambda-\lambda_0){{</math>}}
{{<math tag="21-32">}}k = \rho/(a m){{</math>}}
where
{{<math tag="24-23">}}\rho = a(q_p-q)^{1/2}{{</math>}}
and $q_p$ and $q$ are found from {{%eqref "3-12"%}} as before and $m$ from {{%eqref "14-15"%}} above. Since the meridians and parallels intersect at right angles, and this is an equal-area projection, $h = 1/k$.

For the south polar aspect, $(\phi_1 = -90^\circ)$, equations (21-30) and (21-32) remain the same, but
{{<math tag="24-24">}}y = \rho \cos(\lambda-\lambda_0){{</math>}}
and
{{<math tag="24-25">}}\rho = a(q_p+q)^{1/2}{{</math>}}
_For the inverse formulas for the ellipsoid_, the oblique and equatorial aspects (where $\phi_1$ is not $\pm90^\circ$) may be solved as follows, given $a, e, \phi_1, \lambda_0, x,$ and $y$.
{{<math tag="3-16">}} \phi = \phi + \frac{(1-e^2\sin^2{\phi})^2}{2\cos{\phi}}\left[ \frac{q}{1-e^2} - \frac{\sin{\phi}}{1-e^2\sin^2{\phi}} + 
        \frac 1{2e} \ln{\left( \frac{1-e\sin{\phi}}{1+e\sin{\phi}}\right)}\right] {{</math>}}
{{<math tag="24-26">}}\lambda = \lambda_0 + \arctan[x\sin{c_e}/(D\,\rho\cos\beta_1\cos{c_e} - D^2y\sin\beta_1\sin{c_e}]{{</math>}}
where
{{<math tag="24-27">}}q = q_p[\cos{c_e}\sin\beta_1+(D\,y\sin{c_e}\cos\beta_1/\rho)]{{</math>}}
but id $\rho=0$, then $q = q_p\sin\beta_1$, and $\lambda=\lambda_0$.
{{<math tag="24-28">}}\rho = [(x/D)^2+(Dy)^2]^{1/2}{{</math>}}
{{<math tag="24-29">}}c_e = 2\arcsin(\rho/2R_q){{</math>}}
and $D, R_q, q_p$, and $\beta_1$ are found from equations {{%eqref "24-20"%}}, {{%eqref "3-13"%}}, {{%eqref "3-12"%}}, {{%eqref "3-11"%}}, and {{%eqref "14-15"%}}, as in the forward equations above. The factor $c$, is not the true angular distance, as $c$ is in the spherical case, but it is a convenient number similar in nature to $c$, used to find $\phi$ and $\lambda$. Equation {{%eqref "3-16"%}} requires iteration by successive substitution, using $\arcsin(q/2)$ as the first trial $\phi$ on the right side, calculating $\phi$ on the left side, substituting this new $\phi$ on the right side, etc., until the change in $\phi$ is negligible. If, in equation {{%eqref "24-27"%}},
{{<math tag="14-20">}} q=\pm\{1-[(1-e^2)/2e]\ln[(1-e)/(1+e)]\}  {{</math>}}
the iteration does not converge, but $\phi = \pm90^\circ$ taking the sign of $q$.
To avoid the iteration, equations (3-16), (24-27), and (14-20) may be replaced with the series
{{<math tag="3-18">}} \begin{align}
    \phi = \beta &+ (e^2/3+31e^4/180+517e^6/5040+\dots)\sin{2\beta} \\
                 &+ (23e^4/360+251e^6/3780+\dots)\sin{4\beta} \\
                 &+ (761e^6/45360+\dots)\sin{6\beta}+\dots \end{align}
{{</math>}}
where $\beta$, the authalic latitude, is found thus:
{{<math tag="24-30">}}\beta = \arcsin[\cos{c_e}\sin\beta_1 + (D\,y\sin{c_e}\cos\beta_1/\rho)]{{</math>}}
Equations {{%eqref "24-26"%}}, {{%eqref "24-28"%}}, and {{%eqref "24-29"%}} still apply. In (24-30), if $\rho = 0, \beta = \beta_1$. For improved computational efficiency using this series, see p. 19.

The inverse formulas for the polar aspects involve relatively simple transformations of above equations {{%eqref "21-30"%}}, {{%eqref "21-31"%}}, and {{%eqref "24-23"%}}, except that $\phi$ is found from the iterative equation {{%eqref "3-16"%}}, listed just above, in which $q$ is calculated as follows:
{{<math tag="24-31">}}q = \pm[q_p-(\rho/a)^2]{{</math>}}
taking the sign of $\phi_1$. The series {{%eqref "3-18"%}} may be used instead for $\phi$, where
{{<math tag="24-32">}}\beta = \pm\arcsin\{1-\rho^2/[a^2[1-((1-e^2)/(2e))\ln((1-e)/(1+e))]]\}{{</math>}}
taking the sign of $\phi_1$. In any case,
{{<math tag="20-18">}} \rho = (x^2+y^2)^{1/2} {{</math>}}
while
{{<math tag="20-16">}} \lambda = \lambda_0+\arctan{[x/(-y)]} {{</math>}}
for the north polar case, and
{{<math tag="20-17">}}\lambda = \lambda_0 + \arctan{(x/y)} {{</math>}}
for the south polar case.
Table 29 lists polar coordinates for the ellipsoidal polar aspect of the Lambert Azimuthal Equal-Area, using the International ellipsoid.
{{<figure src="../table29.png" link="../table29.png" caption="__TABLE 29__.&mdash; Ellipsoidal polar Lambert Azimuthal Equal-Area projection (International ellipsoid)">}}
To convert coordinates measured on an existing Lambert Azimuthal Equal-Area map (or other azimuthal map projection), the user may choose any meridian
for $\lambda_0$ on the polar aspect, but only the original meridian and parallel may be used for $\lambda_0$ and $\phi_1$, respectively, on other aspects.
