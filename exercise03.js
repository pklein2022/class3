function keysAndValues(myObj){
    let sorted = sortObj(myObj);
    let keys = Object.keys(sorted);
    let values = Object.values(sorted);

    
    return [keys,values];
}

//Sort Object Function
//https://www.w3docs.com/snippets/javascript/how-to-sort-javascript-object-by-key.html
function sortObj(obj) {
    return Object.keys(obj).sort().reduce(function (result, key) {
      result[key] = obj[key];
      return result;
    }, {});
  }

let myObj = { b: 2, c: 3, a: 1 };

//let myObj={ a: 1, b: 2, c: 3 };
//let myObj={ a: "Apple", b: "Microsoft", c: "Google" };
//let myObj={ key1: true, key2: false, key3: undefined };
console.log (keysAndValues(myObj));
