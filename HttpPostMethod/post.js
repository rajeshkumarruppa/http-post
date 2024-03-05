let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function sendPostHTTPRequest() {
    let data = (requestBodyEl.value);
   
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 6adc50b9dce70f4c1c63bdeab6563d1d9831856481036e9833f3ec587ac32684"
        },
        body:data
    };

    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");
    
    fetch("https://gorest.co.in/public-api/users", options)
        .then(function(response) {
            return response.json();//it gives json() parsed data 
        })
        .then(function(jsonData) {
            console.log(jsonData);
            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");
            let status=jsonData.code;//.code is used to give the status of your request
            httpResponseEl.textContent = JSON.stringify(jsonData);
            requestStatusEl.textContent = status;

        });
}
sendPostRequestBtnEl.addEventListener("click",sendPostHTTPRequest);//here event :click is used for button 