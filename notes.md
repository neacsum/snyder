---
title: Notes
weight: 100
description: Editorial Notes
bookHidden: true
mathjax: 3
date: 2023-02-22
lastmod: 2024-03-09
---
# Editorial Notes

## Transformation of Map Graticules
<a name="map_grat1"></a>
<u>Note 1</u>: Snyder text refers to $\phi_1$ although the figure (Figure 5) shows $\phi_0$[&#x21a9;&#xfe0e;]({{<relref "sect_5#noteref1">}})

## Auxiliary latitudes
<a name="aux_lat1"></a>
<u>Note 1</u>: Snyder shows value $39.762435^\circ$.[&#x21a9;&#xfe0e;]({{<relref "numerics/aux_lat#noteref1">}})

## Oblique Mercator

<a name="ome1"></a>
<u>Note 1</u>: Snyder repeats sphere radius and central scale factor, although they are not needed for these formulas. Also, seems latitude of central point is arbitrarily chosen ($\phi_c=20^\circ$) with longitude and central line azimuth back-calculated from formulas [(9-7)]({{<relref "sect_9#9-7">}}) and [(9-8)]({{<relref "sect_9#9-8">}}).[&#x21a9;&#xfe0e;]({{<relref "numerics/ome#noteref1">}})

<a name="ome2"></a>
<u>Note 2</u>: Snyder presents first forward equations for Alternate B, followed by the inverse equations for Alternate A. Here the presentation order is swapped to reuse the projection parameters.[&#x21a9;&#xfe0e;]({{<relref "numerics/ome#noteref2">}})

## Cylindrical Equal-Area

<a name="cylea1"></a>
<u>Note 1</u>: Snyder comments on the formula for $x$: "adding $\pi$ since denominator is negative". In this case however, the ATAN2 function should be used and, since the numerator is also negative, $\pi$ should be <u>subtracted</u> from the result.[&#x21a9;&#xfe0e;]({{<relref "numerics/cylea#noteref1">}})
   
<a name="cylea2"></a>
<u>Note 2</u>: This numerical example contains an error: formula for $q$ uses the value for $\phi_s$ instead of the value for $\phi$.[&#x21a9;&#xfe0e;]({{<relref "numerics/cylea#noteref2">}})

<a name="cylea3"></a>
<u>Note 3</u>: This numerical example contains an error: formula for $\lambda_p$ is missing the factor $\cos(\lambda_1)$ from the first term.[&#x21a9;&#xfe0e;]({{<relref "numerics/cylea#noteref3">}})

<a name="cylea4"></a>
<u>Note 4</u>: WGS84 coefficients are calculated as shown [here]({{<relref "posts/cylea-coeffs">}})[&#x21a9;&#xfe0e;]({{<relref "numerics/cylea#noteref4">}})[&#x21a9;&#xfe0e;]({{<relref "numerics/cylea#noteref4-1">}})

## Stereographic
<a name="stereo1"></a>
<u>Note 1</u>: Incorrect equations numbers
[&#x21a9;&#xfe0e;]({{<relref "sect_21#noteref1">}})

## Modified Stereographic
<a name="mod_ster1"></a>
<u>Note 1</u>: One of the equations in (26-6) is incorrectly shown as $g_f = A_f + iB_f$. Here it is shown correctly as $g_m = A_m + iB_m$.
[&#x21a9;&#xfe0e;]({{<relref "sect_26#26-6">}})

