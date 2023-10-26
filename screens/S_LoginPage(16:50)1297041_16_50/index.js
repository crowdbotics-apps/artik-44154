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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ce39a62-a198-4208-ae3d-74e51d3fbf57"
        }}
        style={styles.ImageBackground_16_51}
      />
      <View style={styles.View_16_52}>
        <View style={styles.View_16_53} />
        <View style={styles.View_19_10} />
        <View style={styles.View_16_54} />
      </View>
      <View style={styles.View_16_55}>
        <View style={styles.View_16_56} />
        <View style={styles.View_16_57} />
        <View style={styles.View_16_58}>
          <Text style={styles.Text_16_58}>Username</Text>
        </View>
        <View style={styles.View_16_59}>
          <Text style={styles.Text_16_59}>Password</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5380236-9637-49cb-b44e-0a21c8158af6"
          }}
          style={styles.ImageBackground_16_60}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/149fb926-1d23-4f1d-a22b-6f49a4cdee90"
          }}
          style={styles.ImageBackground_16_63}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_16_65}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("31_2"))
        }
      >
        <View style={styles.View_16_66} />
        <View style={styles.View_16_67}>
          <Text style={styles.Text_16_67}>Login</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_16_73}>
        <View style={styles.View_16_70}>
          <Text style={styles.Text_16_70}>Artik Burp</Text>
        </View>
        <View style={styles.View_16_74}>
          <Text style={styles.Text_16_74}>Restaurant</Text>
        </View>
        <View style={styles.View_16_72}>
          <Text style={styles.Text_16_72}>
            Welcome Back Please Enter Your Detail
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe334f9f-6a14-404f-b2e4-123c944ced1b"
          }}
          style={styles.ImageBackground_19_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c19f17c-b71f-4d31-8fe3-d32975d33f13"
          }}
          style={styles.ImageBackground_19_8}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(4, 4, 4, 1)" },
  View_2: { height: hp("140%") },
  ImageBackground_16_51: {
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
  View_16_52: {
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
  View_16_53: {
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
    opacity: 0.5400000214576721
  },
  View_19_10: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.20000000298023224
  },
  View_16_54: {
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
  View_16_55: {
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
  View_16_56: {
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
  View_16_57: {
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
  View_16_58: {
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
  Text_16_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_59: {
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
  Text_16_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_16_60: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_16_63: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  TouchableOpacity_16_65: {
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
  View_16_66: {
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
  View_16_67: {
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
  Text_16_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_73: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("64%"),
    minHeight: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-9%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_70: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("-2%"),
    justifyContent: "flex-start"
  },
  Text_16_70: {
    color: "rgba(174, 162, 52, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.68,
    textTransform: "none"
  },
  View_16_74: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("-2%"),
    justifyContent: "flex-start"
  },
  Text_16_74: {
    color: "rgba(174, 162, 52, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -2.31,
    textTransform: "none"
  },
  View_16_72: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_16_72: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_19_9: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("27%")
  },
  ImageBackground_19_8: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("22%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
