import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/posts'
import { POST_FOOTER } from '../data/posts'
import BottomTabs from '../components/home/BottomTabs'
import { bottomTabIcons } from '../data/bottomTab'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} postFooter={POST_FOOTER} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  }
})

export default HomeScreen