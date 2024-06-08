// Q1 Show Rating
function showRating(rating) {
  let ratings = "";

  for (let i = 0; i < Math.floor(rating); ++i) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings = ratings + " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " .";
  }
  return ratings;
}

console.log(showRating(3.5));

// Q2 Sort by lowest to highest price
function sortLowToHigh(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortLowToHigh([1, 2, 5, 3, 0, 20]));

// Q3 Sort by highest to lowest price
function sortHighToLow(arr) {
  return arr.sort((a, b) => b.price - a.price);
}

console.log(
  sortHighToLow([
    { id: 1, price: 50 },
    { id: 2, price: 30 },
    { id: 3, price: 60 },
    { id: 4, price: 10 },
  ])
);


// Q5 Find all the posts by a single user
async function postsByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  const result = await promise.json();
  
  const posts = result.filter(element => element.userId === userId);

  console.log(posts)
}

postsByUser(8);


// Q6 First 6 Incomplete Todos
async function firstSixIncomplete(completed) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

  const result = await promise.json();

  const incompleteTasks = result.filter(element => !element.completed).slice(0, 6);

  console.log(incompleteTasks);
}

firstSixIncomplete(6);