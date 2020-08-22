let first = document.getElementById("firstpage");
first.onclick = function(){
    sendRequest(1);
};
let second = document.getElementById("secondpage");
second.onclick = function(){
    sendRequest(2);
};
let urlBase = "https://reqres.in";
sendRequest(1);

function sendRequest(page){
    let xhttp = new XMLHttpRequest();
    let path = "/api/users?page="+page;

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = this.response;
            let parsedData =  JSON.parse(data);
            console.dir(parsedData);
            if(parsedData!== null && parsedData.length !==0){
                buildUsersList(parsedData.data);
            }
        }
    };

    let url = urlBase + path;
    xhttp.open("GET", url, true);
    xhttp.send();
}
function buildUsersList(users) {
    let mainContainer = document.getElementById("mainContainer");
    mainContainer.innerHTML = "";
    users.forEach((item, index) =>{
    let userElement = document.createElement("div");
        userElement.className = "userblock";

    let emailContainer = document.createElement("div");
    let email = document.createTextNode( " Email: "+ item.email);
    emailContainer.appendChild(email);
    let fullNameContainer = document.createElement("div");
    let text = document.createTextNode("Full name: " + item.first_name+" "+ item.last_name);
    fullNameContainer.appendChild(text);
    let img = document.createElement("img");
    img.src = item.avatar;
    userElement.appendChild(img);
    userElement.appendChild(fullNameContainer);
    userElement.appendChild(emailContainer);


    mainContainer.appendChild(userElement);
    console.dir(item);
});
}

// let xhttpanother = new XMLHttpRequest();
//
//
// xhttpanother.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//         let data = this.response;
//         let parsedData =  JSON.parse(data);
//         console.dir(parsedData);
//         if(parsedData!== null && parsedData.length !==0){
//             buildUsersList(parsedData.data);
//         }
//     }
// };
// xhttpanother.overrideMimeType("application/json");
// xhttpanother.open("GET", "data.json", true);
// xhttpanother.send();
