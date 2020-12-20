import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Swiper from 'react-native-swiper';

import Um from '../onBoarding/um';
import Dois from '../onBoarding/dois/dois';
import Tres from '../onBoarding/tres/tres';
import Quatro from '../onBoarding/quatro/quatro';
import Quinto from '../onBoarding/quinto/Quinto';

const Onboarding: React.FC = () => {
  return (
    <Swiper
      nextButton={<Text style={styles.buttonText}>PRÓXIMO</Text>}
      prevButton={<Text style={styles.buttonText}>VOLTAR</Text>}
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
            backgroundColor: '#78849E',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 80,
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: '#665EFF',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 80,
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
  buttonText: {
    color: '#030303',
    fontSize: 30,
  },
});

export default Onboarding;
