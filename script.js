var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("text1").innerHTML  = "Text       : " + txt+"\n";
document.getElementById("length").innerHTML = "Text length: " + txt.length+"\n";

var text = "This is a string which can be indexed like an array";
document.getElementById("text2").innerHTML = "Text                : " + text+"\n";
document.getElementById("find").innerHTML  = "Position of 'string': " + text.indexOf("string")+"\n";

txt = "The first occurance of string is at position 23. This is the second occurance of string";
document.getElementById("text3").innerHTML = "Text                : " + txt+"\n";
document.getElementById("findlast").innerHTML  = "Position of second 'string':" + txt.lastIndexOf("string")+"\n";

document.getElementById("text4").innerHTML = "Text                : " + txt+"\n";
document.getElementById("find1").innerHTML  = "Position of 'string' after position 30: " + txt.indexOf("string",30)+"\n";

document.getElementById("text5").innerHTML = "Text                : " + txt+"\n";
document.getElementById("findlast1").innerHTML  = "Position of 'string' before position 30: " + txt.lastIndexOf("string",30)+"\n";

document.getElementById("text6").innerHTML = "Text                : " + txt+"\n";
document.getElementById("search").innerHTML  = "Position of 'string' before position 30: " + txt.search("string")+"\n";

document.getElementById("text7").innerHTML = "Text                : " + txt+"\n";
document.getElementById("slice").innerHTML  = "Slicing text at 10, 30: " + txt.slice(10,30)+"\n";

document.getElementById("text8").innerHTML = "Text                : " + txt+"\n";
document.getElementById("sliceend").innerHTML  = "Slicing text at -30, -10: " + txt.slice(-30,-10)+"\n";

document.getElementById("text9").innerHTML = "Text                : " + txt+"\n";
document.getElementById("slice1").innerHTML  = "Slicing text at 10: " + txt.slice(10)+"\n";

document.getElementById("text10").innerHTML = "Text                : " + txt+"\n";
document.getElementById("slice2").innerHTML  = "Slicing text at -30: " + txt.slice(-30)+"\n";

document.getElementById("text11").innerHTML = "Text                : " + txt+"\n";
document.getElementById("substring").innerHTML  = "Substring at 10, 30: " + txt.substring(10,30)+"\n";

document.getElementById("text12").innerHTML = "Text                : " + txt+"\n";
document.getElementById("substring1").innerHTML  = "Substring at 10: " + txt.substring(10)+"\n";

document.getElementById("text13").innerHTML = "Text                : " + txt+"\n";
document.getElementById("substr").innerHTML  = "Substr at 10,30: " + txt.substr(10, 30)+"\n";

document.getElementById("text14").innerHTML = "Text                : " + txt+"\n";
document.getElementById("substr1").innerHTML  = "Substr at 10: " + txt.substr(10)+"\n";

document.getElementById("text15").innerHTML = "Text                : " + txt+"\n";
document.getElementById("substr2").innerHTML  = "Substr at -30: " + txt.substr(-30)+"\n";

document.getElementById("text16").innerHTML = "Text                : " + txt+"\n";
document.getElementById("replace").innerHTML  = "Replacing string with text: " + txt.replace("string", "text")+"\n";

document.getElementById("text17").innerHTML = "Text                : " + txt+"\n";
document.getElementById("replace1").innerHTML  = "Replacing string with text (using regular expression to make case insensitive): " + txt.replace(/STRING/i, "text")+"\n";

document.getElementById("text18").innerHTML = "Text                : " + txt+"\n";
document.getElementById("replace2").innerHTML  = "Replacing all occurance of string with text: " + txt.replace(/string/g, "text")+"\n";

document.getElementById("text19").innerHTML = "Text                : " + txt+"\n";
document.getElementById("ucase").innerHTML  = "Replacing all occurance of string with text: " + txt.toUpperCase()+"\n";

document.getElementById("text20").innerHTML = "Text                : " + txt+"\n";
document.getElementById("lcase").innerHTML  = "Replacing all occurance of string with text: " + txt.toLowerCase()+"\n";

document.getElementById("text21").innerHTML = "Text                : " + txt+"\n";
document.getElementById("concat").innerHTML  = "Concatinating with the text in 2. : " + txt.concat(". ", text)+"\n";

text = "\t    String with whitespaces   ";
document.getElementById("text22").innerHTML = "Text                : " + text+"\n";
document.getElementById("trim").innerHTML  = "Trimming whitespaces: " + text.trim()+"\n";

document.getElementById("text23").innerHTML = "Text                : " + text+"\n";
document.getElementById("replacetrim").innerHTML  = "Trimming whitespaces  with replace: " + text.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') +"\n";

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
var str = "       Hello World!        ";
document.getElementById("text24").innerHTML = "Text                : " + str+"\n";
document.getElementById("prototrim").innerHTML  = "Trimming whitespaces with prototype: " + str.trim() +"\n";

document.getElementById("text25").innerHTML = "Text                : " + txt+"\n";
document.getElementById("charat").innerHTML  = "Character at 10 : " + txt.charAt(10)+"\n";

document.getElementById("text26").innerHTML = "Text                : " + txt+"\n";
document.getElementById("charcode").innerHTML  = "Character code at 10 : " + txt.charCodeAt(10)+"\n";

document.getElementById("text27").innerHTML = "Text                : " + txt+"\n";
document.getElementById("property").innerHTML  = "Property access at 15 : " + txt[15]+"\n";

str = "a,b,c,d,e";  
document.getElementById("text28").innerHTML = "Text                : " + str+"  & isArray: "+Array.isArray(str) +"\n";
document.getElementById("split").innerHTML  = "Output of split : " + str.split(",")+ "   & isArray: "+Array.isArray(str.split(",")) +"\n";

str = "Hello World! ";
document.getElementById("text29").innerHTML = "Text                : " + str+"\n";
document.getElementById("splitchar").innerHTML  = "Text to array: " + str.split("") +"\n";
