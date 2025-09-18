function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("register end");
            reject("error occurred");
        }, 4000);
    });
}
function sendEmail() {
    wait();
    console.log("email sent successfully");
}
function login() {
    wait();
    console.log("login here");
}
function DisplayData() {
    console.log("data");
}
function wait() {
    const ms = new Date().getTime() + 5000;
    while (new Date().getTime() < ms) {}
}



register()
    .then(sendEmail)
    .then(login)
    .then(DisplayData)
    .catch(function() {
        console.log("error occurred");
    });