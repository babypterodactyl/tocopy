/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
  name: "Baby Pterodactyl",
  role: "Front End Developer",
  contactInfo: "email: sasha@babypterodactyl.com",
  picture: "https://cdn.pterodactyl.io/site-assets/logo-icon.png",
  welcomeMessage: "Hello, welcome to my page.",
  skills: ["HTML", "CSS", "JavaScript", "JQuery"]
};

var work = {
  jobs: [
    "Pancake Maker: 2009 - Present",
    "Rare Book Evaluator: 2011 - 2012",
    "Cat Meme Gatherer: 2016 - 2017"
  ]
}

var education = {}

// BIO OBJECT APPENDING BELOW //

var formattedHTMLbioPic = HTMLbioPic.replace("%data%",bio.picture);
$("#header").prepend(formattedHTMLbioPic);

var formattedHTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedHTMLheaderName);

var formattedHTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedHTMLheaderRole);

var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedHTMLwelcomeMsg);

//var formattedHTMLcontactGeneric = HTMLcontactGeneric.replace("%contact%", "Contact Me").replace("%data%",bio.contactInfo);
//$("#header").append(formattedHTMLcontactGeneric);

$("#header").append(HTMLcontactGeneric);


$("#header").append(HTMLskillsStart);

for(i = 0; i < bio.skills.length; i++){
  var formattedHTMLskills = HTMLskills.replace("%data%",bio.skills[i]);
  $("#skills").append(formattedHTMLskills);
}

// BIO OBJECT APPENDING END //

// WORK AND EDUCATION OBJECT APPENDING BELOW //
