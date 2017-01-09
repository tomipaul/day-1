class universityStudent {
	constructor(name, matricNo) {
		this.name = name;
		this.matricNo = matricNo;
		this.borrowedBooks = {};
		this.borrowedBooksCount=0;
	}

	returnToLibrary(libraryInstance, bookInstance) {
		if (bookInstance.libraryRefNo in this.borrowedBooks) {
			delete this.borrowedBooks[bookInstance.libraryRefNo];
			this.borrowedBooksCount-=1;
			libraryInstance.addBook(bookInstance, bookInstance.libraryRefNo);
		}
	}
}

class undergraduateStudent extends universityStudent {
	constructor(name, matricNo) {
		super(name, matricNo);
	}

	borrowFromLibrary(libraryInstance, bookInstance) {
		if (libraryInstance.type = "research") {
			return "Hey pal, this is a research library. Research libraries are for PG students";
		}
		if (this.borrowedBooksCount!=3) {
			if(bookInstance.libraryRefNo in libraryInstance.books) {
				this.borrowedBooks[bookInstance.libraryRefNo] = bookInstance;
				this.borrowedBooksCount+=1;
				libraryInstance.removeBook(bookInstance);
			}
		}
		else {
			return "You can only borrow 3 books from the library";
		}
	}
}

class postgraduateStudent extends universityStudent {
	constructor(name, matricNo) {
		super(name, matricNo);
	}

	borrowFromLibrary(libraryInstance, bookInstance) {
		if (this.borrowedBooksCount != 5) {
			if(bookInstance.libraryRefNo in libraryInstance.books) {
				this.borrowedBooks[bookInstance.libraryRefNo] = bookInstance;
				this.borrowedBooksCount+=1;
				libraryInstance.removeBook(bookInstance);
			}
		}
		else {
			return "You can only borrow 5 books from the library";
		}
	}
}

class library {
	constructor(type, books) {
		this.books = {};
		this.type = type;
	}

	addBook(bookInstance, libraryRefNo) {
		bookInstance.libraryRefNo = libraryRefNo;
		this.books[libraryRefNo] = bookInstance;
	}

	removeBook(bookInstance) {
		delete this.books[bookInstance.libraryRefNo];
	}
}

class book {
	constructor(name, author, category, pageNo) {
		this.name=name;
		this.author = author;
		this.category = category;
		this.pageNo = pageNo;
	}
}

module.exports = {
	universityStudent: universityStudent,
	library: library,
	book: book,
	postgraduateStudent: postgraduateStudent,
	undergraduateStudent: undergraduateStudent
};