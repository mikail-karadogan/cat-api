function photo(param) {
     fetch("https://random.dog/woof.json")
     .then(response => response.json())
     .then(data => (document.getElementById("img").src = data.url) );
    }
