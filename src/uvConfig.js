// UV level configuration — maps UV index ranges to labels, warnings, and display values
// Used to derive UV level info from a raw uv_index value

const UV_LEVELS = {
  low: {
    min: 0,
    max: 2,
    label: "Low",
    warning_text: "UV levels are currently low. Minimal sun protection is required, however SPF 30+ is still recommended for prolonged outdoor activity.",
    damage_time: null,
    progress: 0.18
  },
  moderate: {
    min: 3,
    max: 5,
    label: "Moderate",
    warning_text: "UV levels are moderate. Skin damage can occur within 60 minutes of unprotected exposure. Apply SPF 30+ sunscreen before going outdoors.",
    damage_time: 60,
    progress: 0.45
  },
  high: {
    min: 6,
    max: 7,
    label: "High",
    warning_text: "UV levels are high. Unprotected skin may begin to burn within 30 minutes. Apply SPF 50+ sunscreen, wear protective clothing and a hat.",
    damage_time: 30,
    progress: 0.64
  },
  very_high: {
    min: 8,
    max: 10,
    label: "Very High",
    warning_text: "UV levels are very high. Skin damage can occur within 15 minutes of unprotected exposure. Apply SPF 50+, seek shade and limit time outdoors.",
    damage_time: 15,
    progress: 0.82
  },
  extreme: {
    min: 11,
    max: 20,
    label: "Extreme",
    warning_text: "UV levels are extreme. Unprotected skin can burn in less than 10 minutes. Avoid outdoor activity between 10am and 4pm where possible.",
    damage_time: 10,
    progress: 1.0
  }
};

// Returns the UV level config object for a given uv_index value
export const getUVLevel = (uvIndex) => {
  if (uvIndex >= 11) return UV_LEVELS.extreme;
  if (uvIndex >= 8) return UV_LEVELS.very_high;
  if (uvIndex >= 6) return UV_LEVELS.high;
  if (uvIndex >= 3) return UV_LEVELS.moderate;
  return UV_LEVELS.low;
};

export default UV_LEVELS;
