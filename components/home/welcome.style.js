import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
 
   
  },
  welcomeText: (color, top, size) => ({
    fontFamily: "semibold",
    fontSize: size - 12,
    marginTop: top,
    color: color,
    marginHorizontal: SIZES.medium,
    justifyContent: "center",
    alignContent: "center",
    flex:1,
   

  
   
  
  }),
  reportContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: SIZES.medium,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical: SIZES.medium,
    height: 50,
    marginTop:80,
   
  },
  reportWrapper: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
    alignItems: "center", // Center horizontally
    justifyContent: "center", // Center vertically
    display:'flex'
  },
  reportInput: {
    fontFamily: "regular",
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.small,
  },
  reportBtn: {
    width: 50,
    height: "100%",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },

  
  reportText: {
    fontFamily: "semibold",
    color: COLORS.WHITE,
    textAlign: "center",
  marginVertical:10,
    alignItems: "center", // Center vertically
   
  },
  coverImg: {
    height: SIZES.height / 3 ,
    width: "100%",
    resizeMode: "contain",
    marginTop:-10,
    padding:10

  },
  iconStyle: {
    marginRight: 10
  },
});

export default styles;
