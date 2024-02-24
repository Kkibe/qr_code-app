import React, {useState, useEffect, useContext} from 'react';
import { Text, View, TextInput, TouchableOpacity, Clipboard} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
import styles from './styles';
import { Ionicons} from '@expo/vector-icons';


export default function Scanner() { 
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [copied, setCopied] = useState(false);
    const [text, setText] = useState("Not yet scanned");
    const theme = '#007a37';
  
    //request camera permission
    const askForPermission = () => { 
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }
    
    useEffect(() => {askForPermission()}, []);
    useEffect(() => {
      setTimeout(() => {
        setCopied(false)
      }, 2000) 
    }, [copied]);
    
    
    //what happens when the user scan the bar code
    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        setText(data);
    }

    const copyToClipboard =  () => {
      if(text) {
        Clipboard.setString(text);
        setCopied(true);
      }
    };
    
    //check permissions and return screens 
    if(hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>
          )
    }
    
    if(hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text style={{margin: 10}}>No Access To camera</Text>
                <TouchableOpacity onPress={() => askForPermission()}>
                  <Text style={styles.button}>Allow Camera</Text>
                </TouchableOpacity>
            </View>
          )
    }
  
  //return the view
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned} style={styles.scanner}/>
      </View>
      <View style={styles.inputHolder}>
        <TextInput value={text} style={styles.input} onChangeText={() => {}}/>
        <TouchableOpacity onPress={copyToClipboard} style={styles.buttonCopy}>
          { copied ? <Ionicons name="checkmark-done" size={24} color={theme} />:<Ionicons name="copy-sharp" size={24} color={theme} />}
        </TouchableOpacity>
      </View> 
      {
        scanned && (<TouchableOpacity onPress={() => setScanned(false)}> 
            <Text style={styles.button}>Scan again?</Text> 
        </TouchableOpacity>)
      }  

    </View>
  )
}