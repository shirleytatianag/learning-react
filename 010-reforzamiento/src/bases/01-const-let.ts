

const firstName: string = "Tony";
const lastName: string = "O´neal \"Es el nombre de alguien\" ";

console.log(firstName, lastName);

const ironman = {
  firstName: "Tony",
  lastName: "O´neal",
  age: 45,
  address:{
    street: "Main St",
    number: 123
  }
}

const spiderMan = structuredClone(ironman);

spiderMan.firstName = "Peter";
spiderMan.address.number = 456;

console.log({spiderMan, ironman});