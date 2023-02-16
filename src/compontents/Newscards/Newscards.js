import React from "react";

import Newscard from "../Newscard/Newscard";
import useStyles from "./styles.js"

import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";


const Newscards = ({ articles }) => {
    
  const classes=useStyles();
  
  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((articles, i) => (
        <Grid items xs={12} sm={6} md={4} ig={3} style={{display: "flex"}}>
          <Newscard articles={articles}  i={i}  />
          </Grid>
          ))}
        </Grid>
    </Grow>
  );
};
export default Newscards;
