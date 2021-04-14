import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import Input from '../../../components/Input';

import {
  Container,
  BackButton,
  BackButtonText,
  ButtonNext,
  ButtonNextText,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

import {Form} from '@unform/mobile';

const InsertCodeSendedToEmail: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <BackButton>
          <BackButtonText>
            <Icon name="log-in" size={20} color="#fff" /> VOLTAR
          </BackButtonText>
          <Text style={{fontSize: 30, color: '#fff'}}>
            Ensira o código enviado para o seu email
          </Text>
        </BackButton>
        <Form ref={() => {}} onSubmit={() => {}} style={{marginTop: 40}}>
          <Input
            ref={() => {}}
            name="password1"
            icon="mail"
            placeholder="INFORME O CÓDIGO ENVIADO PELO EMAIL"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />

          <TouchableOpacity />
        </Form>

        <ButtonNext onPress={() => navigation.navigate('RecoveredPass')}>
          <ButtonNextText>PRÓXIMO</ButtonNextText>
        </ButtonNext>
      </Container>
    </>
  );
};

export default InsertCodeSendedToEmail;
