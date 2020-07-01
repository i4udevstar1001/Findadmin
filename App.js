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

function Home({ navigation }) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#E5E5E5'}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
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
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
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



          <View style={styles.subItem}>
            <View style={styles.subHeader}>
              <View style={{ width:'16%', justifyContent:'center' }}>
                  <Image source={require('./images/announce.png')}
                    style={{ width:20, height:20 }} />
              </View>
              <View style={{ width:'76%', justifyContent:'center' }}>
                  <Text style={styles.headerText}>Announcement</Text>
              </View>
              <View style={{ width:'8%', justifyContent:'center', alignItems:'flex-end' }}>
                  <Image source={require('./images/arrow_right.png')}
                    style={{ width:8, height:12 }} />
              </View>
            </View>
            <View style={styles.subContent}>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <View style={{width:'21%'}}>
                    <View style={{width:54, height:56, borderRadius:30, overflow:'hidden'}}>
                      <Image source={require('./images/photo1.png')}
                        style={{ width:54, height:56 }} />
                    </View>
                  </View>
                  <View style={{width:'79%'}}>
                      <Text style={styles.h2Text}>Good Afternoon, Ano!</Text>
                      <Text style={styles.itemText}>Account ID: 85149</Text>
                  </View>
              </View>
              <View style={{flexDirection:'row', justifyContent:'center', marginTop:30}}>
                  <View style={{width:'33.33%', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>alert('clicked button!')}
                       style={{alignItems:'center'}} >
                      <React.Fragment>
                        <Image source={require('./images/profile.png')}
                          style={{ width:30, height:30, marginBottom:7 }} />
                        <Text style={styles.linkText}>My Profile</Text>
                      </React.Fragment>
                    </TouchableOpacity>
                  </View>
                  <View style={{width:'33.33%', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>alert('clicked button!')}
                       style={{alignItems:'center'}} >
                      <React.Fragment>
                        <Image source={require('./images/document.png')}
                          style={{ width:30, height:30, marginBottom:7 }} />
                        <Text style={styles.linkText}>Documents</Text>
                      </React.Fragment>
                    </TouchableOpacity>
                  </View>
                  <View style={{width:'33.33%', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>alert('clicked button!')}
                       style={{alignItems:'center'}} >
                      <React.Fragment>
                        <Image source={require('./images/heart.png')}
                          style={{ width:30, height:30, marginBottom:7 }} />
                        <Text style={styles.linkText}>Wish List</Text>
                      </React.Fragment>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
          </View>


          
          <View style={[styles.subItem, styles.appPage]}>
            <View style={{flexDirection:'row'}}>
                <View style={{ width:'20%'}}>
                  <Image source={require('./images/application.png')}
                    style={{ width:40, height:28}} />
                </View>
                <View style={{ width:'80%'}}>
                  <Text style={styles.h2Text}>Applications</Text>
                </View>
            </View>
            <View style={{marginTop:12, marginLeft:8}}>
              <Text style={styles.normalText}>Every student could</Text>
              <Text style={[styles.normalText, styles.color1]}>submit 3 applications ></Text>
            </View>

            <View style={styles.submitArea}>
              <View style={{flexDirection:'row'}}>
                <View style={{ width:'33.33%', alignItems:'center' }}>
                  <TouchableOpacity onPress={()=>alert('clicked submit button!')}
                      style={styles.submitBtn} >
                      <Image source={require('./images/cross.png')}
                        style={{ width:16, height:16 }} />
                  </TouchableOpacity>
                </View>
                <View style={{ width:'33.33%', alignItems:'center' }}>
                  <TouchableOpacity onPress={()=>alert('clicked blank button!')}
                      style={styles.submitBlank} >
                  </TouchableOpacity>
                </View>
                <View style={{ width:'33.33%', alignItems:'center' }}>
                  <TouchableOpacity onPress={()=>alert('clicked blank button!')}
                      style={styles.submitBlank} >
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginTop:20 }}>
                <Text style={styles.submitText}>You haven't submitted any yet!</Text>
              </View>
            </View>
          </View>

          <View style={[styles.subItem, styles.collegePage]}>
            <Text style={styles.h2Text}>Colleges & Universities</Text>
            <Text style={styles.subTitle}>
              Search the colleges or the University
            </Text>
          </View>



        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
                <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
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
      <Drawer.Screen name="Home" component={Home} />
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
    fontFamily:'Work Sans', fontSize:14, lineHeight:16,
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
    color:'#191919', fontFamily:'Work Sans',
    fontSize:18, fontWeight:'bold',
  },
  itemText: {
    color:'#8E8E8E', fontFamily:'Work Sans',
    fontSize:12,
  },
  linkText: {
    color:'#191919', fontFamily:'Work Sans',
    fontSize:12,
  },
  appPage: {
    backgroundColor:'#F0FFE1', borderRadius:10,
    padding:15, alignItems:'flex-start',
    paddingBottom:30,
  },
  normalText: {
    color:'#192F45', fontSize:14,
    fontFamily:'Work Sans',
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
  submitBlank: {
    width:40, height:40, alignContent:'center',
    justifyContent:'center', alignSelf:'center', 
    borderRadius:20, borderWidth:1, borderStyle:'dashed'
  },
  submitText: {
    fontFamily:'Work Sans', color:'#8E8E8E',
    fontSize:14,
  },
  collegePage: {
    backgroundColor:'#FFFFFF', borderRadius:10,
    padding:20, alignItems:'flex-start'
  },
  subTitle: {
    color:'#191919', fontWeight:'500', marginTop:10,
    fontSize:14, fontFamily:'Work Sans'
  }
});
