import React , {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput ,TouchableOpacity} from 'react-native';


export default class Logo extends Component<{}>{
    
  render() {
  return (
 <View style={styles.container}>
  
    <TextInput
      style={styles.inputBox} placeholder="Email"
      placeholderTextColor="#ffffff"
      selectionColor="#fff"
      keyboardType="email-address"
      onSubmitEditing={()=> this.password.focus()}
      />
    <TextInput
      style={styles.inputBox} placeholder="Password"
      secureTextEntry={true}
      placeholderTextColor="#ffffff"
      ref={(input)=> this.password = input}
      />
        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> {this.props.type}</Text>
        </TouchableOpacity>
  </View>
  );
  }
}



const styles = StyleSheet.create({
container: {
flexGrow: 1,

alignItems :'center',
justifyContent: 'center',
},

inputBox: {height: 55, width:300, 
 backgroundColor:'rgba(255,255,255,0.3)', 
borderRadius:25, 
paddingHorizontal:16,
fontSize:16,
color:'#ffffff',
marginVertical: 10
},
button:{
    backgroundColor:"#00CED1",
    borderRadius:25, 
    width:300, 
    marginVertical: 10,
    paddingVertical:13
},
buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
}

});