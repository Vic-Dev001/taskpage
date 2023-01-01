"use strict";

// inputs fields
// const firstNameInput = document.querySelector("#first-name");
// const lastNameInput = document.querySelector("#last-name");
// const emailInput = document.querySelector("#email");
// const addressInput = document.querySelector("#address");
// const phoneInput = document.querySelector("#phone");

// //account input fields
// const accountNameInput = document.querySelector("#account-name");
// const accountNumberInput = document.querySelector("#account-number1");
// const bankNameInput = document.querySelector("#bank");

// // account submit button
// const submitAcctButton = document.querySelector("#submit-account");
// //acount values
// let accountName = document.querySelector("#account-name").value;
// let bankName = document.querySelector("#bank").value;
// let accountNumber = document.querySelector("#account-number1").value;

// // account information fields
// const accountNameField = document.querySelector("#account-name-field");
// const bankNameField = document.querySelector("#bank-name-field");
// const accountNumberField = document.querySelector("#account-number-field");
// // update account information
// submitAcctButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   localStorage.setItem("account-name", accountNameInput.value);
//   localStorage.setItem("account-number", accountNumberInput.value);
//   localStorage.setItem("bank-name", bankNameInput.value);
//   document.querySelector(".alert-profile").classList.add("hidden");

//   accountNameField.innerHTML = localStorage.getItem("account-name");
//   bankNameField.innerHTML = localStorage.getItem("bank-name");
//   accountNumberField.innerHTML = localStorage.getItem("account-number");
// });

// const UpdateAccountInformation = function () {
//   if (
//     !localStorage.getItem("account-number") &&
//     !localStorage.getItem("bank-name") &&
//     !localStorage.getItem("account-name")
//   ) {
//     document.querySelector(".alert-profile").classList.remove("hidden");
//     localStorage.setItem("account-name", accountNameInput.value);
//     localStorage.setItem("account-number", accountNumberInput.value);
//     localStorage.setItem("bank-name", bankNameInput.value);
//   } else {
//     document.querySelector(".alert-profile").classList.add("hidden");
//   }
//   accountNameField.innerHTML = localStorage.getItem("account-name");
//   bankNameField.innerHTML = localStorage.getItem("bank-name");
//   accountNumberField.innerHTML = localStorage.getItem("account-number");
// };

// UpdateAccountInformation();
// document.querySelector("#balance").innerHTML = localStorage.getItem("balance");
// // Elements  values
// const profileFirstName = document.querySelector("#profile-firstname").innerHTML;
// const profileLastName = document.querySelector("#profile-lastname").innerHTML;
// const emailField = document.querySelector("#email-field");
// const addressField = document.querySelector("#address-field");
// const phoneField = document.querySelector("#phone-number");

// // username cannot be edited
// const userName = document.querySelector("#user-name").placeholder;

// // editable element values
// let email = document.querySelector("#email").value;
// let firstName = document.querySelector("#first-name").value;
// let lastName = document.querySelector("#last-name").value;
// let address = document.querySelector("#address").value;
// let phone = document.querySelector("#phone").value;

// //Other Elements
// const profileCard = document.querySelector("#profile-card");
// const profileField = document.querySelector("#profile-field");

// // Buttons
// const updateBtn = document.querySelector("#update");
// const depositBtn = document.querySelector("#deposit-btn");

// const editableElements = {
//   firstName: firstName,
//   lastName: lastName,
//   address: address,
//   phone: phone,
//   email: email,
// };
// //handle deposit button

// depositBtn.addEventListener("click", function (e) {
//   location.href =
//     " file:///C:/Users/Vic%20Dev/Desktop/stint-ads-project/deposit.html";
// });

// const uneditableElement = {
//   userName: userName,
// };
// // storing elements in the local storage
// localStorage.setItem("editable-elements", editableElements);
// localStorage.setItem("uneditable-elements", uneditableElement);

// // Setting conditions for clicking the withdraw button
// let ableToWithdraw = false;
// // localStorage.setItem("withdraw");

// // update profile btn
// updateBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   // store firstname and last name in the local storage
//   localStorage.setItem("first-name", firstNameInput.value);
//   firstName = localStorage.getItem("first-name");
//   localStorage.setItem("last-name", lastNameInput.value);
//   lastName = localStorage.getItem("last-name");

//   // set email, address, phone
//   localStorage.setItem("email", emailInput.value);
//   email = localStorage.getItem("email");
//   localStorage.setItem("address", addressInput.value);
//   address = localStorage.getItem("address");
//   localStorage.setItem("phone", phoneInput.value);
//   phone = localStorage.getItem("phone");

//   // update the profile name
//   document.querySelector("#profile-firstname").innerHTML =
//     localStorage.getItem("first-name");
//   document.querySelector("#profile-lastname").innerHTML =
//     localStorage.getItem("last-name");

//   // update the latter
//   document.querySelector("#email-field").innerHTML =
//     localStorage.getItem("email");
//   document.querySelector("#address-field").innerHTML =
//     localStorage.getItem("address");
//   document.querySelector("#phone-number").innerHTML =
//     localStorage.getItem("phone");
//   //display field
//   document.querySelector("#profile-field").classList =
//     localStorage.getItem("display-field");
// });

// // function that keeps updating the profile
// const updateFirstName = () => {
//   if (
//     !localStorage.getItem("first-name") &&
//     !localStorage.getItem("last-name") &&
//     !localStorage.getItem("email") &&
//     !localStorage.getItem("address") &&
//     !localStorage.getItem("phone") &&
//     !localStorage.getItem("display-field")
//   ) {
//     localStorage.setItem("first-name", firstNameInput.value);
//     localStorage.setItem("last-name", lastNameInput.value);
//     localStorage.setItem("display-field", remove("hidden"));
//   }
//   document.querySelector("#first-name").value =
//     localStorage.getItem("first-name");

//   document.querySelector("#last-name").value =
//     localStorage.getItem("last-name");

//   // updating the first and last names
//   document.querySelector("#profile-firstname").innerHTML =
//     localStorage.getItem("first-name");
//   document.querySelector("#profile-lastname").innerHTML =
//     localStorage.getItem("last-name");

//   // update the latter
//   document.querySelector("#email-field").innerHTML =
//     localStorage.getItem("email");
//   document.querySelector("#address-field").innerHTML =
//     localStorage.getItem("address");
//   document.querySelector("#phone-number").innerHTML =
//     localStorage.getItem("phone");

//   // display field
//   document.querySelector("#profile-field").classList =
//     localStorage.getItem("display-field");
//   // update field
//   addressInput.value = localStorage.getItem("address");
//   phoneInput.value = localStorage.getItem("phone");
//   emailInput.value = localStorage.getItem("email");
//   addressField.innerHTML = localStorage.getItem("address");
// };
// updateFirstName();

// const updateInputField = function () {
//   if (!localStorage.getItem("address") && !localStorage.getItem("phone")) {
//     addressField.innerHTML = "Not set";
//     phoneField.innerHTML = "Not set";
//   }
// };
// updateInputField();

// updated profile page
// upload picture
const file = document.querySelector("#file");
const image = document.querySelector("#image");

file.addEventListener("change", function (e) {
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    image.src = reader.result;
    localStorage.setItem("image-url", reader.result);
  });
  reader.readAsDataURL(this.files[0]);
});
const updateImage = function () {
  if (localStorage.getItem("image-url")) {
    image.src = localStorage.getItem("image-url");
  }
};
updateImage();

const depositBtn = document.querySelector("#deposit-btn");

depositBtn.addEventListener("click", function (e) {
  location.href = "./deposit.html";
});
