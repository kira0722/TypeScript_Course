var variable;
var variable2;
variable2 = "hello";
// variable2 = 123
// variable2 = true
if (typeof variable2 === "string") {
    console.log("variable 2 = ", variable2);
}
// function throwError(message : string) : never {
//     throw new Error(message);
// }
// throwError("este es un error")
function logMessage(message) {
    console.log("log message", message);
}
logMessage("este es un mensaje de log");
