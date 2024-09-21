from pydantic import BaseModel

class PersonalInfo(BaseModel):
	city: str
	age: str
	interests: str
