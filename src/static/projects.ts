import {Project} from "@/types";

export const projectData : Project[] = [
    {
        id: 1,
        name: "Project 1",
        techStack: ["/ts.png","/node.jpg"],
        description: "Programming Projects to Learn TypeScript and Node.js",
        detail: [
            {
                title: "Simple Command Line Calculator",
                description: "A simple command line calculator using TypeScipt, Node.js and Inquirer",
                links: "https://www.npmjs.com/package/ahsan-cli-calculator",
            },
            {
                title: "Number Guessing Game",
                description: "This guess the number game is a short TypeScript/Node.js project that allows the user to guess the number generated by the computer.",
                links: "https://www.npmjs.com/package/ahsan-guess-number",
            },
            {
                title: "ATM",
                description: "This somewhat complex TypeScript/Node.js project is a console-based application. When the system starts the user is prompted with a user id and user pin. After entering the details successfully, the ATM functionalities are unlocked. All the user data is generated randomly.",
                links: "https://www.npmjs.com/package/ahsan-atm-project",
            },
            {
                title: "Todo List",
                description: "Develop a simple command line Todo app using TypeScipt, Node.js and Inquirer.",
                links: "https://www.npmjs.com/package/ahsan-todo-project",
            },
            {
                title: "Word Counter",
                description: "The user will enter a english paragraph and all that is needed is to just to implement counting characters and words without whitespaces.",
                links: "https://www.npmjs.com/package/ahsan-word-counter",
            },
            {
                title: "Currency Converter",
                description: "The TypeScript console app is used to convert currencies: the users enter a certain amount of money in one currency and set the currency they want to check the monetary value of.",
                links: "https://www.npmjs.com/package/ahsan-currency-converter",
            },
            {
                title: "Student Management System",
                description: "This project is a simple console based Student Management System. In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the given courses. Also, you will be implementing the following operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of the student including name, id, courses enrolled and balance.",
                links: "https://www.npmjs.com/package/ahsan-student-management-system-07",
            },
            {
                title: "Text-Based Adventure-Game",
                description: "This project is not GUI based. It is a console-based game. The video here shows how to develop the game in Java. You will take the requirements of the game from the video and develop the game in TypeScript and Node.js",
                links: "https://www.npmjs.com/package/ahsan-adventure-game",
                videoLink: "https://www.youtube.com/watch?v=EpB9u4ItOYU&t=1s",
            },
            {
                title: "Quiz System",
                description: "The app will show the students multiple choice questions and promt the user to reply. In the end it will show the students the result of the quiz.",
                links: "https://www.npmjs.com/package/ahsan-quiz-system",
            },
            {
                title: "Countdown Timer",
                description: "In this project, you will build a countdown timer using the date module.",
                links: "https://www.npmjs.com/package/ahsan-countdown-timer",
            },
        ]
    },
    {
        id: 2,
        name: "Project 2",
        techStack: ["/js.png", "/node.jpg"],
        description: "Programming Projects to Learn JavaScript and Node.js",
        links: "http://js-assignment-ahsan.surge.sh/",
        detail: [
            {
                title: "",
                description: "",
                links: "",
            },
        ]
    },
    {
        id: 3,
        name: "Project 3",
        techStack: ["/ts.png","/react.png","/node.jpg","/mu.png"],
        description: "A simple Blog web app, with all the main functionality like Auth, Read, Edit, Delete and Update.",
        detail: [
            {
                title: "Full Stack Personal Blog Web App",
                description: `User Authentication \n
                Users can create an account with their name, username, email address and password.\n
                Users can log in with their registered username and password.\n
                User passwords are securely hashed and stored in the database using bcrypt.\n
                Authentication is implemented using JWT (JSON Web Tokens)\n
                Users can view a list of Blogs and detail page\n
                Users can comment on any blog\n
                Users can post a blog with author name, date, title, content, and blog image\n
                Image is store in cloudinary platform\n
                Only Admin Users can Edit and Delete Functionality in blog\n
                Functionalities are protected by role-based access control (RBAC), ensuring that only authenticated`,
                links: "https://github.com/Ahsan2001/personal-blog-app",
            },
        ]
    },
    {
        id: 4,
        name: "Project 4",
        techStack: ["/react.png"],
        description: "Github User Finder Application",
        links: "https://github-finder-with-redux.netlify.app/",
        img: "/img/github-finder-app.png",
        detail: [
            {
                title: "",
                description: "",
                links: "",
            },
        ]
    },
   
    {
        id: 5,
        name: "Project 5",
        techStack: ["/next.png","/ts.png", "/mu.png"],
        description: "Personal Portfolio Website",
        links: "https://portfolio-ahsan-shaikh.vercel.app/",
        detail: [
            {
                title: "",
                description: "",
                links: "",
            },
        ]
    },
]
