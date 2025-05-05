import {Image, Linking, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contactList = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      phone: '+1-202-555-0101',
      profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
      linkedIn: 'https://www.linkedin.com/in/alicejohnson',
      website: 'https://alicejohnson.dev',
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      phone: '+1-202-555-0102',
      profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
      linkedIn: 'https://www.linkedin.com/in/bsmith',
      website: 'https://bobsmith.io',
    },
    {
      id: 3,
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      phone: '+1-202-555-0103',
      profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
      linkedIn: 'https://www.linkedin.com/in/charliedavis',
      website: 'https://charliedavis.dev',
    },
    {
      id: 4,
      name: 'Diana Moore',
      email: 'diana.moore@example.com',
      phone: '+1-202-555-0104',
      profileImage: 'https://randomuser.me/api/portraits/women/4.jpg',
      linkedIn: 'https://www.linkedin.com/in/dianamoore',
      website: 'https://dianamoore.me',
    },
    {
      id: 5,
      name: 'Ethan Clark',
      email: 'ethan.clark@example.com',
      phone: '+1-202-555-0105',
      profileImage: 'https://randomuser.me/api/portraits/men/5.jpg',
      linkedIn: 'https://www.linkedin.com/in/ethanclark',
      website: 'https://ethanclark.dev',
    },
  ];

  function websiteOpen(websiteUrl: string) {
    Linking.openURL(websiteUrl);
  }
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contactList.map(
          ({id, name, phone, profileImage, linkedIn, website}) => (
            <View style={styles.userCard} key={id}>
              <Image source={{uri: profileImage}} style={styles.userImage} />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userPhone}>{phone}</Text>
                <View style={styles.socialStyle}>
                  <Text
                    style={styles.userSocial}
                    onPress={() => websiteOpen(linkedIn)}>
                    LinkedIn
                  </Text>
                  <Text style={styles.socialPartition}>|</Text>
                  <Text
                    style={styles.userSocial}
                    onPress={() => websiteOpen(website)}>
                    Website
                  </Text>
                </View>
              </View>
            </View>
          ),
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 10,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 5,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor:'#BB2CD9',
    padding:5,
    borderRadius:7
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: 14,
    borderWidth:2
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFF',
  },
  userPhone: {
    fontSize: 12,
    color: 'white',
    fontWeight: '300',
  },
  socialStyle:{
    flexDirection:'row'
  },
  socialPartition:{
    marginLeft:3,
    marginRight:3,
    color:'white',
  },
  userSocial: {
    color:'white'    
  }
});
