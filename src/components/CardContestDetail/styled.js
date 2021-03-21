import styled from "styled-components";
import { default as VARIABLES } from "../../themes/styles/variables";
import { default as TYPOGRAPHYS } from "../../themes/styles/variables/typographys";

// Wrapper
// ============================================================
export const CardContestDetailStyle = styled.div`
  /* Parent styles
  ------------------------------- */

  padding: 16px;
  box-shadow: 1px 1px 8px 0px rgb(0 0 0 / 25%);
  border-radius: 30px;
  margin-bottom: 32px;
  display: block;
  width: 720px;
  height: fit-content;
  background-color: #ffffff;

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
    &.utilies {
      justify-content: space-between;
      align-items: center;
      margin-right: 16px;
      margin-top: 8px;
    }

    &.like {
      align-items: center;
    }
    &.tagteam {
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
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
      height: 128px;
    }
    &.address {
      font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.XS};
      font-weight: bold;
      margin-bottom: 10px;
    }

    &.like {
      margin-left: 4px;
      font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.TN};
    }

    &.name {
      font-weight: bold;
      margin-right: 8px;
      color: #fc5336;
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

    &.tagteam {
      margin-bottom: 0;
    }
  }

  .card-star {
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }

  .line-verticle {
    width: 1px;
    height: 200px;
    background-color: #000000;
    margin: 0 16px;
    opacity: 0.2;
  }
  .line-horizontal {
    width: 688px;
    height: 1px;
    background-color: #000000;
    margin: 16px 0;
    opacity: 0.2;
  }

  .btn-apply {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    height: 32px;
    width: 96px;
    background-color: #31384b;
    border-radius: 30px;
    cursor: pointer;
  }
  .btn-close {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    height: 32px;
    width: 128px;
    background-color: #bdbdbd;
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
    background-color: #54ba5e;
    border-radius: 30px;
    cursor: pointer;
  }

  .card-post {
    display: block;
    margin-bottom: 16px;
  }

  .post-text {
    width: 100%;
    border: 0;
    border-radius: 10px;
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.TN};
    height: 64px;
    padding: 8px 16px;
    background-color: #e4e4e4;
    outline: none;
    resize: none;
    overflow: auto;
  }

  .card-comment-container {
    display: block;
  }

  .card-comment {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }

  .card-team-container {
    display: flex;
    justify-content: space-between;
  }

  .search-bar {
    display: flex;
    align-items: center;
  }

  .search-text {
    width: 224px;
    border: 0;
    border-radius: 30px;
    height: 32px;
    padding: 8px 16px;
    background-color: #e4e4e4;
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.TN};
  }

  .search-icon {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    margin: 0 8px;
    width: 32px;
    height: 32px;
    background-color: #e4e4e4;
    border-radius: 50%;
  }

  /* Modifiers
  ------------------------------- */

  /* Modifiers for single UI
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`;

export const CardTeamStyle = styled.div`
  /* Parent styles
  ------------------------------- */
  display: block;
  width: fit-content;
  height: fit-content;
  border-radius: 30px 30px 0 0;
  margin-bottom: 32px;
  width: 100%;
  /* Child element styles
  ------------------------------- */
  .card-team-style {
    box-shadow: none;
    cursor: default;
  }
  .card-pic {
    height: 196px;
    width: 216px;
    border-radius: 30px 30px 0 0;
    background-color: #424242;
    background: url("images/card_team_2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    margin-right: 0;
  }

  .card-content-container {
    display: block;
    background-color: #424242;
    padding: 16px;
    width: 216px;

    .card-row {
      display: flex;
      justify-content: space-between;
    }
  }

  .card-profile {
    display: block;
  }

  .card-status-container {
    text-align: end;
  }

  .card-label {
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.TN};
    font-weight: bold;
    letter-spacing: 1px;
    color: #ffffff;

    &.name {
      color: #ffffff;
    }
    &.address {
      font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.TN};
      margin-bottom: 0;
    }
  }

  /* Modifiers
  ------------------------------- */

  /* Modifiers for single UI
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`;
