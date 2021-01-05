import React, {useCallback, useRef} from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import ButtonVerde from '../../../components/ButtonVerde';
import ButtonRed from '../../../components/ButtonRed';
import Input from '../../../components/Input';

//import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useAuth} from '../../../hooks/auth';

import getValidationErrors from '../../../utils/getValidationErros';

import {Container} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SingUp1: React.FC = () => {
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
                marginTop: 100,
                marginBottom: 20,
                marginRight: 20,
                width: 70,
                height: 70,
              }}
              source={require('./assets/1-2.png')}
            />
            <Form
              ref={formRef}
              onSubmit={handleSignIn}
              style={{marginBottom: 30}}>
              <Input
                ref={passwordInputRef}
                name="password"
                icon="user"
                placeholder="NOME COMPLETO"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="E-MAIL"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="SENHA"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="REPITA A SENHA"
                secureTextEntry
                returnKeyType="send"
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
                  onPress={() => {}}>
                  VOLTAR
                </ButtonRed>
                <ButtonVerde onPress={() => {}}>PRÓXIMO</ButtonVerde>
              </View>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SingUp1;
