import React from "react";
import { View } from "react-native";

export default (props: any) => {
    return (
        <>
            <View style={{width: '100%', 
                          height: '100%', 
                          flexDirection: 'column', 
                          justifyContent: 'center',
                          alignItems: 'stretch'}}>

                <View style={{flexGrow: 1, backgroundColor: 'powderblue'}}></View>
                <View style={{flexGrow: 3, backgroundColor: 'skyblue'}}></View>
                <View style={{flexGrow: 1, backgroundColor: 'steelblue'}}></View>
                
            </View>

        </>
    )
}