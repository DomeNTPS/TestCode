function Change(max) {
    
    const numbers = max
    const maxi = []
    const len = numbers.toString().length
    // console.log(len)
    for (let index = 0; index < len; index++) {
        const a = [...numbers.toString()].map((num,i) => {
            if (num == '5' && i == index) {
                num = '8'
            }
            // console.log(num)
            return num

        }).join("")
        // console.log(a)
        maxi[index] = a
        // console.log(maxi)
        maxi.sort((a, b) => b - a);
    }

    return maxi[0];
    
    

}

console.log(Change(8558))