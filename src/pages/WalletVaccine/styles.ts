import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  width: 100%;
  height: 12%;
  background-color: #7b68ee;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const HeaderTitle = styled.Text`
  color: #fff;
  font-size: 30px;
  align-self: center;
  margin-top: 3%;
`;

export const ContainerNameAndAge = styled.View`
  margin-top: 2%;

  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderPersonName = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-left: 15%;
`;
export const HeaderPersonAge = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-right: 15%;
`;

export const ImageDivider = styled.Image`
  width: 80%;
  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 5%;
  position: absolute;
`;

export const TextSession = styled.Text`
  margin-top: 5%;
  font-size: 20px;
  align-self: center;
`;

export const TextSessionVoid = styled.Text`
  font-size: 20px;
  align-self: center;
`;

export const ButtonVaccine = styled.View`
  align-self: center;
  margin-top: 2%;
  margin-bottom: 2%;
  width: 90%;
  border-radius: 20px;
  height: 100px;
  background-color: #affc41;
  border-bottom-color: #000000;
  justify-content: space-between;
  flex-direction: row;
`;

export const ButtonVaccinVoid = styled.View`
  align-self: center;
  margin-top: 2%;
  margin-bottom: 2%;
  width: 90%;
  border-radius: 20px;
  border-width: 2px;
  height: 100px;
  background-color: #fff;
  border-bottom-color: #000000;
  justify-content: center;
  align-items: center;
`;

export const LeftViewButtonVaccine = styled.View`
  background-color: #affc41;
  width: 55%;
  height: 96px;
  border-radius: 17px;
  align-self: flex-end;
`;

export const RightViewButtonVaccine = styled.View`
  background-color: #7b68ee;
  width: 45%;
  height: 100px;
  border-radius: 17px;
  align-self: flex-end;
`;

export const VaccineName = styled.Text`
  font-size: 15px;
  margin-left: 8%;
  margin-top: 8%;
  color: #030041;
  font-family: Roboto;
`;

export const StatusVaccine = styled.Text`
  font-size: 15px;
  margin-left: 8%;
  margin-top: 2%;
  color: #030041;
  font-family: Roboto;
`;

export const Doses = styled.Text`
  font-size: 15px;
  align-self: center;
  margin-top: 13%;
  color: #fff;
  font-family: Roboto;
`;

export const VaccineDosesContainer = styled.View`
  width: 70%;
  height: 30px;
  margin-top: 10%;
  align-self: center;
  flex-direction: row;
  justify-content: center;
`;

export const VaccineDoses = styled.View`
  align-self: center;
  width: 25%;
  height: 90%;
  border-radius: 50px;
  background-color: #affc41;
  padding-right: 10px;
  margin-right: 5%;
  margin-left: 8%;
`;
