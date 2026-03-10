// mock UV data — replace with real API responses once backend is ready

export const melbourneData = {
  success: true,
  location: "Melbourne",
  uv_index: 2,
  uv_level: "low",
  label: "Low",
  warning_text: "Your skin will start damaging in 15 mins",
  damage_time: 15,
  progress: 0.73
};

export const lowUVData = {
  success: true,
  location: "Hobart",
  uv_index: 2,
  uv_level: "low",
  label: "Low",
  warning_text: "Your skin will start damaging in 60 mins",
  damage_time: 60,
  progress: 0.18
};

export const moderateUVData = {
  success: true,
  location: "Sydney",
  uv_index: 5,
  uv_level: "moderate",
  label: "Moderate",
  warning_text: "Your skin will start damaging in 30 mins",
  damage_time: 30,
  progress: 0.45
};

export const highUVData = {
  success: true,
  location: "Brisbane",
  uv_index: 7,
  uv_level: "high",
  label: "High",
  warning_text: "Your skin will start damaging in 20 mins",
  damage_time: 20,
  progress: 0.64
};

export const extremeUVData = {
  success: true,
  location: "Darwin",
  uv_index: 11,
  uv_level: "extreme",
  label: "Extreme",
  warning_text: "Your skin will start damaging in 10 mins",
  damage_time: 10,
  progress: 1.0
};

export const errorData = {
  success: false,
  message: "Please enter a valid location"
};

export default {
  melbourne: melbourneData,
  low: lowUVData,
  moderate: moderateUVData,
  high: highUVData,
  extreme: extremeUVData,
  error: errorData
};
