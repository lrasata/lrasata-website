import {Box, Button, Card, CardContent, Container, Grid, Typography, useTheme} from "@mui/material";

const VALUES = [
    {
        title: "Get it done & Do it right",
        description: "You’ve got the idea — I’ll build it right. Clean, solid, and scalable.",
    },
    {
        title: "Communication",
        description: "One of most essential  soft skill in software engineering. I keep things simple, clear, and easy for everyone to follow.",
    },
    {
        title: "Collaboration",
        description: "I’m all about teamwork. Great things happen when we build together.",
    },
    {
        title: "Problem solving",
        description: "Roadblocks? No stress. I figure it out and keep things moving.\n",
    }

]
const Values = () => {
    const theme = useTheme();

    const handleClick = () => {
        const link = document.createElement("a");
        link.href = "/lr-resume.pdf";
        link.setAttribute("download", "liantsoa-rasata-resume.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return <Box alignContent="center"
                textAlign="center"
                sx={{minHeight: '50vh', backgroundColor: theme.palette.background.default}}>
        <Container maxWidth="xl">
            <Typography variant="h2" gutterBottom my={5}>My work ethic</Typography>
            <Grid container spacing={2}
                  justifyContent="center"
                  display={'flex'}
                  flexGrow={1}
                  alignItems="stretch"
                  padding={2}
                  mb={5}
            >
                {
                    VALUES.map((item, index) => (
                        <Grid size={{xs: 12, sm: 3}} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent sx={{height: '100%'}}>
                                    <Typography variant="h5" gutterBottom my={4}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }

            </Grid>
            <Button variant="contained" size="large" sx={{ mb: 5}} onClick={handleClick}>
                Download my resume
            </Button>
        </Container>

    </Box>

}

export default Values;