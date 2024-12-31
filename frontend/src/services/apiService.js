import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Update with your backend URL if different


// Function to send a message to the backend
export const sendMessage = async (message) => {
    try {
        const response = await axios.post(`${API_URL}/chat`, { message });
        return response.data.response;
    } catch (error) {
        console.error('Error sending message:', error);
        throw error;
    }
};


// Function to convert the history object to a format that can be used in the frontend
function transformChat(history) {

    return history.map((msg) => {
        const role = msg.role === 'user' ? 'user' : 'bot';
        return {
            text: msg.parts[0].text,
            sender: role
        }
    });

}

// Function to fetch chat history from the backend
export const getChatHistory = async () => {
    try {
        const response = await axios.get(`${API_URL}/chat-history`);
        const transformedChat = transformChat(response.data.history);
        return transformedChat;
    } catch (error) {
        console.error('Error fetching chat history:', error);
        throw error;
    }
};