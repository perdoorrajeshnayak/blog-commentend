var should = require("should");
var request = require("supertest");
var server = require("../server");
var mongoose = require("mongoose");
//const clinic = require('../api/models/clinic')
// const speciality = require('../api/models/provider_speciality_master')
after(done => {
  mongoose.disconnect();
  done();
});

//clinic.deleteMany({}).then(() => {})

describe(" commenting ", function() {
  console.log("OOOOOOOOOOOO");
  it("1. Adding comment successful ", function(done) {
    var bo = {
      text: "rk",
      name: "sdfg",
      avatar: "pass",
      user: "12345"
    };
    request(server)
      .post("/comment/:id")
      .send(bo)
      .set("Accept", "application/json")
      .expect(404)
      .end(function(err, res) {
        should.not.exist(err);
        done();
      });
  });
  it("2. Comment is Successful ", function(done) {
    request(server)
      .get("/backend-comment")
      .set("Accept", "application/json")
      .expect(404)
      .end(function(err, res) {
        should.not.exist(err);
        done();
      });
  });

  /*it("3. clinic list ", function(done) {
    request(server)
      .get("/EmpDb")
      //.send(bo)
      .set("Accept", "application/json")
      .expect(200)
      .end(function(err, res) {
        should.not.exist(err);
        done();
      });
  });

  it("4. clinic  ", function(done) {
    var bo = {
      firstname: "rk",
      lastname: "sdfg",
      username: "pass",
      password: "rrfdf"
    };
    request(server)
      .post("/EmpDb/update")
      .send(bo)
      .set("Accept", "application/json")
      .end(function(err, res) {
        should.not.exist(err);
        done();
      });
  });*/
});
