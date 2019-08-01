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


            stage('Build Image'){
              sh("docker build -t ${service}  .")
            }

            stage('Run Image'){
              sh("docker ps")
              sh("docker stop invoice-auth-frontend-test || true")
              sh("docker rm invoice-auth-frontend-test || true")
              sh("docker run -d --name invoice-auth-frontend-test ${service}")
              sh("docker stop invoice-auth-frontend-test")
              sh("docker rm invoice-auth-frontend-test")
            }


            stage('Publish') {
              withDockerRegistry(registry: [credentialsId:'dockerhub']){
                sh("docker tag ${service} ${service}")
                sh("docker push ${service}")
              }
            }

            def deploy = load('deploy.groovy')

            stage('Deploy to testenv') {
              deploy.toKubernetes(service, 'testenv')
            }
 		   }
    }
}












