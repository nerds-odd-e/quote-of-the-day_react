pipeline {
    agent any
    stages {
        stage('Run tests') {
            steps {
                sh 'make'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build . -t quote-of-the-day_react'
            }
        }
    }
}