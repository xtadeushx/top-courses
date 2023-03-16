import { ENV } from '../common/enums/enums';
import { Courses } from './courses/courses.service';
import { Http } from './http/http.service';
import { Storage } from './storage/storage.service';

const storage = new Storage({
  storage: localStorage,
});
const http = new Http({
  storage,
});

const courses = new Courses({
  apiPath: ENV.API_PATH,
  http,
});

export { http, storage, courses };
