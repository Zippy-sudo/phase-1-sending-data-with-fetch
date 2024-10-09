function submitData(string0, string1){
    const newObj = {
        name: string0,
        email: string1,
    };

    const configurationObject = {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(newObj),
    };

    return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((object) => {
        const body = document.querySelector("body");
        for (let element0 in object) {
            if (object[element0] === string0) {
                const paragraph0 = document.createElement("p");
                paragraph0.innerHTML = object["id"];
                body.appendChild(paragraph0);
            }
        }
    })
    .catch((error) => {
        const body = document.querySelector("body");
        const paragraph1 = document.createElement("p");
        paragraph1.innerHTML = error.message
        body.appendChild(paragraph1);
    })
}
