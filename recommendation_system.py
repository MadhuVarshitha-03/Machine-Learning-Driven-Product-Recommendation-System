# Data handling
import pandas as pd
import numpy as np

# NLP libraries
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

# Machine Learning libraries
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
# Download NLTK data
import nltk

try:
    nltk.data.find('tokenizers/punkt')
except LookupError:
    nltk.download('punkt')

try:
    nltk.data.find('tokenizers/punkt_tab')
except LookupError:
    nltk.download('punkt_tab')

try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords')

# Load dataset
data = pd.read_csv("amazon.csv")

print(data.head())
# Combine important features
data['combined_features'] = (
    data['title'] + " " +
    data['category'] + " " +
    data['description']
)

# Display combined text
print(data['combined_features'].head())
# English stopwords
stop_words = set(stopwords.words('english'))

# Text preprocessing function
def preprocess_text(text):

    # Convert to lowercase
    text = text.lower()

    # Split sentence into words
    words = word_tokenize(text)

    # Remove stopwords and special characters
    filtered_words = []

    for word in words:
        if word.isalpha() and word not in stop_words:
            filtered_words.append(word)

    # Join words again
    return " ".join(filtered_words)
# Apply preprocessing
data['processed_text'] = data['combined_features'].apply(preprocess_text)

# Display processed text
print(data['processed_text'].head())
# Create TF-IDF object
tfidf = TfidfVectorizer()

# Convert processed text into TF-IDF matrix
tfidf_matrix = tfidf.fit_transform(data['processed_text'])

# Display matrix shape
print(tfidf_matrix.shape)
# Calculate cosine similarity matrix
cosine_sim = cosine_similarity(tfidf_matrix)

# Display similarity matrix
print(cosine_sim)
# Recommendation function
def recommend_products(product_name, num_recommendations=5):

    # Find product index
    product_index = data[data['title'] == product_name].index

    # Product not found
    if len(product_index) == 0:
        print("Product not found")
        return

    product_index = product_index[0]

    # Get similarity scores
    similarity_scores = list(enumerate(cosine_sim[product_index]))

    # Sort products based on similarity
    sorted_products = sorted(
        similarity_scores,
        key=lambda x: x[1],
        reverse=True
    )

    # Remove same product
    sorted_products = sorted_products[1:]

    print(f"\nRecommended Products for '{product_name}':\n")

    # Display recommendations
    for i in range(num_recommendations):

        product_idx = sorted_products[i][0]

        print(
            data.iloc[product_idx]['title'],
            "| Similarity Score:",
            round(sorted_products[i][1], 2)
        )
# Test recommendations
recommend_products("HP Pavilion Laptop")

recommend_products("Apple iPhone 14")