export interface Duck {
  name: string;
  numLegs: number;
  makeSound: (sound: string) => void;
}

const duck1: Duck = {
  name: "huey",
  numLegs: 2,
  makeSound: (sound: string) => console.log(sound),
};

const duck2: Duck = {
  name: "duey",
  numLegs: 2,
  makeSound: () => console.log("quack!"),
};

duck1.makeSound("quack!");
duck1.name = "john";
duck2.makeSound("zzZZ");

export const ducks = [duck1, duck2];
