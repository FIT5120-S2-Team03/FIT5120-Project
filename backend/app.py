from flask import Flask, request, jsonify
import requests
from shade_calculator import calculate_shade_coverage

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

@app.route("/api/shade")
def get_shade():

    sample_route = [
        (144.9631, -37.8136),
        (144.9640, -37.8140),
        (144.9650, -37.8150)
    ]

    sample_trees = [
        (144.9640, -37.8140),
        (144.9660, -37.8160)
    ]

    shade_score = calculate_shade_coverage(
        sample_route,
        sample_trees
    )

    return jsonify({
        "success": True,
        "shade_coverage": shade_score
    })
if __name__ == "__main__":
    app.run(port=5050)
