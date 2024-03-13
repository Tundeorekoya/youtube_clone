import { Stack } from "@mui/material"
import categories from "./categories"


const sideBar = ({ selectedCategory, setSelectedCategory }) =>

(
    <Stack
        direction="row"
        sx={{
            overflow: "auto", height: { sx: "auto", md: "95%" },
            flexDirection: { sx: "row", md: "column" }
        }}
    >
        {
            categories.map((category) => (
                <button className="category-btn"
                    onClick={() => setSelectedCategory(category.name)}
                    style={{ color: "white", background: category.name === selectedCategory && "#fc1503" }}
                    key={category.name}
                >
                    <span style={{ color: category.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
                        {
                            category.icon
                        }
                    </span>
                    <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
                        {
                            category.name
                        }
                    </span>
                </button>
            ))
        }
    </Stack >
)


export default sideBar
