const canvas = d3.select('.canvas');
console.log(canvas)

const svg = canvas.append("svg")
    .attr("height", "600")
    .attr("width", "600");

const group = svg.append("g");

//appending elements
group.append("rect")
    .attr("height", 100)
    .attr("width", 200)
    .attr("x", 20)
    .attr("y", 20)
    .attr("fill", "blue");

group.append("circle")
    .attr("r", 50)
    .attr("cx", 300)
    .attr("cy", 70);

group.append("line")
    .attr("x1", 370)
    .attr("x2", 400)
    .attr("y1", 20)
    .attr("y2", 120)
    .attr("stroke", "pink")
    .attr("stroke-width", 2);

svg.append("text")
    .attr("x", 200)
    .attr("y", 150)
    .attr("fill", "red")
    .text("hello ninjas!")
    .style("font-family", "arial")
    .style("font-size", 30);