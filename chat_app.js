function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();
    if (message !== "") {
        var messagesContainer = document.getElementById("messages");
        var messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.textContent = message;
        var optionsContainer = document.createElement("div");
        optionsContainer.classList.add("message-options");
        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editMessage(this);
        };
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            deleteMessage(this);
        };
        optionsContainer.appendChild(editButton);
        optionsContainer.appendChild(deleteButton);
        messageElement.appendChild(optionsContainer);
        messagesContainer.appendChild(messageElement);
        messageInput.value = "";
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

function editMessage(button) {
    var messageElement = button.parentNode.parentNode;
    var messageText = messageElement.firstChild;
    var newText = prompt("Edit your message:", messageText.textContent);
    if (newText !== null && newText.trim() !== "") {
        messageText.textContent = newText;
    }
}

function deleteMessage(button) {
    var messageElement = button.parentNode.parentNode;
    messageElement.parentNode.removeChild(messageElement);
}
