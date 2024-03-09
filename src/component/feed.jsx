import { useState, useEffect } from "react"
import { Typography, Stack, Box } from "@mui/material"
import SideBar from "./sideBar"
const feed = () => {
  return (
    <Stack
      sx={{ width: "100%", height: "100%", flexDirection: { xs: "column", md: "row" } }}
    >
      <Box sx={{ height: { sx: "auto", md: "100%" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <SideBar />
        <Typography className="copyright" variant="body2" sx={{ marginTop: 1.5, color: "#fff" }}>
          Copyright 2024 YOUTUBE CLONE
        </Typography>
      </Box>
    </Stack>
  )
}

export default feed