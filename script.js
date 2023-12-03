function sendMessage() {
    var userInput = document.getElementById('user-input');
    var chatMessages = document.getElementById('chat-messages');
  
    if (userInput.value.trim() !== '') {
      var userMessage = document.createElement('div');
      userMessage.className = 'message user';
      userMessage.textContent = userInput.value;
      chatMessages.appendChild(userMessage);
  
      // Simulate ChatGPT response
      var chatGptMessage = document.createElement('div');
      chatGptMessage.className = 'message chat-gpt';
      chatGptMessage.textContent = 'ChatGPT: This is a simulated response.';
      chatMessages.appendChild(chatGptMessage);
  
      userInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
  