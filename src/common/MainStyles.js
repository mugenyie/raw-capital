import {StyleSheet} from 'react-native';
import Color from '../common/Color';

const MainStyles = StyleSheet.create({
    HeadingOne: {
        fontSize:18, fontFamily:'Montserrat-Regular'
    },
    HeadingOneLight: {
        fontSize:18, fontFamily:'Montserrat-Light'
    },
    Card: {
        borderRadius:8,
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#f8f8f8',
        elevation: 2
    },
    ButtonStyle:{
        backgroundColor:Color.PrimaryDark,
        justifyContent:'center',
        alignContent:'center',marginTop:20,
        borderRadius:4,elevation:4
    }
});

export default MainStyles;