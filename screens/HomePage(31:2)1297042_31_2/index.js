import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_34_38}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70f602a7-63b1-4b7e-b3a2-35e483548e67"
          }}
          style={styles.ImageBackground_58_2}
        />
        <View style={styles.View_33_32} />
      </View>
      <View style={styles.View_39_51}>
        <View style={styles.View_39_48} />
        <View style={styles.View_39_49}>
          <Text style={styles.Text_39_49}>Contact Us</Text>
        </View>
      </View>
      <View style={styles.View_39_50}>
        <View style={styles.View_39_2}>
          <Text style={styles.Text_39_2}>Spicy Aroma</Text>
        </View>
      </View>
      <View style={styles.View_39_4}>
        <Text style={styles.Text_39_4}>Welcome </Text>
      </View>
      <View style={styles.View_34_37}>
        <View style={styles.View_34_36} />
        <View style={styles.View_34_35}>
          <Text style={styles.Text_34_35}>Home</Text>
        </View>
        <View style={styles.View_50_26}>
          <Text style={styles.Text_50_26}>Account</Text>
        </View>
        <View style={styles.View_34_63}>
          <Text style={styles.Text_34_63}>POS</Text>
        </View>
        <View style={styles.View_34_64}>
          <Text style={styles.Text_34_64}>Staff</Text>
        </View>
        <View style={styles.View_34_66}>
          <Text style={styles.Text_34_66}>Report</Text>
        </View>
        <View style={styles.View_50_25}>
          <Text style={styles.Text_50_25}>Categories</Text>
        </View>
      </View>
      <View style={styles.View_47_14}>
        <View style={styles.View_47_17}>
          <Text style={styles.Text_47_17}>Artik Burp</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_34_38: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_58_2: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_33_32: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(5, 5, 6, 1)",
    opacity: 0.6899999976158142
  },
  View_39_51: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("123%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_48: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(246, 237, 180, 1)",
    opacity: 0.5
  },
  View_39_49: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_39_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_50: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_2: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("78%"),
    justifyContent: "flex-start"
  },
  Text_39_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 80,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_4: {
    width: wp("96%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_39_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 160,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_37: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_34_36: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(246, 237, 180, 1)",
    opacity: 0.5
  },
  View_34_35: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_35: {
    color: "rgba(251, 236, 106, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.99,
    textTransform: "none"
  },
  View_50_26: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_50_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.935,
    textTransform: "none"
  },
  View_34_63: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_63: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.935,
    textTransform: "none"
  },
  View_34_64: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.935,
    textTransform: "none"
  },
  View_34_66: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_34_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.935,
    textTransform: "none"
  },
  View_50_25: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_50_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.935,
    textTransform: "none"
  },
  View_47_14: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95%"),
    top: hp("123%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_47_17: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-94%"),
    top: hp("-119%"),
    justifyContent: "flex-start"
  },
  Text_47_17: {
    color: "rgba(174, 162, 52, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.68,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
