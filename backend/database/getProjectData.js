const mysqlConnection = require('./connection.js');

let getProjectData = new Promise(function(resolve, reject) {
  let finalArray = [];
  mysqlConnection.query("SELECT * FROM Online_Portfolio.projectTable", (err, projectRes) => {
    mysqlConnection.query("SELECT * from Online_Portfolio.projectDescriptionLinkTable", (err, descriptionRes) => {
      for(const project of projectRes){
        let projectArray = [];
        projectArray.push(project.name); //0
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
        projectArray.push(genreArray, languageArray, technologyArray); //1, 2, 3
        projectArray.push(project.about); //4
        projectArray.push(project.viewButtonBool); //5
        projectArray.push(project.sourceButtonBool); //6
        projectArray.push(project.image_path); //7
        projectArray.push(project.source_path); //8
        projectArray.push(projectArray.visit_path); //9
        finalArray.push(projectArray);
      }
      resolve(finalArray);
    });
  });
});

module.exports = getProjectData;
