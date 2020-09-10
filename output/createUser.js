var urlBase = "https://reqres.in";
var xhttp = new XMLHttpRequest();
var path = "/api/users";
var allUsers = [];
var submBtn = document.getElementById("submit");

submBtn.onclick = function () {
  var name = document.getElementById("name").value;
  var job = document.getElementById("job").value;
  var userObject = {};
  userObject.name = name;
  userObject.job = job;
  allUsers.push(userObject);
  var all = JSON.stringify(allUsers);
  localStorage.setItem("password", all);
  sessionStorage.setItem("session", "akdjfhgfsljkghfjghsdflgjdfhhkdjfgnlbsfdgblsfdgngblbsfg");
  setCookie("name", "Tom", 12);

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  } // createUser(userObject);

}; //     function createUser(userObject){
//     xhttp.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 201) {
//             let data = this.response;
//             let parsedData =  JSON.parse(data);
//             console.dir(parsedData);
//         }
//     };
//     let url = urlBase + path;
//     let sendData =JSON.stringify(userObject);
//     xhttp.open("POST", url, true);
//     xhttp.send(sendData);
// }
// Видалення обєкта
// let deletepath = "/api/users/2";
// let deleteuser = new XMLHttpRequest();
//     deleteuser.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 204) {
//             let data = this.response;
//             let parsedData =  JSON.parse(data);
//             console.dir(parsedData);
//         }
//     };
//     let url = urlBase + deletepath;
//     deleteuser.open("DELETE", url, true);
//     deleteuser.send();
//