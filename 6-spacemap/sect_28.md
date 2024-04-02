---
title: 28. Satellite-Tracking projections
weight: 20
description: Satellite-Tracking projections
mathjax: 3
date: 2022-12-10
lastmod: 2024-03-10
---
# 28. SATELLITE-TRACKING PROJECTIONS
## SUMMARY
- All groundtracks for satellites orbiting the Earth with the same orbital parameters are shown as straight lines on the map. Cylindrical or conical form available.
- Neither conformal nor equal-area. All meridians are equally spaced straight lines, parallel on cylindrical form and
- converging to a common point on conical form. All parallels are straight and parallel on cylindrical form and are concentric circular arcs on conical form. Parallels are unequally spaced.
- Conformality occurs along two chosen parallels. Scale is correct along one of these parallels on the conical form and along both on the cylindrical form.
- Developed 1977 by Snyder.
## HISTORY, FEATURES, AND USAGE
The Landsat mapping system which inspired the development of the Space Oblique Mercator (SOM) projection also inspired the development of a simpler type of projection with a different purpose. While the SOM is used for low-distortion mapping of the strips scanned by the satellite, the Satellite-Tracking projections are designed solely to show the groundtracks for these or other satellites as straight lines, thus facilitating their plotting on a map. As a result, the other features of such maps are minimal, although they may be designed to reduce overall distortion in particular regions.

The writer developed the formulas in 1977 after essentially completing the mathematical development of the formulas for the SOM. The formulas for the Satellite-Tracking projections, with derivations, were published later (Snyder, 1981a). Arnold (1984) further analyzed the distortion. These formulas are confined to circular orbits and the spherical Earth. Because of the small-scale maps resulting, the ellipsoidal forms are hardly justified.

Charts of groundtracks have to date continued to employ the Lambert Conformal Conic projection, on which the groundtracks are slightly curved. The writer is not aware of any use of the new projection, except that a Chinese map of about 1982 claims this feature.

The projections were developed in two basic forms, the cylindrical and the conic, with variations of features within the latter category. The cylindrical form (fig. 48) has straight parallel equidistant meridians and straight parallels of latitude which are perpendicular to the meridians. The parallels of latitude are increasingly spaced away from the Equator, and for Landsat orbits the spacing changes more rapidly than it does on the Mercator projection. The Equator or two parallels of latitude equidistant from the Equator may be made standard, without shape or scale distortion, as on several other cylindrical projections.
{{<figure src="../figure48.png" link="../figure48.png" caption="__FIGURE 48__.&mdash; Cylindrical Satellite-Tracking projection (standard parallels 30° N. and S.). Landsat 1, 2, 3 orbits. Groundtracks (paths 15, 30, 45, etc.) are shown as straight diagonal lines. They continue broken at tracking limits (not shown).">}}

The groundtracks for the various orbits are plotted on the cylindrical form as diagonal equidistant straight lines. The descending orbital groundtracks (north to south) are parallel to each other, and the ascending groundtracks (south to north) are parallel to each other but with a direction in mirror image to that of the descending lines. The ascending and descending groundtracks meet at the northern and southern tracking limits, lats. 80.9° N. and S. for Landsat 1, 2, and 3. The map projection does not extend closer to the poles, although the mapmaker can arbitrarily extend the map using any convenient projection. The extension does
not affect the purpose of the projection.

The groundtracks are not shown at constant scale, just as the straight great-circle paths on the Gnomonic and straight rhumb lines on the Mercator projection are not at constant scale. The complete tracks appear to be a sequence of zig-zag lines, although for Landsat normally only the descending (daylight) groundtracks should be shown to reduce confusion, since interest is normally confined to them.

While the cylindrical form of the Satellite-Tracking projections is of more interest if much of the world is to be shown, the conic form applies to most continents and countries, just as do the usual cylindrical and conic projections. On each conic Satellite-Tracking projection, the meridians are equally spaced straight lines converging at a common point, and the parallels are unequally spaced circular arcs centered on the same point. There are three types of distortion patterns available with the conic form:
1. For the normal map (fig. 49) of a continent or country, there can be conformality or no shape distortion along two chosen parallels, but correct scale at only one of them. The groundtracks break at the closest tracking limit, but the map cannot be extended to the other tracking limit in many cases, since it extends infinitely before reaching that latitude.
2. If one of the parallels with conformality is made a tracking limit, the groundtracks do not break at this tracking limit, since there can be no distortion there (fig. 50).
3. If both parallels with conformality are made the same, the projection has just one standard parallel. If this parallel is made the tracking limit, the conic projection becomes the closest approximation to an azimuthal projection (fig. 51). For Landsat orbits, the cone constant of such a limiting projection is about 0.96, so the developed cone is about 4 percent less than a full circle, and the projection somewhat resembles a polar Gnomonic projection. With orbits of lower inclination, the approach to azimuthal becomes less.

For each of the conics, the straight groundtracks are equidistant, they have constant inclinations to each meridian being crossed at a given latitude on a given map, and they are not at constant scale. They are also all tangent to a circle slightly smaller than the latitude circle for the tracking limit in case 1 above, and tangent to the tracking limit itself in cases 2 and 3. As in the case of the cylindrical form, any extension of the map from the tracking limit to a pole is cosmetic and arbitrary, since the groundtracks do not pass through this region.
{{<figure src="../figure49.png" link="../figure49.png" caption="__FIGURE 49__.&mdash; Conic Satellite-Tracking projection (conformality at lats. 45° and 70° N. ) . Landsat 1, 2, 3 orbits. Groundtracks (paths 15, 30, 45, etc.) are shown as diagonal straight lines. They continue broken (not shown) at tracking limit, the smallest incomplete circle. The complete circle is the circle of tangency.">}}

{{<figure src="../figure50.png" link="../figure50.png" caption="__FIGURE 50__.&mdash; Conic Satellite-Tracking projection (conformality at lats. 45° and 80.9° N.). Landsat 1,2,3 orbits. Diagonal groundtracks (paths 15,60,106,e tc.) are straight, unbroken even at the tracking limit, which is the same as the circle of tangency (inner circle).">}}

{{<figure src="../figure51.png" link="../figure51.png" caption="__FIGURE 51__.&mdash; Conic Satellite-Tracking projection (standard parallel 80.9° N.). Landsat 1, 2, 3 orbits. Groundtracks are as described on Fig. 50. The nearest approach to an azimuthal projection for these orbits. Inner circle is tracking limit and circle of tangency.">}}
## FORMULAS FOR THE SPHERE
_Forward formulas_ (see p. 360 for numerical examples): For the Cylindrical Satellite-Tracking projection, $R, i, P_2, P_1, \lambda_0, \phi_1, \phi,$ and $\lambda$ must be given, where
{{<math>}}\begin{align}
R\quad =&\;\text{radius of the globe at the scale of the map.} \cr
i\quad =&\;\text{angle of inclination between the plane of the Earth's Equator and the}\cr
        &\quad\text{plane of the satellite orbit, measured counterclockwise from the Equator} \cr
        &\quad\text{to the orbital plane at the ascending node (99.092° for Landsat l, 2, 3;} \cr
        &\quad\text{98.20° for Landsat 4, 5).} \cr
P_2\quad=&\;\text{time required for revolution of the satellite (103.267 min for Landsat 1,} \cr
         &\quad\text{2, 3; 98.884 min. for Landsat 4, 5).} \cr
P_1\quad=&\;\text{length of Earth's rotation with respect to the precessed ascending node.} \cr
         &\quad\text{For Landsat, the satellite orbit is Sun-synchronous; that is, it is always}\cr
         &\quad\text{the same with respect to the Sun, equating $P_1$ to the solar day (1,440} \cr
         &\quad\text{min). The ascending node is the point on the satellite orbit at which the}\cr
         &\quad\text{satellite crosses the Earth's equatorial plane in a northerly direction.}\cr
\lambda_0=&\;\text{central meridian.}\cr
\phi_1=&\;\text{standard parallel (N. and S.).}\cr
(\phi,\lambda)\,=&\;\text{geodetic latitude and longitude of point to be plotted on map.}
\end{align}{{</math>}}
{{<math tag="28-1">}}F'_1 = [(P_2/P_1)\cos^2\phi_1-\cos i]/(\cos^2\phi_1-\cos^2 i)^{1/2}{{</math>}}
{{<math tag="28-1a">}}F' = [(P_2/P_1)\cos^2\phi-\cos i]/(\cos^2\phi-\cos^2 i)^{1/2}{{</math>}}
{{<math tag="28-2">}}\lambda' = -\arcsin(\sin\phi/\sin i){{</math>}}
{{<math tag="28-3">}}\lambda_t = \arctan(\tan\lambda'\cos i){{</math>}}
{{<math tag="28-4">}}L = \lambda_t - (P_2/P_1)\lambda'{{</math>}}
{{<math tag="28-5">}}x = R(\lambda-\lambda_0)\cos\phi_1{{</math>}}
{{<math tag="28-6">}}y = R L\cos\phi_1/F'_1{{</math>}}
{{<math tag="28-7">}}k = \cos\phi_1/\cos\phi{{</math>}}
{{<math tag="28-8">}}h = k F'/F'_1{{</math>}}
Geometrically, $F'$ is the tangent of the angle on the globe between the groundtrack and the meridian at latitude $\phi$, and $F'_1$ is the tangent of this angle both on the globe and on the map at latitude $\phi_1$. Scale factors $h$ and $k$ apply along the meridian and parallel, respectively. If the latitude is closer to either pole than the corresponding tracking limit, equation (28-2) cannot be solved, and the point cannot be mapped using these formulas. The X axis lies along the Equator, x increasing easterly, and the Y axis lies along the central meridian, y increasing northerly. If $(\lambda-\lambda_0)$ lies outside the range $\pm180°$, 360° should be added or subtracted so it will fall inside the range.

_For the Conic Satellite-Tracking projection_ with two parallels having conformality, $R, i, P_2, P_1, \lambda_0, \phi_0, \phi_1, \phi_2, \phi,$ and $\lambda$ must be given, where the symbols are defined above, except that $\phi_2$ is the other parallel of conformality, but without true scale, and $\phi_0$ is the latitude crossing the central meridian at the desired origin of rectangular coordinates. For constants which apply to the entire map,
{{<math tag="28-9">}}F_n = \arctan\{[(P_2/P_1)\cos^2\phi_n-\cos i]/(\cos^2\phi_n-\cos^2 i)^{1/2}\}{{</math>}}
{{<math tag="28-2a">}}\lambda'_n = -\arcsin(\sin\phi_n/\sin i){{</math>}}
{{<math tag="28-3a">}}\lambda_{t_n} = \arctan(\tan\lambda'_n\cos i){{</math>}}
{{<math tag="28-4a">}}L_n = \lambda_{t_n} - (P_2/P_1)\lambda'_n{{</math>}}
{{<math tag="28-10">}}n = (F_2-F_1)/(L_2-L_1){{</math>}}
{{<math tag="28-11">}}s_0 = F_1-n L_1{{</math>}}
{{<math tag="28-12">}}\rho_0 = R\cos\phi_1\sin F_1/[n\sin(n l_0+s_0)]{{</math>}}
in which subscript $n$ in equations (28-9) and (28-2a) through (28-4a) is made 0, 1, or 2 as required for (28-10) through (28-12), and subscript $n$ is omitted for calculating $F$ and $L$ for formulas below.

For plotting each point $(\phi, \lambda)$,
{{<math tag="28-1">}}\rho=R\cos\phi_1\sin F_1/[n\sin(n L+s_0)]{{</math>}}
{{<math tag="14-4">}} \theta = n(\lambda-\lambda_0) {{</math>}}
{{<math tag="14-1">}} x=\rho\sin\theta {{</math>}}
{{<math tag="14-2">}} y=\rho_0-\rho\cos\theta {{</math>}}
If $n$ is positive and $L$ is equal to or less than $(-s_0/n)$, or if $n$ is negative and $L$ is equal to or greater than $(-s_0/n)$, the point cannot or should not be plotted. The limiting latitude $\phi$ for $L = (-s_0/n)$ may be found using {{%eqref 28-20%}} through {{%eqref 28-22%}} below.

In addition, $\rho_s$ the radius of the circle to which groundtracks are tangent on the map, and scale factors h and k, defined above, are found as follows:
{{<math tag="28-14">}}\rho_s = R \cos\phi_1(\sin F_1)/n{{</math>}}
{{<math tag="28-15">}}k = \rho n /(R\cos\phi){{</math>}}
{{<math tag="28-16">}}h = k\tan F/\tan(n L + s_0){{</math>}}
Radius $\rho_s$, may be inserted into equations (14-1) and (14-2) in place of $\rho$ for rectangular coordinates. The Y axis lies along the central meridian $\lambda_0$, y increasing northerly, and the X axis intersects perpendicularly at $\phi_0$, x increasing easterly. Geometrically, $F_1$ is the inclination of the groundtrack to the meridian at latitude and $n$ is the cone constant.

For the conic projection with one standard parallel, $\phi_1 = \phi_2$ but equation {{%eqref 28-10%}} is indeterminate. The following may be used in its place:
{{<math tag="28-17">}}\begin{align}
n = &\sin\phi_1[(P_2/P_1)(2\cos^2 i-\cos^2\phi_1)-\cos i]/\{[(P_2/P_1)\cos^2\phi_1-\cos i] \cr
    &[(P_2/P_1)[(P_2/P_1)\cos^2\phi_1-2\cos i]+1]\}
\end{align}{{</math>}}
For the conic projection with one standard parallel which is equal to the upper tracking limit, equation (28-17) may be considerably simplified to the following:
{{<math tag="28-18">}}n=\sin i/[(P_2/P_1)\cos i -1]^2{{</math>}}
Other equations for the conic form remain the same.

_Inverse Formulas_ (see p. 362 for numerical examples):

For the cylindrical form, the same constants must be given as those listed for the forward formulas ($R, i, P_2, P_1, \lambda_0,$ and $\phi_1$), and $F'_1$ must be calculated from equation {{%eqref 28-1%}}. For a given $(x, y)$, to find $(\phi, \lambda)$:
{{<math tag="28-19">}}L = y F'_1/(R\cos\phi_1){{</math>}}
{{<math tag="28-20">}}\lambda_t = L+(P_2/P_1)\lambda'{{</math>}}
{{<math tag="28-21">}}\lambda' = \arctan(\tan\lambda_t/\cos i){{</math>}}
{{<math tag="28-22">}}\phi = -\arcsin(\sin\lambda'/\sin i){{</math>}}
{{<math tag="28-23">}}\lambda = \lambda_0 + x/(R\cos\phi_1){{</math>}}
Equations (28-20) and (28-21) must be iterated as a pair, using (-90°) as the first trial $\lambda'$ in equation (28-20), solving for $\lambda_t$, inserting it into (28-21), finding a new $\lambda'$ without using the equivalent of the Fortran ATAN2 function, and using it in (28-20), until $\lambda'$ changes by a negligible amount. This final $\lambda'$ is used in (28-22) to find $\phi$.

A generally faster solution of (28-20) and (28-21) involves the use of a Newton-Raphson iteration in place of those two equations, although equations are longer:
{{<math tag="28-24">}}A = \tan[L+(P_2/P_1)\lambda']/\cos i{{</math>}}
{{<math tag="28-25">}}\Delta\lambda' = -(\lambda'-\arctan A)/[1-(A^2+1/\cos^2 i)(P_2/P_1)\cos i/(A^2+1)]{{</math>}}
The first trial $\lambda'$ is again (-90°) in equation (28-24) and (28-25). The adjustment $\Delta\lambda'$ is added to each successive trial until reasonable convergence occurs.

For any of the _conic_ forms, the initial constants $R, i, P_2, P_1, \lambda_0, \phi_0,$ and $\phi_1$ alone or both $\phi_1$, and $\phi_2$ must be given. In addition, all constants in equations {{%eqref 28-9%}} through {{%eqref 28-12%}}, {{%eqref 28-2a%}} through {{%eqref 28-4a%}}, and {{%eqref 28-17%}} or {{%eqref 28-18%}} if necessary must be calculated. For a given $(x, y)$, to find $(\phi, \lambda)$,
{{<math tag="14-10">}} \rho = \pm[x^2+(\rho_0-y)^2]^{1/2} \quad \text{,taking the sign of n}{{</math>}}
{{<math tag="14-11">}} \theta = \arctan[x/(\rho_0-y)] {{</math>}}
{{<math tag="28-26">}}L = [\arcsin(R\cos\phi_1\sin F_1/(\rho n))-s_0]/n{{</math>}}
From $L, \lambda'$ and then $\phi$ are found using equations {{%eqref 28-20%}} through {{%eqref 28-22%}}, or {{%eqref 28-24%}}, {{%eqref 28-25%}}, and {{%eqref 28-22%}}, with iteration as described above. Then
{{<math tag="14-9">}} \lambda = \lambda_0 + \theta/n {{</math>}}
Sample coordinates for several of the Satellite-Tracking projections are shown in tables 38 through 40.
{{<figure src="../table38.png" link="../table38.png" caption="__TABLE 38__.&mdash; Cylindrical Satellite-Tracking projection: Rectangular coordinates">}}
{{<figure src="../table39.png" link="../table39.png" caption="__TABLE 39__.&mdash; Conic Satellite-Tracking projections with Two conformal parallels: Polar coordinates">}}
{{<figure src="../table40.png" link="../table40.png" caption="__TABLE 40__.&mdash; Near-Azimuthal Conic Satellite-Tracking projection: Polar coordinates">}}
