Dylan Warner
5/22/2021
WDD 330

W05 Readings - Chapter 10: Testing and Debugging

	Errors, Exceptions, and Warnings - 

- Causes of errors

    - System Errors - A problem with the system or external devices that the program is interacting with.

    - Programmer Error - Incorrect syntax of faulty logic within the code. Can also be as simple as a typo.

    - User Error - The user enters data incorrectly, which the program is unable to handle.

- Programs should be made to anticipate user error.

- Exception - An error that produces a return value that can be used by the program to deal with the error. 

- Stack Traces - An exception will produce a stack trace. This is a sequence of functions or method calls that lead to the point where the error occurred. 

- Stack traces work backwards from the source of the error.

- Warnings - Warnings happen when there is an error that is not severe enough to crash your program.

    The Importance of Testing and Debugging - 

- Strict Mode - strict mode considers coding practices that were previously accepted as just being 'poor style' as actual errors.

- It is recommended to use strict mode. And can be implemented simply by putting 'use strict'; as the first line of your javascript file.

- Strict mode can also be used scoped down into a single function by putting it as the first line of the function.

    Debugging in the Browser - 

- The most basic form of debugging is to use the alert() method to show a dialog at certain points in the code.

	Using the Console - 

- We've already seen and used the console.log() method. This can be used to log the value of variables at different stages of the program, although it will not actually stop the execution of the program in the same way as alert() does.

    Debugging Tools - 

- Setting breakpoints in your code can allow you to view the value assigned to specific variables throughout the execution of your code.

	Throwing Exceptions - 

- Developers can throw their own exceptions; this allows developers to highlight errors in your code and deal with them.
	
    Tests - 

- Tests allow programmers to bolster their code and make it less brittle.

    Test-Driven Development -
- This is the process of writing tests before code is developed.

- Test driven development involves coding in small chunks while testing each chunk as you go.
