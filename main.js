
btn.addEventListener('click', function(){
    const mail = document.getElementById("email");
    const click = document.getElementById('btn');
    const error = document.getElementById("err");
    const error1 = document.getElementById("err1");
    const error2 = document.getElementById("err2");

    const regem = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

    if ((mail.value)==""){
        error.style.display="flex";
        error1.style.display="flex";
        error2.style.display="none";
        mail.focus();
        return false;
    }

    if (!regem.test(mail.value)){
        error1.style.display="none";
        error.style.display="flex";
        error2.style.display="flex";
        return false;
    }
    return alert("Success");
})