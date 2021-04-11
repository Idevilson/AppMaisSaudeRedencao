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

export const ButtonOpemMaps = styled.TouchableOpacity`
  background-color: #7b68ee;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  border-radius: 8px;
`;

export const CardFindHealthUnity = styled.View`
  width: 90%;

  align-self: center;
  background-color: #fff;
  align-items: center;
  border-radius: 10px;
  border-width: 2px;
  border-color: #000000;
  margin-top: 20px;
`;

export const TopCardFindHealthUnity = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const ScrowCardsContainer = styled.ScrollView`
  flex: 1;
`;

export const NumberUnityHealth = styled.Text`
  margin-right: 90%;
  font-size: 20px;
`;
