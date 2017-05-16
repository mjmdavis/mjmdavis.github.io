---
layout: post
title:  "How to read maps."
date:   2017-04-29 17:03:39 +0200
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

### Or to make sense of this picture
<div class='mapwrap'>
<globe-map width='500' rotation='[0,-50,0]' projections='["Orthographic"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>
<globe-map width='500' rotation='[0,-50, 0]' projections='["Mercator"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>
</div>

## The World
The world is round. Don't believe me? [Google says so](https://www.google.com/maps/@25.6150528,3.6591736,11928591m/data=!3m1!1e3)

Let me show you the world.

<globe-map projections='["Orthographic"]' width="1000"></globe-map>

Round and wonderful. There's Africa and Europe. You can see South America. If you look around a bit
you can see what looks like it might be Canada... Hmm. OK, I'll spin it around and show you the other side.

<globe-map projections='["Orthographic"]' rotation='[180,0,0]' width="600" ></globe-map>

Not much better... OK, third time's the charm...

<globe-map projections='["Orthographic"]' rotation='[90,0,0]' width="600" ></globe-map>

Yes, here you see America, South America... where's China? Let's draw a few more!

### I present you... THE WORLD
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

But what if we want to see two places at once? Two globes! I know what you're thinking. You're thinking "Genius! Who doesn't want two hulking great spheres on their desk, in in their pocket?! [I do!](http://www.bellerbyandco.com/) While beautiful, they are a bit impractical.
They'd have to be enormous to provide the accuracy we need for sailing the high seas or finding your way around the corner to buy some milk...

The pragmatist in me is thinking that it would be nice if I could put this on a piece of paper.
Thin, light, you can roll it up, lay it out on a desk. Most practical!


Someone told me that a popular and good way of making a sphere flat was something called the Mercator Projection.

<globe-map width='740' height='740' projections='["Mercator"]'></globe-map>

So, the whole world is visible :). Wow, Greenland looks really big though, and what's the gigantic land mass at the bottom? Let's put a globe next to it.

<div class="mapwrap">
<globe-map projections='["Orthographic"]' config='{"rotation":{"enabled":true, "ui_enabled":true}}' width='540' ></globe-map>
<globe-map projections='["Mercator"]' width='540'></globe-map>
</div>

Right. So that really big land mass at the bottom? It's not nearly as big on the globe as on the flat map. Maybe we can add some indication of scale better compare.

A Frenchman named Tissot came up with [something fancy](https://en.wikipedia.org/wiki/Tissot%27s_indicatrix). The general idea was to characterize local distortions; To show you what a small circle would look like when moved from the globe to the map.
I'm more interested in distortion at the scale of the map I'm looking at. To characterize this I think we could draw circles on the globe and project them into our map.

<div class="mapwrap">
<globe-map projections='["Orthographic"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true}}' width='540'></globe-map>
<globe-map projections='["Mercator"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}' width='540'></globe-map>
</div>

Play around with the globe a bit and get a feel for how the Mercator projection distorts area. You might have noticed that the circles drawn on the poles of the globe do not appear on the Mercator map... Well, they are *barely* visible, as thin lines at the top and bottom of the map. Why aren't they visible? Well, the Mercator projection preserves the angle of intersecting lines and preserves shapes at small scale.

To better understand the Mercator projection, we should first look at the Equirectangular projection.

<globe-map projections='["Equirectangular"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}' width='740'></globe-map>

And how it relates to the globe and the Mercator projection.

<div class='mapwrap'>
<globe-map width='300' projections='["Orthographic"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>
<globe-map width='300' projections='["Equirectangular"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>
<globe-map width='300' projections='["Mercator"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>
</div>

The Equirectangular projection is like dropping the spherical globe into a cylinder, making tiny holes at the poles and stretching the sphere out so the points at the poles wrap around the top and bottom of the cylinder. Then you just slice the cylinder at the [antimeridian](https://en.wikipedia.org/wiki/180th_meridian) and unroll it into a rectangle.  

Notice that on the Equirectangular map, the height of each circle is the same but the width changes as the map gets more stretched out near the poles. In fact, as you get to a pole, you have stretched a single point out into the entire width of the map!  

To remedy the horizontal stretching, the Mercator Projection stretches the globe out in the vertical direction an equal amount to the stretching in the vertical direction. This is good because it helps preserve the shape of small objects. It's also great if you're a sailor as you can draw a straight line on a Merctor map and if you sail along it, you will maintain a constant heading. Really useful for navigating a ship in the 1600s. In fact, Mercator was the name of a guy who sold maps. He described the map using this projection method as a "new and augmented description of Earth corrected for the use of sailors". Today the Mercator projection is still used to navigate the high seas.

You can see the effect of this when using Google Maps. If you move north or south from the equator and stay at the zoom level, objects will become larger 😯.

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

In fact, this effect becomes leads to [Infinite distortion]({{ site.url }}/showing/2017/04/29/mercator-madness.html).

### TL;DR.

Every map you see in 2D is some kind of tradeoff of different types of distortion. It's not always immediately obvious what tradeoffs are being made because we have been conditioned to seeing the world as a 2D projection of a 3D object. i.e. A globe unrolled onto a piece of paper.

To help with this, I came up with a tool that aims to help humans quickly gain an intuitive understanding for how a particular map projection distorts the globe. 

### Playing with Projections

To help my understanding of how projections distort the globe I came up with a little tool that allows you to rotate a globe and see how the rotated globe translates into a particular map. Here is that tool comparing the globe to the Mercator projection. You can **drag** either map to rotate the earth and **recenter** the rotation with the button in the top left.

<div class="mapwrap">
<globe-map width='360' projections='["Orthographic", "Mercator"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true}}'></globe-map>
</div>

This representation helps us understand how projections distort area. Projections also distort shape. This view illustrates the distortion of shape.

<div class="mapwrap">
<globe-map width='360' projections='["Orthographic", "Mercator"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true}}'></globe-map>
</div>

The idea is to split the globe up into similarly shaped and sized tiles. Each tile has similar area and shape on the globe so it's easy to see the distortion on the map. Traditional graticules are neither similar in size or shape on a globe and can be considered misleading.

In fact, both representation give you an idea of how a map projection distorts shape and area.

Armed with these weapons you can fight back against the tyrannical cartographers of times gone by. Turn your nose up in disgust at density metrics on Mercator maps and make up your own mind which projection you like best.

My favorite is below, the [Goode Homolosine](https://en.wikipedia.org/wiki/Goode_homolosine_projection).  
It is indeed very Goode; an equal-area projection, it preserves area and area constant across the map. It also, in my opinion, does a good job of minimising distortion thanks to it's interruptions (cuts).

<globe-map width='740' projections='["Orthographic", "InterruptedHomolosine"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true}}'></globe-map>

### Your turn

Now, feel free to use this tool to play around and get a better understanding of map projections and maybe the world we live on.

<globe-map width='740' projections='["Orthographic", "InterruptedHomolosine"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "geodesic_graticule":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true, "ui_enabled":true}, "projection_selection":{"enabled":true}}'></globe-map>


