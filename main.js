
const { createNodeMiddleware, Probot, run } = require('probot');
const app = require('./index.js');
const generateExecutedCode = require('./code/generateExecutedCode.js');
const getPullRequestCode = require('./code/getPullRequestCode.js');
require('dotenv').config();

const probot = new Probot({
    appId: process.env.APP_ID,
    privateKey: process.env.PRIVATE_KEY,
    secret: process.env.WEBHOOK_SECRET
})

probot.on("pull_request.opened", async (context) => {

    const pullReq = context.payload.pull_request;
    const command = '/execute';
    const pullReqBody = pullReq.body;
    const pullReqNum = context.repo({issue_number : pullReq.number});

    const comments = await context.octokit.issues.listComments(pullReqNum);

    if(pullReqBody.includes(command)){
        const code = await getPullRequestCode(pullReq);
    
        if(code){
            const response = await generateExecutedCode(code);

            if(response.success){
                const responseOutput = response.output;

                await context.octokit.issues.createComment(context.repo({
                    issue_number : pullReq.number,
                    body : `Executed code output : \n ${responseOutput}`
                }))
            }
            else{
                await context.octokit.issues.createComment(context.repo({
                    issue_number : pullReq.number,
                    body : `Code execution failed : ${response.error}`
                }))
            }
        }
        else{
            await context.octokit.issues.createComment(context.repo({
                issue_number : pullReq.number,
                body : 'No code found in the pull request!'
            }))
        }
    }
})

run(app);

module.exports = createNodeMiddleware(app, { probot });