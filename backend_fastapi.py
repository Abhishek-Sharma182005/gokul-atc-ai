from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import numpy as np
import io
from PIL import Image
import json

app = FastAPI(title="Cattle Breed Classification API", version="1.0.0")

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update with your frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Load the trained model ---
print("Loading final_model.keras...")
model = tf.keras.models.load_model("final_model.keras")
IMG_SIZE = (160, 160)

# --- Load class indices from class_names.json ---
with open("class_names.json", "r") as f:
    CLASS_INDICES = json.load(f)

print("✅ Model loaded successfully!")
print(f"✅ Classes loaded: {len(CLASS_INDICES)} breeds")

@app.get("/")
async def root():
    return {"message": "Cattle Breed Classification API", "status": "online", "model": "final_model.keras"}

@app.post("/predict")
async def predict_breed(file: UploadFile = File(...)):
    """
    Predict cattle/buffalo breed from uploaded image
    Expects: Image file (JPG, PNG, WebP)
    Returns: {predicted_breed: str, confidence: float}
    """
    try:
        # Validate file type
        if not file.content_type.startswith('image/'):
            raise HTTPException(status_code=400, detail="File must be an image")
        
        # Read and process image
        contents = await file.read()
        img = Image.open(io.BytesIO(contents))
        
        # Convert to RGB if needed
        if img.mode != 'RGB':
            img = img.convert('RGB')
        
        # Resize to model input size (160x160)
        img = img.resize(IMG_SIZE)
        
        # Preprocess image (normalize to 0-1)
        x = image.img_to_array(img) / 255.0
        x = np.expand_dims(x, axis=0)
        
        # Make prediction
        preds = model.predict(x)
        class_index = np.argmax(preds[0])
        breed = CLASS_INDICES[str(class_index)]
        confidence = float(preds[0][class_index] * 100)
        
        return {
            "predicted_breed": breed,
            "confidence": round(confidence, 2),
            "class_index": int(class_index),
            "model_version": "final_model.keras"
        }
        
    except Exception as e:
        print(f"Error processing image: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Error processing image: {str(e)}")

@app.get("/classes")
async def get_classes():
    """Get all available breed classes"""
    return {"classes": CLASS_INDICES, "total_classes": len(CLASS_INDICES)}

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "model_loaded": model is not None}

if __name__ == "__main__":
    print("🚀 Starting FastAPI server...")
    print("📋 Available endpoints:")
    print("   - GET  /           : API info")
    print("   - POST /predict    : Upload image for breed prediction")
    print("   - GET  /classes    : List all breed classes")
    print("   - GET  /health     : Health check")
    print("\n🔗 Access API docs at: http://127.0.0.1:8000/docs")
    
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)