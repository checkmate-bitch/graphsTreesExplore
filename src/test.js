const mother = { name: "Ash" };
const son = { name: "Sabse Behtar" };
const daughter = { name: "Banunga M" };
const sonDog = { name: "Jaisa Koi" };
const sonDogPuppy = { name: "Aur Na Tha" };

mother["children"] = [son, daughter];
sonDog["children"] = [sonDogPuppy];
son["children"] = [sonDog];

console.log(mother);

const traverse = (tree) => {
  if (!tree) return;
  console.log(tree.name);
  Array.isArray(tree.children) &&
    tree.children.forEach((child) => traverse(child));
};

traverse(mother);
