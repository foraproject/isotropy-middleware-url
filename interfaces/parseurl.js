import type { IncomingMessage } from "http";

declare module "parseurl" {
  declare function exports(req: IncomingMessage) : void;
}
