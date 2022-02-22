node {
    def app

    stage('Clone repository') {
        checkout scm
    }

    stage('Build application') {
        sh 'npm install'
        sh 'npm run-script build'
    }

    stage('Build Docker image') {
        app = docker.build("bshandley/tern-starter")
    }

    stage('Test image') {
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }

    stage ('Update k8 cluster') {
        sh 'kubectl rollout restart deployment tern-starter-deployment'
    }
}
