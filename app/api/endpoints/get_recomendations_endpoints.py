from fastapi import APIRouter, Depends, HTTPException
from app.schemas.GetInfo import PersonalInfo
from app.services.gemini_handler import get_recommendations
import logging

logging.basicConfig(level=logging.INFO)

router = APIRouter()

@router.post("/get_recomendation/", response_model=dict)
async def get_recomendation(personal_info: PersonalInfo):
    try:
        recommendations = get_recommendations(personal_info.city, personal_info.age, personal_info.interests)
        return {"message": recommendations}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal Server Error")
