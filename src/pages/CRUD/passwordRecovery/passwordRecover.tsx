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
import {Form} from '@unform/mobile';

const RecoveredPass: React.FC = () => {
  return (
    <>
      <Container>
        <BackButton>
          <BackButtonText>
            <Icon name="log-in" size={20} color="#fff" /> VOLTAR
          </BackButtonText>
        </BackButton>
        <Text style={{fontSize: 30, color: '#fff'}}>
          Tela da recuperação de senha
        </Text>
        <Form ref={() => {}} onSubmit={() => {}} style={{marginTop: 40}}>
          <Input
            ref={() => {}}
            name="password1"
            icon="mail"
            placeholder="INFORME A SENHA"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />

          <Input
            ref={() => {}}
            name="password2"
            icon="mail"
            placeholder="REPITA A SENHA"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />

          <TouchableOpacity />
        </Form>

        <ButtonNext onPress={() => {}}>
          <ButtonNextText>PRÓXIMO</ButtonNextText>
        </ButtonNext>
      </Container>
    </>
  );
};

export default RecoveredPass;
