import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Country from './Country';
import { TextInput } from 'react-native';



export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [searched, setSearched] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                setSearched(data)
            });


    }, [])

    const handleSearched = (text) => {

        const filtered = countries.filter(country => country.name.common.includes(text));
        setSearched(filtered);
    }
    return (
        <View>

            <ScrollView >
                <Text style={styles.header}>Countries:{searched.length}</Text>
                <TextInput
                    onChangeText={handleSearched}
                    style={styles.input}>
                </TextInput>

                {

                    searched.map(country => <Country key={country.ccn3} country={country}></Country>)
                }
            </ScrollView>

        </View>


    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        marginTop: 50,
        color: '#363838'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

});

