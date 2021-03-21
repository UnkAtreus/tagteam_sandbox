import styled from "styled-components";
import { default as VARIABLES } from "../../themes/styles/variables";
import { default as TYPOGRAPHYS } from "../../themes/styles/variables/typographys";

// Wrapper
// ============================================================
export const CardContestStyle = styled.div`
  /* Parent styles
  ------------------------------- */

  padding: 16px;
  box-shadow: 1px 1px 8px 0px rgb(0 0 0 / 25%);
  border-radius: 30px;
  margin-bottom: 32px;
  display: block;
  width: 720px;
  height: 196px;

  /* Child element styles
  ------------------------------- */

  .card-pic {
    height: 128px;
    width: 128px;
    border-radius: 10px;
    background-color: #424242;
    background: url("images/card_team_2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    margin-right: 16px;
  }

  .card-row {
    display: flex;

    .header {
      justify-content: space-between;
    }

    .row-btn {
      justify-content: center;
    }
  }

  .card-column {
    display: block;

    &.contest {
      width: 75%;
    }
    &.detail {
      width: 50%;
      height: 85px;
    }
    &.detail-container {
      width: 100%;
    }
  }

  .card-content-container {
    display: block;
    background-color: #424242;
    padding: 16px;
    width: 384px;
  }

  .card-icon {
    margin-top: 2px;
  }

  .card-label {
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.TN};
    font-weight: 500;
    letter-spacing: 1px;
    color: #424242;

    &.review {
      margin-left: 8px;
    }
    &.description {
      height: 75px;
    }
    &.address {
      font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.XS};
      font-weight: bold;
      margin-bottom: 10px;
    }
  }

  .card-label-detail {
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.TN};
    font-weight: 500;
    letter-spacing: 1px;
    color: #424242;
  }

  .card-tag {
    border-radius: 15px;
    padding: 4px 8px;
    background-color: #fc5336;
    color: #ffffff;
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.TN};
    margin-right: 4px;
    cursor: default;
  }
  .card-header {
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.MD};
    font-weight: bold;
    letter-spacing: 1px;
    color: #424242;
    margin-bottom: 8px;
  }

  .card-star {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  .line-verticle {
    width: 1px;
    height: 167px;
    background-color: #000000;
    margin: 0 16px;
    opacity: 0.2;
  }

  .btn-apply {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    height: 32px;
    width: 96px;
    background-color: #31384B;
    border-radius: 30px;
    margin-right: 16px;
    cursor: pointer;
  }
  .btn-close {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    height: 32px;
    width: 128px;
    background-color: #BDBDBD;
    border-radius: 30px;
    cursor: default;
  }

  .btn-tagteam {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    height: 32px;
    width: 96px;
    background-color: #54BA5E;
    border-radius: 30px;
    cursor: pointer;
  }

  /* Modifiers
  ------------------------------- */

  /* Modifiers for single UI
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`;
