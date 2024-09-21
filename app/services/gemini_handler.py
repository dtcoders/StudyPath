from app.core.config import AI_KEY
import google.generativeai as genai
import logging
from fastapi import HTTPException

def get_recommendations(city, age, interests):
    try:
        genai.configure(api_key=AI_KEY)
        model = genai.GenerativeModel("gemini-1.5-flash")
        prompt = f"Твоя роль: профессиональный помошник в выборе направления и вуза для будущего студента. Твоя задача: по данным которые я дам, максимально точно подобрать направление, и порекомендовать доступные для него ВУЗы для него. Твоя рекомендация должна быть краткой но ёмкой. Информация: Будущий студент находится в городе {city}, ему {age} лет, он увлекается или интересуется этим: {interests}"
        
        response = model.generate_content(prompt)
        
        if not hasattr(response, 'text'):
            logging.error(f"Unexpected response structure: {response}")
            return {"error": "Unexpected API response"}
        
        return response.text

    except Exception as e:
        logging.error(f"Error while generating content: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error while generating recommendations")
