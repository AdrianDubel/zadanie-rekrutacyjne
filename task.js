users_list = require("./users1.json");
users_list2 = require("./users2");

console.log("------------------------------------------------------------");
console.log("Task 1: ");
console.log("------------------------------------------------------------");

function checkPhoneNumber() {
  for (let i = 0; i < users_list.users.length; i++) {
    if (users_list.users[i].phoneNumber.match(/^[0-9]+$/)) {
      console.log(
        "Phone number of user with ID " +
          users_list.users[i].userId +
          " contains only digits : " +
          true
      );
    } else {
      console.log(
        "Phone number of user with ID " +
          users_list.users[i].userId +
          " is not correct"
      );
    }
  }
}

checkPhoneNumber();

console.log("------------------------------------------------------------");
console.log("Task 2: ");
console.log("------------------------------------------------------------");

function compareUsersEmail() {
  for (var i = 0; i < users_list2.users.length; ++i) {
    if (
      users_list.users[i].emailAddress !== users_list2.users[i].emailAddress
    ) {
      console.log(
        "Email addresses of user with ID " +
          users_list.users[i].userId +
          " are not the same. First email is: " +
          users_list.users[i].emailAddress +
          " but second email is: " +
          users_list2.users[i].emailAddress
      );
    }
  }
}

function compareUsersFirstName() {
  for (var i = 0; i < users_list2.users.length; ++i) {
    if (users_list.users[i].firstName !== users_list2.users[i].firstName) {
      console.log(
        "First Names of user with ID " +
          users_list.users[i].userId +
          " are not the same. First First name is: " +
          users_list.users[i].firstName +
          " but second First Name is: " +
          users_list2.users[i].firstName
      );
    }
  }
}

function compareUsersLastName() {
  for (var i = 0; i < users_list2.users.length; ++i) {
    if (users_list.users[i].lastName !== users_list2.users[i].lastName) {
      console.log(
        "Last Names of user with ID " +
          users_list.users[i].userId +
          " are not the same. First Last name is: " +
          users_list.users[i].lastName +
          " but second Last Name is: " +
          users_list2.users[i].lastName
      );
    }
  }
}

function compareUsersLastName() {
  for (var i = 0; i < users_list2.users.length; ++i) {
    if (users_list.users[i].lastName !== users_list2.users[i].lastName) {
      console.log(
        "Last Names of user with ID " +
          users_list.users[i].userId +
          " are not the same. First Last name is: " +
          users_list.users[i].lastName +
          " but second Last Name is: " +
          users_list2.users[i].lastName
      );
    }
  }
}

function compareUsersPhoneNumber() {
  for (var i = 0; i < users_list2.users.length; ++i) {
    if (users_list.users[i].phoneNumber !== users_list2.users[i].phoneNumber) {
      console.log(
        "Phone numbers of user with ID " +
          users_list.users[i].userId +
          " are not the same. First Phone number is: " +
          users_list.users[i].phoneNumber +
          " but second phone number is: " +
          users_list2.users[i].phoneNumber
      );
    }
  }
}

compareUsersEmail();
compareUsersFirstName();
compareUsersLastName();
compareUsersPhoneNumber();
