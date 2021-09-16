
import { styles } from 'ansi-colors';
import React,{useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';

const App = ()=>{

  const[randomColor, setRandomColor] = useState("rgb(32,0,126)");
  
  const changeBg = () =>{
    let color= 'rgb('+
    Math.floor(Math.random()*256)+
      ','+
      Math.floor(Math.random()*256)+
      ','+
      Math.floor(Math.random()*256)+
      ')';
      setRandomColor(color);
  }

  const resetBg = ()=>{
    let rColor = 'rgb(0,0,0)'
    setRandomColor(rColor)
  }

  return(
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[style.container,{backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBg}>
          <Text style={style.text}>Tap me</Text>
        </TouchableOpacity>

        <View style={{backgroundColor:randomColor}}>
          <TouchableOpacity onPress={resetBg}>
            <Text style={style.reset}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const style=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase"
  },
  reset:{
    marginTop:20,
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase"
  }
})

export default App;