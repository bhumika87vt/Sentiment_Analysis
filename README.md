Sentiment_Analysis
Sentiment Analysis Web App is a simple and user-friendly application designed to analyze the emotional tone of text. It helps students, developers, and businesses identify whether a message is Positive, 
Negative, or Neutral using machine learning. The tool provides a clean interface, fast predictions,and stores results for later reference.

Features:
1. Input any text to analyze sentiment
2. Predicts Positive / Negative / Neutral instantly
3. ML-based prediction using NLP techniques
4. Stores query and result in the database
5. Clean and responsive UI
6. Fast backend API responses
7. Error-handling for empty or invalid input

Tech Stack:
1. Frontend: React 18 + Axios + CSS
2. Backend: Python Flask API (localhost:5000)
3. Machine Learning: NLP + Scikit-learn model
4. Database: MySQL (via MySQL Workbench)
5. Deployment: Ready for Netlify / Vercel (Frontend) & Render / Railway (Backend)

How It Works:
User enters a sentence in the React UI.
The text is sent to the Flask API for processing.
The ML model analyzes the sentiment.
Result (Positive / Negative / Neutral) is stored in the MySQL database.
The frontend displays the final sentiment instantly.

Demo Usage
Input:
“I love this product, it works perfectly!”
Output:
Sentiment: Positive
