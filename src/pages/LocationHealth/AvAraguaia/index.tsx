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

const AvAraguaia: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </BackButton>
        <Text style={{marginLeft: 5, color: '#fff', fontSize: 22}}>
          ESF - ANTÔNIA P. CAVALCANTE
        </Text>
      </Header>
      <InformationScroll>
        <Title>{`UNIDADE DE SAÚDE
LOCAL: AV. ARAGUAIA`}</Title>
        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTO MÉDICO'}</Title>
        <Content>{'Dr. Hugo Brandão - Período Manhã e Tarde'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Enfª COORDENADORA'}</Title>
        <Content>{'Keila Ferreira Cândida'}</Content>
        <Content>{'Horário: das 7h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Enfermeira'}</Title>
        <Content>{'Tainara Dantas'}</Content>
        <Content>{'Atendimento em Geral'}</Content>
        <Content>{'7h às 12h e 14h às 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica enfermagem'}</Title>
        <Content>{'Sirlienes Maria Dantas'}</Content>
        <Content>{'Sala de Vacina'}</Content>
        <Content>{'das 7h às 12h e 14h ás 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Técnica enfermagem'}</Title>
        <Content>{'Rivaldo de Sousa Silva'}</Content>
        <Content>{'Triagem e Curativo'}</Content>
        <Content>{'das 7h às 12h e 14h ás 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'Laboratório da Sucam'}</Title>
        <Content>{'das 7h às 12h e 14h ás 17h'}</Content>

        <ImageDivider source={require('../assets/line.png')} />
        <Title>{'ATENDIMENTOS OFERECIDOS'}</Title>
        <Content>{'CONSULTA MÉDICA'}</Content>
        <Content>{'ENFERMAGEM EM GERAL'}</Content>
        <Content>{'REALIZAÇÃO DO PCCU'}</Content>
        <Content>{'CURATIVOS'}</Content>
      </InformationScroll>
    </Container>
  );
};

export default AvAraguaia;
