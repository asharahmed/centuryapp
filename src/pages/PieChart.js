import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = svg.attr('width');
    const height = svg.attr('height');
    const radius = Math.min(width, height) / 2 - 10;

    const color = d3.scaleOrdinal().range(d3.schemeCategory10);

    const pie = d3
      .pie()
      .value((d) => d.value)
      .sort(null);

    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    const arcLabel = d3
      .arc()
      .innerRadius(radius * 0.7)
      .outerRadius(radius * 0.7);

    const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

    const arcs = pie(data);

    g.selectAll('path')
      .data(arcs)
      .join('path')
      .attr('d', arc)
      .attr('fill', (d) => color(d.data.label))
      .append('title')
      .text((d) => `${d.data.label}: ${d.data.value}`);

    g.selectAll('text')
      .data(arcs)
      .join('text')
      .attr('transform', (d) => `translate(${arcLabel.centroid(d)})`)
      .attr('dy', '0.35em')
      .attr('text-anchor', (d) => {
        // Determine whether to anchor text to the left or right of the center
        const [x] = arcLabel.centroid(d);
        return x < 0 ? 'end' : 'start';
      })
      .call((text) =>
        text
          .append('tspan')
          .attr('font-weight', 'bold')
          .text((d) => d.data.label)
      )
      .call((text) =>
        text
          .filter((d) => d.endAngle - d.startAngle > 0.25)
          .append('tspan')
          .attr('x', 0)
          .attr('y', '1.2em')
          .attr('fill-opacity', 0.7)
          .text((d) => d.data.value)
      );
  }, [data]);

  return (
    <svg ref={svgRef} height="250" width="250" viewBox="0 0 250 300" preserveAspectRatio="xMidYMid meet">
      <g />
    </svg>
  );
};

export default PieChart;
