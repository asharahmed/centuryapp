import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import data from '../data.json';

const Visualization = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = d3.select(canvasRef.current)
      .append("svg")
      .attr("width", 800)
      .attr("height", 400);

    const populationData = data.map(d => ({ year: d.year, population: d.population / 1000000 })); // divide by 1 million to convert to millions

    const xScale = d3.scaleLinear()
      .domain([2022, 2100])
      .range([50, 750]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(populationData, d => d.population)])
      .range([350, 50]);

    const xAxis = d3.axisBottom(xScale)
      .tickFormat(d3.format(".0f"));

    const yAxis = d3.axisLeft(yScale)
      .tickFormat(d => d + "M"); // update y-axis tick format to display values in millions

    canvas.append("g")
      .attr("transform", "translate(0, 350)")
      .call(xAxis);

    canvas.append("g")
      .attr("transform", "translate(50, 0)")
      .call(yAxis);

    const line = d3.line()
      .x(d => xScale(d.year))
      .y(d => yScale(d.population));

    canvas.append("path")
      .datum(populationData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, []);

  return (
    <div>
      <h1>Population Growth Over Time</h1>
      <div ref={canvasRef}></div>
    </div>
  );
};

export default Visualization;
