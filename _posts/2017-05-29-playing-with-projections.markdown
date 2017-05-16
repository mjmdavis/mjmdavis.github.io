---
layout: post
title:  "Playing with projections."
date:   2017-05-14 17:03:39 +0200
categories: showing
---

<link rel="import" href="{{ site.url }}/assets/bower/globe-map/globe-map.html">

## Drag me
<globe-map width='740' projections='["Orthographic", "InterruptedHomolosine"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true, "ui_enabled":false}, "nt_indicatrice":{"enabled":true, "ui_enabled":false}}'></globe-map>

## Why?
Every map you see in 2D is some kind of tradeoff of different types of distortion. It's not always immediately obvious what tradeoffs are being made because we have been conditioned to seeing the world as a 2D projection of a 3D object. i.e. A globe unrolled onto a piece of paper.

Below is a tool that aims to help humans quickly gain an intuitive understanding for how a particular map projection distorts the globe. 

## Concepts 
##### (Orthographic & Mercator)

To help my understanding of how projections distort the globe I came up with a little tool that allows you to rotate a globe and see how the rotated globe translates into a particular map. Here is that tool comparing the globe to the Mercator projection. You can **drag** either map to rotate the earth and **reset** the rotation with the button in the top left.

<globe-map width='540' projections='["Orthographic", "Mercator"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true}}'></globe-map>

This representation helps us understand how projections distort area. Projections also distort shape. This view illustrates the distortion of shape.

<globe-map width='540' projections='["Orthographic", "Mercator"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true}}'></globe-map>

The idea is to split the globe up into similarly shaped and sized tiles. Each tile has similar area and shape on the globe so it's easy to see the distortion on the map. Traditional graticules are neither similar in size or shape on a globe and can be considered misleading.

In fact, both representation give you an idea of how a map projection distorts shape and area.

Armed with these weapons you can fight back against the tyrannical cartographers of times gone by. Turn your nose up in disgust at density metrics on Mercator maps and make up your own mind which projection you like best.

My favorite is below, the [Goode Homolosine](https://en.wikipedia.org/wiki/Goode_homolosine_projection).  
It is indeed very Goode; an equal-area projection, it preserves area across the map. It also, in my opinion, does a good job of minimising distortion thanks to it's interruptions (cuts).

<globe-map width='740' projections='["Orthographic", "InterruptedHomolosine"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true}}'></globe-map>

### Your turn

Now, feel free to use this tool to play around and get a better understanding of map projections and maybe the world we live on.

<globe-map width='740' projections='["Orthographic", "InterruptedHomolosine"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true, "ui_enabled":true}, "projection_selection":{"enabled":true}}'></globe-map>

