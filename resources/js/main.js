const projectSelect = (event) => {
    if(getComputedStyle(tablist).flexDirection === 'column') {
        event.target.style.borderLeft = '3px solid hsl(8, 58%, 70%)';
        event.target.style.backgroundColor = 'hsl(9, 28%, 20%)';

        lastTab.style.borderLeft = 'none';
        lastTab.style.backgroundColor = 'hsl(9, 28%, 27%)';

        lastTab = event.target;
    } else if (getComputedStyle(tablist).flexDirection === 'row') {
        lastTab.style.borderLeft = 'none';
        event.target.style.backgroundColor = 'hsl(9, 28%, 20%)';

        lastTab.style.backgroundColor = 'hsl(9, 28%, 27%)';

        lastTab = event.target;
    }
};

const openProject = (event) => {
    lastProject.style.display = "none";
    switch(event.target) {
        case tab0:
            p0.style.display = "grid";
            lastProject = p0;
            break;
        case tab1:
            p1.style.display = "grid";
            lastProject = p1;
            break;
        case tab2:
            p2.style.display = "grid";
            lastProject = p2;
            break;
        case tab3:
            p3.style.display = "grid";
            lastProject = p3;
            break;
        case tab4:
            p4.style.display = "grid";
            lastProject = p4;
            break;
    }
};

const updateProject = (event) => {
    projectSelect(event);
    openProject(event);
};

const closeMenu = () => {
    document.getElementById("close").checked = true;
};



let tab0 = document.getElementById("tab-0");
let tab1 = document.getElementById("tab-1");
let tab2 = document.getElementById("tab-2");
let tab3 = document.getElementById("tab-3");
let tab4 = document.getElementById("tab-4");
let p0 = document.getElementById("p0");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
let tablist = document.getElementById("tablist");
let menu0 = document.getElementById("menu0");
let menu1 = document.getElementById("menu1");
let menu2 = document.getElementById("menu2");


let lastTab = tab0;
let lastProject = p0;

tab0.addEventListener("click", updateProject);
tab1.addEventListener("click", updateProject);
tab2.addEventListener("click", updateProject);
tab3.addEventListener("click", updateProject);
tab4.addEventListener("click", updateProject);

menu0.addEventListener("click", closeMenu);
menu1.addEventListener("click", closeMenu);
menu2.addEventListener("click", closeMenu);
document.querySelector("main").addEventListener("click", closeMenu)