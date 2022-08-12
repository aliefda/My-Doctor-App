/* eslint-disable prettier/prettier */
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
  ILBGHospital,
  ILHospitalBG,
} from '../../assets';
import {ListHospital} from '../../component';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILBGHospital} style={styles.background}>
        <Text style={styles.title}>Nearby klinik</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Klinik"
          name="Citra Bunga Merdeka"
          address="jln. bhayangkara 2"
          pic={DummyHospital1}
        />
        <ListHospital
          type="klinik Anak"
          name="Happy Family Kids"
          address="jln. bhayangkara 20"
          pic={DummyHospital2}
        />
        <ListHospital
          type="klinik"
          name="Tel medcom"
          address="jln. kemerdekaan 45"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
});
