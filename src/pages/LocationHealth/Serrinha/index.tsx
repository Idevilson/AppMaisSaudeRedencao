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

const Serrinha: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </BackButton>
        <Text style={{marginLeft: 5, color: '#fff', fontSize: 22}}>
          ESF - FRANCISCO PAES DE LIRA
        </Text>
      </Header>
      <InformationScroll>
        <Title>{`UNIDADE DE SAÚDE
SETOR SERRINHA`}</Title>
        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTO MÉDICO'}</Title>
        <Content>{'Dr Alexon Pinheiro'}</Content>
        <Content>{'Período: Manhã e Tarde'}</Content>
        <Content>{'Das 7h ás 11h e 13h ás 17h'}</Content>

        <Title>{'GINECOLOGIA'}</Title>
        <Content>{'Dra Josiane'}</Content>
        <Content>{'Segundas, Quartas e Quinta-feiras'}</Content>
        <Content>{'Das 7h ás 12H'}</Content>

        <Title>{'GINECOLOGIA'}</Title>
        <Content>{'Dra Rose'}</Content>
        <Content>{'Quinta-feira'}</Content>
        <Content>{'Das 7h ás 12H'}</Content>

        <Title>{'NUTRIÇÃO'}</Title>
        <Content>{'Dra Rose'}</Content>
        <Content>{'Quinta-feira'}</Content>
        <Content>{'Das 7h ás 12H'}</Content>

        <Title>{'FISIOTERAPIA'}</Title>
        <Content>{'Dr Junior Fernandes'}</Content>
        <Content>{'Segunda a Sexta-feira'}</Content>
        <Content>{'Das 13h as 17h'}</Content>

        <Title>{'PSICOLOGIA'}</Title>
        <Content>{'Dra Flávia Nóbrega'}</Content>
        <Content>{'Terça-feira'}</Content>
        <Content>{'Das 7h as 11h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Enfª COORDENADORA'}</Title>
        <Content>{'Kananda Pereira dos Reis'}</Content>
        <Content>{'Horário: das 7h às 12h e 14h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica de enfermagem'}</Title>
        <Content>{'Evani Lopes'}</Content>
        <Content>{'Triagem'}</Content>
        <Content>{'7h às 15h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica de enfermagem'}</Title>
        <Content>{'Eunice'}</Content>
        <Content>{'Curativos'}</Content>
        <Content>{'das 7h as 11h30 e 13h30 as 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica de enfermagem'}</Title>
        <Content>{'Maria Elijanilde'}</Content>
        <Content>{'Sala de Vacina'}</Content>
        <Content>{'das 7h às 11h e 13h ás 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTOS OFERECIDOS'}</Title>
        <Content>{'CONSULTA MÉDICA'}</Content>
        <Content>{'CONSULTA GINECOLÓGICA'}</Content>
        <Content>{'CONSULTA PSICOLÓGICA'}</Content>
        <Content>{'CONSULTA NUTRICIONAL'}</Content>
        <Content>{'ENFERMAGEM EM GERAL'}</Content>
        <Content>{'REALIZAÇÃO DO PCCU'}</Content>
        <Content>{'CURATIVOS'}</Content>
        <Content>{'VACINA'}</Content>
        <Content>{'VISITAS DOMICILIARES'}</Content>
        <Content>{'PLANEJAMENTO FAMILIAR'}</Content>
        <Content>{'ENTREGA DE PRESERVATIVOS'}</Content>
        <Content>{'E ANTICONCEPCIONAIS'}</Content>
      </InformationScroll>
    </Container>
  );
};

export default Serrinha;
