import { should } from 'chai';
import * as chai from 'chai';

import gitsha from "../src";

should();

describe("gitsha", function () {
    describe("#short-default-path", function () {
        this.timeout(1000);
        it("should get the short sha1 of the current directory", async function () {
            let sha = await gitsha();
            sha.should.be.a("string");
            sha.should.have.length(7);
        })
    })
    describe("#short-dot-path", function () {
        this.timeout(1000);
        it("should get the short sha1 of the current directory", async function () {
            let sha = await gitsha(".");
            sha.should.be.a("string");
            sha.should.have.length(7);
        })
    })
    describe("#long-dot-path", function () {
        this.timeout(1000);
        it("should get the long sha1 of the current directory", async function () {
            let sha = await gitsha(".", true);
            sha.should.be.a("string");
            sha.should.have.length(40);
        })
    })
})
