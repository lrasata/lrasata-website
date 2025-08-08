import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const useTypingEffect = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayedText;
};

// Typing text component
const TypingText = ({ text, variant, color, speed }) => {
  const typedText = useTypingEffect(text, speed);
  return (
    <Typography
      variant={variant}
      color={color || "inherit"}
      gutterBottom
      sx={{ whiteSpace: "pre-wrap" }}
    >
      {typedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{ display: "inline-block" }}
      >
        |
      </motion.span>
    </Typography>
  );
};

export default TypingText;
