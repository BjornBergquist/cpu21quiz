export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function shuffleArray(array){
    for (let i = array.length-1; i > 0; i--){
        //To make sure that 0 <= j <= i, we have to add +1 to the getRandomInt as it generate a random number so that  0 <= x < max
        const j = getRandomInt(i+1) 
        if (i!==j){
            const temp = array[j]
            array[j] = array[i]
            array[i] = temp
        }
    }
    return array
}