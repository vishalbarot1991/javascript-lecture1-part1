let totalAmount=5000.0;
let discount=5.0;

let username ="john123";
let password ="john@100";

if(username === "john123" && password === "john@200"){
    console.log("You will now be taken to the dashboard");
}
else{
    console.log("Your crdentials are not a match ");
}


if (totalAmount > 4000.0){
    discount=10.0;
}
else if (totalAmount > 3000.0){
    discount=7.0;
}
else {
    discount=5.0;
}
console.log("your discount is :" +discount);

