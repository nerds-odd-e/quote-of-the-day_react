pipeline {
    agent any
    def app_image = "ci.odd-e.com:5000/quote-of-the-day_react"
    stages {
        stage('Run tests') {
            steps {
                sh 'make'
            }
        }
        stage('Build image') {
            steps {
                sh "docker build . -t ${app_image} && docker push ${app_image}"
            }
        }
        stage('Deploy') {
            steps {
                sh "docker run ${app_image}"
            }
        }
    }
}
