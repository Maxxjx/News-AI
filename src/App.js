import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import Newscards from "./compontents/Newscards/Newscards";

const alankey = "4bfb4282fea544a2497aa27089f9a6bb2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {

  const [newsArticles,setNewsArticles]= useState([])

  useEffect(() => {
    alanBtn({
      key: alankey,
      onCommand: ({ command , articles}) => {
        if(command === 'newHeadlines' ) {
          console.log(articles)
           setNewsArticles(articles);
           
        }
      }
    })
  }, [])

  return (

    <div>
      <h1>Maxx-Time AI-News App</h1>
       <Newscards articles={newsArticles}/> 
    </div>
  );
};
export default App;
