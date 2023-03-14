import {
  ApiPath,
  CoursesApiPath,
  HttpMethod,
  // ContentType,
} from 'common/enums/enums';

class Courses {
  private _apiPath;
  private _http;

  constructor({ apiPath, http }: any) {
    this._apiPath = apiPath;
    this._http = http;
  }

  getAllCourses() {
    return this._http.load(`${this._apiPath}${ApiPath.COURSES}`, {
      method: HttpMethod.GET,
      query: '',
    });
  }

  getCurrentCourse(id: string) {
    return this._http.load(
      `${this._apiPath}${ApiPath.COURSES}${CoursesApiPath.ROOT}${id}`,
      {
        method: HttpMethod.GET,
      }
    );
  }
}

export { Courses };

