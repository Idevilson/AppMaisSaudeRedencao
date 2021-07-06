import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  BackButton,
  TextSession,
  TextSessionVoid,
  ButtonVaccine,
  ButtonVaccinVoid,
  RightViewButtonVaccine,
  LeftViewButtonVaccine,
  VaccineName,
  Doses,
  StatusVaccine,
  VaccineDosesContainer,
  VaccineDoses,
  ImageDivider,
  HeaderTitle,
  ContainerNameAndAge,
  HeaderPersonName,
  HeaderPersonAge,
} from './styles';

import {useNavigation} from '@react-navigation/native';

const WalletVaccine: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={35} color="#fff" />
        </BackButton>
        <HeaderTitle>CARTÃO DE VACINAS</HeaderTitle>
        <ImageDivider source={require('./assets/line.png')} />
        <ContainerNameAndAge>
          <HeaderPersonName>UMA PESSOA CADASTRADA</HeaderPersonName>
          <HeaderPersonAge>40 anos</HeaderPersonAge>
        </ContainerNameAndAge>
      </Header>

      <TextSession>VACINAS PENDENTES</TextSession>

      <ButtonVaccinVoid>
        <TextSessionVoid>NÃO HÁ VACINAS PENDENTES</TextSessionVoid>
      </ButtonVaccinVoid>

      <TextSession>VACINAS APLICADAS</TextSession>

      <ButtonVaccine>
        <LeftViewButtonVaccine>
          <VaccineName>BCG</VaccineName>
          <StatusVaccine>Vacina Concluída</StatusVaccine>
        </LeftViewButtonVaccine>
        <RightViewButtonVaccine>
          <Doses>DOSES</Doses>
          <VaccineDosesContainer>
            <VaccineDoses />
            <VaccineDoses />
          </VaccineDosesContainer>
        </RightViewButtonVaccine>
      </ButtonVaccine>
    </Container>
  );
};

export default WalletVaccine;
