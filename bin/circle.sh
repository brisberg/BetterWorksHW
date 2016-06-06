git config --global user.email $GIT_DEPLOY_USERNAME
git config --global user.name $GIT_DEPLOY_EMAIL

node ./node_modules/gulp/bin/gulp.js deploy
