

var _skill = ["Eat", "Sleep", "Eat", "Sleep", "..."]
var bio = {
    "name" : "Hang Nguyen",
    "role" : "Role: Fusce sit amet",
    "contactInfo" : {
        "mobile": "123-456789",
        "email": "hang@awesome.co",
        "github": "hangawesome",
        "location": "Singapore"
        },


    "pictureURL" : "http://vuila.info/images/2015/05/2015-05-02-17-48-04-696-10956053_963661623644482_1456182473176216638_n.png", //./images/ava.jpg",
    "welcomeMessage" : "Hello Everyone!",
    "skills" : _skill
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedPic = HTMLbioPic.replace("%data%", bio.pictureURL);
$("#header").append(formattedPic);

var formattedMoblie = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
$("#topContacts").append(formattedMoblie);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
$("#topContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
$("#topContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
$("#topContacts").append(formattedLocation);


var formattedMoblie = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
$("#footerContacts").append(formattedEmail);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
$("#footerContacts").append(formattedGithub);
var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
$("#footerContacts").append(formattedLocation);


if (bio.skills.length > 0) { 
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]); 
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]); 
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]); 
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]); 
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[4]); 
    $("#skills").append(formattedSkills);
};








var education = {
    "schools": [
      {
        "name": "Aliquam vehicula",
        "city": "Ha Noi",
        "majors": "Cras maximus",
        "dates": "2040 to 2050",
        "degree": "Good",
      },
      {
        "name": "In sit amet odio",
        "city": "Da Nang",
        "majors": "Nunc tempus",
        "dates": "2020 to 2030",
        "degree": "Good"
      }],
    "cerfiticate": [
      {
        "title": "Cras a massa a elit",
        "dates": "2010",
        "scores": "100"
      }]
};
education.display = function(){
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);
        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedCity);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);        
        }       
};
education.display();










var projects = {
    "projects": [
      {
        "title": "Sample project 2",
        "dates": "2200",
        "description": "Aliquam et euismod nisl. Nunc tempus, ligula at consectetur molestie, libero diam dictum massa, vel vehicula sapien turpis non eros. Nam fermentum, sem sed sollicitudin finibus, neque erat commodo elit, viverra porttitor enim libero at enim. In a libero a quam condimentum ullamcorper commodo vel ante. Cras maximus leo ac volutpat feugiat. Pellentesque justo metus, aliquam vel sollicitudin a, mollis iaculis diam. Pellentesque convallis risus ac vehicula dapibus. Maecenas aliquet libero at lectus elementum, sed aliquet diam consequat. Phasellus id ipsum dui.",
        "images": ["http://img.vietnamplus.vn/t660/Uploaded/rfnuu/2015_07_08/Tho_Bay_Mau_sd.JPG"]
      },
      {
        "title": "Sample project 1",
        "dates": "2100",
        "description": "Quisque eu erat a ante hendrerit tempor. Suspendisse potenti. Morbi malesuada dictum libero vitae consequat. Vestibulum vel hendrerit ante, quis maximus augue. Suspendisse congue justo eu tempus sollicitudin. Sed pulvinar, neque non vestibulum volutpat, libero neque aliquet arcu, eget cursus mi libero ut augue. Morbi cursus rutrum vehicula. Sed in nisl eu tellus placerat pellentesque. Vestibulum nec nisi vitae urna tempus consectetur. Ut sagittis quam nibh, eu dictum leo aliquet non. Cras a massa a elit placerat condimentum. Curabitur mattis est a justo ultricies lobortis. Cras porta fringilla mattis.",
        "images": ["http://125.235.37.56/medias12//2015/08/03/af232a50-4983-4769-9f8a-23f56162266a.jpg"]
      }]
};
projects.display = function(){
    for (p in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[p].images.length > 0){
            for (image in projects.projects[p].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
                $(".project-entry:last").append(formattedImage);} 
            }
        }       
};
projects.display();










var work = {
    "jobs": [
      {
        "employer": "Aenean Semper",
        "title": "Job 1",
        "dates": "2500 to the future",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in ultrices purus. Curabitur hendrerit scelerisque nulla vel euismod. Vestibulum ac massa interdum, viverra nisl in, lacinia orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed justo sem, pharetra nec gravida sed, ullamcorper eu tellus. Nunc ut commodo libero. Morbi scelerisque lacus ultrices tortor imperdiet mattis et quis ex. Duis a gravida lacus, tempor sagittis turpis.",
        "location": "Ho Chi Minh"
      },
      {
        "employer": "Ut Fugiat",
        "title": "Job 2",
        "dates": "2200 to 2500",
        "description": "Vivamus ultrices dolor ac est egestas, et mollis sem dictum. Mauris varius commodo maximus. Aenean hendrerit augue eget luctus iaculis. Morbi eu dolor quis urna vestibulum malesuada. Vestibulum non convallis lacus. Nunc vel aliquet dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In metus lacus, efficitur vel gravida id, vehicula vel metus. Sed cursus erat purus, at cursus nibh varius sit amet. Donec ornare elit orci, ut fringilla nulla pulvinar vitae. Donec congue auctor arcu pulvinar tempor. Maecenas vel gravida sem, nec mollis lorem. Donec nec vestibulum leo. Aliquam consequat ligula at neque bibendum, eget accumsan lacus iaculis. Praesent quis mi quis justo cursus varius vel pharetra neque.",
        "location": "Bangkok"
      },
      {
        "employer": "Nam Porta",
        "title": "Job 3",
        "dates": "2100",
        "description": "Nam ac tellus ligula. Donec rutrum magna vitae est convallis, a accumsan ante fermentum. Donec eu dolor ornare, pretium sapien sit amet, convallis neque. Maecenas vulputate magna vel lacus pellentesque dictum. Maecenas mollis dolor ac dui rutrum, ut auctor leo gravida. Duis pharetra elit eget orci scelerisque, ut pulvinar quam posuere. Praesent ut libero et lorem dapibus placerat. Suspendisse quis tempus metus. Suspendisse potenti. Nunc sed tortor quam. Suspendisse aliquet sed massa vitae malesuada. Praesent mauris tellus, volutpat at lacus eu, lobortis vulputate urna. Donec molestie volutpat turpis eu malesuada. Nullam sed purus fringilla, sodales arcu id, laoreet eros.",
        "location": "Siem Riep"
      }]
};
function displayWork() {
    for (job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var HTMLformattedEmployerTitle = formattedEmployer + formattedTitle
    $(".work-entry:last").append(HTMLformattedEmployerTitle); 

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
};
displayWork();









$('#mapDiv').append(googleMap);
google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map, marker);
    });











