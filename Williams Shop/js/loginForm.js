function walidation()
{
    let login = document.getElementById('inputLogin').innerText;
    let password = document.getElementById('inputPassword').innerText;

    if(login ==""){
        document.getElementById('logError').innerHTML = "Wprowadź login";
        alert("Wprowadź login");
    }
}