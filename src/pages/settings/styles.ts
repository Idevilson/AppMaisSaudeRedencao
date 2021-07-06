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

  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 80%;
`;

export const AboutUnityHealth = styled.TouchableOpacity``;

export const ScrowCardsContainer = styled.ScrollView`
  flex: 1;
`;

export const ContainerSettings = styled.View`
  margin-top: 5%;
`;
export const SettingsComponentContainer = styled.View`
  height: 80px;
  width: 80%;
  align-self: center;
`;
export const TextField = styled.Text`
  color: #939bb5;
  font-size: 23px;
`;

export const TextFieldInfo = styled.Text`
  color: #000;
  font-size: 20px;
`;

export const ButtonAboutSobre = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  height: 35px;
  width: 100px;

  margin-top: 50px;
  margin-left: 10%;
`;

export const ButtonAboutRedefinir = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  height: 35px;
  width: 212px;

  margin-top: 5%;
  margin-left: 10%;
`;

export const ButtonAboutSair = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  height: 35px;
  width: 100px;

  margin-top: 5%;
  margin-left: 10%;
`;
