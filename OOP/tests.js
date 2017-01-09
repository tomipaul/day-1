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

  describe("create a library with books and type attribute", function() {

    it("the library should be of type `object` and an instance of the library class", function() {
      let library = new classes.library('general');
      library.should.be.an('object');
      library.should.be.an.instanceof(classes.library);
    });

    it('the library should have properties `addBook` and `removeBook`', function() {
      let library = new classes.library('general');
      library.should.have.property('addBook');
      library.should.have.property('removeBook');
    });

    it('the library should respond to methods `addBook` and `removeBook`', function() {
      let library = new classes.library('general');
      library.should.respondTo('addBook');
      library.should.respondTo('removeBook');
    });

  });

  describe("creates a library, add books to it and remove books from it", function() {

    let library = new classes.library('general');
    let book1 = new classes.book('Things fall apart', 'Chinua Achebe', 'fiction', 234);
    let book2 = new classes.book("The trials of Brother Jero", "Wole Soyinka", "fiction", 304)

    it("the addBook method should take a book and add it to the library with a refNo", function() {
      library.addBook(book1, 'L1');
      expect(library.books).to.be.eql({'L1':book1});
      library.addBook(book2, 'L2');
      expect(library.books).to.be.eql({'L1':book1,'L2':book2});
    });

    it("the removeBook method should take a book and remove it from the library", function() {
      library.removeBook(book1);
      expect(library.books).to.be.eql({'L2':book2});
      library.removeBook(book2);
      expect(library.books).to.be.empty;
    });

  });

});