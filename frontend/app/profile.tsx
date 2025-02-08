import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileTab: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Profile</Text>
            <Text style={styles.info}>Name: John Doe</Text>
            <Text style={styles.info}>Email: john.doe@example.com</Text>
            {/* Add more profile details here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    info: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ProfileTab;
