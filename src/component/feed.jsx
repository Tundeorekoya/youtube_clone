import { useState, useEffect } from "react"
import { Typography, Stack, Box } from "@mui/material"
import SideBar from "./sideBar"
import Videos from "./videos"
import { fetchFromApi } from "./utilities/fetchFromApi"
const feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])


  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => (setVideos(data.items)))
  }, [selectedCategory])


  return (
    <Stack
      sx={{ width: "100%", height: "100%", flexDirection: { xs: "column", md: "row" } }}
    >
      <Box sx={{ height: { sx: "auto", md: "100%" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <p style={{ color: "#F4F4F4", fontFamily: "Roboto", fontSize: 9 }}>copyright YouTube Clone </p>
        <Typography className="copyright" variant="body2" sx={{ marginTop: 1.5, color: "#fff" }}>
        </Typography>
      </Box>


      <Box p={2} sx={{ flex: 2, overflowY: "auto", height: "90vh" }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }} >
          {selectedCategory}
          <span style={{ color: "#F31503" }}> Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default feed