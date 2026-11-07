# Series Homework – JavaScript, JSON & Git
## Project Description
This project works with TV series data stored in a JSON file. It includes functions for accessing data, working with arrays, updating objects without modifying the original data, and fixing bugs.

## How to Run

Run the following command in the project terminal:

`node check.js`

The program runs 15 automated tests and displays the results.

To generate the updated JSON file, run:

`node save-updated.js`

## Questions
### 1. 
The spread operator creates only a shallow copy of the object. Nested arrays and objects still reference the original data. Therefore, we create new arrays and objects for the modified series, season, and episodes to avoid changing the original data.

### 2. 
The original function used `push()` to modify the episodes array before creating a copy of the series. The spread operator only creates a shallow copy, so the nested data remains shared. As a result, the original series was already modified.