import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
`;
export const ContainerPurple = styled.View`
  background-color: #7b68ee;
  border-radius: 10px;
  height: 540px;
  width: 90%;
`;

export const ContainerCicle = styled.View`
  margin-top: -20px;
  background-color: #fff;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  align-items: center;
  justify-content: center;
  margin-left: -5px;
`;

export const ContainerButtonsHandlePage = styled.View`
  width: 90%;

  flex-direction: row;
  justify-content: space-between;
  margin-top: 10%;
`;

export const WhiteNextButton = styled.TouchableOpacity`
  opacity: 100;
  background-color: #fff;
  border-color: #000000;
  border-width: 2px;
  width: 45%;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const GreenNextButton = styled.TouchableOpacity`
  opacity: 100;
  background-color: #5cc859;
  border-color: #a8e9b5;
  border-width: 2px;
  width: 45%;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonTextContent = styled.Text`
  font-size: 20px;
  color: #000000;
`;
