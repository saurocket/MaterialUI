import React from "react";
import {Container,Typography, Button, Grid} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    mainContent: {
        color: "red"
    },
    mainDiscription:{
        marginTop : theme.spacing(3),
    },
    mainButtons:{

    }

}));

const Content = () => {
    const classes = useStyle();
    return (
        <div className={classes.mainContent}>
            <Container maxWidth="md">
                <Typography variant="h2" align="center" color="textPrimary" gutterButton>
                    Developing a single page application using MERN
                </Typography>
                <Typography className={classes.mainDiscription} variant="h5" align="center" color="textSecondary" paragraph>

                    MERN Stack: MERN Stack is a Javascript Stack that is used for easier and faster deployment of
                    full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React
                    and Node.js. It is designed to make the development process smoother and easier.
                </Typography>
                <div className={classes.mainButtons}>
                    <Grid container spacing={5}  justify="center">
                        <Grid  item>
                            <Button variant="contained" color="primary">Start Now</Button>
                        </Grid>
                        <Grid  item>
                            <Button variant="outlined">Learn more</Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}
export default Content;