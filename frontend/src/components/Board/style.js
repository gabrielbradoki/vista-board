import styled from 'styled-components';
import * as variables from '../../helpers/VariablesStyles';

export const Container = styled.div`
  display: flex;
`;

export const TaskList = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  min-width: 341px;
  border-radius: 5px;
  margin-right: 25px;
`;

export const TaskRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
`;

export const TaskBar = styled.div`
  display: flex;
`;

export const Title = styled.span`
  color: ${variables.COLOR_WHITE};
  background: ${variables.COLOR_PRIMARY};
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
  width: 94%;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;