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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import TechChip from "./TechChip.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const ExperimentSection = ({ title, description, projectItems }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="h2" gutterBottom mt={5} mb={2}>
          {title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {description}{" "}
        </Typography>
        <Tooltip title="Liantsoa Rasata Github">
          <IconButton
            aria-label="github-account"
            href="https://github.com/lrasata"
            target="_blank"
            color="primary"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </Box>

      <Grid container spacing={2} display={"flex"} my={5}>
        {projectItems.map((item, index) => (
          <Grid size={{ xs: 12, sm: 12, md: 6 }} key={`${item.title}-${index}`}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "row",
                height: "100%",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow:
                    "0 4px 8px rgba(142, 98, 60, 0.25), 0 12px 32px rgba(142, 98, 60, 0.35)",
                },
              }}
            >
              {/* LEFT: Media */}
              {isMobile ? null : (
                <CardMedia
                  component="img"
                  image={item.logo}
                  title={item.ariaLabel}
                  sx={{
                    width: 200,
                    objectFit: "contain",
                    p: 2,
                  }}
                />
              )}

              {/* RIGHT: Content */}
              <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                <CardContent sx={{ flex: "1 1 auto" }}>
                  <Typography gutterBottom mb={1}>
                    <strong>{item.title}</strong>
                  </Typography>

                  <Typography variant="body1">{item.description}</Typography>

                  <Box mt={2}>
                    {item.tags.map((tag) => (
                      <TechChip
                        label={tag}
                        key={tag}
                        fontSize={11}
                        height={25}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 1.5 }}>
                  <Button variant="outlined" href={item.link} target="_blank">
                    {item.buttonText}
                  </Button>
                </CardActions>
              </Box>
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
