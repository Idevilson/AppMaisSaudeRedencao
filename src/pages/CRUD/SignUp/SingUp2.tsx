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
  Text,
} from 'react-native';

import ButtonVerde from '../../../components/ButtonVerde';
import ButtonRed from '../../../components/ButtonRed';
import Input from '../../../components/Input';
import {Picker} from '@react-native-picker/picker';

import {useNavigation} from '@react-navigation/native';

import * as Yup from 'yup';

import DateTimePicker from '@react-native-community/datetimepicker';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useAuth} from '../../../hooks/auth';

import getValidationErrors from '../../../utils/getValidationErros';

import {Container} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SingUp2: React.FC = () => {
  // picker selecionar genero
  const [selectedValue, setSelectedValue] = useState('Homem');

  // navegação
  const navigation = useNavigation();
  // date picker
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

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
              <View>
                <View>
                  <Button onPress={showDatepicker} title="Show date picker!" />
                </View>

                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                  />
                )}
              </View>

              <Text style={{fontSize: 20, color: '#fff'}}>
                Selecione o genero
              </Text>
              <Picker
                selectedValue={selectedValue}
                style={{
                  marginTop: 10,
                  height: 50,
                  width: 350,
                  backgroundColor: '#fff',
                  color: '#000000',
                  borderRadius: 10,
                  borderWidth: 10,
                }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }>
                <Picker.Item label="Homem" value="Homem" />
                <Picker.Item label="Mulher" value="Mulher" />
              </Picker>
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

                <ButtonVerde onPress={() => navigation.navigate('SignIn')}>
                  CADASTRAR
                </ButtonVerde>
              </View>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SingUp2;
