import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #7b68ee;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 10px;
  margin-right: 250px;
  margin-bottom: 150px;
`;

export const BackButtonText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const ButtonNext = styled.TouchableOpacity`
  height: 60px;
  width: 105%;

  background-color: #5cc859;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonNextText = styled.Text`
  font-size: 24px;
`;
