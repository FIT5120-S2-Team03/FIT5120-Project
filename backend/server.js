const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "869f60db4e57919fe7957bc69504c028";

// API endpoint
app.get("/api/uv", async (req, res) => {

  const postcode = req.query.postcode || "3000";

  try {
        // 1：postcode → lat/lon（OpenWeatherMap's Geocoding API）
        const geoRes = await axios.get(
            `http://api.openweathermap.org/geo/1.0/zip?zip=${postcode},AU&appid=${API_KEY}`
        );
        const { lat, lon, name } = geoRes.data;

        // 2：lat/lon → UV index
        const uvRes = await axios.get(
            `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}`
        );
        const uvi = uvRes.data.current.uvi;

        res.json({
            success: true,
            location: name,
            uv_index: Math.round(uvi)
        });
  } catch (err) {
      // if postcode is invalid, geo API 404 error
      res.status(400).json({
          success: false,
          message: "Invalid postcode or location not found"
      });
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));