const formatString = (value1: string, toUpper: boolean = true): string => {
  return toUpper ? value1.toLocaleUpperCase() : value1.toLocaleLowerCase();
};

type BookObj = { title: string; rating: number };
const filterByRating = (items: BookObj[]): BookObj[] =>
  items.filter((item) => item.rating >= 4);

const concatenateArrays = <T>(...array: T[][]): T[] => array.flat();

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const processValue = (value: string | number): number =>
  typeof value === "string" ? value.length : value * 2;

interface Product {
  name: string;
  price: number;
}

const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (products.length === 0) return null;
  return products.reduce((max, current) =>
    current.price > max.price ? current : max
  );
};

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const getDayType = (day: Day): string => {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
};

const squareAsync = async (num: number): Promise<number> => {
  if (num < 0) {
    throw new Error("Negative number not allowed");
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(num * num), 1000);
  });
};
