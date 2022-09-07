import {
  Button,
  Dialog,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
const KindlePopup = () => {
  const [kindleOpen, setKindleOpen] = useState(false);
  const [email, setEmail] = useState<string>("");

  const handleEmail = () => {
    setEmail("");
  };
  const handleClose = () => {
    //close
  };
  const handleContinue = () => {
    //continue reading
  };

  return (
    <div>
      <Dialog open={false}>
        {!kindleOpen && (
          <Grid>
            <Grid item>
              <IconButton onClick={handleClose} />
            </Grid>
            <Grid item>
              <Typography></Typography>
            </Grid>
            <Grid item>
              <TextField label="Email" value={email} />
            </Grid>
            <Grid item>
              <Button onClick={handleEmail}>Add Email</Button>
            </Grid>
            <Grid item>
              <Button>Need help?</Button>
            </Grid>
          </Grid>
        )}
        {kindleOpen && (
          <Grid>
            <Grid item>
              <Typography></Typography>
            </Grid>
            <Grid item>
              <Button onClick={handleContinue}>Continue Reading</Button>
            </Grid>
          </Grid>
        )}
      </Dialog>
    </div>
  );
};
export default KindlePopup;
