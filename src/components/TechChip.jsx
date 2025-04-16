import {Chip} from "@mui/material";

const TechChip = ({ label, fontSize = 16, height = 50}) => {
    return <Chip label={label} sx={{ height: height, fontSize: fontSize, mx: 1, my: 1, width: "max-content"}} />
}

export default TechChip;