document.getElementById("person-form").addEventListener("submit", function (e) {
  e.preventDefault();
  var ul = document.getElementById("err-list");

  // ul.innerHTML = "";

  // var errList = [];

  // if (this.name.value == "") {
  //   errList.push("Name field is required.");
  // }
  // if (this.email.value == "") {
  //   errList.push("Email field is required.");
  // }
  // if (this.gender.value == "") {
  //   errList.push("Gender field is required.");
  // }
  // if (this.city.value == "") {
  //   errList.push("City field is required.");
  // }

  // // To generate error list dynamically
  // for (var i = 0; i < errList.length; i++) {
  //   var err = errList[i];
  //   var li = document.createElement("li");
  //   li.appendChild(document.createTextNode(err));
  //   ul.appendChild(li);
  // }

  // var formData = {
  //   name: this.name.value,
  //   email: this.email.value,
  //   gender: this.gender.value,
  //   city: this.city.value,
  // };

  // To store data in local storage
  if (errList == "") {
    localStorage.setItem("formData", JSON.stringify(formData));
  }
});
