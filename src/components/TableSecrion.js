
import React from "react";
import {Container,Typography, Button, Grid, Card, CardMedia, CardContent, CardActions} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core";
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
const useStyle = makeStyles((theme) => ({
    mainContent: {
        color: "red",
    },
    cardGrid: {
        marginTop: theme.spacing(4),
    },
    card:{

    },
    cardMedia:{
       paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1,
    },

}))

const cards = [1,2,3,4,5,6,7,8,9];

const TableSection = () => {
    const classes = useStyle();
    return (
        <div className={classes.mainContent}>
         <Container className={classes.cardGrid} maxWidth="md">
             <Grid container spacing={4}>
                 {cards.map(card => <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" gutterButton>
                                    You can send messages
                                </Typography>
                                <Typography>
                                    Our contact details will be below
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="primary">Edit</Button>
                                <AccessAlarm/>
                                <ThreeDRotation/>
                            </CardActions>
                        </Card>
                 </Grid>)}
             </Grid>
         </Container>
        </div>
    )
}
export default TableSection;