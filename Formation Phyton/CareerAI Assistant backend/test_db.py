import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, text
from sqlalchemy.exc import OperationalError

# Load environment variables from .env
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    print("❌ Error: DATABASE_URL is not set in your .env file.")
    exit(1)

print(f"Connecting to: {DATABASE_URL.split('@')[-1]}")  # Prints host/db without leaking credentials

try:
    # Create the SQLAlchemy engine
    engine = create_engine(DATABASE_URL, echo=False)

    # Test the connection by executing a simple query
    with engine.connect() as connection:
        result = connection.execute(text("SELECT version();"))
        db_version = result.scalar()
        print("✅ Database connection successful!")
        print(f"PostgreSQL Version: {db_version}")

except OperationalError as e:
    print("❌ Connection failed!")
    print(f"Details: {e}")