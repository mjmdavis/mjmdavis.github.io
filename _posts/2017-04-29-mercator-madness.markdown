---
layout: post
title:  "Mercator Madness."
date:   2017-04-29 17:03:40 +0200
categories: showing
---

<link rel="import" href="{{ site.url }}/assets/bower/globe-map/globe-map.html">

# Mercator Madness
## What if I told you that you aren't seeing the whole map?

Here is a Mercator map in a form you are familiar with. I have added 5˚ circles drawn on the surface of the planet. Each circle has a radius of around 555km.

<globe-map projections='["Orthographic"]' width="360" height="360" config='{"rotation":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true}}'></globe-map>
<globe-map projections='["Mercator"]' width="360" height="360" config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>

Here is a slightly different looking Mercator map. The only difference with the one above is that I have trimmed less of the top and bottom of the map off. On this one I have drawn 0.1˚ circles. Each of these circles has a radius of about 11km.

This helps to illustrate the infinite scaling of the Mercator projection. The red areas at the top and bottom are in fact the same red circles as on the rest of the map but drawn over the poles. They are streteched out to infinite proportions by the Mercator projection.

All the circles on each respective map have the same radius and the same area on the spherical earth.

<canvas id="mercator-madness-canvas"></canvas>
<script src="{{ site.url }}/scratch/mercator_madness.js">
</script>
