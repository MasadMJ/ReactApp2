import React from 'react';
import { Text, TextStyle,StyleSheet, View,Dimensions } from 'react-native';

const Footer: React.FC = () => {

const { width, height } = Dimensions.get('window');
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => size + (horizontalScale(size) - size) * factor;


  const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        marginTop: verticalScale(100),
        paddingStart: 10,
    },
    containerText: {
        fontSize: moderateScale(18)
    }
 });
 

  return (
    <View>
      <Text style={styles.container}>
        This is a Footer, it has italic, bold and underline text inside
      </Text>
    </View>
  );
};

export default Footer;
