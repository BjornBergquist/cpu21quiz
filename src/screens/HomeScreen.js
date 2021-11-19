import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import BackgroundGradientView from '../components/BackgroundGradientView'
import globalStyles from '../shared/global/globalStyle'
import navigationPaths from '../shared/navigation/navigationPaths'

const HomeScreen = ({navigation}) => {
    return (
       <BackgroundGradientView>
           <Text style={globalStyles.text}>Welcome to the CPU21 quiz game!</Text>
           <Button 
                title="New Game" 
                type="outline"
                buttonStyle={globalStyles.buttonStyle} 
                titleStyle={{color:"white"}}
                onPress={() => navigation.navigate(navigationPaths.gameScreen)}
            />
       </BackgroundGradientView>
    )
}

export default HomeScreen