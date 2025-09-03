// Fake auth state - replace with SecureStore/AsyncStorage later
let isAuthenticated = true;

export const auth = {
  login: () => {
    isAuthenticated = true;
  },
  logout: () => {
    isAuthenticated = false;
  },
  check: () => isAuthenticated,
};
