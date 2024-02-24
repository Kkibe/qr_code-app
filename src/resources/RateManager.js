import React from 'react';
import { View, Button, Linking } from 'react-native';
import * as Application from 'expo-application';

const openGooglePlay = () => {
    const packageName = Application.getAndroidId().toString();
    const url = `market://details?id=${packageName}`;
  
    Linking.openURL(url)
      .catch(() => {
        // Handle error if Google Play app is not installed
        const webUrl = `https://play.google.com/store/apps/details?id=${packageName}`;
        Linking.openURL(webUrl);
      });
  };