import React from "react";
import { View,Button } from "react-native";
import Padrao from "../../estilo/Padrao";

const Home = ( {navigation} ) => {
    return(
        <View style={Padrao.center}>
            <Button
            title="Ir para tela About" onPress={() => navigation.navigate("About")} />
        </View>
    );
};

export default Home;