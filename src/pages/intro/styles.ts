import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column-reverse;
  background: #f8f9fa;
`;

export const ContainerButton = styled.View`
  flex: 1;
  position: absolute;
  margin-bottom: 10%;
`;

export const ContainerAgentes = styled.View`
  background: #f8f9fa;
  width: 100%;
  align-self: flex-end;
`;

export const Agents = styled.Image`
  height: 590px;
  width: 100%;
`;
export const ButtonNext = styled.TouchableOpacity`
  height: 60px;
  width: 350px;
  background-color: #5cc859;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonNextText = styled.Text`
  font-size: 24px;
`;
