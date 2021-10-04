import {API_URL} from '../utils/constants';

type Methods = typeof POST | typeof GET | typeof UPDATE | typeof DELETE;

export const POST = 'POST';
export const GET = 'GET';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export const sendHttpRequest = async (
  method: Methods,
  endpoint: string,
  data: object,
) => {
  const formData = new FormData();

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    body: method !== GET ? formData : undefined,
  });
  if (!response.ok) {
    const responseError = await response.json();
    const error = new Error(`fetch/sendHttpRequest to ${endpoint} failed`);
    (error as any).status = response.status;
    (error as any).text = responseError;
    throw error;
  }

  return response.json();
};
