import styled from "styled-components";
// import {
//   default as VARIABLES
// } from '../../themes/styles/variables'
import { default as TYPOGRAPHYS } from "../../themes/styles/variables/typographys";
// import {
//   default as MIXINS
// } from '../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const ContestStyled = styled.div`
  /* Parent styles
  ------------------------------- */
  font-family: ${TYPOGRAPHYS.FONT_FAMILIES.FIRST};
  background-color: #f4f8fb;

  /* Child element styles
  ------------------------------- */

  .nav {
    display: flex;
    height: 64px;
    background-color: #31384b;
    padding: 16px;
    margin-bottom: 16px;

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .search-bar {
        display: flex;
        align-items: center;
      }
      .nav-pic {
        display: flex;
        align-items: center;
        .search-text {
          width: 224px;
          border: 0;
          border-radius: 30px;
          height: 32px;
          padding: 8px 16px;
        }
        img {
          margin-right: 16px;
          height: 64px;
        }
      }
    }
  }

  .nav-row {
    display: flex;
    align-items: center;
  }
  .nav-icon {
    cursor: pointer;
    margin: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    &.circle {
      margin: 0 8px;
      width: 32px;
      height: 32px;
      background-color: #ffffff;
      border-radius: 50%;
    }
  }

  .nav-row.menu {
    position: absolute;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    align-items: center;
    height: 64px;
    background-color: #31384b;
    padding: 16px;
  }

  .banner-pic {
    width: 270px;
    height: 210px;
    
    /* background-color: #31384b; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;

    &.pic1 {
      background-image: url('images/banner_1.png');
    }
    &.pic2 {
      background-image: url('images/banner_2.png');
    }
    &.pic3 {
      background-image: url('images/banner_3.png');
    }
    &.pic4 {
      background-image: url('images/banner_4.png');
    }
    &.pic5 {
      background-image: url('images/banner_5.png');
    }
  }

  .banner-container {
    margin-bottom: 32px;
    .slick-prev, .slick-next {
      width: 0;
    }
    .slick-prev:before, .slick-next:before {
      width: 0;
      height: 0;
      font-size: 0;
    }
  }
  .Paginate {
    text-align: center;
  }

  .potlet .potlet-row {
    display: flex;
    justify-content: space-between;
  }

  .potlet-column {
  text-align: end;
  img{
    margin-bottom: 16px;
    width: 234px;
  }
}

  /* Modifiers
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`;

export const CardContestStyled = styled.div`
/* Parent styles
  ------------------------------- */


  /* Child element styles
  ------------------------------- */

 /* Modifiers
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`
