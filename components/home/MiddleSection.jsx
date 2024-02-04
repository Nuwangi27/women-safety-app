import React from 'react';
import { View, Text, Image } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box'; 
import styles from './welcome.style';
import { COLORS, SIZES } from '../../constants';
const MiddleSection = () => {
  const images = [
    require('../../assets/slider1.png'),
    require('../../assets/slider2.jpg'),
    require('../../assets/slider7.jpg'),
    require('../../assets/slider4.jpg'),
    require('../../assets/slider5.jpg'),
    require('../../assets/slider6.jpg'),
 
    // Add more images if needed
  ];

  return (
   
      <View style={styles.container}>
      
      <SliderBox
  images={images}
  sliderBoxHeight={200} // Adjust the height as needed
  dotColor={COLORS.primary}
  inactiveDotColor={COLORS.gray}
  circleLoop={true}
  dotStyle={{ height: 10, width: 10, borderRadius: 50 }} // Corrected typo here
  imageLoadingColor={COLORS.gray}
  autoplay={true}
  autoplayInterval={1000}
/>

      </View>
   
  );
};
export default MiddleSection;