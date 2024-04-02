---
title: 14. Albers Equal-Area Conic projection
weight: 10
description: Albers Equal-Area Conic projection
mathjax: 3
date: 2022-08-27
lastmod: 2024-03-10
---
# 14. ALBERS EQUAL-AREA CONIC PROJECTION

## SUMMARY
- Conic.
- Equal-Area.
- Parallels are unequally spaced arcs of concentric circles, more closely spaced at the north and south edges of the map.
- Meridians are equally spaced radii of the same circles, cutting parallels at right angles.
- There is no distortion in scale or shape along two standard parallels, normally, or along just one.
- Poles are arcs of circles.
- Used for equal-area maps of regions with predominant east-west expanse, especially the conterminous United States.
- Presented by Albers in 1805.

## HISTORY
One of the most commonly used projections for maps of the conterminous United States is the equal-area form of the conic projection, using two standard parallels. This projection was first presented by Heinrich Christian Albers (1773-1833), a native of Luneburg, Germany, in a German periodical of 1805 (Albers, 1805; Bonacker and Anliker, 1930). The Albers projection was used for a German map of Europe in 1817, but it was promoted for maps of the United States in the early part of the 20th century by Oscar S. Adams of the Coast and Geodetic Survey as "an equal-area representation that is as good as any other and in many respects superior to all others" (Adams, 1927, p. 1).
## FEATURES AND USAGE
The Albers is the projection exclusively used by the USGS for sectional maps of all 50 States of the United States in the National Atlas of 1970, and for other U.S. maps at scales of 1:2,500,000 and smaller. The latter maps include the base maps of the United States issued in 1961, 1967, and 1972, the Tectonic Map of the United States (1962), and the Geologic Map of the United States (1974), all at 1:2,500,000. The USGS has also prepared a U.S. base map at 1:3,168,000 (1 inch = 50 miles).

Like other normal conics, the Albers Equal-Area Conic projection (fig. 20) has concentric arcs of circles for parallels and equally spaced radii as meridians. The parallels are not equally spaced, but they are farthest apart in the latitudes between the standard parallels and closer together to the north and south. The pole is not the center of the circles, but is normally an arc itself.
<a name="fig20"></a>
{{<figure src="../figure20.png" link="../figure20.png" caption="__FIGURE 20__.&mdash; Albers Equal-Area Conic projection, with standard parallels 20° and 60° N. This illustration includes all of North America to show the change in spacing of the parallels. When used for maps of the 48 conterminous States standard parallels are 29.5° and 45.5° N" alt="Albers Equal-Area Conic projection, with standard parallels 20° and 60° N">}}

If the pole is taken as one of the two standard parallels, the Albers formulas reduce to a limiting form of the projection called Lambert's Equal-Area Conic (not discussed here, and not to be confused with his Conformal Conic, to be discussed later). If the pole is the only standard parallel, the Albers formulas simplify to provide the polar aspect of the Lambert Azimuthal Equal-Area (discussed later). In both of these limiting cases, the pole is a point. If the Equator is the one standard parallel, the projection becomes Lambert's Cylindrical Equal-Area (discussed earlier), but the formulas must be modified. None of these extreme cases applies to the normal use of the Albers, with standard parallels in the temperate zones, such as usage for the United States.

Scale along the parallels is too small between the standard parallels and too large beyond them. The scale along the meridians is just the opposite, and in fact the scale factor along meridians is the reciprocal of the scale factor along parallels, to maintain equal area. An important characteristic of all normal conic projections
is that scale is constant along any given parallel.

To map a given region, standard parallels should be selected to minimize variations in scale. Not only are standard parallels correct in scale along the parallel; they are correct in every direction. Thus, there is no angular distortion, and conformality exists along these standard parallels, even on an equal-area projection. They may be on opposite sides of, but not equidistant from, the Equator. Deetz and Adams (1934, p. 79, 91) recommended in general that standard parallels be placed one-sixth of the displayed length of the central meridian from the northern and southern limits of the map. Hinks (1912, p. 87) suggested one-seventh instead of one-sixth. Others have suggested selecting standard parallels of conics so that the maximum scale error (1 minus the scale factor) in the region between them is equal and opposite in sign to the error at the upper and lower parallels, or so that the scale factor at the middle parallel is the reciprocal of that at the limiting parallels. Tsinger in 1916 and Kavrayskiy in 1934 chose standard parallels so that least-square errors in linear scale were minimal for the actual land or country being displayed on the map. This involved weighting each latitude in accordance with the land it contains (Maling, 1960, p. 263-266).

The standard parallels chosen by Adams for Albers maps of the conterminous United States are lats. 29.5&deg; and 45.5&deg;N. These parallels provide "for a scale error slightly less than 1 per cent in the center of the map, wit.h a maximum of 1¼ per cent along the northern and southern borders" (Deetz and Adams, 1934, p. 91). For maps of Alaska, the chosen standard parallels are lats. 55&deg; and 65&deg;N., and for Hawaii, lats. 8&deg; and 18&deg;N. In the latter case, both parallels are south of the islands, but they were chosen to include maps of the more southerly Canal Zone and especially the Philippine Islands. These parallels apply to all maps prepared by the USGS on the Albers projection, originally using Adams's published tables of coordinates for the Clarke 1866 ellipsoid (Adams, 1927).

Without measuring the spacing of parallels along a meridian, it is almost impossible to distinguish an unlabeled Albers map of the United States from other conic forms. It is only when the projection is extended considerably north and south, well beyond the standard parallels, that the difference is apparent without scaling.

Since meridians intersect parallels at right angles, it may at first seem that there is no angular distortion. However, scale variations along the meridians cause some angular distortion for any angle other than that between the meridian and parallel, except at the standard parallels.

## FORMULAS FOR THE SPHERE
The Albers Equal-Area Conic projection may be constructed with only one standard parallel, but it is nearly always used with two. The forward formulas for the sphere are as follows, to obtain rectangular or polar coordinates, given $R, \phi_1, \phi_2, \phi_0, \lambda_0, \phi$, and $\lambda$ (see [numerical examples]({{<ref "aea#sphere">}})):
{{<math tag="14-1">}} x=\rho\sin\theta {{</math>}}
{{<math tag="14-2">}} y=\rho_0-\rho\cos\theta {{</math>}}
where
{{<math tag="14-3">}} \rho = R (C-2n\sin\phi)^{1/2}/n {{</math>}}
{{<math tag="14-4">}} \theta = n(\lambda-\lambda_0) {{</math>}}
{{<math tag="14-3a">}} \rho_0 = R(C-2n\sin\phi_0)^{1/2}/n {{</math>}}
{{<math tag="14-5">}} C = \cos^2\phi_1+2n\sin\phi_1 {{</math>}}
{{<math tag="14-6">}} n = (\sin\phi_1 + \sin\phi_2)/2 {{</math>}}
{{<math>}}
  \eqalign{
  \phi_0, \lambda_0 =& \text {the latitude and longitude, respectively,} \cr
                     & \text{for the origin of the rectangular coordinates.}
  }
{{</math>}}
{{<math>}}
  \phi_1,\phi_2= \text{standard parallels.}
{{</math>}}

The Y axis lies along the central meridian $\lambda_0$, $y$ increasing northerly. The X axis intersects perpendicularly at $\phi_0$, $x$ increasing easterly. If $(\lambda - \lambda_0)$ exceeds the range $\pm180°$, 360° should be added or subtracted to place it within the range. Constants $n, C$, and $\rho_0$ apply to the entire map, and thus need to be calculated only once. If only one standard parallel 4, is desired (or if $\phi_1=\phi_2$), $n=\sin\phi_1$. By contrast, a geometrically secant cone requires a cone constant $n$ of $\sin[(\phi_1+\phi_2)/2]$, slightly but distinctly different from equation (14-6). If the projection is designed primarily for the Northern Hemisphere, $n$ and $\rho$ are positive. For the Southern Hemisphere, they are negative. The scale along the meridians, using equation [(4-4)]({{<relref "sect_4#4-4">}}),
{{<math tag="14-7">}} h=\cos\phi/(C-2n\sin\phi)^{1/2}  {{</math>}}
If equation [(4-5)]({{<relref "sect_4#4-5">}}) is used, $k$ will be found to be the reciprocal of $h$, satisfying the requirement for an equal-area projection when meridians and parallels intersect at right angles. The maximum angular deformation may be calculated from equation [(4-9)]({{<relref "sect_4#4-9">}}). It may be seen from equation (14-7), and indeed from equations [(4-4)]({{<relref "sect_4#4-4">}}) and [(4-5)]({{<relref "sect_4#4-5">}}), that distortion is strictly a function of latitude, and not of longitude. This is true of any regular conic projection.

_For the inverse formulas_ for the sphere, given $R, \phi_1, \phi_2, \phi_0, \lambda_0, x$, and $y$: $n, C$ and $\rho$, are calculated from equations (14-6), (14-5), and (14-3a), respectively.
Then,
{{<math tag="14-8">}} \phi = \arcsin\{[C-(\rho n/R)^2]/(2n)\} {{</math>}}
{{<math tag="14-9">}} \lambda = \lambda_0 + \theta/n {{</math>}}
where
{{<math tag="14-10">}} \rho = [x^2+(\rho_0-y)^2]^{1/2} {{</math>}}
{{<math tag="14-11">}} \theta = \arctan[x/(\rho_0-y)] {{</math>}}
Note: to use the ATAN2 Fortran function, if $n$ is negative, the signs of $x, y$, and $\rho_0$ (given a negative sign by equation (14-3a)) must be reversed before inserting them in equation (14-11).

## FORMULAS FOR THE ELLIPSOID
The formulas displayed by Adams and most other writers describing the ellipsoidal form include series, but the equations may be expressed in closed forms which are suitable for programming, and involve no numerical integration or iteration in the forward form. Nearly all published maps of the United States based on the Albers use the ellipsoidal form because of the use of tables for the original base maps. (Adams, 1927, p. 1-7; Deetz and Adams, 1934, p. 93-99; Snyder, 1979a, p. 71). Given $a, e, \phi_1, \phi_2, \phi_0, \lambda_0, \phi$, and $\lambda$ (see [numerical examples]({{<ref "aea#ellipsoid">}})):
{{<math>}} x=\rho\sin\theta \tag{14-1} {{</math>}}
{{<math>}} y=\rho_0-\rho\cos\theta \tag{14-2} {{</math>}}
where
{{<math tag="14-12">}} \rho = a(C-n q)^{1/2}/n {{</math>}}
{{<math>}} \theta = n(\lambda-\lambda_0) \tag{14-4}{{</math>}}
{{<math tag="14-12a">}} \rho_0 = a(C-n q_0)^{1/2}/n {{</math>}}
{{<math tag="14-13">}} C = m_1^2+nq_1 {{</math>}}
{{<math tag="14-14">}} n = (m_1^2-m_2^2)/(q_2-q_1) {{</math>}}
{{<math tag="14-15">}} m = \cos\phi/(1-e^2\sin^2\phi)^{1/2} {{</math>}}
{{<math tag="3-12">}} q= (1-e^2)\{ \sin{\phi}/(1-e^2\sin^2{\phi})-(1/(2e))\ln[(1-e\sin{\phi})/(1+e\sin{\phi})]\} {{</math>}}
with the same subscripts 1, 2, or none applied to $m$ and $\phi$ in equation (14-15), and 0, 1, 2, or none applied to q and $\phi$ in equation (3-12), as required by equations (14-12), (14-12a), (14-13), (14-14), and (14-17). As with the spherical case, $\rho$ and $n$ are negative, if the projection is centered in the Southern Hemisphere. For the scale factor, modifying [(4-25)]({{<relref "sect_4#4-25">}}):
{{<math tag="14-16">}}k = \rho n/a m{{</math>}}
{{<math tag="14-17">}}\  = (C-n q)^{1/2}/m{{</math>}}
{{<math tag="14-18">}}h = 1/k{{</math>}}
While many ellipsoidal equations apply to the sphere if $e$ is made zero, equation (3- 12) becomes indeterminate. Actually, if $e = 0, q= 2\sin\phi$. If $\phi_1 = \phi_2$, equation (14-14) is indeterminate regardless of $e$, but $n = \sin\phi_1$. The axes and limitations on $(\lambda-\lambda_0)$ are the same as those stated for the spherical formulas. Here, too, constants $n, C$, and $\rho_0$ need to be determined just once for the entire map.

_For the inverse formulas_ for the ellipsoid, given $a, e, \phi_1, \phi_2. \phi_0, \lambda_0, x$, and $y$:
$n, C$, and $\rho_0$ are calculated from equations {{% eqref "14-14"%}}, {{% eqref "14-13"%}}, and {{% eqref "14-12a"%}}; respectively. Then,
{{<math tag="3-16">}} \phi = \phi + \frac{(1-e^2\sin^2{\phi})^2}{2\cos{\phi}}\left[ \frac{q}{1-e^2} - \frac{\sin{\phi}}{1-e^2\sin^2{\phi}} + 
        \frac 1{2e} \ln{\left( \frac{1-e\sin{\phi}}{1+e\sin{\phi}}\right)}\right] {{</math>}}
where
{{<math tag="14-19">}}
  q = (C-\rho^2n^2/a^2)/n
{{</math>}}
{{<math tag="14-10">}}
  \rho = [x^2+(\rho_0-y)^2]^{1/2}
{{</math>}}
{{<math tag="14-11">}}
  \theta = \arctan[x/(\rho_0-y)]
{{</math>}}
To use the Fortran ATAN2 function, if $n$ is negative, the signs of $x, y$, and $\rho$, must be reversed before insertion into equation (14-11). Equation (3-16) involves iteration by first trying $\phi = \arcsin (q/2)$ on the right side, calculating $\phi$ on the left side, substituting this new $\phi$ on the right side, etc., until the change in $\phi$ is negligible. If
{{<math tag="14-20">}} q=\pm\{1-[(1-e^2)/2e]\ln[(1-e)/(1+e)]\}  {{</math>}}
iteration does not converge, but $\phi = \pm90°$, taking the sign of $q$.

Instead of the iteration, a series may be used for the inverse ellipsoidal formulas:
{{<math tag="3-18">}} \begin{align}
    \phi = \beta &+ (e^2/3+31e^4/180+517e^6/5040+\dots)\sin{2\beta} \\
                 &+ (23e^4/360+251e^6/3780+\dots)\sin{4\beta} \\
                 &+ (761e^6/45360+\dots)\sin{6\beta}+\dots \end{align}
{{</math>}}
where $\beta$, the authalic latitude, adapting equations [(3-11)]({{<relref "sect_3#3-11">}}) and [(3-12)]({{<relref "sect_3#3-12">}}), is found thus:
{{<math tag="14-21">}} \beta=\arcsin(q/\{1-[(1-e^2)/2e]\ln[(1-e)/(1+e)]\}) {{</math>}}
but $q$ is still found from equation (14-19). Equations {{% eqref "14-9"%}}, {{% eqref "14-10"%}}, and {{% eqref "14-11"%}} also apply unchanged. For improved computational efficiency using the series, see p. 19.

Polar coordinates for the Albers Equal-Area Conic are given for both the spherical and ellipsoidal forms, using standard parallels of lat. 29.5° and 45.5° N. (table 15). A graticule extended to the North Pole is shown in figure 20.
{{<figure src="../table15.png" link="../table15.png" caption="__TABLE 15__.&mdash;Albers Equal-Area Conic projection: Polar coordinates" alt="Albers Equal-Area Conic projection: Polar coordinates">}}

To convert coordinates measured on an existing map, the user may choose any meridian for $\lambda_0$. and therefore for the Y axis, and any latitude for $\phi_0$. The X axis then is placed perpendicular to the Y axis at $\phi_0$.
