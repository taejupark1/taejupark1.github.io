function validation() {
    var valid = true;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;

    const validFirstName = /^[a-zA-Z ]+$/.test(firstname);
    const validLastName = /^[a-zA-Z ]+$/.test(lastname);
    const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

    if (validFirstName) {
        if (validLastName) {
            if (validEmail) {
                formatter();
            } else {
                document.getElementById("resultTable").innerHTML = "Email is not valid.";
            }
        } else {
            document.getElementById("resultTable").innerHTML = "LastName is not valid.";
        }
    } else {
        document.getElementById("resultTable").innerHTML = "FirstName is not valid.";
    }
}

function formatter() {
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;


    var result = "<table class='table table-striped'><thead class='thead-dark text-warning'><tr><th colspan='5'>USER INFO</th></tr></thead><tbody><tr><th scope='row' class='text-light col-md-7'>First Name</th><td>" + firstname + "</td></tr><tr><th scope='row' class='text-light'>Last Name</th><td>" + lastname + "</td></tr><tr><th scope='row' class='text-light'>Email</th><td>" + email + "</tr><tr></tbody></table>";

    document.getElementById("resultTable").innerHTML = result;
}
