function getData() {
    var work = document.querySelector("#work").value;
    var result = document.querySelector("#result");

    var myLi = document.createElement("li");
    myLi.className="my-2 d-flex justify-content-between"
    if(work.length==0){
    }else{
        myLi.innerHTML = work;

        var deletebtn = document.createElement("button");
        deletebtn.innerHTML = "Delete";
        deletebtn.className = "btn btn-danger ml-5";
    
        deletebtn.addEventListener("click", function () {
          myLi.remove();
        });
    
        myLi.appendChild(deletebtn);
    
        result.appendChild(myLi);
    
        document.querySelector("#work").value = "";
        return false
    }
    

    return false;
  }