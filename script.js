
const sumNatural = (number) => {
    let result = number.toString().split('').map(Number).reduce((a, b) => a + b, 0)
    return result
}

const commonMultiple = (m, n) => {
    let resm = []
    let resn = []
    if (n < m) {
        for(let i = 1; i < m; i++){
                if(n % i === 0){
                    resn.push(i)
                }
                if(m % i === 0){
                    resm.push(i)
                }      
            }
        }else {
        for(let i = 1; i < n; i++){
            if(n % i === 0){
                resn.push(i)
            }
            if(m % i === 0){
                resm.push(i)
            }
    }
   
    }return result = resn.filter(item => resm.includes(item))

}



module.exports = {sumNatural, commonMultiple}