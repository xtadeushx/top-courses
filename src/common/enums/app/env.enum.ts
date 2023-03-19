const { VITE_APP_API_PATH, VITE_APP_API_PATH_TOKEN } = import.meta.env;

const ENV = {
  API_PATH: VITE_APP_API_PATH,
  TOKEN_PATH: VITE_APP_API_PATH_TOKEN,
};

export { ENV };
