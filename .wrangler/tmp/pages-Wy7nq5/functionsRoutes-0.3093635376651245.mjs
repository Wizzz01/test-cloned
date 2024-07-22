import { onRequestGet as __fetch_images_ts_onRequestGet } from "C:\\Users\\user\\Desktop\\elotag-canvas\\elo-canvas\\functions\\fetch-images.ts"
import { onRequestOptions as ___middleware_ts_onRequestOptions } from "C:\\Users\\user\\Desktop\\elotag-canvas\\elo-canvas\\functions\\_middleware.ts"
import { onRequest as ___middleware_ts_onRequest } from "C:\\Users\\user\\Desktop\\elotag-canvas\\elo-canvas\\functions\\_middleware.ts"

export const routes = [
    {
      routePath: "/fetch-images",
      mountPath: "/",
      method: "GET",
      middlewares: [],
      modules: [__fetch_images_ts_onRequestGet],
    },
  {
      routePath: "/",
      mountPath: "/",
      method: "OPTIONS",
      middlewares: [___middleware_ts_onRequestOptions],
      modules: [],
    },
  {
      routePath: "/",
      mountPath: "/",
      method: "",
      middlewares: [___middleware_ts_onRequest],
      modules: [],
    },
  ]