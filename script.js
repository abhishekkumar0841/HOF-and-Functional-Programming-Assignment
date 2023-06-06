// 1. Reverse String.

// function reverseMyString(input) {
//   setTimeout(() => {
//     let reversedString = input.split("").reverse().join("");
//     console.log(reversedString);
//   }, 2000);
// }

// let userInput = prompt("Enter string for reverse");
// reverseMyString(userInput);


// 2. Random Number Generator with Delay and Progress Indication:

// function generateRandomNum(){
//     let interval = setInterval(()=>{
//         let randomNum = Math.ceil(Math.random() * 100)
//         console.log(randomNum)
//     }, 3000)
    
//     setTimeout(()=>{
//         clearInterval(interval)
//         console.log("interval cleared !")
//     }, 13000)
// }

// generateRandomNum()


// function generateRandomNumber() {
//     const countdown = setInterval(() => {
//       const remainingTime = Math.ceil(Math.random() * 10);
//       console.log(`Time remaining: ${remainingTime} second(s)`);
//     }, 1000);
  
//     setTimeout(() => {
//       clearInterval(countdown);
//       const randomNumber = Math.floor(Math.random() * 100);
//       console.log(`Random number generated: ${randomNumber}`);
//     }, Math.ceil(Math.random() * 10000) + 1000); // Random timeout between 1000ms and 11000ms
//   }
  
//   generateRandomNumber();



// 3. Build a feature for Store's Inventory.
// const listOfItems = {
//     tShirt: 6,
//     trouser: 7,
//     cap: 3,
//     sunglass: 5
// }

// let res = Object.values(listOfItems).map((v)=>{
//     let priceINR = 0
//     priceINR = v * 80
//     return priceINR
// })
// console.log(res)



// 4. Filtering and Capitalizing: Books Published After 2010 with Author Names.
// const books = [
//     { title: "Book 1", author: "Author 1", publicationYear: 2005 },
//     { title: "Book 2", author: "Author 2", publicationYear: 2015 },
//     { title: "Book 3", author: "Author 3", publicationYear: 2012 }
//   ];

// function filterAndCapitalizeBooks(books){
//     const filteredBooks = []

//     for(let i = 0; i < books.length; i++){
//         const book = books[i]
//         const {title, author, publicationYear} = book

//         if(publicationYear >= 2010){
//             const capitalizedAuthor = author.toUpperCase()
//             const filteredBook = {title, author: capitalizedAuthor, publicationYear}
//             filteredBooks.push(filteredBook)
//         }
//     }
//     return filteredBooks
// }
  
// console.log(filterAndCapitalizeBooks(books))



// 5. URL validation.

// function validateURL(input) {
  // Define the regex pattern for URL validation
//   let pattern = /^(http:\/\/|https:\/\/)[A-Za-z0-9\-._~:/?#@!$&'()*+,;=]+[A-Za-z]$/;

  // Test if the input URL matches the pattern
//   if (pattern.test(input)) {
//     console.log("Valid URL");
//   } else {
//     console.log("Invalid URL");
//   }
// }

// Test the function with example inputs
// validateURL("http://example.com");
// validateURL("https://www.example.com");
// validateURL("ftp://example.com"); 
// validateURL("http://123");



// 6. LinkedIn Profile URL Validator.
// function checkValidLinkedInUrl(input){
//     // defining the regex pattern
//     let pattern = /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g

//     // check url with if else
//     if(pattern.test(input)){
//         console.log("Valid LinkedIn URL")
//     }else{
//         console.log("LinkedIn URL is not Valid")
//     }
// }

// checkValidLinkedInUrl("https://ajdfj.com")
// checkValidLinkedInUrl("https://www.linkedin.com/in/unknown-singh-1574897878")























