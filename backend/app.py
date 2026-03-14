from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

API_KEY = "869f60db4e57919fe7957bc69504c028"

@app.route("/api/uv")
def get_uv():

    postcode = request.args.get("postcode", "3000")

    # Melbourne coordinates (for now)
    lat = -37.8136
    lon = 144.9631

    url = f"https://api.openweathermap.org/data/2.5/uvi?appid={API_KEY}&lat={lat}&lon={lon}"

    response = requests.get(url)
    data = response.json()

    uv_index = data.get("value", 0)

    return jsonify({
        "success": True,
        "location": "Melbourne",
        "uv_index": uv_index
    })


if __name__ == "__main__":
    app.run(port=3000)