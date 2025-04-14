import {Box, Card, CardContent, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import TechChip from "./TechChip.jsx"

const Values = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return <Grid container
                 spacing={2}
                 sx={{minHeight: '70vh', backgroundColor: theme.palette.background.default}}
                 alignItems="center"
                 textAlign="center">
        <Grid size={{xs: 12, sm: 4}}>
            <Card>
                <CardContent sx={{ height: '100%' }}>
                    <Typography variant="h5" component="div">
                        Lorem ipsum dolor sit amet, consetetur
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consetetur
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid size={{xs: 12, sm: 4}}>
            <Card>
                <CardContent sx={{ height: '100%' }}>
                    <Typography variant="h5" component="div">
                        Lorem ipsum dolor sit amet, consetetur
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consetetur
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        <Grid size={{xs: 12, sm: 4}}>
            <Card>
                <CardContent sx={{ height: '100%' }}>
                    <Typography variant="h5" component="div">
                        Lorem ipsum dolor sit amet, consetetur
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consetetur
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
}

export default Values;