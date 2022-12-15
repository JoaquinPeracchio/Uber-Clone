import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:12
    },
    middle:{
        flex:1,
    },
    last:{
    width:100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end'
    },
    price:{
    marginHorizontal:5,
    fontWeight:'bold',
    fontSize:14,
    color:'black'
    },
    image:{
        width:60,
        height:60,
        resizeMode:'contain',
        marginRight:5
        
    },
    type:{
        fontWeight:'bold',
        fontSize:13,
        color:'black'
    }


})
export default styles