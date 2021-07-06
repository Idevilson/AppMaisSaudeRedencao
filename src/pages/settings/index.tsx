/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';


import {
  Container,
  Header,
  BackButton,
  ButtonAboutRedefinir,
  ButtonAboutSair,
  ContainerSettings,
  ButtonAboutSobre,
  ScrowCardsContainer,
  SettingsComponentContainer,
  TextField,
  TextFieldInfo,
} from './styles';

const Settings: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={35} color="#fff" />
        </BackButton>
        <Text style={{color: '#fff', fontSize: 30, position: 'absolute'}}>
          CONFIGURAÇÕES
        </Text>
      </Header>
      <ScrowCardsContainer>
          <Image
              style={{
                width: 170,
                height: 80,
                marginTop: 70,
                alignSelf: 'center',
              }}
              source={require('../../assets/Logo.png')}
          />

        <ButtonAboutSobre>
          <Text style={{color: '#223269', fontSize: 30, position: 'absolute'}}>
            SOBRE
          </Text>
        </ButtonAboutSobre>

        <ContainerSettings>
          <SettingsComponentContainer>
              <TextField>
                NOME
              </TextField>
              <TextFieldInfo>
                SORAIA DA SILVA
              </TextFieldInfo>
          </SettingsComponentContainer>
          <SettingsComponentContainer>
              <TextField>
                E-mail
              </TextField>
              <TextFieldInfo>
                soraiadasilva@gmail.com
              </TextFieldInfo>
          </SettingsComponentContainer>
          <SettingsComponentContainer>
              <TextField>
                Receber notificações
              </TextField>
              <TextFieldInfo>
                soraiadasilva@gmail.com
              </TextFieldInfo>
          </SettingsComponentContainer>
        </ContainerSettings>

        <ButtonAboutRedefinir>
          <Text style={{color: '#223269', fontSize: 30, position: 'absolute'}}>
            Redefinir Senha
          </Text>
        </ButtonAboutRedefinir>

        <ButtonAboutSair>
          <Text style={{color: '#223269', fontSize: 30, position: 'absolute'}}>
            Sair
          </Text>
        </ButtonAboutSair>

      </ScrowCardsContainer>

    </Container>
  );
};

export default Settings;
