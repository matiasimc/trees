import Grid from "@mui/material/Grid";
import React from "react";
import "./Gallery.css";

type Props = { children: React.ReactNode };

/**
 * Component that renders a Grid gallery of its children.
 */
function Gallery({ children }: Props) {
  const gridItems = React.Children.map(children, buildGridItem);
  return (
    <Grid container spacing={4}>
      {gridItems}
    </Grid>
  );
}

function buildGridItem(item: React.ReactNode, index: Number = 0) {
  return (
    <Grid item xs={12} md={6} lg={4} key={index.toString()}>
      {item}
    </Grid>
  );
}

export default Gallery;
