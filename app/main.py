from app.api.endpoints import get_recomendations_endpoints

from fastapi import FastAPI


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

app.include_router(get_recomendations_endpoints.router, prefix="/api")


# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="0.0.0.0", port=8000)

