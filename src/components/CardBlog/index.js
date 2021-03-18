import React from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import { CardBlogStyle } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const CardBlog = ({
  className,
  pic,
  title,
  name,
  review,
  description,
  star = 0,
}) => {
  return (
    <CardBlogStyle className={ClassNames("card", className)}>
      <div className="card-header title">{title}</div>
      <div className="card-row">
        <div className="card-pic" style={{ backgroundImage: `url(${pic})` }} />
        <div className="card-column">
          <div className="card-label description">{description}</div>
          <div className="card-label name">โดย {" " + name} </div>
          <div className="card-star">
            {Array.from(Array(star), (e, index) => {
              return (
                <FontAwesomeIcon key={index} color="#FE8F35" icon={faStar} />
              );
            })}
            {Array.from(Array(5 - star), (e, index) => {
              return (
                <FontAwesomeIcon
                  key={index + star}
                  color="#BDBDBD"
                  icon={faStar}
                />
              );
            })}
            <div className="card-label review"> (+{review} review)</div>
          </div>
        </div>
      </div>
    </CardBlogStyle>
  );
};
