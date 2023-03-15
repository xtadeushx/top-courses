import { getStringifiedQuery } from 'helpers/http';
import { StorageKey, HttpHeader, HttpMethod, ENV } from 'common/enums/enums';
import { HttpError } from 'common/enums/exceptions/http-error.exception';

class Http {
  private _storage;
  constructor({ storage }: any) {
    this._storage = storage;
  }

  load(url: string, options = {}) {
    const {
      method = HttpMethod.GET,
      payload = null,
      hasAuth = true,
      contentType,
      query,
    }: any = options;
    const headers = this._getHeaders({
      hasAuth,
      contentType,
    });

    return fetch(this._getUrl(url, query), {
      method,
      headers,
      body: payload,
    })
      .then(this._checkStatus)
      .then(this._parseJSON)
      .catch(this._throwError);
  }

  async _getHeaders({ hasAuth, contentType }: any) {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    if (hasAuth) {
      let token;
      try {
        token = this._storage.getItem(StorageKey.TOKEN);
        if (!token) return;
        headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
      } catch (error) {
        console.log(error);
      }
      // const token = this._storage.getItem(StorageKey.TOKEN);

    }

    return headers;
  }

  async _checkStatus(response: any) {
    if (!response.ok) {
      const parsedException = await response.json().catch(() => ({
        message: response.statusText,
      }));

      throw new HttpError({
        status: response.status,
        message: parsedException?.message,
      });
    }

    return response;
  }

  _getUrl(url: any, query: any) {
    return `${url}${query ? `?${getStringifiedQuery(query)}` : ''}`;
  }

  _parseJSON(response: any) {
    return response.json();
  }

  _throwError(err: Error) {
    throw err;
  }
}

export { Http };
