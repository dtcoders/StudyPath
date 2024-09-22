import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="env/.env")

AI_KEY = os.getenv("AI_KEY")
DATABASE_URL = os.getenv("DATABASE_URL")