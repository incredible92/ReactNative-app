import * as React from 'react';
import { Text, View,Image, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import logo from './assets/Keys-logo1.jpg';
import user from './assets/icons8-user-male-100.png';
import quick from './assets/Quickbooks-Logo.jpg';
import oxygen from './assets/icons8-chat-64.png';
import favourite from './assets/favourite.jpg';
import bank from './assets/bank.jpg';
import movies from './assets/Movies-icon.png';
import location from './assets/findUs.jpg';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.navBar}>
    <Image style={styles.logo} source={logo} />
    <View> <Text style={styles.Text1}>Keystone</Text>
      <Text style={styles.Text1}>Bank</Text></View>
    </View>

     <View style={styles.icon}>
     <Image style={styles.user} source={user} />
     </View>
 <View style={styles.login}>Login
 </View>

 <View style={styles.wrapper}>

  <View style={styles.content1}>
   
   <View style={styles.icons}>
     <Image style={styles.image} source={quick} />
     <Text style={styles.Text}>Quick Bank</Text>
     </View>
    
     <View style={styles.icons}>
     <Image style={styles.image} source={oxygen} />
     <Text style={styles.Text}>Oxygen Chat</Text>
     </View>
    
     <View style={styles.icons}>
     <Image style={styles.image} source={favourite} />
     <Text style={styles.Text}>Favourites</Text>
     </View></View>
      
<View style={styles.content2}>
   
   <View style={styles.icons}>
     <Image style={styles.image} source={bank} />
     <Text style={styles.Text}>Open Account</Text>
     </View>
    
     <View style={styles.icons}>
     <Image style={styles.image} source={movies} />
     <Text style={styles.Text}>Movies</Text>
     </View>
    
     <View style={styles.icons}>
     <Image style={styles.image} source={location} />
     <Text style={styles.Text}>Find Us</Text>
     </View></View>

<View style={styles.line}></View>

 </View>

 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F5F5F5'
    
  },

  navBar: {
    flexDirection: 'row',
backgroundColor: '#4169E1',
height: 70,
width: '100%',
},

Text1: {
  color: 'white',
  fontWeight: '600',
  fontSize: 20,
  paddingVertical: 2,
  
},
logo: {
  width: 50,
  height: 50, 
  marginHorizontal: 18,
  marginVertical: 10,
  
},
user: {
  width: 90,
  height: 90,
},

icon: {
  marginHorizontal: 120,
   borderColor: 'white',
  marginVertical: 30,
  borderWidth: 5,
  width: 100,
  borderRadius: 50,

}, 



login: {
 alignItems: 'center', 
  borderColor: 'gray',
   borderWidth: 1,
   width: 120,
   fontWeight: 'bold',
   paddingVertical: 4,
    marginHorizontal: 105,
    borderRadius: 4,
    
     


},

content1: {
  flexDirection: 'row',
   
 
   
},

content2: {
  flexDirection: 'row',
   
   
  
   
},

icons: {
borderWidth: 1,
backgroundColor: 'white',
height: 85,
borderRadius: 50,
borderColor: 'gray',
width: 85,
 marginHorizontal: 10,
 marginVertical: 10,

},

image: {
  width: 60,
  height: 60,
  left: 13,
  top: 4,
  borderRadius: 50,
    resizeMode: 'contain'
  
      
},

Text: {
  textAlign: 'center',
  fontSize: 10,
  
},

line: {
  borderWidth: 1,
  width: '100%',
  borderBottomColor: 'gray'
}

});


   
