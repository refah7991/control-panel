import './assest/sass/styles.scss';

console.log("hello from webpack");

var student = require("./studentname");
var student1 =new student("Noor", "Hilles");


setTimeout(  ()=> alert("hello student!"), 4000);