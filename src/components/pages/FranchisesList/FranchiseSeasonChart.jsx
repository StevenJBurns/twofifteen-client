import React from 'react';
import * as D3 from 'd3';

export const FranchisdeSeasonChart = ({data}) => {
  const container = React.useRef(null);

  const calculateWinningPercent = ({w, l}) => w / (w + l);

  React.useEffect(() => {
    if (container.current) {

    console.log('data: ', data);

    const svg = D3.select(container.current);

    const scaleX = D3.scaleLinear().domain([1962, 2019]).range([0, 720]);
    const scaleY = D3.scaleLinear().domain([0, 1]).range([0, 180]);
    const axisX = D3.axisBottom().scale(scaleX);
    const axisY = D3.axisLeft().scale(scaleY);

    const update = svg
      .append('g')
      .selectAll('rect')
      .data(data)
    
    update.enter()
      .append('rect')
      .attr('width', 8)
      .attr('height', d => calculateWinningPercent(d) * 360)
      .attr('fill', 'lightblue')
      .attr('x', (d, i) => i * 10)
      .attr('y', d => 360 - calculateWinningPercent(d) * 360)

    // update
    //   .attr('x', (d, i) => i * 40)

    /* X and Y axes */
    svg.select("g")
      .style('color', 'lime')
      .style('fontSize', 32)
      .call(axisX)
      .call(axisY);

    /* Chart Header */
    svg.select("g")
      .append("text")
      .style('fill', 'lime')
      .text("All Franchise Seasons &bull; 1962 - 2019")

    /* insert the .500 line */
    svg.select("g")
      .append('line')
      .attr("x1", 0)
      .attr("y1", 180)
      .attr("x2", 600)
      .attr("y2", 180)
      .attr("stroke-width", 1)
      .attr("stroke", "lightgreen")
    }
  }, [data, container.current]);


  return (
    <section style={{padding: 16}}>
      <svg ref={container} height="360" width="720" />
    </section>
  )
}