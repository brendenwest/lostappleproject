import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from '../StyleSheet/HeaderStyle';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={require('../Images/lapLogo.jpg')} style={styles.logo} />
            <Text style={styles.logoText}>THE LOST APPLE PROJECT</Text>
        </View>
    )
};
