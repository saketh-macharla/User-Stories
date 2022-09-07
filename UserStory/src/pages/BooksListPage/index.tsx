import { Grid } from "@mui/material";
import React, { useState } from "react";
import BookDetailThumbnail from "../../components/atoms/BookDetailThumbnail";
import BookCard from "../../components/molecules/BookCard";

const BookListPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Grid>
      <Grid item>
        <BookDetailThumbnail imageSrc={""} />
        <BookCard name="" author="" time= "" />
      </Grid>
      <Grid item>
        <BookDetailThumbnail imageSrc={""} />
        <BookCard name="" author="" time= "" />
      </Grid>
      <Grid item>
        <BookDetailThumbnail imageSrc={""} />
        <BookCard name="" author="" time= "" />
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default BookListPage;
