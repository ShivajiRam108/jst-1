class book {
    title;
    author;
    isbn;

    constructor (title , author , isbn){
        this. title = title;
        this. author = author;
        this. isbn = isbn;
    }
    checkOut(){
        console.log(this.title, "ravindranth taken");
    }
    return(){
        console.log(this.title, "has been taken");
 
    }
    updatedtitle(newtitle){
        this.title = newtitle;
    }
}
var bookone = new book ("vandemathar" , "ravindranth", "152" );
bookone.checkOut();
bookone.return();
bookone .updatedtitle("ramayan");
console.log(bookone);


