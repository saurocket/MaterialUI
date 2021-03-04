import {makeStyles} from "@material-ui/core";
import {Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button} from "@material-ui/core";
import DialogContentText from "@material-ui/core/DialogContentText";

const useStyle = makeStyles(theme=> ({


}));

const ModalPage = ({handleClick, open}) => {

    const classes = useStyle();
    return (
        <div>
            <Dialog open={open} onClose={handleClick} area-labelledby="form-dialog-tittle">
                <DialogTitle id="DialogTitle">LogIn</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Log in to see videos
                    </DialogContentText>
                    <TextField autoFocus
                        margin="dense"
                        id="name"
                        label="Email Adress"
                        type="email"
                        fullWidth
                    />
                    <TextField autoFocus
                               margin="dense"
                               id="pass"
                               label="Password"
                               type="password"
                               fullWidth
                    />

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClick} color="primary">
                        Cancel
                    </Button>

                    <Button onClick={handleClick}>
                        LogIn
                    </Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default ModalPage