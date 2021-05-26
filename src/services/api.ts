const API_URL = process.env.REACT_APP_API_URL;

export async function get(endpoint: string): Promise<any> {
  const URL = `${API_URL}/${endpoint}`;
  const response = await fetch(URL, {
    method: 'GET',
  });

  return response.json();
}

export async function post(endpoint: string, data: any): Promise<any> {
  const URL = `${API_URL}/${endpoint}`;
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data || { }),
  });

  return response.json();
}
