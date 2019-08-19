var should = require("should");
var request = require("supertest");
var server = require("../server");
var mongoose = require("mongoose");
const file = require("../routes/api/posts");
//const clinic = require('../api/models/clinic')
// const speciality = require('../api/models/provider_speciality_master')
after(done => {
  mongoose.disconnect();
  done();
});

//clinic.deleteMany({}).then(() => {})

describe(" posts comment id ", function() {
  it("backend-comment, api get test..", function(done) {
    request(server)
      .get("/backend-comment")
      .set("Accept", "application/json")
      .expect(404)
      .end(function(err, res) {
        should.not.exist(err);
        done();
      });
  });

  it("api post test , commenting the post", function(done) {
    var bo = {
      text: "hh",
      name: "umesh",
      avatar:
        "//www.gravatar.com/avatar/17b393f6d858ba99f8cbd4e9a21fb1f0?s=200&r=pg&d=mm",
      user: "5cebd2ba8300632c80e16c82"
    };
    request(server)
      .post("/api/posts/comment/5cff7e50e9fb2100028b0299")
      .send(bo)
      .set("Accept", "application/json")
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        done();
      });
  });
});