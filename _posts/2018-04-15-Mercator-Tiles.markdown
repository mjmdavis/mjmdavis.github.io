---
layout: post
title:  "Mercator Tiles"
date:   2018-04-15 10:03:39 +0200
categories: showing
hidden: false
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

To help myself understand how the area of Web Mercator tiles varies across the globe, I extended my [map visualization]({{ site.url }}/showing/2017/05/16/how-to-read-maps.html). I find it a helpful reminder of how, despite having equivalent sizes on the mercator map, the tiles are actually far from equally sized.

<globe-map width='500' projections='["Mercator", "Orthographic"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "mercator_tiles":{"enabled":true, "ui_enabled":false}}'></globe-map>

This has several implications in the realm of analytics. Web Mercator's tiling scheme covers the majority of the globe in regular, power of 2 square tiles. It's fantastically practical. It's very tempting simply tile a bunch of data into WebMercator and then do analytics on it. If you do this, important not to forget that you're failing to preserve area.

## Larger Version

<globe-map width='740' projections='["Mercator", "Orthographic"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "mercator_tiles":{"enabled":true, "ui_enabled":true}}'></globe-map>
