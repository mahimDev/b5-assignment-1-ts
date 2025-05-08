### Blog Post 1: What are some differences between interfaces and types in TypeScript?

In TypeScript both `interfaces` and `types` are used to describe the shape of data. they tell TypeScripe what properties an object should have. While they may look similer, there are some important differences between the two . Let's breack them down in simple terms.

##### 1.Exending and Merging:

- **Interfaces** can **merging** multiple declarations of the same interface This means you can define the same interface in different places, and **TypeSript** will combine them

```
interface Person {
  name: string;
}
interface Person {
  age: number;
}

const person: Person = { name: "Alice", age: 30 };
```

In this case `Person` now has both `name` and `age` because the two `Persone` interface are merged automatically.

- **Types** do not allow merging. Once you define a `type`, you cannot redefine it again.

```
type Person = {
  name: string;
};
type Person = {
  age: number;
};
```

##### 2.Flexibility

- **Typee** are more flexible. They allow you to combine types using features like union (`|`) and intersection (`&`). This makes them useful when you need more complex type combinations.

```
type Person = { name: string };
type Worker = { job: string };
type Employee = Person & Worker;
```

- **Interfaces** are best used when you’re working with objects and don’t need that kind of flexibility. But they can still **_extend_** other interfaces.

```
interface Person {
  name: string;
}
interface Worker {
  job: string;
}
interface Employee extends Person, Worker {}
```

##### 3. When to Use:

- Use **_interfaces_** when you want to describe objects and when you expect to extend or merge them.
- Use **types** when you need more complex or flexible types, like combining types or working with different kinds of data.

Both **interfaces** and **types** are useful in TypeScript, but they have different strengths. Use **interfaces** for simpler, object-like structures and types when you need more flexibility. Choose based on what fits your project.

### Blog Post 2: What is the use of the `keyof` keyword in TypeScript? Provide an example.

In TypeScript, we have a special keyword called `keyof` that can make your code more powerful. It helps us get the keys of an object type. Let’s look at how it works with an easy example.

##### What Does keyof Do?

- The `keyof` keyword gives you a type that reprsents all the keys of an object. For example, if you have an object with properties, keyof will give you a type of the property names (keys).

###### Example:

Lets say we have this object type:

```
interface Person {
  name: string;
  age: number;
}
```

If we want to get the keys of this object (`name` and `age`), we can use `keyof`:

```
type PersonKeys = keyof Person;
```

Now, `PersonKeys` is a type that can either be `"name"` or `"age"`.

##### Using keyof in Functions:

We can also use `keyof` to make functions that work with any key of an object.
For exampl, here’s a function that gets the value of a specific property in an object:

```
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name"));
console.log(getProperty(person, "age"));
```

In this case, keyof makes sure that we can only pass keys that exist in the person object (like `"name"` or `"age"`), and it will give us the correct type for the value (`string` or `number`).

The `keyof` keyword in TypeScript helps you work with object keys in a safer and smarter way. It makes sure you only use valid keys and provides the correct type when accessing object properties. This makes your code more reliable and less error-prone.
