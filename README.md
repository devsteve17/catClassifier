# Qureight Coding Challenge

The machine learning team have made the world’s most powerful cat classifier, but it’s
not quite ready yet. They tell you it takes around *60 seconds* to confirm if a JPEG
image sent to a server is a cat.

You have been tasked with making a simple frontend web application that allows a user to
upload a single image to an `/isthisacat` endpoint. The API is not ready yet, so you
will need to build a simple mock REST API for it.

A very high value client wants to see a demo of how this might work, and the Head of
Quality is expecting a robust and reliable system.

## Constraints

- App should make use of React
- Use a UI library of your choice
- Task should be completed in 2 hours or less
- Use this repository as a template for your app

# Getting Started with Cat classifier

After loading any yarn modules `yarn`
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
I have included a few small tests, but the mock app does not have a high level of test coverage.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!



## Mock data

The app uses mock REST API and will return one of two cats images or one of two dog images. Please note the HTML form element will only allow selection of JPEG file type. The cat images will be shown with a success message and the dog images with a fail message.

## Extending the app

If the high-value customer commissioned this prototype I'd change the implementation to suit the more in-depth requirements.
e.g. centralise text strings for easy maintenance and to future proof if translations are needed.
