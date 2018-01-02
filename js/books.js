"use strict";

(function(){
    var output = document.getElementById("book-list-data"),
        addButton = document.getElementById("add-button"),
        clearButton = document.getElementById("clear-button"),
        sortByLName = document.getElementById("sort-by-author-lname"),
        titleText = document.getElementById("title"),
        fNameText = document.getElementById("author-first-name"),
        lNameText = document.getElementById("author-last-name"),
        yearText = document.getElementById("publish-year"),
        books = [];

    var Book = function Book(title, fName, lName, year){
        this.Title = title;
        this.AuthorFirstName = fName;
        this.AuthorLastName = lName;
        this.Year = year;
    };

    var renderList = function renderList(){
        output.innerHTML = "";
        books.forEach(function(book, idx, arr){
            var newDiv = document.createElement("div"),
                newHeading = document.createElement("h2"),
                newPara = document.createElement("p");

            newHeading.innerText = book.Title;
            newPara.innerHTML = "<em>by</em> " + book.AuthorFirstName + " " + book.AuthorLastName;

            newDiv.appendChild(newHeading);
            newDiv.appendChild(newPara);

            output.appendChild(newDiv);
        });
    };

    addButton.addEventListener("click", function(){
        var newBook = new Book(titleText.value, fNameText.value, lNameText.value, yearText.value);

        books.push(newBook);

        renderList();
    });

    sortByLName.addEventListener("click", function(){
        var sortNum = 0;
        books = books.sort(function(a,b){
            var nameA = a.AuthorLastName.toUpperCase();
            var nameB = b.AuthorLastName.toUpperCase();

            console.log("Sort! " + sortNum++ + " A: " + nameA + " B: " + nameB);

            if(nameA < nameB){
                return -1;
            }
            if(nameA > nameB){
                return 1;
            }
            return 0;
        });

        renderList();
    });
})();