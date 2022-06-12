function validate()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email == "xyz@gmail.com" && password == "12345")
    {
        alert("Login Sucessfully!");
        return false;
    }
    else
    {
       alert("Logoin Failed :(");
    }
}