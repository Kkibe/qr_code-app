import React , {useEffect, useRef, useState} from 'react';

import { View, Text, TextInput, Clipboard } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import ViewShot from 'react-native-view-shot';
import { TouchableOpacity } from 'react-native';
import Icon from '../../assets/icon.png';
import styles from './styles';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { ThemeContext } from '../themeContext';

export default function Generator() {
  const [QrCode, setQRCode] = useState('default');
  const [pasted, setPasted] = useState(false);
  const qrCodeRef = useRef(null);
  const viewShotRef = useRef(null);
  const theme = '#007a37';

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
      setQRCode(text)
      setPasted(true);
  };
  
  useEffect(() => {
    setTimeout(() => {
      setPasted(false)
    }, 2000) 
  }, [pasted]);
  
  
 
  return (
    <View style={styles.container}>
      <ViewShot
        ref={viewShotRef}
        options={{
          format: 'png',
          quality: 1.0
        }}
      >
        <QRCode
                ref={qrCodeRef}
                value={QrCode ? QrCode : 'default'}
                size={320}
                color={theme} //we'll use theme color here
                backgroundColor='white'
                logo={Icon}
                logoSize={30}
                logoBackgroundColor='transparent'
                >

        </QRCode>
      </ViewShot>
      <View style={styles.inputHolder}>
        <TextInput style={styles.input}  onChangeText={(text) =>setQRCode(text)} defaultValue={QRCode}/>
        <TouchableOpacity onPress={fetchCopiedText} style={styles.buttonCopy}>
          { pasted ? <Ionicons name="checkmark-done" size={24} color={theme} />:<Octicons name="paste" size={24} color={theme}/>}
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.button}>Download QR Code</Text>
      </TouchableOpacity>
    </View>
  )
}
