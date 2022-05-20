import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import NavOptions from '../components/NavOptions'

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://links.papareact.com/gzs'
          }}
        />
        {/* Nav options */}
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain'
  }
})