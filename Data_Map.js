// Map = same as python dictionary

const store = new Map([
    ["t-shirt", 20],
    ["jeans",30],
    ["socks",10],
    ["underwear", 50]
]);

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");  // get key取得value
shoppingCart += store.get("jeans");
console.log(shoppingCart);

store.set("hat", 40); // set 新增物件
store.delete("hat"); // delete 刪除物件
store.has("hat"); // has find key
store.size; // size Map大小

console.log(store.size);

store.forEach((value, key) => console.log(`$${value} ${key}`));