// Add your code here



// //test 1(POST)
function submitData(name,email){
const request = {
   name:"Steve",
   email:"steve@steve.com"
}
fetch('http://localhost:3000/users',{
   method:'POST',
   headers:{
      'Accept':"application/json",
      'content-type':"application/json"
   },
   body:JSON.stringify(request)
})

.then((res) =>res.json())
//handling the response
.then((requestData)=>{   
   const body = document.querySelector('body')
   const newId = document.createElement('p')
   newId.innerText=`newID: ${requestData.id}`
   body.appendChild(newId)
})  
   //handling errors
.catch((error)=>{
   alert('an error occurred')
})
}


submitData()