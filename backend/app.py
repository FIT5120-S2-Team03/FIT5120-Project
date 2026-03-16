from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

API_KEY = "869f60db4e57919fe7957bc69504c028"

@app.route("/api/uv")
def get_uv():
    postcode = request.args.get("postcode", "3000")

    # Convert postcode to coordinates using Geocoding API
    geo_url = f"http://api.openweathermap.org/geo/1.0/zip?zip={postcode},AU&appid={API_KEY}"
    geo_response = requests.get(geo_url)
    geo_data = geo_response.json()

    if geo_response.status_code != 200 or "lat" not in geo_data:
        return jsonify({
            "success": False,
            "message": "Please enter a valid location"
        })

    lat = geo_data["lat"]
    lon = geo_data["lon"]
    city_name = geo_data.get("name", postcode)

    # Get UV index for those coordinates
    uv_url = f"https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API_KEY}&exclude=minutely,hourly,daily,alerts"
    uv_response = requests.get(uv_url)
    uv_data = uv_response.json()

    uv_index = uv_data["current"]["uvi"]

    return jsonify({
        "success": True,
        "location": city_name,
        "uv_index": uv_index
    })


if __name__ == "__main__":
    app.run(port=5001)