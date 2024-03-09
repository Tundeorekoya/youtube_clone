import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"
import { Nav, Feed, ChannelDetail, SearchFeed, VideoDetail} from "./component"
const App = () =>
(
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#030637"}}>
    <Nav/>
      <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channelDetail:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />

      </Routes>
    </Box>
  </BrowserRouter>

)


export default App
