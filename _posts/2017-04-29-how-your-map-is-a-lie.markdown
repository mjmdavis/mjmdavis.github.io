---
layout: post
title:  "Every map is a lie."
date:   2017-04-29 17:03:39 +0200
categories: showing
---

<link rel="import" href="{{ site.url }}/assets/bower/globe-map/globe-map.html">

# How you lie with maps
## The World
The world is round. Don't believe me? [Google says so](https://www.google.com/maps/@25.6150528,3.6591736,11928591m/data=!3m1!1e3)

Let me show you the world.

<globe-map projections='["OrthographicZoomed"]' width="250" height="250"></globe-map>

Round and wonderful. There's Africa and Europe. You can see South America. If you look around a bit
you can see what looks like it might be Canada... Hmm. OK, I'll spin it around and show you the other side.

<globe-map projections='["OrthographicZoomed"]' rotation='[180,0,0]' width="250" height="250"></globe-map>

Not much better... OK, third time's the charm...

<globe-map projections='["OrthographicZoomed"]' rotation='[90,0,0]' width="250" height="250"></globe-map>

Yes, here you see America, South America... where's China? Let's draw a few more!

### I present you... THE WORLD
<globe-map projections='["OrthographicZoomed"]' rotation='[90,0,0]' width="250" height="250"></globe-map>
<globe-map projections='["OrthographicZoomed"]' rotation='[0,0,0]' width="250" height="250"></globe-map>
<globe-map projections='["OrthographicZoomed"]' rotation='[-90,0,0]' width="250" height="250"></globe-map>

I'm not sure about you but I'm feeling distinctly underwhelmed. Only the countries in the center are undistorted and I can't see the whole map.
People used to put this on spinning balls right?
Let's try that.

<globe-map projections='["OrthographicZoomed"]' config='{"rotation":{"enabled":true, "ui_enabled":true}}'></globe-map>

Fun! You can even spin it!

OK, but what if we want to see two places at once? Two globes! I know what you're thinking. You're thinking "Genius! Who doesn't want two hulking great spheres on their desk, in in their pocket?! [I do!](http://www.bellerbyandco.com/) OK, while beautiful, they are a bit impractical.
They'd have to be enormous to provide the accuracy we need for sailing the high seas or finding your way around the corner to buy some milk...

The pragmatist in me is thinking that it would be nice if I could put this on a piece of paper.
Thin, light, you can roll it up, lay it out on a desk. Most practical!


Someone told me that a popular and good way of making a sphere flat was something called the Mercator Projection.

<globe-map projections='["Mercator"]'></globe-map>

So, the whole world is visible :). Wow, Greenland looks relaly big though, and what's the gigantic land mass at the bottom? Let's put a globe next to it.

<globe-map projections='["Orthographic"]' config='{"rotation":{"enabled":true, "ui_enabled":true}}'></globe-map>
<globe-map projections='["Mercator"]'></globe-map>

Right. So that really big land mass at the bottom? It's not nearly as big on the globe as on the flat map. Maybe we can add some indication of scale...

A Frenchman named Tissot came up with something fancy where he projected an infinitely small circle onto a map. This way he characterized local, small scale distortions.
I'm more interested in distortion at the scale of the map I'm looking at. To characterize this I think we could draw circles on the globe and project them into our map.

<globe-map projections='["Orthographic"]' config='{"rotation":{"enabled":true, "ui_enabled":true}, "nt_indicatrice":{"enabled":true}}'></globe-map>
<globe-map projections='["Mercator"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>

Play around with the globe a bit and get a feel for how the Mercator projection distorts area. You might have noticed that the circles drawn on the poles of the globe do not appear on the Mercator map... Well, they are *barely* visible, as thin lines at the top and bottom of the map. Why aren't they visible? Well, the Mercator projection preserves the angle of intersecting lines and preserves shapes at small scale.

To better understand the Mercator projection, we should first look at the Equirectangular projection.

<globe-map projections='["Equirectangular"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>

The Equirectangular projection is like dropping the spherical globe into a cylinder, making tiny holes at the poles and stretching the sphere out so the points at the poles become the radii at the top and bottom of the cylinder. Then you just slice the cylinder at the antimeridian and unroll it into a rectangle.  

Notice that the height of each circle is the same but the width changes as the map gets more stretched out near the poles. In fact, as you get to a pole, you have stretched a single point out into the entire width of the map! Infinite distortion.

To remedy the horizontal stretching, the Mercator Projection stretches the globe out in the vertical direction an equal amount to the stretching in the vertical direction. This is good because it helps preserve the shape of small objects. It's also great if you're a sailor as you can draw a straight line on a Merctor map and if you sail along it, you will maintain a constant heading. Really useful for navigating a ship in the 1600s. In fact, Mercator was the name of a guy who sold maps. He described the map using this projection method as a "new and augmented description of Earth corrected for the use of sailors". Today the Mercator projection is still used to navigate the high seas.

<globe-map projections='["Mercator"]' config='{"rotation":{"enabled":false, "ui_enabled":false}, "nt_indicatrice":{"enabled":true}}'></globe-map>

## link to giant mercator 

When you're 
