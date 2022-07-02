const sonarqubeScanner = require('sonarqube-scanner');
http://54.90.130.98:9000/
sonarqubeScanner({
  serverUrl: 'http://54.90.130.98:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - Sample',
	    'sonar.projectKey':'NodeJsLandmarkTechnologies',
	    'sonar.login': '154cb0a283b36b67e6586fce0e3894a400bb9bdc',
	    //'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
