# ConnerAPI

This is an API that I made for making things like my work background, projects I've worked on, my education, and everything accessible as an API. I thought this would be a neat little project to work on to get more familiar with deploying APIs to Microsoft Azure. And I'm really pumped with how it's turned out. This is the source code for the frontend UI, the backend code is available at [this link](https://github.com/conner-huf/ConnerAPI)

### Endpoints
- /GET app-connerapi-dev.azurewebsites.net/resume
- /GET app-connerapi-dev.azurewebsites.net/story
- /GET app-connerapi-dev.azurewebsites.net/workexperience
- /GET app-connerapi-dev.azurewebsites.net/projects
- /GET app-connerapi-dev.azurewebsites.net/education

### Client
[ConnerAPI](https://conner-huf.github.io/connerapi-client/)

---

#### 5/21/24

I've added a frontend UI for interacting with the API. This makes it so much easier to show people :).

#### 5/15/24

I got the endpoints reworked today. Now there're /projects, /workexperience, /education endpoints that display resume info, then a /resume endpoint that shows everything. Next I'm going to get some endpoints that can get a single element by ID, I think.

#### 5/12/24

This is a portfolio project I am currently working on. The idea is that you'll be able to call the API to return parts of my resume, portfolio, etc. Additionally, this is a great side project for getting more comfortable with working with .NET projects. 

As of right now, I've pretty much just got the basic functionality together and the project references all sorted. My next task is to get a database running with my projects data populated into it. I'm thinking it would be cool to have a few categories of project (fullstack / frontend / backend / etc) that can be filtered for in a drop down at the top of the page or something. The database and the API will be hosted on Azure. I'm thinking I'll be able to get that working in the next week or two.

