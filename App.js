import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <View style={styles.fullPage}>
        <Text style={styles.title}>To do list</Text>

      <View style={styles.image}>
      <Image source={{
        width:200,
        height:150,
        marginBottom: 50,
        padding: 50,
        alignItems: 'center',
        uri: "https://previews.123rf.com/images/unitonevector/unitonevector1904/unitonevector190401774/123386364-team-entwickelt-anwendungsvektorillustration-das-entwicklungsteam-arbeitet-mit-anwendung-design-und-.jpg"
      }}
      />
      </View>
     
     
       <View style={styles.button}>
        <Button
          title="ADD"
          onPress={() => Alert.alert('You are going to add a new task!')}
        />
        <Button
          title="save"
          onPress={() => Alert.alert('Changes are saved')}
        />
      </View>

      <View style={styles.checkbox}>
      <View style={styles.checkboxLeft}>
      <TouchableOpacity style={styles.box}></TouchableOpacity>
      <Text style={styles.checkboxText}>Task 01</Text>
      </View>
      <View style={styles.round}></View>
     </View>

      <View style={styles.checkbox}>
      <View style={styles.checkboxLeft}>
      <TouchableOpacity style={styles.box}></TouchableOpacity>   
     <Text style={styles.checkboxText}>Task 02</Text>
      </View>
      <View style={styles.round}></View>
      </View>

      <View style={styles.checkbox}>
      <View style={styles.checkboxLeft}>
      <TouchableOpacity style={styles.box}></TouchableOpacity>
      <Text style={styles.checkboxText}>Task 03</Text>
      </View>
      <View style={styles.round}></View>
      </View>

      <View style={styles.checkbox}>
      <View style={styles.checkboxLeft}>
      <TouchableOpacity style={styles.box}></TouchableOpacity>
      <Text style={styles.checkboxText}>Task 04</Text>
      </View>
      <View style={styles.round}></View>
      </View>

      <View style={styles.checkbox}>
      <View style={styles.checkboxLeft}>
      <TouchableOpacity style={styles.box}></TouchableOpacity>
      <Text style={styles.checkboxText}>Task 05</Text>
      </View>
      <View style={styles.round}></View>
      </View>
       
      </View>
     
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aef6ff',
  },


  fullPage: {
    paddingTop: 40,
    paddingHorizontal: 10,
    fontFamily: 'Cochin',
  },


  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#00008B',
  },


  image:{
      justifyContent: 'center',
      alignItems: 'center'
    },


  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    color: '#3044b8',
  },


  checkbox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },


  checkboxLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },

  box: {
    width: 24,
    height: 24,
    borderWidth: 0.5,
    borderRadius: 5,
    marginRight: 15,
  },


  checkboxText: {
    maxWidth: '80%',
  },


  round: {
    width: 12,
    height: 12,
    borderColor: '#8b0000',
    borderWidth: 2,
    borderRadius: 5,
  },
});