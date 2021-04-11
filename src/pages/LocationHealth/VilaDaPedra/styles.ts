import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 30px;
  background-color: #7b68ee;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: #454f63;
  margin-top: 20px;
`;
export const Content = styled.Text`
  font-size: 20px;
  color: #707070;
  margin-top: 20px;
  text-align: center;
`;

export const InformationScroll = styled.ScrollView`
  flex: 1;
`;

export const ImageDivider = styled.Image`
  width: 80%;
  align-self: center;
  margin: 20px;
`;
