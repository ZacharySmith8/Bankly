### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  Json Web Token, it is a 3Party library tha allows you to create and use Tokens to help with authentication and authorization on your application.
- What is the signature portion of the JWT?  What does it do?
  The signature is the last part of the Token. it is the part of the token that authenticity of the token. 
- If a JWT is intercepted, can the attacker see what's inside the payload?
  YES anybody can see the information in the payload. but without the signature part of a token you will not be able to change anything. 
- How can you implement authentication with a JWT?  Describe how it works at a high level.
  After Creating your JWT you can set headers.authorization to that JWT. Once your headers with the jwt once you make a HTTP request, it will have have the token in the header of that request. 
- Compare and contrast unit, integration and end-to-end tests.

- What is a mock? What are some things you would mock?
  usally used in unit testing. is a method/object that simulates the behavior of a real moethod in controlled ways for testing purposes.
- What is continuous integration?
  A coding practice of mergiing small code changes frequenetly, rather than merging in a large change at the end of a development cycle.
- What is an environment variable and what are they used for?
  
- What is TDD? What are some benefits and drawbacks?
  Test Driven Development, Write the tests first*I NEED TO GET BETTER WITH THIS* and then only write code to get hte tests to pass. as you write more code keep running tests to make sure they are passing. 
- What is the value of using JSONSchema for validation?
  So users data can fail fast before bad data ever gets to your database. It also reduces the amount of code for proeccessing and vlaidating data.
- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?
  Returning allows you to retrieve data that was modfifed by an inster delete or update. Without it you would not be able to access this data untill after this DML was ran and then you would need to run a select statment on the updated database. 
- What are some differences between Web Sockets and HTTP?
  The biggest difference between a web socket and HTTP is that HTTP is one directional. where as Web Sockets are bidirectional
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I prefer to use Flask over Express. I would say the biggest reason for this is familiarity. I see pros and cons to both I just think I understand Flask/Python a bit more. I really enjoy how you can use [] to map and manipulate as is in python.