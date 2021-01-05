import React, {useRef} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import ButtonVerde from '../../../components/ButtonVerde';
import Input from '../../../components/Input';

import {Container, BackButton, BackButtonText} from './styles';

import Icon from 'react-native-vector-icons/Feather';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

const RecoverPassByEmail: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <Container>
        <BackButton>
          <BackButtonText>
            <Icon name="log-in" size={20} color="#fff" /> VOLTAR
          </BackButtonText>
        </BackButton>
        <Image
          style={{
            marginTop: 100,
            marginRight: 20,
            width: 310,
            height: 70,
          }}
          source={require('./assets/message.png')}
        />
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

        <ButtonVerde>Redefinir</ButtonVerde>
      </Container>
    </>
  );
};

export default RecoverPassByEmail;
