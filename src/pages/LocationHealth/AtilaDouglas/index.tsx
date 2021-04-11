import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Header,
  BackButton,
  InformationScroll,
  Title,
  ImageDivider,
  Content,
} from './styles';

const AtilaDouglas: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </BackButton>
        <Text style={{marginLeft: 5, color: '#fff', fontSize: 22}}>
          ESF - MARIA F.L. DA SILVA
        </Text>
      </Header>
      <InformationScroll>
        <Title>{`UNIDADE DE SAÚDE
SETOR ATILA DOUGLAS`}</Title>
        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTO MÉDICO'}</Title>
        <Content>{'Drª Giovanna Dourado'}</Content>
        <Content>{'Período: Manhã e Tarde'}</Content>
        <Content>{'Das 7h ás 11h e 13h ás 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Enfª COORDENADORA'}</Title>
        <Content>{'Mércia Freitas'}</Content>
        <Content>{'Horário: das 7h às 11h e 13h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnico de enfermagem'}</Title>
        <Content>{'Ivani Portilho'}</Content>
        <Content>{'Triagem e Curativos'}</Content>
        <Content>{'7h às 11h e 13h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica de enfermagem'}</Title>
        <Content>{'Angelita Barbosa'}</Content>
        <Content>{'Sala de Vacina'}</Content>
        <Content>{'das 7h às 12h e 14h ás 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTO ODONTOLOGICO'}</Title>
        <Content>{'Dra Gleyse Gonçalves (manhã)'}</Content>
        <Content>{'Dr Mário Jardel Diniz (tarde)'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTOS OFERECIDOS'}</Title>
        <Content>{'CONSULTA MÉDICA'}</Content>
        <Content>{'ENFERMAGEM EM GERAL'}</Content>
        <Content>{'REALIZAÇÃO DO PCCU'}</Content>
        <Content>{'CURATIVOS'}</Content>
        <Content>{'VACINA'}</Content>
        <Content>{'VISITAS DOMICILIARES'}</Content>
        <Content>{'PLANEJAMENTO FAMILIAR'}</Content>
        <Content>{'ATENDIMENTO ODONTOLOGICO'}</Content>
        <Content>{'ENTREGA DE PRESERVATIVOS'}</Content>
        <Content>{'E ANTICONCEPCIONAIS'}</Content>
      </InformationScroll>
    </Container>
  );
};

export default AtilaDouglas;
