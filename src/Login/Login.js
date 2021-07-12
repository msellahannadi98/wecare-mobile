import React from 'react';
import { StyleSheet, TextInput, View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../../styles/global';
import { Formik } from 'formik';
import LogButton from '../../components/ButtonLogin';
import { auto } from 'async';

export default function Login() {

  return (
    
    <SafeAreaView style={{flex: 1}}>
        <ScrollView>
            <View style={[globalStyles.container, {backgroundColor: '#679297', justifyContent: 'center', paddingBottom: 50}]}>
                <Image style={{width: 300, height: 150, alignSelf: 'center',}}
                            source={require('./wecarelogo.png')}
                    />
                <Image style={{width: 300, height: 300, alignSelf: 'center',}}
                            source={require('./loginimg.png')}
                    />
                <Formik
                    initialValues={{ title: '', body: '', rating: '' }}
                    onSubmit={(values) => {
                    console.log(values);
                    }}
                >
                    {props => (
                    <View> 
                        <TextInput
                        style={globalStyles.input}
                        placeholder='User Name'
                        onChangeText={props.handleChange('title')}
                        value={props.values.username}
                        />

                        <TextInput
                        style={globalStyles.input}
                        multiline
                        placeholder='Password'
                        onChangeText={props.handleChange('body')}
                        value={props.values.password}
                        textContentType='password'
                        />

                                    
                        <LogButton  text='Log In'/>
                    </View>
                    )}
                </Formik>
            </View>
        </ScrollView>
    </SafeAreaView>
    
  );
}