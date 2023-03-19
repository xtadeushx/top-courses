import { Storage } from './storage/storage.service';

const storage = new Storage({
  storage: localStorage,
});

export { storage };
