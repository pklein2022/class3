function printUsers(userList){
    userList.forEach(printUser)
}
function printUser(user){
  console.log(user.name + " is a "+ user.age + " year old " + user.occupation + ".")
}


let userList = [
    {
      name: "John",
      age: 34,
      occupation: "Plumber",
    }, 
    {
      name: "Michael",
      age: 43,
      occupation: "Personal Trainer",
    },
    {
      name: "Jane",
      age: 23,
      occupation: "Receptionist",
    }
  ]
