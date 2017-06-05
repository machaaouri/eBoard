# eBoard
A simple NodeJs website that can show post-it notes in different categories for users , for both anonymous users and logged on users.


Go to mongodb website and download the 64-bit version on windows
open the the zip file , it contains a bin directory (guts of what it takes to run mongodb)
Copy the entire bin directory and put somewhere next to your project folder ( create a specific folder ex : MongoDB)
open a command line to this folder (MongoDB) and create a subdirectory where we are going to store data (:\> md ./data)
then type :\>mongod -dbpath ./data --rest to start the db server ans turn on the rest endpoint
now that mongodb in installed , we need a driver to access it ( npm install mongodb --save)

