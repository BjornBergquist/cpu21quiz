import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import globalStyles from '../shared/global/globalStyle'
import { shuffleArray, formatString } from '../shared/global/helperFunctions'


const QuestionCard = ({question, callback}) => {
    const [shuffledOptions, setShuffledOptions] = useState()

    const displayOptions = () => {
        return shuffledOptions
            ?  shuffledOptions.map((titleText)=><Button 
                key={titleText} 
                type="outline"
                buttonStyle={globalStyles.buttonStyle} 
                titleStyle={{color:"white"}}
                title={formatString(titleText)} 
                onPress={() => handleSelectOption(titleText)}
            />)
            :   <Text style={globalStyles.text}>Loading options...</Text>
    }

    const handleSelectOption = (optionText) =>{
        if (optionText===question.correct_answer){
            console.log("Correct!");
            callback({type: "correct_answer"})
        } else {
            console.log("Incorrect!");
            callback({type: "incorrect_answer"})
        }
        setShuffledOptions()
    }

    useEffect(() => {
        if (!shuffledOptions){
            let options = question.incorrect_answers
            options.push(question.correct_answer)
            console.log(options)
            options = shuffleArray(options)
            setShuffledOptions(options)
        }
    }, [shuffledOptions])

    return (
        <View>
            <Text style={globalStyles.text}>{question.category}</Text>
            <Text style={globalStyles.text}>{question.difficulty}</Text>
            <Text style={globalStyles.text}>{formatString(question.question)}</Text>
            {displayOptions()}
        </View>
    )
}

export default QuestionCard

const styles = StyleSheet.create({})
