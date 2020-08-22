    let urlBase = "https://reqres.in";
    let xhttp = new XMLHttpRequest();
    let path = "/api/users";

    let submBtn = document.getElementById("submit");
    submBtn.onclick = ()=>{
      let name = document.getElementById("name") ;
      let job = document.getElementById("job");
      let userObject = {};
      userObject.name = name;
      userObject.job = job;
        createUser(userObject);
    };
    function createUser(userObject){
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 201) {
            let data = this.response;
            let parsedData =  JSON.parse(data);
            console.dir(parsedData);
        }
    };
    let url = urlBase + path;
    let sendData =JSON.stringify(userObject);
    xhttp.open("POST", url, true);
    xhttp.send(sendData);
}
