import React, {useCallback} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    border: "none",
    backgroundColor: "white",
    outline: "none",
    padding: "35px 45px",
    borderRadius: "10px",
  },
  '@media (max-width: 425px)': {
    paper: {
      display: 'flex',
      width: '100vw',
      height: '100vh',
      position: 'relative',
      flexDirection: 'column',
      alignItems: 'center',
    }
  }
}));
// компонент правил
const Rules: React.FC = (): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = useCallback(():void => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(():void => {
    setOpen(false);
  }, []);

  return (
    <div className='rules__btn-container'>
      <button type="button" className="rules__btn" onClick={handleOpen}>
        rules
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="rules__top">
              <h4 id="transition-modal-title" className='rules__title'>rules</h4>
              <img
                src="../../images/icon-close.svg"
                alt=""
                className="rules__close-img"
                onClick={handleClose}
              />
            </div>
            <img
              src="../../images/image-rules.svg"
              alt=""
              className="rules__img"
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default Rules;
