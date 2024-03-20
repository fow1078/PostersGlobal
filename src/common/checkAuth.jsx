export function checkAuthentication() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const sessionExpiration = localStorage.getItem('sessionExpiration');
  const currentTime = new Date().getTime();

  if (isAuthenticated && sessionExpiration && currentTime > parseInt(sessionExpiration)) {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('sessionExpiration');
    return false;
  }

  return !!isAuthenticated;
}