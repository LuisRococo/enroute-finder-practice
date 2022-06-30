export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export interface Url {
  method: HttpMethod;
  path: string;
}

export interface ControllerRoutes {
  [key: string]: Url | string;
  prefix: string;
}

export interface ServiceRoutes {
  [k: string]: ControllerRoutes;
}
