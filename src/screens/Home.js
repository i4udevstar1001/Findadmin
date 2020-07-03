import * as React from 'react';
import { 
  View, Text, Button, 
  SafeAreaView, ScrollView, 
  StyleSheet, StatusBar, 
  Dimensions,
} from 'react-native';
import { Image } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
import HeaderSection from '../common/header';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#E5E5E5'}}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="white" />

          <HeaderSection title='Header' />


          <View style={styles.subItem}>
            <View style={styles.subHeader}>
              <View style={{ width:'13%', justifyContent:'center' }}>
                  <Image source={require('../../images/announce.png')}
                    style={{ width:20, height:20 }} />
              </View>
              <View style={{ width:'79%', justifyContent:'center' }}>
                  <Text style={styles.headerText}>Announcement</Text>
              </View>
              <View style={{ width:'8%', justifyContent:'center', alignItems:'flex-end' }}>
                  <Image source={require('../../images/arrow_right.png')}
                    style={{ width:8, height:12 }} />
              </View>
            </View>
            <View style={styles.subContent}>
              <View style={{flexDirection:'row', justifyContent:'center'}}>
                  <View style={{width:'21%'}}>
                    <View style={{width:54, height:56, borderRadius:30, overflow:'hidden'}}>
                      <Image source={require('../../images/photo1.png')}
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
                        <Image source={require('../../images/profile.png')}
                          style={{ width:30, height:30, marginBottom:7 }} />
                        <Text style={styles.linkText}>My Profile</Text>
                      </React.Fragment>
                    </TouchableOpacity>
                  </View>
                  <View style={{width:'33.33%', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>alert('clicked button!')}
                      style={{alignItems:'center'}} >
                      <React.Fragment>
                        <Image source={require('../../images/document.png')}
                          style={{ width:30, height:30, marginBottom:7 }} />
                        <Text style={styles.linkText}>Documents</Text>
                      </React.Fragment>
                    </TouchableOpacity>
                  </View>
                  <View style={{width:'33.33%', alignItems:'center', justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=>alert('clicked button!')}
                      style={{alignItems:'center'}} >
                      <React.Fragment>
                        <Image source={require('../../images/heart.png')}
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
                  <Image source={require('../../images/application.png')}
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
                      <Image source={require('../../images/cross.png')}
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
            <View style={{ padding:20 }}>
              <Text style={styles.h2Text}>Colleges & Universities</Text>
              <Text style={styles.subTitle}>
                Search the colleges or the University
              </Text>

              <View style={{ marginTop:10, flexDirection:'row', flexWrap:'wrap' }}>
                <TouchableOpacity onPress={()=>alert('Undergraduate')}
                  style={styles.colLinks} >
                  <Text style={styles.colText}>Undergraduate</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Postgraduate')}
                  style={styles.colLinks} >
                  <Text style={styles.colText}>Postgraduate</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Online Distance Learning Undergraduate')}
                  style={styles.colLinks} >
                  <Text style={styles.colText}>Online Distance Learning Undergraduate</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('Online Distance Learning Postgraduate')}
                  style={styles.colLinks} >
                  <Text style={styles.colText}>Online Distance Learning Postgraduate</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center', marginTop:20 }}>
                <TouchableOpacity onPress={()=>alert('Search button is clicked!')}
                  style={styles.searchBtn} >
                  <Text style={styles.btnText}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('alert')}>
                    <Text style={styles.linkText1}>See more courses  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('alert')}>
                    <Image source={require('../../images/arrow_right_green.png')}
                        style={{ width:12, height:12 }} />
                </TouchableOpacity>
              </View>

            </View>

            <View style={styles.recommended}>
              <Text style={[styles.h2Text, styles.fw600]}>Recommended for you</Text>
              <View style={{ flexDirection:'row' }}>
                <Text style={styles.subTitle}>Most Popular  </Text>
                <TouchableOpacity onPress={()=>alert('1')}
                    style={styles.popularBtn} >
                    <Image source={require('../../images/ellipse1.png')}
                      style={{ width:8, height:8 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('2')}
                    style={styles.popularBtn} >
                    <Image source={require('../../images/ellipse2.png')}
                      style={{ width:8, height:8 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('3')}
                    style={styles.popularBtn} >
                    <Image source={require('../../images/ellipse2.png')}
                      style={{ width:8, height:8 }} />
                </TouchableOpacity>
              </View>

              <View style={{ marginTop:15, flexDirection:'row' }}>
                <View style={{ width:'92%' }}>
                  <TouchableOpacity onPress={()=>alert('1')}>
                    <Text style={styles.recLink}>
                      International University Malaya Wales (IUMW)
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.submitText}>
                    Kuala Lumpur, Malaysia
                  </Text>
                </View>
                <View style={{ width:'8%', marginTop:3 }}>
                  <TouchableOpacity onPress={()=>alert('will change heart image')}>
                    <Image source={require('../../images/heart_red.png')}
                      style={{ width:20, height:20 }} />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginTop:15, flexDirection:'row' }}>
                <View style={{ width:'92%' }}>
                  <TouchableOpacity onPress={()=>alert('2')}>
                    <Text style={styles.recLink}>
                      International University Malaya Wales (IUMW)
                    </Text>
                  </TouchableOpacity>
                  <Text style={styles.submitText}>
                    Kuala Lumpur, Malaysia
                  </Text>
                </View>
                <View style={{ width:'8%', marginTop:3 }}>
                  <TouchableOpacity onPress={()=>alert('will change heart image')}>
                    <Image source={require('../../images/heart_out.png')}
                      style={{ width:20, height:20 }} />
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </View>


          <View style={[styles.subItem, styles.eventPage]}>
            <Text style={styles.h2Text}>Events</Text>

            <View style={{ width:'100%', marginTop:10, marginBottom:20 }}>
              <Calendar
                // Initially visible month. Default = Date()
                current={'2020-07-02'}
                markedDates={{
                  '2020-07-06': {selected: true, selectedColor: '#3D8DBF'},
                  '2020-07-16': {selected: true, selectedColor: '#3D8DBF'}
                }}
                style={{ width:'100%' }}
                theme={{
                  indicatorColor: '#191919',
                  textDayFontFamily: 'WorkSans-Regular',
                  textSectionTitleColor:'#191919',
                  textSectionTitleDisabledColor: '#8E8E8E',
                  textDayHeaderFontFamily: 'WorkSans-Bold',
                  textDayHeaderFontSize: 10,
                  textDayFontSize:12,                  
                }}
               />
            </View>
            <View style={{ flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
              <Text style={[styles.h2Text, styles.fw600]}>Upcoming Events     </Text>
              <Image source={require('../../images/list_blue.png')}
                style={{ width:7, height:7 }} />
              <Text style={styles.thinText}>Virtual Events</Text>
            </View>

            <View>
              <View style={[styles.upcomingWrap, styles.bottomBorder]}>
                <View style={{ width:'7%', marginTop:6 }}>
                  <Image source={require('../../images/list_blue.png')}
                    style={{ width:7, height:7 }} />
                </View>
                <View style={{ width:'93%' }}>
                    <TouchableOpacity onPress={()=>alert('clicked button!')}>
                      <Text style={styles.recLink}>Virtual Undergraduate Open Day | Aston University |</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection:'row' }}>
                      <View style={{ width:'50%', alignItems:'flex-start', marginTop:5 }}>
                        <Text style={styles.normalText}>18 Jun, Thu 17:00 EDT (-04:00)</Text>
                      </View>
                      <View style={{ width:'50%', alignItems:'flex-end' }}>
                        <TouchableOpacity onPress={()=>alert('Book button is clicked!')}
                          style={styles.bookBtn} >
                          <Text style={styles.btnText}>Book</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>
              </View>

              <View style={styles.upcomingWrap}>
                <View style={{ width:'7%', marginTop:6 }}>
                  <Image source={require('../../images/list_blue.png')}
                    style={{ width:7, height:7 }} />
                </View>
                <View style={{ width:'93%' }}>
                    <TouchableOpacity onPress={()=>alert('clicked button!')}>
                      <Text style={styles.recLink}>Virtual Undergraduate Open Day | Aston University |</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection:'row' }}>
                      <View style={{ width:'50%', alignItems:'flex-start', marginTop:5 }}>
                        <Text style={styles.normalText}>18 Jun, Thu 17:00 EDT (-04:00)</Text>
                      </View>
                      <View style={{ width:'50%', alignItems:'flex-end' }}>
                        <TouchableOpacity onPress={()=>alert('Book button is clicked!')}
                          style={styles.bookBtn} >
                          <Text style={styles.btnText}>Book</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>
              </View>
            </View>

            <View style={{ flexDirection:'row', alignItems:'center', marginTop:10, alignSelf:'flex-end' }}>
                <TouchableOpacity onPress={()=>alert('alert')}>
                    <Text style={styles.linkText1}>See more courses  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>alert('alert')}>
                    <Image source={require('../../images/arrow_right_green.png')}
                        style={{ width:12, height:12 }} />
                </TouchableOpacity>
            </View>

          </View>

          <View style={[styles.subItem, styles.newsfeedPage]}>
            <Text style={styles.h2Text}>Newsfeed</Text>
              <ScrollView 
                style={{ width:'100%', maxHeight:Dimensions.get('window').height*0.5, flex:1 }}
                nestedScrollEnabled={true}
                alwaysBounceHorizontal={true}>
                
                <View style={styles.feedItem}>
                  <View style={{ flexDirection:'row' }}>
                    <View style={{ width:'16%' }}>
                      <TouchableOpacity onPress={()=>alert('alert')}
                        style={{ width:35, height:35, borderRadius:17, overflow:'hidden' }}>
                        <Image source={require('../../images/mark1.png')}
                          style={{ width:35, height:35 }} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ width:'84%' }}>
                      <TouchableOpacity onPress={()=>alert('alert')}>
                        <Text style={styles.feedLink}>Middlesex University-Dubai</Text>
                      </TouchableOpacity>
                      <Text style={styles.itemText}>12 May</Text>
                    </View>
                  </View>

                  <View style={{ marginTop:15, marginBottom:10 }}>
                    <Text style={styles.normalText}>
                      Students and faculty from MDX Dubai take on the Lip Sync Challenge width
                      UPTOWN FUNK for the Class of 2019 Graduation Ceremony! #MDXDubai
                    </Text>
                  </View>

                  <View><Text>Video Area</Text></View>

                  <View style={{flexDirection:'row', marginTop:10 }}>
                      <TouchableOpacity onPress={()=>alert('Like')}>
                        <View style={{ flexDirection:'row' }}>
                          <Image source={require('../../images/like.png')}
                            style={{ width:15, height:15, marginTop:2 }} />
                          <Text style={styles.recLink}> 18 Likes    </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>alert('Comments')}>
                        <View style={{ flexDirection:'row' }}>
                          <Text style={styles.recLink}> 3 Comments  </Text>
                          <Image source={require('../../images/arrow_bottom_blue.png')}
                            style={{ width:10, height:10, marginTop:6 }} />
                        </View>
                      </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.feedItem}>
                  <View style={{ flexDirection:'row' }}>
                    <View style={{ width:'16%' }}>
                      <TouchableOpacity onPress={()=>alert('alert')}
                        style={{ width:35, height:35, borderRadius:17, overflow:'hidden' }}>
                        <Image source={require('../../images/mark1.png')}
                          style={{ width:35, height:35 }} />
                      </TouchableOpacity>
                    </View>
                    <View style={{ width:'84%' }}>
                      <TouchableOpacity onPress={()=>alert('alert')}>
                        <Text style={styles.feedLink}>Middlesex University-Dubai</Text>
                      </TouchableOpacity>
                      <Text style={styles.itemText}>12 May</Text>
                    </View>
                  </View>

                  <View style={{ marginTop:15, marginBottom:10 }}>
                    <Text style={styles.normalText}>
                      Students and faculty from MDX Dubai take on the Lip Sync Challenge width
                      UPTOWN FUNK for the Class of 2019 Graduation Ceremony! #MDXDubai
                    </Text>
                  </View>

                  <View><Text>Video Area</Text></View>

                  <View style={{flexDirection:'row', marginTop:10 }}>
                      <TouchableOpacity onPress={()=>alert('Like')}>
                        <View style={{ flexDirection:'row' }}>
                          <Image source={require('../../images/like.png')}
                            style={{ width:15, height:15, marginTop:2 }} />
                          <Text style={styles.recLink}> 18 Likes    </Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>alert('Comments')}>
                        <View style={{ flexDirection:'row' }}>
                          <Text style={styles.recLink}> 3 Comments  </Text>
                          <Image source={require('../../images/arrow_bottom_blue.png')}
                            style={{ width:10, height:10, marginTop:6 }} />
                        </View>
                      </TouchableOpacity>
                  </View>
                </View>

              </ScrollView>
          </View>
          
        </View>


        <View style={styles.container}>
          <View style={[styles.subItem, styles.needHelp]}>
            
            <Text style={[styles.h2Text, styles.whiteColor]}>Need Help?</Text>
            
          </View>

        </View>


      </ScrollView>
    </SafeAreaView>
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
    color:'#FFFFFF', fontWeight:'bold'
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
    color:'#192F45', fontSize:14, lineHeight:18,
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
    color:'#191919', fontWeight:'bold', marginTop:10,
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
    fontWeight:'bold'
  },
  whiteColor: {
    color:'#FFFFFF'
  },
  recLink: {
    fontFamily:'WorkSans-Regular', fontWeight:'bold',
    fontSize:14, color:'#2D79AD'
  },
  feedLink: {
    fontFamily:'WorkSans-Bold', lineHeight:17,
    fontSize:14, color:'#2D79AD'
  },
  eventPage: {
    backgroundColor:'#FFFFFF', borderRadius:10,
    alignItems:'flex-start', padding:20, paddingTop:15,
  },
  searchBtn: {
    backgroundColor:'#14A60E', borderRadius:5,
    padding:12, paddingLeft:33, paddingRight:33,
    marginRight:20
  },
  btnText: {
    color:'#FFFFFF', fontSize:16, fontFamily:'WorkSans-Bold'
  },
  linkText1: {
    color:'#14A60E', fontSize:14, fontFamily:'WorkSans-Bold'
  }, 
  thinText: {
    fontFamily:'WorkSans-Regular', fontSize:12,
    color:'#3D8DBF', marginLeft:8
  },
  upcomingWrap: {
    flexDirection:'row', paddingBottom:15, 
    paddingLeft:5, marginTop:15,
  },
  bottomBorder: {
    borderBottomWidth:1, borderBottomColor:'#ACACAC', 
  },
  bookBtn: {
    backgroundColor:'#2D79AD', borderRadius:5,
    padding:11, paddingLeft:35, paddingRight:35,
    paddingBottom:12,
  },
  newsfeedPage: {
    backgroundColor:'#FFFFFF', borderRadius:10,
    alignItems:'flex-start', padding:20, paddingTop:15,
  },
  feedItem: {
    borderBottomWidth:1, borderBottomColor:'#ACACAC',
    paddingTop:15, paddingBottom:15,
  },
  needHelp: {
    backgroundColor:'#3D8DBF', borderRadius:10,
    alignItems:'flex-start', padding:20, paddingTop:15,
    marginTop:0,
  }
});
