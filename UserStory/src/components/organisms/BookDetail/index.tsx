import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import BookDetailThumbnail from "../../atoms/BookDetailThumbnail";
import SecondaryTabs from "../../molecules/SecondaryTabs";
import KindlePopup from "../KindlePopup";

const BookDetail = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleAddToLibrary = () => {};
  const handleBuy = () => {};
  const handleSendToKindle = () => {
    dialogOpen ? setDialogOpen(false) : setDialogOpen(true);
  };
  return (
    <Grid>
      <Grid item>
        <Typography>Book Name</Typography>
        <Typography>Book Tag line</Typography>
        <Typography>Book Author</Typography>
        {/* icon label */}
        {/* Buttons in a grid */}
        <SecondaryTabs />
      </Grid>
      <Grid item>
        <BookDetailThumbnail imageSrc={""} />
      </Grid>
      <Grid item></Grid>
      {dialogOpen ? <KindlePopup /> : null}
    </Grid>
  );
};

export default BookDetail;
