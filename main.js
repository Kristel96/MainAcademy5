let imgNode=  document.createElement("img");
imgNode.src = "assets/nature.jpg";
imgNode.style.width = "400px";

let mainCont = document.getElementById("mainContainer");
mainCont.appendChild(imgNode);
let article = document.createElement("p");
let articleText = document.createTextNode("Appropriately monetize premium solutions through 2.0 networks. Collaboratively exploit corporate applications before compelling methodologies. Assertively productize value-added methodologies whereas viral architectures. Assertively disintermediate alternative products whereas process-centric processes. Objectively whiteboard market positioning experiences before dynamic channels.\n" +
    "\n" +
    "Globally pontificate out-of-the-box applications vis-a-vis emerging convergence. Efficiently customize high-quality niche markets through granular potentialities. Synergistically simplify e-business growth strategies after timely strategic theme areas. Compellingly seize resource-leveling metrics before seamless potentialities. Assertively administrate future-proof mindshare with ubiquitous customer service.\n" +
    "\n" +
    "Enthusiastically drive professional experiences via effective models. Energistically envisioneer leading-edge intellectual capital whereas transparent.");
article.appendChild(articleText);
mainCont.appendChild(article);
let myButton = document.createElement("button");
myButton.innerHTML = "HIDE!";


mainCont.appendChild(myButton);
console.log(mainCont);
alert("wow");
myButton.style.padding = "20px";
myButton.style.border = "0";


myButton.onclick = function(){
    article.style.display = "none";
};

let myButton2 = document.createElement("button");
myButton2.innerHTML = "SHOW!";
myButton2.style.padding = "20px";
myButton2.style.border = "0";

mainCont.appendChild(myButton2);

myButton2.onclick = function(){
    article.style.display = "block";
};
