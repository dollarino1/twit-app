import React from 'react';
import {ThemeProvider} from "@mui/material";
import mainTheme from './styles/main';
import {mainAPI} from "./services/MainService";

function App() {
    const {data: posts, isLoading} = mainAPI.useFetchAllQuery(5)
  return (
      <ThemeProvider theme={mainTheme}>
          <div className="App">
              {posts ? posts.map(post => {
                  return <h4 key={post.id}>{post.title}</h4>
              }) : 'Loading'}
          </div>
      </ThemeProvider>

  );
}

export default App;
