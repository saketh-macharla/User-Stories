import React from "react";
interface ThumbnailProps {
  imageSrc: string;
}
const BookDetailThumbnail = (props: ThumbnailProps) => {
  return <img src={props.imageSrc} alt="" />;
};

export default BookDetailThumbnail;
