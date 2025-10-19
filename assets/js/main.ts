let SweetScroll:any;
let particlesJS:any;
// type Tools = "css"|"git"|"github"|"html"|"javascript"|"mongodb"|"nodejs"|"php"|"reactjs"|"sql"|"vsc";

interface Project{
    title:string,
    image:string,
    tools:string[],
    description:string,
    link:string,
    githubLink:string
}

interface Stack{
    type: string,
    technologies: string[]
}
 

let projects:Project[] = [
    {
        "title": "EnglishConversations",
        "image": "englishConversations",
        "tools": ["React","CSS","Node.js","MongoDB"],
        "description": "Start learning, practicing, and testing your English language skills through interactive conversations. Choose a topic and dive into the world of English conversation.",
        "link": "https://english-conversations.vercel.app/",
        "githubLink": "https://github.com/BorakL/EnglishConversations"
    },
    {
        "title": "MyFitness",
        "image": "myFitness",
        "tools": ["React", "Node.js", "MongoDB", "CSS"],
        "description": "This is an app about fitness that allows you to choose from a variety of workouts and exercises to create a personalized fitness plan that fits your lifestyle and goals.",
        "link": "https://my-fitness-eight.vercel.app/",
        "githubLink": "https://github.com/BorakL/fitness"
    },
    {
    	"title": "FruitSmoothies",
	    "image": "fruitSmoothies",
	    "tools": ["React","PHP","SQL","CSS"],
	    "description": "Choose from a variety of delicious smoothie recipes that are easy to make and packed with nutrients.",
    	"link": "http://fruitsmoothies.epizy.com",
	    "githubLink": "https://github.com/BorakL/FruitSmoothiesApi"
    },
    {
        "title": "Games",
        "image": "games",
        "tools": ["React","CSS"],
        "description": "Choose from three different games that will test your skills and keep you entertained for hours.",
        "link": "https://borakl.github.io/games/",
        "githubLink": "https://github.com/BorakL/games"
    },
    {
        "title": "FrostFrigo",
        "image": "frostFrigo",
        "tools": ["Next.js","Typescript","CSS","Bootstrap"],
        "description": "A responsive Next.js web application integrated with Firebase for authentication and data management, featuring separate admin and client interfaces for scheduling and user management.",
        "link": "https://frost-figo.netlify.app/",
        "githubLink": "https://github.com/BorakL/frost-frigo"
    }
]; 

const stacks:Stack[] = [
    {   
        type: "Front-End",
        technologies: ["React","HTML","CSS","JavaScript","Bootstrap"]
    },
    {
        type: "Back-End",
        technologies: ["Node.js","Express","MongoDB"]
    },
    {
        type: "Tools",
        technologies: ["Git","GitHub","VSC"]
    }
]

const createProject = (project:Project, iteration:number):HTMLElement => { 
    let userProject: HTMLElement;
    let imagesRight: HTMLElement;
        let imgProject: HTMLImageElement;
    let contents: HTMLElement;
        let title: HTMLHeadElement;
        let tools: HTMLElement;
        let description: HTMLParagraphElement;
        let buttons: HTMLElement;

    userProject = document.createElement("div");
    userProject.classList.add("user-projects");
    
    imagesRight = document.createElement("div"); 
    imagesRight.classList.add(iteration%2!==0 ? "images-right" : "images-left")
    
    imgProject = document.createElement("img");
    imgProject.alt = project.title;
    imgProject.src = `./assets/img/jpg/${project.image}.jpg`;
    imagesRight.appendChild(imgProject);
    
    contents = document.createElement("div"); 
    contents.classList.add(iteration%2===0 ? "contents-right" : "contents");
    contents.style.cssText = "text-align:center";
    title = document.createElement("h3");
    title.innerText = project.title; 
    
    tools = document.createElement("div");
    tools.classList.add("tools");
    for(let tool of project.tools){
        let technology = createTechnology(tool,`./assets/img/png/technologies/small/${tool}.png`);
        tools.appendChild(technology);
    } 
    
    description = document.createElement("p");
    description.style.cssText = "text-align: justify";  
    description.innerText = project.description;
    description.classList.add("description");
    
    buttons = document.createElement("div");
    buttons.classList.add("buttons");
    buttons.innerHTML=
    `<a class='project-link' target='_blank' href=${project.link}>View Live</a>`+
    `<a class='project-link' target='_blank' href=${project.githubLink}>View on GitHub</a>` 
    
    contents.append(title,tools,description,buttons)

    userProject.append(imagesRight,contents);

    return userProject;
}


const createTechnology = (title:string, src:string):HTMLElement => {
    const tech = document.createElement("div");
    const imgContainer = document.createElement("div");
    imgContainer.innerHTML=`<img src=${src} alt=${title}/>`;
    const titleContainer = document.createElement("div");
    titleContainer.innerText = title;
    tech.append(imgContainer,titleContainer);
    tech.classList.add("technology")
    return tech;
}

let stacksContainer = document.getElementById("stacks");
stacksContainer?.classList.add("user");

const createTechStack = (stacks: any):void => {
    for(let stack of stacks){
        let stackWrapper = document.createElement("div");
        stackWrapper.classList.add("tech")
        let stackTitle = document.createElement("h3");
        stackTitle.innerText=stack.type;
        let technologiesWrapper = document.createElement("div");
        technologiesWrapper.classList.add("technologies")
        stack.technologies.forEach((t:string) => technologiesWrapper.append(createTechnology(t, `./assets/img/png/technologies/medium/${t}.png`) ));
        stackWrapper.append(stackTitle,technologiesWrapper) 
        stacksContainer?.append(stackWrapper);
    }
}

createTechStack(stacks)

let userProjects = document.getElementById("projects");


for(let i=0; i<projects.length; i++){
    let project = createProject(projects[i],i);
    userProjects?.append(project)
}

document.getElementById("openPdfBtn")?.addEventListener("click", function(){
    const pdfUrl = "./assets/resume/Resume.pdf";
    window.open(pdfUrl,"_blank")
})