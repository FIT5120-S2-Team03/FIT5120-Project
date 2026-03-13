// mock UV data — replace with real API responses once backend is ready

export const veryhighUVData = {
  success: true,
  location: "Melbourne",
  uv_index: 8
};

export const lowUVData = {
  success: true,
  location: "Hobart",
  uv_index: 2
};

export const moderateUVData = {
  success: true,
  location: "Sydney",
  uv_index: 5
};

export const highUVData = {
  success: true,
  location: "Brisbane",
  uv_index: 7
};

export const extremeUVData = {
  success: true,
  location: "Darwin",
  uv_index: 11
};

export const errorData = {
  success: false,
  message: "Please enter a valid location"
};

export default {
  very_high: veryhighUVData,
  low: lowUVData,
  moderate: moderateUVData,
  high: highUVData,
  extreme: extremeUVData,
  error: errorData
};
