import React from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import { CardCourseStyle } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const CardCourse = ({
  className,
  pic,
  title,
  name,
  review,
  hour,
  price,
  star = 0,
}) => {
  return (
    <CardCourseStyle className={ClassNames("card", className)}>
      <div
        className="card-pic"
        style={{ backgroundImage: `url(${pic})` }}
      ></div>
      <div className="card-content-container">
        <div className="card-header title">{title}</div>
        <div className="card-row">
          <div className="card-column">
            <div className="card-label name">ชื่อผู้สอน </div>
            <div className="card-label hour">จำนวนชั่วโมง</div>
            <div className="card-label price">ราคา</div>
          </div>
          <div className="card-column right">
            <div className="card-label name">{name}</div>
            <div className="card-label hour">{hour} ชั่วโมง</div>
            <div className="card-label price">{price} บาท</div>
          </div>
        </div>

        <div className="card-star">
          {Array.from(Array(star), (e, index) => {
            return (
              <FontAwesomeIcon key={index} color="#FCEC5F" icon={faStar} />
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
    </CardCourseStyle>
  );
};
