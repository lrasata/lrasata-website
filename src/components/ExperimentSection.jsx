import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import TechChip from "./TechChip.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const ExperimentSection = ({ title, description, projectItems }) => {
  return (
    <>
      <Box justifyItems="center">
        <Typography variant="h2" gutterBottom my={5}>
          {title}
        </Typography>
        <Typography variant="body1" my={3}>
          {description}{" "}
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
        </Typography>
      </Box>

      <Grid container spacing={2} display={"flex"} mb={5}>
        {projectItems.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`${item.title}-${index}`}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow:
                    "0 4px 8px rgba(142, 98, 60, 0.25), 0 12px 32px rgba(142, 98, 60, 0.35)",
                },
              }}
            >
              <CardMedia
                sx={{ height: 300 }}
                image={item.logo}
                title={item.ariaLabel}
              />

              <CardContent sx={{ flex: "1 1 auto" }}>
                <Typography gutterBottom mb={1}>
                  <strong>{item.title}</strong>
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
                <Box mt={2}>
                  {item.tags.map((tag) => (
                    <TechChip label={tag} key={tag} fontSize={12} height={30} />
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ mt: "auto", p: 1.5 }}>
                <Button
                  variant="outlined"
                  href={item.link}
                  target="_blank"
                  fullWidth
                >
                  {item.buttonText}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

ExperimentSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  projectItems: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string,
      ariaLabel: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      link: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      buttonText: PropTypes.string,
    }),
  ),
};

export default ExperimentSection;
