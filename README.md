
# URL Shortener

The URL Shortener is an ultimate URL transformation companion that condenses lengthy web addresses into sleek and memorable links while empowering you with note-taking abilities. This documentation offers a comprehensive glimpse into the application's features, architecture, and implementation intricacies.


## Attributes

- **URL shortening**: Allows users to shorten long URLs.
- **Notes**: Provides the option to add additional notes or comments to each shortened URL.
- **Search functionality**: Enables users to search for specific URLs or notes.
- **Autocomplete**: Provides autocomplete suggestions for search queries.
- **Click tracking**: Tracks the number of clicks on each shortened URL.
- **Error handling**: Includes error handling mechanisms to handle potential issues during URL creation and retrieval.
- **Debouncing**: Debouncing enables delay and optimizes the execution of the search functionality, providing a smoother user experience.

## Installation

***NPM must be installed before moving forward***

Clone the repository

```
git clone https://github.com/Chuckbones/URL_Shorterner
```
  Install the dependencies using npm  

  ```
  npm install
  ```

  
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- `PORT`

- `MONGO_DB_URI`

Set up the environment variables:

 - Create a .env file in the project directory.

  - Add the following environment variables and provide appropriate values:

```
PORT=<port_number>
MONGO_DB_URI=<mongodb_URI>
```



## Deployment

To deploy this project on localhost run:

**Note**: Make sure you have all the dependencies installed

  -    1) Start your nodemon/server
```bash
  npm run startServer
```

You can access your website in http://localhost:<PORT>
## Usage/Examples
- To shorten URL:-
  - Access the URL Shortener dashboard.
  - Enter the full URL you want to shorten.
  - Optionally add notes.
  - Click "Shorten URL" to generate a shortened URL.
 
- Search for URLs or Notes:-
  - Access the search form in the URL Shortener dashboard.
  - Enter a search query in the "Search" input field.
  - View the search results displaying matching full URLs, shortened URLs, and notes.
  - If no search results are found, a "No Search Results" message will be displayed.

- Autocomplete:-
  - The URL Shortener dashboard includes a search input field with autocomplete functionality.
  - As you type in the search input field, the application offers autocomplete suggestions based on matching URLs and notes.
  - Selecting an autocomplete suggestion fills the search input field with the chosen value.



## Tech Stack

**Client:** 
 ```
 HTML
 CSS
 Bootstrap
 JavaScript
 jQuery and jQueryUI
 ```

**Server:**


    Node.js
    Express.js
    MongoDB
    Mongoose

**Templating Engine:**
```
EJS
```
**Other dependancies:**
```
shortid ( For creating shortened URLs)
dotenv
```



## Acknowledgements

- This project was developed as part of open projects by ACM IITR
 - Received valuable assistance from [webdevsimplified](https://www.youtube.com/c/webdevsimplified),   [FreeCodeCamp](https://www.freecodecamp.org/), and various package documentations throughout the project.



## 🚀 About Me
I'm a Cyber-security ethusiast with part time full stack developer

