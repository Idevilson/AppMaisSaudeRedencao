import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 5%;
  background-color: #7b68ee;
  flex-direction: row;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 80%;
`;

export const AboutUnityHealth = styled.TouchableOpacity``;

export const ScrowCardsContainer = styled.ScrollView`
  flex: 1;
`;

export const NumberUnityHealth = styled.Text`
  margin-right: 90%;
  font-size: 20px;
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
