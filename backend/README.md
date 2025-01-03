# Udora Gen - AI-Powered Chatbot

Udora Gen is a modern, AI-powered chatbot that allows users to interact with an intelligent assistant, upload files (PDFs and images), and analyze their content. The backend is built with **Node.js**, **Express.js**, and **MongoDB**, while the frontend uses **React.js**. The chatbot is powered by **Gemini AI**, and file uploads are handled by **Cloudinary**.

---

## **Features**

1. **AI-Powered Chat**:
   - Interact with an intelligent chatbot powered by Gemini AI.
   - Maintains conversation history for context-aware responses.

2. **File Uploads**:
   - Upload PDFs and images.
   - Extract and analyze content from uploaded files.

3. **User Authentication**:
   - Register and log in with email and password.
   - Secure authentication using JWT (JSON Web Tokens).

4. **Analytics**:
   - Track chat and file usage statistics.
   - View insights into user interactions.

5. **Customizable UI**:
   - Light and dark mode support.
   - Modern, responsive design.

---

## **Tech Stack**

### **Backend**
- **Node.js**: Runtime environment.
- **Express.js**: Web framework.
- **MongoDB**: NoSQL database for storing user data, chat history, and file metadata.
- **Cloudinary**: File storage and processing.
- **Gemini AI**: AI-powered chatbot.

### **Frontend**
- **React.js**: Frontend library.
- **Tailwind CSS**: Utility-first CSS framework.
- **React Icons**: Icon library.

### **Other Tools**
- **JWT**: JSON Web Tokens for authentication.
- **Multer**: Middleware for file uploads.
- **Winston**: Logging library.

---

## **Directory Structure**
```
udora-gen/
├── backend/               # Backend code
│   ├── config/            # Configuration files
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API route definitions
│   ├── services/          # Business logic and external API calls
│   ├── utils/             # Utility functions and helpers
│   ├── validators/        # Request validation schemas
│   ├── app.js             # Main application file
│   ├── server.js          # Server entry point
│   └── .env               # Environment variables
├── frontend/              # Frontend code
│   ├── public/            # Static assets
│   ├── src/               # Main source code
│   │   ├── components/    # Reusable UI components
│   │   ├── context/       # React Context API for state management
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Application pages
│   │   ├── services/      # API services
│   │   ├── styles/        # Global and component-specific styles
│   │   ├── utils/         # Utility functions and helpers
│   │   ├── App.jsx        # Main application component
│   │   ├── main.jsx       # Entry point for the app
│   │   └── index.css      # Global styles
│   └── package.json       # Frontend dependencies and scripts
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

---

## **Setup and Installation**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/udora-gen.git
cd udora-gen
```

### **2. Backend Setup**
Navigate to the backend folder:
```bash
cd backend
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the backend folder and add the required environment variables (see `.env.example`).

Start the backend server:
```bash
npm start
```

### **3. Frontend Setup**
Navigate to the frontend folder:
```bash
cd ../frontend
```

Install dependencies:
```bash
npm install
```

Start the frontend development server:
```bash
npm run dev
```

---

## **Usage**

1. **Register/Login**:
   - Register a new user or log in with existing credentials.

2. **Chat with Udora Gen**:
   - Type your message in the chat input and press Enter.
   - Udora Gen will respond with an intelligent reply.

3. **Upload Files**:
   - Click the "Upload" button to upload a PDF or image.
   - Udora Gen will analyze the file and provide insights.

4. **View Analytics**:
   - Navigate to the "Analytics" page to view chat and file usage statistics.

5. **Customize UI**:
   - Toggle between light and dark mode using the theme toggle button.

---

## **API Endpoints**

### **Authentication**
- **POST /api/auth/register** - Register a new user.
- **POST /api/auth/login** - Log in an existing user.

### **Chat**
- **POST /api/chat/send** - Send a message to the chatbot.
- **GET /api/chat/history** - Get chat history.

### **File Uploads**
- **POST /api/file/upload** - Upload a file (PDF or image).
- **GET /api/file/user** - Get all files uploaded by the user.

### **User Profile**
- **GET /api/user/profile** - Get user profile.
- **PUT /api/user/profile** - Update user profile.

### **Analytics**
- **GET /api/analytics/chat** - Get chat analytics.
- **GET /api/analytics/file** - Get file analytics.

---

## **Contributing**

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```
3. Commit your changes:
```bash
git commit -m "Add your feature"
```
4. Push to the branch:
```bash
git push origin feature/your-feature-name
```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the LICENSE file for details.

---

## **Contact**

For any questions or feedback, please contact:

Udit Gupta - udit.gupta@example.com

Project Link: [GitHub Repository](https://github.com/your-username/udora-gen)

---

## **Flow and Connections**

1. **Environment Variables**: `.env` stores sensitive data like API keys and database URLs.
2. **Express Setup**: `app.js` configures middleware, routes, and error handling.
3. **Server Entry**: `server.js` starts the backend server.
4. **Documentation**: `README.md` provides detailed instructions for setting up, using, and contributing to the project.

---

Let me know if you need further assistance! 🚀

