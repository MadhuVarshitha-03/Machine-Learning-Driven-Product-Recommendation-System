import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


# =========================
# LOAD DATASET
# =========================

df = pd.read_csv("amazon.csv")


# =========================
# HANDLE MISSING VALUES
# =========================

df["title"] = df["title"].fillna("")
df["category"] = df["category"].fillna("")
df["description"] = df["description"].fillna("")


# =========================
# CREATE COMBINED FEATURES
# =========================

df["combined_features"] = (
    df["title"] + " " +
    df["category"] + " " +
    df["description"]
)


# =========================
# TF-IDF VECTORIZATION
# =========================

tfidf = TfidfVectorizer(
    stop_words="english"
)

tfidf_matrix = tfidf.fit_transform(
    df["combined_features"]
)


# =========================
# RECOMMENDATION FUNCTION
# =========================

def recommend_products(product_title, top_n=5):

    # Find selected product
    matches = df[
        df["title"].str.lower() == product_title.lower()
    ]

    if matches.empty:
        return []


    # Get selected product index
    product_index = matches.index[0]


    # Get selected product category
    selected_category = df.iloc[
        product_index
    ]["category"]


    # =========================
    # FILTER SAME CATEGORY
    # =========================

    category_indices = df[
        df["category"] == selected_category
    ].index.tolist()


    # =========================
    # CALCULATE SIMILARITY
    # =========================

    similarity_scores = cosine_similarity(
        tfidf_matrix[product_index],
        tfidf_matrix
    ).flatten()


    # =========================
    # SORT SAME-CATEGORY PRODUCTS
    # =========================

    category_scores = []

    for index in category_indices:

        # Don't recommend the selected product
        if index == product_index:
            continue

        category_scores.append(
            (
                index,
                similarity_scores[index]
            )
        )


    # Sort by similarity score
    category_scores.sort(
        key=lambda x: x[1],
        reverse=True
    )


    # =========================
    # CREATE RECOMMENDATIONS
    # =========================

    recommendations = []

    for index, score in category_scores:

        recommendations.append({

            "title":
                df.iloc[index]["title"],

            "category":
                df.iloc[index]["category"],

            "description":
                df.iloc[index]["description"],

            "image":
                df.iloc[index]["image_url"],

            "score":
                round(float(score), 4)

        })


        if len(recommendations) == top_n:
            break


    return recommendations