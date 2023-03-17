import { ENV, StorageKey } from 'common/enums/enums';
import { storage } from 'services/services';

const useToken = async () => {
  const auth = storage.getItem(StorageKey.TOKEN);
  if (auth) return;
  try {
    const resp = await fetch(ENV.TOKEN_PATH);
    if (!resp.ok) {
      throw new Error(`${resp.status} server error`);
    }
    const token = await resp.json();
    localStorage.setItem(StorageKey.TOKEN, JSON.stringify(token.token));
  } catch (er) {
    console.log(er);
  }
};
export { useToken };
