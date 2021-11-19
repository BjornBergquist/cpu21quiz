import https from "../quizApi"

export const generateQuestions = (amount) => {
    return https.get(`api.php?amount=${amount}`)
}

export const generate10Questions = () => {
    return https.get('api.php?amount=10')
}
