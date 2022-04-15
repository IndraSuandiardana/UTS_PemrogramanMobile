import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import Lightbox from 'react-native-lightbox-v2';
export default function App() {
  const clickHandler = () => {
    alert('Floating Button clicked')
  }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bottomIcon}>
        <View style={styles.iconRowUpper}>
        <View style={styles.logoWrapper}>
               <View style={styles.logoContainer}>
                  <Text>M</Text>
              </View>
            </View>
            <Entypo name="twitter" size={24} color="blue" />
            <MaterialCommunityIcons name="star-four-points-outline" size={24} color="black" />
          </View>
        </View>
      <ScrollView style={styles.container}>
       {data.map(val => {
         return(<View style={styles.wrapper}>
          <View style={styles.hederWrapper}>
            <View style={styles.iconWrapper}>
              <View style={styles.logoWrapper}>
               <View style={styles.logoContainer}>
                  <Text>{val.id}</Text>
              </View>
            </View>
              <Text style={styles.usernameText}>{val.author}</Text>
            </View>
            <View>
            <Entypo name="dots-three-vertical" size={22} color="black" />
            </View>
          </View>
          <Lightbox>
          <View style={styles.box}>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: val.url,
        }}
      />
        </View>
        </Lightbox>
        <View>
          <View style={styles.iconRow}>
          <EvilIcons name="comment" size={24} color="black" />
          <EvilIcons name="retweet" size={24} color="black" />
          <EvilIcons name="heart" size={24} color="black" />
          <EvilIcons name="share-google" size={24} color="black" />
          </View>
        </View>
          </View>)
       })}
      </ScrollView>
      
          <TouchableOpacity 
          style={styles.TouchableOpacity}
          onPress={clickHandler}>
            
            <Image
            style={styles.floatingButton}
            source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/79/fd/aa/79fdaaaa-4b93-4d66-89e9-3d8b721fff16/source/512x512bb.jpg'}} />
          </TouchableOpacity>
        <View style={styles.bottomIcon}>
        <View style={styles.iconRowBottom}>
        <Entypo name="home" size={24} color="black" />
        <EvilIcons name="search" size={24} color="black" />
        <EvilIcons name="bell" size={24} color="black" />
        <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 20,
  },
  wrapper:{
    marginTop: 10
  },
  scroll:{
    height: 150,
    backgroundColor: '#000',
  },
  box:{
    width: '100%',
    height: 300,
    backgroundColor: '#C2C',
    marginTop: 10,
    marginLeft: 60,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
    
    
  },
  touch:{
    backgroundColor: '#F54',
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10
  },
  tinyLogo:{
    width: '100%',
    height: '100%',
    
  },
  text: {
    fontSize: 30
  },
  iconWrapper:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoContainer:{
    backgroundColor: '#C2C2C2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
    
  },
  logoWrapper: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'red',
    padding: 2
  },
  hederWrapper:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  usernameText:{
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 16
  },
  iconRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 60,
    marginRight: 10,
    marginTop: 10
  },
  TouchableOpacity:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 70

  },
  floatingButton:{
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 100,
   
  },
  bottomIcon:{
    padding: 10
  },
  iconRowBottom:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  iconRowUpper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

const data=[
  {
    id: '0',
    author: 'Alejandro Escamilla',
    width: 5616,
    height: 3744,
    url: "https://static1.gamerantimages.com/wordpress/wp-content/uploads/2021/02/Genshin-Impact-Shows-Xiao.jpg",
  },
  {
    id: '1',
    author: 'Paul Jarvis',
    width: 5616,
    height: 3744,
    url: "https://th.bing.com/th/id/OIP.gLdOOkDJ98Kuvh3NTXHhnAHaEO?w=317&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: '2',
    author: 'Tina Rataj',
    width: 5616,
    height: 3744,
    url: "https://th.bing.com/th/id/OIP.3HKh6fmGuCSdit_IP2RbbQHaJy?w=144&h=190&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: '3',
    author: 'Lukas Budimaier',
    width: 5616,
    height: 3744,
    url: "https://th.bing.com/th/id/OIP.tGIIf7oOk9nCASU34RIGBQHaJf?w=163&h=208&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: '4',
    author: 'Danielle MacInnes',
    width: 5616,
    height: 3744,
    url: "https://th.bing.com/th/id/OIP.m8D-vsxS7ql3aRucVnk1dAHaEo?w=297&h=185&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: '5',
    author: 'Greg Rakozy',
    width: 5616,
    height: 3744,
    url: "https://th.bing.com/th/id/OIP.Nq4qS4A88k3hjW_oYNsUqQHaEo?w=275&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: '6',
    author: 'Vladimir Kudinov',
    width: 5616,
    height: 3744,
    url: "https://th.bing.com/th/id/OIP.Z3kIqaIx46Gp9PC-b339OQHaEK?w=299&h=180&c=7&r=0&o=5&pid=1.7",
  },
]