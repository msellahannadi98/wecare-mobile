import React from 'react';
import{ Text, View, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native'; 
import ActionButton from '../../components/Button';
import Cal from '../../components/Calender'; 


const Separator = () => (
    <View style={styles.separator} />
  );

export default function Dashboard({ navigation }){

    const viewNext = () => {
        navigation.navigate('NextClinic');
    }  

    return(
        <View style={[styles.container, {
            flexDirection: "column"
          }]}>
            
            <SafeAreaView style={styles.scrollContainer}>
                <ScrollView style={styles.scrollView}>
                    <View style={{padding: 10 }}>
                        <View style={styles.mainCard}>
                            <View style={[styles.card, {flex: 2,}]}>
                                <View style={[styles.cardTitle, {height: 40, flexDirection: "row", }]}>
                                    <Text style={styles.H1}>Next Cilic  - </Text>
                                    <View style={styles.txtLeft}><Text style={styles.H1}>Eye</Text></View>
                                </View>
                                <View style={[{flex: 6, flexDirection: "row" }]}>
                                    <View style={[styles.cardI, {flex: 2,}]}>
                                        <Text style={styles.p}>Date </Text>
                                        <Text style={styles.p}>Time </Text>
                                        <Text style={styles.p}>Room No</Text>
                                        <Text style={styles.p}>Doctor</Text>
                                    </View>
                                    <View style={[styles.cardI, {flex: 6,}]}>
                                        <Text style={styles.p}>- 2021/58/07</Text>
                                        <Text style={styles.p}>- 8.30 AM</Text>
                                        <Text style={styles.p}>- 65</Text>
                                        <Text style={styles.p}>- Dr. Uditha</Text>
                                    </View>
                                </View>
                                <View style={{width: 100, alignSelf: 'flex-end', margin: 10}}>
                                    <ActionButton text='Request >>' onPress={viewNext}/>
                                </View>
                            </View>

                            <View style={{alignSelf: 'center', padding: 10}}>
                                <Cal/>
                            </View>

                            <View style={[styles.card, {padding: 10}]}>
                                <Text style={{alignSelf: 'center'}}>FBC</Text>
                                <Image style={{width: 300, height: 150, alignSelf: 'center', marginVertical: 20}}
                                    source={require('./graph.png')}
                                />
                            </View>

                            <View style={[styles.card, {padding: 10}]}>
                                <Text style={{alignSelf: 'center'}}>FBC</Text>
                                <Image style={{width: 300, height: 150, alignSelf: 'center', marginVertical: 20}}
                                    source={require('./graph.png')}
                                />
                            </View>

                            <View style={[styles.card, {flex: 2,}]}>
                                <View style={[styles.cardTitle, {height: 40, flexDirection: "row", }]}>
                                    <Text style={styles.H1}>Past Clinics  - </Text>
                                    <View style={styles.txtLeft}><Text style={styles.H1}>Eye</Text></View>
                                </View>
                                <View style={[{flex: 6, flexDirection: "row" }]}>
                                    <View style={[styles.cardI, {flex: 2,}]}>
                                        <Text style={styles.p}>Date </Text>
                                        <Text style={styles.p}>Time </Text>
                                        <Text style={styles.p}>Room No</Text>
                                        <Text style={styles.p}>Doctor</Text>
                                    </View>
                                    <View style={[styles.cardI, {flex: 6,}]}>
                                        <Text style={styles.p}>- 2021/58/07</Text>
                                        <Text style={styles.p}>- 8.30 AM</Text>
                                        <Text style={styles.p}>- 65</Text>
                                        <Text style={styles.p}>- Dr. Uditha</Text>
                                    </View>
                                </View>
                                <View style={{width: 100, alignSelf: 'flex-end', margin: 10}}>
                                    <ActionButton text='View >>'/>
                                </View>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
         </View>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        // paddingTop: StatusBar.currentHeight,
        paddingTop: 20,
      },
      scrollView: { 
    },
    container: {
        flex: 1,
        // backgroundColor: '#459365'
    },
    mainCard: {
        // backgroundColor: '#459365',
        flex: 1,
    },
    card: {
        backgroundColor: '#C4DFE8',
        margin: 10,
        borderRadius: 20,
    },
    cardTitle: {
        backgroundColor: '#1B3E72',
        margin: 10,        
        marginBottom: 0,
        borderRadius: 10,
        padding: 5,
        alignContent: 'center',
    },
    H1: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    p: {
        color: '#1B3E72',
        paddingBottom: 3,
    },
    cardI: {
        // backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 10,
        paddingLeft: 20,
        paddingTop: 5,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    
})
