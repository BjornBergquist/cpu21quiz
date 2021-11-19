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

/**
 * Converts a string with codes for special characters into actual special characters.
 * @param {*} string 
 * @returns string
 */
export function formatString(string){
    let returnString = string
    if(returnString.includes("&")){
        returnString = returnString.replaceAll("&#039;","'")
        returnString = returnString.replaceAll('&quot;','"')
        if(returnString.includes("&A")){
            returnString = returnString.replaceAll('&Agrave;','À')
            returnString = returnString.replaceAll('&Aacute;','Á')
            returnString = returnString.replaceAll('&Acirc;','Â')
            returnString = returnString.replaceAll('&Atilde;','Ã')
            returnString = returnString.replaceAll('&Auml;','Ä')
            returnString = returnString.replaceAll('&Aring;','Å')
            returnString = returnString.replaceAll('&AElig;','Æ ')
        }
        if(returnString.includes("&a")){
            returnString = returnString.replaceAll('&agrave;','à')
            returnString = returnString.replaceAll('&aacute;','á')
            returnString = returnString.replaceAll('&acirc;','â')
            returnString = returnString.replaceAll('&atilde;','ã')
            returnString = returnString.replaceAll('&auml;','ä')
            returnString = returnString.replaceAll('&aring;','å')
            returnString = returnString.replaceAll('&aelig;','æ')
        }
        if(returnString.includes("&E")){
            returnString = returnString.replaceAll('&Egrave;','È')
            returnString = returnString.replaceAll('&Eacute;','É')
            returnString = returnString.replaceAll('&Ecirc;','Ê')
            returnString = returnString.replaceAll('&Euml;','Ë')
        }
        if(returnString.includes("&e")){
            returnString = returnString.replaceAll('&egrave;','è')
            returnString = returnString.replaceAll('&eacute;','é')
            returnString = returnString.replaceAll('&ecirc;','ê')
            returnString = returnString.replaceAll('&euml;','ë')
        }
        if(returnString.includes("&I")){
            returnString = returnString.replaceAll('&Igrave;','Ì')
            returnString = returnString.replaceAll('&Iacute;','Í')
            returnString = returnString.replaceAll('&Icirc;','Î')
            returnString = returnString.replaceAll('&Iuml;','Ï')
        }
        if(returnString.includes("&i")){
            returnString = returnString.replaceAll('&igrave;','ì')
            returnString = returnString.replaceAll('&iacute;','í')
            returnString = returnString.replaceAll('&icirc;','î')
            returnString = returnString.replaceAll('&iuml;','ï')
        }
        if(returnString.includes("&O")){
            returnString = returnString.replaceAll('&Ograve;','Ò')
            returnString = returnString.replaceAll('&Oacute;','Ó')
            returnString = returnString.replaceAll('&Ocirc;','Ô')
            returnString = returnString.replaceAll('&Otilde;','Õ')
            returnString = returnString.replaceAll('&Ouml;','Ö')
            returnString = returnString.replaceAll('&Oslash;','Ø')
        }
        if(returnString.includes("&o")){
            returnString = returnString.replaceAll('&ograve;','ò')
            returnString = returnString.replaceAll('&oacute;','ó')
            returnString = returnString.replaceAll('&ocirc;','ô')
            returnString = returnString.replaceAll('&otilde;','õ')
            returnString = returnString.replaceAll('&ouml;','ö')
            returnString = returnString.replaceAll('&oslash;','ø')
        }
        if(returnString.includes("&U")){
            returnString = returnString.replaceAll('Ù','&Ugrave;')
            returnString = returnString.replaceAll('Ú','&Uacute;')
            returnString = returnString.replaceAll('Û','&Ucirc;')
            returnString = returnString.replaceAll('Ü','&Uuml;')
        }
        if(returnString.includes("&u")){
            returnString = returnString.replaceAll('ù','&ugrave;') 
            returnString = returnString.replaceAll('ú','&uacute;')
            returnString = returnString.replaceAll('û','&ucirc;')
            returnString = returnString.replaceAll('ü','&uuml;')
        }
        if(returnString.includes("&#")){
            returnString = returnString.replaceAll('&#131;','ƒ')
            returnString = returnString.replaceAll('&#140;','Œ')
            returnString = returnString.replaceAll('&#156;','œ')
            returnString = returnString.replaceAll('&#138;','Š')
            returnString = returnString.replaceAll('&#154;','š')
            returnString = returnString.replaceAll('&#181;','µ')
            returnString = returnString.replaceAll('&#215;','×')
            returnString = returnString.replaceAll('&#159;','Ÿ')
            returnString = returnString.replaceAll('&#176;','°')
            returnString = returnString.replaceAll('&#134;','†')
            returnString = returnString.replaceAll('&#135;','‡')
            returnString = returnString.replaceAll('&#177;','±')
            returnString = returnString.replaceAll('&#171;','«')
            returnString = returnString.replaceAll('&#187;','»')
            returnString = returnString.replaceAll('&#191;','¿')
            returnString = returnString.replaceAll('&#161;','¡')
            returnString = returnString.replaceAll('&#183;','·')
            returnString = returnString.replaceAll('&#149;','•')
            returnString = returnString.replaceAll('&#153;','™')
            returnString = returnString.replaceAll('&#167;','§')
            returnString = returnString.replaceAll('&#182;','¶')
        }
        if(returnString.includes("&")){
            returnString = returnString.replaceAll('&szlig;','ß')
            returnString = returnString.replaceAll('&Ccedil;','Ç')
            returnString = returnString.replaceAll('&ccedil;','ç')
            returnString = returnString.replaceAll('&Ntilde;','Ñ')
            returnString = returnString.replaceAll('&ntilde;','ñ')
            returnString = returnString.replaceAll('&Yacute;','Ý')
            returnString = returnString.replaceAll('&yacute;','ý')
            returnString = returnString.replaceAll('&yuml;','ÿ')
            returnString = returnString.replaceAll('&lt;','<')
            returnString = returnString.replaceAll('&gt;','>')
            returnString = returnString.replaceAll('&copy;','©')
            returnString = returnString.replaceAll('&reg;','®')
        }
    }
    return returnString
}