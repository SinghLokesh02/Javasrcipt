// About fetch function of JS
console.log("hello");
fetch("https://api.github.com/users/SinghLokesh02")
.then((response)=>{
    console.log(response.status)
    console.log(response.statusText)
    return response.json()
})
.then((data)=>{
    console.log(data);
    console.log(data.name);
})
.catch((err)=>{
console.log(err);
})

// If we get any data after network request then it is considered as response/resolve() either it is 404(file not found)

// If we are unable to do network request then it is considered as reject or it is handled in catch block