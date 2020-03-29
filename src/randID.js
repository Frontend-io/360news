export default function randID(){
	// RandID - v 1.0
	// By - Iyobosa Jefferson Osagie
	// Twitter - @frontend_io
	// Github - @frontend-io

	// For best performance, please feed in a reasonable outputLength ::: outputLength === numbers of loops !

    const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q" , "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const numerals = [0,1,2,3,4,5,6,7,8,9]
    let pushed = [] ;
    let outputRand = '';
    let lengthOfOutput = 10; 
    
    if (arguments.length > 0) {
    	let parameter = arguments[0]
    	lengthOfOutput = parameter
    }
    function randNum(array){
    	const randNum = Math.floor(Math.random() * array.length)
        return (
           array[randNum]
        )
    }

    for( let i = 0; i < (lengthOfOutput - 1) ; i++){
    	JSON.stringify(i)
    	let generatedNum = `${randNum(numerals)}-${randNum(alphabets) }` 
    	if (!pushed.includes(generatedNum)) {
            pushed.push(generatedNum)
        }
    }
    pushed.map((item) =>{
        return(
            outputRand += `${(item)}`
        )
    })
    switch(lengthOfOutput){
    	case 0 :  console.warn( "RandID warn: ", "You have not specified a valid output length!")
    		break;
    	case 1 :  console.warn( "RandID warn: ", "Output Length must be greater than 1!")
    		break;
    	default:
    		return outputRand
    }
}
export function randNum(array){
    const randNum = Math.floor(Math.random() * array.length)
    return (
       array[randNum]
    )
}