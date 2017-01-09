var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var classes = require('./library.js')

describe('universityStudent, library and book classes', function() {

  describe("create a University student with a name and matric number", function() {

    it("the university student should be of type `object` and an instance of the universityStudent class", function() {
      let student = new classes.universityStudent('Ify Joy', 112345);
      expect(student).to.be.an('object');
      expect(student instanceof classes.universityStudent).to.be.true;
    });

    it("the student name and matric number should be a property of the student", function() {
      let student = new classes.universityStudent('Tomi Paul', 150985);
      expect(student.name).to.equal('Tomi Paul');
      expect(student.matricNo).to.equal(150985);
    });

    it("the student should have properties `borrowedBooks` and `borrowedBooksCount`", function() {
      let student = new classes.universityStudent('Fred Rohn', 5421);
      expect(student).to.have.property('borrowedBooks');
      expect(student).to.have.property('borrowedBooksCount');
    });

  });

  describe("create a book with a name, author, category and pageNo", function() {

    it("the book should be of type `object` and an instance of the book class", function() {
      let book = new classes.book('Things fall apart', 'Chinua Achebe', 'fiction', 234);
      book.should.be.an('object');
      book.should.be.an.instanceof(classes.book);
    });

    it("the name, author, category and pageNo should be properties of the book", function() {
      let book = new classes.book("The trials of Brother Jero", "Wole Soyinka", "fiction", 304);
      book.name.should.equal('The trials of Brother Jero');
      book.author.should.equal('Wole Soyinka');
      book.category.should.equal('fiction');
      book.pageNo.should.equal(304);
    });

  });

});