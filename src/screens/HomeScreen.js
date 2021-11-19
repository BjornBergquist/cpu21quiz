import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import BackgroundGradientView from '../components/BackgroundGradientView'
import navigationPaths from '../shared/navigation/navigationPaths'

const HomeScreen = ({navigation}) => {
    return (
       <BackgroundGradientView>
           <Text style={styles.text}>This is a test</Text>
           <Button 
                title="New Game" 
                type="outline"
                buttonStyle={styles.buttonStyle} 
                titleStyle={{color:"white"}}
                onPress={() => navigation.navigate(navigationPaths.gameScreen)}
            />
       </BackgroundGradientView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        backgroundColor: 'transparent',
        fontSize: 15,
        color: '#fff',
    },
    buttonStyle:{
        color: "#fff",
        borderColor: "white",
        minWidth: 300, 
        margin: 20
    },
})
