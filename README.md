# RecipeFinder


RecipeFinder is a React-based web application that allows users to search for recipes and view detailed cooking instructions using the Spoonacular API.

## 🚀 Features

- 🔍 Search recipes by name (e.g., pasta, burger, pizza)  
- 🍲 View list of matching recipes  
- 🖼️ Display recipe images and titles  
- 📖 View full recipe details (ingredients + instructions)  
- ⚡ Fast and responsive UI using React  
- 🌐 Fetches real-time data from Spoonacular API  

**🛠️ Tech Stack**
React (Vite)
JavaScript (ES6+)
CSS Modules
Spoonacular API

**📸 Project Flow**
User enters a search query (default: "pasta")
API fetches recipes based on query
Results are displayed using FoodList and FoodItem components
User clicks “View Recipe” button
Recipe ID is sent to fetch detailed recipe data
Ingredients and instructions are displayed in FoodDetails component

**🔑 API Setup**

This project uses the Spoonacular API.

1. Get API Key

Create an account at:
https://spoonacular.com/food-api

2. Create .env file in root folder
VITE_API_KEY=your_api_key_here

4. Use it in project
const API_KEY = import.meta.env.VITE_API_KEY;

**▶️ Installation & Run**

Clone the repository:

Go to project folder:

cd RecipeFinder

Install dependencies:

npm install

Run development server:

npm run dev

⚠️ Important Notes
Make sure to add .env file (not included in repo)
API key should never be pushed to GitHub
If API doesn’t work, check quota limits on Spoonacular
