function myfun(){
    var a = document.getElementsByName('chk');
    var newvar = 0;
    var count;
    for(count=0; count<a.length; count++){
        if(a[count].checked==true){
            newvar = newvar + 1;
        }
    }
    if(newvar>=3){
        document.getElementById('notvalid').innerHTML= "** Please select only Two"
        return false;
    }
}

function myFuntab(){
    var tbl = document.getElementById("mytable");
    var row = tbl.insertRow();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();
    var cell7 = row.insertCell();
    var cell8 = row.insertCell();
    var cell9 = row.insertCell();
    cell1.innerHTML = document.getElementById("fName").value;
    cell2.innerHTML = document.getElementById("lName").value;
    cell3.innerHTML = document.getElementById("addre").value;
    cell4.innerHTML = document.getElementById("gen").value;
    cell5.innerHTML = document.getElementById("foodbox").value;
    cell6.innerHTML = document.getElementById("city").value;
    cell7.innerHTML = document.getElementById("state").value;
    cell8.innerHTML = document.getElementById("pin").value;
    cell9.innerHTML = document.getElementById("country").value;
    }

