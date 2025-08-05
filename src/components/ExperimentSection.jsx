import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PropTypes from "prop-types";
import TechChip from "./TechChip.jsx";

const ExperimentSection = ({ title, projectItems }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Typography variant="h2" gutterBottom my={5} sx={{ textAlign: "center" }}>
        {title}
      </Typography>
      <Grid container spacing={3} display={"flex"} mb={5}>
        {projectItems.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={`${item.title}-${index}`}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
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
              <CardActions sx={{ mt: "auto" }}>
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
