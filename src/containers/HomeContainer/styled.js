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
export const HomeStyled = styled.div`
  /* Parent styles
  ------------------------------- */
  font-family: ${TYPOGRAPHYS.FONT_FAMILIES.FIRST};
  background-color: #f4f8fb;

  /* Child element styles
  ------------------------------- */

  .potlet-bg {
    display: flex;
    background-color: #fafafa;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("images/canvas_bg_2008_new.jpg");
    height: 1500px;
    width: 100%;
    margin: auto;
  }

  .nav {
    display: flex;
    height: fit-content;
    margin-top: 24px;
  }

  .nav-logo {
    background: url("images/tagteam_logo_1024_white.png"), #31384b;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }

  .nav-row {
    display: flex;
    margin-left: 16px;
    align-items: center;
  }

  .nav-content {
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.MD};
    font-weight: bold;
    margin: 0 16px;
    color: #ffffff;
    cursor: pointer;
    font-family: ${TYPOGRAPHYS.FONT_FAMILIES.FIRST};

    a {
      color: #f4f8fb;
      text-decoration: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
    }
    a:hover {
      color: #ffffff;
    }
  }

  .potlet-row {
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
  }

  .potlet-column {
    display: block;
    text-align: center;
  }

  .btn-login {
    background-color: #f4f8fb;
    border-radius: 30px;
    border-color: transparent;
    height: 64px;
    width: 216px;
    padding: 8px;
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.XL};
    font-weight: bold;
    color: #31384b;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    a {
      color: #31384b;
    }
  }

  .login-btn-container {
    margin-top: 48px;
    display: flex;
    justify-content: center;
  }

  .potlet-logo {
    background: url("images/tagteam_logo_1024_white.png"), #31384b;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    width: 216px;
    height: 216px;
  }

  .potlet-content {
    display: block;
    text-align: center;
    .label {
      font-family: ${TYPOGRAPHYS.FONT_FAMILIES.FIRST};
      font-weight: bold;
      line-height: 115%;
      &.first {
        font-size: 48px;
        color: #31384b;
      }

      &.second {
        font-size: 96px;
        color: #31384b;
      }

      &.thrid {
        font-size: 48px;
        color: #ffffff;
      }
    }
  }

  .slider-container {
    margin-top: 35%;
  }

  .slider-header {
    color: #ffffff;
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.XXL};
    font-weight: bold;
  }

  .slider-row {
    display: flex;
  }

  .slider-column {
    width: 50%;
  }
  .slick-dots li {
    width: auto;
    height: auto;
    margin: 0 16px;
    padding: 0 8px;
  }

  li.slick-active {
    background-color: #fc533612;
    border-bottom: 1px #fc5336 solid;
  }

  .slider-pic {
    border-radius: 30px;
    margin-top: 48px;
  }

  .slider-left {
    font-weight: bold;
    margin-top: 48px;
    padding-right: 64px;
    letter-spacing: 2px;

    .slider-content-header {
      font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.BG};
      color: #fc5336;
      line-height: 150%;
      margin-top: 24px;
    }

    .slider-label {
      margin-top: 16px;
      color: #ffffff;
      font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.MD};
    }
    .silder-btn {
      display: flex;
      justify-content: center;
      .btn-info {
        margin-top: 64px;
        background-color: #fc5336;
        border-radius: 60px;
        border-color: transparent;
        height: 64px;
        width: 216px;
        padding: 8px;
        font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.MD};
        font-weight: bold;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        a {
          color: #ffffff;
        }
      }
    }
  }

  .potlet-row.header {
    align-items: center;
    margin-bottom: 24px;
    margin-top: 0;
  }

  .potlet-header {
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.XXL};
    font-weight: bold;
    color: #424242;
  }

  .potlet-link {
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.LG};
    font-weight: bold;
    color: #fc5336;
    text-decoration-line: underline;
    cursor: pointer;

    a {
      color: #fc5336;
    }
    a:hover {
      color: #fa3d1b;
    }
  }

  /* Modifiers
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`;

export const TeamStyled = styled.div`
  /* Parent styles
  ------------------------------- */
  padding: 16px;
  box-shadow: 1px 1px 8px 0px rgb(0 0 0 / 25%);
  border-radius: 30px;
  margin-bottom: 64px;
  /* Child element styles
  ------------------------------- */

  .team-card-container {
    display: flex;
    justify-content: space-between;
    margin: 36px 64px;
  }

  /* Modifiers
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`;

export const CourseStyled = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  justify-content: space-between;
  margin: 36px 0;
  margin-bottom: 64px;
  /* Child element styles
  ------------------------------- */

  /* Modifiers
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`;

export const BlogStyled = styled.div`
  /* Parent styles
  ------------------------------- */
  padding: 36px;
  box-shadow: 1px 1px 8px 0px rgb(0 0 0 / 25%);
  border-radius: 32px;
  margin-bottom: 32px;
  display: block;
  justify-content: space-between;
  /* Child element styles
  ------------------------------- */

  /* Modifiers
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`;
