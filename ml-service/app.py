from fastapi import FastAPI
from pydantic import BaseModel

from recommendation import recommend_products


app = FastAPI(
    title="Product Recommendation API",
    description="ML-based Product Recommendation Service",
    version="1.0"
)


class RecommendationRequest(BaseModel):
    product: str


@app.get("/")
def home():
    return {
        "message": "Product Recommendation API is running"
    }


@app.post("/recommend")
def recommend(request: RecommendationRequest):

    recommendations = recommend_products(
        request.product
    )

    return {
        "product": request.product,
        "recommendations": recommendations
    }