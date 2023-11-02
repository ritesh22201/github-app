
const getPullRequestCode = async (pullReq) => {
    const pullReqBody = pullReq.body;
    const regexCode = /```([\s\S]+?)```/g;
    const matchBodyCode = pullReqBody.match(regexCode);

    if (matchBodyCode) {
        const codeBlock = matchBodyCode[0];
        return codeBlock.replace(/```/g, '');
    }

    return null;
}

module.exports = getPullRequestCode;