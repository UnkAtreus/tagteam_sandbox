import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../themes/styles/variables'
import {
  default as TYPOGRAPHYS
} from '../../themes/styles/variables/typographys'

// Wrapper
// ============================================================
export const CardTeamStyle = styled.div`
  /* Parent styles
  ------------------------------- */
  display: block;
  width: fit-content;
  height: fit-content;
  border-radius: 30px 30px 0 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  /* Child element styles
  ------------------------------- */

  .card-pic {
    height: 216px;
    border-radius: 30px 30px 0 0;
    background-color:#424242;
    background: url('images/card_team_2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
  }

  .card-content-container {
    display: block;
    background-color: #424242;
    padding: 16px;
    width: 256px;

    .card-row {
      display:flex;
      justify-content: space-between;
    }
  }

  .card-profile {
    display: block;

  }

  .card-status-container {
    text-align: end;
  }

  .card-label{
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.XXS};
    font-weight: bold;
    letter-spacing: 1px;
    color: #ffffff;
  }

  .btn-invite {
    width: 64px;
    height: 16px;
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.TN};
    background-color: #54BA5E;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #ffffff;
    letter-spacing: 1px;
    margin-top: 4px;
    cursor: pointer;
  }
  .btn-attend {
    width: 64px;
    height: 16px;
    font-size: ${TYPOGRAPHYS.FONT_SIZES_PX.TN};
    background-color: #FC5336;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #ffffff;
    letter-spacing: 1px;
    margin-top: 4px;
    cursor: pointer;
  }

  

  /* Modifiers
  ------------------------------- */

  /* Modifiers for single UI
  ------------------------------- */

  /* Media queries
  ------------------------------- */
`
