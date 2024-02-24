import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      
      },
      wrapper: {
        backgroundColor: '#2196f3',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 5
    },
    scanner: {
        width: 540,
        height: 540,
    },
    
    inputHolder: {
        display: 'flex',
        flexDirection: 'row',
        width: 350,
        height: 50,
        margin: 30,
    },
    input: {
        backgroundColor: 'lightgrey',
        width: '80%',
        padding: 10,
        fontSize: 16 
      
      },
    button: { 
        width: 320,
        fontWeight: 'bold', 
        fontSize: 18,
        backgroundColor: '#007a37',
        margin: 20,
        textAlign: 'center',
        padding: 15,
        borderRadius: 50
    },
    buttonCopy: {
            width: "20%",
            height: "100%",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
            backgroundColor: 'white',
    },
    title: {
        fontSize: 22,
        fontWeight: '300',
        textAlign: 'center',
        margin: 10
    },

    radioGroup: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-around', 
        marginTop: 20, 
        borderRadius: 8, 
        backgroundColor: 'white', 
        padding: 16, 
        elevation: 4, 
        shadowColor: '#000', 
        shadowOffset: { 
            width: 0, 
            height: 2, 
        }, 
        shadowOpacity: 0.25, 
        shadowRadius: 3.84, 
    }, 
    radioButton: { 
        flexDirection: 'row', 
        alignItems: 'center', 
    }, 
    radioLabel: { 
        marginLeft: 8, 
        fontSize: 16, 
        color: '#333', 
    }, 
});