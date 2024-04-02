---
title: 13. Cassini projection
weight: 70
description: Cassini projection
mathjax: 3
date: 2022-08-26
lastmod: 2024-03-10
---
# 13. CASSINI PROJECTION

## SUMMARY
- Cylindrical.
- Neither equal-area nor conformal.
- Central meridian, each meridian 90" from central meridian, and Equator are straight lines.
- Other meridians and parallels are complex curves.
- Scale is true along central meridian, and along lines perpendicular to central
- meridian. Scale is constant but not true along lines parallel to central meridian on spherical form, nearly so for ellipsoid.
- Used for topographic mapping formerly in England and currently in a few other countries.
- Devised by C. F. Cassini de Thury in 1745 for the survey of France.

## HISTORY
Although the Cassini projection has been largely replaced by the Transverse Mercator, it is still in limited use outside the United States and was one of the major topographic mapping projections until the early 20th century. It was first developed by César François Cassini de Thury (1714-1784), grandson of Jean Dominique Cassini. The latter was an outstanding Italian-born astronomer who changed his given names from Giovanni Domenico after being hired in 1669 for astronomical research in Paris, and soon thereafter to begin the survey of France. Cassini de Thury was the third of four generations involved in this project, the first detailed survey of a nation. In 1745 he devised the projection which, with some modifications, still bears the family name and was used for official topographic maps of France until its replacement by the Bonne projection in 1803.

Instead of showing meridians and parallels (except for the central meridian), Cassini employed a system of squares with rectangular grid coordinates, the meridian through Paris serving as one axis. The scale along this central meridian was made correct according to the surveyed distance, thus approximately correcting for the ellipsoid (Craig, 1882, p. 80; Reignier, 1957, p. 98-99). Mathematical analysis by J. G. von Soldner in the early 19th century led to more accurate ellipsoidal formulas, and the name Cassini-Soldner is often used for the form used in topographic mapping.

## FEATURES
The spherical form of the Cassini projection (fig. 19) bears the same relation to the Equidistant Cylindrical or Plate Carrée projection that the spherical Transverse Mercator bears to the regular Mercator. Instead of having the straight meridians and parallels of the Equidistant Cylindrical, the Cassini has complex curves for each, except for the Equator, the central meridian, and each meridian 90&deg; away from the central meridian, all of which are straight.
{{<figure src="../figure19.png" link="../figure19.png" caption="__FIGURE 19__.&mdash; Cassini projection. A transverse Equidistant Cylindrical projection used for large-scale mapping in France, England, and several other countries. Largely replaced by conformal mapping.">}}
There is no distortion along the central meridian, if it is maintained at true scale, which is the usual case. If it is given a reduced scale factor, the lines of true scale are two straight lines on the map parallel to and equidistant from the central meridian. There is no distortion along them instead. This alternative is rare enough that it is ignored in the discussion and formulas below.

By making a given point (such as Washington, D.C.) the pole on an oblique Equidistant Cylindrical projection, the bearing and distance from that point to any other on the Earth can be read directly as two rectangular coordinates (Botley, 1951). This provides the same information as the oblique Azimuthal Equidistant projection centered on the same point. The oblique cylindrical has the advantage of offering rectangular instead of polar coordinates, but the map is much more distorted near the chosen point.

The scale is correct along the central meridian and also along any straight line perpendicular to the central meridian. It gradually increases in a direction parallel to the central meridian, as the distance from that meridian increases, but the scale is constant along any straight line on the map which is parallel to the central meridian. Therefore, the Cassini is more suitable for regions predominantly north-south in extent, such as Great Britain, than for regions extending in other directions. In this respect, it is also like the Transverse Mercator. The projection is neither equal-area nor conformal, but it has a compromise of both features.

The ellipsoidal form is computed from series which are essentially modifications of those for the ellipsoidal form of the Transverse Mercator and are suitable within only a few degrees to either side of the central meridian. The scale characteristics described above for the spherical form apply to the ellipsoidal form, except that the lines of constant scale paralleling the central meridian are not quite straight.

## USAGE
There has been little usage of the spherical version of the Cassini, but the ellipsoidal Cassini-Soldner version was adopted by the Ordnance Survey for the official survey of Great Britain during the second half of the 19th century (Steers, 1970, p. 229). Many of these maps were prepared at a scale of 1:2,600. The Cassini-Soldner was also used for the detailed mapping of many German states during the same period.

Beginning about 1920, the Ordnance Survey began to change to the Transverse Mercator because of the difficulty of measuring scale and direction on the Cassini. Nevertheless, there are several maps still in print which are based on the older projection in Great Britain, and the projection is used in a few other countries such as Cyprus, Czechoslovakia, Denmark, the Federal Republic of Germany, and Malaysia (Clifford J. Mugnier, personal comm., 1985).

A system equivalent to an oblique Equidistant Cylindrical or oblique Cassini projection was used in early coordinate transformations for ERTS (now Landsat) satellite imagery, but it was changed in 1978 to the Hotine Oblique Mercator, and in 1982 to the Space Oblique Mercator projection.

## FORMULAS FOR THE SPHERE
For the forward formulas, given $R, \phi_o, \lambda_0, \phi$, and $\lambda$, to find $x$ and $y$:
{{<math tag="13-1">}} x=R\arcsin B {{</math>}}
{{<math tag="13-2">}} y=R\{\arctan[\tan\phi/\cos(\lambda-\lambda_0)]-\phi_0\} {{</math>}}
{{<math tag="13-3">}} h' = 1/(1-B^2)^{1/2} {{</math>}}
where
{{<math tag="8-5">}}B = \cos\phi\sin(\lambda-\lambda_0) {{</math>}}
and $\lambda_0$ is the central meridian. The origin of the coordinates is at $(\phi_0, \lambda_0)$. The Y axis lies along the central meridian $\lambda_0$, $y$ increasing northerly, and the X axis is perpendicular, through $\phi_0$ at $\lambda_0$, $x$ increasing easterly. Equation [(13-2)]({{<relref "#13-2">}}) is similar to corresponding equation [(8-3)]({{<relref "sect_8#8-3">}}) for the spherical Transverse Mercator projection. The scale factor is $h'$ in a direction parallel to the central meridian, while it is 1 in a direction perpendicular to this meridian.

_The inverse formulas_ for $(\phi,\lambda)$ in terms of $(x, y)$:
{{<math tag="13-4">}} \phi = \arcsin [\sin{D} \cos(x/R)] {{</math>}}
{{<math tag="13-5">}} \lambda = \lambda_0 + \arctan[\tan(x/R)/\cos D] {{</math>}}
where
{{<math tag="13-6">}} D = y/R + \phi_0 {{</math>}}
with $\phi_0$, and $D$ in radians. See [numerical examples]({{<ref "cassini#sphere">}}).

## FORMULAS FOR THE ELLIPSOID
For the ellipsoidal form, a set of series approximations is given for use in a zone extending 3° to 4° of longitude from the central meridian. Coordinate axes are the same as they are for the spherical formulas above. The formulas below are adapted from those provided by Clifford J. Mugnier (pers. commun., 1979; see also Clark and Clendinning, 1944).
{{<math tag="13-7">}} x=N[A-T A^3/6-(8-T+8C)T A^5/120] {{</math>}}
{{<math tag="13-8">}} y=M-M_0 + N\tan\phi[A^2/2+(5-T+6C)A^4/24] {{</math>}}
{{<math tag="13-9">}} s=1+x^2\cos^2{Az}(1-e^2\sin^2\phi)^2/[2a^2(1-e^2)] {{</math>}}
where
{{<math tag="4-20">}} N = a/(1-e^2\sin^2{\phi})^{1/2} {{</math>}}
{{<math tag="8-13">}}T = \tan^2\phi{{</math>}}
{{<math tag="8-15">}}A = (\lambda-\lambda_0)\cos\phi\text{, with } \lambda\text{ and }\lambda_0\text{ in radians} {{</math>}}
{{<math tag="8-14">}}C = e^2\cos^2\phi/(1-e^2){{</math>}}
{{<math tag="3-21">}} \begin{align}
    M = a[&(1-e^2/4-3e^4/64-5e^6/256-\dots)\phi \\
          -&(3e^2/8+3e^4/32+45e^6/1024+\dots)\sin{2\phi} \\
          +&(15e^4/256+45e^6/1024+\dots)\sin{4\phi} - (35e^6/3072+\dots)\sin{6\phi}+\dots] \end{align}
{{</math>}}
with $\phi$ in radians. $M$ is the true distance along the central meridian from the Equator to $\phi$.

$M_0 = M$ calculated for $\phi_0$, the latitude crossing the central meridian $\lambda_0$ at the origin of the $x, y$ coordinates. The choice of $\phi_0$ does not affect the shape of the projection.

$s =$ the scale factor at an azimuth $Az$ east of north for a given $\phi$ and $x$.

_For the inverse formulas_:
{{<math tag="13-10">}} \phi = \phi_1-(N_1\tan\phi_1/R_1)[D^2/2-(1-3T_1)D^4/24] {{</math>}}
{{<math tag="13-11">}} \lambda = \lambda_0 +[D-T_1D^3/3+(1+3T_1)T_1D^5/15]/\cos\phi_1 {{</math>}}
where $\phi_1$ is the "footpoint latitude" or the latitude at the central meridian which has the same y coordinate as that of the point $(\phi, \lambda)$. It may be found as follows:
{{<math tag="3-26">}} \begin{align}
    \phi_1 = \mu_1 &+ (3e_1/2-27e_1^3/32+\dots)\sin{2\mu_1}+(21e_1^2/16-55e_1^4/32+\dots)\sin{4\mu_1} \\
               &+ (151e_1^3/96-\dots)\sin{6\mu_1}+(1097e_1^4/512-\dots)\sin{8\mu_1}+\dots \end{align}
{{</math>}}
where
{{<math tag="3-24">}} e_1 = [1-(1-e^2)^{1/2}]/[1+(1-e^2)^{1/2}] {{</math>}}
{{<math tag="7-19">}}\mu_1=M_1/[a(1-e^2/4-3e^4/64-5e^6/256-\dots)] {{</math>}}
{{<math tag="13-12">}}M_1 = M_0 + y{{</math>}}
with M, calculated from equation {{%eqref "3-21"%}} for the given $\phi_0$. For improved computational efficiency using series {{%eqref "3-26"%}}, see p. 19.

From $\phi_1$, other terms below are calculated for use in equations {{%eqref 13-10%}} and {{%eqref 13-11%}}. (If $\phi_1=\pm\pi/2, \thinspace \phi=\pm90^\circ$, taking the sign of $y$, while $\lambda$ is indeterminate, and may be called $\lambda_0$.)
{{<math tag="8-22">}}T_1=\tan^2\phi_1{{</math>}}
{{<math tag="8-23">}}N_1=a/(1-e^2\sin^2\phi_1)^{1/2}{{</math>}}
{{<math tag="8-24">}}R_1=a(1-e^2)/(1-e^2\sin^2\phi_1)^{3/2}{{</math>}}
{{<math tag="13-13">}}D = x/N_1{{</math>}}
