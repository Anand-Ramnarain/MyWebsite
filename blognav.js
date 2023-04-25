fetch('linkToBlog.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})


    var box = document.getElementById("blognav");
    var checkbox = document.getElementById("check");

    checkbox.addEventListener("change", function(){
        if(checkbox.checked) {
            box.style.visibility = "hidden";
        } else {
            box.style.visibility = "visible";
        }
    })
    