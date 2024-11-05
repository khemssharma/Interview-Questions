var isPalindrome = function(s) { // Check is if a string is a palindrome
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    return cleaned === cleaned.split('').reverse().join('');
};
class EncodeDecode { // premium design problem
    encode(strs) {
        let encoded = ''
        for(let str of strs){
            encoded += str.length + "#" + str
        }
        return encoded;
    }
    decode(str) {
        let decoded = []
        let i = 0;
        while ( i < str.length){ //while i is in bound
            let j = str.indexOf('#', i) //find delimeter
            let length = parseInt(str.slice(i,j)); // find length
            i = j+1; // start from the beginning of string
            decoded.push(str.slice(i,i+length)) // push into str
            i += length // jump to next string
        }
        return decoded
    }
}