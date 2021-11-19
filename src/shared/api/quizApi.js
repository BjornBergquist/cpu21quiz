import axios from 'axios'

const quizApi = axios.create({
    baseURL: "https://opentdb.com/"
})

export default quizApi