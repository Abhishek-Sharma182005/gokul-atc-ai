// Kamdhenu AI - API Configuration
// Update this file to change the Gradio backend URL easily

export const API_CONFIG = {
  // Current Gradio URL - Update this when you get a new temporary URL
  GRADIO_ENDPOINT: "https://f03ad93b6fc8b3d0c4.gradio.live/run/predict",
  
  // Timeout settings
  REQUEST_TIMEOUT: 30000, // 30 seconds
  STATUS_CHECK_TIMEOUT: 5000, // 5 seconds
  
  // API endpoints
  PREDICT_ENDPOINT: "/run/predict",
  HEALTH_CHECK: "/",
} as const;

// Helper function to update API endpoint at runtime
export const updateApiEndpoint = (newUrl: string) => {
  const cleanUrl = newUrl.endsWith('/') ? newUrl.slice(0, -1) : newUrl;
  (API_CONFIG as any).GRADIO_ENDPOINT = `${cleanUrl}${API_CONFIG.PREDICT_ENDPOINT}`;
  console.log(`🔄 API Endpoint updated to: ${API_CONFIG.GRADIO_ENDPOINT}`);
};

// Command to quickly update in browser console:
// updateApiEndpoint("https://your-new-gradio-url.gradio.live")
(window as any).updateApiEndpoint = updateApiEndpoint;