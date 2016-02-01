import __polyfill from "babel-polyfill";
import request from "supertest";
import http from "http";
import parse from "../isotropy-middleware-url";
import should from "should";

describe('Isotropy Parse Url', () => {
  it('should populate the request with parsed url', async () => {
    const req = { url: '/status?name=ryan' };
    await parse(req);
    req.href.should.equal('/status?name=ryan');
    req.search.should.equal('?name=ryan');
    req.query.should.deepEqual({name:'ryan'});
    req.pathname.should.equal('/status');
  });
});
