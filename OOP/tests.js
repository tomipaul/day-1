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
    let book2 = new classes.book("The trials of Brother Jero", "Wole Soyinka", "fiction", 304);

    it("the addBook method should take a book and add it to the library with a refNo", function() {
      library.addBook(book1, 'L1');
      expect(library.books).to.eql({'L1':book1});
      library.addBook(book2, 'L2');
      expect(library.books).to.eql({'L1':book1,'L2':book2});
    });

    it("the removeBook method should take a book and remove it from the library", function() {
      library.removeBook(book1);
      expect(library.books).to.eql({'L2':book2});
      library.removeBook(book2);
      expect(library.books).to.be.empty;
    });

  });

  describe("undergraduateStudent and postgraduateStudent subclasses of universityStudent", function() {

    describe("create an undergraduateStudent with name and matric number", function() {
      let undergraduate = new classes.undergraduateStudent('Tomi Paul', 19870);

      it("undergraduate should be of type `object` and an instance of the universityStudent and undergraduateStudent class", function() {
        undergraduate.should.be.an('object');
        undergraduate.should.be.an.instanceof(classes.universityStudent);
        undergraduate.should.be.an.instanceof(classes.undergraduateStudent);
      });

      it("the student name and matric number should be a property of the student", function() {
        undergraduate.name.should.equal('Tomi Paul');
        undergraduate.matricNo.should.equal(19870);
      });

      it("the student should have properties `borrowedBooks` and `borrowedBooksCount`", function() {
        undergraduate.should.have.property('borrowedBooks');
        undergraduate.should.have.property('borrowedBooksCount');
      });

      it("the student should respond to methods borrowFromLibrary and returnToLibrary", function() {
        undergraduate.should.respondTo('borrowFromLibrary');
        undergraduate.should.respondTo('returnToLibrary');
      });

    });

    describe("create a postgraduateStudent with name and matric number", function() {
      let postgraduate = new classes.postgraduateStudent('Thomas Paul', 1808);

      it("undergraduate should be of type `object` and an instance of the universityStudent and undergraduateStudent class", function() {
        postgraduate.should.be.an('object');
        postgraduate.should.be.an.instanceof(classes.universityStudent);
        postgraduate.should.be.an.instanceof(classes.postgraduateStudent);
      });

      it("the student name and matric number should be a property of the student", function() {
        postgraduate.name.should.equal('Thomas Paul');
        postgraduate.matricNo.should.equal(1808);
      });

      it("the student should have properties `borrowedBooks` and `borrowedBooksCount`", function() {
        postgraduate.should.have.property('borrowedBooks');
        postgraduate.should.have.property('borrowedBooksCount');
      });

      it("the student should respond to methods borrowFromLibrary and returnToLibrary", function() {
        postgraduate.should.respondTo('borrowFromLibrary');
        postgraduate.should.respondTo('returnToLibrary');
      });

    });

  });
  
  describe("the borrowFromLibrary and returnToLibrary methods of the undergraduateStudent and postgraduateStudent", function() {

    let book1 = new classes.book('Things fall apart', 'Chinua Achebe', 'fiction', 234);
    let book2 = new classes.book("The trials of Brother Jero", "Wole Soyinka", "fiction", 304);
    let book3 = new classes.book("Arrow of God","Chinua Achebe","fiction",443);
    let book4 = new classes.book("Anthills of the savannah","Chinua Achebe","fiction",322);
    let book5 = new classes.book("No longer at ease","Chinua Achebe","fiction",299);
    let book6 = new classes.book("There was a country", 'Chinua Achebe','fiction', 313);

    let library1 = new classes.library("general");
    let library2 = new classes.library("research");

    let undergraduate = new classes.undergraduateStudent('Tomi Paul', 19870);
    let postgraduate = new classes.postgraduateStudent('Thomas Paul', 1808);

    library1.addBook(book1, 'L1');
    library1.addBook(book2, 'L2');
    library1.addBook(book3, 'L3');
    library1.addBook(book4, 'L4');
    library1.addBook(book5, 'L5');

    library2.addBook(book1, 'L1');

    it("should return error message when undergraduate tries to borrow from research library", function() {
      expect(undergraduate.borrowFromLibrary(library2, book1)).to.equal("Hey pal, this is a research library. Research libraries are for PG students");
    });

    it("should return error message when undergraduate tries to borrow more than 3 books", function() {
      undergraduate.borrowFromLibrary(library1, book1);
      undergraduate.borrowFromLibrary(library1, book2);
      undergraduate.borrowFromLibrary(library1, book3);
      expect(library1.books).to.eql({'L4':book4, 'L5':book5});
      expect(undergraduate.borrowedBooks).to.eql({'L1':book1, 'L2':book2, 'L3':book3});

      expect(undergraduate.borrowFromLibrary(library1, book4)).to.equal("You can only borrow 3 books from the library");
    });

    it("should return error message when postgraduate tries to borrow more than 5 books", function() {
      library2.addBook(book2, 'L2');
      library2.addBook(book3, 'L3');
      library2.addBook(book4, 'L4');
      library2.addBook(book5, 'L5');
      library2.addBook(book6, 'L6');
      postgraduate.borrowFromLibrary(library2, book1);
      postgraduate.borrowFromLibrary(library2, book2);
      postgraduate.borrowFromLibrary(library2, book3);
      postgraduate.borrowFromLibrary(library2, book4);
      postgraduate.borrowFromLibrary(library2, book5);

      expect(postgraduate.borrowFromLibrary(library2, book6)).to.equal("You can only borrow 5 books from the library");

    });

  });

});
