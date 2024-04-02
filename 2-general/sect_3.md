---
title: 3. The Datum and the Earth as an Ellipsoid
weight: 30
description: The Datum and the Earth as an Ellipsoid; figure of the Earth; auxiliary latitudes
mathjax: 3
date: 2022-08-23
lasstmod: 2024-03-10
---

# 3. THE DATUM AND THE EARTH AS AN ELLIPSOID
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

## AUXILIARY LATITUDES
By definition, the geographic or geodetic latitude, which is normally the latitude referred to for a point on the Earth, is the angle which a line perpendicular to the surface of the ellipsoid at the given point makes with the plane of the Equator. It is slightly greater in magnitude than the geocentric latitude, except at the Equator and poles, where it is equal. The geocentric latitude is the angle made by a line to the center of the ellipsoid with the equatorial plane. Formulas for the spherical form of a given map projection may be adapted for use with the ellipsoid by substitution of one of various "auxiliary latitudes" in place of the geodetic latitude. Oscar S. Adams (1921) developed series and other formulas for five substitute latitudes, generally building upon concepts described in the previous century. In using them, the ellipsoidal Earth is, in effect, first transformed to a sphere under certain restraints such as conformality or equal area, and the sphere is then projected onto a plane. If the proper auxiliary latitudes are chosen, the sphere may have either true areas, true distances in certain directions, or conformality, relative to the ellipsoid. Spherical map projection formulas may then be used for the ellipsoid solely with the substitution of the appropriate auxiliary latitudes.

It should be made clear that this substitution will generally not give the projection in its preferred form. For example, using the conformal latitude (defined below) in the spherical Transverse Mercator equations will give a true ellipsoidal, conformal Transverse Mercator, but the central meridian cannot be true to scale. More involved formulas are necessary, since uniform scale on the central meridian is a standard requirement for this projection as commonly used in the ellipsoidal form. For the regular Mercator, on the other hand, simple substitution of the conformal latitude is sufficient to obtain both conformality and an Equator of correct scale for the ellipsoid.

Adams gave formulas for all these auxiliary latitudes in closed or exact form, as well as in series, except for the authalic (equal-area) latitude, which could also have been given in closed form. Both forms are given below. For improved computational efficiency using the series, see equations (3-34) through (3-39). In finding the auxiliary latitude from the geodetic latitude, the closed form may be more useful for computer programs. For the inverse cases, to find geodetic from auxiliary latitudes, most closed forms require iteration, so that the series form is probably preferable. The series form shows more readily the amount of deviation from the geodetic latitude $ \phi $. The formulas given later for the individual ellipsoidal projections incorporate these formulas as needed, so there is no need to refer back to these for computation, but the various auxiliary latitudes are grouped together here for comparison. Some of Adams' symbols have been changed to avoid confusion with other terms used in this book.

### The conformal latitude $ \chi $
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

### The authalic latitude $ \beta $
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

### The rectifying latitude $ \mu $ 
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

### The geocentric latitude $\phi_g$ 
(designated $\psi$ by Adams) referred to in the first paragraph in this section is simply as follows:
{{<math tag="3-28">}} \phi_g = \arctan[(1-e^2)\tan\phi] {{</math>}}
As a series,
{{<math tag="3-29">}} \phi_g = \phi - e_2\sin{2\phi} + (e_2^2/2)\sin{4\phi} - (e_2^3/3)\sin{6\phi} +\dots {{</math>}}
where $\phi_g$ and $\phi$, are in radians and $e_2 = e^2/(2-e^2)$. For the Clarke 1866 ellipsoid, in seconds of arc,
{{<math tag="3-30">}} \phi_g = \phi - 700.44^"\sin{2\phi} + 1.19^"\sin{4\phi} {{</math>}}

### The reduced or parametric latitude $\eta$ 
(designated &theta; by Adams) of a point on the ellipsoid is the latitude on a sphere of radius $a$ for which the parallel has the same radius as the parallel of geodetic latitude $\phi$ on the ellipsoid through the given point:
{{<math tag="3-31">}} \eta = \arctan[(1-e^2)^{1/2}\tan\phi] {{</math>}}
As a series,
{{<math tag="3-32">}} \eta = \phi -e_1\sin{2\phi}+(e_1^2/2)\sin{4\phi}-(e_1^3/3)\sin{6\phi}+\dots  {{</math>}}
where $e_1$ is found from equation [(3-24)]({{<ref "#3-24">}}), and $\eta$ and $\phi$ are in radians. For the Clarke 1866 ellipsoid, using seconds of arc,
{{<math tag="3-33">}} \eta = \phi - 350.22^"\sin{2\phi} +0.30^"\sin{4\phi} {{</math>}}
The inverses of equations [(3-28)](#3-28) and [(3-31)](#3-31) for $\phi$ in terms of geocentric or reduced latitudes are relatively easily derived and are noniterative. The inverses of series equations (3-29), (3-30), (3-32), and (3-33) are therefore omitted.

Table 3 lists the correction for these auxiliary latitudes for each 5&deg; of geodetic latitude.
{{<figure src="../table3.png" link="../table3.png" caption="__TABLE 3__.&mdash; Corrections for auxiliary latitudes on the Clarke 1866 ellipsoid">}}

## COMPUTATION OF SERIES
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