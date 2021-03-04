
import React from "react";
import {makeStyles} from "@material-ui/core";
import {Paper, Container, Grid, Typography, Button} from "@material-ui/core";
import bgImage from './images/hero.jpg'

const useStyles = makeStyles((theme) => ({
    mainFeaturesPos: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"

    },
    mainFeaturesPosContent: {
        position: "relative",
        marginTop: theme.spacing(8),
        padding: theme.spacing(6),


    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: "rgba(0,0,0,0.3)"
    },

}));
const Hero = (props) => {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.mainFeaturesPos}
                   style={{ backgroundImage: `url(${bgImage})` }}
            >
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturesPosContent}>
                                <Typography
                                    component="h1"
                                    variant="h3"
                                    color="inherit"
                                    gutterButton
                                >
                                    Hello in My test Page
                                </Typography>

                                <Typography variand="h5" color="inherit" paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eos ex expedita
                                    explicabo illo non sit tenetur. Beatae dolore dolorem eius in, ipsa iure nesciunt
                                    obcaecati recusandae repudiandae soluta, sunt.
                                </Typography>
                                <Button variant="contained" color="secondary">
                                    Learn more
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </>
    )
}
export default Hero;