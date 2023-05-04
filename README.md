# deliver-app-rn
#### Deliver App is a React Native app built using Expo, Tailwind CSS, Redux, React Navigation, and Sanity.io!

##  📷 Screenshots

<p float="left">
  <img src="https://user-images.githubusercontent.com/69378136/236093798-b30566c6-1c5a-47fd-af47-c149fcd42d46.png" width="100" />
  <img src="https://user-images.githubusercontent.com/69378136/236095025-ce5b733f-3f89-425f-a28f-fa6db14dd9d4.png" width="100" /> 
  <img src="https://user-images.githubusercontent.com/69378136/236095201-bfe7097c-05c6-4ad1-9546-44aa880e9904.png" width="100" />
	<img src="https://user-images.githubusercontent.com/69378136/236095304-079681ed-0e89-4324-8647-33a8ead505d5.png" width="100" />
	<img src="https://user-images.githubusercontent.com/69378136/236095451-40ebed98-25e3-4e6a-bf99-612e733c0722.png" width="100" />
	<img src="https://user-images.githubusercontent.com/69378136/236095477-46fdb8ef-1d16-4207-8feb-160193679a93.png" width="100" />
</p>

## Getting Started

## Prerequisites

1- Sign up for a Sanity Account.
2 - Install Node JS in your PC.

Installing Expo CLI
 ~~~
 npm install --global expo-cli
 ~~~
 
 Initializing the project
 
  ~~~
npx create-expo-app deliveroo-clone
 ~~~
  ~~~
cd deliveroo-clone
 ~~~
 
 ## Setting Up Tailwind CSS
 
  ~~~
npm install tailwindcss-react-native
npm install --save-dev tailwindcss
 ~~~
 
 Tailwindcss requires a `tailwind.config.js` file with the content section configured to include the paths to all of your components and any other source files that contain Tailwind class names.
  ~~~
// tailwind.config.js
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};
 ~~~
 Add `TailwindProvider` at the top level of your application. The `TailwindProvider` creates the context for reactive styles and the atomic style objects.
   ~~~
import { TailwindProvider } from "tailwindcss-react-native";

function MyAppsProviders({ children }) {
  return <TailwindProvider>{children}</TailwindProvider>;
}
 ~~~
 Configure your babel.config.js
 ~~~
// babel.config.js
module.exports = {
  plugins: ["tailwindcss-react-native/babel"],
};
 ~~~
 
Install dependencies <br>
🗃️[Dependency info](https://github.com/StefanoCutri/deliver-app-rn/blob/master/package.json)

Clone the project
 ~~~
git clone https://github.com/StefanoCutri/deliver-app-rn.git
 ~~~
 
 Change directory
  ~~~
cd deliver-app-rn
 ~~~
 
 Install dependencies
   ~~~
  npx expo install
 ~~~
Start the server
   ~~~
  npx expo start
 ~~~
 
 ## Contact
 
 Stefano: stefanocutristecco@gmail.com
 
 Project Link: https://github.com/StefanoCutri/deliver-app-rn
 
 
