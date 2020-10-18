function solveClasses() {

    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;


        }

        toString() {

            return `Title: ${this.title}\nContent: ${this.content}`;

        };


    }

    function throwContentError() {
        throw new Error("Short reports content should be less then 150 symbols.");
    }
    function throwResearchError() {

        throw new Error("The original research should have author and title.");

    }


    class ShortReports extends Article {

        constructor(title, content, originalResearch) {
            super(title, content);
            this.title = title;
            this.content = ((content.length < 150) ? content : throwContentError());
            this.originalResearch = (originalResearch.hasOwnProperty('title') && originalResearch.hasOwnProperty('author')) ? originalResearch : throwResearchError();
            this.comments = [];

        }
        
        toString = () => {

            let result = super.toString();
            result += `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}`
            if (this.comments.length > 0) {

                result += `\nComments:`
                this.comments.forEach(a => result += `\n${a}`);
            }

            return result;

        };


        addComment(comment) {
            this.comments.push(comment);
            return "The comment is added.";
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.title = title;
            this.content = content;
            this.book = book;
            this.clients = [];
            this.orders = [];


        }




        addClient(clientName, orderDescription) {

            if (this.clients.find(a => a.name == clientName)) {
                throw new Error("This client has already ordered this review.");
            }

            let order = {
                name: clientName,
                order: orderDescription,
            }

            this.clients.push(order)
            this.orders.push(`${ clientName } - ${ orderDescription }`)

            return `${clientName} has ordered a review for ${this.book.name}`

        }


        toString = () => {

            let result = super.toString();

            result += `\nBook: ${this.book.name}`;

            

            if (this.orders.length > 0) {

                result += `\nOrders:`
                this.orders.map(o => result += `\n${o}`);

            }



            return result.trim();

        };

    }
    return {
        Article,
        ShortReports,
        BookReview,
    }
}




let classes = solveClasses();
let book = new classes.BookReview('The Great Gatsby is so much more than a love story', 'The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...', { name: 'The Great Gatsby', author: 'F Scott Fitzgerald' });

console.log(book.toString()); 
