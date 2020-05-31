
document.addEventListener("DOMContentLoaded", function() {
    const memeForm = document.getElementById("memeGenerator");
    const first = document.getElementById("container");

    memeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let newDiv = document.createElement("div")
        let topCap = document.createElement("div")
        let bottomCap = document.createElement("div")
        topCap.innerText = document.getElementById("tCap").value
        bottomCap.innerText= document.getElementById("bCap").value


    
        
        let newImg = document.createElement("img");
        newImg.innerText = document.getElementById("imgurl").value;
        topCap.setAttribute("class", "top");
        bottomCap.setAttribute("class","bottom");
        newDiv.setAttribute("class", "meme")
        newImg.setAttribute("src", newImg.innerText);

        let removeButton = document.createElement("button");
        removeButton.innerText = "Delete Meme";


    
        newDiv.appendChild(newImg);
        newDiv.appendChild(topCap);
        newDiv.appendChild(bottomCap);
        newDiv.appendChild(removeButton);
        
        first.appendChild(newDiv);
        memeForm.reset();
    });

    first.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON"){
            event.target.parentNode.remove();
        }
    });


});