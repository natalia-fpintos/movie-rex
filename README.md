# MovieRex app 🦖

A mobile application with movie info from TMDB and Utelly API.


## How to run

Clone the repository and run the following commands to install dependencies:

```
cd MovieRex && npm i
```

```
cd ios && pod install
```

After you have finished the installation, ensure that you create a file in the root of the project (next to `App.js`) called `.env`, in this file you should place your API keys for TMDB and Utelly API:

Example:
```
API_KEY=<your_api_key_here>
UTELLY_API_KEY=<your_api_key_here>
```

Next, open two terminal windows and cd into `MovieRex`, then run the following commands, each on a different window:

On terminal window 1, to start the bundler:
```
npx react-native start
```

On terminal window 2, to run the app in a simulator:
```
npx react-native run-ios
```
