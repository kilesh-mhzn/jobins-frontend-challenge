interface ApiResponse<T> {
  data: T;
  message?: string;
}

class APIClient {
  baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async request<T>(url: string, options: RequestInit): Promise<ApiResponse<T>> {
    const response = await fetch(`${this.baseURL}${url}`, options);

    if (!response.ok) {
      const error = new HttpError(
        "HTTP Error",
        response.status,
        (await response.json()) as ApiResponse<unknown>
      );
      throw error;
    }

    return response.json() as Promise<ApiResponse<T>>;
  }

  async get<T>(url: string): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async post<T>(
    url: string,
    data: Record<string, unknown>
  ): Promise<ApiResponse<T>> {
    return this.request<T>(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

class HttpError extends Error {
  status: number;
  response: ApiResponse<unknown>;

  constructor(message: string, status: number, response: ApiResponse<unknown>) {
    super(message);
    this.status = status;
    this.response = response;
  }
}

export const apiClient = new APIClient("");
