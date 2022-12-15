import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputBox:{
        backgroundColor:'#d9d9d9',
        margin:8,
        padding:8,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    inputText:{
        fontSize:16,
        fontWeight:'600',
        color:'6e6e6e'


    },
    containerTimer:{
        flexDirection:'row',
        width:100,
        padding:8,
        justifyContent: 'space-between',
        backgroundColor:'white',
        borderRadius:65 ,


    },
    row:{
        flexDirection:'row',
        padding:10,
        marginLeft:5,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'#bdbdbd'
        
    },
    iconContainer:{
        backgroundColor :'#b3b3b3',
        padding:3,
        borderRadius:50
    },
    destination:{
        marginLeft:10,
        fontWeight:'690',
        fontSize:14,

    },

})

export default styles