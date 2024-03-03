const allUsers = [{
    firstName: "Manan",
    gender: "male"
},{
    firstName: "Naman",
    gender: "male"
},{
    firstName: "Priya",
    gender: "female"
}]


for (let i = 0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "female"){
        console.log(allUsers[i]["firstName"])
    }
}