---
title: APPENDIX A. Numerical Examples
weight: 80
description: Numerical Examples
mathjax: 3
bookCollapseSection: true
date: 2023-01-25
lastmod: 2024-03-30
---

# NUMERICAL EXAMPLES
The numerical examples which follow should aid in the use of the many formulas in this study of map projections. Single examples are given for equations for forward and inverse functions of the projections, both spherical and ellipsoidal, when both are given. They are given in the order the projections are given. The order of equations used is based on the order of calculation, even though the equations may be originally listed in a somewhat different order. In some cases, the last digit may vary from check calculations, due to rounding off, or the lack of it.

>**Notes**
>
>Unless there is a note to the contrary, and if the expression for which the $\arctan$ is sought has a numerator over a denominator, the formulas in which $\arctan$ is required (usually to obtain a longitude) are so arranged that the Fortran ATAN2 function should be used. For hand calculators and computers with the $\arctan$ function but not ATAN2, the following conditions must be added to the limitations listed with the formulas:

For $\arctan (A/B)$, the arctan normally given as an angle between -90&deg; and +90&deg;, or between $-\pi/2$ and $+\pi/2$. If B is negative add $\pm180^\circ$ or $\pm\pi$ to the initial $\arctan$, where the $\pm$ takes the sign of A, or if A is zero, the $\pm$ arbitrarily takes a + sign. If B is zero, the arctan is $\pm90^\circ$ or $\pm\pi/2$, taking the sign of A. Conditions not resolved by the ATAN2 function, but requiring adjustment for almost any program, are as follows:  
1. If A and B are both zero, the $\arctan$ is indeterminate, but may normally be given an arbitrary value of 0 or of $\lambda_0$, depending on the projection, and  
2. If A or B is infinite, the $\arctan$ is $\pm90^\circ$ (or $\pm\pi/2$) or 0, respectively, the sign depending on other conditions. In any case, the final longitude should be adjusted, if necessary, so that it is an angle between $-180^\circ$ (or $-\pi$)and $+180^\circ$ (or $+\pi$). This is done by adding or subtracting multiples of $360^\circ$ (or $2\pi$) as required.

## Contents
- [Auxiliary Latitudes]({{<relref aux_lat >}})
- [Distortion for Projections of the Ellipsoid]({{<relref angular_distortions>}})
- [Mercator Projection]({{<relref mercator>}})
- [Transverse Mercator Projection]({{<relref tme>}})
- [Oblique Mercator Projection]({{<relref ome>}})
- [Cylindrical Equal-Area Projection]({{<relref cylea>}})
- [Miller Projection]({{<relref miller>}})
- [Cassini Projection]({{<relref cassini>}})
- [Albers Equal Area Projection]({{<relref aea>}})
- [Equidistant Conic Projection]({{<relref eqd_conic>}})
- [Bipolar Oblique Conic Conformal Projection]({{<relref bocc>}})
- [Polyconic Projection]({{<relref pol>}})
- [Bonne Projection]({{<relref bonne>}})
- [Orthographic Projection]({{<relref ortho>}})
- [Stereographic Projection]({{<relref stereo>}})
- [Gnomonic Projection]({{<relref gnom>}})
- [Lambert Azimuthal Equal-Area Projection]({{<relref laea>}})
- [Azimuthal Equidistant Projection]({{<relref aeqd>}})
- [Modified-Stereographic Conformal Projection]({{<relref mod_stereo>}})
- [Van der Grinten Projection]({{<relref vandg>}})
- [Mollweide Projection]({{<relref moll>}})
- [Eckert IV Projection]({{<relref eck4>}})
- [Eckert VI Projection]({{<relref eck6>}})

> **Mircea says:**
> - Formulas in this section are "live". You can change input values and press the "Set" or "Recalculate" button to have them updated.
> - Default ellipsoidal parameters have been kept to "Clarke 1866" as in the original. You can, however, select WGS84 ellipsoid and all formulas will be updated accordingly.
> - The order of some numerical examples has been swapped to reuse projection parameters. If a projection has more than one aspect, forward and inverse equations of that aspect are grouped together.

