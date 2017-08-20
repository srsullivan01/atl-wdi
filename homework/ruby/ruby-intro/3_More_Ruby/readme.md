[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# HW Reading: Practical Object-Oriented Design in Ruby

[POODR](http://www.poodr.com/) (pronounced "pooder") explains object-oriented design (OOD) in Ruby. Javascript is an object-oriented language but it is not class-based like it is in Ruby, Java, C++, C, etc.. POODR was written by Sandi Metz, a software developer and author focused on writing flexible object-oriented code in Ruby and Rails.

## Exercise Objectives

- have fun reading material on programmatic thinking and design
- gain insight to programming languages from a design standpoint
- gain an intermediate level of understanding Ruby as a class-based language
- start thinking about the differences in Javascript and Ruby

## Directions

Read the first 3 chapters of POODR [available as a PDF here](https://github.com/edenzik/cs105b/blob/master/books/Practical%20Object-Oriented%20Design%20in%20Ruby.pdf) and answer the questions below.


### Short Answer Questions:

Answer should be no more than a couple of sentences. Refer to the reading.

1. According to Metz, what is Object-oriented design about?

```
Managing dependencies. OOD is a set of techniques that ensure objects can tolerate change.
```

2. What does SOLID stand for?

```
Singe responsibility, open-closed, Liskov Substitution, Interface segregation, and Dependency Inversion. (who was liskov and why is their substitution superior to others)
```

3. Ruby is a class-based object-oriented language. What does that mean?

```
Classes are defined as extensions of existing classes and can inherit from their parent classes,
```

4. Where are methods defined in Ruby?

```
within classes
```

5. Why does single Responsibility matter?

```
It breaks your code down into smaller pieces that adapt to change more easily and can be organized more easily
```

6. What does `attr_reader` do?

```
it creates encapsulated methods
```

7. What are 4 benefits Metz outlines for methods that have a single responsibility?

```
previously hidden qualities can be exposed, comments are less necessary, smaller methods are easier to reuse, smaller methods are easier to move to another class
```

8. What are 4 things an object knows when it has a dependency?

```
the name of another class, the name of a message it will send somewhere, the arguments that message requires, the order of those arguments
```

9. Dependency management is core to creating future-proof applications. What does injecting dependencies and isolating dependencies do? What are their benefits?

```
Injecting dependencies reduces explicit dependencies within classes. Isolating dependencies means limiting their extraneous use. Both of these makes it easier to design lasting code. 
```
