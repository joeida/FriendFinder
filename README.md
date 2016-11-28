# Friend Finder Application

### Overview
* Create a basic dating application

### Objective
* Deomonstrate the use of node, express, html, css, and routing in the creation of a basic dating application.
  1. Create 10 dating compatibility questions to ask users with a scale of 1 to 5 based on how much the user agrees or disagrees.
  2. Create node server to output html page.
  3. Use /survey GET route to display survey page.
  4. Use /api/friends GET route to display all possible friends.
  5. Use /api/friends POST route to handle incoming survey results and handle compatibility logic.
  6. Keep track of user survey data in static object created upon application start.
  7. Determine user’s most compatible friend using the following logic.
    1. Convert each user’s results into a simple array of numbers (ex. [1, 2, 3, 4, 5, 1, 2, 3, 4, 5].
    2. Compare the difference between current user’s scores against those from other users, question by question.
    3. Add up the differences to calculate difference.
    4. Use absolute values of the differences meaning no negative numbers.
    5. Find existing user with least amount of difference.
  8. Display the compatible friend’s name and picture in a modal pop-up.

### Screenshot
<img width="576" alt="friendfinder" src="https://cloud.githubusercontent.com/assets/18523345/20656816/62e37170-b4e5-11e6-9fca-c55258eba137.png">

### Link
[Friend Finder Application](https://salty-reef-23392.herokuapp.com/)
