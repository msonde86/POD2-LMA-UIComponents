pipeline {
    agent {
        docker {
            image 'node'
            args '-p 3000:3000'
        }
    }
    environment { 
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deliver') { 
            steps {
                sh 'set -x' 
                sh 'npm start &'
                sh 'sleep 1'
                sh 'echo $! > .pidfile'
                sh 'set +x'
                input message: 'Finished using the web site? (Click "Proceed" to continue)' 
                sh './jenkins/scripts/kill.sh' 
                sh 'set -x'
                sh 'kill $(cat .pidfile)'
            }
        }
    }
}
