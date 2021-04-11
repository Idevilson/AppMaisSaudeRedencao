import styled from 'styled-components/native';

import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;

  background: #fff;
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

export const HeaderView = styled.View`
  background-color: #7b68ee;
  width: 100%;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const ButtonsAppMenu = styled.View`
  margin-top: 7%;
  width: 90%;
  border-radius: 20px;
  border-width: 2px;
  height: 100px;
  background-color: #fff;
  border-bottom-color: #000000;
  justify-content: space-between;
  flex-direction: row;
`;
