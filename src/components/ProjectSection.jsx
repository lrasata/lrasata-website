import {Box, Button, Card, CardMedia, Grid, Stack, Typography} from "@mui/material";
import PropTypes from 'prop-types';
import TechChip from "./TechChip.jsx";
import Divider from "@mui/material/Divider";


const ProjectSection = ({title, projectItems}) => {
    return <>
        <Typography variant="h2" gutterBottom my={5} sx={{textAlign: "center"}}>{title}</Typography>
        {
            projectItems.map((item, index) => (
                <Grid container
                      spacing={8}
                      display={'flex'}
                      padding={2}
                      mb={5}
                      key={`${item.title}-${index}`}
                >
                    <Grid size={{xs: 12, sm: 3}}>
                        <Card sx={{height: 200}}>
                            <CardMedia
                                sx={{height: 'inherit', zoom: 0.5}}
                                image={item.logo}
                                title={item.ariaLabel}
                            />
                        </Card>
                    </Grid>
                    <Grid size={{xs: 12, sm: 9}}>
                        <Typography gutterBottom>
                            <strong>{item.title}</strong>
                        </Typography>
                        <Typography>
                            {item.description}
                        </Typography>
                        <Box mb={2}>
                            {
                                item.tags.map(tag => (
                                    <TechChip label={tag} key={tag} fontSize={12} height={30}/>
                                ))
                            }
                        </Box>

                        <Button variant="outlined" href={item.link} target="_blank">{item.buttonText}</Button>
                    </Grid>

                </Grid>
            ))
        }
        <Divider />
    </>
}

ProjectSection.propTypes = {
    title: PropTypes.string,
    projectItems: PropTypes.arrayOf(PropTypes.shape({
        logo: PropTypes.string,
        ariaLabel: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        buttonText: PropTypes.string,
    })),
};

export default ProjectSection;