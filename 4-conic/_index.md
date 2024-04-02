---
title: Conic Map Projections
weight: 30
description: Conic Map Projections
bookCollapseSection: true
date: 2022-08-27
lastmod: 2022-12-11
---
- [Albers Equal-Area Conic projection]({{<relref "sect_14">}})
- [Lambert Conformal Conic projection]({{<relref "sect_15">}})
- [Equidistant Conic projection]({{<relref "sect_16">}})
- [Bipolar Oblique Conic Conformal projection]({{<relref "sect_17">}})
- [Polyconic projection]({{<relref "sect_18">}})
- [Bonne projection]({{<relref "sect_19">}})

[Single page version]({{<relref single>}})
  
# CONIC MAP PROJECTIONS
Cylindrical projections are used primarily for complete world maps, or for maps along narrow strips of a great circle arc, such as the Equator, a meridian, or an oblique great circle. To show a region for which the greatest extent is from east to west in the temperate zones, conic projections are usually preferable to cylindrical projections.

Normal conic projections are distinguished by the use of arcs of concentric circles for parallels of latitude and equally spaced straight radii of these circles for meridians. The angles between the meridians on the map are smaller than the actual differences in longitude. The circular arcs may or may not be equally spaced, depending on the projection. The Polyconic projection and oblique conic projections have characteristics different from these.

The name "conic" originates from the fact that the more elementary conic projections may be derived by placing a cone on the top of a globe representing the Earth, the apex or tip in line with the axis of the globe, and the sides of the cone touching or tangent to the globe along a specified "standard" latitude which is true to scale and without distortion (see fig. 1). Meridians are drawn on the cone from the apex to the points at which the corresponding meridians on the globe cross the standard parallel. Other parallels are then drawn as arcs centered on the apex in a manner depending on the projection. If the cone is cut along one meridian and unrolled, a conic projection results. A secant cone results if the cone cuts the globe at two specified parallels. Meridians and parallels can be marked on the secant cone somewhat as above, but this will not result in any of the common conic projections with two standard parallels. They are derived from various desired scale relationships instead, and the spacing of the meridians as well as the parallels is not the same as the projection onto a secant cone.

There are three important classes of conic projections: the equidistant (or simple), the conformal, and the equal-area. The Equidistant Conic, with parallels equidistantly spaced, originated in a rudimentary form with Claudius Ptolemy. It eventually developed into commonly used present-day forms which have one or two standard parallels selected for the area being shown. It is neither conformal nor equal-area, but north-south scale along all meridians is correct, and the projection can be a satisfactory compromise for errors in shape, scale, and area, especially when the map covers a small area. It is primarily used in the spherical form, although the ellipsoidal form is available and useful. The USGS uses the Equidistant Conic in an approximate form for a map of Alaska, identified as a "Modified Transverse Mercator" projection, and also in the limiting equatorial form: the Equidistant Cylindrical. Both are described earlier.

The Lambert Conformal Conic projection with two standard parallels is used frequently for large- and small-scale maps. The parallels are more closely spaced near the center of the map. The Lambert has also been used slightly in the oblique form. The Albers Equal-Area Conic with two standard parallels is used for sectional maps of the U.S. and for maps of the conterminous United States. The Albers parallels are spaced more closely near the north and south edges of the map. There are some conic projections, such as perspective conics, which do not fall into any of these three categories, but they are rarely used.

The useful conic projections may be geometrically constructed only in a limited sense, using polar coordinates which must be calculated. After a location is chosen, usually off the final map, for the center of the circular arcs which will represent parallels of latitude, meridians are constructed as straight lines radiating from this center and spaced from each other at an angle equal to the product of the cone constant times the difference in longitude. For example, if a 10&deg; graticule is planned,
and the cone constant is 0.65, the meridian lines are spaced at 10&deg; times 0.65 or 6.5&deg;. Each parallel of latitude may then be drawn as a circular arc with a radius previously calculated from formulas for the particular conic projection.
