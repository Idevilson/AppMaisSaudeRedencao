import React, {useRef} from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Input from '../../../components/Input';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  BackButton,
  BackButtonText,
  ButtonNext,
  ButtonNextText,
} from './styles';

import Icon from 'react-native-vector-icons/Feather';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

const RecoverPassByEmail: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  return (
    <>
      <Container>
        <BackButton>
          <BackButtonText onPress={() => navigation.goBack()}>
            <Icon name="log-in" size={20} color="#fff" /> VOLTAR
          </BackButtonText>
        </BackButton>
        <Text style={{fontSize: 30, color: '#fff'}}>
          Tela de inserir o email cadastrado
        </Text>
        <Form ref={formRef} onSubmit={() => {}} style={{marginTop: 40}}>
          <Input
            ref={() => {}}
            name="password"
            icon="mail"
            placeholder="INFORME O EMAIL"
            secureTextEntry
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />

          <TouchableOpacity />
        </Form>

        <ButtonNext
          onPress={() => navigation.navigate('InsertCodeSendedToEmail')}>
          <ButtonNextText>PRÓXIMO</ButtonNextText>
        </ButtonNext>
      </Container>
    </>
  );
};

export default RecoverPassByEmail;
