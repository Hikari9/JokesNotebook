# JokesNotebook
Anton's Jokes Notebook Application.
(c) 2016

## Install Framework

1. Install [Node Package Manager](https://www.npmjs.com/).
2. Install ionic and cordova: `npm install -g ionic cordova`
3. Install bower: `npm install -g bower`
4. Install gulp: `npm install -g gulp`

## Prepare Development Environment 

1. Install external modules using bower: `bower install`
2. Install watchers for gulp and node: `npm install`
3. Load ionic plugins and platforms: `ionic state reset`

## Developing Locally

1. Run `ionic serve`
2. Automatically opens a browser view of the mobile application in your default browser
3. All CSS and JS scripts from src folder will automatically be compiled into the www folder upon serve

## Building Android APK

1. Download [Gradle](https://services.gradle.org/distributions/gradle-2.14.1-all.zip).
2. Add this to your environment variables:
  `CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL="file:///path/to/gradle-2.14.1-all.zip"`
3. Run `ionic build android`
4. Your Debug APK can be found in `platforms/android/build/outputs/apk/android-debug.apk`