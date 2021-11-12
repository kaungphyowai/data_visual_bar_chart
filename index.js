const w = 800;
const h = 300;

fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json")
                    .then(response => response.json()).then((data )=> {
                       console.dir(data);
                       drawSvg(data); 
                    })
function drawSvg(data){
    const svg =d3.select('#bar')
                  .append('svg')
                  .attr('width', w)
                  .attr('height', h);
    svg.selectAll('rect')
         .data(data.data)
         .enter()
         .append('rect')
         .attr("x", (d, i) => i * 30)
         .attr('y', (d, i) => h - d[1])
         .attr('width', 25)
         .attr('height', (d, i) => d[1])
}
