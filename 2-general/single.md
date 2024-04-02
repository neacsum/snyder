---
title: General
weight: 1000
bookHidden: true
mathjax: 3
---

## 1. CHARACTERISTICS OF MAP PROJECTIONS
The general purpose of map projections and the basic problems encountered have been discussed often and well in various books on cartography and map projections. (Robinson, Sale, Morrison, and Muehrcke, 1984; Steers, 1970; and Greenhood, 1964, are among later editions of earlier standard references.) Every map user and maker should have a basic understanding of projections, no matter how much computers seem to have automated the operations. The concepts will be concisely described here, although there are some interpretations and formulas that appear to be unique.

For almost 500 years, it has been conclusively established that the Earth is essentially a sphere, although a number of intellectuals nearly 2,000 years earlier were convinced of this. Even to the scholars who considered the Earth flat, the skies appeared hemispherical, however. It was established at an early date that attempts to prepare a flat map of a surface curving in all directions leads to distortion of one form or another.

A map projection is a systematic representation of all or part of the surface of a round body, especially the Earth, on a plane. This usually includes lines delineating meridians and parallels, as required by some definitions of a map projection, but it may not, depending on the purpose of the map. A projection is required in any case. Since this cannot be done without distortion, the cartographer must choose the characteristic which is to be shown accurately at the expense of others, or a compromise of several characteristics. If the map covers a continent or the Earth, distortion will be visually apparent. If the region is the size of a small town, distortion may be barely measurable using many projections, but it can still be serious with other projections. There is literally an infinite number of map projections that can be devised, and several hundred have been published, most of which are rarely used novelties. Most projections may be infinitely varied by choosing different points on the Earth as the center or as a starting point. It cannot be said that there is one "best" projection for mapping. It is even risky to claim that one has found the "best" projection for a given application, unless the parameters chosen are artificially constricting. A carefully constructed globe is not the best map for most applications because its scale is by necessity too small. A globe is awkward to use in general, and a straightedge cannot be satisfactorily used on one for measurement of distance.

The details of projections discussed in this book are based on perfect plotting onto completely stable media. In practice, of course, this cannot be achieved. The cartographer may have made small errors, especially in hand-drawn maps, hut a more serious problem results from the fact that maps are commonly plotted and printed on paper, which is dimensionally unstable. Typical map paper can expand over 1 percent with a 60 percent increase in atmospheric humidity, and the expansion coefficient varies considerably in different directions on the same sheet. This is much greater than the variation between common projections on large scale quadrangles, for example. The use of stable plastic bases for maps is recommended for precision work, but this is not always feasible, and source maps may be available only on paper, frequently folded as well. On large-scale maps, such as topographic quadrangles, measurement on paper maps is facilitated with rectangular grid overprints, which expand with the paper. Grids are discussed later in this book.

The characteristics normally considered in choosing a map projection are as follows:
1. Area - Many map projections are designed to be _equal-area_, so that a coin of any size, for example, on one part of the map covers exactly the same area of the actual Earth as the same coin on any other part of the map. Shapes, angles, and scale must be distorted on most parts of such a map, but there are usually some parts of an equal-area map which are designed to retain these characteristics correctly, or very nearly so. Less common terms used for equal-area projections are equivalent, _homolographic_, or _homalographic_ (from the Greek _homalos_ or _homos_ ("same") and _graphos_ ("write")); _authalic_ (from the Greek _autos_ ("same") and _ailos_ ("area")), and _equiareal_.

2. Shape - Many of the most common and most important projections are _conformal_ or _orthomorphic_ (from the Greek _orthos_ or "straight" and _morphe_ or "shape"), in that normally the relative local angles about every point on the map are shown correctly. (On a conformal map of the entire Earth there are usually one or more "singular" points at which local angles are still distorted.) Although a large area must still be shown distorted in shape, its small features are shaped essentially correctly. Conformality applies on a point or infinitesimal basis, whereas an equal-area map projection shows areas correctly on a finite, in fact mapwide basis. An important result of conformality is that the local scale in every direction around any one point is constant. Because local angles are correct, meridians intersect parallels at right (90°) angles on a conformal projection, just as they do on the Earth. Areas are generally enlarged or reduced throughout the map, but they are correct along certain lines, depending on the projection. Nearly all large-scale maps of the Geological Survey and other mapping agencies throughout the world are now prepared on a conformal projection. No map can be both equal-area and conformal.

While some have used the term _aphylactic_ for all projections which are neither equal-area nor conformal (Lee, 1944), other terms have commonly been used to describe special characteristics:
3. Scale - No map projection shows scale correctly throughout the map, but there are usually one or more lines on the map along which the scale remains true. By choosing the locations of these lines properly, the scale errors elsewhere may be minimized, although some errors may still be large, depending on the size of the area being mapped and the projection. Some projections show true scale between one or two points and every other point on the map, or along every meridian. They are called _equidistant_ projections.

4. Direction - While conformal maps give the relative local directions correctly at any given point, there is one frequently used group of map projections, called _azimuthal_ (or _zenithal_), on which the directions or azimuths of all points on the map are shown correctly with respect to the center. One of these projections is also equal-area, another is conformal, and another is equidistant. There are also projections on which directions from two points are correct, or on which directions from all points to one or two selected points are correct, but these are rarely used.

5. Special characteristics - Several map projections provide special characteristics that no other projection provides. On the Mercator projection, all rhumb lines, or lines of constant direction, are shown as straight lines. On the Gnomonic projection, all great circle paths-the shortest routes between points on a sphere shown as straight lines. On the Stereographic, all small circles, as well as great circles, are shown as circles on the map. Some newer projections are specially designed for satellite mapping. Less useful but mathematically intriguing projections have been designed to fit the sphere conformally into a square, an ellipse, a triangle, or some other geometric figure.

6. Method of construction - In the days before ready access to computers and plotters, ease of construction was of greater importance. With the advent of computers and even pocket calculators, very complicated formulas can be handled almost as routinely as simple projections in the past.

While the above six characteristics should ordinarily be considered in choosing a map projection, they are not so obvious in recognizing a projection. In fact, if the region shown on a map is not much larger than the United States, for example, even a trained eye cannot often distinguish whether the map is equal-area or conformal. It is necessary to make measurements to detect small differences in spacing or location of meridians and parallels, or to make other tests. The type of construction of the map projection is more easily recognized with experience, if the projection falls into one of the common categories.

There are three types of developable[^1] surfaces onto which most of the map projections used by the USGS are at least partially geometrically projected. They are the cylinder, the cone, and the plane. Actually all three are variations of the cone. A cylinder is a limiting form of a cone with an increasingly sharp point or apex. As the cone becomes flatter, its limit is a plane. If a cylinder is wrapped around the globe representing the Earth (see fig. l), so that its surface touches the Equator throughout its circumference, the meridians of longitude may be projected onto the cylinder as equidistant straight lines perpendicular to the Equator, and the parallels of latitude marked as lines parallel to the Equator, around the circumference of the cylinder and mathematically spaced for certain characteristics. For some cases, the parallels may also be projected geometrically from a common point onto the cylinder, but in the most common cases they are not perspective. When the cylinder is cut along some meridian and unrolled, a cylindrical projection with straight meridians and straight parallels results. The Mercator projection is the best-known example, and its parallels must be mathematically spaced.

If a cone is placed over the globe, with its peak or apex along the polar axis of the Earth and with the surface of the cone touching the globe along some particular parallel of latitude, a conic (or conical) projection can be produced. This time the meridians are projected onto the cone as equidistant straight lines radiating from the apex, and the parallels are marked as lines around the circumference of the cone in planes perpendicular to the Earth's axis, spaced for the desired characteristics. The parallels may not be projected geometrically for any useful conic projections. When the cone is cut along a meridian, unrolled, and laid flat, the meridians remain straight radiating lines, but the parallels are now circular arcs centered on the apex. The angles between meridians are shown smaller than the true angles.

A plane tangent to one of the Earth's poles is the basis for polar azimuthal projections. In this case, the group of projections is named for the function, not the plane, since all common tangent-plane projections of the sphere are azimuthal. The meridians are projected as straight lines radiating from a point, but they are spaced at their true angles instead of the smaller angles of the conic projections. The parallels of latitude are complete circles, centered on the pole. On some important azimuthal projections, such as the Stereographic (for the sphere), the parallels are geometrically projected from a common point of perspective; on others, such as the Azimuthal Equidistant, they are nonperspective.
<a name="fig1"></a>
{{<figure src="../figure1.png" link="../figure1.png" caption="__FIGURE 1__.&mdash; Projection of the Earth onto the three major surfaces. In a few cases, projection is geometric, but in most cases the projection is mathematical to achieve certain features" >}}

The concepts outlined above may be modified in two ways, which still provide cylindrical, conic, or azimuthal projections (although the azimuthals retain this property precisely only for the sphere).
1. The cylinder or cone may be secant to or cut the globe at two parallels instead of being tangent to just one. This conceptually provides two standard parallels; but for most conic projections this construction is not geometrically correct. The plane may likewise cut through the globe at any parallel instead of touching a pole, but this is only useful for the Stereographic and some other perspective projections.

2. The axis of the cylinder or cone can have a direction different from that of the Earth's axis, while the plane may be tangent to a point other than a pole (fig. 1). This type of modification leads to important oblique, transverse, and equatorial projections, in which most meridians and parallels are no longer straight lines or arcs of circles. What were standard parallels in the normal orientation now become standard lines not following parallels of latitude.

Other projections resemble one or another of these categories only in some respects. There are numerous interesting pseudocylindrical (or "false cylindrical") projections. They are so called because latitude lines are straight and parallel, and meridians are equally spaced, as on cylindrical projections, but all meridians except the central meridian are curved instead of straight. The Sinusoidal is a frequently used example. Pseudoconic projections have concentric circular arcs for parallels, like conics, but meridians are curved; the Bonne is the only common example. Pseudoazimuthal projections are very rare; the polar aspect has concentric circular arcs for parallels, and curved meridians. The Polyconic projection is projected onto cones tangent to each parallel of latitude, so the meridians are curved, not straight. Still others are more remotely related to cylindrical, conic, or azimuthal projections, if at all.

## 2. LATITUDE AND LONGITUDE
To identify the location of points on the Earth, a graticule or network of longitude and latitude lines has been superimposed on the surface. They are commonly referred to as meridians and parallels, respectively. The concept of latitudes and longitudes was originated early in recorded history by Greek and Egyptian scientists, especially the Greek astronomer Hipparchus (2nd century, B.C.). Claudius Ptolemy further formalized the concept (Brown, 1949, p. 50, 52, 68).

### PARALLELS OF LATITUDE
Given the North and South Poles, which are approximately the ends of the axis about which the Earth rotates, and the Equator, an imaginary line halfway between the two poles, the parallels of latitude are formed by circles surrounding the Earth and in planes parallel with that of the Equator. If circles are drawn equally spaced along the surface of the sphere, with 90 spaces from the Equator to each pole, each space is called a degree of latitude. The circles are numbered from 0&deg; at the Equator to 90&deg; North and South at the respective poles. Each degree is subdivided into 60 minutes and each minute into 60 seconds of arc. For 2,000 years, measurement of latitude on the Earth involved one of two basic astronomical methods. The instruments and accuracy, but not the principle, were gradually improved. By day, the angular height of the Sun above the horizon was measured. By night, the angular height of stars, and especially the current pole star, was used. With appropriate angular conversions and adjustments for time of day and season, the latitude was obtained. The measuring instruments included devices known as the cross-staff, astrolabe, back-staff, quadrant, sextant, and octant, ultimately equipped with telescopes. They were supplemented with astronomical tables called almanacs, of increasing complication and accuracy. Finally, beginning in the 18th century, the use of triangulation in geodetic surveying meant that latitude on land could be determined with high precision by using the distance from other points of known latitude. Thus measurement of latitude, unlike that of longitude, was an evolutionary development almost throughout recorded history (Brown, 1949, p. 180-207).

### MERIDIANS OF LONGITUDE
Meridians of longitude are formed with a series of imaginary lines, all intersecting at both the North and South Poles, and crossing each parallel of latitude at right angles, but striking the Equator at various points. If the Equator is equally divided into 360 parts, and a meridian passes through each mark, 360 degrees of longitude result. These degrees are also divided into minutes and seconds. While the length of a degree of latitude is always the same on a sphere, the lengths of degrees of longitude vary with the latitude (see fig. 2). At the Equator on the sphere, they are the same length as the degree of latitude, but elsewhere they are shorter.

There is only one location for the Equator and poles which serve as references for counting degrees of latitude, but there is no natural origin from which to count degrees of longitude, since all meridians are identical in shape and size. It thus becomes necessary to choose arbitrarily one meridian as the starting point, or prime meridian. There have been many prime meridians in the course of history, swayed by national pride and international influence. For over 150 years, France officially used the meridian through Ferro, an island of the Canaries. Eighteenth- century maps of the American colonies often show longitude from London or Philadelphia. During the 19th century, boundaries of new States were described with longitudes west of a meridian through Washington, D.C., 77&deg;03' 02.3" west of the Greenwich (England) Prime Meridian (Van Zandt, 1976, p. 3). The latter was increasingly referenced, especially on sea charts due to the proliferation of those of British origin. In 1884, the International Meridian Conference, meeting in Washington, agreed to adopt the "meridian passing through the center of the transit instrument at the Observatory of Greenwich as the initial meridian for longitude," resolving that "from this meridian longitude shall be counted in two directions up to 180 degrees, east longitude being plus and west longitude minus" (Brown, 1949, p. 283, 297).
{{<figure src="../figure2.png" link="../figure2.png" caption="__FIGURE 2__.&mdash; Meridians and parallels on the sphere">}}

The choice of the prime meridian is arbitrary and may be stated in simple terms. The accurate measurement of the difference in longitude at sea between two points, however, was unattainable for centuries, even with a precision sufficient for the times. When extensive transatlantic exploration from Europe began with the voyages of Christopher Columbus in 1492, the inability to measure east-west distance led Lo numerous shipwrecks with substantial loss of lives and wealth. Seafaring nations beginning with Spain offered sizable rewards for the invention of satisfactory methods for measuring longitude. It finally became evident that a portable, dependable clock was needed, so that the height of the Sun or stars could be related to the time in order to determine longitude. The study of the pendulum by Galileo, the invention of the pendulum clock by Christian Huygens in 1656, and Robert Hooke's studies of the use of springs in watches in the 1660's provided the basic instrument, but it was not until John Harrison of England responded to his country's substantial reward posted in 1714 that the problem was solved. For five decades, Harrison devised successively more reliable versions of a marine chronometer, which were tested at sea and gradually accepted by the Board of Longitude in painstaking steps from 1765 to 1773. Final compensation required intervention by the King and Parliament (Brown, 1949, p. 208-240; Quill, 1966).

Thus a major obstacle to accurate mapping was overcome. On land, the measurement of longitude lagged behind that of latitude until the development of the clock and the spread of geodetic triangulation in the 18th century made accuracy a reality. Electronic means of measuring distance and angles in the mid- to late-20th century have redefined the meaning of accuracy by orders of magnitude.

### CONVENTIONS IN PLOTTING
When constructing meridians on a map projection, the central meridian, usually a straight line, is frequently taken to be a starting point or 0&deg; longitude for calculation purposes. When the map is completed with labels, the meridians are marked with respect to the Greenwich Prime Meridian. The formulas in this book are arranged so that Greenwich longitude may be used directly. All formulas herein use the convention of positive east longitude and north latitude, and negative west longitude and south latitude. Some published tables and formulas elsewhere use positive west longitude, so the reader is urged to use caution in comparing values.

### GRIDS
Because calculations relating latitude and longitude to positions of points on a given map can become quite involved, rectangular grids have been developed for the use of surveyors. In this way, each point may be designated merely by its distance from two perpendicular axes on the flat map. The Y axis normally coincides with a chosen central meridian, y increasing north. The X axis is perpendicular to the Y axis at a latitude of origin on the central meridian, with x increasing east. Frequently x and y coordinates are called "eastings" and "northings," respectively, and to avoid negative coordinates may have "false eastings" and "false northings" added.

The grid lines usually do not coincide with any meridians and parallels except for the central meridian and the Equator. Of most interest in the United States are two grid systems: The Universal Transverse Mercator (UTM) Grid is described on [p. 57]({{<ref "sect_8#universal-transverse-mercator-projection">}}), and the State Plane Coordinate System (SPCS) is described on [p. 51]({{<ref "sect_8#spcs">}}). Preceding the UTM was the World Polyconic Grid (WPG), used until the late 1940's and described on [p. 127]({{<ref "sect_18#wpg">}}).

Grid systems are normally divided into zones so that distortion and variation of scale within any one zone is held below a preset level. The type of boundaries between grid zones varies. Zones of the WPG and the UTM are bounded by meridians of longitude, but for the SPCS State and county boundaries are used. Some grid boundaries in other countries are defined by lines of constant grid value using a local or an adjacent grid as the basis. This adjacent grid may in turn be based on a different projection and a different reference ellipsoid. A common boundary for non-U.S. offshore grids is an ellipsoidal rhumb line, or line of constant direction on the ellipsoid (see [p. 46]({{<ref "sect_7#measurement-of-rhumb-lines">}})); the ellipsoidal geodesic, or shortest route (see [p. 199]({{<ref "sect_25#geodetic_distance">}})) is also used. The plotting of some of these boundaries can become quite complicated (Clifford J. Mugnier, pers. comm., 1985).

## 3. THE DATUM AND THE EARTH AS AN ELLIPSOID
For many maps, including nearly all maps in commercial atlases, it may be assumed that the Earth is a sphere. Actually, it is more nearly an oblate ellipsoid of revolution, also called an oblate spheroid. This is an ellipse rotated about its shorter axis. The flattening of the ellipse for the Earth is only about one part in three hundred; but it is sufficient to become a necessary part of calculations in plotting accurate maps at a scale of 1:100,000 or larger, and is significant even for 1:5,000,000-scale maps of the United States, affecting plotted shapes by up to 213 percent (see p. 27). On small-scale maps, including single-sheet world maps, the oblateness is negligible. Formulas for both the sphere and ellipsoid will be discussed in this book wherever the projection is used or is suitable in both forms. The Earth is not an exact ellipsoid, and deviations from this shape are continually evaluated. The geoid is the name given to the shape that the Earth would assume if it were all measured at mean sea level. This is an undulating surface that varies not more than about a hundred meters above or below a well-fitting ellipsoid, a variation far less than the ellipsoid varies from the sphere. It is important to remember that elevations and contour lines on the Earth are reported relative to the geoid, not the ellipsoid. Latitude, longitude, and all plane coordinate systems, on the other hand, are determined with respect to the ellipsoid.

The choice of the reference ellipsoid used for various regions of the Earth has been influenced by the local geoid, but large-scale map projections are designed to fit the reference ellipsoid, not the geoid. The selection of constants defining the shape of the reference ellipsoid has been a major concern of geodesists since the early 18th century. Two geometric constants are sufficient to define the ellipsoid itself. They are normally expressed either as (1) the semimajor and semiminor axes (or equatorial and polar radii, respectively), (2) the semimajor axis and the flattening, or (3) the semimajor axis and the eccentricity. These pairs are directly interchangeable. In addition, recent satellite-measured reference ellipsoids are defined by the semimajor axis, geocentric gravitational constant, and dynamical form factor, which may be converted to flattening with formulas from physics (Lauf, 1983, p. 6).

In the early 18th century, Isaac Newton and others concluded that the Earth should be slightly flattened at the poles, but the French believed the Earth to be egg-shaped as the result of meridian measurements within France. To settle the matter, the French Academy of Sciences, beginning in 1735, sent expeditions to Peru and Lapland to measure meridians at widely separated latitudes. This established the validity of Newton's conclusions and led to numerous meridian measurements in various locations, especially during the 19th and 20th centuries; between 1799 and 1951 there were 26 determinations of dimensions of the Earth.

The identity of the ellipsoid used by the United States before 1844 is uncertain, although there is reference to a flattening of 11302. The Bessel ellipsoid of 1841 (see table 1) was used by the Coast Survey from 1844 until 1880, when the bureau adopted the 1866 evaluation by the British geodesist Alexander Ross Clarke using measurements of meridian arcs in western Europe, Russia, India, South Africa, and Peru (Shalowitz, 1964, p. 117-118; Clarke and Helmert, 1911, p. 807-808). This resulted in an adopted equatorial radius of 6,378,206.4 m and a polar radius of 6,356,583.8 m, or an approximate flattening of 11294.9787.

The Clarke 1866 ellipsoid (the year should be included since Clarke is also known for ellipsoids of 1858 and 1880) has been used for all of North America until a change which is currently underway, as described below.

In 1909 John Fillmore Hayford reported calculations for a reference ellipsoid from U.S. Coast and Geodetic Survey measurements made entirely within the United States. This was adopted by the International Union of Geodesy and Geophysics (IUGG) in 1924, with a flattening of exactly 11297 and a semimajor axis of exactly 6,378,388 m. This is therefore called the International or the Hayford ellipsoid, and is used in many parts of the world, but it was not adopted for use in North America, in part because of all the work already accomplished using the older datum and ellipsoid (Brown, 1949, p. 293; Hayford, 1909).
    <table cellspacing="5">
        <caption style="text-align: center;">
            TABLE1 - Some official ellipsoids in use
            throughout the world<sup>1</sup>
        </caption>
        <tbody>
            <tr style="border-style:solid; border-top-width:2px; border-bottom-width:2px;">
                <th>Name</th>
                <th>Date</th>
                <th width="120">Equatorial Radius, a (meters)</th>
                <th width="120">Polar Radius, b (meters)</th>
                <th width="120">Flattening</th>
                <th>Use</th>
            </tr>
            <tr>
                <td>GRS 80<sup>2</sup></td>
                <td>1980</td>
                <td>6378137</td>
                <td>6356752.3</td>
                <td>1/298.257</td>
                <td>Newly adopted</td>
            </tr>
            <tr>
                <td>WGS 72<sup>3</sup></td>
                <td>1972</td>
                <td>6378135</td>
                <td>6356750.5</td>
                <td>1/298.26</td>
                <td>NASA; Dept. of Defense;oil companies</td>
            </tr>
            <tr>
                <td>Australian</td>
                <td>1965</td>
                <td>6378160</td>
                <td>6356774.7</td>
                <td>1/298.25<sup>*</sup></td>
                <td>Australia</td>
            </tr>
            <tr>
                <td>Krassovsky</td>
                <td>1940</td>
                <td>6378245</td>
                <td>6356863.0</td>
                <td>1/298.3<sup>*</sup></td>
                <td>Soviet Union</td>
            </tr>
            <tr>
                <td>International</td>
                <td>1924</td>
                <td style="vertical-align: middle;" rowspan="2">6378388</td>
                <td style="vertical-align: middle;" rowspan="2">6356911.0</td>
                <td style="vertical-align: middle;" rowspan="2">1/297<sup>*</sup></td>
                <td style="vertical-align: middle;" rowspan="2">
                    Reminder of the
                    world<sup>&#8224;</sup>
                </td>
            </tr>
            <tr>
                <td>Hayford</td>
                <td>1909</td>
            </tr>
            <tr>
                <td>Clarke<sup>4</sup></td>
                <td>1880</td>
                <td>6378249.1</td>
                <td>6356514.9</td>
                <td>1/293.32<sup>**</sup></td>
                <td>Most of Africa; France</td>
            </tr>
            <tr>
                <td>Clarke</td>
                <td>1866</td>
                <td>6378206.4</td>
                <td>6356583.8</td>
                <td>1/294.98</td>
                <td>North America; Philippines</td>
            </tr>
            <tr>
                <td>Airy</td>
                <td>1830</td>
                <td>6377563.4</td>
                <td>6356256.9</td>
                <td>1/299.32<sup>**</sup></td>
                <td>Great Britain</td>
            </tr>
            <tr>
                <td>Bessel</td>
                <td>1841</td>
                <td>6377397.2</td>
                <td>6356079.0</td>
                <td>1/299.15<sup>**</sup></td>
                <td>Central Europe; Chile; Indonesia</td>
            </tr>
            <tr>
                <td>Everest</td>
                <td>1830</td>
                <td>6377276.3</td>
                <td>6356075.4</td>
                <td>1/300.80<sup>**</sup></td>
                <td>India; Burma; Pakistan; Afghanistan; Thailand; etc.</td>
            </tr>
            <tr>
                <td class="ftn" style="border-style:solid; border-top-width:2px;" colspan="6">
                    Values are shown to accuracy in excess
                    significant figures, to reduce computational confusion.<br />
                    <sup>1</sup> Mahng, 1973, p. 7; Thomas, 1970, p. 84; Army, 1973,
                    p. 4, endmap; Colvocoresses, 1969, p. 33; World Geodetic, 1974.<br />
                    <sup>2</sup> Geodetic Reference System. Ellipsoid derived from
                    adopted model of Earth. WGS 84 has same dimensions within accuracy
                    shown.<br />
                    <sup>3</sup>World Geodetic System. Ellipsoid derived from adopted
                    model of Earth.<br />
                    <sup>4</sup>Also used in some regions with various modified
                    constants.<br />
                    <sup>*</sup>Taken as exact values. The third number (where two
                    are asterisked) is derived using the following relationships: <span class="equat">b = a (1-f); f = 1-(b/a)</span>. Where only one is
                    asterisked (for 1972 and 1980), certain physical constants not shown
                    are taken as exact, but f as shown is the adopted value.<br />
                    <sup>**</sup>Derived from a and b, which are rounded off as shown
                    after conversions from lengths in feet.<br />
                    <sup>&#8224;</sup>Other than regions listed elsewhere in column, or
                    some smaller areas.
                </td>
            </tr>
        </tbody>
    </table>

There are over a dozen other principal ellipsoids, however, which are still used by one or more countries (table 1). The different dimensions do not only result from varying accuracy in the geodetic measurements (the measurements of locations on the Earth), but the curvature of the Earth's surface (geoid) is not uniform due to irregularities in the gravity field.

Until recently, ellipsoids were only fitted to the Earth's shape over a particular country or continent. The polar axis of the reference ellipsoid for such a region, therefore, normally does not coincide with the axis of the actual Earth, although it is assumed to be parallel. The same applies to the two equatorial planes. The discrepancy between centers is usually a few hundred meters at most. Only satellite-determined coordinate systems, such as the WGS 72 and GRS 80 mentioned below, are considered geocentric. Ellipsoids for the latter systems represent the entire Earth more accurately than ellipsoids determined from ground measurements, but they do not generally give the "best fit" for a particular region.

The reference ellipsoids used prior to those determined by satellite are related to an "initial point" of reference on the surface to produce a datum, the name given to a smooth mathematical surface that closely fits the mean sea-level surface throughout the area of interest. The "initial point" is assigned a latitude, longitude, elevation above the ellipsoid, and azimuth to some point. Once a datum is adopted, it provides the surface to which ground control measurements are referred. The latitude and longitude of all the control points in a given area are then computed relative to the adopted ellipsoid and the adopted "initial point." The projection equations of large-scale maps must use the same ellipsoid parameters as those used to define the local datum; otherwise, the projections will be inconsistent with the ground control.

----
The first official geodetic datum in the United States was the New England Datum, adopted in 1879. It was based on surveys in the eastern and northeastern states and referenced to the Clarke Spheroid of 1866, with triangulation station Principio, in Maryland, as the origin. The first transcontinental arc of triangulation was completed in 1899, connecting independent surveys along the Pacific Coast. In the intervening years, other surveys were extended to the Gulf of Mexico. The New England Datum was thus extended to the south and west without major readjustment of the surveys in the east. In 1901, this expanded network was officially designated the United States Standard Datum, and triangulation station Meades Ranch, in Kansas, was the origin. In 1913, after the geodetic organizations of Canada and Mexico formally agreed to base their triangulation networks on the United States network, the datum was renamed the North American Datum.

By the mid-1920's, the problems of adjusting new surveys to fit into the existing network were acute. Therefore, during the 5-year period 1927-1932 all available primary data were adjusted into a system now known as the North American 1927 Datum<sup>***</sup> The coordinates of station Meades Ranch were not changed but the revised coordinates of the network comprised the North American 1927 Datum (National Academy of Sciences, 1971, p. 7).

----
Satellite data have provided geodesists with new measurements to define the best Earth-fitting ellipsoid and for relating existing coordinate systems to the Earth's center of mass. U.S. military efforts produced the World Geodetic System 1966 and 1972 (WGS 66 and WGS 72). The National Geodetic Survey is planning to replace the North American 1927 Datum with a new datum, the North American Datum 1983 (NAD 83), which is Earth-centered based on both satellite and terrestrial data. The IUGG in 1980 adopted a new model of the Earth called the Geodetic Reference System (GRS) 80, from which is derived an ellipsoid which has been adopted for the new North American datum. As a result, the latitude and longitude of almost every point in North America will change slightly, as well as the rectangular coordinates of a given latitude and longitude on a map projection. The difference can reach 300 m. U.S. military agencies are developing a worldwide datum called WGS 84, also based on GRS 80, but with slight differences. For Earth-centered datums, there is no single "origin" like Meades Ranch on the surface. The center of the Earth is in a sense the origin.
    <table>
        <colgroup>
            <col /></col>
            <col align="right" />
        </colgroup>
        <caption>
            TABLE 2.-Official figures for extraterrestrial mapping
            <div class="ftn">
                [(From Dovics, et a]., 198: Dovics, Private commun., 1985.)
                Radius of Moon chosen so that all elevations are positive. Radius of
                Mars is based on a level of 6.1 millibar atmospheric pressure;
                Mars has both positive and negative elevations.]
            </div>
        </caption>
        <tr style="border-style:solid; border-top-width:2px; border-bottom-width:2px;">
            <th width=500>Body</th>
            <th width=60>Equatorial radius a* (kilometers)</th>
        </tr>
        <tr><td>Earth's Moon    </td><td>1,738.0</td></tr>
        <tr><td>Mercury         </td><td>2,439.0</td></tr>
        <tr><td>Venus           </td><td>6,051.0</td></tr>
        <tr><td>Mars            </td><td>3,393.4<sup>*</sup></td></tr>
        <tr style="border-style:solid; border-top-width:2px; border-bottom-width:2px;">
            <td colspan=2 style="text-align: center;">Galilean satellites of Jupiter</td>
        </tr>
        <tr><td>Io              </td><td>1,815</td></tr>
        <tr><td>Europa          </td><td>1,569</td></tr>
        <tr><td>Ganymede       </td><td>2,631</td></tr>
        <tr><td>Callisto        </td><td>2,400</td></tr>
        <tr style="border-style:solid; border-top-width:2px; border-bottom-width:2px;">
            <td colspan=2 style="text-align: center;">Satellites of Saturn</td>
        </tr>
        <tr><td>Mimas           </td><td>  198</td></tr>
        <tr><td>Enceladus       </td><td>  253</td></tr>
        <tr><td>Tethys          </td><td>  525</td></tr>
        <tr><td>Dione           </td><td>  560</td></tr>
        <tr><td>Rhea            </td><td>  765</td></tr>
        <tr><td>Titan           </td><td>2,575</td></tr>
        <tr><td>Iapetus         </td><td>  725</td></tr>
        <tr style="border-style:solid; border-top-width:2px; border-bottom-width:2px;">
            <td colspan=2 style="text-align: center;">Satellites of Uranus</td>
        </tr>
        <tr><td>Ariel           </td><td>  665</td></tr>
        <tr><td>Umbriel         </td><td>  555</td></tr>
        <tr><td>Titania         </td><td>  800</td></tr>
        <tr><td>Oberon          </td><td>  815</td></tr>
        <tr><td>Miranda         </td><td>  250</td></tr>
        <tr style="border-style:solid; border-top-width:2px; border-bottom-width:2px;">
            <td colspan=2 style="text-align: center;">Satellite of Neptune</td>
        </tr>
        <tr><td>Triton          </td><td>1,600</td></tr>
        <tr style="border-style:solid; border-top-width:2px;">
            <td colspan=2 class="ftn">
                * Above bodies are taken as spheres except for Mars,
                an ellipsoid with eccentricity $e$ of 0.101929. Flattening
                    $f = 1-(1-e^2)^{1/2}$
                Unlisted satellites are taken as triaxial ellipsoids, or mapping
                is not expected in the near future.
                Mimas and Enceladus have also been given ellipsoidal parameters, but not for mapping.
            </td>
        </tr>
    </table>
For the mapping of other planets and natural satellites, only Mars is treated as an ellipsoid. Other bodies are taken as spheres (table 2), although some irregular satellites have been treated as triaxial ellipsoids and are "mapped" orthographically. In most map projection formulas, some form of the eccentricity $ e $ is used, rather than the flattening $ f $ The relationship is as follows:
$$ e^2 = 2f-f^2  \text{ or } f = 1- (1-e^2)^{1/2} $$
 For the Clarke $ e^2 $ is 0.006768658. For the GRS 80,  $ e^2 $ is 0.0066943800.

### AUXILIARY LATITUDES
By definition, the geographic or geodetic latitude, which is normally the latitude referred to for a point on the Earth, is the angle which a line perpendicular to the surface of the ellipsoid at the given point makes with the plane of the Equator. It is slightly greater in magnitude than the geocentric latitude, except at the Equator and poles, where it is equal. The geocentric latitude is the angle made by a line to the center of the ellipsoid with the equatorial plane. Formulas for the spherical form of a given map projection may be adapted for use with the ellipsoid by substitution of one of various "auxiliary latitudes" in place of the geodetic latitude. Oscar S. Adams (1921) developed series and other formulas for five substitute latitudes, generally building upon concepts described in the previous century. In using them, the ellipsoidal Earth is, in effect, first transformed to a sphere under certain restraints such as conformality or equal area, and the sphere is then projected onto a plane. If the proper auxiliary latitudes are chosen, the sphere may have either true areas, true distances in certain directions, or conformality, relative to the ellipsoid. Spherical map projection formulas may then be used for the ellipsoid solely with the substitution of the appropriate auxiliary latitudes.

It should be made clear that this substitution will generally not give the projection in its preferred form. For example, using the conformal latitude (defined below) in the spherical Transverse Mercator equations will give a true ellipsoidal, conformal Transverse Mercator, but the central meridian cannot be true to scale. More involved formulas are necessary, since uniform scale on the central meridian is a standard requirement for this projection as commonly used in the ellipsoidal form. For the regular Mercator, on the other hand, simple substitution of the conformal latitude is sufficient to obtain both conformality and an Equator of correct scale for the ellipsoid.

Adams gave formulas for all these auxiliary latitudes in closed or exact form, as well as in series, except for the authalic (equal-area) latitude, which could also have been given in closed form. Both forms are given below. For improved computational efficiency using the series, see equations (3-34) through (3-39). In finding the auxiliary latitude from the geodetic latitude, the closed form may be more useful for computer programs. For the inverse cases, to find geodetic from auxiliary latitudes, most closed forms require iteration, so that the series form is probably preferable. The series form shows more readily the amount of deviation from the geodetic latitude $ \phi $. The formulas given later for the individual ellipsoidal projections incorporate these formulas as needed, so there is no need to refer back to these for computation, but the various auxiliary latitudes are grouped together here for comparison. Some of Adams' symbols have been changed to avoid confusion with other terms used in this book.

#### The conformal latitude $ \chi $
giving a sphere which is truly conformal in accordance with the ellipsoid (Adams, 1921, p. 18, 84)
{{<math tag="3-1">}} \chi = 2\arctan\{\tan{(\pi/4 + \phi/2)}[(1-e\sin\phi)/(1+e\sin\phi)]^{e/2}\}-\pi/2 {{</math>}}
{{<math tag="3-1a">}} \chi = 2\arctan\left[\left(\frac{1+\sin{\phi}} {1-\sin{\phi}}\right)\left(\frac{1-e\sin{\phi}}{1+e\sin{\phi}}\right)^e\right]^{1/2} -\pi/2 {{</math>}}
{{<math tag="3-2">}}\begin{align}
    \chi = \phi &- \left( e^2/2 +5e^4/24 + 281e^8/5760 + \dots \right)\sin{2\phi} \\
                &+\left(5e^4/48+7e^6/80+697e^8/11520+ \dots\right)\sin{4\phi} \\
                &-\left(13e^6/480+461e^8/13440+ \dots \right)\sin{6\phi} \\
                &+\left(1237e^8/161280\right)\sin{8\phi} +\dots \end{align}
{{</math>}}
with $ \chi $ and $ \phi $ in radians. In seconds of arc for the Clarke 1866 ellipsoid,
{{<math tag="3-3">}} \chi = \phi - 700.0427^"\sin{2\phi}+0.9900^"\sin{4\phi}+0.0017^"\sin{6\phi} {{</math>}}

The inverse formula, for $ \phi $ in terms of $ \chi $, may be a rapid iteration of an exact rearrangement of (3-1), successively placing the value of $ \phi $ calculated on the left side into the right side of (3-4) for the next calculation, using $ \chi $ as the first trial $ \phi $. When $ \phi $ changes by less than a desired convergence value, iteration is stopped.  
{{<math tag="3-4">}} \phi = 2 \arctan { \left\{ \tan(\pi/4+\chi/2)\left[(1+e\sin\phi)/(1-e\sin\phi) \right]^{e/2} \right\} } - \pi/2 {{</math>}}
The inverse formula may also be written as a series, without iteration (Adams, 1921, p. 85):
{{<math tag="3-5">}} \begin{align}
    \phi = \chi &+(e^2/2 + 5e^4/24+e^6/12+13e^8/360+\dots)\sin{2\chi} \\
                &+ (7e^4/48+29e^6/240+811e^8/11520+\dots)\sin{4\chi} \\
                &+ (7e^6/120+81e^8/1150+\dots)\sin{6\chi} \\
                &+ (4279e^8/161280+\dots)\sin{8\chi}+\dots \end{align}
{{</math>}}
or, for the Clarke 1866 ellipsoid, in seconds,
{{<math tag="3-6">}} \phi = \chi + 700.0420^"\sin{2\chi} + 1.3859^"\sin{4\chi} + 0.0037^"\sin{6\chi} {{</math>}}
Adams referred to $ \chi $ as the isometric latitude, but this name is now applied to $ \psi $, a separate very nonlinear function of $ \phi $, which is directly proportional to the spacing of parallels of latitude from the Equator on the ellipsoidal Mercator projection. Another common symbol for isometric latitude is $ \tau $. It is also useful for other conformal projections.
{{<math tag="3-7">}} \psi = \ln\left\{\tan{(\pi/4+\phi/2)}\left[ (1-e\sin\phi)/(1+e\sin\phi)\right]^{e/2} \right\} {{</math>}}

Because of the rapid variation from $ \phi $, $ \psi $ is not given here in series form. By comparing equations (3-1) and (3-7), it may be seen, however, that
{{<math tag="3-8">}} \psi = \ln{\tan{(\pi/4 + \chi/2)}} {{</math>}}
so that $ \chi $ may be determined from the series in [(3-2)](#3-2) and converted to $ \psi $ with (3-8), although there is no particular advantage over using (3-7).

For the inverse of [(3-7)](#3-7), to find $ \phi $ in terms of $ \psi $, the choice is between iteration of a closed equation [(3-10)](#3-10) and use of series [(3-5)](#3-5) with a simple inverse of (3-8):
{{<math tag="3-9">}} \chi = 2\arctan{\mathrm{e}^\psi} - \pi/2 {{</math>}}
where $\mathrm{e}$ is the base of natural logarithms, 2.71828.

For the iteration, apply the principle of successive substitution used in (3-4) to the following, with $(2\arctan\mathsf{e}^\psi - \pi/2))$ as the first trial $ \phi $:
{{<math tag="3-10">}} \phi = 2\arctan{\left\{\mathrm{e}^\psi[(1+e\sin{\phi})/(1-e\sin{\phi})]^{e/2} \right\}} - \pi/2 {{</math>}}
Note that $ e $ and $\mathrm{e}$ are not the same.

#### The authalic latitude $ \beta $
on a sphere having the same surface area as the ellipsoid, provides a sphere which is truly equal-area (authalic), relative to the ellipsoid:
{{<math tag="3-11">}} \beta = \arcsin(q/q_p) {{</math>}}
where
{{<math tag="3-12">}} q= (1-e^2)\{ \sin\phi/(1-e^2\sin^2\phi)-(1/(2e))\ln[(1-e\sin\phi)/(1+e\sin\phi)]\} {{</math>}}
and $ q_p $ is $ q $ evaluated for a $ \phi $ of 90&deg;. The radius $ R_q $ of the sphere having the same surface area as the ellipsoid is calculated as follows:
{{<math tag="3-13">}} R_q = a(q_p/2)^{1/2} {{</math>}}
where a is the semimajor axis of the ellipsoid. For the Clarke 1866, $ q_p $ is 6,370,997.2 m.

The equivalent series for $ \beta $ (Adams, 1921, p. 85)
{{<math tag="3-14">}} \begin{align}
    \beta = \phi &-(e^2/3+31e^4/180+59e^6/560+\dots)\sin{2\phi} \\
                 &+ (17e^4/360+61e^6/1260+...)\sin{4\phi} - (383e^6/45360)\sin{6\phi}  \end{align}
{{</math>}}
where $ \beta $ and $ \phi $ are in radians. For the Clarke 1866 ellipsoid, the formula in seconds of arc is:
{{<math tag="3-15">}} \beta = \phi -467.0129''\sin{2\phi}+0.4494''\sin{4\phi}+0.0005''\sin{6\phi} {{</math>}}

For $ \phi $ in terms of $ \beta $, an iterative inverse of (3-12) may be used with the inverse of [(3- 11)](#3-11):
{{<math tag="3-16">}} \phi = \phi + \frac{(1-e^2\sin^2{\phi})^2}{2\cos{\phi}}\left[ \frac{q}{1-e^2} - \frac{\sin{\phi}}{1-e^2\sin^2{\phi}} + 
        \frac 1{2e} \ln{\left( \frac{1-e\sin{\phi}}{1+e\sin{\phi}}\right)}\right] {{</math>}}
where
{{<math tag="3-17">}} q = q_p\sin{\beta} {{</math>}}
$ q_p $ is found from [(3-12)](#3-12) for a $ \phi $ of 90&deg;, and the first trial $ \phi $ is $ \arcsin (q/2) $, used on the right side of (3-16) for the calculation of $ \phi $ on the left side, which is then used on the right side until the change is less than a preset limit. (Equation (3-16) is derived from equation [(3-12)](#3-12) using a standard Newton-Raphson iteration.)

To find $ \phi $ from $ \beta $ with a series:
{{<math tag="3-18">}} \begin{align}
    \phi = \beta &+ (e^2/3+31e^4/180+517e^6/5040+\dots)\sin{2\beta} \\
                 &+ (23e^4/360+251e^6/3780+\dots)\sin{4\beta} \\
                 &+ (761e^6/45360+\dots)\sin{6\beta}+\dots \end{align}
{{</math>}}
or, for the Clarke 1866 ellipsoid, in seconds,
{{<math tag="3-19">}} \phi = \beta + 467.0127^"\sin{2\beta} + 0.6080^"\sin{4\beta} +0.0011^"\sin{6\beta} {{</math>}}

#### The rectifying latitude $ \mu $ 
(designated $ \omega $ by Adams), giving a sphere with correct distances along the meridians, requires a series in any case (or a numerical integration which is not shown).
{{<math tag="3-20">}} \mu = \pi M/2M_p {{</math>}}
where
{{<math tag="3-21">}} \begin{align}
    M = a[&(1-e^2/4-3e^4/64-5e^6/256-\dots)\phi \\
          -&(3e^2/8+3e^4/32+45e^6/1024+\dots)\sin{2\phi} \\
          +&(15e^4/256+45e^6/1024+\dots)\sin{4\phi} - (35e^6/3072+\dots)\sin{6\phi}+\dots] \end{align}
{{</math>}}
and $ M_p $ is $ M $ evaluated for a $ \phi $ of 90&deg;, for which all sine terms drop out. $M$ is the distance along the meridian from the Equator to latitude $\phi$. For the Clarke 1866 ellipsoid, the constants simplify to, in meters,
{{<math tag="3-22">}} M = 111132.0894\phi&deg; - 16216.94\sin{2\phi}+17.21\sin{4\phi}-0.02\sin{6\phi} {{</math>}}
The first coefficient in (3-21) has been multiplied by $ \pi/180 $ to use $ \phi $ in degrees. To use $\mu$ properly, the radius $ R_M $ of the sphere must be $2M_p/\pi$ for correct scale. For the Clarke 1866 ellipsoid, $ R_M $ is 6,367,399.7 m. A series combining (3-20) and (3-21) is given by Adams (1921, p. 125):
{{<math tag="3-23">}} \begin{align}
    \mu = \phi &-(3e_1/2-9e_1^3/16+\dots)\sin{2\phi}+(15e_1^2/16-15e_1^4/32+\dots)\sin{4\phi} \\
               &-(35e_1^3/48-\dots)\sin{6\phi}+(315e_1^4/512-\dots)\sin{8\phi}+\dots \end{align}
{{</math>}}
where
{{<math tag="3-24">}} e_1 = [1-(1-e^2)^{1/2}]/[1+(1-e^2)^{1/2}] {{</math>}}
and $ \phi $ and $ \mu $ are given in radians. For the Clarke 1866 ellipsoid, in seconds,
{{<math tag="3-25">}} \mu = \phi - 525.3298^"\sin{2\phi}+0.5575^"\sin{4\phi}+0.0007^"\sin{6\phi} {{</math>}}

The inverse of equations (3-23) or (3-25), for $\phi$ in terms of $\mu$, given $M$, will be found useful for several map projections to avoid iteration, since a series is required in any case (Adams, 1921, p. 128).
{{<math tag="3-26">}} \begin{align}
    \phi = \mu &+ (3e_1/2-27e_1^3/32+\dots)\sin{2\mu}+(21e_1^2/16-55e_1^4/32+\dots)\sin{4\mu} \\
               &+ (151e_1^3/96-\dots)\sin{6\mu}+(1097e_1^4/512-\dots)\sin{8\mu}+\dots \end{align}
{{</math>}}
where $e_1$ is found from equation [(3-24)](#3-24) and $\mu$ from [(3-20)](#3-20), but $M$ is given, not calculated from (3-21). For the Clarke 1866 ellipsoid, in seconds of arc,
{{<math tag="3-27">}} \phi = \mu + 525.3295^"\sin{2\mu}+0.7805^"\sin{4\mu}+0.0016^"\sin{6\mu} {{</math>}}
        
The following closed and exact formulas, from which equations [(3-20)](#3-20) through [(3-25)](#3-25) may be ultimately derived, are given as a matter of interest.
{{<math tag="3-27a">}} M=a(1-e^2)\int_0^\phi [1/(1-e^2\sin^2{\phi})^{3/2}]\,\mathrm{d}\phi {{</math>}}

Equation (3-27a), the integral of [(4-19)]({{<ref "sect_4#4-19">}}) in a later chapter, may not be exactly integrated. While Simpson's rule may be used, it is not as satisfactory here as it is in some other cases (equation (27-6a), etc.). However, (3-27a) may be transformed to an elliptic integral of the second kind, for which the arithmetic-geometric-mean (A.G.M.) iteration can provide any desired accuracy within computer programming limitations (Messenger, T. J., pers. commun., 1984; Abramowitz and Stegun, 1964, p. 598-99):
{{<math tag="3-27b">}} M=a\left[\int_0^\phi(1-e^2\sin^2{\phi})^{1/2} \, \mathrm{d}\phi - e^2\sin{\phi}\cos{\phi}/(1-e^2\sin^2{\phi})^{1/2}\right] {{</math>}}

The remaining auxiliary latitudes listed by Adams (1921, p. 84) are more useful for derivation than in substitutions for projections:

#### The geocentric latitude $\phi_g$ 
(designated $\psi$ by Adams) referred to in the first paragraph in this section is simply as follows:
{{<math tag="3-28">}} \phi_g = \arctan[(1-e^2)\tan\phi] {{</math>}}
As a series,
{{<math tag="3-29">}} \phi_g = \phi - e_2\sin{2\phi} + (e_2^2/2)\sin{4\phi} - (e_2^3/3)\sin{6\phi} +\dots {{</math>}}
where $\phi_g$ and $\phi$, are in radians and $e_2 = e^2/(2-e^2)$. For the Clarke 1866 ellipsoid, in seconds of arc,
{{<math tag="3-30">}} \phi_g = \phi - 700.44^"\sin{2\phi} + 1.19^"\sin{4\phi} {{</math>}}

#### The reduced or parametric latitude $\eta$ 
(designated &theta; by Adams) of a point on the ellipsoid is the latitude on a sphere of radius $a$ for which the parallel has the same radius as the parallel of geodetic latitude $\phi$ on the ellipsoid through the given point:
{{<math tag="3-31">}} \eta = \arctan[(1-e^2)^{1/2}\tan\phi] {{</math>}}
As a series,
{{<math tag="3-32">}} \eta = \phi -e_1\sin{2\phi}+(e_1^2/2)\sin{4\phi}-(e_1^3/3)\sin{6\phi}+\dots  {{</math>}}
where $e_1$ is found from equation [(3-24)]({{<ref "#3-24">}}), and $\eta$ and $\phi$ are in radians. For the Clarke 1866 ellipsoid, using seconds of arc,
{{<math tag="3-33">}} \eta = \phi - 350.22^"\sin{2\phi} +0.30^"\sin{4\phi} {{</math>}}
The inverses of equations [(3-28)](#3-28) and [(3-31)](#3-31) for $\phi$ in terms of geocentric or reduced latitudes are relatively easily derived and are noniterative. The inverses of series equations (3-29), (3-30), (3-32), and (3-33) are therefore omitted.

Table 3 lists the correction for these auxiliary latitudes for each 5&deg; of geodetic latitude.
{{<figure src="../table3.png" link="../table3.png" caption="__TABLE 3__.&mdash; Corrections for auxiliary latitudes on the Clarke 1866 ellipsoid">}}

### COMPUTATION OF SERIES
Most of the trigonometric series approximations throughout this book (for example, equations (3-2) and (3-5)) are given in terms of multiple angles. In this arrangement, the coefficients converge to zero more rapidly, but handling by computer is normally somewhat slower than that occurring with nested trigonometric series. The latter are equivalent to power polynomials and require a minimum number of computations of trigonometric functions from series built into the software of most computers.

The pertinent series in this book fall into one of three forms (3-34), (3-36) and (3-38), in which $\phi$ may be any variable, and $f(\phi)$ is the function:  
If:
{{<math tag="3-34">}} f(\phi) = A\sin{2\phi} + B\sin{4\phi} + C\sin{6\phi} + D\sin{8\phi} {{</math>}}
then
{{<math tag="3-35">}} f(\phi) = \sin{2\phi}(A' + \cos{2\phi}(B'+cos{2\phi}(C' +D'\cos{2\phi}))) {{</math>}}
where
$$ \eqalign {
        A' &= A - C \cr
        B' &= 2B-4D \cr
        C' &= 4C \cr
        D' &= 8D
}$$
If:
{{<math tag="3-36">}} f(\phi) = A\sin\phi + B\sin{3\phi} + C\sin{5\phi} + D\sin{7\phi} {{</math>}}
then
{{<math tag="3-37">}} f(\phi) = \sin\phi(A'+\sin^2\phi(B'+\sin^2\phi(C' + D\sin^2\phi)) {{</math>}}
where
$$ \eqalign {
        A' &= A + 3B + 5C + 7D \cr
        B' &= -4B - 20C - 56D \cr
        C' &= 16C + 112D \cr
        D' &= -64D
}$$
If:
{{<math tag="3-38">}} f(\phi) = A + B\cos{2\phi} + C\cos{4\phi} + D\cos{6\phi} + E\cos{8\phi} {{</math>}}
then
{{<math tag="3-39">}} f(\phi) = A' + \cos{2\phi}(B' + \cos{2\phi}(C'+\cos{2\phi}(D' + E'\cos{2\phi}))) {{</math>}}
where
$$ \eqalign {
        A' &= A - C + E \cr
        B' &= B - 3D \cr
        C' &= 2C - 8E \cr
        D' &= 4D \cr
        E' &= 8E
}$$

These are exact equivalents of the series as shown. First the primed coefficients are computed once for the full set of conversions from the original coefficients of [(3-34)](#3-34), [(3-36)](#3-36), or [(3-38)](#3-38), then $\sin{2\phi}$ and $\cos{2\phi}$ are computed once for each point in [(3-35)](#3-35), or $\sin{\phi}$ and $\sin^2{\phi}$ once for each point in [(3-37)](#3-37), or $\cos{2\phi}$ once for each point in [(3-39)](#3-39). Computation of $f(\phi)$ may then proceed from the innermost nest outward with a speed up to 25-35 percent faster than that with multiple-angle series.

For more efficient transformation of a great number of points from one set of coordinates to another, polynomial approximations for the entire projection may be considered. This is normally only practical for a limited region. For techniques in determining the polynomial coefficients, the reader is referred to Snyder (1985a, p. 5-6, 15-24).


## 4. SCALE VARIATION AND ANGULAR DISTORTION
Since no map projection maintains correct scale throughout, it is important to determine the extent to which it varies on a map. On a world map, qualitative distortion is evident to an eye familiar with maps, after noting the extent to which landmasses are improperly sized or out of shape, and the extent to which meridians and parallels do not intersect at right angles, or are not spaced uniformly along a given meridian or given parallel. On maps of countries or even of continents, distortion may not be evident to the eye, but it becomes apparent upon careful measurement and analysis.

### TISSOT'S INDICATRIX
In 1859 and 1881, Nicolas Auguste Tissot published a classic analysis of the distortion which occurs on a map projection (Tissot, 1881; Adams, 1919, p. 153-163; Maling, 1973, p. 64-67). The intersection of any two lines on the Earth is represented on the flat map with an intersection at the same or a different angle. At almost every point on the Earth, there is a right angle intersection of two lines in some direction (not necessarily a meridian and a parallel) which are also shown at right angles on the map. All the other intersections at that point on the Earth will not intersect at the same angle on the map, unless the map is conformal, at least at that point. The greatest deviation from the correct angle is called $\omega$, the maximum angular deformation. For a conformal map, $\omega$ is zero. (In some texts, $2\omega$ is used rather than $\omega$.)

Tissot showed this relationship graphically with a special ellipse of distortion called an indicatrix. An infinitely small circle on the Earth projects as an infinitely small, but perfect, ellipse on any map projection. If the projection is conformal, the ellipse is a circle, an ellipse of zero eccentricity. Otherwise, the ellipse has a major axis and minor axis which are directly related to the scale distortion and to the maximum angular deformation.
{{<figure src="../figure3.png" link="../figure3.png" caption="__FIGURE 3__.&mdash; Tissot's Indicatrix. An infinitely small circle on the Earth (A) appears as an ellipse on a typical map (B). On a conformal map, (B) is a circle of the same or of a different size.">}}

In figure 3, the left-hand drawing shows a circle representing the infinitely small circular element, crossed by a meridian $\lambda$ and parallel $\phi$ on the Earth. The right-hand drawing shows this same element as it may appear on a typical map projection. For general purposes, the map is assumed to be neither conformal nor equal-area. The meridian and parallel may no longer intersect at right angles, but there is a pair of axes which intersect at right angles on both Earth (AB and CD) and map (A'B' and C'D'). There is also a pair of axes which intersect at right angles on the Earth (EF and GH), but at an angle on the map (E'F' and G'H') farthest from a right angle. The latter case has the maximum angular deformation $\omega$. The orientation of these axes is such that $\mu +\mu' = 90&deg; $, or, for small distortions, the lines fall about halfway between A'B' and C'D'. The orientation is of much less interest than the size of the deformation. If $a$ and $b$, the major and minor semiaxes of the indicatrix, are known, then
{{<math tag="4-1">}} \sin(\omega/2) = |a-b|/(a+b) {{</math>}}
If lines $\lambda$ and $\phi$ coincide with $a$ and $b$, in either order, as in cylindrical and conic projections, the calculation is relatively simple, using equations [(4-2)](#4-2) through [(4-6)](#4-6) given below.

Scale distortion is most often calculated as the ratio of the scale along the meridian or along the parallel at a given point to the scale at a standard point or along a standard line, which is made true to scale. These ratios are called "scale factors." That along the meridian is called $h$ and along the parallel, $k$. The term "scale error" is frequently applied to $(h-1)$ and $(k-1)$. If the meridians and parallels intersect at right angles, coinciding with a and b in figure 3, the scale factor in any other direction at such a point will fall between $h$ and $k$. Angle $\omega$ may be calculated from equation [(4-1)](#4-1), substituting $h$ and $k$ in place of $a$ and $b$. In general, however, the computation of $\omega$ is much more complicated, but is important for knowing the extent of the angular distortion throughout the map.

The formulas are given here to calculate $h$, $k$, and $\omega$ but the formulas for $h$ and $k$ are applied specifically to all projections for which they are deemed useful as the projection formulas are given later. Formulas for $\omega$ for specific projections have generally been omitted.

Another term occasionally used in practical map projection analysis is "convergence" or "grid declination." This is the angle between true north and grid north (or direction of the Y axis). For regular cylindrical projections this is zero, for regular conic and polar azimuthal projections it is a simple function of longitude, and for other projections it may be determined from the projection formulas by calculus from the slope of the meridian $({\mathrm{d}x}/{\mathrm{d}y})$ at a given latitude. It is used primarily by surveyors for fieldwork with topographic maps. Convergence is not discussed further in this work.

### DISTORTION FOR PROJECTIONS OF THE SPHERE
The formulas for distortion are simplest when applied to regular cylindrical, conic (or conical), and polar azimuthal projections of the sphere. On each of these types of projections, scale is solely a function of the latitude.

Given the formulas for rectangular coordinates x and y of any cylindrical projection as functions solely of longitude $\lambda$ and latitude $\phi$, respectively,
{{<math tag="4-2">}} h = \mathrm{d}y/(R\mathrm{d}\phi) {{</math>}}
{{<math tag="4-3">}} k = \mathrm{d}x/(R\cos{\phi}\mathrm{d}\lambda) {{</math>}}
Given the formulas for polar coordinates $\rho$ and $\theta$ of any conic projection as functions solely of $\phi$ and $\lambda$, respectively, where $n$ is the cone constant or ratio of $\theta$ to $(\lambda - \lambda_0)$,
{{<math tag="4-4">}} h = -\mathrm{d}\rho/(R\mathrm{d}\phi) {{</math>}}
{{<math tag="4-5">}} k = n\rho/(R\cos{\phi}) {{</math>}}
    {{<figure src="../figure4.png" link="../figure4.png">}}
    {{<figure src="../figure4-a.png" link="../figure4-a.png">}}
    {{<figure src="../figure4-b.png" link="../figure4-b.png" caption="__FIGURE 4__.&mdash; Distortion patterns on common conformal map projections. The Transverse Mercator and the Stereographic are shown with reduction in scale along the central meridian or at the center of projection, respectively. If there is no reduction, there is a single line of true scale along the central meridian on the Transverse Mercator and only a point of true scale at the center of the Stereographic. The illustrations are conceptual rather than precise, since each base map projection is an identical conic." >}}

Given the formulas for polar coordinates $\rho$ and $\theta$ of any polar azimuthal projection as functions solely of $\phi$ and $\lambda$, respectively, equations [(4-4)](#4-4) and [(4-5)](#4-5) apply, with $n$ equal to 1.0:
$$ h = -\mathrm{d}\rho/(R\mathrm{d}\phi) \tag{4-4} $$
{{<math tag="4-6">}} k = \rho/(R\cos{\phi}) {{</math>}}
Equations [(4-4)](#4-4) and [(4-6)](#4-6) may be adapted to any azimuthal projection centered on a point other than the pole. In this case $h'$ is the scale factor in the direction of a straight line radiating from the center, and $k'$ is the scale factor in a direction perpendicular to the radiating line, all at an angular distance $c$ from the center:
{{<math tag="4-7">}} h' = \mathrm{d}\rho/(R\mathrm{d}c) {{</math>}}
{{<math tag="4-8">}} k' = \rho/(R\sin{c}) {{</math>}}

An analogous relationship applies to scale factors on oblique cylindrical and conic projections.

For any of the pairs of equations from [(4-2)](#4-2) through [(4-8)](#4-8), the maximum angular deformation $\omega$ at any given point is calculated simply, as stated above,
{{<math tag="4-9">}} \sin{(\omega/2)} = |h-k|/(h+k) {{</math>}}
where $|h-k|$ signifies the absolute value of $(h-k)$, or the positive value without regard to sign. For equations [(4-7)](#4-7) and [(4-8)](#4-8), $h'$ and $k'$ are used in [(4-9)](#4-9) instead of $h$ and $k$, respectively. In figure 4, distortion patterns are shown for three conformal projections of the United States, choosing arbitrary lines of true scale.

For the general case, including all map projections of the sphere, rectangular coordinates $x$ and $y$ are often both functions of both $\phi$ and $\lambda$, so they must be partially differentiated with respect to both $\phi$ and $\lambda$, holding $\lambda$ and $\phi$, respectively, constant. Then,
{{<math tag="4-10">}} h = (1/R)[(\partial x / \partial \phi)^2 +(\partial y / \partial \phi)^2]^{1/2} {{</math>}}
{{<math tag="4-11">}} k = [1/(R\cos\phi)][(\partial x/\partial \lambda)^2 + (\partial y/\partial \lambda)^2]^{1/2} {{</math>}}
{{<math tag="4-12">}} a' = (h^2+k^2 - 2hk\sin\theta)^{1/2} {{</math>}}
{{<math tag="4-13">}} b' = (h^2+k^2 - 2hk\sin\theta)^{1/2} {{</math>}}
where
{{<math tag="4-14">}} \sin\theta' = [(\partial y/\partial \phi)(\partial x/\partial \lambda) - (\partial x/\partial \phi)(\partial y/\partial \lambda)]/(R^2hk\cos\phi) {{</math>}}
$\theta'$ is the angle at which a given meridian and parallel intersect, and $a'$ and $b'$ are convenient terms. The maximum and minimum scale factors $a$ and $b$, at a given point, may be calculated thus:
{{<math tag="4-12a">}} a = (a'+b')/2 {{</math>}}
{{<math tag="4-13a">}} b = (a'-b')/2 {{</math>}}
Equation [(4-1)](#4-1) simplifies as follows for the general case:
{{<math tag="4-1a">}} \sin{\omega/2}=b'/a' {{</math>}}
The areal scale factor $s$:
{{<math tag="4-15">}} s = hk\sin{\theta'} {{</math>}}
For special cases:  
(1) $s = h k$ if meridians and parallels intersect at right angles ($\theta' = 90&deg;$);  
(2) $h = k$ and $\omega = 0$ if the map is conformal;  
(3) $h = l/k$ on an equal-area map if meridians and parallels intersect at right angles.[^2]  

### DISTORTION FOR PROJECTIONS OF THE ELLIPSOID
The derivation of the above formulas for the sphere utilizes the basic formulas for the length of a given spacing (usually l&deg; or 1 radian) along a given meridian or a
given parallel. The following formulas give the length of a radian of latitude ($L_\phi$) and of longitude ($L_\lambda$) for the sphere:
{{<math tag="4-16">}} L_\phi = R {{</math>}}
{{<math tag="4-17">}} L_\lambda = R \cos{\phi} {{</math>}}
where $R$ is the radius of the sphere. For the length of 1&deg; of latitude or longitude, these values are multiplied by $\pi/180$.

The radius of curvature on a sphere is the same in all directions. On the ellipsoid, the radius of curvature varies at each point and in each direction along a given meridian, except at the poles. The radius of curvature $R'$ in the plane of the meridian is calculated as follows:
{{<math tag="4-18">}} R' = a(1-e^2)/(1-e^2\sin^2{\phi})^{3/2} {{</math>}}

The length of a radian of latitude is defined as the circumference of a circle of this radius, divided by $2\pi$, or the radius itself. Thus,
{{<math tag="4-19">}} L_\phi= a(1-e^2)/(1-e^2\sin^2{\phi})^{3/2} {{</math>}}
For the radius of curvature $N$ of the ellipsoid in a plane perpendicular to the meridian and also perpendicular to a plane tangent to the surface,
{{<math tag="4-20">}} N = a/(1-e^2\sin^2{\phi})^{1/2} {{</math>}}
Radius $N$ is also the length of the perpendicular to the surface from the surface to the polar axis. The length of a radian of longitude is found, as in equation
[(4-17)](#4-1), by multiplying $N$ by $cos{\phi}$, or
{{<math tag="4-21">}} L_\lambda = a \cos{\phi}/(1-e^2\sin^2{\phi})^{1/2} {{</math>}}
The lengths of 1&deg; of latitude and 1&deg; of longitude for the Clarke 1866 and the International ellipsoids are given in table 4. They are found from equations [(4-19)](#4-19) and [(4-21)](#4-21), multiplied by $\pi/180$ to convert to lengths for 1&deg;
{{<figure src="../table4.png" link="../table4.png" caption="__TABLE 4__.&mdash; Lengths, in meters, of 1° of latitude and longitude on two ellipsoids of reference" >}}
When these formulas are applied to equations [(4-2)](#4-2) through [(4-6)](#4-6), the values of $h$ and $k$ for the ellipsoidal forms of the projections are found to be as follows:  
For cylindrical projections:
{{<math tag="4-22">}} \eqalign {
     h &= \mathrm{d}y/(R'\mathrm{d}\phi) \cr
       &= (1-e^2\sin^2{\phi})^{3/2}\mathrm{d}y/[a(1-e^2)\mathrm{d}\phi] 
   }{{</math>}}
{{<math tag="4-23">}}
   \eqalign {
     k &= \mathrm{d}x/(N\cos{\phi}\mathrm{d}\lambda) \cr
       &= (1-e^2\sin^2{\phi})^{1/2}\mathrm{d}x/(a\cos{\phi}\mathrm{d}\lambda)
   }{{</math>}}

For conic projections:
{{<math tag="4-24">}} \eqalign {
    h &= -\mathrm{d}\rho/(R'\mathrm{d}\phi) \cr
      &= -(1-e^2\sin^2{\phi})^{3/2}\mathrm{d}\rho/[a(1-e^2)\mathrm{d}\phi]
   }{{</math>}}
{{<math tag="4-25">}} \eqalign {
    k &= n\rho/(N\cos{\phi}) \cr
      &= n\rho(1-e^2\sin^2{\phi})^{1/2}/(a\cos{\phi})
   }{{</math>}}

For polar azimuthal projections:
{{<math tag="4-24">}} h = -(1-e^2\sin^2{\phi})^{3/2}\mathrm{d}\rho/[a(1-e^2)\mathrm{d}\phi] {{</math>}}
{{<math tag="4-25">}} k = \rho(1--e^2\sin^2{\phi})^{1/2}/(a\cos{\phi}) {{</math>}}
Equations [(4-7)](#4-7) and [(4-8)](#4-8) do not have ellipsoidal equivalents. Equation [(4-9)](#4-9) remains the same for equations [(4-22)](#4-22) through [(4-26)](#4-26):
$$ \sin{(\omega/2)} = |h-k|/(h+k) \tag{4-9} $$
For the general projection of the ellipsoid, equations [(4-10)](#4-10) and [(4-11)](#4-11) are similarly modified:
{{<math tag="4-27">}} h = [(\partial x / \partial \phi)^2 +(\partial y / \partial \phi)^2]^{1/2}(1-e^2\sin^2\phi)^{3/2}[a(1-e^2)] {{</math>}}
{{<math tag="4-28">}} k = [(\partial x/\partial \lambda)^2 + (\partial y/\partial \lambda)^2]^{1/2}(1-e^2\sin^2\phi)^{1/2}/(a\cos\phi) {{</math>}}
Equations [(4-12)](#4-12) through [(4-15)](#4-15), [(4-12a)](#4-12a), [(4-13a)](#4-13a), and [(4-1a)](#4-1a), listed for the sphere, apply without change, except that $R^2$ becomes $a^2(1 - e^2)/( 1 - e^2\sin^2\phi)^2$ in [(4-14)](#4-14).
Specific calculations are shown during the discussion of individual projections. The importance of using the ellipsoid instead of the sphere for designing a projection may be quantitatively evaluated by determining the ratio or product of some of the elementary relationships. The ratio of the differential length of a radian of latitude along a meridian on the sphere to that on the ellipsoid is found by dividing the equation [(4-16)](#4-16) by equation [(4-19)](#4-19), or
{{<math tag="4-29">}} C_m = R(1-e^2\sin^2\phi)^{3/2}/[a(1-e^2)] {{</math>}}
A related ratio for the length of a radian of longitude along a parallel on the sphere to that on the ellipsoid is found by dividing equation [(4-17)](#4-17) by equation[(4-21)](#4-21), or
{{<math tag="4-30">}} C_p = R(1-e^2\sin^2\phi)^{1/2}/a {{</math>}}
From these, the local shape factor C, may be found as the ratio of (4-29) to (4-30):
{{<math tag="4-31">}} C_s = C_m/C_p = (1-e^2\sin^2\phi)/(1-e^2) {{</math>}}
and the area factor $C_a$ is their product:
{{<math tag="4-32">}} C_a = C_mC_p = R^2(1-e^2\sin^2\phi)^2/[a^2(1-e^2)] {{</math>}}
If $h$ and $k$ are calculated for the spherical version of a map projection, the actual scale factors on the spherical version relative to the ellipsoid may be determined by multiplying $h$ by $C_m$ and $k$ by $C_p$. For normal cylindrical and conic projections and polar azimuthal projections, the conformality or shape factor may be taken as
$h/k$ (not the same as $\omega$) multiplied by $C_s$ and the area scale factor $hk$ may be multiplied by $C_a$.

Except for $C_s$ which is independent of $R/a$, $R$ must be given an arbitrary value such as $R_q$ (see equation [(3-13)]({{<ref "sect_3#3-13">}})), $R_M$ (see second sentence following equation [(3-22)]({{<ref "sect_3#3-22">}})), or another reasonable balance between the major and minor semiaxes $a$ and $b$ of the ellipsoid. Using $R_q$ and the Clarke 1866 ellipsoid, table 5 shows the magnitude of these corrections.
{{<figure src="../table5.png" link="../table5.png" caption="__TABLE 5__.&mdash; Ellipsoidal correction factors to apply to spherical projections based on Clarke 1866 ellipsoid">}}
Thus, a conformal projection based on the sphere has the correct shape at the poles for the ellipsoid, but the shape is about ⅔ of 1 percent (0.00681) in error near the Equator (that is, Tissot's Indicatrix is an ellipse with minor axis about ⅔ of 1 percent shorter than the major axis at the Equator when the spherical form is compared to the ellipsoid).

A map extending over a large area will have a scale variation of several percent, which far outweighs the significance of the less-than-1-percent variation between sphere and ellipsoid. A map of a small area, such as a large-scale detailed topographic map, or even a narrow strip map, has a small-enough intrinsic scale variation to make the ellipsoidal correction a significant factor in accurate mapping; e.g., a 7.5-min quadrangle normally has an intrinsic scale variation of 0.0002 percent or less.

### CAUCHY-RIEMANN AND RELATED EQUATIONS
Relatively simple equations provide necessary and sufficient conditions for any map projection, spherical or ellipsoidal, to be conformal. These are called the
Cauchy-Riemann equations after two 19th-century mathematicians. The concept had been devised, however, during the 18th century. These equations may be written as follows:
{{<math tag="4-33">}} \partial x / \partial \lambda = \partial y / \partial \psi {{</math>}}
{{<math tag="4-34">}} \partial x / \partial \psi = - \partial y / \partial \lambda {{</math>}}
where $\psi$ is the isometric latitude defined by equation [(3-7)]({{<ref "sect_3#3-7">}}) for the ellipsoid, or with $e=0$ in the same equation for the sphere. In the latter case, the above equations simplify to
{{<math tag="4-35">}}\partial x/(\cos\phi \,\partial\lambda) = \partial y/\partial\phi{{</math>}}
{{<math tag="4-36">}}\partial x / \partial \phi = -\partial y/(\cos\phi \,\partial\lambda) {{</math>}}
For the ellipsoid, equations [(4-33)](#4-33) and [(4-34)](#4-34) may be written
{{<math tag="4-37">}}\partial x/(\cos\phi \, \partial\lambda) = (1-e^2\sin^2\phi)\partial y/[(1-e^2)\partial\phi]{{</math>}}
{{<math tag="4-38">}}(1-e^2\sin^2\phi)\partial x/[(1-e^2)\partial\phi] = -\partial y/(\cos\phi \, \partial\lambda){{</math>}}
By substituting $x'$ in place of $\lambda$ and $y'$ in place of $\psi$ in equations [(4-33)](#4-33) and [(4-34)](#4-34), conditions are met for conformal transformation of one set of rectangular coordinates $(x', y')$ to another $(x, y)$. That is,
{{<math tag="4-39">}}\partial x/\partial x' = \partial y/\partial y'{{</math>}}
{{<math tag="4-40">}}\partial x/\partial y' = -\partial y / \partial x'{{</math>}}
In this case, if $(x', y')$ represents the transformation of the sphere or ellipsoid onto a flat surface, this transformation must also be conformal. The double transformation is used in a later chapter for the Modified-Stereographic Conformal projections.

Analogous relationships may be obtained for equal-area transformations. The following equation applies to the ellipsoid:
{{<math tag="4-41">}}(\partial x/\partial\lambda)(\partial y/\partial\phi)-(\partial x/\partial\phi)(\partial y/\partial\lambda) = a^2(1-e^2)\cos\phi/(1-e^2\sin^2\phi)^2 {{</math>}}
For the sphere, this simplifies to
{{<math tag="4-42">}}(\partial x/\partial\lambda)(\partial y/\partial\phi)-(\partial x/\partial\phi)(\partial y/\partial\lambda) = R^2\cos\phi{{</math>}}
For spherical pseudocylindrical equal-area projections, such as the sinusoidal, the parallels are straight lines parallel to the Equator, so that $(\partial y/\partial\lambda) = 0$. For the many projections in this category, equation [(4-42)](#4-42) simplifies further to
{{<math tag="4-43">}}x = R^2\lambda\cos\phi(\mathrm{d}y/\mathrm{d}\phi){{</math>}}
in which $y$ can be any function of $\phi$ for a chosen spacing of the parallels.

An equal-area transformation from one set of rectangular coordinates to another must satisfy the following relationship:
{{<math tag="4-44">}}(\partial x/\partial x')(\partial y/\partial y') - (\partial x/\partial y')(\partial y / \partial x') = S{{</math>}}
where $S$ is the area ratio of the $(x,y)$ map to the $(x', y')$ map.

Most of the above equations [(4-33)](#4-33) through [(4-44)](#4-44) are difficult to use to derive new projections, although they may be used to determine whether existing projections are conformal or equal-area. Equation [(4-43)](#4-43), however, may be fairly readily used to devise new projections which are pseudocylindrical and equal-area. Equation [(26-4)]({{<ref "sect_26#26-4">}}), discussed later, is a general equation satisfying [(4-39)](#4-39) and [(4-40)](#4-40), although it is not the only such equation. There is no known general equation satisfying equation (4-44) except in a very elementary way.

[^2]: Maling (1973, p. 49-81) has helpful derivations of these equations in less condensed forms. There are typographical errors in several of the equations in Maling, but these may be detected by following the derivation closely.

## 5. TRANSFORMATION OF MAP GRATICULES
As discussed later, several map projections have been adapted to showing some part of the Earth for which the lines of true scale have an orientation or location different from that intended by the inventor of the basic projection. This is equivalent to moving or transforming the graticule of meridians and parallels on the Earth so that the "north pole" of the graticule assumes a position different from that of the true North Pole of the Earth. The projection for the sphere may be plotted using the original formulas or graphical construction, but applying them to the new graticule orientation. The actual meridians and parallels may then be plotted by noting their relationship on the sphere to the new graticule, and landforms drawn with respect to the actual geographical coordinates as usual.

In effect, this procedure was used in the past in an often entirely graphical manner. It required considerable care to avoid cumulative errors resulting from the double plotting of graticules. With computers and programmable hand calculators, it now can be a relatively routine matter to calculate directly the rectangular coordinates of the actual graticule in the transformed positions or, with an automatic plotter, to obtain the transformed map directly from the computer.

The transformation most notably has been applied to the azimuthal and cylindrical projections, but in a few cases it has been used with conic, pseudocylindrical, and other projections. While it is fairly straightforward to apply a suitable transformation to the sphere, transformation is much more difficult on the ellipsoid because of the constantly changing curvature. Transformation has been applied to the ellipsoid, however, in important cases under certain limiting conditions. If either true pole is at the center of an azimuthal map projection, the projection is called the _polar_ aspect. If a point on the Equator is made the center, the projection is called the _equatorial_ or, less often, _meridian_ or _meridional_ aspect. If some other point is central, the projection is the _oblique_ or, occasionally, _horizon_ aspect.

For cylindrical and most other projections, such transformations are called _transverse_ or _oblique_, depending on the angle of rotation. In transverse projections, the true poles of the Earth lie on the equator of the basic projection, and the poles of the projection lie on the Equator of the Earth. Therefore, one meridian of the true Earth lies along the equator of the basic projection. The Transverse Mercator projection is the best-known example and is related to the regular Mercator in this manner. For oblique cylindrical projections, the true poles of the Earth lie somewhere between the poles and the equator of the basic projection. Stated another way, the equator of the basic projection is drawn along some great circle route other than the Equator or a meridian of the Earth for the oblique cylindrical aspect. The Oblique Mercator is the most common example. Further subdivisions of these aspects have been made; for example, the transverse aspect may be first transverse, second transverse, or transverse oblique, depending on the positions of the true poles along the equator of the basic projection (Wray, 1974). This has no significance in a transverse cylindrical projection, since the appearance of the map does not change, but for pseudocylindrical projections such as the Sinusoidal, it makes a difference, if the additional nomenclature is desired.

To determine formulas for the transformation of the sphere, two basic laws of spherical trigonometry are used. Referring to the spherical triangle in figure 5, with three points having angles $A$, $B$, and $C$ on the sphere, and three great circle arcs $a$, $b$, and $c$ connecting them, the Law of Sines declares that
{{<math tag="5-1">}}\sin A/\sin a = \sin B/\sin b = \sin C/\sin c {{</math>}}
while by the Law of Cosines,
{{<math tag="5-2">}}\cos c = \cos b \cos a + \sin b \sin a \sin C {{</math>}}
{{<figure src="../figure5.png" link="../figure5.png" caption="__FIGURE 5__.&mdash; Spherical triangle.">}}

If C is placed at the North Pole, it becomes the angle between two meridians extending to A and B. If A is taken as the starting point on the sphere, and B the second point, c is the great circle distance between them, and angle A is the azimuth _Az_ east of north which point B bears to point A. When latitude &#x03D5;<sub>1</sub>, and longitude &lambda;<sub>0</sub>, are used for point A, and &#x03D5; and &lambda; are used for point B, equation [(5-2)](#5-2) becomes the following for great circle distance:
{{<math tag="5-3">}}\cos c = \sin\phi_1\sin\phi + \cos\phi_1\cos\phi\cos{(\lambda-\lambda_0)} {{</math>}}

While [(5-3)](#5-3) is the standard and simplest form of this equation, it is not accurate in practical computation for values of c very close to zero. For such cases, the equation may be rearranged as follows (Sinnott, 1984):
{{<math tag="5-3a">}}\sin(c/2)=|\sin^2[(\phi-\phi_1)/2] + \cos\phi_1\cos\phi\cos(\lambda-\lambda_0)|^{1/2} {{</math>}}
This equation is also exact, and is very accurate in practice for values of c from 0 to nearly 180&deg;.

Equation [(5-1)](#5-1) becomes the following for the azimuth:
{{<math tag="5-4">}}\sin{Az} = \sin(\lambda-\lambda_0)\cos\phi/\sin c {{</math>}}
or, with some rearrangement,
{{<math tag="5-4a">}}\cos{Az} = [cos\phi_1\sin\phi - \sin\phi_1\cos\phi\cos(\lambda-\lambda_0)]/\sin c {{</math>}}
or, eliminating c,
{{<math tag="5-4b">}} \tan{Az} = \cos\phi\sin(\lambda-\lambda_0)/[\cos\phi_1\sin\phi - \sin\phi_1\cos\phi\cos(\lambda-\lambda_0)]  {{</math>}}
Either of the three equations [(5-4)](#5-4) through [(5-4b)](#5-4b) may be used for the azimuth, depending on the form of equation preferred. Equation [(5-4b)](#5-4b) is usually preferred, since it avoids the inaccuracies of finding an arcsin near 90° or an arccos near 0°. Quadrant adjustment as described under the list of symbols should be employed.
{{<figure src="../figure6.png" link="../figure6.png" caption="__FIGURE 6__.&mdash; Rotation of a graticule for transformation of projection. Dashed lines show actual longitudes and latitudes (λ and ϕ). Solid lines show the transformed longitudes and latitudes (λ' and ϕ') from which rectangular coordinates (x and y) are determined according to map projection used.">}}

In order to find the latitude $\phi$ and longitude $\lambda$ at a given arc distance $c$ and azimuth $Az$ east of north from $(\phi_1, \lambda_0)$, the inverse of equations [(5-3)](#5-3) and [(5-4b)](#5-4b) may be used:
{{<math tag="5-5">}}\phi = \arcsin(\sin\phi_1\cos c + \cos\phi_1\cos{Az}) {{</math>}}
{{<math tag="5-6">}}\lambda = \lambda_0 + \arctan[\sin c \, \sin{Az}/(\cos\phi_1\cos c - \sin\phi_1\sin c\,\cos{Az})] {{</math>}}
Applying these relationships to transformations, without showing some intermediate derivations, formulas [(5-7)](#5-7) through [(5-8b)](#5-8b) are obtained. To place the North Pole of the sphere at a latitude $\alpha$ on a meridian $\beta$ east of the central meridian $(\lambda'=0)$ of the basic projection (see fig. 6), the transformed latitude $\phi'$ and transformed longitude $\lambda'$ on the basic projection which correspond to latitude $\phi$ and longitude $\lambda$ of the spherical Earth may be calculated as follows, letting the central meridian to correspond with $\lambda' = \beta$:
{{<math tag="5-7">}}\sin\phi' = \sin\alpha\sin\beta - \cos\alpha\cos\phi\cos(\lambda-\lambda_0){{</math>}}
{{<math tag="5-8">}}\sin(\lambda'-\beta) = cos\phi\sin(\lambda-\lambda_0)/\cos\phi' {{</math>}}
Equation [(5-8b)](#5-8b) is generally preferable to [(5-8)](#5-8) or [(5-8a)](#5-8a) for the reasons stated after equation [(5-4b)](#5-4b).

These are general formulas for the oblique transformation. (For azimuthal projections, $\beta$ may always be taken as zero. Other values of $\beta$ merely have the effect of rotating the X and Y axes without changing the projection.)

The inverse forms of these equations are similar in appearance. To find the geographic coordinates in terms of the transformed coordinates,
{{<math tag="5-9">}}\sin\phi = \sin\alpha\sin\phi' + \cos\alpha\cos\phi'\cos(\lambda'-\beta) {{</math>}}
{{<math tag="5-10">}} \sin(\lambda-\lambda_0) = \cos\phi'\sin(\lambda'-\beta)/\cos\phi {{</math>}}
or
{{<math tag="5-10a">}} \cos(\lambda-\lambda_0) = [\sin\alpha\cos\phi'\cos(\lambda'-\beta) - \cos\alpha\,\sin\phi']/\cos\phi {{</math>}}
or
{{<math tag="5-10b">}}\tan(\lambda-\lambda_0) = \cos\phi'\sin(\lambda'-\beta)/[\sin\alpha\,\cos\phi'\cos(\lambda'-\beta) - \cos\alpha\,\sin\phi'] {{</math>}}
with equation [(5-10b)](#5-10b) usually preferable to [(5-10)](#5-10) and [(5-10a)](#5-10a) for the same reasons as those given for [(5-4b)](#5-4b).

If $\alpha = 0$, the formulas simplify considerably for the transverse or equatorial aspects. It is then more convenient to have central meridian$\lambda_0$, coincide with the equator of the basic projection rather than with its meridian $\beta$. This may be accomplished by replacing $(\lambda-\lambda_0)$ with $(\lambda-\lambda_0 -90&deg;)$ and simplifying. If $\beta = 0$, so that the true North Pole is placed at $(\lambda_0 = 0,\\> \phi' = 0)$:
{{<math tag="5-11">}}\sin\phi' = -\cos\phi\sin(\lambda-\lambda_0) {{</math>}}
{{<math tag="5-12">}}\cos\lambda' = \sin\phi/[1-\cos^2\phi\sin^2(\lambda-\lambda_0)]^{1/2} {{</math>}}
or
{{<math tag="5-12a">}}\tan\lambda' = -\cos(\lambda-\lambda_0)/\tan\phi {{</math>}}
If $\beta=90&deg;$, placing the true North Pole at $(\lambda'=90&deg;, \\> \phi' = 0)$:
{{<math tag="5-13">}}\sin\phi' = -\cos\phi\sin(\lambda-\lambda_0) {{</math>}}
{{<math tag="5-14">}}\cos\lambda' = \cos\phi\cos(\lambda-\lambda_0)/[1-\cos^2\phi\sin^2(\lambda-\lambda_0)]^{1/2} {{</math>}}
or
{{<math tag="5-14a">}}\tan\lambda' = \tan\phi/\cos(\lambda-\lambda_0) {{</math>}}
The inverse equations [(5-9)](#5-9) through [(5-10b)](#5-10b) may be similarly altered. As stated earlier, these formulas may be directly incorporated into the formulas for the rectangular coordinates x and y of the basic map projection for a direct computer or calculator output. If only one or two projections are involved in a package, this may be more efficient. For such transformations of several projections in one software package, it is often easier to calculate the transverse or oblique projection coordinates by first calculating $\phi'$ and $\lambda'$ for each point to be plotted (using a general subroutine) and then calculating the rectangular coordinates by inserting $\phi'$ and $\lambda'$ into the basic projection formulas  In still other cases, a graphical method has been used.

While these formulas, or their equivalents, will be incorporated into the formulas given later for individual oblique and transverse projections, the concept should help interrelate the various aspects or types of centers of a given projection. The extension of these concepts to the ellipsoid is much more involved technically and in some cases requires approximation. General discussion of this is omitted here.

## 6. CLASSIFICATION AND SELECTION OF MAP PROJECTIONS
Because of the hundreds of map projections already published and infinite number which are theoretically possible, considerable attention has been given to classification of projections so that the user is not overwhelmed by the numbers and the variety. Generally, the proposed systems classify projections on the basis of property (equal-area, conformal, equidistant, azimuthal, and so forth), type of construction (cylindrical, conical, azimuthal, and so forth), or both. Lee (1944) proposed a combination:
- Conical projections
    - Cylindric
    - Pseudocylindric
    - Conic
    - Pseudoconic
    - Polyconic
    - Azimuthal
      - Perspective
      - Nonperspective
- Nonconical projections
    - Retroazimuthal (not discussed here)
    - Orthoapsidal (not discussed here)
    - Miscellaneous

Each of these categories was further subdivided into conformal, authalic (equalarea), and aphylactic (neither conformal nor authalic), but some subdivisions have no examples. This classification is partially used in this book, as the section headings indicate, but the headings are influenced by the number of projections described in each category: Pseudocylindrical projections are included with the "miscellaneous" group, and "space map projections" are given a separate section.

Interest has been shown in some other forms of classification which are more suitable for extensive treatises. In 1962, Waldo R. Tobler provided a simple but all-inclusive proposal (Tobler, 1962). Tobler's classification involves eight categories, four for rectangular and four for polar coordinates. For the rectangular coordinates, category A includes all projections in which both _x_ and _y_ vary with both latitude ɸ and longitude λ, category B includes all in which _y_ varies with both ɸ and &lambda; while _x_ is only a function of &lambda;, C includes those projections in which _x_ varies with both ɸ and &lambda; while _y_ varies only with ɸ, and D is for those in which _x_ is only a function of &lambda; and _y_ only of ɸ. There are very few published projections in category B, but C is usually called pseudocylindrical, D is cylindrical, and A includes nearly all the rest which do not fit the polar coordinate categories.

Tobler's categories A to D for polar coordinates are respectively the same as those for rectangular, except that radius &rho; is read for _y_ and angle &theta; is read for _x_. The regular conic and azimuthal projections fall into category D, and the pseudoconical (such as Bonne's) into C. Category A may have a few projections like A(rectangular) for which polar coordinates are more convenient than rectangular. There are no well-known projections in B (polar).

Hans Maurer's detailed map projection treatise of 1935 introduced a "Linnaean" classification with five families ("true-circular," "straight-symmetrical," "curvedsymmetrical," "less regular," and "combination grids," to quote a translation) subdivided into branches, subbranches, classes, groups, and orders (Maurer,1935). As Maling says, Maurer's system "is only useful to the advanced student of the subject," but Maurer attempts for map projections what Linnaeus, the Swedish botanist, accomplished for plants and animals in the 18th century (Maling, 1973, p. 98). Other approaches have been taken by Goussinsky (1951) and Starostin (1981).

### SUGGESTED PROJECTIONS
Following is a simplified listing of suggested projections. The recommendation can be directly applied in many cases, but other parameters such as the central meridian and parallel or the standard parallels must also be determined. These additional parameters are often chosen by estimation, but they can be chosen by more refined methods to reduce distortion (Snyder, 1985a, p. 93-109). In other cases a more complicated projection may be chosen because of special features in the extent of the region being mapped; the GS50 projection (50-State map) described in this book is an example. Some commonly used projections are not listed in this summary because it is felt that other projections are more suitable for the applications listed, which are not all-inclusive. Some of the projections listed here are not discussed elsewhere in this book.

_Region mapped_
<ol>
    <li>World (Earth should be treated as a sphere)
        <ol style="list-style-type: upper-alpha;">
            <li>Conformal (gross area distortion)
                <ol>
                    <li>Constant scale along Equator
                        <ul>
                            <li>Mercator </li>
                        </ul>
                    </li>
                    <li>Constant scale along meridian
                        <ul>
                            <li>Transverse Mercator </li>
                        </ul>
                    </li>
                    <li>Constant scale along oblique great circle
                        <ul>
                            <li>Oblique Mercator </li>
                        </ul>
                    </li>
                    <li>Entire Earth shown
                        <ul>
                            <li>Lagrange</li>
                            <li>August</li>
                            <li>Eisenlohr </li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li>Equal-Area
                <ol>
                    <li>Standard without interruption
                        <ul>
                            <li>Hammer</li>
                            <li>Mollweide</li>
                            <li>Eckert IV or VI</li>
                            <li>McBryde or McBryde-Thomas variations</li>
                            <li>Boggs Eumorphic</li>
                            <li>Sinusoidal</li>
                            <li>misc. pseudocylindricals</li>
                        </ul>
                    </li>
                    <li>Interrupted for land or ocean
                        <ul>
                            <li>any of above except Hammer</li>
                            <li>Goode Homolosine</li>
                        </ul>
                    </li>
                    <li>Oblique aspect to group continents
                        <ul>
                            <li>Briesemeisler</li>
                            <li>Oblique Mollweide</li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li>Equidistant
                <ol>
                    <li>Centered on pole
                        <ul>
                            <li>Polar Azimuthal Equidistant</li>
                        </ul>
                    </li>
                    <li>Centered on a city
                        <ul>
                            <li>Oblique Azimuthal Equidistant</li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li>Straight rhumb lines
                <ul>
                    <li>Mercator</li>
                </ul>
            </li>
            <li>Compromise distortion
                <ul>
                    <li>Miller Cylindrical</li>
                    <li>Robinson</li>
                </ul>
            </li>
        </ol>
    </li>
    <li>Hemisphere (Earth should be treated as a sphere)
        <ol style="list-style-type: upper-alpha;">
            <li>Conformal
                <ul>
                    <li>Stereogaphic (any aspect)</li>
                </ul>
            </li>
            <li>Equal-Area
                <ul>
                    <li>Lambert Azimuthal Equal-Area (any aspect)</li>
                </ul>
            </li>
            <li>Equidistant
                <ul>
                    <li>Azimuthal Equidistant (any aspect)</li>
                </ul>
            </li>
            <li>Global look
                <ul>
                    <li>Orthographic (any aspect)</li>
                </ul>
            </li>
        </ol>
    </li>
    <li>Continent, ocean, or smaller region (Earth should be treated as a sphere for larger continents and oceans and as an ellipsoid for smaller regions, especially at a larger scale)
        <ol style="list-style-type: upper-alpha;">
            <li>Predominant east-west extent
                <ol style="content: '(' counter(num) ')'; counter-increment: num;">
                    <li>Along Equator
                        <ul>
                            <li>Conformal: Mercator</li>
                            <li>Equal-Area: Cylindrical Equal-Area</li>
                        </ul>
                    </li>
                    <li>Away from Equator
                        <ul>
                            <li>Conformal: Lambert Conformal Conic</li>
                            <li>Equal-Area: Albers Equal-Area Conic</li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li>Predominant north-south extent
                <ul>
                    <li>Conformal: Transverse Mercator</li>
                    <li>Equal-Area: Transverse Cylindrical Equal-Area</li>
                </ul>
            </li>
            <li>Predominant oblique extent (for example: North America, South America, Atlantic Ocean)
                <ul>
                    <li>Conformal: Oblique Mercator</li>
                    <li>Equal-Area: Oblique Cylindrical Equal-Area</li>
                </ul>
            </li>
            <li>Equal extent in all directions (for example: Europe, Africa, Asia, Australia, Antarctica, Pacific Ocean, Indian Ocean, Arctic Ocean, Antarctic Ocean)
                <ol>
                    <li>Center at pole
                        <ul>
                            <li>Conformal: Polar Stereographic</li>
                            <li>Equal-Area: Polar Lambert Azimuthal Equal-Area</li>
                        </ul>
                    </li>
                    <li>Center along Equator
                        <ul>
                            <li>Conformal: Equatorial Stereographic</li>
                            <li>Equal-Area: Equatorial Lambert</li>
                            <li>Azimuthal Equal-Area</li>
                        </ul>
                    </li>
                    <li>Center away from pole or Equator
                        <ul>
                            <li>Conformal: Oblique Stereographic</li>
                            <li>Equal-Area: Oblique Lambert<br>
                                Azimuthal Equal-Area
                            </li>
                        </ul>
                    </li>
                </ol>
            </li>
            <li>Straight rhumb lines (principally for oceans)
                <ul>
                    <li>Mercator</li>
                </ul>
            </li>
            <li>Straight great-circle routes
                <ul>
                    <li>Gnomonic (for less than hemisphere)</li>
                </ul>
            </li>
            <li>Correct scale along meridians
                <ol>
                    <li>Center at pole
                        <ul>
                            <li>Polar Azimuthal Equidistant</li>
                        </ul>
                    </li>
                    <li>Center along Equator
                        <ul>
                            <li>Plate Carrée (Equidistant Cylindrical)</li>
                        </ul>
                    </li>
                    <li>Center away from pole or Equator
                        <ul>
                            <li>Equidistant Conic</li>
                        </ul>
                    </li>
                </ol>
            </li>
        </ol>
    </li>
</ol>
