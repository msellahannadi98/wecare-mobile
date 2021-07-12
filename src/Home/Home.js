import React, { Components } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Home() {
    
    return(
        <View style={styles.container}>
            <Image style={{width: 200, height: 200, alignSelf: 'center',}}
                source={require('./images/logowhite.png')}
            />
            <Text style={styles.title}>Clinic mangemnt System</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#367679',
        justifyContent: 'center',    
    },
    title: {
        color: '#fff',
        fontSize: 12,
        alignSelf: 'center',
    }
})