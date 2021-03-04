import React, {useState} from "react";
import {AppBar, Container,Toolbar, IconButton, Typography,Button, Box}  from "@material-ui/core/";
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from "@material-ui/core/styles";
import ModalPage from "./ModalPage";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1),

    },
    title:{
        flexGrow: 1
    }

}));
const Header = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        open ? setOpen(false) : setOpen (true)
    }

    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <IconButton edge="start"
                                color="inherit"
                                aria-label="menu"
                                className={classes.menuButton}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Saurocket</Typography>
                    <Box mr={3} >
                        <Button onClick={handleClick} color="inherit" variant="outlined">Log In</Button>
                    </Box>
                    <Button color="secondary" variant="contained">Sign Up</Button>
                </Toolbar>

                <ModalPage open={open} handleClick={handleClick}/>
            </Container>
        </AppBar>
    )
}

export default Header;
