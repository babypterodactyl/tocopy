/*
This is empty on purpose! Your code to build the resume will go here.
*/

var bio = {
  name: "Baby Pterodactyl",
  role: "Front End Developer",
  contactInfo: "sasha@babypterodactyl.com",
  picture: "https://cdn.pterodactyl.io/site-assets/logo-icon.png",
  welcomeMessage: "Hello, welcome to my page.",
  skills: ["HTML", "CSS", "JavaScript"]
};

var formattedBiopic = HTMLbioPic.replace("%data%",bio.picture);
$("#header").prepend(formattedBiopic);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);

var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMessage);


$("#workExperience").append(HTMLskillsStart);

  for (i = 0; i <= bio.skills.length; i++) {
    var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
  }

console.log(formattedSkills);



var formattedContact = HTMLcontactGeneric.replace("%contact%", "Contact Me").replace("%data%",bio.contactInfo);
$("#lets-connect").append(formattedContact);
