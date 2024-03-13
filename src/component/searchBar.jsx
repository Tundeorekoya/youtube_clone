import { useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

const searchbar = () => {
  return (
    <Paper component="form"
      onSubmit={() => { }}
      sx={{ borderRadius: 20, pl: 2, border: "1px solid #e3e3e3 " }}
    >
      <input type="text" className="search-bar" placeholder="Search...." onChange={() => { }} />
      <IconButton type="submit" sx={{ color: "red", p: 1 }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default searchbar