
function clicked(){
    let Mypro = document.getElementById("product").value;
    let Myquant = document.getElementById("quantity").value;
    let Mypri = document.getElementById("price").value;
    let budgetObj = {Mypro, Myquant, Mypri};
    // let gettproduction = JSON.parse(localStorage.getItem()) [];
    let gettproduction = JSON.parse(localStorage.getItem("budget")) || [];
    
    if (Mypro =="" || Myquant =="" || Mypri ==""){
        showError.innerHTML = `Please Fill The Space`
        setTimeout(()=>{
            showError.innerHTML = ``
        },1000);

    }else{
        gettproduction.push(budgetObj);
        document.getElementById("product").value = "";
        document.getElementById("quantity").value = "";
        document.getElementById("price").value = "";
        localStorage.setItem("budget", JSON.stringify(gettproduction));
        window.location.href="result.html"
        }
    }