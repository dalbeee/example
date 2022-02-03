import {
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
  InternalServerError,
} from "../errors";

const httpClient = (url: string) => {
  const api: typeof fetch = async (data, options) => {
    return fetch(data, options).then((r) => {
      if (!r.ok) {
        switch (r.status) {
          case 400:
            throw new BadRequestException();
          case 401:
            throw new UnauthorizedException();
          case 404:
            throw new NotFoundException();
          default:
            throw new InternalServerError();
        }
      }
      return r.json();
    });
  };

  const get = (uri: string) => api(`${url}${uri}`, { method: "GET" });

  const post = (uri: string, data: unknown) =>
    fetch(`${url}${uri}`, { method: "POST", body: JSON.stringify(data) });

  return { get, post };
};

export default httpClient("http://localhost:3001");
