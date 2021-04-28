import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import userImg from '../assets/anderson.png'
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
    const [userName, setUserName] = useState<string>()

    useEffect(() =>{
        async function loadStoragedUserName() {
            const user= await AsyncStorage.getItem("@plantmanager:user")
            setUserName(user || '')
        }

        loadStoragedUserName()

    },[userName])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greetings}>Olá, </Text>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <Image source={userImg} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 40
    },
    greetings: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})