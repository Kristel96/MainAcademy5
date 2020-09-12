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
    let userElement = createEl("div");
        userElement.className = "userblock";



    let emailContainer = createEl("div");
    emailContainer.className = "textcontainer";
    let emailLabel = createEl("span");
    emailLabel.className = "label";
    let emailLabelText= createTe("Email");
    emailLabel.appendChild(emailLabelText);


    let emailValue = createEl("div");
    let emailValueText = createTe(item.email);
    emailValue.className = "textstyle";
    emailValue.appendChild(emailValueText);

    emailContainer.appendChild(emailLabel);
    emailContainer.appendChild(emailValue);


    let fullNameContainer = createEl("div");
        fullNameContainer.className = "textcontainer";
        let fullnameLabel = createEl("span");
        fullnameLabel.className = "label";
        let fullnameLabelText= createTe("Full Name");
        fullnameLabel.appendChild(fullnameLabelText);


        let fullnameValue = createEl("div");
        let fullnameValueText = createTe( item.first_name+" "+ item.last_name);
        fullnameValue.className = "textstyle";
        fullnameValue.appendChild(fullnameValueText);

        fullNameContainer.appendChild(fullnameLabel);
        fullNameContainer.appendChild(fullnameValue);

    let img = createEl("img");
    img.src = item.avatar;

    let editbutton = createEl("button");
    let buttonText = createTe("Edit User");
        editbutton.appendChild(buttonText);
        editbutton.className = "buttonText";
        editbutton.id = item.id;

    userElement.appendChild(editbutton);
    userElement.appendChild(img);
    userElement.appendChild(fullNameContainer);
    userElement.appendChild(emailContainer);


    mainContainer.appendChild(userElement);
    console.dir(item);

        editbutton.onclick = (event)=>{
         let userid = event.target.id;
            let xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let data = this.response;
            let parsedData =  JSON.parse(data);
            console.dir(parsedData);
        }
    };
     let patchpath = "/api/users/"+userid;
    let url = urlBase + patchpath;
    let usereditobject = {
        name: "morpheus",
        job: "zion resident"
    };
    let sendData =JSON.stringify(usereditobject);
    xhttp.open("PATCH", url, true);
    xhttp.send(sendData);



        }
});
}

WebSocketTest();
function WebSocketTest() {

    if ("WebSocket" in window) {
        alert("WebSocket is supported by your Browser!");

        // Let us open a web socket
        var ws = new WebSocket("wss://ws.blockchain.info/inv");

        let obj = {
            op:"ping"
        };

        ws.onopen = function() {

            // Web Socket is connected, send data using send()
            // ws.send(JSON.stringify(obj));
            alert("Message is sent...");
            var sub = {op:"unconfirmed_sub"};
            ws.send(JSON.stringify(sub));
            setTimeout(()=>{
                let unsub = {op:"unconfirmed_unsub"};
                ws.send(JSON.stringify(unsub));
            },6000)

        };

        ws.onmessage = function (evt) {
            var received_msg = evt.data;
            let message = JSON.parse(received_msg);
            drawSize(message.x.size);
        };

        ws.onclose = function() {

            // websocket is closed.
            alert("Connection is closed...");
        };
    } else {

        // The browser doesn't support WebSocket
        alert("WebSocket NOT supported by your Browser!");
    }
}
function drawSize(size){
    document.getElementById("size").innerHTML = size;
}
