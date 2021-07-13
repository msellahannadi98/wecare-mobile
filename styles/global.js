import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  titleText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 15,
    // backgroundColor: 'gray',
  },
  left: {
    alignSelf: 'flex-end',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 15,
    borderRadius: 100,
  },
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
  title: {
    color: '#1B3E72',
    fontSize: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  p: {
      color: '#1B3E72',
      paddingBottom: 3,
      fontSize: 15,
  },
  pBold: {
    color: '#1B3E72',
    paddingBottom: 3,
    fontSize: 18,
    fontWeight: 'bold',
},
  cardI: {
      // backgroundColor: '#FFF',
      margin: 10,
      borderRadius: 10,
      paddingLeft: 20,
      paddingTop: 5,
  },
  whitecard: {
    margin: 30,
    marginVertical: 10,
    marginRight: 10,    
  },
  separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

// export const images = {
//   ratings: {
//     '1': require('../assets/rating-1.png'),
//     '2': require('../assets/rating-2.png'),
//     '3': require('../assets/rating-3.png'),
//     '4': require('../assets/rating-4.png'),
//     '5': require('../assets/rating-5.png'),
//   }
// };