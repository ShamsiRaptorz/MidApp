function fetchData() {
    fetch("http://localhost:5000/api/data")
        .then(res => res.json())
        .then(data => {
            document.getElementById("response").innerText = data.data;
        })
        .catch(() => {
            document.getElementById("response").innerText = "Error connecting backend";
        });
}