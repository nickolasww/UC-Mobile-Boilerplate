const API_BASE_URL = "https://api.example.com";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }
    return data;
  } catch (error) {
    throw Error;
  }
};

// dapatkan user profile
export const getUserProfile = async (token: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to get user profile");
    }
    return data;
  } catch (error) {
    throw Error;
  }
};

export const registerUser = async (name: string, email: string, password: string, confirmPassword: string ) => { 
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  try{ 
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Registration failed");
    }
    return data;
  }catch (error) {
    throw new Error("Registration failed. Please try again.");
  }
}