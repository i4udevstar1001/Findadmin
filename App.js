import * as React from 'react';
import { 
  View, Text, Button, 
  SafeAreaView, ScrollView, 
  StyleSheet, StatusBar 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HomeScreen from './src/screens/Home';

function Notifications() {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#E5E5E5'}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor:'#E5E5E5', flex:1}}>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <View style={styles.header}>
            <View style={{width:'20%', alignItems:'flex-start', justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
                  <Image source={require('./images/menu.png')}
                    style={{ width:20, height:20 }} />
                </TouchableOpacity>
            </View>
            <View style={{width:'60%', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
                  <Image source={require('./images/logo.png')}
                    style={{ width:150, height:49 }} />
                </TouchableOpacity>
            </View>
            <View style={{width:'20%', alignItems:'flex-end', justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>alert('clicked button!')}>
                  <Image source={require('./images/announce.png')}
                    style={{ width:20, height:20 }} />
                </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, justifyContent:'center', 
    alignItems:'center', backgroundColor:'#E5E5E5',
    paddingBottom:20,
  },
  header: {
    flexDirection:'row',
    backgroundColor:'#384555', shadowColor:"#000",
    shadowOffset:{ width:0, height:1 },
    shadowOpacity:0.1, shadowRadius:1, elevation:1,
    padding:6, paddingLeft:25, paddingRight:25,
  },
  subItem: {
    width:'92%', alignItems:'center', shadowColor:"#000",
    shadowOffset:{ width:1, height:1 }, marginTop:20, 
    shadowOpacity:0.1, shadowRadius:1, elevation:2,
  },
  subHeader: {
    backgroundColor:'#3D8DBF', flexDirection:'row',
    padding:12, paddingLeft:15, paddingRight:15,
    borderTopRightRadius: 10, borderTopLeftRadius: 10,
  },
  headerText: {
    fontFamily:'WorkSans-Regular', fontSize:14, lineHeight:16,
    color:'#FFFFFF', fontWeight:'500'
  },
  subContent: {
    backgroundColor:'#FFFFFF', borderBottomLeftRadius:10,
    borderBottomRightRadius:10, padding:15, paddingTop:18,
    paddingBottom:30, shadowColor:"#000",
    shadowOffset:{ width:1, height:1 },
    shadowOpacity:0.1, shadowRadius:1, elevation:2
  },
  h2Text: {
    color:'#191919', fontFamily:'WorkSans-Bold',
    fontSize:18, 
  },
  itemText: {
    color:'#8E8E8E', fontFamily:'WorkSans-Regular',
    fontSize:12,
  },
  linkText: {
    color:'#191919', fontFamily:'WorkSans-Regular',
    fontSize:12,
  },
  appPage: {
    backgroundColor:'#F0FFE1', borderRadius:10,
    padding:15, alignItems:'flex-start',
    paddingBottom:30,
  },
  normalText: {
    color:'#192F45', fontSize:14,
    fontFamily:'WorkSans-Regular',
  },
  color1: {
    color:'#14A60E', fontWeight:'bold',
  },
  submitArea: {
    width:'100%', marginTop:15, paddingTop:30, 
    backgroundColor:'#ECECEC', justifyContent:'center',
    borderRadius:7, alignItems:'center',
    paddingBottom:30,
  },
  submitBtn: {
    width:40, height:40, alignContent:'center',
    justifyContent:'center', alignSelf:'center',
    backgroundColor:'#14A60E', borderRadius:20,
    alignItems:'center'
  },
  popularBtn: {
    width:20, height:25, alignContent:'center',
    justifyContent:'flex-end', alignSelf:'center',
    alignItems:'center'
  },
  submitBlank: {
    width:40, height:40, alignContent:'center',
    justifyContent:'center', alignSelf:'center', 
    borderRadius:20, borderWidth:1, borderStyle:'dashed'
  },
  submitText: {
    fontFamily:'WorkSans-Regular', color:'#8E8E8E',
    fontSize:14,
  },
  collegePage: {
    backgroundColor:'#FFFFFF', borderRadius:10,
    alignItems:'flex-start'
  },
  subTitle: {
    color:'#191919', fontWeight:'500', marginTop:10,
    fontSize:14, fontFamily:'WorkSans-Regular'
  },
  colLinks: {
    padding:5, borderWidth:1, borderColor:'#14A60E',
    borderRadius:5, alignItems:'center', 
    marginRight:4, marginTop:4,
    paddingTop:3, paddingBottom:3,
  },
  colText: {
    fontFamily:'WorkSans-Regular', color:'#14A60E',
    fontSize:12
  },
  recommended: {
    backgroundColor:'#E0F0FB', width:'100%', padding:20,
    borderBottomLeftRadius:10, borderBottomRightRadius:10,
    paddingTop:15, paddingBottom:30, paddingRight:10
  },
  fw600: {
    fontWeight:'600'
  },
  recLink: {
    fontFamily:'WorkSans-Regular', fontWeight:'600',
    fontSize:14, color:'#2D79AD'
  },
});
