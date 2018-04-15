---
layout: post
title:  "Mercator Tiles"
date:   2018-04-15 17:03:39 +0200
categories: showing
---

<style type="text/css">
.mapwrap {
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
}
</style>

<link rel="import" href="{{ site.url }}/assets/bower/globe-map/globe-map.html">


<globe-map width='400' projections='["Orthographic", "Mercator"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true, "ui_enabled":true}}'></globe-map>
