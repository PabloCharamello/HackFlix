import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { palette } from "@mui/system";
import "./Movie-modal.css";
import HackVideo from "../video/hackVideo.mp4";

const style = {
  
  boxShadow: 2,
  borderRadius: "15px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "warning.main",
  border: "2px solid #131B1B",
  boxShadow: 24,
  p: 4,
};

export default function MovieModal({ open, movie, handleClose }) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {movie.title}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {movie.overview}
            </Typography>
            <Typography id="transition-modal-date" variant="h6" component="h2">
              Date:{movie.release_date}
            </Typography>
            <video className="modal-video" autoPlay loop muted>
              <source src={HackVideo} type="video/mp4" />
            </video>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
