function printUsers(userList) {
  userList.forEach(printUser);
}
function printUser(user) {
  console.log(
    user.name + " is a " + user.age + " year old " + user.occupation + "."
  );

  //https://www.geeksforgeeks.org/how-to-creating-html-list-from-javascript-array/
  let li = document.createElement("li");
  li.innerText =
    user.name + " is a " + user.age + " year old " + user.occupation + ".";
  list.appendChild(li);
}
let list = document.getElementById("myList");

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
  },
];
