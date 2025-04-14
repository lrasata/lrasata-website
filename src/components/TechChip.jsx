import {Chip} from "@mui/material";

const TechChip = ({ label}) => {
    return <Chip label={label} sx={{ height: '50px', fontSize: 16, mx: 1, my: 1, width: "max-content"}} />
}

export default TechChip;