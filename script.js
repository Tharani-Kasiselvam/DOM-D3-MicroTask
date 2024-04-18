var elem = document.createElement("div")
elem.style.width = "500px"
elem.style.color = "green"
elem.style.border = "1px"
elem.style.borderStyle = "solid"
elem.style.borderColor = "black"
elem.style.textAlign = "center"
elem.style.marginTop = "10px"
elem.style.marginLeft = "50px"
elem.addEventListener("mouseover",action)

var brk = document.createElement("br")
brk.innerHTML="<br><br>"

// Q#3 - Write a Javascript code for character counts in the textarea.
var txtAr = document.createElement("textarea")
txtAr.setAttribute("name","char_count")
txtAr.id = "content"
txtAr.style.marginLeft = "20px"

var brk_1 = document.createElement("br")
brk_1.innerHTML="<br><br>"

var btn = document.createElement("button")
btn.setAttribute("type","button")
btn.style.marginLeft = "20px"
btn.innerHTML="Char Count"
btn.addEventListener("click",count)

var brk_2 = document.createElement("br")
brk_2.innerHTML="<br><br>"

var res = document.createElement("div")
res.className="resVal"
res.style.width = "200px"
res.style.color = "blue"
res.style.textAlign = "center"
res.style.marginLeft = "30px"

//Q#2 - Use prompt to read a value from user and display it in the span element.
var str = prompt("Enter your name")
elem.innerHTML=`<b>Dear ${str} Welcome to GUVI!!!</b>`

function action(){
//Q1 - Color a span/div element content when a user moves the mouse over the element.
   elem.style.color="red"
}


function count(){
    var cnt = document.getElementById("content").value
    res.innerHTML = `The Character count is : ${cnt.length}`
}

document.body.append(elem,brk,txtAr,brk_1,btn,brk_2,res)