import { Box, Typography, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      textAlign="center"
      sx={{
        backgroundColor: theme.palette.primary.main,
        bottom: 0,
        position: "fixed",
        left: "auto",
        right: 0,
        padding: 1,
      }}
      width="100%"
    >
      <Typography sx={{ color: "white", fontSize: "12px !important" }}>
        @{new Date().getFullYear()} Liantsoa Rasata. Built with ❤️
      </Typography>
    </Box>
  );
};

export default Footer;
