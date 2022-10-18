import React from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StyleSheet ,
  StatusBar,
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  LineChart,
 
} from 'react-native-chart-kit';


export const Profile = ({navigation}) => {
 
  return (
    <View>
      <View style={{
            flexDirection: "row",
            marginTop: 40,
            padding:5,
            alignItems: "center",
            paddingHorizontal: 30,
            backgroundColor:"#01ab9d55",
            marginHorizontal:10,
            borderRadius:8,
          }}
        >
          <Text style={{
              fontSize: 17,
              color: "#522289",
              
            }}>Esmail Thabet</Text>
          <Image
            source={require('./../assets/esmail.jpg')}
            
            
            
            style={{ 
              marginLeft: 140, 
              width:50, 
              height:50, 
              borderRadius:40, 
             
          }}
          />
        </View>

        <View>
          <Text style={{paddingTop:20, fontSize:18, fontStyle:'italic', marginHorizontal:10,textAlign:'center'}}>
            Discover your palms data
          </Text>
          <ScrollView  
            horizontal={true}
            style={{  marginTop: 10, paddingHorizontal:20, }}>
              <TouchableOpacity onPress={()=>navigation.navigate('Zone')}>
              <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 150,
                borderRadius: 15,
                padding: 5,
                marginHorizontal:25
              }}
            >
              <Image
                source={require('./../assets/zoneA.jpg')}
                style={{ width: 140, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontStyle:'italic',
                      fontSize: 21,
                      color: "#5fa2db",
                      marginHorizontal:20
                    }}
                  >
                    Zone A
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
              </View>
            </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 150,
                borderRadius: 15,
                padding: 5,
                marginHorizontal:25
              }}
            >
              <Image
                source={require('./../assets/zoneB.png')}
                style={{ width: 140, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontStyle:'italic',
                      fontSize: 21,
                      color: "#5fa2db",
                      marginHorizontal:20
                    }}
                  >
                    Zone B
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
              </View>
            </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 150,
                borderRadius: 15,
                padding: 5,
                marginHorizontal:25
              }}
            >
              <Image
                source={require('./../assets/zoneA.jpg')}
                style={{ width: 140, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontStyle:'italic',
                      fontSize: 21,
                      color: "#5fa2db",
                      marginHorizontal:20
                    }}
                  >
                    Zone C
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
              </View>
            </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View
              style={{
                backgroundColor: "#FEFEFE",
                height: 200,
                width: 150,
                borderRadius: 15,
                padding: 5,
                marginHorizontal:25
              }}
            >
              <Image
                source={require('./../assets/zoneB.png')}
                style={{ width: 140, borderRadius: 10, height: 130 }}
              />
              <View
                style={{
                  flexDirection: "row",
                  width: 150,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                  }}
                >
                  <Text
                    style={{
                      fontStyle:'italic',
                      fontSize: 21,
                      color: "#5fa2db",
                      marginHorizontal:20
                    }}
                  >
                    Zone D
                  </Text>
                </View>
                <Icon name="map-marker" size={25} color="#ff5c83" />
              </View>
            </View>
              </TouchableOpacity>
             
            
          </ScrollView>
          <Text style={{paddingTop:20, fontSize:18, fontStyle:'italic', marginHorizontal:10,textAlign:'center'}}> Temperature of the week</Text>
          <ScrollView horizontal={true}>
            
          <>
          <View style={{marginHorizontal:10}}>
              <Text style={styles.header}>Temperature zone A</Text>
              <LineChart
                data={{
                  labels: ['Mon', 'tue', 'wedn', 'thur','fri','sat','sun'],
                  datasets: [
                    {
                      data: [
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get('window').width - 46} // from react-native
                height={220}
                yAxisLabel={'T='}
                chartConfig={{
                  backgroundColor: '#1cc910',
                  backgroundGradientFrom: '#43ff64d9',
                  backgroundGradientTo: '#efeff0',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
          </View>
      
            </>   
            <>
            <View style={{marginHorizontal:10}}>
              <Text style={styles.header}>Temperature zone B</Text>
              <LineChart
                data={{
                  labels: ['Mon', 'tue', 'wedn', 'thur','fri','sat','sun'],
                  datasets: [
                    {
                      data: [
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get('window').width - 46} // from react-native
                height={220}
                yAxisLabel={'T='}
                chartConfig={{
                  backgroundColor: '#1cc910',
                  backgroundGradientFrom: '#43ff64d9',
                  backgroundGradientTo: '#efeff0',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
          </View>
    </>   
    <>
            <View style={{marginHorizontal:10}}>
              <Text style={styles.header}>Temperature zone C</Text>
              <LineChart
                data={{
                  labels: ['Mon', 'tue', 'wedn', 'thur','fri','sat','sun'],
                  datasets: [
                    {
                      data: [
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get('window').width - 46} // from react-native
                height={220}
                yAxisLabel={'T='}
                chartConfig={{
                  backgroundColor: '#1cc910',
                  backgroundGradientFrom: '#43ff64d9',
                  backgroundGradientTo: '#efeff0',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
          </View>
    </> 
    <>
            <View style={{marginHorizontal:10}}>
              <Text style={styles.header}>Temperature zone D</Text>
              <LineChart
                data={{
                  labels: ['Mon', 'tue', 'wedn', 'thur','fri','sat','sun'],
                  datasets: [
                    {
                      data: [
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                        Math.random() * 60,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get('window').width - 46} // from react-native
                height={220}
                yAxisLabel={'T='}
                chartConfig={{
                  backgroundColor: '#1cc910',
                  backgroundGradientFrom: '#43ff64d9',
                  backgroundGradientTo: '#efeff0',
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                }}
                bezier
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
          </View>
    </> 
          </ScrollView>
        </View>
    </View>
    
        
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
    
  },
  header: {
    textAlign: 'center',
    fontSize: 15,
    paddingTop: 10,
    color:'green'
    
    
  },
});
