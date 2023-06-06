# [RFBaseMobile: Project Name Here]

## Using This README Template
When using this template for a new project, be sure to update the following sections as information becomes available:

* Project Documentation and Requirements
* API Documentation
* Test Credentials and User Logins
* Project Quirks and Troubleshooting

**This README should be a one-stop-shop for developer onboarding and contribution to the project. Keeping project-level READMEs up-to-date is essential for productivity and developer experience!**
## Development Environment

Before running this project, follow the [Engineering Account Setup](https://red-foundry.atlassian.net/wiki/spaces/RFKB/pages/2586116115/Engineering+Account+Setup) and  [Development Environment Quick Start](https://red-foundry.atlassian.net/wiki/spaces/RFKB/pages/edit-v2/2585690117) guides.
## Setup

1. Clone the project

2. Install Node Dependencies:

   ```
   yarn
   ```

## Running Locally

### iOS

1. Install Pods - Run:

   ```
   cd ios && bundle install
   ```

   ```
   pod install && cd ..
   ```

2. Start the Metro Bundler - Run:

   ```
   yarn start --reset-cache
   ```

3. Run on iOS Simulator - In a new terminal tab, run:

   ```
   yarn ios
   ```

### Android

1. Clean gradle for good measure - Run:

   ```
   cd android && ./gradlew clean && cd ..
   ```

   You may have a problem here and get an error about Valid SDk Location - easy fix, will add later.

2. Start the Metro Bundler - Run:

   ```
   yarn start --reset-cache
   ```

3. Run on Android Emulator -

   - You'll probably need to start emulator from android studio first.

   - In a new terminal tab, run:

   ```
   yarn android
   ```

## Project Documentation and Requirements

For each new project using this template, please provide links to all project documentation as it becomes available. Please include the following:

- Jira Board
- Figmas
- Confluence Space

## API Documentation

For each new project using this template, please provide as it becomes available:

- Repositories that house back-end APIs for the project
- Postman collections for APIs this project uses
- Links to third party API documentation used by this project

## Test Credentials and User Logins

For each new project using this template, please provide links to where test user credentials are stored for each persona, and for each environment.

## Project Quirks and Troubleshooting

When additional steps for building and/or running, general quirks, or other oddities occur with a project, they should be documented here.
