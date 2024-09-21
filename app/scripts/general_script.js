const requestUrl = "https://jsonplaceholder.typicode.com/users"




// function sendRequest(method, url){

//     return new Promise( (resolve, reject) => {

//         const xhr = new XMLHttpRequest()


//         xhr.open(method, url)
    
//         xhr.responseType = 'json'
    
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)    
//             } else {
//                 resolve(xhr.response)
//             }
        
//         }
    
//         xhr.onerror = () => {
//             console.log(xhr.response)
//         }
    
    
//         xhr.send()

//     })

   
// }


function sendRequest(method, url, body = null){

    return new Promise( (resolve, reject) => {

        const xhr = new XMLHttpRequest()


        xhr.open(method, url)
    
        xhr.responseType = 'json'
    
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)    
            } else {
                resolve(xhr.response)
            }
        
        }
    
        xhr.onerror = () => {
            console.log(xhr.response)
        }
    
    
        xhr.send(body)

    })

   
}

// sendRequest('GET', requestUrl)
//     .then(data  => {
//         console.log(data)
//     })
//     .catch(err => console.log(err))

const body = {
    name: "Vladilen",
    age: 26
};



sendRequest('POST', requestUrl, body)
    .then(data  => {
        console.log(data)
    })
    .catch(err => console.log(err))

