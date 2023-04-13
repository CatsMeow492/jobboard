const execSync = require('child_process').execSync;

const commitMessage = process.argv[2];

try {
    execSync(`git add .`);
    execSync(`git commit -m "${commitMessage}"`);
    execSync(`git push origin dev`);
    console.log('Pushed to dev');
} catch (error) {
    console.log('An error occurred while committing the changes:', error);
}