import styled from 'styled-components';
import * as variables from '../../helpers/VariablesStyles'

export const SidebarContainer = styled.div`
  position: fixed;
  left: -3vw;
  height: 100%;
  width: 3vw;
  transition: left 0.3s ease-in-out;
  background-color: ${variables.COLOR_PRIMARY};
  z-index: 1;

  &.open {
    left: 0;
  }

  > button {
    position: absolute;
    bottom: 0;
    right: -50px;
    height: 40px;
    width: 50px;
    cursor: pointer;
    z-index: 1;
    background: #000;
    color: ${variables.COLOR_WHITE};
    font-size: 1.5em;
    line-height: 20px;
  }
`;

export const SidebarIcons = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;


  > li {
    color: #fff;
    font-size: 1em;
    padding-bottom: 20px;

    &:first-child {
      padding-top: 30px;
    }
  }
`;