import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const SettingButton = styled(RectButton)`
  background: #fff;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  margin-left: 340px;

  margin-top: -30px;

  justify-content: center;
  align-items: center;
`;
