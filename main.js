function photo(param) {
    // if (param == cat) {
    //     document.getElementById("img").src="https://random.dog/woof.json";
    // }if (param == dog) {
    //     document.getElementById("img").src="https://random.dog/woof.json";
    // }
     fetch("https://random.dog/woof.json")
     .then(response => response.json())
     .then(data => (document.getElementById("img").src = data.url) );
    }
