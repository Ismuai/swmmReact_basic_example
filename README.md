# Intro to creating web apps with swmmReact

Creating web apps with swmmReact is simple. Developing environmental models and showing them off is easy with swmmReact. You can have people open your files, work with current versions, read results, focus on what you want them to focus on, add maps, and make responsive, interactive systems. swmmReact can help people feel engaged with your data, showing models and model results that abstract away finer details and improve communication.

## About this example

This particular example is made for those that are very new to web programming. By the time you have completed this example, you will have a working web page that you can display the results of a running model on your own computer. You can then upload those files to a web server, or simply make a web page on Github and move on from there.

# Setting up your computer for development

You won't need to do a lot of work to start programming with swmmReact. While you'll be working with Node.js, npm, React, and Github desktop, there's really only 2 programs that you will install in this example: Node.js and Github desktop. Of course I'll walk you through each one:

## Node.js

Node.js® (https://nodejs.org/en/) is an open-source, cross-platform JavaScript runtime environment. Javascript has often been associated with programming for web browsers, but Node.js allows you to do all kinds of cool desktop and server-side programming that used to belong squarely in the domain of php, python, perl, and plenty of programming paradigms that probably aren't prepended with 'P'. JavaScript isn't just different because it starts with a 'J'. Check out some of the details here: (https://nodejs.org/en/about/).

Download and install Node.js here: https://nodejs.org/en/

## Github Desktop

Github Desktop (https://desktop.github.com/) isn't the only way or the best way to interact with Github, but it is a colorful GUI with plenty of fun buttons to push, and that's what's really important. You'll need to sign up for a Github account (https://github.com/) but they make the process as painless as possible. 

Download and install Github Desktop here: https://desktop.github.com/

## npm

npm (https://www.npmjs.com/) stands for Node Package Manager, and believe it or not, you already installed it. To make sure I'm not lying to you, open up a command prompt (search cmd in your desktop's search widget) and type npm -v. That will give you the version number of your current npm install. One last thing: their website will ask you to create an account or subscribe to the pro version. If you're into that sort of thing, don't let me stop you, but you really don't need to.

## React

React (https://reactjs.org/) is an amazingly easy and fun programming system based upon JavaScript. React allows you to create websites incredibly quickly, and really one of the best ways to get acquanted with it is 'create-react-app'. Once you are done with this tutorial, it would be a good idea to check out how easy it is to use create-react-app to make simple (or complex) web apps.

# Copying and running the demo

Once you have have finished your installs, use Github Desktop to make a copy of these files by selecting from the top menu: File->Clone Repository. A window should pop up and you can select 'URL', and enter 
```
https://github.com/swmm-js/swmmReact_basic_example.git
```
inside of the text box. Keep note of or change the 'Local Path' text box, and then click 'Clone'. This will download the files to your computer.

Open up a File Explorer window and find the folder where you've copied these files. 

To test that everything works, open up a command prompt. Navigate to the foler where you've copied the files by typing something like the following:
```
cd C:\Path\to\files\you\downloaded\swmmReact_basic_example
```
and then type:
```
npm install
```
This should get all of the depencencies for the program, which shouldn't take long. Once the install is finished, you should be ready to run the demo. Run the demo by typing:
```
npm start
```
After a few moments, your web browser will probably pop up and display the contents of the .rpt output file for 'Example1.inp'. If your web browser doesn't open automatically, open one yourself and navigate to 
```
http://localhost:3000/
```
in the address bar.

# Modifying the demo

You can modify the demo to show off your own files. Keep in mind you are running in a web browser, so files with output greater than 4GB, and files that take a long time to run are not appropriate for this demo. You can learn later how to use swmmReact to work with large or long-running files by sending your work to a server and having it notify you when your results are available. You can also per-load your results within your website and allow swmmReact to work with the data without ever needing to run swmmReact's processing capabilities.

## Install your own .inp file

In File Explorer, go to the directory:
```
swmmReact_basic_example\public\
```
Delete the file 'Example1.inp' and copy your own .inp file into this location.

## Update the source

In a text editor, open up the file
```
swmmReact_basic_example\src\App.js
```
and change the following line:
```
const [inpFile, setInpFile] = useState('Example1.inp')
```
by replacing 'Example1.inp' with 'YourFileName.inp'.

run the program again by using the command window and typing:
```
npm start
```
which will run the program with your files and display your new .rpt files.

# Building the files to run on your own web server

To build a set of files that you can run on your own web server, use the command window again and type:
```
npm build
```
This will create a set of files that you can find in the following folder:
```
swmmReact_basic_example\build\
```
You can copy these files to a web server, or push your files to Github by opening Github Desktop and selecting 'Commit to Master' in the bottom left hand corner. The process for using Github to serve your swmmReact website is explained in excellent detail here:
```
https://github.com/gitname/react-gh-pages
```
# Conclusion

Now that you have a basic idea of how to create a swmmReact app, you can move on to some of the demos for displaying results, modifying files, running simulations, and setting up and logging in to file processing servers. Thanks so much for taking the time to read this, and if you have any questions, you can contact me at issac@swmmReact.org.