pipeline {
    agent any
    stages {
        stage('Run tests') {
            steps {
                sh 'yarn install && yarn test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build . -t quote-of-the-day_react'
            }
        }
    }
}