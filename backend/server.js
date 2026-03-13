const express = require("express");

const app = express();

app.get("/api/uv", (req, res) => {
    const postcode = req.query.postcode;

    res.json({
        postcode: postcode,
        uv: 8,
        risk: "Very High",
        advice: "Wear SPF50 sunscreen"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});