/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Text, Image, Pressable } from 'react-native';

import Arrow from 'react-native-vector-icons/Feather';
import Share from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from '@react-navigation/native';


import {
  Container,
  Header,
  BackButton,
  ScrowCampaignsContainer,
  ContainerHealthCampaign,
  HeaderHealthCampaign,
  FooterHealthCampaign,
  ShareIconWhiteCicleContainer,
  ButtonAboutMore,
} from './styles';

const HealthCampaigns: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const navigation = useNavigation();

  return (
    <Container>

      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Arrow name="arrow-left" size={35} color="#fff" />
        </BackButton>
        <Text style={{color: '#fff', fontSize: 25, position: 'absolute'}}>
          CAMPANHAS DE SAÚDE
        </Text>
      </Header>

      <ScrowCampaignsContainer>
        <ContainerHealthCampaign>

          <HeaderHealthCampaign>
            <Image
              source={require('../../assets/doasangue.png')}
              style={{
                alignSelf: 'center',
                height: '100%',
                width: '100%',
                resizeMode: 'stretch',
              }}
            />
          </HeaderHealthCampaign>

          <FooterHealthCampaign>

            <ButtonAboutMore>
                <Text style={{
                  color: '#fff',
                  fontSize: 30,
                  position: 'absolute',
                  textDecorationLine: 'underline',
                }}>
                  SABER MAIS
                </Text>
            </ButtonAboutMore>

            <ShareIconWhiteCicleContainer>
              <Share name="share-2" size={35} color="#000"/>
            </ShareIconWhiteCicleContainer>
            <Pressable
                onPress={() => setLiked((isLiked) => !isLiked)}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}
            >
                <Icon  name={liked ? 'heart' : 'heart-o'} size={35} color={liked ? 'red' : 'black'}/>
            </Pressable>

          </FooterHealthCampaign>
        </ContainerHealthCampaign>


      </ScrowCampaignsContainer>
    </Container>
  );
};

export default HealthCampaigns;
