function validation() {
    const inputValue = document.getElementById("urlInput").value;
    const regex = "^[a-zA-Z0-9]{3,16}$";

    if (inputValue.match(regex)) {
        // if regex match then call search function.
        search()
    } else {
        document.getElementById("printResult").innerHTML = "User name should be between 3 to 16 characters.";
        document.getElementById("tableResult").innerHTML = "";
        document.getElementById("profileResult").innerHTML = "";
    }
}

function tableFormat(data) {
    var name = data.username;
    var country = "";
    if (data.country == null) country = "Unknown";
    else country = data.country;
    var gamesplayed = data.gamesplayed;
    var gameswon = data.gameswon;
    var xp = data.xp;
    
    let result = "<table class='table table-striped'><thead class='thead-dark text-warning'><tr><th colspan='5'>USER INFO</th></tr></thead><tbody><tr><th scope='row' class='text-light col-md-7'>Username</th><td>" + name + "</td></tr><tr><th scope='row' class='text-light'>Country</th><td>" + country + "</td></tr><tr><th scope='row' class='text-light'>Game played</th><td>" + gamesplayed + "</td></tr><tr><th scope='row' class='text-light'>Game won</th><td>" + gameswon + "</td></tr><tr><th scope='row' class='text-light'>XP</th><td>" + xp + "</td></tr><tr></tbody></table>";

    return result;
}

function getImage(url) {
    const pic = document.querySelector('#profileResult');
    var img = new Image();
    img.src = url;
    img.width = 300;
    img.height = 300;

    if (pic.hasChildNodes()) {
        pic.replaceChild(img, pic.childNodes[0]);
    } else {
        pic.appendChild(img);
    }
}

async function search() {
    let apiurl = "https://ch.tetr.io/api/users/" + document.getElementById('urlInput').value.toLowerCase();

    // try fetch the user info through API
    try  {
        let response = await fetch(apiurl).then(data => data.json());

        if (response.success) {
            // if user is exist
            let data = response.data.user;
            let userPage = "https://ch.tetr.io/u/" + data.username;
            let urlForm = "<a href=" + userPage + ">[go to user page]</a>";
            
            // if user has profile picture
            if (data.hasOwnProperty('avatar_revision')) {
                let profilePic = "https://tetr.io/user-content/avatars/" + data._id + ".jpg?rv=" + data.avatar_revision;
                getImage(profilePic);
            } else {
                let profilePic = "https://tetr.io/res/avatar.png";
                getImage(profilePic);
            }

            // sending to html
            document.getElementById("printResult").innerHTML = urlForm;
            document.getElementById("tableResult").innerHTML = tableFormat(data);
        } else {
            // if user is not exist
            document.getElementById("printResult").innerHTML = "User not found.";
            document.getElementById("tableResult").innerHTML = "";
            let profilePic = "https://tetr.io/res/avatar.png";
            getImage(profilePic);
        }
    } catch (error) {
        console.log(error);
    }
}
