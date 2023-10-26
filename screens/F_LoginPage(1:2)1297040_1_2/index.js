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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69669940-512e-461d-b1a5-3145b0a95c57"
        }}
        style={styles.ImageBackground_4_17}
      />
      <View style={styles.View_16_5}>
        <View style={styles.View_2_4} />
        <View style={styles.View_3_8} />
      </View>
      <View style={styles.View_4_18}>
        <View style={styles.View_2_5} />
        <View style={styles.View_5_23} />
        <View style={styles.View_3_12}>
          <Text style={styles.Text_3_12}>Username</Text>
        </View>
        <View style={styles.View_3_13}>
          <Text style={styles.Text_3_13}>Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/373f55a0-d20c-4713-ad74-5d8c6bfb5043"
          }}
          style={styles.ImageBackground_4_22}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfaec184-657c-4e1d-8607-5ea98ddca9af"
          }}
          style={styles.ImageBackground_5_24}
        />
      </View>
      <View style={styles.View_4_16}>
        <View style={styles.View_3_14} />
        <View style={styles.View_4_15}>
          <Text style={styles.Text_4_15}>Login</Text>
        </View>
      </View>
      <View style={styles.View_16_4}>
        <View style={styles.View_13_2}>
          <Text style={styles.Text_13_2}>Welcome</Text>
        </View>
        <View style={styles.View_16_2}>
          <Text style={styles.Text_16_2}>Artik Burp</Text>
        </View>
        <View style={styles.View_16_3}>
          <Text style={styles.Text_16_3}>To</Text>
        </View>
        <View style={styles.View_13_3}>
          <Text style={styles.Text_13_3}>
            Welcome Back Please Enter Your Detail
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(4, 4, 4, 1)" },
  View_2: { height: hp("140%") },
  ImageBackground_4_17: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_16_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_4: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(1, 1, 1, 1)",
    opacity: 0.8399999737739563
  },
  View_3_8: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("21%"),
    backgroundColor: "rgba(4, 1, 1, 1)",
    opacity: 0.8999999761581421
  },
  View_4_18: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_5: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(25, 34, 39, 1)"
  },
  View_5_23: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(25, 34, 39, 1)"
  },
  View_3_12: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_3_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_3_13: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_3_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_22: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_5_24: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_4_16: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("93%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_3_14: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("0%"),
    backgroundColor: "rgba(137, 125, 15, 1)"
  },
  View_4_15: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_4_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_4: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_13_2: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_13_2: {
    color: "rgba(158, 154, 113, 1)",
    fontSize: 50,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_2: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_16_2: {
    color: "rgba(158, 154, 113, 1)",
    fontSize: 50,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_3: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_16_3: {
    color: "rgba(158, 154, 113, 1)",
    fontSize: 50,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_3: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_13_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
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
