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
      <View style={styles.View_49_4}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12cde115-0f7d-44f0-8352-c07b41e5e3b2"
          }}
          style={styles.ImageBackground_49_5}
        />
        <View style={styles.View_49_6} />
      </View>
      <View style={styles.View_49_20}>
        <View style={styles.View_49_23}>
          <Text style={styles.Text_49_23}>Artik Burp</Text>
        </View>
      </View>
      <View style={styles.View_50_35}>
        <View style={styles.View_50_36} />
        <View style={styles.View_50_37}>
          <Text style={styles.Text_50_37}>Account</Text>
        </View>
        <View style={styles.View_50_38}>
          <Text style={styles.Text_50_38}>Home</Text>
        </View>
        <View style={styles.View_50_39}>
          <Text style={styles.Text_50_39}>POS</Text>
        </View>
        <View style={styles.View_50_40}>
          <Text style={styles.Text_50_40}>Staff</Text>
        </View>
        <View style={styles.View_50_41}>
          <Text style={styles.Text_50_41}>Report</Text>
        </View>
        <View style={styles.View_50_42}>
          <Text style={styles.Text_50_42}>Categories</Text>
        </View>
      </View>
      <View style={styles.View_50_43} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_49_4: {
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
  ImageBackground_49_5: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_49_6: {
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
  View_49_20: {
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
  View_49_23: {
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
  Text_49_23: {
    color: "rgba(174, 162, 52, 1)",
    fontSize: 34,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1.68,
    textTransform: "none"
  },
  View_50_35: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_50_36: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(55, 50, 39, 1)",
    opacity: 0.9800000190734863
  },
  View_50_37: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_50_37: {
    color: "rgba(174, 162, 52, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.99,
    textTransform: "none"
  },
  View_50_38: {
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
  Text_50_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.935,
    textTransform: "none"
  },
  View_50_39: {
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
  Text_50_39: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.935,
    textTransform: "none"
  },
  View_50_40: {
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
  Text_50_40: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.935,
    textTransform: "none"
  },
  View_50_41: {
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
  Text_50_41: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.935,
    textTransform: "none"
  },
  View_50_42: {
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
  Text_50_42: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.935,
    textTransform: "none"
  },
  View_50_43: {
    width: wp("57%"),
    minWidth: wp("57%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("25%"),
    backgroundColor: "rgba(151, 147, 147, 1)",
    opacity: 0.800000011920929
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
