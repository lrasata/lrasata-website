import {
  Avatar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import avatarPic from "../assets/avatar.png";
import TypingText from "./animated/TypingText.jsx";
import { motion } from "framer-motion";

const HeroBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const dimension = isMobile ? 160 : 250;

  return (
    <section
      id="home"
      style={{
        backgroundColor: theme.palette.background.default,
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={2}
        sx={{
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Avatar
            alt="Liantsoa Rasata"
            src={avatarPic}
            sx={{ width: dimension, height: dimension, my: 4 }}
          />
        </motion.div>

        <Typography variant="h1" component="h1" gutterBottom mb={2}>
          Hello World!👋 I'm&nbsp;Liantsoa.
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          color="text.secondary"
          mb={5}
        >
          Cloud Engineer | AWS Certified 🚀 | Full-Stack engineering background
        </Typography>

        <TypingText
          text="I am excited to bring ideas ✨ to life in the cloud ☁️. Got something in mind? Let’s build it together."
          variant="body1"
          speed={70}
        />
      </Box>
    </section>
  );
};

export default HeroBanner;
