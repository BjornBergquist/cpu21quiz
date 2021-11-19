import React, {useEffect, useState, useReducer} from 'react'
import { StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import BackgroundGradientView from '../components/BackgroundGradientView'
import {generateQuestions} from '../shared/api/service/quizApiService'
import globalStyles from '../shared/global/globalStyle'
import QuestionCard from '../components/QuestionCard'
import navigationPaths from '../shared/navigation/navigationPaths'

function reducer(state, action){
    switch (action.type){
        case "correct_answer":
            return {...state, score: state.score + 1, questionNbr: state.questionNbr + 1}
        case "incorrect_answer":
            return {...state, questionNbr: state.questionNbr + 1}
        default:
            return state
    }
}

const GameScreen = ({navigation}) => {
    const [serverData, quizApiService] = useState()
    const [state, dispatch] = useReducer(reducer, {score: 0, questionNbr: 0})

    const fetchData = async () => {
        try {
            const response = await generateQuestions(10);
            quizApiService(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    const displayData = () => {
        if (serverData){ 
            if (state.questionNbr<serverData.results.length) {
                return <QuestionCard question={serverData.results[state.questionNbr]} callback={dispatch}/>
            } else {
                return <>
                    <Text style={globalStyles.text}>You scored: {state.score}/{serverData.results.length}</Text>
                    <Button 
                        title="Return to menu" 
                        type="outline"
                        buttonStyle={globalStyles.buttonStyle} 
                        titleStyle={{color:"white"}}
                        onPress={() => navigation.navigate(navigationPaths.homeScreen)}
                    />
                </>
            }
        } else {
            return <Text style={globalStyles.text}>Loading questions...</Text>
        }
    } 

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(state);
    },[state])

    return (
        <BackgroundGradientView>
            {displayData()}
        </BackgroundGradientView>
    )
}

export default GameScreen

const styles = StyleSheet.create({

})
