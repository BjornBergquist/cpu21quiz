import React, {useEffect, useState} from 'react'
import { StyleSheet, Text } from 'react-native'
import BackgroundGradientView from '../components/BackgroundGradientView'
import {generateQuestions} from '../shared/api/service/quizApiService'
import globalStyles from '../shared/global/globalStyle'
import QuestionCard from '../components/QuestionCard'

const GameScreen = () => {
    const [serverData, quizApiService] = useState()

    const fetchData = async () => {
        try {
            const response = await generateQuestions(10);
            quizApiService(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    const displayData = () => {
        return serverData
            ? <QuestionCard question={serverData.results[0]}/>
            : <Text style={globalStyles.text}>Loading questions...</Text>
    } 

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <BackgroundGradientView>
            {displayData()}
        </BackgroundGradientView>
    )
}

export default GameScreen

const styles = StyleSheet.create({

})
