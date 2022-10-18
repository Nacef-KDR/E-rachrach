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
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';


export const Login = ({navigation}) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    
});

///email input
const textInputChange = (val) => {
    if( val.length > 0 ) {
        setData({
            ...data,
            email: val,
            check_textInputChange: true,
            
        });
    } else {
        setData({
            ...data,
            email: val,
            check_textInputChange: false,
            
        });
    }
}
///password input
const handlePasswordChange = (val) => {
    if( val.length >= 8 ) {
        setData({
            ...data,
            password: val,
            
        });
    } else {
        setData({
            ...data,
            password: val,
            
        });
    }
}
///toggle eye password
const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry
    });
}


return (
    
        
        <ImageBackground source={require('./../assets/palm1.jpg')} style={styles.container} >
            <Text style={styles.text_header}>Welcome!</Text> 
        
        
            
       
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome name='user-o'
                color="#05375a"
                size={20} />
                <TextInput
                placeholder='Your Email'
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ?
                <Animatable.View
                    >
                <Feather
                name='check-circle'
                color="green"
                size={20}
                />
                </Animatable.View>
                :null}
            </View>
            <Text style={[styles.text_footer, {marginTop:40}]}>Password</Text>
            <Animatable.View style={styles.action}>
                <Feather name='lock'
                color="#05375a"
                size={20} />
                <TextInput
                placeholder='Your Password'
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? 
                    <Feather
                    name='eye-off'
                    color="grey"
                    size={20}
                    /> 
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </Animatable.View>


            <TouchableOpacity onPress={()=>navigation.navigate('Profile')} style={styles.button}>
                
                <LinearGradient
                    colors={['#0a3012', '#01ab9d']}
                    style={styles.connect}
                    
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Connect</Text>
                </LinearGradient>
                

               
            </TouchableOpacity>


        </Animatable.View>
        </ImageBackground>
        
    );
};
let ScreenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
      flex: 2, 
      backgroundColor: '#2e4733',
      
      
    },
    header: {
        width: ScreenWidth,
        flex: 2,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 60,
    },
    footer: {
        flex: 2,
        
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginTop:5
        
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop:120,
        marginBottom:20,
        marginLeft:8
         
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 15
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 12,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        paddingTop:20
    },
    connect: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
      }
  });  