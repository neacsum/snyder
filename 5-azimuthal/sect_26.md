---
title: 26. Modified-Stereographic Conformal projections
weight: 70
description: Modified-Stereographic Conformal projections
mathjax: 3
date: 2022-11-30
lastmod: 2024-03-10
---
# 26. MODIFIED-STEREOGRAPHIC CONFORMAL PROJECTIONS
## SUMMARY
- Modified azimuthal.
- Conformal.
- All meridians and parallels are normally complex curves, although some may be straight under some conditions.
- Scale is true along irregular lines, but map is usually designed to minimize scale variation throughout a selected region.
- Map is normally not symmetrical about any axis or point.
- Used for maps of continents in the Eastern Hemisphere, for the Pacific Ocean, and for maps of Alaska and the 50 United States.
- Specific forms devised by Miller, Lee, and Snyder, 1950-84.

## HISTORY AND USAGE
Two short mathematical formulas, taken as a pair, absolutely define the conformal transformation of one surface onto another surface. These formulas are called the [Cauchy-Riemann equations]({{<relref "sect_4#cauchy-riemann-and-related-equations">}}), after two 19th-century mathematicians who added rigorous analysis to principles developed in the middle of the 18th century by physicist D'Alembert. Much later, Driencourt and Laborde (1932, vol. 14, p. 242) presented a fairly simple series (equation {{%eqref "26-4"%}} below without the R), involving complex algebra (with imaginary numbers), that fully satisfies the Cauchy-Riemann equations and permits the formation of an endless number of new conformal map projections when certain constants are changed.

The advantage of this series is that lines of constant scale may be made to follow one of a variety of patterns, instead of following the great or small circles of the common conformal projections. The disadvantage is that the length of the series and the computations become increasingly lengthy as the irregularity of the lines of constant scale increases, but this problem has decreased with the development of computers.

Laborde (1928; Reignier, 1957, p. 130) applied this transformation to the mapping of Madagascar, starting with the Oblique Mercator projection and applying the complex equation up to the third-order or cubic terms. Miller (1953) used the same order of complex equation, but began with an oblique Stereographic projection. His resulting map of Europe and Africa has oval lines of constant scale ([fig. 42]({{<relref "#fig42">}})); this projection is called the Miller Oblated (or Prolated) Stereographic. He subsequently (Miller, 1955) prepared similar projections for Asia and Australia each precisely conformal, but he linked them with nonconformal "fill-in" projections to provide a continuous map (in several sheets) of the land masses of the Eastern Hemisphere.
<a name="fig42"></a>
{{<figure src="../figure42.png" link="../figure42.png" caption="__FIGURE 42__.&mdash; Miller Oblated Stereographic projection of Europe and Africa, showing oval lines of constant scale. Center of projection lat. 18° N., long. 20° E.">}}

Lee (1974) designed a map of the Pacific Ocean, also using an oblique Stereographic with a third-order complex polynomial. The third-order polynomials used by Laborde, Miller, and Lee make relatively moderate computational demands, because several of the coefficients are zero, and the complex algebra can be readily simplified to equations without imaginary numbers. Recently Reilly (1973) and the writer (Snyder, 1984a, 1985a) have used much higher-order complex equations, but modern computers can readily handle them. Reilly used sixth-order coefficients with the regular Mercator for the new official New Zealand Map Grid, while the writer, beginning with oblique Stereographic projections, used sixth-order coefficients for a map of Alaska and tenth-order for a map of the 50 United States (figs. 43, 44). For these sixth- and tenth-order equations, only one coefficient is zero, but the other coefficients were computed using least squares. The projection for Alaska was used in 1985 by Alvaro F. Espinosa of the USGS to depict earthquake information for that State. The "Modified Transverse Mercator" projection is still being used by the USGS for most maps of Alaska.
<a name="fig43"></a>
{{<figure src="../figure43.png" link="../figure43.png" caption="__FIGURE 43__.&mdash; GS50 projection, with lines of constant scale factor superimposed. All 50 States, including islands and passages between Alaska, Hawaii, and the conterminous 48 States are shown with scale factors ranging only from 1.02 to 0.98.">}}

{{<figure src="../figure44.png" link="../figure44.png" caption="__FIGURE 44__.&mdash; Modified-Stereographic Conformal projection of Alaska, with lines of constant scale superimposed. Scale factors for Alaska range from 0.997 to 1.003, one-fourth the range for a corresponding conic projection.">}}
In addition, the writer (Snyder, 1984b) used oblique Stereographics as bases with third- to fifth-order equations, most coefficients remaining zero, to surround maps with lines of constant scale which are nearly regular polygons or rectangles (fig. 45). This minimizes error within a map as conventionally published.
{{<figure src="../figure45.png" link="../figure45.png" caption="__FIGURE 45__.&mdash; Modified-Stereographic Conformal projection of 48 United States, bounded by a near-rectangle of constant scale. Three lines of constant scale are superimposed. Region bounded by near-rectangle has minimum error.">}}

## FEATURES
The common feature linking the endless possibilities of map projections discussed in this chapter is the fact that they are perfectly conformal regardless of
the order of the complex-algebra transformation, and regardless of the initial projection, provided it is also conformal.

Chebyshev (1856) stated that a region may be best shown conformally if the sum of the squares of the scale errors (scale factors minus 1) over the region is a minimum. He further declared that this results if the region is bounded by a line of constant scale. This was proven later. Thus the Stereographic is suitable for regions approximately circular in shape, but regions bounded by ovals, regular polygons, or rectangles may be mapped with nearly minimum error by suitably altering the Stereographic with the complex-algebra transformation.

If the region is irregular, such as Alaska, the region of interest may be divided into small elements, and the coefficients may be calculated using least squares to minimize the scale variation for the region shown. The resulting coefficients for the selected projections are given below, but the formulas for least-squares summation are not included here because they are lengthy and are only needed to devise new projections. For them the reader may refer to Snyder (1984a, 198413, 1985a).

The reduction of scale variation by using this complex-algebra transformation makes the ellipsoidal form even more important. This form is also simpler in these cases than for the Transverse Mercator and some other projections, because the lines of true scale normally do not follow a selected meridian, parallel, or other easily identifiable line in any case. Therefore, use of the conformal latitude in place of the geographic latitude is sufficient for the ellipsoidal form. This merely slightly shifts the lines of constant scale from one set of arbitrary locations to another. The coefficients have somewhat different values, however.

The meridians and parallels of the Modified-Stereographic projections are generally curved, and there is usually no symmetry about any point or line. There are limitations to these transformations. Most of them can only be used within a limited range, depending on the number and values of coefficients. As the distance from the projection center increases, the meridians, parallels, and shorelines begin to exhibit loops, overlapping, and other undesirable curves. A world map using the GS50 (50-State) projection is almost illegible, with meridians and parallels intertwined like wild vines.

Within the intended range of the map, the Modified-Stereographic projections can reduce the range of scale variation considerably when compared with standard conformal projections. The tenth-order complex-algebra modification used for the 50-State projection has a scale range of only ±2 percent (or 4 percent overall) for all 50 States placed in their relative geographical positions, including all islands, adjacent waters, water channels connecting Alaska, Hawaii, and the other 48 States, and nearby Canada and Mexico ([fig. 43]({{<relref "#fig43">}})). A Lambert Conformal Conic projection previously used with standard parallels 37° and 65° N. to show the 50 States has a scale range of + 12 to -3 percent (or 15 percent overall). The sixth-order modification for the Alaska map, called the Modified-Stereographic Conformal projection, has a range of ±0.3 percent (or 0.6 percent overall) for Alaska itself, while a Lambert Conformal Conic with standard parallels 55° and 65° N. ranges from + 2.0 to -0.4 percent, or 2.4 percent overall.

The bounding of regions by ovals, near-regular polygons, or near-rectangles of constant scale results in improvement of scale variation by amounts depending on the size and shape of the boundary. The improvement in mean scale error is about 15 to 20 percent using a near-square instead of the circle of the base Stereographic projection. Using a Modified-Stereographic bounded by a near-rectangle instead of an oblique Mercator projection provides a mean improvement of up to 30 percent in some cases, but only 5 to 10 percent in cases involving a long narrow region. For fig. 45, the range of scale is ±1.1 percent (or 2.2 percent overall) within the 48 States, while the Lambert Conformal Conic normally used has a range of +2.4 to -0.6 percent (or 3.0 percent overall).

The improvement for the region in question is made at the expense of scale preservation outside the region. The regular conic projections maintain the same scale range around the entire world between the same latitude limits, even though most of that region is not shown on the regional maps described above.

## FORMULAS FOR THE SPHERE
The Modified-Stereographic conformal projections which have a scale range of more than 5 percent, such as regions bounded by rectangles 80° by 40° in spherical degrees, may satisfactorily be computed for the sphere instead of the ellipsoid. As stated above, development of coefficients is not shown here. For the calculation of
final rectangular coordinates, given $R, \phi_1, \lambda_0, A_1$ through $A_m, B_1$ through $B_m$, $\phi,$ and $\lambda$, and to find $x$ and $y$ (see [numerical examples]({{<relref "mod_stereo.md">}})):
{{<math tag="26-1">}}k' = 2/[1+\sin\phi_1\sin\phi+\cos\phi_1\cos\phi\cos(\lambda-\lambda_0)]{{</math>}}
{{<math tag="26-2">}}x' = k'\cos\phi\sin(\lambda-\lambda_0){{</math>}}
{{<math tag="26-3">}}y' = k'[\cos\phi_1\sin\phi - \sin\phi_1\cos\phi\cos(\lambda-\lambda_0)]{{</math>}}
{{<math tag="26-4">}}x+i\,y = R\sum_{j=1}^m (A_j+i\,B_j)(x'+i\,y')^j{{</math>}}
{{<math tag="26-5">}}k = \left|{\sum_{j=1}^m j(A_j+i\,B_j)(x'+i\,y')^{j-1}}\right| k'{{</math>}}
where $k'$ is the scale factor on the base Stereographic map, $(x', y')$ are rectangular coordinates for a globe of radius 1 on the base map, $(x, y)$ are rectangular coordinates on the final map, $k$ is the scale factor on the final map, $(\phi_1, \lambda_0)$ are the central latitude and longitude of the projection, $(\phi, \lambda)$ are the latitude and longitude of the point to be plotted, $R$ is the radius of the sphere, $(A_j, B_j)$ are the coefficients for $j=1$ to $j=m$, the order of the equation, and $i^2$ is -1. Equations (26-1) through (26-3) are similar to the forward equations listed under the regular Stereographic projection, but there are slight differences. The formulas for this projection as published in Snyder (1984a, 1985a) introduce $R$ (and $a$ for the ellipsoid) at the wrong points, although answers are correct.

For the practical computation of equations (26-4) and (26-5), Knuth's (1969) algorithm is recommended instead of them. Let<a href={{<relref "notes#mod_ster1">}}><sup>Note1</sup></a>  
{{<math tag="26-6">}}\begin{split}
& r=2x';\quad s=(x')^2 + (y')^2;\quad g_0=0;\quad g_m = A_m+i\,B_m;\quad a_1=g_m \cr
& b_1=g_{m-1};\quad c_1 = m\,g_m;\quad d_1 = (m-1)g_{m-1};\quad a_j = b_{j-1}+r\,a_{j-1};  \cr
& b_j = g_{m-j}-s'a_{j-1};\quad c_j = d_{j-1} + r\,c_{j-1};\quad d_j = (m-j)g_{m-j}-s'c_{j-1}
\end{split}{{</math>}}
After $j$ is given the value of successive integers from 2 to $m$ for $a_j$ and $b_j$ and 2 to $(m-1)$ for $c_j$ and $d_j$, then
{{<math tag="26-7">}}x+i\,y = R[(x'+i\,y')a_m+b_m]{{</math>}}
{{<math tag="26-8">}}F_2 + i\,F_1 = (x'+i\,y')c_{m-1}+d_{m-1}{{</math>}}
{{<math tag="26-9">}}k = (F_2^2+F_1^2)^{1/2}k'{{</math>}}
For the Modified-Stereographic Conformal projections with ovals, near-regular polygons, or near-rectangles as bounding lines of constant scale, since there are
only two or three non-zero coefficients, plus a possible rotation, equations {{% eqref "26-4"%}} and {{% eqref "26-5"%}} may be simplified to avoid a need for the use of $i$ or Knuth's algorithm. The above formulas are more general, however, once they are programmed. For the simplified forms, the reader is referred to Miller (1953) and Snyder (1984b). If $k$ is not being calculated in the above formulas, the four equations of {{% eqref "26-6"%}} which include $c$ or $d$, as well as {{% eqref "26-8"%}} and {{% eqref "26-9"%}}, may be omitted. For constants, see table 33.

_For inverse equations_, given $R, \phi_1, \lambda_0, A_1$ through $A_m, B_1$ through $B_m$, $x$, and $y$, to find $\phi$ and $\lambda$, first a Newton-Raphson iteration may be used as follows to find $(x' , y')$:
{{<math tag="26-10">}}\Delta(x'+i\,y') = -f(x'+i\,y')/(F_2+i\,F_1){{</math>}}
where
{{<math tag="26-11">}}f(x'+i\,y') = \sum_{j=1}^m(A_j+i\,B_j)(x'+i\,y')^j-(x+i\,y)/R{{</math>}}
{{<math tag="26-12">}}F_2+i\,F_1 = \sum_{j=1}^m j(A_j+i\,B_j)(x'+i\,y')^{j-1}{{</math>}}
and the first trial value of $x'$ is $(x/R)$ and of $y'$ is $(y/R)$. The Knuth algorithm is equally suitable here, using all of the equations in {{% eqref "26-6"%}}, assigning $j$ values which are described following those equations, and replacing equations {{% eqref "26-11"%}} and {{% eqref "26-12"%}} with {{% eqref "26-13"%}} and {{% eqref "26-8"%}}, respectively.
{{<math tag="26-13">}}f(x'+i\,y) = (x'+i\,y')a_m+b_m-(x+i\,y)/R{{</math>}}
 After the trial values of $(x', y')$ are adjusted with {{% eqref "26-10"%}} until the change in each is negligible (3-4 iterations are normally enough), the final $(x', y')$ is converted to $(\phi, \lambda)$ without iteration as follows:
{{<math tag="26-14">}}\rho = [(x')^2 + (y')^2]^{1/2}{{</math>}}
{{<math tag="26-15">}}c = 2\arctan(\rho/2){{</math>}}
{{<math tag="26-16">}}\phi = \arcsin[\cos c\sin\phi_1+y'\sin c\cos\phi_1/\rho]{{</math>}}
{{<math tag="26-17">}}\lambda = \lambda_0 + \arctan[x'\sin{c}/(\rho\cos\phi_1\cos c-y'\sin\phi_1\sin c)]{{</math>}}
If $\rho = 0$, equations (26-16) and (26-17) are indeterminate, but $\phi=\phi_1$ and $\lambda = \lambda_0$.
{{<figure src="../table33.png" link="../table33.png" caption="__TABLE 33__.&mdash; Modified-Stereographic Conformal projections: Coefficients for specific forms" alt="Modified-Stereographic Conformal projections: Coefficients for specific forms">}}
{{<figure src="../table33_1.png" link="../table33_1.png" caption="__TABLE 33__.&mdash; Modified-Stereographic Conformal projections: Coefficients for specific forms (Continued)" alt="Modified-Stereographic Conformal projections: Coefficients for specific forms">}}

## FORMULAS FOR THE ELLIPSOID
For higher precision maps taking greater advantage of the reduced scale variation available with Modified-Stereographic Conformal projections, the ellipsoidal formulas should be used. Given $a, e, \phi_1, \lambda_0, A_1$ through $A_m, B_1$ through $B_m, \phi,$ and $\lambda$, to find $x$ and $y$ (special numerical examples are not given, but examples of the [ellipsoidal Stereographic]({{<relref "stereo#ellipsoid">}}), and of the spherical Modified-Stereographic p. 344, are sufficiently similar):
{{<math tag="3-1">}} \chi = 2\arctan{ \\{\tan{(\pi/4 + \phi/2)}[(1-e\sin{\phi})/(1+e\sin{\phi})]^{e/2}\\} }-\pi/2 {{</math>}}
{{<math tag="14-15">}} m = \cos\phi/(1-e^2\sin^2\phi)^{1/2} {{</math>}}
{{<math tag="26-18">}}s = 2/[1+\sin\chi_1\sin\chi+\cos\chi_1\cos\chi\cos(\lambda-\lambda_0)]{{</math>}}
{{<math tag="26-19">}}k' = s\cos\chi/m{{</math>}}
{{<math tag="26-20">}}x' = s\cos\chi\sin(\lambda-\lambda_0){{</math>}}
{{<math tag="26-21">}}y' = s[\cos\chi_1\sin\chi-\sin\chi_1\cos\chi\cos(\lambda-\lambda_0)]{{</math>}}
where $\chi_1$ , is found as $\chi$ (the conformal latitude) from equation {{% eqref "3-1"%}} by substituting $\phi_1$, for $\phi$. The $(x', y')$ thus found are converted to $(x, y)$ with unchanged equations {{% eqref "26-4"%}} and {{% eqref "26-5"%}}, or {{% eqref "26-6"%}} through {{% eqref "26-9"%}} as listed under spherical formulas with accompanying explanations, except that $R$ in {{% eqref "26-4"%}} or {{% eqref "26-7"%}} is replaced with $a$, the semimajor axis of the ellipsoid of eccentricity $e$, and the constants used must be those for the ellipsoidal projection.

_For inverse equations_, given $a, e, \phi_1,\lambda_0, A_1$ through $A_m, B_1$ through $B_m, x$, and $y$, to find $\phi$ and $\lambda$, the Newton-Raphson iteration of spherical equations {{% eqref "26-10"%}} through {{% eqref "26-13"%}} is used unchanged to find $(x', y')$ except that $R$ is replaced with $a$, and ellipsoidal constants must be used. After convergence, the final $(x', y')$ is converted to $(\phi$, \lambda)$ without iteration. Equations {{% eqref "26-14"%}}, {{% eqref "26-15"%}}, and {{% eqref "3-1"%}} are used to calculate $\rho, c$, and $\chi_1$, as before.
Then,
{{<math tag="26-22">}}\chi = \arcsin[\cos c\sin\chi_1+(y'\sin c\cos\chi_1/\rho)]{{</math>}}
{{<math tag="3-4">}} \phi = 2 \arctan { \left\{ \tan{(\pi/4+\chi/2)}\left[(1+e\sin{\phi})/(1-e\sin{\phi}) \right]^{e/2} \right\} } - \pi/2 {{</math>}}
{{<math tag="26-23">}}\lambda = \lambda_0 + \arctan[x'\sin c/(\rho\cos\chi_1\cos c - y'\sin\chi_1\sin c)]{{</math>}}
If $\rho = 0$, equations (26-22) and (26-23) are indeterminate, but $\chi=\chi_0$ and $\lambda=\lambda_0$. Equation (3-4), which should not use the ATAN2 function or equivalent, involves iteration by successive substitution, using $\chi$ as the first trial $\phi$ on the right side of the equation, calculating $\phi$ on the left, using the new value of $\phi$ on the right side, and so forth, until the change in $\phi$ is negligible. Tables 34 and 35 list representative rectangular coordinates for the ellipsoidal forms of the 50-State and Alaska projections, to be used in the above formulas.
{{<figure src="../table34.png" link="../table34.png" caption="__TABLE 34__.&mdash; GS50 projection for 50 States: Rectangular coordinates for Clarke 1866 ellipsoid" alt="GS50 projection for 50 States: Rectangular coordinates for Clarke 1866 ellipsoid">}}
{{<figure src="../table35.png" link="../table35.png" caption="__TABLE 35__.&mdash; Modified-Stereographic Conformal projection for Alaska: Rectangular coordinates for Clarke 1866 ellipsoid" alt="Modified-Stereographic Conformal projection for Alaska: Rectangular coordinates for Clarke 1866 ellipsoid">}}
