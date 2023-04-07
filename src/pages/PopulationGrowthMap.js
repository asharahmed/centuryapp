import React, { useEffect, useRef } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import * as d3 from 'd3';
import { makeStyles } from '@mui/styles';
import * as topojson from 'topojson-client'; // Import topojson library


import data from '../data.json';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 275,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    marginBottom: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
}));

function PopulationGrowthMap() {
  const classes = useStyles();
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define the projection and path generators
    const projection = d3.geoMercator().center([-110, 60]).scale(900);
    const pathGenerator = d3.geoPath(projection);

    // Load the GeoJSON data for Canada
    d3.json('https://gist.githubusercontent.com/Brideau/2391df60938462571ca9/raw/f5a1f3b47ff671eaf2fb7e7b798bacfc6962606a/canadaprov.json').then((geoData) => {
        console.log(geoData)
      

      // Define the color scale and legend
      const colorScale = d3.scaleSequential(d3.interpolateYlOrRd).domain([0, d3.max(data, (d) => d.population)]);
      const legendScale = d3.scaleSqrt().domain(colorScale.domain()).range([0, 80]);

      // Draw the map
      svg
        .selectAll('path')
        .data(canada.features)
        .enter()
        .append('path')
        .attr('d', pathGenerator)
        .attr('fill', (d) => (d.population ? colorScale(d.population) : '#ddd'));

      // Draw the legend
      const legend = svg.append('g').attr('transform', `translate(${projection([-130, 50])})`);

      legend
        .selectAll('rect')
        .data(colorScale.ticks(6))
        .enter()
        .append('rect')
        .attr('x', 0)
        .attr('y', (d) => legendScale(d))
        .attr('width', 20)
        .attr('height', (d) => legendScale(colorScale(d)) - legendScale(0))
        .attr('fill', colorScale);

      legend
        .selectAll('text')
        .data(colorScale.ticks(6))
        .enter()
        .append('text')
        .attr('x', 30)
        .attr('y', (d) => legendScale(d) + (legendScale(colorScale(d)) - legendScale(0)) / 2)
        .attr('dominant-baseline', 'middle')
        .text((d) => d.toLocaleString());
    });
  }, []);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          Population Growth Map
        </Typography>
        <svg ref={svgRef} width="100%" height="90vh"></svg>
</CardContent>
</Card>
);
}

export default PopulationGrowthMap;
