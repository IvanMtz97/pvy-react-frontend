const API_URL = process.env.REACT_APP_API_URL;

export async function get(endpoint: string): Promise<any> {
  const response = await fetch(`${API_URL}/${endpoint}`, {
    method: 'GET',
  });

  return response.json();
}