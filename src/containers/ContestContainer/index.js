import * as React from "react";
import { useState, useEffect } from "react";
import { ContestStyled, CardContestStyled } from "./styled";
import { Container, CardContest } from "../../components";
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
import { transform } from "lodash";
import { CardContestStyle } from "../../components/CardContest/styled";
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

const ContestContainer = () => {
  const posts = [
    { id: "1", name: "user1" },
    { id: "2", name: "user2" },
    { id: "3", name: "user3" },
    { id: "4", name: "user4" },
    { id: "5", name: "user5" },
    { id: "6", name: "user6" },
  ]

  const ContentProps = [
    {
      id: "1",
      pic: "images/contest_banner_1.png",
      title: "Digital innovation sandbox ",
      description: "“ยิ่งล้ม ยิ่งได้ประสบการณ์ จะดีกว่าไหม ถ้าเราล้มลงบนทราย”รับสมัครนักศึกษาที่มีไอเดียมาร่วมสร้างนวัตกรรมดิจิทัล ให้ใช้ได้จริง",
      review: "2",
      star: 5,
      address: "BangKok, KMUTT",
      startDate: "11 ม.ค. 64",
      endDate: "10 ก.พ. 64",
      certificate: true,
      member: "2 - 5",
      price: "20,000",
      userView: "1,251",
      tag: ["นวัตกรรม", "ปริญญาตรี", "contest"],
      dueDate: true,
    },
    {
      id: "2",
      pic: "images/contest_banner_2.png",
      title: "Travel Tech Startup Season 2",
      description: "เตรียมไอเดียให้พร้อม ฟอร์มทีมมาให้ครบ แล้วพบกับการประกวด เฟ้นหาสุดยอดนวัตกรรมด้านการท่องเที่ยว",
      review: "5",
      star: 4,
      address: "การท่องเที่ยวแห่งประเทศไทย",
      startDate: "1 ก.ค. 63",
      endDate: "30 ก.ค. 63",
      certificate: false,
      member: "3 - 5",
      price: "1,000,000",
      userView: "825",
      tag: ["นวัตกรรม", "ปริญญาตรี", "contest"],
      dueDate: true,
    },
    {
      id: "3",
      pic: "images/contest_banner_3.png",
      title: "Triton",
      description: "โอกาสมาแล้ววว สำหรับน้องๆ ที่สนใจด้านธุรกิจและมีไอเดียอยากลองทำธุรกิจเป็นของตัวเอง ถึงเวลาจะได้มาปล่อยของผ่านการ “ลงมือทำจริง” ",
      review: "20",
      star: 5,
      address: "BangKok, BASE Playhouse ",
      startDate: "5 ม.ค. 64",
      endDate: "5 ก.พ. 64",
      certificate: true,
      member: "3 - 5",
      price: "-",
      userView: "3,054",
      tag: ["นวัตกรรม", "ปริญญาตรี"],
      dueDate: true,
    },
    {
      id: "4",
      pic: "images/contest_banner_4.png",
      title: "Business Triathlon 2021",
      description: "ARE YOU READY FOR 2021 CHALLENGE?A year of COVID has past,but don’t let your future be ruined!",
      review: "10",
      star: 4,
      address: "การท่องเที่ยวแห่งประเทศไทย",
      startDate: "5 ม.ค. 64",
      endDate: "16 ก.พ. 64",
      certificate: false,
      member: "2 - 3",
      price: "390,000",
      userView: "565",
      tag: ["ธุรกิจ", "ปริญญาตรี", "contest"],
      dueDate: false,
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
            <FontAwesomeIcon icon={faHome} style={{ fontSize: "32px" }} />
          </div>
          <div className="nav-icon">
            <FontAwesomeIcon icon={faHandshake} style={{ fontSize: "32px" }} />
          </div>
          <div className="nav-icon">
            <FontAwesomeIcon icon={faStore} style={{ fontSize: "32px" }} />
          </div>
          <div className="nav-icon">
            <FontAwesomeIcon icon={faBloggerB} style={{ fontSize: "32px" }} />
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
                    <CardContest
                      key={data.id}
                      className={"contest-card"}
                      pic={data.pic}
                      title={data.title}
                      description={data.description}
                      review={data.review}
                      star={data.star}
                      address={data.address}
                      startDate={data.startDate}
                      endDate={data.endDate}
                      certificate={data.certificate}
                      member={data.member}
                      price={data.price}
                      userView={data.userView}
                      tag={data.tag}
                      dueDate={data.dueDate}
                    />
                  );
                })}
                {/* <CardContest
                  className={"test"}
                  pic={"images/contest_banner_1.png"}
                  title={"Digital innovation sandbox "}
                  description={
                    "“ยิ่งล้ม ยิ่งได้ประสบการณ์ จะดีกว่าไหม ถ้าเราล้มลงบนทราย”รับสมัครนักศึกษาที่มีไอเดียมาร่วมสร้างนวัตกรรมดิจิทัล ให้ใช้ได้จริง"
                  }
                  review={"2"}
                  star={5}
                  address={"BangKok, KMUTT"}
                  startDate={"11 ม.ค. 64"}
                  endDate={"10 ก.พ. 64"}
                  certificate={true}
                  member={"2 - 5"}
                  price={"20,000"}
                  userView={"1,251"}
                  tag={["นวัตกรรม", "ปริญญาตรี", "contest"]}
                  dueDate={true}
                />
                <CardContest
                  className={"test"}
                  pic={"images/contest_banner_2.png"}
                  title={"Travel Tech Startup Season 2"}
                  description={
                    "เตรียมไอเดียให้พร้อม ฟอร์มทีมมาให้ครบ แล้วพบกับการประกวด เฟ้นหาสุดยอดนวัตกรรมด้านการท่องเที่ยว"
                  }
                  review={"5"}
                  star={4}
                  address={"การท่องเที่ยวแห่งประเทศไทย"}
                  startDate={"1 ก.ค. 63"}
                  endDate={"30 ก.ค. 63"}
                  certificate={false}
                  member={"3 - 5"}
                  price={"1,000,000"}
                  userView={"825"}
                  tag={["นวัตกรรม", "ปริญญาตรี", "contest"]}
                  dueDate={true}
                />
                <CardContest
                  className={"test"}
                  pic={"images/contest_banner_3.png"}
                  title={"Triton"}
                  description={
                    "โอกาสมาแล้ววว สำหรับน้องๆ ที่สนใจด้านธุรกิจและมีไอเดียอยากลองทำธุรกิจเป็นของตัวเอง ถึงเวลาจะได้มาปล่อยของผ่านการ “ลงมือทำจริง” "
                  }
                  review={"20"}
                  star={5}
                  address={"BangKok, BASE Playhouse "}
                  startDate={"5 ม.ค. 64"}
                  endDate={"5 ก.พ. 64"}
                  certificate={true}
                  member={"3 - 5"}
                  price={"-"}
                  userView={"3,054"}
                  tag={["นวัตกรรม", "ปริญญาตรี"]}
                  dueDate={true}
                />
                <CardContest
                  className={"test"}
                  pic={"images/contest_banner_4.png"}
                  title={"Business Triathlon 2021"}
                  description={
                    "ARE YOU READY FOR 2021 CHALLENGE?A year of COVID has past,but don’t let your future be ruined!"
                  }
                  review={"10"}
                  star={4}
                  address={"การท่องเที่ยวแห่งประเทศไทย"}
                  startDate={"5 ม.ค. 64"}
                  endDate={"16 ก.พ. 64"}
                  certificate={false}
                  member={"2 - 3"}
                  price={"390,000"}
                  userView={"565"}
                  tag={["ธุรกิจ", "ปริญญาตรี", "contest"]}
                  dueDate={false}
                /> */}
                <Pagination className="Paginate" defaultCurrent={1} onChange={paginate} total={posts.length} defaultPageSize={postsPerPage} />
              </CardContestStyled>
              <div className="potlet-column">
                <img src="images/banner_6.png" alt="" />
                <img src="images/banner_7.png" alt="" />
              </div>
            </div>

          </div>
        </Container>
      </ContestStyled>
    </React.Fragment>
  );
};

export default ContestContainer;