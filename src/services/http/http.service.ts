import { getStringifiedQuery } from 'helpers/http';
import { StorageKey, HttpHeader, HttpMethod, ENV } from 'common/enums/enums';
import { HttpError } from 'common/enums/exceptions/http-error.exception';

class Http {
  private _storage;
  constructor({ storage }: any) {
    this._storage = storage;
    console.log('constructor')
    this._fetchToken();
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

  async _fetchToken() {
    let auth = localStorage.getItem('token');
    if (auth) return;
    try {
      const resp = await fetch(
        'https://api.wisey.app/api/v1/auth/anonymous?platform=subscriptions'
      );
      if (!resp.ok) {
        throw new Error(`${resp.status} server error`);
      }
      const token = await resp.json();
      localStorage.setItem('token', JSON.stringify(token.token));
      return token;
    } catch (error) {
      console.log(error);
    }
  };


  async _getHeaders({ hasAuth, contentType }: any) {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    if (hasAuth) {
      try {
        let token = this._storage.getItem(StorageKey.TOKEN);
        if (!token) {
          let data = await this._fetchToken()
          token = await data.token
        }
        headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
        console.log('token', token)
      } catch (error) {
        console.log(error);
      }
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
