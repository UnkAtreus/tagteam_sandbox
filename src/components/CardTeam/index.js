import React from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import { CardTeamStyle } from "./styled";

export const CardTeam = ({
  className,
  pic,
  name,
  address,
  roleName,
  status,
  statusCount,
  inviteButton = false,
  buttonStatus,
}) => {
  return (
    <CardTeamStyle className={ClassNames("card", className)}>
      <div
        className="card-pic"
        style={{ backgroundImage: `url(${pic})` }}
      ></div>
      <div className="card-content-container">
        <div className="card-row">
          <div className="card-profile">
            <div className="card-label name">{name}</div>
            <div className="card-label address">{address}</div>
            <div className="card-label role">{roleName}</div>
          </div>
          <div className="card-status-container">
            <div className="card-label status">{status}</div>
            <div className="card-label status-count">{statusCount} member</div>
            {inviteButton && buttonStatus === "invite" ? (
              <div className="btn-invite">invite</div>
            ) : (
              <div className="btn-attend">attend</div>
            )}
          </div>
        </div>
      </div>
    </CardTeamStyle>
  );
};
