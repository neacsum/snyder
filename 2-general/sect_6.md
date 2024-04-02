---
title: 6. Classification and Selection of Map Projections
weight: 60
description: Classification and selection of map projections
date: 2022-08-19
lastmod: 2023-05-25
---
# 6. CLASSIFICATION AND SELECTION OF MAP PROJECTIONS
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

## SUGGESTED PROJECTIONS
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
