import React, { useState } from "react";
import youtube from "./api/youtube";
import { Grid } from "@mui/material";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: "AIzaSyD9uxeMUupwmBDHqXV8Wfg2VSTVmdzYMfA",
        q: searchTerm,
      },
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  return (
    <Grid justifyContent={"center"} container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
