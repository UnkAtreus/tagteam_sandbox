import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { HomeStyled, TeamStyled, CourseStyled, BlogStyled } from "./styled";
import { Container, CardTeam, CardCourse, CardBlog } from "../../components";
import Slider from "react-slick";

const HomeContainer = () => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [navContent, setnavContent] = useState(["Join", "Skill Up", "Blog"]);

  return (
    <React.Fragment>
      <HomeStyled>
        <div className="potlet-bg">
          <Container>
            <div className="nav">
              <div className="nav-logo"></div>
              <div className="nav-row">
                <div className="nav-content"><Link to="/">Home</Link></div>
                <div className="nav-content">
                  <Link to="/contest">Join</Link>
                </div>
                <div className="nav-content"><Link to="/">Skill Up</Link></div>
                <div className="nav-content"><Link to="/">Blog</Link></div>
              </div>
            </div>

            <div className="potlet-row">
              <div className="potlet-column">
                <div className="potlet-content">
                  <div className="label first">เบื่อมั้ยกับการไล่หา</div>
                  <div className="label second">เพื่อนร่วมทีม</div>
                  <div className="label thrid">งั้นก็มาร่วมกับเราสิ!</div>
                </div>
                <div className="login-btn-container">
                  <button className="btn-login">
                    <Link to="/">เข้าสู่ระบบ</Link></button>
                </div>
              </div>
              <div className="potlet-logo"></div>
            </div>

            <div className="slider-container">
              <div className="slider-header">บริการหลักของเรา</div>
              <div className="slider-row">
                <div className="slider-column">
                  {/* <h4>First Slider</h4> */}
                  <Slider
                    asNavFor={nav2}
                    ref={(slider) => setNav1(slider)}
                    arrows={false}
                    fade={true}
                  >
                    <div className="slider-left">
                      <div className="slider-content-header">
                        ออกตามหา <br />
                        เพื่อนร่วมทีมของคุณ!
                      </div>
                      <div className="slider-label">
                        ตามหาเพื่อนร่วมทีมผ่านเรา
                        แล้วร่วมกันบุกตะลุยไปในสังเวียนการแข่งขัน Start up
                      </div>
                      <div className="silder-btn">
                        <Link to="/contest">
                          <div className="btn-info">
                            ดูรายละเอียด
                        </div>
                        </Link>
                      </div>
                    </div>
                    <div className="slider-left">
                      <div className="slider-content-header">
                        การเรียนรู้คือ
                        <br />
                        พลังที่ไม่มีสิ้นสุด!
                      </div>
                      <div className="slider-label">
                        เพิ่มทักษะของคุณเองผ่านคอร์สออนไลน์
                        โดยติวเตอร์ชื่อดังบนแพลตฟอร์มของเรา
                      </div>
                      <div className="silder-btn">
                        <Link to="/contest">
                          <div className="btn-info">
                            ดูรายละเอียด
                        </div>
                        </Link>
                      </div>
                    </div>
                    <div className="slider-left">
                      <div className="slider-content-header">
                        เรียนรู้ผ่าน
                        <br />
                        มุมมองของผู้อื่น
                      </div>
                      <div className="slider-label">
                        พื้นที่แห่งการแชร์ประสบการ์ณและความรู้
                        ลงบนบล็อกของพวกเรา
                      </div>
                      <div className="silder-btn">
                        <Link to="/contest">
                          <div className="btn-info">
                            ดูรายละเอียด
                        </div>
                        </Link>
                      </div>
                    </div>
                  </Slider>
                </div>
                {/* <h4>Second Slider</h4> */}
                <div className="slider-column">
                  <Slider
                    dots={true}
                    asNavFor={nav1}
                    ref={(slider) => setNav2(slider)}
                    swipeToSlide={true}
                    autoplay={true}
                    autoplaySpeed={8000}
                    arrows={false}
                    appendDots={(dots) => (
                      <div
                        style={{
                          bottom: "100%",
                          width: "auto",
                          left: "0",
                        }}
                      >
                        <ul style={{ margin: "0px" }}> {dots} </ul>
                      </div>
                    )}
                    customPaging={(i) => (
                      <div
                        style={{
                          width: "auto",
                          color: "#FC5336",
                          fontSize: "32px",
                          fontWeight: "bold",
                        }}
                      >
                        {navContent[i]}
                      </div>
                    )}
                  >
                    <div className="slider-pic">
                      <img src="images/nav_pic_1.png" alt="" />
                    </div>
                    <div className="slider-pic">
                      <img src="images/nav_pic_2.png" alt="" />
                    </div>
                    <div className="slider-pic">
                      <img src="images/nav_pic_3.png" alt="" />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container className="Team">
          <div className="potlet-row header">
            <div className="potlet-header">พวกเขาต้องการคุณ!</div>
            <div className="potlet-link"><Link to="/">เข้าสู่ระบบ</Link></div>
          </div>
          <TeamStyled>
            <div className="team-card-container">
              {/* <CardTeam
                className={"test"}
                pic={"images/card_team_1.png"}
                name={"แอมสวยมาก"}
                address={"KMUTT"}
                roleName={"PM"}
                status={"หาทีม"}
                statusCount={1}
              /> */}
              <CardTeam
                className={"test"}
                pic={"images/card_team_2.png"}
                name={"แอมสวยมาก"}
                address={"KMUTT"}
                roleName={"PM"}
                status={"หาทีม"}
                statusCount={1}
                inviteButton={false}
              />
              <CardTeam
                className={"test"}
                pic={"images/card_team_3.png"}
                name={"แอมสวยมาก"}
                address={"KMUTT"}
                roleName={"PM"}
                status={"หาทีม"}
                statusCount={1}
                inviteButton={false}
              />
              <CardTeam
                className={"test"}
                pic={"images/card_team_4.png"}
                name={"แอมสวยมาก"}
                address={"KMUTT"}
                roleName={"PM"}
                status={"หาทีม"}
                statusCount={1}
                inviteButton={false}
              />
            </div>
          </TeamStyled>
          <div className="potlet-row header">
            <div className="potlet-header">คอร์สออนไลน์</div>
            <div className="potlet-link"><Link to="/">ดูคอร์สออนไลน์ทั้งหมด</Link></div>
          </div>
          <CourseStyled>
            <CardCourse
              className={"test"}
              pic={"images/card_course_1.png"}
              title={"Exploratory Data Analysis with Google Sheets"}
              name={"ดร. วิโรจน์ จิรพัฒนกุล"}
              review={"6"}
              hour={"8 - 10"}
              price={"2,990"}
              star={3}
            />
            <CardCourse
              className={"test"}
              pic={"images/card_course_2.png"}
              title={"Essential CSS for Web Developers "}
              name={"ทัศน์พล รัชตะสัมฤทธิ์"}
              review={"10"}
              hour={"8 - 10"}
              price={"2,990"}
              star={4}
            />
            <CardCourse
              className={"test"}
              pic={"images/card_course_3.png"}
              title={"Power BI Essentials"}
              name={"ระพีพรรณ เหล่าจำรูญวนพงศ"}
              review={"6"}
              hour={"6 - 8"}
              price={"1,990"}
              star={5}
            />
          </CourseStyled>
          <div className="potlet-row header">
            <div className="potlet-header">บล็อกมาแรง</div>
            <div className="potlet-link"><Link to="/">ดูบล็อกทั้งหมด</Link></div>
          </div>
          <BlogStyled>
            <CardBlog
              className={"test"}
              pic={"images/card_blog_1.png"}
              title={"Review Hackathon 2020"}
              name={"Nomad"}
              description={"ผมอยากแบ่งปันประสบการณ์ที่ได้ไปร่วมกิจกรรมนี้ครับ"}
              review={"20"}
              star={5}
            />
            <CardBlog
              className={"test"}
              pic={"images/card_blog_2.png"}
              title={"ถอดบทเรียนจากซีรีย์ Start up"}
              name={"Unknow"}
              description={
                "ถอดบทเรียนที่อยากทำ start up ต้องรู้ จากซีรีย์ start up จากเกาหลี"
              }
              review={"10"}
              star={4}
            />
            <CardBlog
              className={"test"}
              pic={"images/card_blog_3.png"}
              title={"Review Hackathon 2018"}
              name={"จุทามาศ แก้วเมขลา"}
              description={
                "  วันนี้จะมารีวิวความรู้และความรู้สึกจากการร่วมกิจกรรม hackathon นะคะ -w-"
              }
              review={"5"}
              star={4}
            />
            <CardBlog
              className={"test"}
              pic={"images/card_blog_4.png"}
              title={"การเขียนบทความวิจัยทางการพยาบาล"}
              name={"ปรินทร์ จันทร์ทองสุข"}
              description={
                "การเขียนบทความวิจัยทางการพยาบาล เพื่อการเผยแพร่ในระดับนานาชาติ"
              }
              review={"2"}
              star={5}
            />
          </BlogStyled>
          {/* <BlogStyled>
            <CardBlog
              className={"test"}
              pic={"images/card_blog_3.png"}
              title={"Review Hackathon 2018"}
              name={"จุทามาศ แก้วเมขลา"}
              description={
                "  วันนี้จะมารีวิวความรู้และความรู้สึกจากการร่วมกิจกรรม hackathon นะคะ -w-"
              }
              review={"5"}
              star={4}
            />
            <div className="line-vertical" />
            <CardBlog
              className={"test"}
              pic={"images/card_blog_4.png"}
              title={"การเขียนบทความวิจัยทางการพยาบาล"}
              name={"ปรินทร์ จันทร์ทองสุข"}
              description={
                "การเขียนบทความวิจัยทางการพยาบาล เพื่อการเผยแพร่ในระดับนานาชาติ"
              }
              review={"2"}
              star={5}
            />
          </BlogStyled> */}
        </Container>
      </HomeStyled>
    </React.Fragment >
  );
};

export default HomeContainer;
