# ---------------------------------------
# ADVANCED PRODUCT RECOMMENDATION SYSTEM
# ---------------------------------------

import pandas as pd
import nltk
import streamlit as st

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# Download NLTK data
nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('stopwords')

# ---------------------------------------
# PAGE CONFIG
# ---------------------------------------

st.set_page_config(
    page_title="Amazon Recommendation System",
    page_icon="🛍️",
    layout="wide"
)

# ---------------------------------------
# TITLE
# ---------------------------------------

st.title("🛍️ Amazon Product Recommendation System")

st.markdown(
    "### Get AI-powered product recommendations instantly"
)

# ---------------------------------------
# LOAD DATA
# ---------------------------------------

data = pd.read_csv("amazon.csv")

# ---------------------------------------
# COMBINE FEATURES
# ---------------------------------------

data['combined_features'] = (
    data['title'] + " " +
    data['category'] + " " +
    data['description']
)

# ---------------------------------------
# TEXT PREPROCESSING
# ---------------------------------------

stop_words = set(stopwords.words('english'))

def preprocess_text(text):

    text = text.lower()

    words = word_tokenize(text)

    filtered_words = []

    for word in words:
        if word.isalpha() and word not in stop_words:
            filtered_words.append(word)

    return " ".join(filtered_words)

data['processed_text'] = data['combined_features'].apply(preprocess_text)

# ---------------------------------------
# TF-IDF
# ---------------------------------------

tfidf = TfidfVectorizer()

tfidf_matrix = tfidf.fit_transform(data['processed_text'])

# ---------------------------------------
# COSINE SIMILARITY
# ---------------------------------------

cosine_sim = cosine_similarity(tfidf_matrix)

# ---------------------------------------
# RECOMMENDATION FUNCTION
# ---------------------------------------

def recommend_products(product_name, num_recommendations=5):

    product_index = data[data['title'] == product_name].index[0]

    similarity_scores = list(enumerate(cosine_sim[product_index]))

    sorted_products = sorted(
        similarity_scores,
        key=lambda x: x[1],
        reverse=True
    )

    sorted_products = sorted_products[1:]

    recommendations = []

    for i in range(num_recommendations):

        product_idx = sorted_products[i][0]

        recommendations.append({
            'title': data.iloc[product_idx]['title'],
            'image': data.iloc[product_idx]['image_url'],
            'score': round(sorted_products[i][1], 2),
            'category': data.iloc[product_idx]['category']
        })

    return recommendations

# ---------------------------------------
# PRODUCT SELECTION
# ---------------------------------------

selected_product = st.selectbox(
    "Select a Product",
    data['title'].values
)

# ---------------------------------------
# BUTTON
# ---------------------------------------
if st.button("Show Recommendations"):

    recommendations = recommend_products(selected_product)

    st.subheader("Recommended Products")

    cols = st.columns(5)

    for idx, product in enumerate(recommendations):

        with cols[idx]:

            st.image(product['image'], width=180)

            st.markdown(
                f"#### {product['title']}"
            )

            st.write(
                f"🛒 Category: {product['category']}"
            )

            st.write(
                f"⚡ Similarity: {product['score']}"
            )