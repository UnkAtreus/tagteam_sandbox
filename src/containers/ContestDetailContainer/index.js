import * as React from "react";
import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom'
import { ContestStyled, CardContestStyled } from "./styled";
import { Container, CardContest, CardContestDetail } from "../../components";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHandshake,
  faStore,
  faCommentDots,
  faBell,
  faSearch,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faBloggerB } from "@fortawesome/free-brands-svg-icons";
import { Pagination } from 'antd';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronRight}
        style={{
          fontSize: "16px",
          color: "#31384B",
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FontAwesomeIcon
        icon={faChevronLeft}
        style={{ fontSize: "16px", color: "#31384B" }}
      />
    </div>
  );
}

const ContestDetailContainer = () => {

  const ContentProps = [
    {
      id: "1",
      pic: "images/contest_banner_1.png",
      title: "Digital innovation sandbox ",
      description: "“ยิ่งล้ม ยิ่งได้ประสบการณ์ จะดีกว่าไหม ถ้าเราล้มลงบนทราย”รับสมัครนักศึกษาที่มีไอเดียมาร่วมสร้างนวัตกรรมดิจิทัล ให้ใช้ได้จริง",
    }

  ]


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  //get current Posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ContentProps.slice(indexOfFirstPost, indexOfLastPost);

  // when user clicks on number this function will execute

  const paginate = (number) => {
    setCurrentPage(number);
  };


  return (
    <React.Fragment>
      <ContestStyled>
        {/* <div className="filter">
          <div className="filter-pic"></div>
          <div className="filter-row">
            <div className="filter-content">
            </div>
            <div className="filter-content"></div>
            <div className="filter-content"></div>
            <div className="filter-content"></div>
            <div className="filter-content"></div>
            <div className="filter-content"></div>
            <div className="filter-content">
              <div className="btn-serch">SEARCH</div>
            </div>
          </div>
        </div> */}

        <div className="nav">
          <div className="nav-container">
            <div className="nav-pic">
              <img src="images/tagteam_logo_1024_white.png" alt="" />
              <div className="search-bar">
                <input
                  type="text"
                  className="search-text"
                  placeholder="Search project name . . ."
                />
                <div className="nav-icon circle">
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ fontSize: "16px", color: "#31384B" }}
                  />
                </div>
              </div>
            </div>

            <div className="nav-row sub-menu">
              <div className="nav-icon circle">
                <FontAwesomeIcon
                  icon={faCommentDots}
                  style={{ fontSize: "16px", color: "#31384B" }}
                />
              </div>
              <div className="nav-icon circle">
                <FontAwesomeIcon
                  icon={faBell}
                  style={{ fontSize: "16px", color: "#31384B" }}
                />
              </div>
              <div className="nav-icon circle"></div>
            </div>
          </div>
        </div>
        <div className="nav-row menu">
          <div className="nav-icon">
            <NavLink to="/" >
              <FontAwesomeIcon icon={faHome} style={{ fontSize: "32px" }} />
            </NavLink>
          </div>

          <div className="nav-icon">
            <NavLink to="/contest" >
              <FontAwesomeIcon icon={faHandshake} style={{ fontSize: "32px" }} />
            </NavLink>
          </div>
          <div className="nav-icon">
            <NavLink to="/" >
              <FontAwesomeIcon icon={faStore} style={{ fontSize: "32px" }} />
            </NavLink>
          </div>
          <div className="nav-icon">
            <NavLink to="/" >
              <FontAwesomeIcon icon={faBloggerB} style={{ fontSize: "32px" }} />
            </NavLink>
          </div>
        </div>
        <Container>
          <div className="banner-container">
            <Slider
              infinite={true}
              speed={500}
              slidesToShow={3}
              nextArrow={<SampleNextArrow />}
              prevArrow={<SamplePrevArrow />}
              centerPaddin={"60px"}
            >
              <div className="banner-pic pic1"></div>
              <div className="banner-pic pic2"></div>
              <div className="banner-pic pic3"></div>
              <div className="banner-pic pic4"></div>
              <div className="banner-pic pic5"></div>
            </Slider>
          </div>
          <div className="potlet">
            <div className="potlet-row">
              <CardContestStyled>
                {currentPosts.map((data) => {
                  return (
                    <CardContestDetail
                      key={data.id}
                      className={"contest-card"}
                      pic={data.pic}
                      title={data.title}
                      description={data.description}
                    />
                  );
                })}

                {/* <Pagination className="Paginate" defaultCurrent={1} onChange={paginate} total={ContentProps.length} defaultPageSize={postsPerPage} /> */}
              </CardContestStyled>
              <div className="potlet-column">
                <img src="images/banner_6.png" alt="" />
                <img src="images/banner_7.png" alt="" />
              </div>
            </div>

          </div>
        </Container>
      </ContestStyled>
    </React.Fragment >
  );
};

export default ContestDetailContainer;