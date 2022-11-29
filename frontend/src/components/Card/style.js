
import styled from 'styled-components';
import * as variables from '../../helpers/VariablesStyles'

export const TaskInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
  border-radius: 5px;
  max-width: 311px;
  background: ${variables.COLOR_WHITE};
  margin: 0 auto;
  margin-top: 15px;

  p {
    font-size: 10px;
    color: ${variables.COLOR_LIGHT_GREY};
  }

  span {
    font-size: 12px;
    color: ${variables.COLOR_DARK};
    line-height: 15px;
  }
`;

export const TaskRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TaskFlag = styled.span`
    border: 1px solid #a1a1a1;
    border-radius: 5px;
    font-size: 12px;
    text-transform: uppercase;
    padding: 3px;
    margin-bottom: 10px;
    font-weight: 600;
`;

export const TaskCode = styled.span`
    font-size: 12px;
    margin-bottom: 10px;
    color: ${variables.COLOR_LIGHT_GREY};
`;

export const TaskName = styled.span`
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${variables.COLOR_DARK};
`;

export const TaskDescription = styled.span`
    font-size: 12px;
    margin-bottom: 10px;
    color: ${variables.COLOR_LIGHT_GREY};
    width: 100%;
    border-bottom: 1px solid ${variables.COLOR_LIGHT_GREY};
    padding-bottom: 15px;
`;

export const TaskSituationDone = styled.button`
    font-size: 12px;
    box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 60%);
    background: ${variables.COLOR_PRIMARY};
    color: ${variables.COLOR_WHITE};
    text-transform: uppercase;
    width: 70px;
    padding: 5px;
    border: none;
    border-radius: 5px;
`;

export const TaskSituationAlert = styled.button`
    font-size: 12px;
    box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 60%);
    background: yellow;
    color: ${variables.COLOR_WHITE};
    text-transform: uppercase;
    width: 70px;
    padding: 5px;
    border: none;
    border-radius: 5px;
`;

export const TaskSituationDanger = styled.button`
    font-size: 12px;
    box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 60%);
    background: red;
    color: ${variables.COLOR_WHITE};
    text-transform: uppercase;
    width: 70px;
    padding: 5px;
    border: none;
    border-radius: 5px;
`;

export const TaskTeam = styled.div`

    p {
      text-align: right;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
    }

    li {
      border-radius: 50%;
      background: ${variables.COLOR_PRIMARY};
      padding: 6px 5px;
      color: ${variables.COLOR_WHITE};
      font-size: 10px;
      margin: 2px;
    }
`;
