// ProfilePage.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfilePage = ({ route }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Profile</Text>

            <Text style={styles.description}>
                hello
            </Text>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginVertical: 20,
    },
    // ... (ajoute d'autres styles si nécessaire)
});

export default ProfilePage;
