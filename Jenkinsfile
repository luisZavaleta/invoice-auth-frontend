def withPod(body) {
  podTemplate(label: 'pod', serviceAccount: 'jenkins', containers: [
      containerTemplate(name: 'docker', image: 'docker', command: 'cat', ttyEnabled: true),
      containerTemplate(name: 'kubectl', image: 'lachlanevenson/k8s-kubectl', command: 'cat', ttyEnabled: true),
      containerTemplate(name: 'node', image: 'node:8-alpine', command: 'cat', ttyEnabled: true)
    ],
    volumes: [
      hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock'),
    ]
 ) { body() }
}



withPod {
	node('pod') {

    	def tag = "${env.BRANCH_NAME}.${env.BUILD_NUMBER}"
    	def service = "luiszavaleta/invoice-auth-frontend:${tag}"

    	checkout scm

   		container('docker') {

    		stage('Test React App') {
         		container('node') {
         			sh("npm install")
         			sh("npm install react-scripts@3.0.1 -g")
            		sh("CI=true npm test")
            		sh("echo 'hola'")        		
            	}
    		}
 		}

  	}
}