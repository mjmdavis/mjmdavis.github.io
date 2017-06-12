---
layout: post
title:  "The problem with maps readme."
date:   2017-06-10
categories: documenting
hidden: true
image: assets/polymer-globe-preview.png
---

## Summary
I created a [blog post]({{ site.url }}/showing/2017/05/16/how-to-read-maps.html) around a vizualization I created to communicate how map projections distort the true earth. Often, people are unaware of how a visualization presented as a map can distort the truth. I wanted to be able to quickly get a feel for a given projection. It's also quite interesting and fun to play with the tool.

## Design
I wanted to ease people into the concepts and the different representations of the map. I did this by engaging in conversation with the reader. By slowly introducing more and more concepts, we explored the Mercator projection and used it as an example to explain the rationale behind the tool.

I created the vizualization as a web component. A web component is effectively a custom html tag that operates in isolation from the DOM. This made it easy to reproduce the maps several times across the blog post while keeping the DOM relatively clean.

The blog is in fact a [Jekyll](https://jekyllrb.com/) blog  hosted on github pages. The source for the [blog post](https://github.com/mjmdavis/mjmdavis.github.io) and the [web component](https://github.com/mjmdavis/polymer-globe) is all available on my github account.

I spent some time improving the post based on feedback I received. Examples of the effect of the distortion in google maps. Simpler explanations. Improved layout and formatting. Even an AB test :D

The AB test was directed at these two different versions:
[Version A]({{ site.url }}/showing/2017/05/16/how-to-read-maps.html)
[Version B]({{ site.url }}/showing/2017/05/16/The-problem-with-maps.html)

Despite getting about 5k views during the AB test, I was unable to get a clear result.

I was attempting to 'give a man a net' instead of 'give a man a fish'. I want to arm people with some tools they can use to better understand how a map can distort shape and area. It is up to the reader to decide which map projection they want to use to visualise x,y or z. I hope, however, to enable them to make a more informed decision than they would otherwise.

### All Charts
<style>
table{
    border-collapse: collapse;
    border-spacing: 0;
    border:2px solid #000000;
}

th{
    border:2px solid #000000;
}

td{
    border:1px solid #000000;
}
</style>

| color      | information              |
| ---------- | -----------------------  |
| black      | limit of the map         |
| pale green | land                     |
| dark green | country borders          |
| red        | circles of constant area |
| blue       | geodesic graticule       |


### The World
#### Chart Types
3 Orthographic projection maps.  
1 Orthographic projection map with rotation enabled and a 'recenter' button.

#### Reasoning behind Choice
Here I start off slowly, reminding the reader of some of the basics and introducing them to the idea of interactivity. The limitations of the Orthographic projection are highlighted along with the limitations of an interactive Orthographic projection with rotation.

### Mercator Map
#### Chart Types
1 Mercator projection map.  
1 Interactive Orthographic projection map alongside a static Mercator projection map.

#### Reasoning behind Choice
The first 'real' projection that the user sees is the Mercator projections. We discuss some of the advantages and disadvantages of the Mercator projection. The reader is encouraged to use the side by side 'globe' and Mercator map to get an idea of the distortion.  
Visual encodings in the form of the area of countries are less effective due to the reader's familiarity with seeing the world in this way. The map of the right seems normal but is apparently wrong when compared to the one on the left.

### (Not) Tissot's indicatrix
#### Chart Types
1 rotateable Orthographic projection map with circles of constant area (NT Indicatrice) alongside 1 static Mercator projection map, with the same NT Indicatrice.


#### Reasoning behind Choice
Here the reader is presented with the same two maps as in the previous section with the addition of a new, less familiar visual encoding. The reader is suddenly able to reason about the distortion in a different way when presented with a map covered with the familiar circle of equal area. On the left, the circles all appear to be the same size, on the right, they are distorted.

### Distortion
#### Chart Types
1 static Equirectangular projection map with NT Indicatrice

1 static Orthographic projection map,
1 static Equirectangular projection map,
1 Mercator projection map, all alongside one another.

2 Google Map views at the same zoom level of different latitudes of the earth. Automobiles in the frame. Additional visual encoding of scale via size comparison of everyday objects.

#### Reasoning behind Choice
Here the reader gains some impression of how the Mercator projections came to be. The reader is also more generally familiarized with the concept that any 2D map of the globe is inherently distorted. Visual encodings in the form of circles of equal area accompany a progression of projections.

A new visual encoding is introduced in the form of familiar everyday objects. Cars. Two Google maps are presented that illustrate the distortion of the Mercator projection as the apparent size of cars at different latitudes on the earth.

### TL;DR.
A simple statement. Two dimensional World Maps are inherently  distorted.

### Playing with Projections
#### Chart Types
1 Orthographic projection map with NT Indicatrice alongside 1 Mercator projection map, with the same NT Indicatrice. This time, both have rotation enabled and the rotation of the two projections is bound together.  


1 Orthographic projection map with Geodesic Graticules alongside 1 Mercator projection map, with the same Geodesic Graticules. Both have rotation enabled and the rotation of the two projections is bound together. New visual encoding in the form of straight lines enclosing areas of similar area being distorted by the projection. Straight lines -> curved lines as they are distorted.

1 Orthographic map with Geodesic Graticules above a Goode Homolosine map with the same Geodesic Graticules. Both have rotation enabled and bound.

#### Reasoning behind Choice
Now that the reader is somewhat more familiar with the problem, the hand holding stops. They are introduced to two novel visual encodings that they can use to explore map distortion.

The first has already been seen. The circles illustrate preservation of area and independent scaling in the longitudinal and latitudinal directions. Good for evaluating whether a projection does a good job of preserving area.

The second encoding is made up of triangles of approximately equal area. These illustrate scaling but also the preservation of straight lines. Preservation of direction. Lines which are straight on the globe are no longer straight on the 2D map.

The first has already been seen. The circles illustrate preservation of area and independent scaling in the longitudinal and latitudinal directions. Good for evaluating whether a projection does a good job of preserving area.

### Your turn
#### Chart Types
Default projections in the form of Orthographic and Goode Homolosine. The user is able to change the properties of the NT Indicatrice and the Geodesic Graticules. The user is also able to select the projection type from a list of different projections.

The user can modify the nature of the visual encodings to allow them to explore the map projection they choose.


#### Reasoning behind Choice
Finally, the reader is invited to play with the tool and adjust the settings to make his own evaluations of a selection of projections.


## Feedback
### Mr. J
* Make the beginning of the blog post more interesting. It's currently a bit dry.

This comment led to the AB test. I tried to make the beginning of the post more exciting and to showcase some interactivity up front. In the end the test was pretty inconclusive. The null hypothesis was probably true.


### Mr.P
* It's broken.
* I like the writing style. It's easy to read.
* Can you show the roll, pitch, yaw of the projection.
* Doesn't work on mobile.

### Ms.A
* I kind of understand it.
* So, the map really makes things look bigger in the north?

### Ms.T
* It's a bit long winded.

### Feedback Summary

I addressed much of the feedback but there are some things that I still feel could be improved.

The overall feeling that I got from the feedback was that the earlier versions weren't interactive enough. I added interaction along the way but some users weren't aware or didn't get to the interactive bits before giving up.

I could improve the article by highlighting interactivity more obviously, encouraging more exploration of the projections and by engaging the user earlier with more exciting visuals.

As a learning tool, I think it's pretty good, as a 'viral blog post', it needs some work :P.

## Resources
See end of blog post for Sources.
