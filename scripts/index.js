function birthday() {
    window.location.href = "file:///D:/share/Lets-Just-Hack-and-Party/views/birthday.html"
}

function chat() {
    var messageInput = document.querySelector("#message-input");
    var messageBar = document.querySelector("#message-bar");
    var chat = messageInput.value;
    messageBar.insertAdjacentHTML("beforebegin",
        ` 
        <br/>
        <div class="col-md-12 ">
            <div class="col-md-12 text-center mb-2">
                <p> ${chat} </p>
            </div>
        </div>
        `
    );

    messageBar.insertAdjacentHTML("beforebegin",
        ` 
        <div class="row">
            <div class="col-md-12 text-center mb-2">
                <p> Yes. </p>
            </div>
        </div>
        `
    );
    console.log(chat);
}