import styled from 'styled-components'
// import {
//   default as VARIABLES
// } from '../../themes/styles/variables'
import {
  default as TYPOGRAPHYS
} from '../../themes/styles/variables/typographys'
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
  background-color: #F4F8FB;
  

  /* Child element styles
  ------------------------------- */


  .potlet-bg {
    display: flex;
    background-color: #fafafa;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('images/canvas_bg_2008.jpg');
    height: 2049px;
    width: 100%;
    margin: auto;
  }

  .nav {
    display: flex;
    height: fit-content;
    margin-top: 24px;
  }

  .nav-logo {
    background: url('images/tagteam_logo_1024_white.png'), #31384B;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    width: 80px;
    height: 80px; 
  }

  .nav-row {
    display: flex;
    margin-left: 16px;
    align-items: center;
  }

  .nav-content {
    font-size: 18px;
    font-weight: bold;
    margin: 0 16px;
    color: #FFFFFF;
    cursor: pointer;
    font-family: ${TYPOGRAPHYS.FONT_FAMILIES.FIRST};
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
    background-color: #ffffff;
    border-radius: 30px;
    border-color: transparent;;
    height: 64px;
    width: 300px;
    padding: 8px;
    font-size: 36px;
    font-weight: bold;
    color: #31384B;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .login-btn-container {
    margin-top: 48px;
    display: flex;
    justify-content: center;
  }

  .potlet-logo {
    background: url('images/tagteam_logo_1024_white.png'), #31384B;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 50%;
    width: 384px;
    height: 384px;
  }

  .potlet-content {
    display: block;
    text-align: center;
    .label {
      font-family: ${TYPOGRAPHYS.FONT_FAMILIES.FIRST};
      font-weight: bold;
      line-height: 115%;
      &.first {
        font-size: 72px;
        color: #31384B;
      }

      &.second {
        font-size: 144px;
        color: #31384B;
      }

      &.thrid {
        font-size: 72px;
        color: #ffffff;
      }
    }
  }

  .slider-container {
    margin-top: 45%;
  }

  .slider-header {
    color: #ffffff;
    font-size: 36px;
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
    margin: 0 32px;
    padding: 0 8px;
  }

  li.slick-active {
    background-color: #fc533612;
    border-bottom: 1px #FC5336 solid;
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
      font-size: 48px;
      color: #FC5336;
      line-height: 150%;
      margin-top: 24px;
    }

    .slider-label {
      margin-top: 16px;
      color: #ffffff;
      font-size: 24px;

    }
    .silder-btn {
      display: flex;
      justify-content: center;
    .btn-info {
      margin-top: 64px;
      background-color: #FC5336;
      border-radius: 60px;
      border-color: transparent;;
      height: 96px;
      width: 316px;
      padding: 8px;
      font-size: 36px;
      font-weight: bold;
      color: #FFFFFF;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    }
  }

  .potlet-row.header {
    align-items: center;
    margin-bottom: 36px;
    margin-top: 0;
  }

  .potlet-header {
    font-size: 48px;
    font-weight: bold;
    color: #424242;
  }

  .potlet-link {
    font-size: 36px;
    font-weight: bold;
    color: #FC5336;
    text-decoration-line: underline;
    cursor: pointer;
  }

  /* Modifiers
  ------------------------------- */


  /* Media queries
  ------------------------------- */
`

export const TeamStyled = styled.div`
  /* Parent styles
  ------------------------------- */
  padding: 16px;
  box-shadow: 1px 1px 8px 0px rgb(0 0 0 / 25%);
  border-radius: 30px;
  margin-bottom: 128px;
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
`

export const CourseStyled = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  justify-content: space-between;
  margin: 36px 36px;
  margin-bottom: 128px;
  /* Child element styles
  ------------------------------- */

  /* Modifiers
  ------------------------------- */


  /* Media queries
  ------------------------------- */
`

export const BlogStyled = styled.div`
  /* Parent styles
  ------------------------------- */
  padding: 36px;
  box-shadow: 1px 1px 8px 0px rgb(0 0 0 / 25%);
  border-radius: 32px;
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* Child element styles
  ------------------------------- */
  .line-vertical {
    height: 216;
    width: 1px;
    background-color: #424242;
  }


  /* Modifiers
  ------------------------------- */


  /* Media queries
  ------------------------------- */  
`

