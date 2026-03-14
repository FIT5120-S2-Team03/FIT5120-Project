const express = require("express");

const app = express();

// API endpoint
app.get("/api/uv", (req, res) => {

  const postcode = req.query.postcode || "3000";

  // Mock UV data
  const uvIndex = 8;

  res.json({
    location: "Melbourne",
    postcode: postcode,
    uv_index: uvIndex
  });

});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});