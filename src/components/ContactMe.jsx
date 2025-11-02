import { Box, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";

const ContactMe = () => {
  const theme = useTheme();

  return (
    <section id="contact">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        sx={{
          height: "30vh",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography variant="h2" gutterBottom>
          Let's get in touch.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Tooltip title="LinkedIn profile">
            <IconButton
              aria-label="linked-in-profile"
              href="https://www.linkedin.com/in/liantsoa-rasata-b682b6122/"
              target="_blank"
              color="primary"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Github account">
            <IconButton
              aria-label="github-account"
              href="https://github.com/lrasata"
              target="_blank"
              color="primary"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Medium stories">
            <IconButton
              aria-label="meidum-stories"
              href="https://medium.com/@rmliantsoa"
              target="_blank"
              color="primary"
            >
              <ArticleIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
    </section>
  );
};

export default ContactMe;
