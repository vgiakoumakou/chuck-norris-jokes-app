### Introduction

This file briefly describes the plan I made before starting the development of
the application. For this challenge, I firstly understood exactly what needed to
be built and then I made some decisions about the implementation and the main
structure of it.

### Technologies

The application will be built with ReactJS, Redux (for state management) and
React router (for routing between the landing page and the single joke page).
Also, I will use flexbox to create the layout of the UI according to the
mock-ups provided and to add responsiveness for smaller screens.

### UI Components

By looking at the mock-ups and the requirements of the project, both the Landing
page and the Joke page will consist of components about the NavBar, the
SearchBar and the Footer. The two pages differ on their main content area: the
Landing Page should display the CategoriesList, the selected category and the
JokesList, whereas the Joke Page should display the single joke's information
along with some navigation and stats info (like/dislike buttons, a label, a back
button, nav buttons and some stats).

### API calls

For the sake of this project, I can use the fetch API to fetch the jokes data
and the categories of the jokes from the Chuck Norris API.

### Main structure

By having in mind what needs to be done, I am planning to structure the files in
a few folders in order to organize the code and make it easily readable. Some of
the main folders of the application will be the following ones:

- a components folder
- a state folder, including the state management files
- an images/assets folder
- a styles folder for organizing the main style (color variables etc)
