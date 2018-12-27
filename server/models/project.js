const Projects = require('./projects');

class Project {
  constructor(data) {
    this.name = data.name;
  }

  save() {
    return Projects.insertData(this);
  }
}

module.exports = Project;