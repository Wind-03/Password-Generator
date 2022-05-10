 
let passwordbox = document.getElementById("passwordbox")
function genPassword(){
    let chars=["0", "1","2", "3", "4", "5", "6", "7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
    "t","u","v","w","x","y","z","!","@","#","$","%","^","&","*","(",")","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let passwordLength= document.getElementById("length");
    let password="";
   for (let i = 0; i <= passwordLength; i++) {
    let generate = chars[Math.floor(Math.random() * chars.length)];
      password += generate
    }
    return pasword

}






