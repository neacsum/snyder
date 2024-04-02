---
title: Distortion for Projections of the Ellipsoid
weight: 20
description: Numerical examples for distortion of projections of the ellipsoid
mathjax: 2
date: 2023-02-02
lastmod: 2024-02-24
---
<script src="../js/format.js"> </script>
<script src="../js/angular_distortions.js"> </script>

# Distortion for Projections of the Ellipsoid - Numerical Example
Radius of curvature and length of degrees, using the
{{< rawHTML >}}
<select id="ellip" onchange="ell.select(this.options[this.selectedIndex].value)")>
  <option value="0" selected>Clarke 1866</option>
  <option value="1">WGS-84</option>
</select>ellipsoid<br/>at latitude <input id="phi_in" value="40" size="3">&deg;<input type="button" value="Set" onclick="ell.set_phi()"><br/>
{{</rawHTML>}}

From equation [(4-18)]({{<relref "sect_4#4-18">}}),
{{<math div="R_prime">}}
\eqalign {
  R' &= 6378206.4(1-0.00676866)/(1-0.00676866\sin^2 40^\circ)^{3/2} \cr
     &= 6361703.0\;\text{m}
}
{{</math>}}    

From equation [(4-19)]({{<relref "sect_4#4-18">}}), using the figure just calculated,
{{<math div="L_phi">}}
{{</math>}}

From equation [(4-20)]({{<relref "sect_4#4-20">}}),
{{<math div="n_val">}}
{{</math>}}
From equation [(4-21)]({{<relref "sect_4#4-21">}}),
{{<math div="L_lambda">}}
\eqalign{
L_\lambda &= [6378206.4\cos 40^\circ/(1-0.00676866\sin^2 40^\circ)^{1/2}]\pi/180^\circ \cr
         &= 85396.1\;\text{m, the length of \(1^\circ\) of longitude at lat. \(40^\circ\)}
  }
{{</math>}}

