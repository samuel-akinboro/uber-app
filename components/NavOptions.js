import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen"
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen"
  }
]

const NavOptions = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity 
            style={tw`p-2 pl-6 pt-4 pb-8 bg-gray-200 m-2 w-40 ${index === 0 ? 'ml-0' : ''}`}
            onPress={()=> navigation.navigate(item.screen)}
          >
            <View>
              <Image
                source={{uri: item.image}}
                style={{
                  height: 120,
                  width: 120,
                  resizeMode: 'contain'
                }}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
              <Icon 
                name="arrowright" 
                type="antdesign" 
                color="white"
                style={tw`bg-black p-2 rounded-full mt-4 w-10`}
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default NavOptions