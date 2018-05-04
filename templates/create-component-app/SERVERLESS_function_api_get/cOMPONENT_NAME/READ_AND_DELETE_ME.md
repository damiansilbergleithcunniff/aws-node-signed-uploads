# Overview for `cOMPONENT_NAME`
Congratulations!  You've used `create-component-app` to build a serverless `get` function.
This template was designed to get you up and runnign with some basic best practices for this repository.
There's a little bit more manual setup that you need to do, so follow the instructions in this readme and
before you know it you'll be up and running with a new serverless function.

# Activating your `cOMPONENT_NAME` function
At the moment there isn't an automatic way to tell serverless that you've got a new function for it to run.
Fortunately, there isn't much you've got to do to get moving.

## Background
In the root of the project you'll find `serverless.yml` and at the bottom of that file you should find a block
of function definitions that looks something like: 
```
functions:
  helloWorld:
    ${file(src/helloWorld/functions.yml)}
```
This bit of yaml tells serverless that there are functions that it should run
and that it can find the configuration for that function in a specific file

## TODO
You need to add the following code to the block mentioned above in the `serverless.yml`
```
  cOMPONENT_NAME:
    ${file(src/cOMPONENT_NAME/functions.yml)}
```

This will produce a final output that looks something like:
```
functions:
  helloWorld:
    ${file(src/helloWorld/functions.yml)}
  cOMPONENT_NAME:
    ${file(src/cOMPONENT_NAME/functions.yml)}
```
*REMEMBER: `yaml` is space sensitive, your indents matter*

### URL Path
You might want to consider a url path that follows `dashed-word-divisions` instead of `camelCase`.
`create-component-app` doesn't have a way to deal with choosing between the two and the dashed case
causes issues in some places.  To update the url you need to look in the file 
`${file(src/cOMPONENT_NAME/functions.yml)}` for the block of yaml that states:
```
  - http:
      path: cOMPONENT_NAME
```
and change the path to be something different. 

# Keep your `handler` separate from your business logic
If you look in this directory you'll see the `handler.js` is separated from the
`cOMPONENT_NAME.js`.  You should place your business logic in the `cOMPONENT_NAME.js`. 
This will make it easier to test your business logic without needing to worry about 
the run environment where the code is exercised.

# Update your tests
Tests are provided for the `handler.js` and for your `cOMPONENT_NAME.js`.  Each has a 
test written to give you an idea of how, and what, to test.  You will want to update
the tests in these files so that they make sense for your use case.

# DELETE ME
If you've read this file, you can delete it.  There is no need to commit this to source.
This file is a bit of a canary... it shouldn't exist.  If it does, something is wrong.


