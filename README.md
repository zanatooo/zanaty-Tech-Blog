# zanaty-Tech-Blog

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. I built this site completely from scratch and deployed it to Heroku.

[Heroku Link](https://zanaty-techblog.herokuapp.com/)
------
[git link](https://zanatooo.github.io/zanaty-Tech-Blog/)
------
[Screenshot](./assets/Screen%20Shot%202022-07-06%20at%208.44.17%20PM.png)
[Screenshot](./assets/Screen%20Shot%202022-07-06%20at%208.46.18%20PM.png)
[Screenshot](./assets/Screen%20Shot%202022-07-06%20at%208.53.03%20PM.png)
[Screenshot](./assets/Screen%20Shot%202022-07-06%20at%208.54.17%20PM.png)
[Screenshot](./assets/Screen%20Shot%202022-07-06%20at%208.55.30%20PM.png)
[Screenshot](./assets/Screen%20Shot%202022-07-06%20at%208.56.06%20PM.png)
[Screenshot](./assets/Screen%20Shot%202022-07-06%20at%209.04.38%20PM.png)
[Screenshot](./assets/Screen%20Shot%202022-07-06%20at%209.05.41%20PM.png)
[Screenshot](./assets/Screen%20Shot%202022-07-06%20at%209.07.01%20PM.png)
[Screenshot](./assets/Screen%20Shot%202022-07-06%20at%209.08.25%20PM.png)

![Screen Shot 2022-07-06 at 8 44 17 PM](https://user-images.githubusercontent.com/67457318/179900722-6fb3df71-0d77-405d-8463-1f5349aa6b6a.png)
![Screen Shot 2022-07-06 at 8 46 18 PM](https://user-images.githubusercontent.com/67457318/179900774-812e7e32-c708-4817-9acf-9455e806944f.png)
![Screen Shot 2022-07-06 at 8 53 03 PM](https://user-images.githubusercontent.com/67457318/179900787-2a3f7f06-f23f-4e57-8d62-49c042bd54db.png)
![Screen Shot 2022-07-06 at 8 54 17 PM](https://user-images.githubusercontent.com/67457318/179900810-ee9dc7e8-cba4-43ba-a664-576c503bacd2.png)
![Screen Shot 2022-07-06 at 8 55 30 PM](https://user-images.githubusercontent.com/67457318/179900843-10c8ae83-1b9a-4261-bb87-742d4c7f929f.png)
![Screen Shot 2022-07-06 at 8 56 06 PM](https://user-images.githubusercontent.com/67457318/179900878-07397592-2acb-44d2-a336-119fa80d6bc4.png)
![Screen Shot 2022-07-06 at 9 05 41 PM](https://user-images.githubusercontent.com/67457318/179900934-1ec1e4e4-3aa3-4055-a4f3-18e4914d7c5e.png)
![Screen Shot 2022-07-06 at 9 05 41 PM](https://user-images.githubusercontent.com/67457318/179901026-3dddaaf1-9863-49fc-aeb1-6586a063c561.png)
![Screen Shot 2022-07-06 at 9 07 01 PM](https://user-images.githubusercontent.com/67457318/179901063-ce310417-1dbf-45a3-8b5c-4f742e567fdb.png)
![Screen Shot 2022-07-06 at 9 08 25 PM](https://user-images.githubusercontent.com/67457318/179901093-0ef81fee-9116-42d7-b83f-49106088cff2.png)


My app follows the MVC paradigm in its architectural structure,

User Story

AS A developer who writes about tech, I WANT a CMS-style blog site SO THAT I can publish articles, blog posts, and my thoughts and opinions.

Acceptance Criteria:
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

Mock-Up

The following animation demonstrates the application functionality:

Animation cycles through signing into the app, clicking on buttons, and updating blog posts.

Getting Started

My application’s folder structure follows the Model-View-Controller paradigm. I used the express-handlebars (Links to an external site.) package to use Handlebars.js for my Views, used the MySQL2 (Links to an external site.) and Sequelize (Links to an external site.) packages to connect to a MySQL database for my Models, and create an Express.js API for my Controllers.

I also added the dotenv package (Links to an external site.) to use environment variables, the bcrypt package (Links to an external site.) to hash passwords, and the express-session (Links to an external site.) and connect-session-sequelize (Links to an external site.) packages to add authentication.

NOTE
The express-session (Links to an external site.) package stores the session data on the client in a cookie. When I'm idle on the site for more than a set time, the cookie will expire and I'll be required to log in again to start a new session. This is the default behavior and I do not have to do anything to my application other than implement the npm package.

Developer:
Mohammed Elzanaty

