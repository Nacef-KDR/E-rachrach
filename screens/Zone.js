import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    FlatList,
    
    StyleSheet ,
    StatusBar,
    
    Dimensions,
    Image,
    ImageBackground,
    ScrollView,
    TouchableHighlight
  } from 'react-native';
import { Switch } from 'react-native-paper';
const {width} = Dimensions.get("screen");
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() ;
export const Zone = () => {
  return (
    <View style={{backgroundColor:'#019388',width:width,borderBottomEndRadius:35,borderBottomLeftRadius:35,flex:1/4}}>
        <Text style={{fontSize:25 , textAlign:'center', color:'white',padding:15}}>`Zone A`</Text>
        <Text style={{fontSize:15 , textAlign:'auto', color:'white', padding:10}}>space: 15km²</Text>
        <Text style={{fontSize:15 , textAlign:'auto', color:'white', padding:10}}>other information</Text>
        <View style={{
                paddingHorizontal:32,
                alignSelf:"center",
                marginTop:50,
                backgroundColor:"#FFF",
                height:260,
                elevation:1,
                width:270,
                borderRadius:15
            }}>
                <View style={{
                    flexDirection:"row",
                    paddingTop:20,
                    
                }}>
                    <Text style={{
                       
                        color:"#4b3ca7",
                        fontSize:20
                    }}>
                        Data
                    </Text>

                    <Text style={{
                        fontSize:20,
                        color:"#a2a2db",
                        paddingHorizontal:8
                    }}>
                        - - - - - - - - - - -
                    </Text>
                    <Text style={{
                     
                        color:"#4b3ca7",
                        fontSize:20
                    }}>
                        Value
                    </Text>
                </View>
               

               <View style={{
                   flexDirection:"row",
                   marginTop:-5,
                   alignItems:"center"
               }}>
                   
                   
               </View>

               <View style={{
                   flexDirection:"row",
                   marginTop:10,
                   alignItems:"center"
               }}>
                   <Text style={{
                      
                       fontSize:16,
                       color:"#522289"
                   }}>
                       {time}
                   </Text>
                  

               </View>
               


               <View style={{
                   flexDirection:"row",
                   marginTop:15,
                   alignItems:"center"
               }}>
                   
                  
               </View>

               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
               }}>
                   <Text 
                     style={{
                     
                        color:"#522289",
                        fontSize:14}}>
                       Temperature
                   </Text>

                   <Text 
                     style={{
                     
                        color:"#522289",
                        paddingLeft:100,
                        fontSize:16}}>
                       36°c
                   </Text>
               </View>
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   paddingTop:10
               }}>
                   <Text 
                     style={{
                     
                        color:"#522289",
                        fontSize:14}}>
                       Humidity
                   </Text>

                   <Text 
                     style={{
                     
                        color:"#522289",
                        paddingLeft:125,
                        fontSize:16}}>
                       80%
                   </Text>
               </View>

               <Text style={{
                   fontSize:17,
                   marginTop:-5,marginVertical:16,
                   color:"#a2a2db"
               }}>
                - - - - - - - - -  - - - -  - - - - - - -  -  
               </Text>
               <View style={{
                   flexDirection:"row",
                   marginTop:-20,
                   alignItems:"center"
               }}>
                  
                   
               </View>

               <View style={{
                   flexDirection:"row",
                   alignItems:"center"
               }}>
                   
                   
               </View>

               <TouchableHighlight
                underlayColor="#6600bb"
                style={{
                    width:200,
                    marginLeft:5,
                    elevation:2,
                    marginTop:25,
                    backgroundColor:"#44FEA1",
                    paddingVertical:13,
                    borderRadius:25,
                    alignSelf:"center"
                }}
               
               >
                   <Text style={{
                       
                       color:"#FFF",
                       textAlign:"center",
                       fontSize:18
                   }}>
                       Check More
                   </Text>
               </TouchableHighlight>

              
            </View>
            <Text style={{paddingTop:20, fontSize:18, fontStyle:'italic', marginHorizontal:10,textAlign:'center'}}>Control</Text>
            <View style={{paddingLeft:25,paddingTop:10, flexDirection:'row'}}>
                <Text style={{paddingTop:12}}>Elecrovanne</Text>
                <Switch ></Switch>
            </View>
            <View style={{paddingLeft:25, flexDirection:'row'}}>
                <Text style={{paddingTop:12}}>Motor</Text>
                <Switch ></Switch>
            </View>
    </View>
    
  )
}
