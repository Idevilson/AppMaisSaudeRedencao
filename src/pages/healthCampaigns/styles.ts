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
  margin-right: 90%;
`;

export const ScrowCampaignsContainer = styled.ScrollView`
  flex: 1;
`;

export const ContainerHealthCampaign = styled.View`
  width: 95%;
  height: 220px;

  align-self: center;
  margin-top: 20px;

  border-radius: 15px;
`;

export const HeaderHealthCampaign = styled.View`
  width: 100%;
  height: 80%;
  background-color: #c21415;

  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const FooterHealthCampaign = styled.View`
  width: 100%;
  height: 20%;

  background-color: #7b68ee;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ShareIconWhiteCicleContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;

  margin-left: 30%;

  display: flex;
  justify-content: center;
`;

export const ButtonAboutMore = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  height: 35px;
  width: 45%;

  margin-left: 7px;
`;
