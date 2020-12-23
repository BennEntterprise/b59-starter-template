# B59 Starter Kit

To Get just the .vscode settings run
`wget -L https://github.com/BennEntterprise/b59-starter-template/tree/main/.vscode`

### Extensions In The Workspace

1. Prettier
2. Bracket-Pair Colorizer
3. Indent Rainbow
4. Todo Tree
5. Git Lens
6. Version Lense
7. Import Cost
8. Debugger for Chrome
9. Debugger for FireFox
10. REST Client

### Dependencies

node-sass (look up the way to migrate to dart-sass)

# About the Kit

# First Draft (To Be Carved up and Rewritten)

The Problem:
As a developer with tons of ideas I need a way to rapidly build prototypes using a familiar technology stack. It will be using products I already know and thus allow me to skip some of the monotonous overhead of a project and get to the specifics of actually developing something cool.

Eventually I'll tie my own personal bash(already WIP) script to this repo. That will mean I can run something like `./scaffold-project <project-name>` and get a clean project with a repo including a main and develop branch. Cutting the tooling overhead time down to zero means that I can write domain level code rather than focusing on infrastructure and deployment tidbits.

# Client Side Code

- React Scaffolded with CRA and a typescript template, (Unejected)
- Redux for Application State Management, Redux-Thunk and Redux-Sagas to handle side effects.
- Axios for Network Requests
- React-Bootstrap (and thus bootstrap) as UIFramework for Sites
- Jest Testing Framework for React Components. (TDD)
- Storybook for React Components (DDD)

# Server Side Code

- Node: Written in Typescript and compiled using a tsconfig file (eventual will build a server side webpack).
- Mongoose ORM To make connections with a MongoDB Instance.
- MongoDB will need a connection string to either a hosted DB instance (preferred) or a local instance (for situations where an internet connection is unobtainable like flights or long drives)
- REST API Scaffolded with
  - User Resource (including authorization authentication and password reset; best practices for hashing)
  - Profile Resource
  - Twillio for SMS
  - NodeMailer to send emails
  - Mailtrap to catch emails in modes other than production

# Scripts you'll find at the top level package.json file

- A Script to Start Local MongoDB
- Scripts to Deploy to Staging/Production Heroku Instances
- A script to Open a tunnel for ngrok. (useful for testing sites on mobile without an emulator)

# Usersnippets

There are some snippets that I've come to use for a pretty good workflow. Some useful things will include:

- `breakpts` --> Used to scaffold empty media queries based on the breakpoints in bootstrap
- `star20` --> Builds a comment header to label section of code. (Don't get too comfortable with this one and forget about modularity/code-splitting)
- `flex-column` --> Scaffolds the 4 css rules for a center justified and aligned column directional flexbox
- `star20` --> Builds a comment header to label section of code. (Don't get too comfortable with this one and forget about modularity/code-splitting)
- `flex-row` --> Scaffolds the 4 css rules for a center justified and aligned row directional flexbox

CONTACT: If you have additional questions about this project you can contact me at [kyle.bennett@betweenfiveandnine.com](mailto:kyle.bennett@betweenfiveandnine.com?subject=B59%20Starter)
