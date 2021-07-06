import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;

  background: #fff;
`;

export const HeaderView = styled.View`
  background-color: #7b68ee;
  height: 25%;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const ButtonsAppMenu = styled.View`
  flex: 1;
  align-self: center;
  margin-top: 5%;
  margin-bottom: 2%;
  width: 90%;
  border-radius: 20px;
  border-width: 2px;
  height: 100px;
  background-color: #fff;
  border-bottom-color: #000000;
  justify-content: space-between;
  flex-direction: row;
`;

export const ScrowButtonsContainer = styled.ScrollView`
  flex: 1;
`;
