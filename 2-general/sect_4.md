---
title: 4. Scale Variation and Angular Distortion
weight: 40
description: Scale variation and angular distortion
mathjax: 3
date: 2022-08-10
lastmod: 2024-03-10
---


# 4. SCALE VARIATION AND ANGULAR DISTORTION
Since no map projection maintains correct scale throughout, it is important to determine the extent to which it varies on a map. On a world map, qualitative distortion is evident to an eye familiar with maps, after noting the extent to which landmasses are improperly sized or out of shape, and the extent to which meridians and parallels do not intersect at right angles, or are not spaced uniformly along a given meridian or given parallel. On maps of countries or even of continents, distortion may not be evident to the eye, but it becomes apparent upon careful measurement and analysis.

## TISSOT'S INDICATRIX
In 1859 and 1881, Nicolas Auguste Tissot published a classic analysis of the distortion which occurs on a map projection (Tissot, 1881; Adams, 1919, p. 153-163; Maling, 1973, p. 64-67). The intersection of any two lines on the Earth is represented on the flat map with an intersection at the same or a different angle. At almost every point on the Earth, there is a right angle intersection of two lines in some direction (not necessarily a meridian and a parallel) which are also shown at right angles on the map. All the other intersections at that point on the Earth will not intersect at the same angle on the map, unless the map is conformal, at least at that point. The greatest deviation from the correct angle is called $\omega$, the maximum angular deformation. For a conformal map, $\omega$ is zero. (In some texts, $2\omega$ is used rather than $\omega$.)

Tissot showed this relationship graphically with a special ellipse of distortion called an indicatrix. An infinitely small circle on the Earth projects as an infinitely small, but perfect, ellipse on any map projection. If the projection is conformal, the ellipse is a circle, an ellipse of zero eccentricity. Otherwise, the ellipse has a major axis and minor axis which are directly related to the scale distortion and to the maximum angular deformation.
{{<figure src="../figure3.png" link="../figure3.png" caption="__FIGURE 3__.&mdash; Tissot's Indicatrix. An infinitely small circle on the Earth (A) appears as an ellipse on a typical map (B). On a conformal map, (B) is a circle of the same or of a different size.">}}

In figure 3, the left-hand drawing shows a circle representing the infinitely small circular element, crossed by a meridian $\lambda$ and parallel $\phi$ on the Earth. The right-hand drawing shows this same element as it may appear on a typical map projection. For general purposes, the map is assumed to be neither conformal nor equal-area. The meridian and parallel may no longer intersect at right angles, but there is a pair of axes which intersect at right angles on both Earth (AB and CD) and map (A'B' and C'D'). There is also a pair of axes which intersect at right angles on the Earth (EF and GH), but at an angle on the map (E'F' and G'H') farthest from a right angle. The latter case has the maximum angular deformation $\omega$. The orientation of these axes is such that $\mu +\mu' = 90&deg; $, or, for small distortions, the lines fall about halfway between A'B' and C'D'. The orientation is of much less interest than the size of the deformation. If $a$ and $b$, the major and minor semiaxes of the indicatrix, are known, then
{{<math tag="4-1">}} \sin(\omega/2) = |a-b|/(a+b) {{</math>}}
If lines $\lambda$ and $\phi$ coincide with $a$ and $b$, in either order, as in cylindrical and conic projections, the calculation is relatively simple, using equations [(4-2)](#4-2) through [(4-6)](#4-6) given below.

Scale distortion is most often calculated as the ratio of the scale along the meridian or along the parallel at a given point to the scale at a standard point or along a standard line, which is made true to scale. These ratios are called "scale factors." That along the meridian is called $h$ and along the parallel, $k$. The term "scale error" is frequently applied to $(h-1)$ and $(k-1)$. If the meridians and parallels intersect at right angles, coinciding with a and b in figure 3, the scale factor in any other direction at such a point will fall between $h$ and $k$. Angle $\omega$ may be calculated from equation [(4-1)](#4-1), substituting $h$ and $k$ in place of $a$ and $b$. In general, however, the computation of $\omega$ is much more complicated, but is important for knowing the extent of the angular distortion throughout the map.

The formulas are given here to calculate $h$, $k$, and $\omega$ but the formulas for $h$ and $k$ are applied specifically to all projections for which they are deemed useful as the projection formulas are given later. Formulas for $\omega$ for specific projections have generally been omitted.

Another term occasionally used in practical map projection analysis is "convergence" or "grid declination." This is the angle between true north and grid north (or direction of the Y axis). For regular cylindrical projections this is zero, for regular conic and polar azimuthal projections it is a simple function of longitude, and for other projections it may be determined from the projection formulas by calculus from the slope of the meridian $({\mathrm{d}x}/{\mathrm{d}y})$ at a given latitude. It is used primarily by surveyors for fieldwork with topographic maps. Convergence is not discussed further in this work.

## DISTORTION FOR PROJECTIONS OF THE SPHERE
The formulas for distortion are simplest when applied to regular cylindrical, conic (or conical), and polar azimuthal projections of the sphere. On each of these types of projections, scale is solely a function of the latitude.

Given the formulas for rectangular coordinates x and y of any cylindrical projection as functions solely of longitude $\lambda$ and latitude $\phi$, respectively,
{{<math tag="4-2">}} h = \mathrm{d}y/(R\mathrm{d}\phi) {{</math>}}
{{<math tag="4-3">}} k = \mathrm{d}x/(R\cos{\phi}\mathrm{d}\lambda) {{</math>}}
Given the formulas for polar coordinates $\rho$ and $\theta$ of any conic projection as functions solely of $\phi$ and $\lambda$, respectively, where $n$ is the cone constant or ratio of $\theta$ to $(\lambda - \lambda_0)$,
{{<math tag="4-4">}} h = -\mathrm{d}\rho/(R\mathrm{d}\phi) {{</math>}}
{{<math tag="4-5">}} k = n\rho/(R\cos{\phi}) {{</math>}}
    {{<figure src="../figure4.png" link="../figure4.png">}}
    {{<figure src="../figure4-a.png" link="../figure4-a.png">}}
    {{<figure src="../figure4-b.png" link="../figure4-b.png" caption="__FIGURE 4__.&mdash; Distortion patterns on common conformal map projections. The Transverse Mercator and the Stereographic are shown with reduction in scale along the central meridian or at the center of projection, respectively. If there is no reduction, there is a single line of true scale along the central meridian on the Transverse Mercator and only a point of true scale at the center of the Stereographic. The illustrations are conceptual rather than precise, since each base map projection is an identical conic." >}}

Given the formulas for polar coordinates $\rho$ and $\theta$ of any polar azimuthal projection as functions solely of $\phi$ and $\lambda$, respectively, equations [(4-4)](#4-4) and [(4-5)](#4-5) apply, with $n$ equal to 1.0:
$$ h = -\mathrm{d}\rho/(R\mathrm{d}\phi) \tag{4-4} $$
{{<math tag="4-6">}} k = \rho/(R\cos{\phi}) {{</math>}}
Equations [(4-4)](#4-4) and [(4-6)](#4-6) may be adapted to any azimuthal projection centered on a point other than the pole. In this case $h'$ is the scale factor in the direction of a straight line radiating from the center, and $k'$ is the scale factor in a direction perpendicular to the radiating line, all at an angular distance $c$ from the center:
{{<math tag="4-7">}} h' = \mathrm{d}\rho/(R\mathrm{d}c) {{</math>}}
{{<math tag="4-8">}} k' = \rho/(R\sin{c}) {{</math>}}

An analogous relationship applies to scale factors on oblique cylindrical and conic projections.

For any of the pairs of equations from [(4-2)](#4-2) through [(4-8)](#4-8), the maximum angular deformation $\omega$ at any given point is calculated simply, as stated above,
{{<math tag="4-9">}} \sin{(\omega/2)} = |h-k|/(h+k) {{</math>}}
where $|h-k|$ signifies the absolute value of $(h-k)$, or the positive value without regard to sign. For equations [(4-7)](#4-7) and [(4-8)](#4-8), $h'$ and $k'$ are used in [(4-9)](#4-9) instead of $h$ and $k$, respectively. In figure 4, distortion patterns are shown for three conformal projections of the United States, choosing arbitrary lines of true scale.

For the general case, including all map projections of the sphere, rectangular coordinates $x$ and $y$ are often both functions of both $\phi$ and $\lambda$, so they must be partially differentiated with respect to both $\phi$ and $\lambda$, holding $\lambda$ and $\phi$, respectively, constant. Then,
{{<math tag="4-10">}} h = (1/R)[(\partial x / \partial \phi)^2 +(\partial y / \partial \phi)^2]^{1/2} {{</math>}}
{{<math tag="4-11">}} k = [1/(R\cos\phi)][(\partial x/\partial \lambda)^2 + (\partial y/\partial \lambda)^2]^{1/2} {{</math>}}
{{<math tag="4-12">}} a' = (h^2+k^2 - 2hk\sin\theta)^{1/2} {{</math>}}
{{<math tag="4-13">}} b' = (h^2+k^2 - 2hk\sin\theta)^{1/2} {{</math>}}
where
{{<math tag="4-14">}} \sin\theta' = [(\partial y/\partial \phi)(\partial x/\partial \lambda) - (\partial x/\partial \phi)(\partial y/\partial \lambda)]/(R^2hk\cos\phi) {{</math>}}
$\theta'$ is the angle at which a given meridian and parallel intersect, and $a'$ and $b'$ are convenient terms. The maximum and minimum scale factors $a$ and $b$, at a given point, may be calculated thus:
{{<math tag="4-12a">}} a = (a'+b')/2 {{</math>}}
{{<math tag="4-13a">}} b = (a'-b')/2 {{</math>}}
Equation [(4-1)](#4-1) simplifies as follows for the general case:
{{<math tag="4-1a">}} \sin{\omega/2}=b'/a' {{</math>}}
The areal scale factor $s$:
{{<math tag="4-15">}} s = hk\sin{\theta'} {{</math>}}
For special cases:  
(1) $s = h k$ if meridians and parallels intersect at right angles ($\theta' = 90&deg;$);  
(2) $h = k$ and $\omega = 0$ if the map is conformal;  
(3) $h = l/k$ on an equal-area map if meridians and parallels intersect at right angles.[^2]  

## DISTORTION FOR PROJECTIONS OF THE ELLIPSOID
The derivation of the above formulas for the sphere utilizes the basic formulas for the length of a given spacing (usually l&deg; or 1 radian) along a given meridian or a
given parallel. The following formulas give the length of a radian of latitude ($L_\phi$) and of longitude ($L_\lambda$) for the sphere:
{{<math tag="4-16">}} L_\phi = R {{</math>}}
{{<math tag="4-17">}} L_\lambda = R \cos{\phi} {{</math>}}
where $R$ is the radius of the sphere. For the length of 1&deg; of latitude or longitude, these values are multiplied by $\pi/180$.

The radius of curvature on a sphere is the same in all directions. On the ellipsoid, the radius of curvature varies at each point and in each direction along a given meridian, except at the poles. The radius of curvature $R'$ in the plane of the meridian is calculated as follows:
{{<math tag="4-18">}} R' = a(1-e^2)/(1-e^2\sin^2{\phi})^{3/2} {{</math>}}

The length of a radian of latitude is defined as the circumference of a circle of this radius, divided by $2\pi$, or the radius itself. Thus,
{{<math tag="4-19">}} L_\phi= a(1-e^2)/(1-e^2\sin^2{\phi})^{3/2} {{</math>}}
For the radius of curvature $N$ of the ellipsoid in a plane perpendicular to the meridian and also perpendicular to a plane tangent to the surface,
{{<math tag="4-20">}} N = a/(1-e^2\sin^2{\phi})^{1/2} {{</math>}}
Radius $N$ is also the length of the perpendicular to the surface from the surface to the polar axis. The length of a radian of longitude is found, as in equation
[(4-17)](#4-1), by multiplying $N$ by $cos{\phi}$, or
{{<math tag="4-21">}} L_\lambda = a \cos{\phi}/(1-e^2\sin^2{\phi})^{1/2} {{</math>}}
The lengths of 1&deg; of latitude and 1&deg; of longitude for the Clarke 1866 and the International ellipsoids are given in table 4. They are found from equations [(4-19)](#4-19) and [(4-21)](#4-21), multiplied by $\pi/180$ to convert to lengths for 1&deg;
{{<figure src="../table4.png" link="../table4.png" caption="__TABLE 4__.&mdash; Lengths, in meters, of 1° of latitude and longitude on two ellipsoids of reference" >}}
When these formulas are applied to equations [(4-2)](#4-2) through [(4-6)](#4-6), the values of $h$ and $k$ for the ellipsoidal forms of the projections are found to be as follows:  
For cylindrical projections:
{{<math tag="4-22">}} \eqalign {
     h &= \mathrm{d}y/(R'\mathrm{d}\phi) \cr
       &= (1-e^2\sin^2{\phi})^{3/2}\mathrm{d}y/[a(1-e^2)\mathrm{d}\phi] 
   }{{</math>}}
{{<math tag="4-23">}}
   \eqalign {
     k &= \mathrm{d}x/(N\cos{\phi}\mathrm{d}\lambda) \cr
       &= (1-e^2\sin^2{\phi})^{1/2}\mathrm{d}x/(a\cos{\phi}\mathrm{d}\lambda)
   }{{</math>}}

For conic projections:
{{<math tag="4-24">}} \eqalign {
    h &= -\mathrm{d}\rho/(R'\mathrm{d}\phi) \cr
      &= -(1-e^2\sin^2{\phi})^{3/2}\mathrm{d}\rho/[a(1-e^2)\mathrm{d}\phi]
   }{{</math>}}
{{<math tag="4-25">}} \eqalign {
    k &= n\rho/(N\cos{\phi}) \cr
      &= n\rho(1-e^2\sin^2{\phi})^{1/2}/(a\cos{\phi})
   }{{</math>}}

For polar azimuthal projections:
{{<math tag="4-24">}} h = -(1-e^2\sin^2{\phi})^{3/2}\mathrm{d}\rho/[a(1-e^2)\mathrm{d}\phi] {{</math>}}
{{<math tag="4-25">}} k = \rho(1--e^2\sin^2{\phi})^{1/2}/(a\cos{\phi}) {{</math>}}
Equations [(4-7)](#4-7) and [(4-8)](#4-8) do not have ellipsoidal equivalents. Equation [(4-9)](#4-9) remains the same for equations [(4-22)](#4-22) through [(4-26)](#4-26):
$$ \sin{(\omega/2)} = |h-k|/(h+k) \tag{4-9} $$
For the general projection of the ellipsoid, equations [(4-10)](#4-10) and [(4-11)](#4-11) are similarly modified:
{{<math tag="4-27">}} h = [(\partial x / \partial \phi)^2 +(\partial y / \partial \phi)^2]^{1/2}(1-e^2\sin^2\phi)^{3/2}[a(1-e^2)] {{</math>}}
{{<math tag="4-28">}} k = [(\partial x/\partial \lambda)^2 + (\partial y/\partial \lambda)^2]^{1/2}(1-e^2\sin^2\phi)^{1/2}/(a\cos\phi) {{</math>}}
Equations [(4-12)](#4-12) through [(4-15)](#4-15), [(4-12a)](#4-12a), [(4-13a)](#4-13a), and [(4-1a)](#4-1a), listed for the sphere, apply without change, except that $R^2$ becomes $a^2(1 - e^2)/( 1 - e^2\sin^2\phi)^2$ in [(4-14)](#4-14).
Specific calculations are shown during the discussion of individual projections. The importance of using the ellipsoid instead of the sphere for designing a projection may be quantitatively evaluated by determining the ratio or product of some of the elementary relationships. The ratio of the differential length of a radian of latitude along a meridian on the sphere to that on the ellipsoid is found by dividing the equation [(4-16)](#4-16) by equation [(4-19)](#4-19), or
{{<math tag="4-29">}} C_m = R(1-e^2\sin^2\phi)^{3/2}/[a(1-e^2)] {{</math>}}
A related ratio for the length of a radian of longitude along a parallel on the sphere to that on the ellipsoid is found by dividing equation [(4-17)](#4-17) by equation[(4-21)](#4-21), or
{{<math tag="4-30">}} C_p = R(1-e^2\sin^2\phi)^{1/2}/a {{</math>}}
From these, the local shape factor C, may be found as the ratio of (4-29) to (4-30):
{{<math tag="4-31">}} C_s = C_m/C_p = (1-e^2\sin^2\phi)/(1-e^2) {{</math>}}
and the area factor $C_a$ is their product:
{{<math tag="4-32">}} C_a = C_mC_p = R^2(1-e^2\sin^2\phi)^2/[a^2(1-e^2)] {{</math>}}
If $h$ and $k$ are calculated for the spherical version of a map projection, the actual scale factors on the spherical version relative to the ellipsoid may be determined by multiplying $h$ by $C_m$ and $k$ by $C_p$. For normal cylindrical and conic projections and polar azimuthal projections, the conformality or shape factor may be taken as
$h/k$ (not the same as $\omega$) multiplied by $C_s$ and the area scale factor $hk$ may be multiplied by $C_a$.

Except for $C_s$ which is independent of $R/a$, $R$ must be given an arbitrary value such as $R_q$ (see equation [(3-13)]({{<ref "sect_3#3-13">}})), $R_M$ (see second sentence following equation [(3-22)]({{<ref "sect_3#3-22">}})), or another reasonable balance between the major and minor semiaxes $a$ and $b$ of the ellipsoid. Using $R_q$ and the Clarke 1866 ellipsoid, table 5 shows the magnitude of these corrections.
{{<figure src="../table5.png" link="../table5.png" caption="__TABLE 5__.&mdash; Ellipsoidal correction factors to apply to spherical projections based on Clarke 1866 ellipsoid">}}
Thus, a conformal projection based on the sphere has the correct shape at the poles for the ellipsoid, but the shape is about ⅔ of 1 percent (0.00681) in error near the Equator (that is, Tissot's Indicatrix is an ellipse with minor axis about ⅔ of 1 percent shorter than the major axis at the Equator when the spherical form is compared to the ellipsoid).

A map extending over a large area will have a scale variation of several percent, which far outweighs the significance of the less-than-1-percent variation between sphere and ellipsoid. A map of a small area, such as a large-scale detailed topographic map, or even a narrow strip map, has a small-enough intrinsic scale variation to make the ellipsoidal correction a significant factor in accurate mapping; e.g., a 7.5-min quadrangle normally has an intrinsic scale variation of 0.0002 percent or less.

## CAUCHY-RIEMANN AND RELATED EQUATIONS
Relatively simple equations provide necessary and sufficient conditions for any map projection, spherical or ellipsoidal, to be conformal. These are called the
Cauchy-Riemann equations after two 19th-century mathematicians. The concept had been devised, however, during the 18th century. These equations may be written as follows:
{{<math tag="4-33">}} \partial x / \partial \lambda = \partial y / \partial \psi {{</math>}}
{{<math tag="4-34">}} \partial x / \partial \psi = - \partial y / \partial \lambda {{</math>}}
where $\psi$ is the isometric latitude defined by equation [(3-7)]({{<ref "sect_3#3-7">}}) for the ellipsoid, or with $e=0$ in the same equation for the sphere. In the latter case, the above equations simplify to
{{<math tag="4-35">}}\partial x/(\cos\phi \,\partial\lambda) = \partial y/\partial\phi{{</math>}}
{{<math tag="4-36">}}\partial x / \partial \phi = -\partial y/(\cos\phi \,\partial\lambda) {{</math>}}
For the ellipsoid, equations [(4-33)](#4-33) and [(4-34)](#4-34) may be written
{{<math tag="4-37">}}\partial x/(\cos\phi \, \partial\lambda) = (1-e^2\sin^2\phi)\partial y/[(1-e^2)\partial\phi]{{</math>}}
{{<math tag="4-38">}}(1-e^2\sin^2\phi)\partial x/[(1-e^2)\partial\phi] = -\partial y/(\cos\phi \, \partial\lambda){{</math>}}
By substituting $x'$ in place of $\lambda$ and $y'$ in place of $\psi$ in equations [(4-33)](#4-33) and [(4-34)](#4-34), conditions are met for conformal transformation of one set of rectangular coordinates $(x', y')$ to another $(x, y)$. That is,
{{<math tag="4-39">}}\partial x/\partial x' = \partial y/\partial y'{{</math>}}
{{<math tag="4-40">}}\partial x/\partial y' = -\partial y / \partial x'{{</math>}}
In this case, if $(x', y')$ represents the transformation of the sphere or ellipsoid onto a flat surface, this transformation must also be conformal. The double transformation is used in a later chapter for the Modified-Stereographic Conformal projections.

Analogous relationships may be obtained for equal-area transformations. The following equation applies to the ellipsoid:
{{<math tag="4-41">}}(\partial x/\partial\lambda)(\partial y/\partial\phi)-(\partial x/\partial\phi)(\partial y/\partial\lambda) = a^2(1-e^2)\cos\phi/(1-e^2\sin^2\phi)^2 {{</math>}}
For the sphere, this simplifies to
{{<math tag="4-42">}}(\partial x/\partial\lambda)(\partial y/\partial\phi)-(\partial x/\partial\phi)(\partial y/\partial\lambda) = R^2\cos\phi{{</math>}}
For spherical pseudocylindrical equal-area projections, such as the sinusoidal, the parallels are straight lines parallel to the Equator, so that $(\partial y/\partial\lambda) = 0$. For the many projections in this category, equation [(4-42)](#4-42) simplifies further to
{{<math tag="4-43">}}x = R^2\lambda\cos\phi(\mathrm{d}y/\mathrm{d}\phi){{</math>}}
in which $y$ can be any function of $\phi$ for a chosen spacing of the parallels.

An equal-area transformation from one set of rectangular coordinates to another must satisfy the following relationship:
{{<math tag="4-44">}}(\partial x/\partial x')(\partial y/\partial y') - (\partial x/\partial y')(\partial y / \partial x') = S{{</math>}}
where $S$ is the area ratio of the $(x,y)$ map to the $(x', y')$ map.

Most of the above equations [(4-33)](#4-33) through [(4-44)](#4-44) are difficult to use to derive new projections, although they may be used to determine whether existing projections are conformal or equal-area. Equation [(4-43)](#4-43), however, may be fairly readily used to devise new projections which are pseudocylindrical and equal-area. Equation [(26-4)]({{<ref "sect_26#26-4">}}), discussed later, is a general equation satisfying [(4-39)](#4-39) and [(4-40)](#4-40), although it is not the only such equation. There is no known general equation satisfying equation (4-44) except in a very elementary way.

[^2]: Maling (1973, p. 49-81) has helpful derivations of these equations in less condensed forms. There are typographical errors in several of the equations in Maling, but these may be detected by following the derivation closely.