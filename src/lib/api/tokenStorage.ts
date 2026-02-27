const ACCESS_TOKEN_KEY = 'kooji_access_token';
const REFRESH_TOKEN_KEY = 'kooji_refresh_token';

function isClient(): boolean {
  return typeof window !== 'undefined';
}

export function getAccessToken(): string | null {
  if (!isClient()) return null;
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function setAccessToken(token: string): void {
  if (!isClient()) return;
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function removeAccessToken(): void {
  if (!isClient()) return;
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  if (!isClient()) return null;
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function setRefreshToken(token: string): void {
  if (!isClient()) return;
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
}

export function removeRefreshToken(): void {
  if (!isClient()) return;
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export function saveTokens(accessToken: string, refreshToken: string): void {
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
}

export function clearTokens(): void {
  removeAccessToken();
  removeRefreshToken();
}

export function isAuthenticated(): boolean {
  return Boolean(getAccessToken());
}
