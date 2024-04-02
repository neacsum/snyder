---
title: 12. Equidistant Cylindrical projection
weight: 60
description: Equidistant Cylindrical projection
mathjax: 3
date: 2022-08-26
lastmod: 2023-05-25
---
# 12. EQUIDISTANT CYLINDRICAL PROJECTION
## SUMMARY
- Cylindrical.
- Neither equal-area nor conformal.
- Meridians and parallels are equidistant straight lines, intersecting at right angles.
- Poles shown as lines.
- Used for world or regional maps.
- Very simple construction.
- Used only in spherical form.
- Presented by Eratosthenes (B.C.) or Marinus (A.D. 100).

## HISTORY AND FEATURES
While the Equidistant Cylindrical projection has received limited use by the USGS and generally has limited value, it is probably the simplest of all map projections to construct and one of the oldest. The meridians and parallels are all equidistant straight parallel lines, the two sets crossing at right angles.

The projection originated probably with Eratosthenes (275?-195? B.C.), the scientist and geographer noted for his fairly accurate measure of the size of the Earth. Claudius Ptolemy credited Marinus of Tyre with the invention about A.D. 100 stating that, while Marinus had previously evaluated existing projections, the latter had chosen "a manner of representing the distances which gives the worst results of all." Only the parallel of Rhodes (lat. 36&deg;N.) was made true to scale on the world map, which meant that the meridians were spaced at about four-fifths of the spacing of the parallels for the same degree interval (Keuning, 1955, p. 13).

Ptolemy approved the use of the projection for maps of smaller areas, however, with spacing of meridians to provide correct scale along the central parallel. All the Greek manuscript maps for the Geographia, dating from the 13th century, use the Ptolemy modification. It was used for some maps until the 18th century, but is now used primarily for a few maps on which distortion is considered less important than the ease of displaying special information. The projection is given a variety of names such as Equidistant Cylindrical, Rectangular, La Carte Parallelogrammatique, Die Rechteckige Plattkarte, and Equirectangular (Steers, 1970, p. 135-136). It was called the projection of Marinus by Nordenskiold (1889).

If the Equator is made the standard parallel, true to scale and free of distortion, the meridians are spaced at the same distances as the parallels, and the graticule
appears square. This form is often called the Plate Carrée or the Simple Cylindrical projection.

The USGS uses the Equidistant Cylindrical projection for index maps of the conterminous United states, with insets of Alaska, Hawaii, and various islands on the same projection. One is entitled "Topographic Mapping Status and Progress of Operations (7½- and 15-minute series)," at an approximate scale of 1:5,000,000. Another shows the status of intermediate-scale quadrangle mapping. Neither the scale nor the projection is marked, to avoid implying that the maps are suitable for normal geographic information. Meridian spacing is about four-fifths of the spacing of parallels, by coincidence the same as that chosen by Marinus. The Alaska inset is shown at about half the scale and with a change in spacing ratios. Individual States are shown by the USGS on other index maps using the same projection and spacing ratio to indicate the status of aerial photography.

The projection was chosen largely for ease in computerized plotting. While the boundaries on the base map may be as difficult to plot on this projection as on the others, the base map needs to be prepared only once. Overlays of digital information, which may then be printed in straight lines, may be easily updated without the use of cartographic and photographic skills. The 4:5 spacing ratio is a convenience based on computer line and character spacing and is not an attempt
to achieve a particular standard parallel, which happens to fall near lat. 37&deg; N.

## FORMULAS FOR THE SPHERE
The formulas for rectangular coordinates are almost as simple to use as the geometric construction. Given $R, \lambda_0, \phi_1, \lambda$, and $\phi$ for the forward solution, $x$ and $y$ are found thus:
{{<math tag="12-1">}} x=R(\lambda-\lambda_0)\cos\phi_1  {{</math>}}
{{<math tag="12-2">}} y=R\phi  {{</math>}}
{{<math tag="12-3">}} h=1  {{</math>}}
{{<math tag="12-4">}} k=\cos\phi_1/\cos\phi  {{</math>}}
The X axis coincides with the Equator, with $x$ increasing easterly, while the Y axis follows the central meridian $\lambda_0$, $y$ increasing northerly. It is necessary to adjust $(\lambda-\lambda_0)$, if it is beyond the range $\pm180°$, by adding or subtracting 360°. The standard parallel is $\phi_1$ (also $\-\phi_1$). For the inverse formulas, given $R, \lambda_0, x$, and $y$, to find $\phi$ and $\lambda$:
{{<math tag="12-5">}} \phi = y/R {{</math>}}
{{<math tag="12-6">}} \lambda = \lambda_0 + x/(R\cos\phi_1) {{</math>}}
Numerical examples are omitted in the appendix, due to simplicity. It must be remembered, as usual, that angles above are given in radians.
