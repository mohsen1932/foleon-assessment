export function getToken() {
  const access_token = sessionStorage.getItem("access_token");
  const expires_in = sessionStorage.getItem("expires_in");
  return { access_token, expires_in };
}
export function saveToken(access_token, expires_in) {
  sessionStorage.setItem("access_token", access_token);
  const now = new Date().getTime();
  sessionStorage.setItem("expires_in", now + expires_in);
}
export function isExpired(expires_in) {
  const now = new Date().getTime();
  return now < Number(expires_in);
}
export function deleteToken() {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("expires_in");
}
