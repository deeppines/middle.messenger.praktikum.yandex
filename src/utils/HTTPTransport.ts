import { Options, OptionsWithoutMethod } from '@/types';

import { BASE_URL, Method } from '@/constants';

class HTTPTransport {
  static API_URL = BASE_URL;
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  public get(path: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(`${this.endpoint}${path}`, { ...options, method: Method.GET });
  }

  public post(path: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(`${this.endpoint}${path}`, { ...options, method: Method.POST });
  }

  public put(path: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(`${this.endpoint}${path}`, { ...options, method: Method.PUT });
  }

  public delete(path: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(`${this.endpoint}${path}`, { ...options, method: Method.DELETE });
  }

  public patch(path: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(`${this.endpoint}${path}`, { ...options, method: Method.PATCH });
  }

  private request(url: string, options: Options): Promise<XMLHttpRequest> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) resolve(xhr.response);

          reject(xhr.response);
        }
      };

      xhr.onabort = () => reject({ reason: 'abort' });
      xhr.onerror = () => reject({ reason: 'network error' });
      xhr.ontimeout = () => reject({ reason: 'timeout' });

      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === Method.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}

export default HTTPTransport;