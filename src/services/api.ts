const API_URL = process.env.REACT_APP_API_URL;

export async function get(endpoint: string): Promise<any> {
  const URL = `${API_URL}/${endpoint}`;
  const response = await fetch(URL, {
    method: 'GET',
  });

  return response.json();
}