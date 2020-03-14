const mysqlConnection = require('./connection.js');

let getProjectData = new Promise(function(resolve, reject) {
  let finalArray = [];
  mysqlConnection.query("SELECT * FROM Online_Portfolio.projectTable", (err, projectRes) => {
    mysqlConnection.query("SELECT * from Online_Portfolio.projectDescriptionLinkTable", (err, descriptionRes) => {
      for(const project of projectRes){
        let projectArray = [];
        projectArray.push(project.name);
        let genreArray = [];
        let languageArray = [];
        let technologyArray = [];
        for(const description of descriptionRes){
          if(description.projectId == project.id){
            if(description.descriptionId == 1){
              genreArray.push(description.name);
            }
            else if(description.descriptionId == 2){
              languageArray.push(description.name);
            }
            else
              technologyArray.push(description.name);
          }
        }
        if(genreArray.length < 4)
          for(var i = genreArray.length; i < 4; i++)
            genreArray.push("");
        if(languageArray.length < 4)
           for(var i = languageArray.length; i < 4; i++)
            languageArray.push("");
        if(technologyArray.length < 4)
           for(var i = technologyArray.length; i < 4; i++)
             technologyArray.push("");
        projectArray.push(genreArray, languageArray, technologyArray);
        projectArray.push(project.about);
        projectArray.push(project.viewButtonBool);
        projectArray.push(project.sourceButtonBool);
        projectArray.push(project.image_path);
        projectArray.push(project.source_path);
        projectArray.push(projectArray.visit_path);
        finalArray.push(projectArray);
      }
      resolve(finalArray);
    });
  });
});

module.exports = getProjectData;
