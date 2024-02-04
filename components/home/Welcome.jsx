import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import styles from "./welcome.style";
import { COLORS, SIZES } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";



const Welcome = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params;
  return (
   
     
    
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeText(COLORS.primary, SIZES.xSmall, SIZES.xLarge*1.5)}>
        Get involved and contribute to enhancing safety for both yourself and your local community.
        </Text>
        
      </View>

      <View style={styles.reportContainer}>
        <View style={styles.reportWrapper}>
          <View
            style={styles.reportInput}
          >
            <Text style={styles.reportText}>Report an Incident</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.reportBtn} onPressIn={() => navigation.navigate("LocationScreens", {user})}>
            <Ionicons
              name="send"
              size={SIZES.xLarge}
              color={COLORS.WHITE}
            />
          </TouchableOpacity>
        </View>
      </View>
      
    </View>

  );
};

export default Welcome;
