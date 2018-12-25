import React ,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
class App extends Component {
  state = {
    names : [
      {
        id : 0,
        name : 'Ben',
      },
      {
        id : 1,
        name : 'James',
      },
      {
        id : 2,
        name : 'Hems',
      },
      {
        id : 3,
        name : 'Eader',
      }
    ]
  }
  alertItemName(item)=>{
    alert(item.name);
  }
  render(){
    return(
        <View>
          {this.state.names.map((item, index)=>(
                          <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            onPress ={onPress=()=>this.alterItemName(item)}>
                            <Text style={styles.text}
                               {item.name}
                            </Text>
                          </TouchableOpacity>
            ))
        } 
        </View>
      )
  }
}
export default App;
const styles = StyleSheet.create({
  container : {
     padding: 10,
      marginTop: 3,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   }
  }
});