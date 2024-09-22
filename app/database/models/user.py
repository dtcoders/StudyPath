from sqlalchemy import Column, Integer, String, Boolean
from .base import Base

class User(Base):
	__tablename__ = "users"
	id = Column(Integer, primary_key=True, index=True)
	username = Column(String, unique=True)
	hashed_password = Column(String)
	is_active = Column(Boolean, default=True, nullable=False)
	is_superuser = Column(Boolean, default=False, nullable=False)
	is_verified = Column(Boolean, default=False, nullable=False)
	email = Column(String, nullable=False)