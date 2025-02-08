import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: "black" }}>Hello! TETSING</Text>
            <Text style={{ color: "black" }}>HELLOOOOOOOOOO</Text>
            <Link href="/profile" style={{ color: "black" }}>
                Go to Profile
            </Link>
        </View>
    );
};

export default index;

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },
});
