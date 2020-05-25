const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000)
})


/* 1)
minhaPromise()
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        
    })
*/

/* 2)
async function executaPromise() {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromise()
*/

// 3)
const executaPromise = async () => {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromise()