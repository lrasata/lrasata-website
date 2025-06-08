import { Chip } from "@mui/material";
import PropTypes from "prop-types";

const TechChip = ({ label, fontSize = 14, height = 40 }) => {
  return (
    <Chip
      label={label}
      sx={{
        height: height,
        fontSize: fontSize,
        mx: 1,
        my: 1,
        width: "max-content",
      }}
    />
  );
};

TechChip.propTypes = {
  label: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  height: PropTypes.number,
};

export default TechChip;
