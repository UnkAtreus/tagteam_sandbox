import React from "react";
import ClassNames from "classnames";
import PropTypes from "prop-types";
import { CardContestDetailStyle, CardTeamStyle } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardTeam } from "components";
import {
  faStar,
  faBookmark,
  faShare,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const CardContestDetail = ({ className, pic, title, description }) => {
  return (
    <CardContestDetailStyle className={ClassNames("card", className)}>
      <div className="card-row">
        <div className="card-column">
          <div className="card-header title">{title}</div>
          <div className="card-row">
            <div className="card-column">
              <div
                className="card-pic"
                style={{ backgroundImage: `url(${pic})` }}
              />
              <div className="card-row utilies">
                <div className="card-row like">
                  <FontAwesomeIcon color="#EF0B35" icon={faHeart} />
                  <div className="card-label like">+1k</div>
                </div>

                <FontAwesomeIcon
                  color="#31384B"
                  icon={faShare}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="card-column contest">
              <div className="card-label description">{description}</div>
              <div className="card-row row-btn">
                <div className="btn-apply">Applied</div>
              </div>
            </div>
          </div>
        </div>
        <div className="line-verticle"></div>

        <div className="card-column detail-container">
          <div className="card-row header">
            <div className="card-label address">comment</div>
            <div className="card-icon">
              <FontAwesomeIcon color="#31384B" icon={faBookmark} />
            </div>
          </div>
          <div className="card-column">
            <div className="card-post">
              <textarea
                type="text"
                className="post-text"
                placeholder="write your comment here . . ."
              />
            </div>
            <div className="card-comment-container">
              <div className="card-comment">
                <div className="card-label name">Prarin Chan.</div>
                <div className="card-label comment">good contest</div>
              </div>
              <div className="card-comment">
                <div className="card-label name">Kittipat D.</div>
                <div className="card-label comment">interesting!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="line-horizontal" />

      <div className="card-column">
        <div className="card-row tagteam">
          <div className="card-header tagteam">TAGTEAM</div>
          <div className="search-bar">
            <input
              type="text"
              className="search-text"
              placeholder="Search name . . ."
            />
            <div className="search-icon">
              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: "16px", color: "#31384B" }}
              />
            </div>
          </div>
        </div>
        <CardTeamStyle>
          <div className="card-team-container">
            <CardTeam
              className={"card-team-style"}
              pic={"images/card_team_2.png"}
              name={"แอมสวยมาก"}
              address={"KMUTT"}
              roleName={"PM"}
              status={"หาทีม"}
              statusCount={1}
              inviteButton={true}
              buttonStatus={"attend"}
            />
            <CardTeam
              className={"card-team-style"}
              pic={"images/card_team_3.png"}
              name={"สธร"}
              address={"KMUTT"}
              roleName={"Backend"}
              status={"หาทีม"}
              statusCount={1}
              inviteButton={true}
              buttonStatus={"invite"}
            />
            <CardTeam
              className={"card-team-style"}
              pic={"images/card_team_4.png"}
              name={"บอด"}
              address={"KMUTT"}
              roleName={"PM"}
              status={"หาคนร่วมทีม"}
              statusCount={3}
              inviteButton={true}
              buttonStatus={"invite"}
            />
          </div>
        </CardTeamStyle>
      </div>
    </CardContestDetailStyle>
  );
};
