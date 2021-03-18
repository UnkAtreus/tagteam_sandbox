import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../themes/styles/variables'

// Wrapper
// ============================================================
export const CardBlogStyle = styled.div`
  /* Parent styles
  ------------------------------- */
  display: block;
  width: 630px;
  height: 216px;
  cursor: pointer;

  /* Child element styles
  ------------------------------- */

  .card-pic {
    height: 152px;
    width: 152px;
    border-radius: 25px;
    background-color:#424242;
    background: url('images/card_team_2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    margin-right: 16px;
  }

  .card-row {
    display: flex;
  }

  .card-column {
    display: block;
  }

  .card-content-container {
    display: block;
    background-color: #424242;
    padding: 16px;
    width: 384px;

  }

  .card-label{
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #424242;

    &.review {
      margin-left: 8px;
    }
    &.description {
      height: 96px;
    }
  }
  .card-header {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #424242;
    margin-bottom: 8px;
  }

  .card-star {
    display: flex;
    align-items: center;

  }

  

  /* Modifiers
  ------------------------------- */

  /* Modifiers for single UI
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`
