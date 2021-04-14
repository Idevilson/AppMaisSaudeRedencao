import React, {useCallback, useRef, useState} from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
  Button,
} from 'react-native';

import ButtonRed from '../../../components/ButtonRed';
import Input from '../../../components/Input';

import {useNavigation} from '@react-navigation/native';

import * as Yup from 'yup';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useAuth} from '../../../hooks/auth';

import getValidationErrors from '../../../utils/getValidationErros';

import {Container, ButtonNext, ButtonNextText} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SingUp2: React.FC = () => {
  const navigation = useNavigation();

  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const {signIn} = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail é obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const erros = getValidationErrors(err);

          formRef.current?.setErrors(erros);

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [signIn],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image
              style={{
                marginTop: 250,
                marginBottom: 20,
                marginRight: 10,
                width: 95,
                height: 70,
              }}
              source={require('./assets/2-2.png')}
            />
            <Form
              ref={formRef}
              onSubmit={handleSignIn}
              style={{marginBottom: 200}}>
              <Input
                ref={passwordInputRef}
                name="CALENDÁRIO"
                icon="sidebar"
                placeholder="NÚMERO CARTÃO DO SUS"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="Input data de nascimento"
                icon="calendar"
                placeholder="DATA DE NASCIMENTO"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <View
                style={{
                  marginBottom: 10,
                  marginTop: 10,
                  justifyContent: 'space-around',
                }}>
                <ButtonRed
                  style={{
                    marginBottom: 10,
                    marginTop: 10,
                    justifyContent: 'space-around',
                  }}
                  onPress={() => navigation.goBack()}>
                  VOLTAR
                </ButtonRed>

                <ButtonNext onPress={() => navigation.navigate('SignUp2')}>
                  <ButtonNextText>PRÓXIMO</ButtonNextText>
                </ButtonNext>
              </View>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SingUp2;
