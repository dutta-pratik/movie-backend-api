# movie-backend-api


It is an API for Movie App, which helps to add, update, delete movie. It also shows the list of movie. It also helsp to add, update and delete Movie Genre as well.<br>

# Index
<ul>
<li><a href="#1">How to Setup the Code into your System</a>
<li><a href="#2">Cloning the repository using VS Code</a>
<li><a href="#3">Tech Used in it</a>
<li><a href="#4">Detailed API's Functionality</a>
<li><a href="#5">Support</a>
</ul>

# How to Setup the Code into your System
<p id="1">
<ul>
<li> Fork this repository into your github account (create one if you don't have it yet)
<li> Clone it to your system (<code>git clone</code>)
<li> In the terminal run git remote add upstream <code>https://github.com/pratik-dutta/movie-backend-api.git</code> (this is for taking a fresh update of the code anytime in the future)
</ul>

# Cloning the repository using VS Code
<p id="2">
<ul >
<li> Open VS Code.
<li> Go to <i>View > Terminal</i>.
<li> To clone the repo to your desktop, change the directory to desktop by running the command <code>cd desktop</code>.
<li> In the terminal, run <code>git clone https://github.com/pratik-dutta/movie-backend-api.git</code>.
<li> A folder/directory should be created on your desktop.
<li> Open that folder in VS Code, go to <i>File > Open</i>.
<li> Run <code>npm install</code> to download dependencies of the project or you can download it by seeing dependencies in <code>package.json</code>.
<li> Now you're good to go!
</ul>

# Tech Used in it
<p id="3">
<strong>Stack</strong>: NodeJs, ExpressJs, MongoDB


# API's Functionality
<p id="4">
<br>
This API helps to performs the following function
<ul>
<li><a href="#a">Show List of Movies</a>
<li><a href="#b">Add Movie</a>
 <li><a href="#p">Delete a Movie</a>
<li><a href="#q">Update a Movie</a>
<li><a href="#r">Add a Genre</a>
<li><a href="#s">Update a Genre</a>
<li><a href="#t">Delete a Genre</a>
</ul>
<br>
Following is the description of all the function mentioned above.<br>
<ul>
<li>
 <p id="a">
<h3>Show List of Movies</h3>
Route: <code>/api/movie/all</code>
<br>
This route helps to Show list of Movies.
<li>
 <p id="b">
<h3>Add Movie</h3>
Route: <code>/api/movie/addmovie</code>
<br>
This route helps to add a movie.
<li>
 <p  id="p">
<h3>Delete Movie</h3>
Route: <code>/api/movie/delete/:id</code>
<br>
This route helps to delete a movie.
<li>
 <p  id="q">
<h3>Update Movie</h3>
Route: <code>/api/movie/update/:id</code>
<br>
This route helps to update a movie.
<li>
<p id="r">
<h3>Add a Genre</h3>
Route: <code>/api/movie/addgenre</code>
<br>
This route helps to add genre.
<li>
<p id="s"> 
<h3>Update a Genre</h3>
Route: <code>/api/movie/updategenre/:id</code>
<br>
This route helps to update a genre.
<li>
<p id="s"> 
<h3>Delete a Genre</h3>
Route: <code>/api/movie/deletegenre/:id</code>
<br>
This route helps to delete a genre.
</ul>

# Support
<p id="5">
Feel free to contact at <i>pratikdutta.786(at)gmail(dot)com</i> for any query.

 



