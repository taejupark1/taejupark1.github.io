function getOption() {
    var selectElement = document.querySelector('#animalSelect');
    output = selectElement.value;
    if (output == "cat") {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(cats => showcats(cats));


        showcats = cats => {
            const catDiv = document.querySelector('#animalImage');
            cats.forEach(character => {
                var img = new Image();
                img.src = character.url;
                img.width = 700;
                img.height = 700;
                if (catDiv.hasChildNodes()) {
                    catDiv.replaceChild(img, catDiv.childNodes[0]);
                } else {
                    catDiv.appendChild(img);
                }
            });
        }
    }

    if (output == "dog") {
        fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(dogs => showdogs(dogs));

        showdogs = dogs => {
            const dogDiv = document.querySelector('#animalImage');
            dogs.forEach(character => {
                var img = new Image();
                img.src = character.url;
                img.width = 700;
                img.height = 700;
                if (dogDiv.hasChildNodes()) {
                    dogDiv.replaceChild(img, dogDiv.childNodes[0]);
                } else {
                    dogDiv.appendChild(img);
                }
            });
        }
    }
}

