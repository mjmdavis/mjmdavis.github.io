const width = 800;
const height = 5000;
mproj = d3.geoMercator()
    .scale(width/6.5)
    .translate([width/2, (height/2)])
    .clipExtent([[0,0],[width, height]])
    .precision(0.001);

canvas = d3.select('#mercator-madness-canvas')
    .attr('width', width*2)
    .attr('height', height*2)
    .style('width', String(width)+'px')
    .style('height', String(height)+'px')
    .each(function(){
        debugger;
        this.getContext('2d').scale(2,2);
    });

d3.json("https://unpkg.com/world-atlas@1/world/110m.json", function(error, world) {
    var sphere = {type: "Sphere"};
    var land = topojson.feature(world, world.objects.countries);

    var circlegen = d3.geoCircle()
        .radius(0.1)
        .precision(0.1)
        .center(function(i){return i;});
    var circle_polygons = d3.set(d3.cross([0], d3.range(-90, 90.01, 1)))
        .values()
        .map(function(xy){
            var center = xy.split(',');
            return circlegen(center.map(parseFloat));
        });
    var circles = {
        "type": "GeometryCollection",
        "geometries": circle_polygons
    };

    var render = function(d,i,s){
        var context = canvas.node().getContext('2d');
        var path = d3.geoPath()
            .projection(mproj)
            .context(context);

        context.save();

        context.beginPath(), path(land);
        context.fillStyle = "#b5ffb2", context.fill();
        context.strokeStyle = "#89c587", context.stroke();

        context.beginPath(), path(circles);
        context.globalAlpha = 0.4;
        context.fillStyle = "#ff99aa", context.fillOpacity = 0.2, context.fill();
        context.globalAlpha = 1;
        context.strokeStyle = "#e08192", context.stroke();

        context.restore();
        context.beginPath(), path(sphere), context.stroke();
    };
    render();
});