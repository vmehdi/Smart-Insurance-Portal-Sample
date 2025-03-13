const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
  ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api`
  : "https://assignment.devotel.io/api";

interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export const fetchApi = {
  get: async <T>(endpoint: string, config?: RequestInit): Promise<ApiResponse<T>> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...(config || {}),
      headers: {
        "Content-Type": "application/json",
        ...config?.headers
      },
      ...(config?.signal && { signal: config.signal })
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        data: responseData
      };
    }

    return responseData;
  },
  post: async <T>(endpoint: string, data?: any, signal?: AbortSignal): Promise<ApiResponse<T>> => {
    let body = data;
    const headers: HeadersInit = {};

    if (!(data instanceof FormData)) {
      body = JSON.stringify(data);
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers,
      body,
      signal
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        data: responseData
      };
    }

    return responseData;
  },
  put: async <T>(endpoint: string, data?: any): Promise<ApiResponse<T>> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        data: responseData
      };
    }

    return responseData;
  },
  delete: async <T>(endpoint: string): Promise<ApiResponse<T>> => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        data: responseData
      };
    }

    return responseData;
  }
};
