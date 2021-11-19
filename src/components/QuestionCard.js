import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import globalStyles from '../shared/global/globalStyle'
import { shuffleArray } from '../shared/global/helperFunctions'

const QuestionCard = ({question}) => {
    const [shuffledOptions, setShuffledOptions] = useState()

    const displayOptions = () => {
        return shuffledOptions
            ?  shuffledOptions.map((titleText)=><Button key={titleText} title={titleText} onPress={() => handleSelectOption(titleText)}/>)
            :   <Text style={globalStyles.text}>Shuffeling...</Text>
    }

    const handleSelectOption = (optionText) =>{
        console.log(optionText===question.correct_answer?"Correct!":"Incorrect");
    }

    useEffect(() => {
        if (!shuffledOptions){
            let options = question.incorrect_answers
            options.push(question.correct_answer)
            console.log(options)
            options = shuffleArray(options)
            setShuffledOptions(options)
        }
    }, [])

    return (
        <View>
            <Text style={globalStyles.text}>{question.category}</Text>
            <Text style={globalStyles.text}>{question.difficulty}</Text>
            <Text style={globalStyles.text}>{question.question}</Text>
            {displayOptions()}
        </View>
    )
}

export default QuestionCard

const styles = StyleSheet.create({})
