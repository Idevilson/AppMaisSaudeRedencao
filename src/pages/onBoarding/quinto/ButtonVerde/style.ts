import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 70px;
  background: #5cc859;
  border-radius: 10px;
  width: 180px;
  justify-content: center;
  align-items: center;
  margin-left: 195px;
  margin-bottom: 45px;
  margin-top: 62px;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #fff;
  font-size: 18px;
`;
