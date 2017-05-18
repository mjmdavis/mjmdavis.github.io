---
layout: post
title:  "The problem with maps."
date:   2017-05-16 17:03:39 +0200
categories: showing
hidden: true
image: assets/polymer-globe-preview.png
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

[Mandatory Accompanying Playlist](https://open.spotify.com/user/pingbat/playlist/3ILYt5u8hdZ1d5H1lNZSuN){:target="_blank"}

## TL;DR.

Every map you see in 2D is some kind of tradeoff between different types of distortion. It's not always immediately obvious what tradeoffs are being made because we have been conditioned to seeing the world as a 2D projection of a 3D object. i.e. A globe unrolled onto a piece of paper. This tool helps you explore the Mercator projection to better understand it's distortion.  

Try dragging either map to see how rotation changes the shape of the map.

For a larger version with more projections, and an explanation, read on.

<div class="mapwrap">
<globe-map width='400' projections='["Orthographic", "Mercator"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true, "ui_enabled":true}}'></globe-map>
</div>

## The World
The world is round. [Google says so](https://www.google.com/maps/@25.6150528,3.6591736,11928591m/data=!3m1!1e3){:target="_blank"}. The problem is, spheres can be hard to get your head around... Imagine we want to see a map of the whole world. We might try something like this.

<div>
<globe-map projections='["Orthographic"]' rotation='[90,0,0]' width="600" ></globe-map>
<globe-map projections='["Orthographic"]' rotation='[0,0,0]' width="600" ></globe-map>
<globe-map projections='["Orthographic"]' rotation='[-90,0,0]' width="600" ></globe-map>
</div>

I'm not sure about you but I'm feeling distinctly underwhelmed. Only the countries in the center are undistorted and I can't see the whole map.
People used to put this on spinning balls right?
Let's try that.

<globe-map width='1000' projections='["Orthographic"]' config='{"rotation":{"enabled":true, "ui_enabled":true}}'></globe-map>

Fun! You can even spin it!

But what if we want to see two places at once? Two globes! I know what you're thinking. You're thinking "Genius! Who doesn't want two hulking great spheres on their desk, or in in their pocket?! [I do!](http://www.bellerbyandco.com/){:target="_blank"} While beautiful, they are a bit impractical.
They'd have to be enormous to provide the accuracy we need for sailing the high seas or finding the way around the corner to buy some milk...

The pragmatist in me is thinking that it would be nice if I could put this on a piece of paper.
Thin, light, you can roll it up, lay it out on a desk. Most practical!


## Mercator Map

Someone told me about a guy that came up with 'a popular and good' way of making a sphere flat was something called the Mercator Projection.

<globe-map width='740' height='740' projections='["Mercator"]'></globe-map>

The whole world is visible 🤗. Wow, Greenland looks really big though, and what's the gigantic land mass at the bottom? Let's put a globe next to it and work out what is going wrong.

<div class="mapwrap">
<globe-map projections='["Orthographic"]' config='{"rotation":{"enabled":true, "ui_enabled":true}}' width='540' ></globe-map>
<globe-map projections='["Mercator"]' width='540'></globe-map>
</div>

Right. See that really big land mass at the bottom? It's not nearly as big on the globe as on the flat map. Maybe we can add some indication of scale better compare.

## (Not) Tissot's indicatrix
A Frenchman named Tissot came up with [something fancy](https://en.wikipedia.org/wiki/Tissot%27s_indicatrix){:target="_blank"}. The general idea was to characterize local distortions; To show you what a small circle would look like when moved from the globe to the map.
I'm more interested in distortion at the scale of the map I'm looking at. To characterize this, I think we could draw circles on the globe and project them into our map.

<div class="mapwrap">
<globe-map projections='["Orthographic"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true}}' width='540'></globe-map>
<globe-map projections='["Mercator"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}' width='540'></globe-map>
</div>

Play around with the globe a bit and get a feel for how the Mercator projection distorts area. You might have noticed that the circles drawn on the poles of the globe do not appear on the Mercator map... Well, they are *barely* visible, as thin lines at the top and bottom of the map. Why aren't they visible? Well, the Mercator projection preserves the angle of intersecting lines and preserves shapes at small scale. To do this it distorts the map.

## Distortion

To better understand the Mercator projection, we should first look at the Equirectangular projection.

<globe-map projections='["Equirectangular"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}' width='740'></globe-map>

And how it relates to the globe and the Mercator projection.

<div class='mapwrap'>
<globe-map width='300' projections='["Orthographic"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>
<globe-map width='300' projections='["Equirectangular"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>
<globe-map width='300' projections='["Mercator"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>
</div>

The Equirectangular projection is like dropping the spherical globe into a cylinder, making tiny holes at the poles and stretching the sphere out so the points at the poles wrap around the top and bottom of the cylinder. Then you just slice the cylinder at the [antimeridian](https://en.wikipedia.org/wiki/180th_meridian){:target="_blank"} and unroll it into a rectangle.  

Notice that on the Equirectangular map, the height of each circle is the same but the width changes as the map gets more stretched out near the poles. In fact, as you get to a pole, you have stretched a single point out into the entire width of the map!  

To remedy the horizontal stretching, the Mercator Projection stretches the globe out in the vertical direction an equal amount to the stretching in the vertical direction. This is good because it helps preserve the shape of small objects. It's also great if you're a sailor as you can draw a straight line on a Merctor map and if you sail along it, you will maintain a constant heading. Really useful for navigating a ship in the 1600s. In fact, Mercator was in the business of selling maps. He described his map using this projection method as a "new and augmented description of Earth corrected for the use of sailors". Today the Mercator projection is still used to navigate the high seas.

You can see the effect of this distortion when using Google Maps. If you move north or south from the equator and stay at the same zoom level, objects will become larger 😯...😮.

Below are embedded maps of Singapore and Anchorage, Alaska at the same zoom level. Notice how the cars in Alaska are bigger than the ones in Singapore because they've been stretched by the Mercator projection.

<iframe width='350' height='350' src="https://www.google.com/maps/embed/v1/view?center=1.3479927,103.9684012
&zoom=19
&maptype=satellite
&key=AIzaSyABWm9A528mgx9YlY36IeNAoN2RmcmedmM">
</iframe>
<iframe width='350' height='350' src="https://www.google.com/maps/embed/v1/view?center=61.2143189,-149.8992335
&zoom=19
&maptype=satellite
&key=AIzaSyABWm9A528mgx9YlY36IeNAoN2RmcmedmM">
</iframe>
<br/>

In fact, this effect leads to [Infinite distortion]({{ site.url }}/showing/2017/04/29/mercator-madness.html){:target="_blank"}. Yes, the reason you couldn't see the circle on the poles before is that they are cut off! The infinite distortion means we have an infinitely large map. Existential questions aside, we can thus reason that all Mercator maps are trimmed.


## Playing with Projections

To help my understanding of how projections distort the globe I came up with a little tool that allows you to rotate a globe and see how the rotated globe translates into a particular map. Here is that tool comparing the globe to the Mercator projection. You can **drag** either map to rotate the earth and **recenter** the rotation with the button in the top left.

<div class="mapwrap">
<globe-map width='360' projections='["Orthographic", "Mercator"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true}}'></globe-map>
</div>

This representation helps gain understanding of how projections distort area. Projections also distort shape. This view better illustrates the distortion of shape.

<div class="mapwrap">
<globe-map width='360' projections='["Orthographic", "Mercator"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true}}'></globe-map>
</div>

The idea here is to split the globe up into similarly shaped and sized tiles. Each tile has similar area and shape on the globe so it's easy to see the distortion on the map. Traditional graticules are neither similar in size or shape on a globe and can be misleading.

In fact, both representations give you an idea of how a map projection distorts shape and area.

Armed with these weapons you can fight back against the tyrannical cartographers of times gone by. Turn your nose up in disgust at density metrics on Mercator maps, and make up your own mind as to which projection you like best.

My favorite is below, the [Goode Homolosine](https://en.wikipedia.org/wiki/Goode_homolosine_projection){:target="_blank"}.  
It is indeed very Goode; as an equal-area projection, it preserves area across the map. This is good for showing distribution or density. It also, in my opinion, does a good job of minimising distortion thanks in part to it's interruptions (cuts).

<globe-map width='740' projections='["Orthographic", "InterruptedHomolosine"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true}}'></globe-map>

## Your turn

Now, feel free to use this tool to play around and get a better understanding of map projections and maybe the world we live on.

<globe-map width='740' projections='["Orthographic", "InterruptedHomolosine"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true, "ui_enabled":true}, "projection_selection":{"enabled":true}}'></globe-map>

## Source

The source for this blog can be found in my [blog repository](https://github.com/mjmdavis/mjmdavis.github.io){:target="_blank"}, the spinny map thing is a polymer web component which you can reuse. It is also on GitHub in the [polymer-globe repository](https://github.com/mjmdavis/polymer-globe){:target="_blank"}.

Credit to [Mike Bostock](https://bost.ocks.org/mike/){:target="_blank"} for [d3](https://d3js.org/){:target="_blank"}. Specifically for the two blocks incorporating [Versor Dragging for Orthographic](https://bl.ocks.org/mbostock/7ea1dde508cec6d2d95306f92642bc42) and [Mercator](https://bl.ocks.org/mbostock/1e10b76becaa4ea4471262bcae619dae) projections.

Credit to [Jason Davies](https://www.jasondavies.com/){:target="_blank"}, specifically for his [Versor Dragging](https://www.jasondavies.com/maps/rotate/){:target="_blank"} example.

Thanks to [Jörn Hees](https://joernhees.de){:target="_blank"} for reading this several times despite having a PhD to finish.
