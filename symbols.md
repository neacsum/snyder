---
title: Symbols and Acronyms
weight: 4
description: Symbols
mathjax: 3
date: 2023-03-14
lastmod: 2024-03-15
---
## Symbols

If a symbol is not listed here, it is used only briefly and identified near the formulas in which it
is given.

| Symbol | Description |
|--------|-------------|
| $Az$   |azimuth, as an angle measured clockwise from the north. |
| $a$    | equatorial radius or semimajor axis of the ellipsoid of reference. |
| $b$    | polar radius or semiminor axis of the ellipsoid of reference. $ b = a(1 - f) = a(1 - e^2)^{1/2}$ |
| $c$    |great circle distance, as an arc of a circle. |
| $e$    |eccentricity of the ellipsoid.  $e = (1-b^2/a^2)^{1/2}$ |
| $f$    |flattening of the ellipsoid.|
| $h$    |relative scale factor along a meridian of longitude. (For general perspective projections, $h$ is height above surface of ellipsoid.) |
| $k$    |relative scale factor along a parallel of latitude.
| $n$    | cone constant on conic projections, or the ratio of the angle between meridians to the true angle, called $l$ in some other references. |
| $R$    | radius of the sphere, either actual or that corresponding to scale of the map. |
| $S$    | surface area. |
| $x$    | rectangular coordinate: distance to the right of the vertical line (Y axis) passing through the origin or center of a projection (if negative, it is distance to the left). In practice, a "false" $x$ or "false easting" is frequently added to all values of $x$ to eliminate negative numbers. (Note: Many British texts use X and Y axes interchanged, not rotated, from this convention.) |
| $y$    | rectangular coordinate: distance above the horizontal line (X axis) passing through the origin or center of a projection (if negative, it is distance below). In practice, a "false" $y$ or "false northing" is frequently added to all values of $y$ to eliminate negative numbers.|
| $z$    |angular distance from North Pole of latitude $\phi$, or $(90^\circ - \phi)$, or colatitude.|
| $z_1$  | angular distance from North Pole of latitude $\phi_1$ or $(90^\circ - \phi_1)$. |
| $z_2$  | angular distance from North Pole of latitude $\phi_2$ or $(90^\circ - \phi_2)$. |
| $\ln$  | natural logarithm, or logarithm to base e, where e = 2.71828. |
| $\theta$ | angle measured counterclockwise from the central meridian, rotating about the center of the latitude circles on a conic or polar azimuthal projection, or beginning due south, rotating about the center of projection of an oblique or equatorial azimuthal projection. |
| $\theta'$ | angle of intersection between meridian and parallel. |
| $\lambda$ | longitude east of Greenwich (for longitude west of Greenwich, use a minus sign). |
| $\lambda_0$ | longitude east of Greenwich of the central meridian of the map, or of the origin of the rectangular coordinates (for west longitude, use a minus sign). If $\phi_1$, is a pole, $\lambda_0$, is the longitude of the meridian extending down on the map from the North Pole or up from the South Pole. |
| $\lambda'$ | transformed longitude measured east along transformed equator from the north crossing of the Earth's Equator, when graticule is rotated on the Earth. |
| $\rho$ | radius of latitude circle on conic or polar azimuthal projection, or radius from center on any azimuthal projection. |
| $\phi$ | north geodetic or geographic latitude (if latitude is south, apply a minus sign). |
| $\phi_0$ | middle latitude, or latitude chosen as the origin of rectangular coordinates for a projection. |
| $\phi'$ | transformed latitude relative to the new poles and equator when the graticule is rotated on the globe. |
| $\phi_1$, $\phi_2$ | standard parallels of latitude for projections with two standard parallels. These are true to scale and free of angular distortion. |
| $\phi_1$ (without $\phi_2$) | single standard parallel on cylindrical or conic projections; latitude of central point on azimuthal projections. |
| $\omega$ | maximum angular deformation at a given point on a projection. |

1. All angles are assumed to be in radians, unless the degree symbol (°) is used.

2. Unless there is a note to the contrary, and if the expression for which the arctan is sought has a numerator over a denominator, the formulas in which arctan is required (usually to obtain a longitude) are so arranged that the Fortran ATAN2 function should be used. For hand calculators and computers with the arctan function but not ATAN2, the following conditions must be added to the limitations listed with the formulas:
   - For $\arctan(A/B)$, the arctan is normally given as angle between $-90^\circ$ and $+90^\circ$, or between $-\pi/2$ and $\+\pi/2$. If $B$ is negative, add $\pm180^\circ$ or $\pm\pi$ to the initial arctan, where the $\pm$ takes the sign of $A$, or if $A$ is zero, the $\pm$ arbitrarily takes a + sign. If $B$ is zero, the arctan is $\pm90^\circ$ or $\pm\pi/2$, taking the sign of $A$.
  
   - Conditions not resolved by the ATAN2 function, but requiring adjustment for almost any program, are as follows:  
(1) If $A$ and $B$ are both zero, the arctan is indeterminate, but may normally be given an arbitrary value of 0 or of $\lambda_0$, depending on the projection, and  
(2) If $A$ or $B$ is infinite, the arctan is $\pm90^\circ$ (or $\pm\pi/2$) or 0, respectively, the sign depending on other conditions. In any case, the final
longitude should be adjusted, if necessary, so that it is an angle between $-180^\circ$ (or $-\pi$) and $+180^\circ$ (or $+\pi$). This is done by adding or subtracting multiples of $360^\circ$ (or $2\pi$) as required.  

1. Where division is involved, most equations are given in the form $A = B/C$ rather than $A = \frac{B}{C}.$ This facilitates typesetting, and it also is a convenient form for conversion to Fortran programming.

## Acronyms
AGS
: Geodetic Reference System

HOM
: Hotine (form of ellipsoidal) Oblique Mercator

IMC
: International Map Committee

IMW
: International Map of the World

IUGG
: International Union of Geodesy and Geophysics

NASA
: National Aeronautics and Space Administration

SOM
: Space Oblique Mercator

SPCS
: State Plane Coordinate System

UPS
: Universal Polar Stereographic

USC&GS
: United States Coast and Geodetic Survey

USGS
: United States Geological Survey

UTM
: Universal Transverse Mercator

WGS
: World Geodetic System


Some acronyms are not listed since the full name is used through this bulletin.
