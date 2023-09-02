// Ajax Code with Harry

/*
Ajax

-> It stands for asynchronous Javasrcipt and XML

-> Ajax is not a programming language. Rather it's a set of existing technologies

-> Ajax helps in fetching data asynchronously without interfering with the existing page

-> No page reload/refresh

-> Mordern websites use Json instead or XML for data transfer



// Why use AJAX

-> No page Reload/refresh
-> Better user Experience
-> Save network Bandwidth
-> Very Interactive

*/

console.log("hello");
fetch("https://api.lix-it.com/v1/li/linkedin/search/jobs?viewer_id=alfie-lambert&url=https://www.linkedin.com/jobs/search/?currentJobId=3436671233&keywords=lix")
.then((response)=>{
    console.log(response.status)
    console.log(response.statusText)
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
console.log(err);
})