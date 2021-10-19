var main_obj = [
  {
    id: 1,
    company: "Photosnap",
    logo: "svg/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "svg/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "svg/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "svg/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "svg/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "svg/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "svg/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "svg/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "svg/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "svg/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

var filter_obj = [];
for (let i = 0; i < main_obj.length; i++) {
  let element = main_obj[i];
  let x = [];
  x.push(element.role);
  x.push(element.level);
  let lang = element.languages;
  let tools = element.tools;
  lang.forEach((element) => {
    x.push(element);
  });
  tools.forEach((element) => {
    x.push(element);
  });
  filter_obj.push(x);
}

var arr_btntxt = [];
var display = document.getElementById("srch").style.display;

create = () => {
  for (let i = 0; i < main_obj.length; i++) {
    let element = main_obj[i];
    let id = "box" + element.id;
    let logo = element.logo;
    let position = element.position;
    let level = element.level;
    let contract = element.contract;
    let company = element.company;
    let location = element.location;
    let time = element.postedAt;
    let role = element.role;
    let language = element.languages;
    let tool = element.tools;
    let new1 = element.new;
    let feature = element.featured;

    let box = document.createElement("div");
    box.setAttribute("class", "container");
    box.setAttribute("id", id);
    document.getElementById("section-employes").appendChild(box);

    let mainbox = document.createElement("div");
    mainbox.setAttribute("class", "content");
    mainbox.setAttribute("id", "content" + id);
    box.appendChild(mainbox);

    let logobox = document.createElement("div");
    logobox.setAttribute("class", "section-logo");
    logobox.setAttribute("id", "logo" + id);
    mainbox.appendChild(logobox);

    let logoimg = document.createElement("img");
    logoimg.setAttribute("src", logo);
    logoimg.setAttribute("class", "logo");
    logobox.appendChild(logoimg);

    let secontent = document.createElement("div");
    secontent.setAttribute("class", "section-content");
    mainbox.appendChild(secontent);

    let namecont = document.createElement("div");
    namecont.setAttribute("class", "namecont");
    secontent.appendChild(namecont);

    let name = document.createElement("div");
    name.setAttribute("class", "name");
    let nametxt = document.createTextNode(company);
    name.appendChild(nametxt);
    namecont.appendChild(name);

    if (new1 == true) {
      let newl = document.createElement("span");
      newl.setAttribute("class", "new");
      let newtxt = document.createTextNode("NEW!");
      newl.appendChild(newtxt);
      namecont.appendChild(newl);
    }
    if (feature == true) {
      let ftr = document.createElement("span");
      ftr.setAttribute("class", "featured");
      let ftrtxt = document.createTextNode("FEATURED");
      ftr.appendChild(ftrtxt);
      namecont.appendChild(ftr);
    }

    let rolename = document.createElement("div");
    rolename.classList.add("role");
    rolename.classList.add("headings");
    let rolenametxt = document.createTextNode(position);
    rolename.appendChild(rolenametxt);
    secontent.appendChild(rolename);

    let other = document.createElement("div");
    other.setAttribute("class", "other");
    secontent.appendChild(other);

    let ago = document.createElement("p");
    ago.setAttribute("class", "text");
    let agotxt = document.createTextNode(time);
    ago.appendChild(agotxt);
    other.appendChild(ago);

    let dot1 = document.createElement("p");
    dot1.setAttribute("class", "text");
    let dot1txt = document.createTextNode("·");
    dot1.appendChild(dot1txt);
    other.appendChild(dot1);

    let availability = document.createElement("p");
    availability.setAttribute("class", "text");
    let availabilitytxt = document.createTextNode(contract);
    availability.appendChild(availabilitytxt);
    other.appendChild(availability);

    let dot2 = document.createElement("p");
    dot2.setAttribute("class", "text");
    let dot2txt = document.createTextNode("·");
    dot2.appendChild(dot2txt);
    other.appendChild(dot2);

    let country = document.createElement("p");
    country.setAttribute("class", "text");
    let countrytxt = document.createTextNode(location);
    country.appendChild(countrytxt);
    other.appendChild(country);

    let filter = document.createElement("div");
    filter.setAttribute("class", "filters");
    box.appendChild(filter);

    let filterbox = document.createElement("div");
    filterbox.setAttribute("class", "filter-box");
    filter.appendChild(filterbox);

    let filterboxinner = document.createElement("span");
    filterboxinner.setAttribute("class", "fi");
    filterboxinner.setAttribute("id", `fi${i}`);
    filterbox.appendChild(filterboxinner);

    let filtername = document.createElement("span");
    filtername.setAttribute("class", "filter-text");

    let txt1 = document.createTextNode(role);
    filtername.appendChild(txt1);
    filterboxinner.appendChild(filtername);

    let filterboxinner1 = document.createElement("span");
    filterboxinner1.setAttribute("class", "fi");
    filterboxinner1.setAttribute("id", `fii${i}`);
    filterbox.appendChild(filterboxinner1);

    let filternamelevel = document.createElement("span");
    filternamelevel.setAttribute("class", "filter-text");

    let txt2 = document.createTextNode(level);
    filternamelevel.appendChild(txt2);
    filterboxinner1.appendChild(filternamelevel);

    for (let j = 0; j < language.length; j++) {
      let lang = language[j];
      let filterboxinner2 = document.createElement("span");
      filterboxinner2.setAttribute("class", "fi");
      filterboxinner2.setAttribute("id", `fi${i}${j}`);
      filterbox.appendChild(filterboxinner2);

      let filterlang = document.createElement("span");
      filterlang.setAttribute("class", "filter-text");

      let langtxt = document.createTextNode(lang);
      filterlang.appendChild(langtxt);
      filterboxinner2.appendChild(filterlang);
    }
    for (let k = 0; k < tool.length; k++) {
      let toolname = tool[k];
      let filterboxinner3 = document.createElement("span");
      filterboxinner3.setAttribute("class", "fi");
      filterboxinner3.setAttribute("id", `fi${i}${k}`);
      filterbox.appendChild(filterboxinner3);

      let filtertool = document.createElement("span");
      filtertool.setAttribute("class", "filter-text");

      let tooltxt = document.createTextNode(toolname);
      filtertool.appendChild(tooltxt);
      filterboxinner3.appendChild(filtertool);
    }
  }
};

var cont = [];
window.onload = main();

function main() {
  create();
  addid();
  printbox();
}
function printbox() {
  for (let i = 1; i <= 10; i++) {
    let id = `box${i}`;
    let box = document.getElementById(id);
    cont.push(box);
  }
}
for (let i = 1; i < 4; i++) {
  let order_box = document.getElementById(`box${i}`);
  order_box.style.order = i - 4;
}

function addid() {
  let buttons = document.getElementsByClassName("filter-text");
  for (let i = 0; i < buttons.length; i++) {
    let element = buttons[i];
    element.setAttribute("id", `button${i + 1}`);
  }
}
function removesrchbar() {
  arr_btntxt = [];
  document.getElementById("srch").style.display = "none";
  display = "";
  let btncontainer = document.getElementById("xbtnx");
  while (btncontainer.firstChild) {
    btncontainer.removeChild(btncontainer.firstChild);
  }
  let obox = document.getElementsByClassName("container");
  for (let i = 0; i < obox.length; i++) {
    let element = obox[i];
    if (screen.width <= 600) {
      element.style.display = "flex";
      element.style.flexDirection = "column";
    } else {
      element.style.display = "flex";
    }
  }
}

function update() {
  let btncontainer = document.getElementById("xbtnx");
  for (let i = 0; i < btncontainer.childElementCount; i++) {
    let h = btncontainer.children[`${i}`];
    let buttonmain = h.children[0];
    let k = buttonmain.children[0];
    let buttontext = k.innerHTML;
    if (arr_btntxt.includes(buttontext) == false) {
      arr_btntxt.push(buttontext);
    }
  }
  showscreen();
  
  // filter_screen();
}

var j = 1;
while (j < 48) {
  let buttona = document.getElementById(`button${j}`);
  let buttontxt = buttona.innerHTML;
  buttona.addEventListener("click", function () {
    update();
    if (display == "" && display != "flex") {
      document.getElementById("srch").style.display = "flex";
      display = "flex";
      let filtercont = document.getElementById("xbtnx");
      cont.forEach((element) => {
        element.style.display = "none";
      });
    } else if (display == "flex") {
      display = "flex";
    }

    if (arr_btntxt.includes(buttontxt) == false) {
      let container = document.getElementById("xbtnx");
      let box = document.createElement("div");
      box.setAttribute("class", "btnelem");
      container.appendChild(box);

      let button = document.createElement("button");
      button.setAttribute("class", "box1");

      let btnname = document.createElement("span");
      btnname.setAttribute("class", "text-filter");
      let textbtn = document.createTextNode(buttontxt);
      btnname.appendChild(textbtn);

      let imgbox = document.createElement("span");
      imgbox.setAttribute("class", "cross");

      let imager = document.createElement("img");
      imager.setAttribute("src", "svg/icon-remove.svg");
      imager.setAttribute("class", "remove");

      imgbox.appendChild(imager);
      button.appendChild(btnname);
      button.appendChild(imgbox);
      box.appendChild(button);
      update();
      // showscreen();
      imgbox.addEventListener("click", function () {
        if (container.childElementCount > 1) {
          let x = arr_btntxt.indexOf(buttontxt);
         
          container.removeChild(box);
          if (x > -1) {
            arr_btntxt.splice(x, 1);
          }
        } else if(container.childElementCount = 1){
          removesrchbar();
        }
        else{
          removesrchbar();
        }
        update();
        // showscreen();
      });
    }
  });
  j++;
}

function filter_screen() {
  if (document.getElementById("srch").style.display == "flex") {
    let obox = document.getElementsByClassName("container");
    for (let i = 0; i < obox.length; i++) {
      let element = obox[i];
      element.style.display = "none";
    }
  }
}



function showscreen() {
  filter_screen();
  var arr1 = arr_btntxt;
  var countsup = 0;
  for (let r = 0; r < 10; r++) {
    const item = filter_obj[r];
    const box = cont[r];
    var count = 0;
    let i = 0;
    while (i < arr1.length) {
      let element = arr1[i];
      if (item.includes(element)) {
        count++;
        if (count == arr1.length) {
          countsup++;
          
          box.style.display = "flex";
        }
      }
      i++;
    }
  }
}

var cont2 = cont.slice();

setTimeout(3000, showscreen);
