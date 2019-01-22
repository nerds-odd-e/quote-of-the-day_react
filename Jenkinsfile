pipeline {
    agent any
    stages {
        stage('Run tests') {
            steps {
                sh 'source $JENKINS_HOME/.nvm/nvm.sh && nvm use 11.7 && npm i yarn && yarn install && CI=true yarn test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build . -t quote-of-the-day_react'
            }
        }
    }
}