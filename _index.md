---
title: "Map Projections - A Working Manual"
type: "docs"
bookCollapseSection: true
description: The Snyder compendium of map projections converted to HTML and JavaScript
date: 2022-08-19
lastmod: 2024-03-02

---

# Map Projections
The subject of map projections is fascinating. It is one of the first cases where high level mathematics had a profound impact on day to day life and, to this day, very few look at a map and fully understand the complexity hidden behind a deceptively simple object.
{{< columns >}}
For anyone who gains some interest in the subject, a reference point is the publication of John P. Snyder, Map Projections - A Working Manual. To this day (it was published in 1987), it remains _the_ reference when searching for a map projection.

John Parr Snyder (1926-1997) was a chemical engineer working for CIBA-Geigy with a lifelong interest in maps and map projections. At the age of 50, in 1976, he attended a cartography conference and learned about the need for a new projection to be used with Landsat satellites data. He designed what become known as the [Space Oblique Mercator]({{<relref sect_27>}}) and offered it free to US Geological Survey (USGS). Two years later he was working in USGS and, in 1987, he published this compendium of map projections.   
<--->
![cover](cover.jpg)
{{</columns>}}
Although the publication [can be found online](https://pubs.er.usgs.gov/publication/pp1395), it is a scan of the original book. The following pages try to be a true online version of the original. All formulas have be transcribed in T<sub>E</sub>X and rendered using [MathJax](https://www.mathjax.org/). The [numerical examples]({{<ref "numerics">}}) are implemented using JavaScript. The default values can be changed and all affected formulas will be recalculated. 

**I am not claiming any intellectual rights: this is a transcription in a new form of the original publication and it is done only as a tribute to a truly valuable work. All rights remain with the original copyright holders.** I am inclined to believe that, as a U.S. government work, the original publication is in public domain (see [this reference](https://www.copyrightlaws.com/copyright-laws-in-u-s-government-works/)). As such, this online manual would also be in public domain. However, I am no lawyer and may want to verify this information.

## Contents
- [Symbols and Acronyms]({{<relref symbols>}})
- [Introduction]({{<relref 1-introduction>}})  
- [General Concepts]({{<relref 2-general>}})  
  [1. Characteristics of Map Projections]({{<relref sect_1>}})  
  [2. Latitude and Longitude]({{<relref sect_2>}})  
  [3. The Datum and the Earth as an Ellipsoid]({{<relref sect_3>}})  
  [4. Scale Variation and Angular Distortion]({{<relref sect_4>}})  
  [5. Transformation of Map Graticules]({{<relref sect_5>}})  
  [6. Classification and Selection of Map Projections]({{<relref sect_6>}})  
   
- [Cylindrical Map Projections]({{<relref 3-cylindrical>}})  
  [7. Mercator Projection]({{<relref sect_7>}})  
  [8. Transverse Mercator Projection]({{<relref sect_8>}})  
  [9. Oblique Mercator Projection]({{<relref sect_9>}})  
  [10. Cylindrical Equal-Area Projection]({{<relref sect_10>}})  
  [11. Miller Cylindrical Projection]({{<relref sect_11>}})  
  [12. Equidistant Cylindrical Projection]({{<relref sect_12>}})  
  [13. Cassini Projection]({{<relref sect_13>}})  
   
- [Conic Map Projections]({{<relref 4-conic>}})  
  [14. Albers Equal-Area Conic Projection]({{<relref sect_14>}})  
  [15. Lambert Conformal Conic Projection]({{<relref sect_15>}})  
  [16. Equidistant Conic Projection]({{<relref sect_16>}})  
  [17. Bipolar Oblique Conic Conformal Projection]({{<relref sect_17>}})  
  [18. Polyconic Projection]({{<relref sect_18>}})  
  [19. Bonne projection]({{<relref sect_19>}})  

- [Azimuthal and Related Map Projections]({{<relref 5-azimuthal>}})  
  [20. Orthographic Projection]({{<relref sect_20>}})  
  [21. Stereographic Projection]({{<relref sect_21>}})  
  [22. Gnomonic Projection]({{<relref sect_22>}})  
  [23. General Perspective Projection]({{<relref sect_23>}})  
  [24. Lambert Azimuthal Equal-Area Projection]({{<relref sect_24>}})  
  [25. Azimuthal Equidistant Projection]({{<relref sect_25>}})  
  [26. Modified-Stereographic Conformal Projections]({{<relref sect_26>}})  

- [Space Map Projections]({{<relref 6-spacemap>}})  
  [27. Space Oblique Mercator Projection]({{<relref sect_27>}})  
  [28. Satellite-Tracking projections]({{<relref sect_28>}})  

- [Pseudocylindrical and Miscellaneous Map Projections]({{<relref 7-pseudocylindrical>}})  
  [29. Van der Grinten Projection]({{<relref sect_29>}})  
  [30. Sinusoidal Projection]({{<relref sect_30>}})  
  [31. Mollweide Projection]({{<relref sect_31>}})  
  [32. Eckert IV and VI projections]({{<relref sect_32>}})  

- [APENDIX A. Numerical Examples]({{<ref numerics>}})

## Further References
- NASA Landsat Science - [John Parr Snyder's Space Oblique Mercator Projection](https://landsat.gsfc.nasa.gov/article/john-parr-synders-space-oblique-mercator-projection/)
- Library of Congress Blogs - [From Childhood Fancy to Space Age Discovery](https://blogs.loc.gov/maps/2023/08/from-childhood-fancy-to-space-age-discovery/)
