import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

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
  width: 353px;
  margin-top: 65px;
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

export const CreateAccontButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccontButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;

export const ContainerView = styled.View`
  align-items: flex-end;
`;
