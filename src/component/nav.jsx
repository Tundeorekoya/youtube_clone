import { Stack } from "@mui/material"
import {Link} from "@mui/material"
import {logo}from "./utilities/constants"
import Searchbar from "./searchBar"


const nav = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ justifyContent: "space-between", background: "#000", position:"sticky", top: 0 , zIndex: 1 }}>
    <Link
      to="/"
      style={{ display: "flex", alignItems: "center" }}
    >
      <img src={logo} alt="logo" height={45}/>
    </Link>
    <Searchbar/>
  </Stack>
)


export default nav