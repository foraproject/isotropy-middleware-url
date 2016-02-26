import type { IncomingMessage } from "http";

declare module "parseurl" {
  declare function exports(req: IncomingMessage) : { href: string, pathname: string, query: string, search: string };
}
