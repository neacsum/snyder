---
title: 19. Bonne projection
weight: 60
description: Bonne projection
mathjax: 3
date: 2022-09-03
lastmod: 2024-03-10
---
# 19. BONNE PROJECTION
## SUMMARY
- Pseudoconical.
- Central meridian is a straight line. Other meridians are complex curves.
- Parallels are concentric circular arcs, but the poles are points.
- Scale is true along the central meridian and along all parallels.
- No distortion along the central meridian and along the standard parallel.
- Used for atlas maps of continents and for topographic mapping of some countries.
- Sinusoidal projection is equatorial limiting form of Bonne projection.
- Used considerably by Bonne in mid-18th century, but developed by others during the early 16th century.

## HISTORY
The name of Rigobert Bonne (1727-1795), a French geographer, is almost universally applied to an equal-area projection which has been used for both large- and small-scale mapping during the past 450 years. During the late 19th and early 20th centuries, the most conspicuous use of the Bonne projection was for maps of continents in atlases.

The Italian Bernardus Sylvanus' world map of 1511 closely approaches the Bonne projection, since its meridians are almost equally spaced along the equidistant and concentric circular parallels. De l'Isle and Coronelli used the Bonne principle for maps of about 1700. Bonne used the projection most notably for a 1752 maritime atlas of the coast of France (Reignier, 1957, p. 164). Continental maps of Europe and Asia appeared on this projection by 1763, and the ellipsoidal version replaced the Cassini projection for French topographic mapping beginning in 1803.

For maps of continents, the Bonne was preceded by its polar limiting form, a cordiform (heart-shaped) world map devised by Johannes Stabius and given wider notice by Johannes Werner about 1514. The Werner projection, as it is usually called, was used in the late 16th century for maps of Asia and Africa by Mercator and Abraham Ortelius, but the "Bonne" projection has less distortion because its projection center is at the center of the region being mapped instead of at the pole. Eventually the Werner projection was made obsolete by the Bonne.

## FEATURES AND USAGE
Like the Equidistant Conic with one standard parallel, the Bonne projection (fig. 27) has concentric circular arcs for parallels of latitude. They are equally spaced on the spherical form and spaced in proportion to the true distance along a meridian on the ellipsoidal form. The chosen standard parallel is given its true curvature on the map by making the radius of its circular arc equal to the distance between the parallel and the apex of a cone tangent at the parallel.
{{<figure src="../figure27.png" link="../figure27.png" caption="__FIGURE 27__.&mdash; Bonne projection with central parallel at lat. 40° N. Called a pseudoconic projection, this is equal-area and has no distortion along central meridian or central parallel. Popular in atlases for maps of continents until mid-20th century">}}
Unlike the parallels on the Equidistant Conic and other regular conic projections, but like those on the Polyconic, each parallel is marked off for meridians at the true spacings on either the spherical or ellipsoidal versions, beginning at the straight central meridian. The individual meridians are then shown as complex curves connecting these points. This results in an equal-area projection with true scale along the central meridian and along each parallel, whether spherical or ellipsoidal. The central meridian and the standard parallel are free of local angular and shape distortion as well. The shape distortion increases away from either line, and meridians do not intersect parallels at right angles elsewhere, as they do on regular conic projections.

The combination of curved meridians and concentric circular arcs for parallels has led to the classification of "pseudoconic" for the Bonne projection and for the polar limiting case, the Werner projection, on which the North Pole is the equivalent of the standard parallel. The limiting case with the Equator as the standard parallel is the Sinusoidal, a "pseudocylindrical" projection to be discussed later; the formulas must be changed in this case since the parallels of latitude are straight. Modifications to the Bonne projection, in some cases resulting in nonequal-area projections, were presented by Nell of Germany in 1890 and by Solov'ev of the Soviet Union in the 1940's (Maling, 1960, p. 295-296).

Many atlases of the 19th and early 20th centuries utilized the Bonne projection to show North America, Europe, Asia, and Australia, while the Sinusoidal (as the equatorial Bonne) was used for South America and Africa. The Lambert Azimuthal Equal-Area projection is now generally used by Rand McNally & Co. and Hammond Inc. for maps of continents, while the National Geographic Society prefers its own Chamberlin Trimetric projection for this purpose.

Large-scale use of the Bonne projection for topographic mapping, originally introduced by France, is current chiefly in portions of France, Ireland, Morocco, and some countries in the eastern Mediterranean area (Clifford J. Mugnier, written commun., 1985).

## FORMULAS FOR THE SPHERE
The principles stated above lead to the following forward formulas for rectangular coordinates of the spherical form of the Bonne projection, given $R, \phi_1, \lambda_0, \phi$ and $\lambda$, and using radians in equation (19-1),
{{<math tag="19-1">}} \rho = R(\cot\phi_1+\phi_1-\phi) {{</math>}}
{{<math tag="19-2">}} E = R(\lambda-\lambda_0)(cos\phi)/\rho {{</math>}}
{{<math tag="19-3">}} x = \rho\sin{E} {{</math>}}
{{<math tag="19-4">}} y = R\cot\phi_1-\rho\cos{E} {{</math>}}
where $\phi_1$ is the chosen standard parallel. The Y axis coincides with $\lambda_0$ the central meridian, y increasing north, and the X axis is perpendicular at $(\phi_1,\lambda_0)$, x: increasing east. If $(\lambda-\lambda_0)$ exceeds the range $\pm180°$, 360° must be added or subtracted to place it within range. If $\phi_1= 90°$, the Werner projection results, but if $\phi$ is also 90°, equation (19-2) is indeterminate, and x and y are both zero.

_The inverse formulas for the sphere_, given $R, \phi_1, \lambda_0, x$, and $y$, to find $(\phi, \lambda)$:
{{<math tag="19-5">}} \rho = \pm[x^2+(R\cot\phi_1-y)^2]^{1/2} \text{ taking the sign of }\phi_1 {{</math>}}
{{<math tag="19-6">}} \phi = \cot\phi_1+\phi_1-\rho/R {{</math>}}
{{<math tag="19-7">}} \lambda = \lambda_0 + \rho\{\arctan[x/(R\cot\phi_1-y)]\}/(R\cos\phi) {{</math>}}
using the $\phi$ determined from (19-6). If $\phi=\pm 90°$, (19-7) is indeterminate, but $\lambda$ may be given any value, such as $\lambda_0$. When using the Fortran ATAN2 function for equation (19-7), and $\phi_1$ is negative, the signs of $x$ and $(R\cot\phi_1-y)$ must be reversed before insertion into the equation.

## FORMULAS FOR THE ELLIPSOID
For the forward formulas, given $a, e, \phi_1, \lambda_0, \phi$, and $\lambda$, to find $x$ and $y$, the following are calculated in order:
{{<math tag="14-15">}} m = \cos\phi/(1-e^2\sin^2\phi)^{1/2} {{</math>}}
{{<math tag="3-21">}} \begin{align}
    M = a[&(1-e^2/4-3e^4/64-5e^6/256-\dots)\phi \\
          -&(3e^2/8+3e^4/32+45e^6/1024+\dots)\sin{2\phi} \\
          +&(15e^4/256+45e^6/1024+\dots)\sin{4\phi} - (35e^6/3072+\dots)\sin{6\phi}+\dots] \end{align}
{{</math>}}
{{<math tag="19-8">}} \rho= a\,m_1/\sin\phi_1 + M_1 - M {{</math>}}
{{<math tag="19-9">}} E = a\,m(\lambda-\lambda_0)/\rho {{</math>}}
{{<math tag="19-10">}} x = \rho\sin{E} {{</math>}}
{{<math tag="19-11">}} y = a\,m_1/\sin\phi_1-\rho\cos{E} {{</math>}}
where $\phi_1$, is the chosen central parallel, and $m_1$, and $M_1$ are found from (14-15) and (3-21), respectively, by using $\phi_1$ instead of $\phi$. Axes are the same as those for the spherical form. If both $\phi$ and $\phi_1$ are at the same pole, equation (19-9) is indeterminate, but $x$ and $y$ are both zero.

For _the inverse formulas for the ellipsoid_, given $a, e, \phi_1, \lambda_0, x$ and $y$, to find $\phi$ and $\lambda$, first $m_1$, and $M_1$ are calculated as in the forward case from equations (14-15) and (3-21) above. The following are then calculated in order:
{{<math tag="19-12">}} \rho=\pm[x^2+(a\,m_1/\sin\phi_1-y)^2]^{1/2}, \text{ taking the sign of }\phi_1 {{</math>}}
{{<math tag="19-13">}} M = a\,m_1/\sin\phi_1+M_1-\rho {{</math>}}
{{<math tag="7-19">}}\mu=M/[a(1-e^2/4-3e^4/64-5e^6/256-\dots)] {{</math>}}
{{<math tag="3-24">}} e_1 = [1-(1-e^2)^{1/2}]/[1+(1-e^2)^{1/2}] {{</math>}}
{{<math tag="3-26">}} \begin{align}
    \phi = \mu &+ (3e_1/2-27e_1^3/32+\dots)\sin{2\mu}+(21e_1^2/16-55e_1^4/32+\dots)\sin{4\mu} \\
               &+ (151e_1^3/96-\dots)\sin{6\mu}+(1097e_1^4/512-\dots)\sin{8\mu}+\dots \end{align}
{{</math>}}
From (14-15), $m$ is calculated for $\phi$, then
{{<math tag="19-14">}} \lambda=\lambda_0+\rho\{\arctan[x/(a\,m_1/\sin\phi_1-y)]\}/(a\,m) {{</math>}}
When using the Fortran ATAN2 function for equation (19-14), and $\phi_1$ is negative, the signs of $x$ and $(a\thinspace m-1/\sin\phi_1 - y)$ must be reversed before insertion into the equation. If $\phi = \pm90°$, (19-14) is indeterminate, but $\lambda$ may be given any value, such as $\lambda_0$.