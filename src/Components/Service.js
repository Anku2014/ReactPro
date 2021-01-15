const fetchUsers=()=>{
    let usersObj=[];
    fetch("http://localhost:3000/users").then(
        res=>{
            console.log(res.json()
           .then(endRes=>{console.log(endRes); return endRes}).catch(err=>console.log(err)))
        })
        .catch(err=>console.log(err))
    
    }
// const insertUser=(users)=>{
//     fetch("http://localhost:3000/users",{
//         method:'POST',
//         body:JSON.stringify(users),
//         headers:{
//             'content-type':'application/json'
//         }
//     }
//     ).then(result=>result.json().then(data=>console.log(data))).catch(err=>console.log(err))
        
    
//   }
const insertUser=(users,callback)=>{
   
    const id = users.id;
    const apiUrl = `http://localhost:3000/users/${id}`;
    fetch(apiUrl).then(data => {if (data.status >  400){
    alert("invalid user")};
    return data.json()}).then(data=> callback(users,data)).catch(err => console.log(err));
}
const deleteUser=(id)=>{
    const apiUrl = `http://localhost:3000/users/${id}`;
    try{
        fetch (apiUrl, {
            method : "DELETE"
        }).then(data => {
            return data.json();
        }).then(data => console.log("data Successfully deleted"));
    }catch(err){
        console.log(err);
    }
}   
export {fetchUsers,insertUser,deleteUser}