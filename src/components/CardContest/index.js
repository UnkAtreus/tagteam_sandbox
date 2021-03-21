import React from "react";
import { NavLink } from "react-router-dom";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import { CardContestStyle } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";

export const CardContest = ({
  className,
  pic,
  title,
  review,
  description,
  star = 0,
  address,
  startDate,
  endDate,
  certificate,
  member,
  price,
  userView,
  tag,
  dueDate,
}) => {
  return (
    <CardContestStyle className={ClassNames("card", className)}>
      <div className="card-row">
        <div className="card-column">
          <div className="card-header title">{title}</div>
          <div className="card-row">
            <div
              className="card-pic"
              style={{ backgroundImage: `url(${pic})` }}
            />
            <div className="card-column contest">
              <div className="card-label description">{description}</div>
              <div className="card-star">
                {Array.from(Array(star), (e, index) => {
                  return (
                    <FontAwesomeIcon
                      key={index}
                      color="#FE8F35"
                      icon={faStar}
                    />
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
              <div className="card-row">
                {Array.from(tag, (e, index) => {
                  return (
                    <div key={index} className="card-tag">
                      #{e}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="line-verticle"></div>

        <div className="card-column detail-container">
          <div className="card-row header">
            <div className="card-label address">{address}</div>
            <div className="card-icon">
              <FontAwesomeIcon color="#31384B" icon={faBookmark} />
            </div>
          </div>
          <div className="card-row">
            <div className="card-column detail">
              <div className="card-label-detail">เริ่ม : {startDate}</div>
              <div className="card-label-detail">
                เกียรติบัตร : {certificate ? "มี" : "ไม่มี"}
              </div>
              <div className="card-label-detail">รางวัล : {price} บาท</div>
            </div>
            <div className="card-column detail">
              <div className="card-label-detail">หมดเขต : {endDate}</div>
              <div className="card-label-detail">จำนวนสมาชิก : {member} คน</div>
              <div className="card-label-detail">
                ผู้เข้าชม : {userView} ครั้ง
              </div>
            </div>
          </div>
          {dueDate ? (
            <div className="card-row row-btn">
              <NavLink to="/join">
                <div className="btn-apply">Apply</div>
              </NavLink>
              <NavLink to="/join">
                <div className="btn-tagteam">Tagteam</div>
              </NavLink>
            </div>
          ) : (
            <div className="card-row row-btn">
              <div className="btn-close">Close</div>
            </div>
          )}
        </div>
      </div>
    </CardContestStyle>
  );
};
