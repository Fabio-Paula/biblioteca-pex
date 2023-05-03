const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY'

export const tokenService = {
  save(accessToken : any) {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  },
};
