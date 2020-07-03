import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';

export default class HeaderSection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <View style={styles.header}>
            <View style={{width:'20%', alignItems:'flex-start', justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                  <Image source={require('../../images/menu.png')}
                    style={{ width:20, height:20 }} />
                </TouchableOpacity>
            </View>
            <View style={{width:'60%', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                  <Image source={require('../../images/logo.png')}
                    style={{ width:150, height:49 }} />
                </TouchableOpacity>
            </View>
            <View style={{width:'20%', alignItems:'flex-end', justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>alert('clicked button!')}>
                  <Image source={require('../../images/announce.png')}
                    style={{ width:20, height:20 }} />
                </TouchableOpacity>
            </View>
          </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
      flexDirection:'row',
      backgroundColor:'#384555', shadowColor:"#000",
      shadowOffset:{ width:0, height:1 },
      shadowOpacity:0.1, shadowRadius:1, elevation:1,
      padding:6, paddingLeft:25, paddingRight:25,
    }
  });
  