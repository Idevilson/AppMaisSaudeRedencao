import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Swiper from 'react-native-swiper';

import Um from './um';
import Dois from './dois/dois';
import Tres from './tres/tres';
import Quatro from './quatro/quatro';
import Quinto from './quinto/Quinto';

const Onboarding: React.FC = () => {
  return (
    <Swiper
      nextButton={
        <View
          style={{
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 90 * 2,
            height: 70,
            padding: 15,
            backgroundColor: '#5CC859',
            borderBottomColor: '#A8E9B5',
          }}>
          <Text style={styles.buttonTextNext}>PRÓXIMO</Text>
        </View>
      }
      prevButton={
        <View
          style={{
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 90 * 2,
            height: 70,
            padding: 15,
            backgroundColor: '#E9EBEF',
            borderBottomColor: '#665EFF',
          }}>
          <Text style={styles.buttonTextBack}>VOLTAR</Text>
        </View>
      }
      buttonWrapperStyle={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        position: 'absolute',
        top: 310,
        left: 0,
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      style={styles.wrapper}
      showsButtons={true}
      loop={false}
      dot={
        <View
          style={{
            backgroundColor: '#D3D6DF',
            width: 9,
            height: 9,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 85,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: '#665EFF',
            width: 9,
            height: 9,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 85,
          }}
        />
      }>
      <View style={styles.slide1}>
        <Um />
      </View>
      <View style={styles.slide2}>
        <Dois />
      </View>
      <View style={styles.slide3}>
        <Tres />
      </View>
      <View style={styles.slide4}>
        <Quatro />
      </View>
      <View style={styles.slide5}>
        <Quinto />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  slide4: {
    flex: 1,
  },
  slide5: {
    flex: 1,
  },
  buttonTextNext: {
    color: '#fff',
    fontSize: 20,
  },
  buttonTextBack: {
    color: '#020202',
    fontSize: 20,
  },
});

export default Onboarding;
