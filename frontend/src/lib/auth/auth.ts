export async function login(email: string, pass: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password: pass }),
  });
  if (!res.ok) throw new Error('Login failed');
  const data = await res.json();
  localStorage.setItem('access_token', data.accessToken);
  return data;
}

export function logout() {
  localStorage.removeItem('access_token');
}

export function getAccessToken() {
  return typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
}
