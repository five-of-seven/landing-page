module.exports = {

    /**
    
    * Application configuration section
    
    * http://pm2.keymetrics.io/docs/usage/application-declaration/
    
    */

    apps: [
        // First application
        {
            name: 'landing-page',
            script: 'npm start',
            env: {
                COMMON_VARIABLE:
                    'true'
            },
            env_production: {

                NODE_ENV:
                    'production'

            }

        },

    ],



    /**
    
    * Deployment section
    
    * http://pm2.keymetrics.io/docs/usage/deployment/
    
    */

    deploy: {

        production: {

            key: '/Users/Juico/.ssh/id_rsa',

            user: 'ubuntu',

            key: "/Users/Juico/.ssh/id_rsa",

            host: ['18.217.151.202'],

            ref: 'origin/master',

            ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no", "ForwardAgent=yes"],

            repo: 'git@github.com:nalnir/landing-page.git',

            path: '/landing-page',

            'pre-setup':
                "ls -la; sudo mkdir /landing-page ; sudo chown -R ubuntu.ubuntu /landing-page ; " +
                "sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - ; " +
                "sudo apt-get install -y nodejs ; " +
                "sudo npm install pm2 -g ; ",
            'pre-deploy':
                'sudo mkdir /landing-page ; ' +
                'sudo mkdir /landing-page/source ; sudo mkdir /landing-page/shared ;' +
                'sudo chown -R ubuntu.ubuntu /landing-page',
            'pre-deploy-local':
                "echo 'This is a local executed command'",
            'post-deploy':
                'sudo npm install && ' +
                'sudo pm2 reload ecosystem.config.js --env production && ' +
                'sudo pm2 restart landing-page && ' +
                'sudo pm2 start && ' +
                'cd ~/.landing-page/source && ' +
                'sudo npm start'
        },
    }
};
