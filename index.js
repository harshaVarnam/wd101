function validateHTMlform() {
    let form = document.SignupForm;
    if (form.textname.value == "") {
        alert("Enter Your Name!");
        form.textname.focus();
        return;
    }

    var email = form.emailid.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if (email == "" || atpos < 1 || (dotpos - atpos < 2)) {
        alert("Enter your correct email ID")
        form.emailid.focus();
        return;
    }

    if (form.mobileno.value == "" ||
        isNaN(form.mobileno.value) ||
        form.mobileno.value.length != 10) {
        alert("Enter your Mobile No. in the format 123.");
        form.mobileno.focus();
        return;
    }

    if (form.collegename.value == "") {
        alert("Enter Your College!");
        form.collegename.focus();
        return;
    }

    if (form.Course.value == "-1") {
        alert("Enter Your Course!");
        return;
    }

    if ((SignupForm.sex[0].checked == false) && (SignupForm.sex[1].checked == false)) {
        alert("Choose Your Gender: Male or Female");
        return false;
    }
    return (true);
}