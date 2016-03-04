/* @flow */
import parseurl from "parseurl";
import qs from "querystring";
import type { ProcessedIncomingMessage, ServerResponse } from "isotropy-interfaces/node/http";

export default async function(req: ProcessedIncomingMessage, res: ServerResponse) : Promise {
  const parsed = parseurl(req);
  req.href = parsed.href;
  req.pathname = parsed.pathname;
  req.query = qs.parse(parsed.query);
  req.search = parsed.search;
}
