---
title: 27. Space Oblique Mercator projection
weight: 10
description: Space Oblique Mercator projection
mathjax: 3
date: 2022-12-06
lastmod: 2024-03-10
---
# 27. SPACE OBLIQUE MERCATOR PROJECTION
## SUMMARY
- Modified cylindrical projection with map surface defined by satellite orbit.
- Designed especially for continuous mapping of satellite imagery.
- Basically conformal, especially in region of satellite scanning.
- Groundtrack of satellite, a curved line on the globe, is shown as a curved line on the map and is continuously true to scale as orbiting continues.
- All meridians and parallels are curved lines, except meridian at each polar approach.
- Recommended only for a relatively narrow band along the groundtrack.
- Developed 1973-79 by Colvocoresses, Snyder, and Junkins.

## HISTORY
The launching of an Earth-sensing satellite by the National Aeronautics and Space Administration in 1972 led to a new era of mapping on a continuous basis from space. This satellite, first called ERTS-1 and renamed Landsat 1 in 1975, was followed by two others, all of which circled the Earth in a nearly circular orbit inclined about 99° to the Equator and scanning a swath about 185 km (officially 100 nautical miles) wide from an altitude of about 919 km. The fourth and fifth Landsat satellites involved circular orbits inclined about 98° and scanning from an altitude of about 705 km.

Continuous mapping of this band required a new map projection. Although conformal mapping was desired, the normal choice, the Oblique Mercator projection, is unsatisfactory for two reasons. First, the Earth is rotating at the same time the satellite is moving in an orbit which lies in a plane almost at a right angle to the plane of the Equator, with the double-motion effect producing a curved groundtrack, rather than one formed by the intersection of the Earth's surface with a plane passing through the center of the Earth. Second, the only available Oblique Mercator projections for the ellipsoid are for limited coverage near the chosen central point.

What was needed was a map projection on which the groundtrack remained true-to-scale throughout its course. This course did not, in the case of Landsat 1,2, or 3, return to the same point for 251 revolutions. (For Landsat 4 and 5, the cycle is 233 revolutions.) It was also felt necessary that conformality be closely maintained within the range of the swath mapped by the satellite.

Alden P. Colvocoresses of the Geological Survey was the first to realize not only that such a projection was needed, but also that it was mathematically feasible. He defined it geometrically (Colvocoresses, 1974) and immediately began to appeal for the development of formulas. The following formulas resulted from the writer's response to Colvocoresses' appeal made at a geodetic conference at The Ohio State University in 1976. While the formulas were derived (1977-79) for Landsat, they are applicable to any satellite orbiting the Earth in a circular or elliptical orbit and at any inclination. Less complete formulas were also developed in 1977 by John L. Junkins, then of the University of Virginia. The following formulas are limited to nearly circular orbits. A complete derivation for orbits of any ellipticity is given by Snyder (1981b) and another summary by Snyder (1978b).

## FEATURES AND USAGE
The Space Oblique Mercator (SOM) projection visually differs from the Oblique Mercator projection in that the central line (the groundtrack of the orbiting satellite) is slightly curved, rather than straight. For Landsat, this groundtrack appears as a nearly sinusoidal curve crossing the X axis at an angle of about 8°. The scanlines, perpendicular to the orbit in space, are slightly skewed with respect to the perpendicular to the groundtrack when plotted on the sphere or ellipsoid. Due to Earth rotation, the scanlines on the Earth (or map) intersect the groundtrack at about 86° near the Equator, but at 90° when the groundtrack makes its closest approach to either pole. With the curved groundtrack, the scanlines generally are skewed with respect to the X and Y axes, inclined about 4° to the Y axis at the Equator, and not at all at the polar approaches.

The orbit for Landsat 1, 2, and 3 intersected the plane of the Equator at an inclination of about 99°, measured as the angle between the direction of satellite revolution and the direction of Earth rotation. Thus the groundtrack reached limits of about lat. 81° N. and S. (180° minus 99°). The 185-km swath scanned by Landsat, about 0.83° on either side of the groundtrack, led to complete coverage of the Earth from about lat. 82° N. to 82° S. in the course of the 251 revolutions. With a nominal altitude of about 919 km, the time of one revolution was 103.267 minutes, and the orbit was designed to complete the 251 revolutions in exactly 18 days. Landsat 4 and 5, launched in 1982 and 1984, respectively, scanned the same width, but with an orbit of different radius and inclination, as stated above.

As on the normal Oblique Mercator, all meridians and parallels are curved lines, except for the meridian crossed by the groundtrack at each polar approach. While the straight meridians are 180° apart on the normal Oblique Mercator, they are about 167° apart on the SOM for Landsat 1, 2, and 3, since the Earth advanced
about 26° in longitude for each revolution of the satellite.

As developed, the SOM is not perfectly conformal for either the sphere or ellipsoid, although the error is negligible within the scanning range for either. Along the groundtrack, scale in the direction of the groundtrack is correct for sphere or ellipsoid, while conformality is correct for the sphere and within 0.0005 percent of correct for the ellipsoid. At l° away from the groundtrack, the Tissot Indicatrix (the ellipse of distortion) is flattened a maximum of 0.001 percent for the sphere and a maximum of 0.006 percent for the ellipsoid (this would be zero if conformal). The scale l° away from the groundtrack averages 0.015 percent greater than that at the groundtrack, a value which is fundamental to projection. As a result of the slight nonconformality, the scale l° away from the groundtrack on the ellipsoid then varies from 0.012 to 0.018 percent more than the scale along the groundtrack.

A prototype version of the SOM was used by NASA with a geometric analogy proposed by Colvocoresses (1974) while he was seeking the more rigorous mathematical development. This consisted basically of moving an obliquely tangent cylinder back and forth on the sphere so that a circle around it which would normally be tangent shifted to follow the groundtrack. This is suitable near the Equator but leads to errors of about 0. l percent near the poles, even for the sphere. In 1977, John B. Rowland of the USGS applied the Hotine Oblique Mercator (described previously) to Landsat 1, 2, and 3 orbits in five stationary zones, with smaller but significant errors (up to twice the scale variation of the SOM) resulting from the fact that the groundtrack cannot follow the straight central line of the HOM. In addition, there are discontinuities at the zone changes. This was done to fill the void resulting from the lack of SOM formulas.

For Landsat 4 and 5, the final SOM equations replaced the HOM for mapping. Figures 46 and 47 show the SOM extended to two orbits with a 30° graticule and for one-fourth of an orbit with a 10° graticule, respectively. The progressive advance of meridians may be seen in figure 46. Both views are for Landsat 4 and 5 constants.
{{<figure src="../figure46.png" link="../figure46.png" caption="__FIGURE 46__.&mdash; Two orbits of the Space Oblique Mercator projection, shown for Landsat 5, paths 15 (left) and 31. Designed for a narrow band along groundtrack, which remains true to scale. Note the rotation of the Earth with successive orbits. Scan lines extended 15° from groundtrack are short lines nearly perpendicular to it.">}}

{{<figure src="../figure47.png" link="../figure47.png" caption="__FIGURE 47__.&mdash; One quadrant of the Space Oblique Mercator projection for Landsat 5, path 15. An \"enlargment\" of part of figure 46 beginning at the North Pole.">}}

## FORMULAS FOR THE SPHERE
Both iteration and numerical integration are involved in the formulas as presented for sphere or ellipsoid. The iteration is quite rapid (three to five iterations required for ten-place accuracy), and the numerical integration is greatly simplified by the use of rapidly converging Fourier series. The coefficients for the Fourier series may be calculated once for a given satellite orbit. [Some formulas below are slightly simplified from those first published (Snyder, 1978b).]

For the forward equations, for the sphere and circular orbit, to find $(x, y)$ for a given $(\phi,\lambda)$, it is necessary to be given $R, i, P_2, P_1, \lambda_0, \phi,$ and $\lambda$, where
|      |                                              |
|------|----------------------------------------------|
| $R=$ | radius of the globe at the scale of the map. |
| $i=$ | angle of inclination between the plane of the Earth's Equator and the plane of the satellite orbit, measured counterclockwise from the Equator to the orbital plane at the ascending node (99.092° for Landsat l, 2, 3; 98.20° for Landsat 4, 5).|
| $P_2=$ | time required for revolution of the satellite (103.267 min for Landsat 1, 2, 3; 98.884 min. for Landsat 4, 5). |
| $P_1=$ | length of Earth's rotation with respect to the precessed ascending node. For Landsat, the satellite orbit is Sun-synchronous; that is, it is always the same with respect to the Sun, equating $P_1$ to the solar day (1,440 min). The ascending node is the point on the satellite orbit at which the satellite crosses the Earth's equatorial plane in a northerly direction. |
|$\lambda_0 = $ | geodetic longitude of the ascending node at time $t = 0$. |
|$(\phi,\lambda)=$| geodetic latitude and longitude of point to be plotted on map. | 
|$ t= $ | time elapsed since the satellite crossed the ascending node for the orbit considered to be the initial one. This may be the current orbit or any earlier one, as long as the proper $\lambda_0$ is used. |

First, various constants applying to the entire map for all the satellite's orbits should be calculated a single time (see p. 347 for numerical examples):
{{<math tag="27-1">}}B = (2/\pi)\int_0^{\pi/2}[(H-S^2)/(1+S^2)^{1/2}]d\lambda'{{</math>}}
{{<math tag="27-2">}}A_n = [4/(\pi n)\int_0^{\pi/2}[(H-S^2)/(1+S^2)^{1/2}]\cos{n\lambda'}d\lambda'{{</math>}}
for $n=2$ and 4 only.
{{<math tag="27-3">}}C_n = [4(H+1)/(\pi n)]\int_0^{\pi/2}[S/(1+S^2)^{1/2}]\cos{n\lambda'}d\lambda'{{</math>}}
for $n=1$ and 3 only.

For calculating $A_n, B,$ and $C_n$ numerical integration using Simpson's rule is recommended, with 9° intervals in $\lambda'$ (sufficient for ten-place accuracy). The terms shown are sufficient for seven-place accuracy, ample for the sphere. For H and S in equations (27-1) through (27-3):
{{<math tag="27-4">}}H = 1 - (P_2/P_1)\cos i{{</math>}}
{{<math tag="27-5">}}S = (P_2/P_1)\sin i \cos\lambda'{{</math>}}
To find $x$ and $y$, with the X axis passing through each ascending and descending node (wherever the groundtrack crosses the Equator), $x$ increasing in the direction of satellite motion, and the Y axis passing through the ascending node for time $t = 0$:
{{<math tag="27-6">}}\begin{align}
x/R = &B\lambda'+A_2\sin{2\lambda'}+A_4\sin{4\lambda'}+\dots \cr
      &-[S/(1+S^2)^{1/2}]\ln\tan(\pi/4+\phi'/2)
\end{align}{{</math>}}
{{<math tag="27-7">}}\begin{align}
y/R = &C_1\sin{\lambda'} + C_3\sin{3\lambda'} + \dots \cr
      &+[1/(1+S^2)^{1/2}]\ln\tan(\pi/4+\phi'/2)
\end{align}{{</math>}}
where $B, A_n,$ and $C_n$ are constants calculated above, $S$ is calculated from {{%eqref "27-5"%}} for each point, and
{{<math tag="27-8">}}\lambda' = \arctan(\cos i \tan\lambda_t + \sin i \tan\phi/\cos\lambda_t){{</math>}}
{{<math tag="27-9">}}\lambda_t = \lambda - \lambda_0 + (P_2/P_1)\lambda'{{</math>}}
{{<math tag="27-10">}}\phi' = \arcsin(\cos i \sin\phi - \sin i \cos\phi\sin\lambda_t){{</math>}}
{{<math>}}\begin{align}
\lambda_0 &=128.87^\circ -(360^\circ/251)p \quad \text{(Lansat 1, 2, 3 only)} \tag {27-11} \cr
          &=129.30^\circ -(360^\circ/233)p \quad \text{(Lansat 4, 5 only)} \tag {27-11a}
\end{align}{{</math>}}

{{<math>}}\begin{align}
p \quad=\;&\text{path number of Landsat orbit for which the ascending node occurs at} \cr
        &\text{time $t=0$. This ascending node is prior to the start of the path, so that} \cr
        &\text{the path extends from 1/4 orbit past this node to 5/4 orbit past it.} \cr
\lambda' \quad=\;&\text{"transformed longitude," the angular distance along the groundtrack,} \cr
        &\text{measured from the initial ascending node ($t = 0$), and directly proportional} \cr
        &\text{to $t$ for a circular orbit, or $\lambda'=360^\circ t/P_2$.} \cr
\lambda_t\quad=\;&\text{a "satellite-apparent" longitude, the longitude relative to $\lambda_0$, seen by the} \cr
        &\text{satellite if the Earth were stationary.} \cr
\phi'\quad=\;&\text{"transformed latitude," the angular distance from the groundtrack,}\cr
        &\text{positive to the left of the satellite as it proceeds along the orbit.}
\end{align}{{</math>}}
Finding $\lambda'$ from equations {{%eqref "27-8"%}} and {{%eqref "27-9"%}} involves iteration performed in the following manner: After selecting $\phi$ and $\lambda$, the $\lambda'$' of the nearest polar approach, $\lambda_p'$, is used as the first trial $\lambda'$ on the right side of {{%eqref "27-9"%}}; $\lambda_t$ is calculated and substituted into {{%eqref "27-8"%}} to find a new $\lambda'$'. A quadrant adjustment (see below) is applied to $\lambda'$, since the computer normally calculates arctan as an angle between -90° and 90°, and this $\lambda'$ is used as the next trial $\lambda'$ in {{%eqref "27-9"%}}, etc., until $\lambda'$ changes by less than a chosen convergence factor. The value of $\lambda_p'$ may be determined as follows, for any number of revolutions:
{{<math tag="27-12">}}\lambda_p' = 90^\circ \times (4\;N+2\pm1){{</math>}}
where $N$ is the number of orbits completed at the last ascending node before the satellite passes the nearest pole, and the $\pm$ takes minus in the Northern Hemisphere and plus in the Southern (either for the Equator). Thus, if only the first path number past the ascending node is involved, $\lambda_p'$ is 90° for the first quadrant (North Pole to Equator), 270° for the second and third quadrants (Equator to South Pole to Equator), and 450° for the fourth quadrant (Equator to North Pole). For quadrant adjustment to $\lambda'$ calculated from {{%eqref "27-8"%}}, the Fortran ATAN2 or its equivalent should not be used. Instead, $\lambda'$ should be increased by $\lambda_p'$ minus the following factor: 90° times $\sin $\lambda_p'$ $times $\pm\,1$ (taking the sign of \$cos \lambda_{tp}$, where $\lambda_{tp} = \lambda -\lambda_0 + (P2/P1)\lambda_p'$). If $\cos \lambda_{tp}$ is zero, the final $\lambda'$ is $\lambda_p'$. Thus, the adder to the arctan is 0° for the quadrant between the ascending node and the start of the path, and 180°, 180°, 360°, and 360°, respectively, for the four quadrants of the first path.

The closed forms of equations {{%eqref "27-6"%}} and {{%eqref "27-7"%}} are as follows:
{{<math tag="27-6a">}}
x/R=\int_0^{\lambda'}[(H-S^2)/(1+S^2)^{1/2}]d\lambda'-[S/(1+S^2)^{1/2}]\ln\tan(\pi/4+\phi'/2)
{{</math>}}
{{<math tag="27-7a">}}
y/R = (H+1)\int_0^{\lambda'}[S/(1+S^2)^{1/2}]d\lambda' + [1/(1+S^2)^{1/2}]\ln\tan(\pi/4+\phi'/2)
{{</math>}}
Since these involve numerical integration for each point, the series forms, limiting numerical integration to once per satellite, are distinctly preferable. These are Fourier series, and equations {{%eqref "27-2"%}} and {{%eqref "27-3"%}} normally require integration from 0 to $2\pi$, without the multiplier 4, but the symmetry of the circular orbit permits the simplification as shown for the nonzero coefficients.

_For inverse formulas for the sphere_, given $R, i, P_2, P_1, \lambda_0, x,$ and $y$, with $\phi$ and $\lambda$ required: Constants $B, A_n, C_n$, and $\lambda_0$, must be calculated from {{%eqref "27-1"%}} through {{%eqref "27-3"%}} and {{%eqref "27-11"%}} just as they were for the forward equations. Then,
{{<math tag="27-13">}}\lambda = \arctan[(\cos i\sin\lambda' - \sin i \tan\phi')/\cos\lambda']-(P_2/P1)\lambda'+\lambda_0{{</math>}}
{{<math tag="27-14">}}\phi = \arcsin(\cos i \sin \phi' + \sin i \cos\phi'\sin\lambda'){{</math>}}
where the ATAN2 function of Fortran is useful for (27-13), except that it may be necessary to add or subtract 360° to place A between long. 180° E.(+) and 180° W.(-), and
{{<math tag="27-15">}}\lambda'=[x/R+S y/R-A_2\sin{2\lambda'} - A_4\sin{2\lambda'}-S(C_1\sin\lambda'+C_3\sin{3\lambda'})]/B{{</math>}}
{{<math tag="27-16">}}\ln\tan(\pi/4+\phi'/2)=(1+S^2)^{1/2}(y/R-C_1\sin\lambda'-C_3\sin{3\lambda'}){{</math>}}
Equation (27-15) is iterated by trying almost any $\lambda'$ (preferably $x/(BR)$) in the right side, solving for $\lambda'$ on the left and using the new $\lambda'$ for the next trial, etc., until there is no significant change between successive trial values. Equation (27-16) uses the final $\lambda'$ calculated from (27-15).

The closed form of equation (27-15) given below involves repeated numerical integration as well as iteration, making its use almost prohibitive:
{{<math tag="27-15a">}}\begin{align}
(x+S y)/R =& \int_0^{\lambda'}[(H-S^2)/(1+S^2)^{1/2}]d\lambda' \cr
           & + S(H+1)\int_0^{\lambda'}[S/(1+S^2)^{1/2}]d\lambda'
\end{align}{{</math>}}
The following closed form of (27-16) requires the use of the last integral calculated from (27-15a):
{{<math tag="27-16a">}}\ln\tan(\pi/4+\phi'/2) = (1+S^2)^{1/2}\{(y/R)-(H+1)\int_0^{\lambda'}[S/(1+S^2)^{1/2}]d\lambda'\} {{</math>}}
The original published forms of these equations include several other Fourier coefficient calculations which slightly save computer time when continuous mapping is involved. The resulting equations are more complicated, so they are omitted here for simplicity. The above equations are as accurate and only slightly less
efficient.

The values of coefficients for Landsat 1,2, and 3 ($P_2/P_1= 18/251; i=99.092^\circ$) are listed here as examples:
{{<math>}}\begin{align}
A_2 \quad &= -0.0018820 \cr
A_4 \quad &= 0.0000007 \cr
B\quad &= 1.0075654142 \quad \text{for $\lambda'$ in radians} \cr
       &= 0.0175853339 \quad \text{for $\lambda'$ in degrees} \cr
C_1\quad &= 0.1421597 \cr
C_3\quad &= -0.0000296
\end{align}{{</math>}}
It is also of interest to determine values of $\phi, \lambda$, or $\lambda'$ along the groundtrack, given any one of the three (as well as $P_2, P_1, i$, and $\lambda_0$). Given $\phi$,
{{<math tag="27-17">}}\lambda' = \arcsin(\sin\phi/\sin i){{</math>}}
{{<math tag="27-18">}}\lambda = \arctan[(\cos i/\sin\lambda')/\cos\lambda']-(P_2/P_1)\lambda'+\lambda_0{{</math>}}
If $\phi$ is given for a descending part of the orbit (daylight on Landsat), subtract $\lambda'$ from the $\lambda'$ of the nearest descending node (180°, 540°, ...). If the orbit is ascending, add $\lambda'$ to the $\lambda'$ of the nearest ascending node (0°, 360°, ...). For a given path, only 180° and 360°, respectively, are involved.

Given $\lambda$,
{{<math tag="27-19">}}\lambda' = \arctan(\tan\lambda_t/\cos i){{</math>}}
{{<math tag="27-9">}}\lambda_t = \lambda - \lambda_0 + (P_2/P_1)\lambda'{{</math>}}
{{<math tag="27-20">}}\phi = \arcsin(\sin i/\sin\lambda'){{</math>}}
Given $\lambda'$, equations {{%eqref "27-18"%}} and {{%eqref "27-20"%}} may be used for $\lambda$ and $\phi$, respectively. Equations {{%eqref "27-6"%}} and {{%eqref "27-7"%}}, with $\phi' = 0$, convert these values to $x$ and $y$. Equations {{%eqref "27-19"%}} and {{%eqref "27-9"%}} require joint iteration, using the same procedure as that for the pair of equations {{%eqref "27-8"%}} and {{%eqref "27-9"%}} given earlier. The $\lambda$ calculated from equation {{%eqref "27-18"%}} should have the same quadrant adjustment as that described for {{%eqref "27-13"%}}.

The formulas for scale factors $h$ and $k$ and maximum angular deformation $\omega$ are so lengthy that they are not given here. They are available in Snyder (1981b). Table 36 lists these values as calculated for the spherical SOM using Landsat constants. Although calculated for Landsat 1, 2, and 3, they are almost identical for 4 and 5.
{{<figure src="../table36.png" link="../table36.png" caption="__TABLE 36__.&mdash; Scale factors for the spherical Space Oblique Mercator projection using Landsat 1, 2, and 3 constants">}}

## FORMULAS FOR THE ELLIPSOID AND CIRCULAR ORBIT
Since the SOM is intended to be used only for the mapping of relatively narrow strips, it is highly recommended that the ellipsoidal form be used to take advantage of the high accuracy of scale available, especially as the imagery is further developed and used for more precise measurement. In addition to the normal modifications to the above spherical formulas for ellipsoidal equivalents, an additional element is introduced by the fact that Landsat is designed to scan vertically, rather than in a geocentric direction. Therefore, "pseudotransformed" latitude $\phi^{\prime\prime}$ and longitude $\lambda^{\prime\prime}$ have been introduced. They relate to a geocentric groundtrack for an orbit in a plane through the center of the Earth. The regular transformed coordinates $\phi'$ and $\lambda'$ are related to the actual vertical groundtrack. The two groundtracks are only a maximum of 0.008° apart, although a lengthwise displacement of 0.028° for a given position may occur.

If the eccentricity of the ellipsoid is made zero, the formulas reduce to the spherical formulas above. These formulas vary slightly, but not significantly, from those published in Snyder (1978b, 1981b). In practice, the coordinates for each picture element (pixel) should not be calculated because of computer time required. Linear interpolation between occasional calculated points can be developed with adequate accuracy.

For the forward formulas, given $a, e, i, P_2, P_1, \lambda_0, R_0, \phi$, and $\lambda$, find $x$ and $y$. As with the spherical formulas, the X axis passes through each ascending and descending node, x increasing in the direction of satellite motion, and the Y axis intersects perpendicularly at the ascending node for the time $t = 0$. Defining terms,
{{<math >}}\begin{align}
a, e\, &=& &\text{semimajor axis and eccentricity of ellipsoid, respectively (as for other} \cr
& & &\text{ellipsoidal projections)} \cr
R_0\,&=& &\text {radius of the circular orbit of the satellite.}
\end{align}{{</math>}}
$i, P_2, P_1, \lambda_0, \phi, \lambda$ are as defined for the spherical SOM formulas. For constants applying to the entire map (see p. 354 for numerical examples):
{{<math tag="27-21">}}B = (2/\pi)\int_0^{\pi/2}[(H J -S^2)/(J^2 + S^2)^{1/2}]d\lambda''{{</math>}}
{{<math tag="27-22">}}A_n = [4/(\pi n)]\int_0^{\pi/2}[(H J - S^2)/(J^2 + S^2)^{1/2}]\cos{n\lambda''}d\lambda''{{</math>}}
{{<math tag="27-23">}}C_n = [4/(\pi n)]\int_0^{\pi/2}[S(H+J)/(J^2 + S^2)^{1/2}]\cos{n\lambda''}d\lambda''{{</math>}}
{{<math tag="27-24">}}J = (1-e^2)^3{{</math>}}
{{<math tag="27-25">}}W = [(1-e^2\cos^2 i)^2/(1-e^2)^2]-1{{</math>}}
{{<math tag="27-26">}}Q = e^2\sin^2i/(1-e^2){{</math>}}
{{<math tag="27-27">}}T = e^2\sin^2i(2-e^2)/(1-e^2)^2{{</math>}}
{{<math tag="27-28">}}j_n = (4/\pi)\int_0^{\pi/2}\phi''\sin{n\lambda'}d\lambda'{{</math>}}
{{<math tag="27-29">}}m_n = (4/\pi)\int_0^{\pi/2}(\lambda''-\lambda')\sin{n\lambda'}d\lambda'{{</math>}}
where $\phi''$ and $\lambda''$ are determined in these last two equations for the groundtrack as functions of $\lambda'$, from equations {{%eqref "27-43"%}}, {{%eqref "27-34"%}}, {{%eqref "27-35"%}}, and {{%eqref "27-36"%}}.

To calculate $A_n, B$, and $C_n$, the following functions, varying with $\lambda''$, are used:
{{<math tag="27-30">}}S=(P_2/P_1)\sin i \cos\lambda''\{(1+T\sin^2{\lambda''})/[(1+W\sin^2{\lambda''})(1+Q\sin^2{\lambda''})]\}^{1/2}{{</math>}}
{{<math tag="27-31">}}H = \left[\frac{1+Q\sin^2{\lambda''}}{1+W\sin^2{\lambda''}}\right]^{1/2} \left[\frac {1+W\sin^2{\lambda''}} {(1+Q\sin^2{\lambda''})^2}  - (P_2/P_1)\cos i\right]{{</math>}}
These constants may be determined from numerical integration, using Simpson's rule with 9° intervals. For circular orbits, $A_n$ if $n$ is odd, $C_n$ if n is even, $j_n$ if $n$ is even, and $m_n$ if $n$ is odd are all zero. The above integration to $\pi/2$ is suitable, due to symmetry, only for non-zero coefficients. Integration to $2\pi$ would be necessary to show that other coefficients are zero.

To find $x$ and $y$ from $\phi$ and $\lambda$:
{{<math tag="27-32">}}\begin{align}
x/a = &B\lambda'' + A_2\sin{2\lambda''} + A_4\sin{4\lambda''}+\dots \cr
      &-[S/(J^2+S^2)^{1/2}]\ln\tan(\pi/4+\phi''/2)
\end{align}{{</math>}}
{{<math tag="27-33">}}\begin{align}
y/a = &C_1\sin\lambda'' + C_3\sin{3\lambda''}+ \dots \cr
      &+[J/(J^2 + S^2)^{1/2}]\ln\tan(\pi/4+\phi''/2)
\end{align}{{</math>}}
where
{{<math tag="27-34">}}\lambda'' = \arctan[\cos i\tan\lambda_t + (1-e^2)\sin i \tan\phi/\cos\lambda_t]{{</math>}}
{{<math tag="27-35">}}\lambda_t = \lambda - \lambda_0 + (P_2/P_1)\lambda''{{</math>}}
{{<math tag="27-36">}}\phi'' = \arcsin\{[(1-e^2)\cos i \sin \phi - \sin i \cos \phi\sin\lambda_t]/(1-e^2\sin^2\phi)^{1/2}\}{{</math>}}
{{<math>}}\begin{align}
  \lambda_0 &= 128.87^\circ -(360^\circ/251)p \quad \text{(Landsat 1, 2, 3 only)} \tag{27-37}\cr
            &= 129.30^\circ -(360^\circ/233)p \quad \text{(Landsat 4, 5 only)} \tag{27-38}
\end{align}{{</math>}}
Equations {{%eqref 27-34%}} and {{%eqref 27-35%}} are iterated together as were {{%eqref 27-8%}} and {{%eqref 27-9%}}. Equation {{%eqref 27-30%}} is used to find $S$ for the given $\lambda$ in equations {{%eqref 27-32%}} and {{%eqref 27-33%}}. For improved computational efficiency using these and subsequent series, see p. 19.

The closed forms of equations {{%eqref 27-32%}} and {{%eqref 27-33%}} are given below, but the repeated numerical integration necessitates replacement by the series forms.
{{<math tag="27-32a">}}x/a = \int_0^{\lambda''} [(HJ-S^2)/(J^2+S^2)^{1/2}]d\lambda'' - [S/(J^2+S^2)^{1/2}] \ln\tan(\pi/4+\phi''/2){{</math>}}
{{<math tag="27-33a">}}y/a = \int_0^{\lambda''} [S(H+J)/(J^2+S^2)^{1/2}]d\lambda'' + [J/(J^2+S^2)^{1/2}]  \ln\tan(\pi/4+\phi''/2){{</math>}}
While the above equations are sufficient for plotting a graticule according to the SOM projection, it is also desirable to relate these points to the true vertical
groundtrack. To find $\phi''$ and $\lambda''$ in terms of $\phi'$ and $\lambda'$, the shift between these two sets of coordinates is so small it is equivalent to an adjustment, requiring only small Fourier coefficients, and very lengthy calculations if they are not used. The use of Fourier series is therefore highly recommended, although the one-time calculation of coefficients is more difficult than the foregoing calculation of $A_n, B,$ and $C_n$.
{{<math tag="27-39">}}\phi'' = \phi'+j_1\sin\lambda' + j_3\sin{3\lambda'} + \dots{{</math>}}
{{<math tag="27-40">}}\lambda'' = \lambda' + m_2\sin{2\lambda'} + m_4\sin{4\lambda'} + \dots{{</math>}}
For a circular orbit, $\lambda'$ is $2\pi t/P_2$, where $t$ is the time from the initial ascending node.

The equations for functions of the satellite groundtrack, both forward and inverse, are given here, since some are used in calculating $j_n$, and $m_n$ as well. In any case $a, e, i, P_2, P_1, \lambda_0,$ and $R_0$ must be given. For $\lambda'$ and $\lambda$, if $\phi$ is given:
{{<math tag="27-41">}}\phi_g  = \phi - \arcsin\{a e^2\sin\phi\cos\phi/[R_0(1-e^2\sin^2\phi)^{1/2}]\}{{</math>}}
{{<math tag="27-42">}}\lambda' = \arcsin(\sin\phi_g/\sin i){{</math>}}
where $\phi_g$ is the geocentric latitude of the point geocentrically under the satellite, not the geocentric latitude corresponding to the vertical groundtrack latitude $\phi$.
{{<math tag="27-43">}}\lambda = \arctan[(\cos i \sin\lambda')/\cos\lambda']-(P_2/P_1)\lambda' + \lambda_0{{</math>}}
If $\lambda$ of a point along the groundtrack is given, to find $\lambda'$ and $\phi$,
{{<math>}}\lambda' = \arctan(\tan\lambda_t/\cos i) \tag{27-19}{{</math>}}
{{<math>}}\lambda_t = \lambda - \lambda_0 + (P_2/P_1)\lambda' \tag{27-35}{{</math>}}
These two equations are iterated as a group, but the first trial $\lambda'$ and the quadrant adjustments should follow the procedures listed for equation {{%eqref 27-8%}}.
{{<math tag="27-44">}}\phi = \arcsin(\sin i \sin\lambda')+\arcsin\{a e^2 \sin\phi\cos\phi/[R_0(1-e^2\sin^2\phi)^{1/2}]\} {{</math>}}
Iteration is involved in (27-44), beginning with a trial $\phi$ of $\arcsin (\sin i \sin \lambda')$.

If $\lambda'$ of a point along the groundtrack is given, $\phi$ is found from (27-44), and (27-43) provides $\lambda$. Only (27-44) requires iteration for these calculations.

_Inverse formulas for the ellipsoidal form_ of the SOM projection, with circular orbit, follow: Given: $a, e, i, P_2, P_1, \lambda_0, R_0, x,$ and $y$, to find $\phi$ and $\lambda$, the general Fourier and other constants are first determined as described at the beginning of the forward equations. Then
{{<math tag="27-45">}}\lambda = \lambda_t-(P_2/P_1)\lambda''+\lambda_0{{</math>}}
where
{{<math tag="27-46">}}\lambda_t = \arctan(V/\cos\lambda''){{</math>}}
{{<math tag="27-47">}}\begin{align}
V = &\{ [1-\sin^2\phi''/(1-e^2)]\cos i \sin\lambda'' - \sin i \sin\phi''[(1+Q\sin^2\lambda'') \cr
    & (1-\sin^2\phi'')-U\sin^2\phi'']^{1/2}\}/[1-\sin^2\phi''(1+U)]
\end{align}{{</math>}}
{{<math tag="27-48">}}U = e^2\cos^2 i/(1-e^2){{</math>}}
while $\lambda''$ and $\phi''$ are found from {{%eqref 27-51%}} and {{%eqref 27-52%}} below.
{{<math tag="27-49">}}\phi = \arctan\{(\tan\lambda''\cos\lambda_t- \cos i \sin\lambda_t)/[(1-e^2)\sin i] \} {{</math>}}
If $i=0$, equation (27-49) is indeterminate, but
{{<math tag="27-50">}}\phi = \arcsin\{\sin\phi''/[(1-e^2)^2+e^2\sin^2\phi'']^{1/2} \} {{</math>}}
No iteration is involved in equations (27-45) through (27-50), and the ATAN2 function of Fortran should be used with (27-46), but not (27-49), adding or subtracting
360° to or from $\lambda$ if necessary in (27-45) to place it between longs. 180° E. and W.

Iteration is required to find $\lambda''$ from $x$ and $y$:
{{<math tag="27-51">}}\lambda'' = [x/a+(S/J)(y/a)-A_2\sin{2\lambda''}-A_4\sin{4\lambda''} \\
-(S/J)(C_1\sin{\lambda''}+C_3\sin{3\lambda''})]/B{{</math>}}
using equation {{%eqref 27-30%}} and various constants. Iteration involves substitution of a trial $\lambda''=x/a\,B$ in the right side, finding a new $\lambda''$ on the left side, etc.

For $\phi''$, the $\lambda''$ just calculated is used in the following equation:
{{<math tag="27-52">}}\ln\tan(\pi/4+\phi''/2) = (1+S^2/J^2)^{1/2}(y/a-C_1\sin{\lambda''}-C_3\sin{3\lambda''}){{</math>}}

The closed forms of equations (27-51) and (27-52) involve both iteration and repeated numerical integration and are impractical:
{{<math tag="27-51a">}}\begin{align}
x/a + (S/J)(y/a) = &\int_0^{\lambda''}[(H J - S^2)/(J^2+S^2)^{1/2}]d\lambda'' \cr
                   &+(S/J)\int_0^{\lambda''}[S(H+J)/(J^2+S^2)^{1/2}]d\lambda''
\end{align}{{</math>}}
{{<math tag="27-52a">}}\begin{align}
\ln\tan(\pi/4+\phi''/2)=&[1+(S/J)^2]^{1/2}\{y/a - \int_0^{\lambda''}[S(H+J)/ \cr
                        &(J^2+S^2)^{1/2}]d\lambda''1 \}
\end{align}{{</math>}}
Equations (27-53) and (27-54) are, of course, not the exact inverses of {{%eqref 27-39%}} and {{%eqref 27-40%}}, although the correct coefficients may be derived by an analogous numerical integration in terms of $\lambda''$, rather than $\lambda'$. The inverse values of $\phi'$ and $\lambda'$ from {{%eqref 27-53%}} and {{%eqref 27-54%}} are within 0.000003" and 0.000009°, respectively, of the true inverses of {{%eqref 27-39%}} and {{%eqref 27-40%}} for the Landsat orbits.

The following values of Fourier coefficients for the ellipsoidal SOM are listed for Landsat orbits, using the Clarke 1866 ellipsoid ($a=6,378,206.4$ m and $e^2=0.00676866$) and a circular orbit:
![](../img1.png)
Additional Fourier constants have been developed in the published literature for other functions of circular orbits. They add to the complication of the equations, but not to the accuracy, and only slightly to continuous mapping efficiency. A further simplification from published formulas is the elimination of a function F, which nearly cancels out in the range involved in imaging.

As in the spherical form of SOM, the formulas for scale factors $h$ and $k$ and maximum angular deformation $\omega$ are too lengthy to include here, although they are given by Snyder (1981b). Table 37 presents these values for Landsat constants for the scanning range required. Values for Landsat 4 and 5 are nearly identical with those shown for 1, 2, and 3.
{{<figure src="../table37.png" link="../table37.png" caption="__TABLE 37__.&mdash; Scale factors for the ellipsoidal Space Oblique Mercator projection using Landsat 1, 2, and 3 constants">}}

## FORMULAS FOR THE ELLIPSOID AND NONCIRCULAR ORBIT
The following formulas accommodate a slight ellipticity in the satellite orbit. They provide a true-to-scale groundtrack for an orbit of any eccentricity, if the orbital motion follows Kepler's laws for two-bodied systems, but the areas scanned by the satellite as shown on the map are distorted beyond the accuracy desired if the eccentricity of the orbit exceeds about 0.05, well above the maximum reported eccentricity of Landsat orbits (about 0.002). For greater eccentricities, more complex formulas (Snyder, 1981b) are recommended. If the orbital eccentricity is made zero, these formulas readily reduce to those for a circular orbit.

For the forward formulas, given $a, e, i, P_2, P_1, \lambda_0, a', e', \gamma, \phi,$ and $\lambda$, find $x$ and $y$. Again, the X axis passes through each ascending and descending node, x increasing in the direction of satellite motion, and the Y axis intersects perpendicularly at the ascending node for the time t = 0. Defining terms,
{{<math>}}\begin{align}
a', e'\;&=\;\text{semimajor axis and eccentricity of satellite orbit, respectively} \cr
\gamma  &=\;\text{longitude of the perigee relative to the ascending node.}
\end{align} {{</math>}}
$a$ and $e$ are as defined for the ellipsoidal/circular formulas, and $i, P_2, P_1, \lambda_0, \phi,$ and $\lambda$ are as defined for the spherical SOM formulas. For constants applying to the entire map (a numerical example is not given for the non-circular orbit):
{{<math tag="27-55">}}B_1 = [1/(2\pi)]\int_0^{2\pi} [(H J - S^2)/(J^2 + S^2)^{1/2}]d\lambda''{{</math>}}
{{<math tag="27-56">}}B_2 = [1/(2\pi)]\int_0^{2\pi} [S(H+J)/(J^2+S^2)^{1/2}]d\lambda''{{</math>}}
{{<math tag="27-57">}}A_n = [1/(\pi n)]\int_0^{2\pi} [(H J - S^2)/(J^2+S^2)^{1/2}]\cos{n \lambda''} d\lambda''{{</math>}}
{{<math tag="27-58">}}A'_n = [1/(\pi n)]\int_0^{2\pi} [(H J -S^2)/(J^2+S^2)^{1/2}]\sin{n \lambda''} d\lambda''{{</math>}}
{{<math tag="27-59">}}C_n = [1/(\pi n)]\int_0^{2\pi} [S(H+J)/(J^2+S^2)^{1/2}]\cos{n \lambda''} d\lambda''{{</math>}}
{{<math tag="27-60">}}C'_n = [1/(\pi n)]\int_0^{2\pi} [S(H+J)/(J^2+S^2)^{1/2}]\sin{n \lambda''} d\lambda''{{</math>}}
{{<math>}}J = (1-e^3)^3 \tag{27-24}{{</math>}}
{{<math>}}W = [(1-e^2\cos^2 i)^2/(1-e^2)^2]-1 \tag{27-25}{{</math>}}
{{<math>}}Q = s^2\sin^2 i/(1-e^2) \tag{27-26}{{</math>}}
{{<math>}}T = e^2\sin^2 i (2-e^2)/(1-e^2)^2 \tag{27-27}{{</math>}}
{{<math tag="27-61">}}H_1 = B_1/(B_1^2+B_2^2)^{1/2}{{</math>}}
{{<math tag="27-62">}}S_1 = B_2/(B_1^2+B_2^2)^{1/2}{{</math>}}
{{<math tag="27-63">}}j_n = (1/\pi)\int_0^{2\pi}\phi''\sin{n \lambda'}d\lambda' {{</math>}}
{{<math tag="27-64">}}j'_n = (1/\pi)\int_0^{2\pi}\phi''\cos{n \lambda'}d\lambda'{{</math>}}
{{<math tag="27-65">}}m_n = (1/\pi)\int_0^{2\pi}(\lambda''-\lambda')\sin{n \lambda'}d\lambda'{{</math>}}
{{<math tag="27-66">}}m'_n = (1/\pi)\int_0^{2\pi}(\lambda''-\lambda')\cos{n \lambda'}d\lambda'{{</math>}}
where $\phi''$ and $\lambda''$ are determined in these last four equations for the groundtrack as functions of $\lambda'$, from equations {{%eqref 27-69a%}}, {{%eqref 27-87%}}, {{%eqref 27-86%}}, {{%eqref 27-85%}}, {{%eqref 27-88%}}, and {{%eqref 27-34%}}, {{%eqref 27-74%}} through {{%eqref 27-76%}}, and {{%eqref 27-36%}}.

To calculate $A_n, A'_n, B_n, C_n,$ and $C'_n$, the following functions, varying with $\lambda''$,are used:
{{<math tag="27-67">}}S = (P_2/P_1)L'\sin i\cos\lambda''\{(1+T\sin^2\lambda'')/[(1+W\sin^2\lambda'')(1+Q\sin^2\lambda'')] \}^{1/2}{{</math>}}
{{<math tag="27-67a">}}H = \left[ \frac{1+Q\sin^2\lambda''}{1+W\sin^2\lambda''}\right]^{1/2}\left[ \frac{1+W\sin^2\lambda''}{(1+Q\sin^2\lambda'')^2} -(P2/P1)L'\cos i\right]{{</math>}}
{{<math tag="27-68">}}L' = (1-e'\cos{E'})^2/(1-e'^2)^{1/2}{{</math>}}
{{<math tag="27-69">}}E' = 2\arctan\{ \tan[(\lambda''-\gamma)/2][(1-e')/(1+e')]^{1/2}\}{{</math>}}

These constants may be determined from numerical integration, using Simpson's rule with 9° intervals. Unlike the case for circular orbits, integration must occur through the 360° or $2\pi$ cycle, as indicated. Many more terms are needed than for circular orbits.

To find $x$ and $y$ from $\phi$ and $\lambda$:
{{<math tag="27-70">}}x/a = x' H_1 +y' S_1{{</math>}}
{{<math tag="27-71">}}y/a = y' H_1 - x' S_1{{</math>}}
where
{{<math tag="27-72">}}\begin{align}
x' = &D_1\lambda''+\sum_{n=1}^n A_n\sin{n\lambda''}-\sum_{n=1}^nA'_n\cos{n\lambda''}+\sum_{n=1}^nA'_n-[S/(J^2+S^s)^{1/2}] \cr
     &\ln\tan(\pi/4+\phi''/2)
\end{align}{{</math>}}
{{<math tag="27-73">}}\begin{align}
y' = &B_2\lambda''+\sum_{n=1}^nC_n\sin{n\lambda''}-\sum_{n=1}^nC'_n\cos{n\lambda''}+\sum_{n=1}^nC'_n+[J/(J^2+S^2)^{1/2}] \cr
     &\ln\tan(\pi/4+\phi''/2)
\end{align}{{</math>}}
{{<math>}}\lambda'' = \arctan[\cos i\tan\lambda_t + (1-e^2)\sin i \tan\phi/\cos\lambda_t]\tag{27-34}{{</math>}}
{{<math tag="27-74">}}\lambda_t = \lambda - \lambda_0 + (P_2/P_1)(L+\gamma){{</math>}}
{{<math tag="27-75">}}L = E' - e'\sin E'{{</math>}}
{{<math tag="27-76">}}E' = 2\arctan\{ \tan[(\lambda''-\gamma)/2][(1-e')/(1+e')]^{1/2}\}{{</math>}}
{{<math>}}\phi'' = \arcsin\{[(1-e^2)\cos i \sin \phi - \sin i \cos \phi\sin\lambda_t]/(1-e^2\sin^2\phi)^{1/2}\} \tag{27-36}{{</math>}}
Function $E'$ is called the "eccentric anomaly" along the orbit, and $L$ is the "mean anomaly" or mean longitude of the satellite measured from perigee and directly proportional to time.
Equations {{%eqref 27-34%}}, {{%eqref 27-74%}} through {{%eqref 27-76%}}, and {{%eqref 27-36%}} are solved by special iteration as described for equations {{%eqref 27-8%}} and {{%eqref 27-9%}} in the spherical formulas, except that $\lambda''$ replaces $\lambda'$, and each trial $\lambda''$ is placed in {{%eqref 27-76%}}, from which $E'$ is calculated, then $L$, from {{%eqref 27-75%}}, $\lambda_t$ from {{%eqref 27-74%}}, and another trial $\lambda''$ from {{%eqref 27-34%}}. This cycle is repeated until $\lambda''$ changes by less than the selected convergence. The last value of $\lambda_t$ found is then used in {{%eqref 27-36%}} to find $\phi''$.

Equation {{%eqref 27-67%}} is used to find $S$ for the given $\lambda''$ in equations {{%eqref 27-72%}} and {{%eqref 27-73%}}.

The closed forms of equations {{%eqref 27-72%}} and {{%eqref 27-73%}} are {{%eqref 27-32a%}} and {{%eqref 27-33a%}}, respectively, in which the repeated numerical integration necessitates replacement by the series forms.

As in the case of the circular orbit, it is also desirable to relate these points to the true vertical groundtrack. To find $\phi''$ and $\lambda''$ in terms of $\phi'$ and $\lambda'$, the following series are employed:
{{<math tag="27-77">}}\phi'' = \phi' + \sum_{n=1}^n j_n\sin{n\lambda'}+\sum_{n=1}^n j'_n\cos{n\lambda'}-\sum_{n=1}^nj'_n{{</math>}}
{{<math tag="27-78">}}\lambda'' = \lambda' + \sum_{n=1}^n m_n\sin{n\lambda'} + \sum_{n=1}^n m'_n\cos{n\lambda'}-\sum_{n=1}^n m'_n{{</math>}}
For $\lambda'$ in terms of time $t$ from the initial ascending node,
{{<math tag="27-79">}}\lambda' = \gamma + 2\arctan\{[\tan(E'/2)][(1+e')/(1-e')]^{1/2}\} {{</math>}}
{{<math tag="27-80">}}E' = e'\sin E' + L_0+2\pi t/P_2{{</math>}}
{{<math tag="27-81">}}L_0 = E'_0-e'\sin E'_0{{</math>}}
{{<math tag="27-82">}}E'_0 = -2\arctan\{ \} {{</math>}}
Equation (27-80) requires iteration, converging rapidly by substituting an initial trial $E' = L_0 + 2\pi t/P_2$, in the right side, finding a new E' on the left, substituting it on the right, etc., until sufficient convergence occurs.

The equations for functions of the satellite groundtrack, both forward and inverse, are given here, since some are used in calculating $j_m$ and $m_n$ as well. In
any case $a, e, i, P_2 P_1, \lambda_0 a', e',$ and $\gamma$ must be given. For $\lambda'$ and $\lambda$, if $\phi$ is given:
{{<math tag="27-83">}}\lambda' = \arcsin(\sin\phi_g/\sin i){{</math>}}
{{<math tag="27-84">}}\phi_g = \phi - \arcsin\{a e^2\sin\phi\cos\phi/[R_0(1-e^2\sin^2\phi)^{1/2}] \} {{</math>}}
{{<math tag="27-85">}}R_0 = a'(1-e'\cos E'){{</math>}}
{{<math tag="27-69a">}}E' = 2\arctan\{ \tan[(\lambda'-\gamma)/2][(1-e')/(1+e')]^{1/2}\}{{</math>}}
where $\phi_g$ is the geocentric latitude of the point geocentrically under the satellite, not the geocentric latitude corresponding to the vertical groundtrack latitude $\phi$, and $R_0$ is the radius vector to the satellite from the center of the Earth.

These equations are solved as a group by iteration, inserting a trial $\lambda' = \arcsin(\sin\phi/\sin i)$ in (27-69a), solving (27-85), (27-84), and (27-83) for a new $\lambda'$, etc. Each trial $\lambda'$ must be adjusted for quadrant. If the satellite is traveling north, add 360° times the number of orbits completed at the nearest ascending node (0, 1, 2, etc.). If traveling south, subtract $\lambda'$ from 360° times the number of orbits completed at the nearest descending node (1/2, 3/2, 5/2, etc.). For $\lambda$,
{{<math tag="27-86">}}\lambda = \arctan[(\cos i\sin\lambda')/\cos\lambda']-(P_2/P_1)(L+\gamma)+\lambda_0{{</math>}}
{{<math tag="27-87">}}L = E' - e'\sin E'{{</math>}}
using the $\lambda'$ and $E'$ finally found just above.

If $\lambda$ of a point along the groundtrack is given, to find $\lambda'$ and $\phi$,
{{<math>}}\lambda' = \arctan(\tan\lambda_t/\cos i) \tag{27-19} {{</math>}}
{{<math>}}\lambda_t = \lambda - \lambda_0 + (P_2/P_1)(L+\gamma) \tag{27-74}{{</math>}}
and $L$ is found from (27-87) and (27-69a) above. The four equations are iterated as a group, as above, but the first trial $\lambda'$ and the quadrant adjustments should
follow the procedures listed for equation {{% eqref 27-8 %}}.
{{<math tag="27-88">}}\begin{align}
\phi = &\arcsin (sin i \sin\lambda') + \arcsin \{a e^2 \sin\phi\cos\phi/ \cr
       &[R_0(1-e^2\sin^2\phi)^{1/2}]\}
\end{align}{{</math>}}
where $R_0$ is determined from {{%eqref 27-85%}} and {{%eqref 27-69a %}}, using the $\lambda'$ determined just above. Iteration is involved in (27-88), beginning with a trial $\phi$ of $\arcsin (\sin i \sin \lambda')$.

If $\lambda'$ of a point along the groundtrack is given, \phi$ is found from {{%eqref 27-88%}}, {{%eqref 27-85%}}, and {{%eqref 27-69a%}}, while $\lambda$ is found from {{%eqref 27-86%}}, {{%eqref 27-87%}}, and {{%eqref 27-69a%}}. Only (27-88) requires iteration for these calculations.

_Inverse formulas for the ellipsoidal form_ of the SOM projection, with an orbit of 0.05 eccentricity or less, follow: Given $a, e, i, P_2, P_1, \lambda_0, a', e', \gamma, x,$ and $y$, to find $\phi$ and $\lambda$, the general Fourier and other constants are first determined as described at the beginning of the forward equations for noncircular orbits. Then
{{<math tag="27-89">}}\lambda = \lambda_t - (P_2/P_1)(L+\gamma)+\lambda_0{{</math>}}
where
{{<math>}}\lambda_t = \arctan(V/\cos\lambda'') \tag{27-46}{{</math>}}
{{<math>}}\begin{align}
V = &\{ [1-\sin^2\phi''/(1-e^2)]\cos i \sin\lambda'' - \sin i \sin\phi''[(1+Q\sin^2\lambda'') \cr
    & (1-\sin^2\phi'')-U\sin^2\phi'']^{1/2}\}/[1-\sin^2\phi''(1+U)]
\end{align}\tag{27-47}{{</math>}}
{{<math>}}U = e^2\cos^2 i/(1-e^2)\tag{27-48}{{</math>}}
while $L$ is found from {{%eqref 27-87%}}, $E'$ from {{%eqref 27-76%}}, and $\lambda''$ and $\phi''$ from {{%eqref 27-90%}}
and {{%eqref 27-91%}} below.
{{<math>}}\phi = \arctan\{(\tan\lambda''\cos\lambda_t- \cos i \sin\lambda_t)/[(1-e^2)\sin i] \} \tag{27-49}{{</math>}}
If $i=0$, equation (27-49) is indeterminate, but
{{<math>}}\phi = \arcsin\{\sin\phi''/[(1-e^2)^2+e^2\sin^2\phi'']^{1/2} \}\tag{27-50} {{</math>}}
No iteration is involved in equations (27-45) through (27-50), and the ATAN2 function of Fortran should be used with (27-46), but not (27-49), adding or subtracting
360° to or from $\lambda$ if necessary in (27-45) to place it between longs. 180° E. and W.

Iteration is required to find $\lambda''$ from $x$ and $y$:
{{<math tag="27-90">}}\begin{align}
\lambda'' = &\{x' + (S/J)y' - \sum_{n=1}^n[A_n+(S/J)C_n]\sin{n\lambda''}+\sum_{n=1}^n[A'_n+(S/J)C'_N]\cos{n\lambda''} \cr
            &-\sum_{n=1}^n[A'_n+(S/J)C'_n]\}/[B_1+(S/J)B_2]
\end{align}{{</math>}}
using equations {{%eqref 27-67%}}, {{%eqref 27-92%}}, {{%eqref 27-93%}}, and various constants. Iteration involves substitution of a trial $\lambda'' = x'/B_1$ in the right side, finding a new $\lambda''$ on the left side, etc.

For $\phi''$, the $\lambda''$ just calculated is used in the following equation:
{{<math tag="27-91">}}\begin{align}
\ln\tan(\pi/4+\phi''/2) = &(1+S^2/J^2)^{1/2}(y'-B_2\lambda''-\sum_{n=1}^n C_n\sin{n\lambda''} \cr
                          &+\sum_{n=1}^n C'_n\cos{n\lambda''}-\sum_{n=1}^n C'_n)
\end{align}{{</math>}}
where
{{<math tag="27-92">}}x' = (x/a)H_1-(y/a)S_1{{</math>}}
{{<math tag="27-93">}}y' = (y/a)H_1+(x/a)S_1{{</math>}}
The closed forms of equations (27-90) and (27-91) involve both iteration and repeated numerical integration and are impractical:
{{<math tag="27-90a">}}\begin{align}
x' + (S/J)y' = &\int_0^{\lambda''}[(H J - S^2)/(J^2+S^2)^{1/2}]d\lambda'' \cr
               &+(S/J)\int_0^{\lambda''}[S(H+J)/(J^2+S^2)^{1/2}]d\lambda''
\end{align}{{</math>}}
{{<math tag="27-91a">}}\begin{align}
\ln\tan(\pi/4+\phi''/2) = &[1+(S/J)^2]^{1/2}\{y' - \int_0^{\lambda''}[S(H+J)/ \cr
                          &(J^2+S^2)^{1/2}]d\lambda''\}
\end{align}{{</math>}}
For $\phi'$ and $\lambda'$ in terms of $\phi''$ and $\lambda''$, the same Fourier series developed for equations {{%eqref 27-77%}} and {{%eqref 27-78%}} may be used with reversal of signs, since the correction is so small. That is,
{{<math tag="27-94">}}\phi' = \phi'' - \sum_{n=1}^n j_n\sin{n\lambda''}-\sum_{n=1}^n j'_n\cos{n\lambda''}+\sum_{n=1}^nj'_n{{</math>}}
{{<math tag="27-95">}}\lambda' = \lambda'' - \sum_{n=1}^n m_n\sin{n\lambda''} - \sum_{n=1}^n m'_n\cos{n\lambda''}+\sum_{n=1}^n m'_n{{</math>}}
As with the circular orbit, equations (27-94) and (27-95) are not the exact inverses of {{%eqref 27-77%}} and {{%eqref 27-78%}}, although the correct coefficients may be derived by an analogous numerical integration in terms of $\lambda''$, rather than $\lambda'$.
