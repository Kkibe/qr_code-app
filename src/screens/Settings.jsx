import React, { useState } from 'react'
import { Linking, Text, TouchableOpacity, View, Share,} from 'react-native'
import styles from './styles'
import * as Application from 'expo-application';
import { RadioButton } from 'react-native-paper'; 

export default function Settings() {
  const packageName = 'com.example.app';//DeviceInfo.getBundleId();
  const [selectedValue, setSelectedValue] = useState('option1');
  
  const handleShare = async () => {
    try {
      const result = await Share.share({
        title: 'QR code generator & scanner',
        dialogTitle: 'QR code generator & scanner',
        message: `https://play.google.com/store/apps/details?id=${packageName}`, // Message to share
        url: `https://play.google.com/store/apps/details?id=${packageName}`, // URL to share (optional)
         // Title of the message (optional)
      });
      
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
        } else {
          // Shared
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
      }
    } catch (error) {
      console.log('Error sharing:', error.message);
    }
  };
  
  const openLink = (link) => {
    Linking.openURL(link)
      .catch((err) => console.error('Failed to open link:', err));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR Code Scanner & Generator</Text>
      <TouchableOpacity onPress={() => openLink(`https://play.google.com/store/apps/details?id=${Application.applicationId}`)}>
        <Text style={styles.button}>Rate Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleShare}>
        <Text style={styles.button}>Share App</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://twitter.com/')}>
        <Text style={styles.button}>Terms of Use</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://twitter.com/')}>
        <Text style={styles.button}>Privacy Policy</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Theme</Text>
      <View style={styles.radioGroup}> 
      <View style={styles.radioButton}> 
                    <RadioButton.Android 
                        value="option1"
                        status={selectedValue === 'option1' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => setSelectedValue('option1')} 
                        color="#007a37"
                    /> 
                    <Text style={styles.radioLabel}> 
                        Default
                    </Text> 
                </View> 
  
                <View style={styles.radioButton}> 
                    <RadioButton.Android
                        value="#c9c9c9"
                        status={selectedValue === '#c9c9c9' ?  
                                 'checked' : 'unchecked'} 
                        onPress={() => setSelectedValue('#c9c9c9')} 
                        color="#c9c9c9"
                    /> 
                    <Text style={styles.radioLabel}> 
                        Light
                    </Text> 
                </View> 
  
                <View style={styles.radioButton}> 
                    <RadioButton.Android
                        value="#3b3b3b"
                        status={selectedValue === '#3b3b3b' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => setSelectedValue('#3b3b3b')} 
                        color="#3b3b3b"
                    /> 
                    <Text style={styles.radioLabel}> 
                        Dark
                    </Text> 
                </View> 
                <View style={styles.radioButton}> 
                    <RadioButton.Android
                        value="#00ae58"
                        status={selectedValue === '#00ae58' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => setSelectedValue('#00ae58')} 
                        color="#00ae58"
                    /> 
                    <Text style={styles.radioLabel}> 
                        Contrast
                    </Text> 
                </View>  
            </View> 
      <Text style={styles.title}>v~{Application.nativeApplicationVersion}</Text>
    </View>
  )
}
