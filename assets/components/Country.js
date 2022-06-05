import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Country({ country }) {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Country:{country.name.common}</Text>
            <Image style={{ width: 200, height: 120 }} source={{ uri: country.flags.png }}></Image>
        </View >
    )
}