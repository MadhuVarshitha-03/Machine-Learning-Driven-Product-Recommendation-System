<<<<<<< HEAD

#  ML-Driven Product Recommendation System

An interactive content-based product recommendation system built using Python, NLP, Scikit-learn, and Streamlit.

This project recommends similar Amazon-style products using TF-IDF vectorization and cosine similarity.

---

# 🚀 Features

- Content-Based Recommendation System
- NLP Text Preprocessing
- TF-IDF Vectorization
- Cosine Similarity Matching
- Interactive Streamlit Web App
- Product Images
- Similarity Scores
- Modern Recommendation Cards

---

# 🧠 Machine Learning Concepts Used

## TF-IDF Vectorization

Converts product descriptions into numerical vectors.

\[
TF-IDF(t,d)=TF(t,d)\times \log\left(\frac{N}{DF(t)}\right)
\]

---

## Cosine Similarity

Measures similarity between products.

\[
\cos(\theta)=\frac{A\cdot B}{||A|| ||B||}
\]

---

# 🛠️ Technologies Used

- Python
- Pandas
- NumPy
- NLTK
- Scikit-learn
- Streamlit

---

# 📂 Project Structure

```bash
ML_Product_Recommendation_System/
│
├── amazon.csv
├── app.py
├── recommendation_system.py
├── requirements.txt
├── README.md
```

---

# 📊 Workflow

```text
Dataset
   ↓
Text Preprocessing
   ↓
TF-IDF Vectorization
   ↓
Cosine Similarity
   ↓
Recommendation Engine
   ↓
Streamlit Web Application
```

---

# ▶️ How to Run Project

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/ML_Product_Recommendation_System.git
```

---

## 2️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 3️⃣ Run Streamlit App

```bash
streamlit run app.py
```

---

# 📸 Project Preview

The application provides:

- Product recommendations
- Product images
- Similarity scores
- Interactive recommendation interface

---

# 💡 Future Improvements

- Collaborative Filtering
- Deep Learning Recommender
- User Authentication
- Product Ratings
- Search and Filters
- Cloud Deployment

=======
# \# 🛍️ Machine Learning Driven Product Recommendation System

# 

# A full-stack machine learning application that recommends similar products based on product title, category, and description.

# 

# The system uses \*\*TF-IDF vectorization\*\* and \*\*Cosine Similarity\*\* for content-based product recommendations. The machine learning model is exposed through a \*\*FastAPI service\*\*, while a \*\*Node.js + Express backend\*\* handles API requests and MongoDB data access. The frontend is developed using \*\*React.js\*\*.

# 

# \---

# 

# \## 📌 Overview

# 

# Online shopping platforms contain a large number of products, making it difficult for users to discover relevant alternatives.

# 

# This project provides a product recommendation system where users can:

# 

# \- Search for products

# \- Filter products by category

# \- Select a product

# \- View product details

# \- Get similar product recommendations

# \- View similarity scores for recommendations

# 

# The recommendation engine follows a \*\*content-based filtering\*\* approach. Recommendations are generated based on the characteristics of the selected product rather than user ratings or purchase history.

# 

# \---

# 

# \## ✨ Features

# 

# \- 🔍 Product search

# \- 🗂️ Category filtering

# \- 🛍️ Product selection

# \- 🤖 Machine learning based recommendations

# \- 📊 Similarity scores

# \- 🖼️ Product images

# \- ⚡ REST API communication

# \- 🗄️ MongoDB Atlas database

# \- 🐍 Python FastAPI ML service

# \- ⚛️ React.js frontend

# \- 🟢 Node.js + Express backend

# \- 🔄 Category-aware recommendations

# \- ⏳ Loading and error handling

# 

# \---

# 

# \## 🏗️ System Architecture

# 

# ```text

# &#x20;                        USER

# &#x20;                          │

# &#x20;                          ▼

# &#x20;                 ┌─────────────────┐

# &#x20;                 │  React Frontend │

# &#x20;                 │     (Vite)      │

# &#x20;                 └────────┬────────┘

# &#x20;                          │

# &#x20;                     HTTP / REST

# &#x20;                          │

# &#x20;                          ▼

# &#x20;               ┌─────────────────────┐

# &#x20;               │ Node.js + Express   │

# &#x20;               │      Backend        │

# &#x20;               └───────┬───────┬─────┘

# &#x20;                       │       │

# &#x20;                       │       │ HTTP

# &#x20;                       │       ▼

# &#x20;                       │  ┌──────────────┐

# &#x20;                       │  │   FastAPI    │

# &#x20;                       │  │  ML Service  │

# &#x20;                       │  └──────┬───────┘

# &#x20;                       │         │

# &#x20;                       │         ▼

# &#x20;                       │  ┌──────────────────┐

# &#x20;                       │  │ TF-IDF +         │

# &#x20;                       │  │ Cosine Similarity│

# &#x20;                       │  └──────────────────┘

# &#x20;                       │

# &#x20;                       ▼

# &#x20;                ┌─────────────────┐

# &#x20;                │  MongoDB Atlas  │

# &#x20;                │    Products     │

# &#x20;                └─────────────────┘

# ```

# 

# \---

# 

# \## 🧠 Machine Learning Approach

# 

# The project uses \*\*content-based filtering\*\*.

# 

# Each product contains:

# 

# \- Product title

# \- Category

# \- Description

# 

# These fields are combined into a single text representation.

# 

# \### 1. Feature Combination

# 

# ```text

# Title + Category + Description

# ```

# 

# Example:

# 

# ```text

# Samsung Galaxy S23

# \+

# Electronics

# \+

# Android smartphone mobile phone with high resolution camera...

# ```

# 

# \### 2. TF-IDF Vectorization

# 

# TF-IDF stands for \*\*Term Frequency-Inverse Document Frequency\*\*.

# 

# It converts product text into numerical vectors based on the importance of words within the dataset.

# 

# The project uses:

# 

# ```python

# TfidfVectorizer(stop\_words="english")

# ```

# 

# This produces a TF-IDF matrix representing the products.

# 

# \### 3. Cosine Similarity

# 

# Cosine similarity is used to measure the similarity between product vectors.

# 

# A higher similarity score indicates that the products have more similar textual features.

# 

# \### 4. Category-Aware Recommendations

# 

# The system first identifies the category of the selected product.

# 

# It then considers products from the same category and ranks them according to their cosine similarity score.

# 

# This helps reduce recommendations from unrelated product categories.

# 

# \---

# 

# \## 🔄 Recommendation Workflow

# 

# ```text

# User selects a product

# &#x20;       ↓

# React sends product name

# &#x20;       ↓

# Node.js backend receives request

# &#x20;       ↓

# Node.js calls FastAPI ML service

# &#x20;       ↓

# FastAPI finds the selected product

# &#x20;       ↓

# Product text is represented using TF-IDF

# &#x20;       ↓

# Cosine similarity is calculated

# &#x20;       ↓

# Products from the same category are considered

# &#x20;       ↓

# Products are sorted by similarity score

# &#x20;       ↓

# Top recommendations are returned

# &#x20;       ↓

# FastAPI → Node.js → React

# &#x20;       ↓

# Recommendations displayed to the user

# ```

# 

# \---

# 

# \## 🛠️ Technology Stack

# 

# \### Frontend

# 

# \- React.js

# \- Vite

# \- Axios

# \- HTML

# \- CSS

# \- JavaScript

# 

# \### Backend

# 

# \- Node.js

# \- Express.js

# \- Axios

# \- CORS

# \- dotenv

# 

# \### Database

# 

# \- MongoDB Atlas

# \- Mongoose

# 

# \### Machine Learning

# 

# \- Python

# \- FastAPI

# \- Pandas

# \- Scikit-learn

# \- TF-IDF

# \- Cosine Similarity

# 

# \### Tools

# 

# \- Visual Studio Code

# \- Git

# \- GitHub

# \- PowerShell

# 

# \---

# 

# \## 📁 Project Structure

# 

# ```text

# ML\_Product\_Recommendation\_System/

# │

# ├── amazon.csv

# ├── .gitignore

# ├── README.md

# │

# ├── backend/

# │   ├── models/

# │   │   └── Product.js

# │   │

# │   ├── routes/

# │   │   ├── productRoutes.js

# │   │   └── recommendationRoutes.js

# │   │

# │   ├── importProducts.js

# │   ├── server.js

# │   ├── package.json

# │   └── package-lock.json

# │

# ├── frontend/

# │   ├── public/

# │   │   └── favicon.svg

# │   │

# │   ├── src/

# │   │   ├── assets/

# │   │   │   └── hero.png

# │   │   ├── App.jsx

# │   │   ├── App.css

# │   │   ├── index.css

# │   │   └── main.jsx

# │   │

# │   ├── package.json

# │   ├── package-lock.json

# │   ├── index.html

# │   └── vite.config.js

# │

# └── ml-service/

# &#x20;   ├── amazon.csv

# &#x20;   ├── app.py

# &#x20;   ├── recommendation.py

# &#x20;   └── requirements.txt

# ```

# 

# \---

# 

# \## 🗄️ Dataset

# 

# The current version uses a dataset containing \*\*100 products\*\* across multiple product categories.

# 

# Each product contains:

# 

# ```text

# id

# title

# category

# description

# image\_url

# ```

# 

# The dataset is used by:

# 

# \- MongoDB for product storage

# \- FastAPI ML service for recommendation generation

# 

# \---

# 

# \# 🚀 Installation and Setup

# 

# \## 1. Clone the Repository

# 

# ```bash

# git clone <YOUR\_GITHUB\_REPOSITORY\_URL>

# ```

# 

# Navigate to the project:

# 

# ```bash

# cd ML\_Product\_Recommendation\_System

# ```

# 

# \---

# 

# \## 2. Backend Setup

# 

# Navigate to the backend:

# 

# ```bash

# cd backend

# ```

# 

# Install dependencies:

# 

# ```bash

# npm install

# ```

# 

# Create a `.env` file inside the `backend` folder:

# 

# ```env

# PORT=5000

# MONGO\_URI=YOUR\_MONGODB\_CONNECTION\_STRING

# ML\_SERVICE\_URL=http://127.0.0.1:8000

# ```

# 

# Do not upload the `.env` file to GitHub.

# 

# \---

# 

# \## 3. Import Products into MongoDB

# 

# From the backend directory:

# 

# ```bash

# node importProducts.js

# ```

# 

# The import script:

# 

# 1\. Reads the product CSV.

# 2\. Removes the existing product records.

# 3\. Inserts the current products into MongoDB.

# 4\. Verifies the number of products imported.

# 

# The current database contains:

# 

# ```text

# 100 products

# ```

# 

# \---

# 

# \## 4. Start the Backend

# 

# Run:

# 

# ```bash

# node server.js

# ```

# 

# The backend runs on:

# 

# ```text

# http://localhost:5000

# ```

# 

# \---

# 

# \# 🐍 ML Service Setup

# 

# Open a new terminal.

# 

# Navigate to the ML service:

# 

# ```bash

# cd ml-service

# ```

# 

# Create a Python virtual environment:

# 

# ```bash

# python -m venv venv

# ```

# 

# Activate it on Windows PowerShell:

# 

# ```powershell

# .\\venv\\Scripts\\Activate.ps1

# ```

# 

# Install the required Python packages:

# 

# ```bash

# pip install -r requirements.txt

# ```

# 

# Start the FastAPI service:

# 

# ```bash

# uvicorn app:app --reload --port 8000

# ```

# 

# The ML service runs on:

# 

# ```text

# http://127.0.0.1:8000

# ```

# 

# FastAPI documentation is available at:

# 

# ```text

# http://127.0.0.1:8000/docs

# ```

# 

# \---

# 

# \# ⚛️ Frontend Setup

# 

# Open another terminal.

# 

# Navigate to the frontend:

# 

# ```bash

# cd frontend

# ```

# 

# Install dependencies:

# 

# ```bash

# npm install

# ```

# 

# Start the React development server:

# 

# ```bash

# npm run dev

# ```

# 

# The frontend runs on:

# 

# ```text

# http://localhost:5173

# ```

# 

# \---

# 

# \# ▶️ Running the Complete Application

# 

# Three services need to run simultaneously.

# 

# \### Terminal 1 — ML Service

# 

# ```powershell

# cd ml-service

# .\\venv\\Scripts\\Activate.ps1

# uvicorn app:app --reload --port 8000

# ```

# 

# \### Terminal 2 — Backend

# 

# ```powershell

# cd backend

# node server.js

# ```

# 

# \### Terminal 3 — Frontend

# 

# ```powershell

# cd frontend

# npm run dev

# ```

# 

# Then open:

# 

# ```text

# http://localhost:5173

# ```

# 

# \---

# 

# \# 🔌 API Endpoints

# 

# \## Get All Products

# 

# ```http

# GET /api/products

# ```

# 

# Example:

# 

# ```text

# http://localhost:5000/api/products

# ```

# 

# Returns the products stored in MongoDB.

# 

# \---

# 

# \## Get Product Recommendations

# 

# ```http

# POST /api/recommendations

# ```

# 

# Request body:

# 

# ```json

# {

# &#x20; "product": "Samsung Galaxy S23"

# }

# ```

# 

# The Node.js backend forwards the selected product to the FastAPI machine learning service.

# 

# \---

# 

# \## ML Recommendation Endpoint

# 

# ```http

# POST /recommend

# ```

# 

# Request:

# 

# ```json

# {

# &#x20; "product": "Samsung Galaxy S23"

# }

# ```

# 

# The FastAPI service calculates similarity and returns the recommended products.

# 

# \---

# 

# \# 🔐 Security

# 

# Sensitive configuration is stored in environment variables.

# 

# The backend uses:

# 

# ```text

# .env

# ```

# 

# for:

# 

# \- MongoDB connection string

# \- Server port

# \- ML service URL

# 

# The `.env` file is excluded from Git using `.gitignore`.

# 

# \---

# 

# \# 🚧 Challenges Faced

# 

# \### MongoDB Connection

# 

# MongoDB Atlas connection issues were encountered during development and resolved while configuring the database connection.

# 

# \### Recommendation Quality

# 

# The initial recommendation approach could return unrelated products because products were compared across the complete dataset.

# 

# The recommendation logic was improved by considering products from the selected product's category.

# 

# \### Dataset Management

# 

# The dataset was initially developed with a smaller number of products and later expanded. The current version has been standardized to 100 products.

# 

# \### Product Images

# 

# External image URLs caused broken or mismatched product images during development. The final dataset uses self-contained image data to avoid dependence on external image URLs.

# 

# \### Full-Stack Integration

# 

# The machine learning functionality was integrated into a full-stack architecture using:

# 

# ```text

# React

# &#x20;  ↓

# Node.js + Express

# &#x20;  ↓

# FastAPI

# &#x20;  ↓

# Machine Learning Model

# ```

# 

# \---

# 

# \# 🔮 Future Enhancements

# 

# \- User-based personalized recommendations

# \- Collaborative filtering

# \- Hybrid recommendation system

# \- User ratings and reviews

# \- Recommendation history

# \- User authentication

# \- Product price filtering

# \- Recommendation analytics

# \- Larger real-world datasets

# \- Transformer-based semantic embeddings

# \- Cloud deployment

# 

# \---

# 

# \## 👩‍💻 Author

# 

# \*\*Madhu Varshitha Yalamarthi\*\*

# 

# \---

# 

# \## ⭐ Project Highlights

# 

# ```text

# Frontend       → React.js

# Backend        → Node.js + Express

# Database       → MongoDB Atlas

# ML Service     → Python + FastAPI

# ML Algorithm   → TF-IDF + Cosine Similarity

# Approach       → Content-Based Filtering

# Dataset        → 100 Products

# Architecture   → Full-Stack Multi-Service Application

# ```
>>>>>>> 35e6f8a (Convert project to full-stack recommendation system)

