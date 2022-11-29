import styled from 'styled-components';
import * as variables from '../../helpers/VariablesStyles'

export const HeaderContainer = styled.section`
  height: 40px;
  border: 2px solid ${variables.COLOR_PRIMARY};
  border-left: 15px solid ${variables.COLOR_PRIMARY};
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  > svg {
    font-size: 1.5rem;
  }
`;

export const HeaderText = styled.span`
  font-size: 22px;
  font-family: 'Roboto', sans-serif;
  color: ${variables.COLOR_DARK};
  font-weight: bold;
`;

export const HeaderHour = styled.span`
  font-size: 12px;
  color: ${variables.COLOR_PRIMARY};

  > svg {
    padding-right: 5px;
  }

  > span {
    font-size: 12px;
    background-color: ${variables.COLOR_PRIMARY};
    border-radius: 100%;
    padding: 3px;
    margin-left: 5px;
    color: ${variables.COLOR_WHITE}
  }
`;

export const HeaderGroupSearch = styled.div`
  position: relative;
`;

export const HeaderSearch = styled.input`
    border: none;
    color: #ddd;
    height: 32px;
    font-weight: bold;
    font-size: 14px;
    width: 355px;
    padding-left: 40px;
    border-radius: 5px;
    box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 60%);
`;

export const HeaderSearchButton = styled.button`
  position: absolute;
  left: 5px;
  top: 7px;
  width: 32px;
  border: none;
  background: none;
`;

export const HeaderFilterButton = styled.button`
    background-color: ${variables.COLOR_PRIMARY};
    width: 120px;
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-transform: uppercase;
    height: 32px;
    color: #000;
    box-shadow: 0px 0px 3px 0px rgb(0 0 0 / 60%);
    cursor: pointer;
`;