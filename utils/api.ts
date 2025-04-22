/**
 * Utility functions for API calls
 */

type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
};

export async function fetchApi<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { method = 'GET', headers = {}, body } = options;
  
  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  
  if (body) {
    requestOptions.body = JSON.stringify(body);
  }
  
  const response = await fetch(url, requestOptions);
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

export default {
  get: <T>(url: string, headers = {}) => fetchApi<T>(url, { headers }),
  post: <T>(url: string, body: any, headers = {}) => fetchApi<T>(url, { method: 'POST', body, headers }),
  put: <T>(url: string, body: any, headers = {}) => fetchApi<T>(url, { method: 'PUT', body, headers }),
  delete: <T>(url: string, headers = {}) => fetchApi<T>(url, { method: 'DELETE', headers }),
};
