/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { Card, CardImg } from "reactstrap";
import "./styles.css";

export default ({
  title,
  img,
  link = "https://www.nytimes.com/section/education",
}) => {
  console.log(title, img);
  return (
    <Card className="cardDash">
      <h3 className="my-2">{title}</h3>
      <CardImg top width="100%" className="p-2" src={img} alt={title} />
      <a
        className="text-center p-3"
        href={`${link}`}
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
      >
        {title}
      </a>
    </Card>
  );
};
