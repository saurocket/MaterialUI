import React from "react";
import {Container, Typography, Button, Grid, BottomNavigation, BottomNavigationAction} from "@material-ui/core/";
import {makeStyles} from "@material-ui/core";

import FolderIcon from '@material-ui/icons/Folder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import RestoreIcon from '@material-ui/icons/Restore';


const useStyles = makeStyles(theme => ({
        footerContainer: {
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        }
    })
)

const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents");

    const handleChange =  (e, newValue) => {
        setValue(newValue);
    }


    return (
        <div className={classes.footerContainer}>
            <Typography variant="h5" align="center" gutterButton> Make your Business better</Typography>
            <BottomNavigation value={value}
                              onChange={handleChange}
                              className={classes.root}
            >
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon/>}
                />

                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon/>}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon/>}
                />

                <BottomNavigationAction
                    label="Folder"
                    value="folder"
                    icon={<FolderIcon/>}
                />

            </BottomNavigation>
            <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
                SPI React js Material Ui site Made By Saurocket))
            </Typography>
        </div>
    )
}
export default Footer;