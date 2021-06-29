let ContNode = class {
    constructor(data) {
        this.contCode = data.CONT_CD;
        this.contType = data.CONT_TYPE;
        this.contText = data.CONT_TXT;
        this.contActSetCode = data.CONT_ACT_SET_CD;
        this.contActionSet = [];
    }
    appendActionSet(actionList) {
        for (i = 0; i < actionList.length; i++) {

            if (this.contActSetCode === actionList[i].actSetCode) {
                this.contActionSet.push(actionList[i]);
            } else {
                continue;
            }
        }
    }

}

let ActNode = class {
    constructor(data) {
        this.actCode = data.ACT_CD;
        this.actSetCode = data.ACT_SET_CD;
        this.actType = data.ACT_TYPE;
        this.actName = data.ACT_NM;
        this.nextContCode = data.act_cont_cd;
        this.nextNode = null;
    }
    appendNextCont(contentList) {
        for (i = 0; i < contentList.length; i++) {
            if (this.nextContCode === contentList[i].contCode) {
                this.nextNode = contentList[i]
                return 1;
            } else {
                //error 
                continue;
            }

        }


    }
}

let BotNode = class {
    constructor(chatBotList) {
        this.botCode = chatBotList.BOT_CD;
        this.botName = chatBotList.BOT_NM;
        this.botStartCode = chatBotList.BOT_CONT_CD;
        this.botStartNode = null;
    }

    appendEntryPoint(contentList) {
        for (i = 0; i < contentList.length; i++) {
            if (this.botStartCode === contentList[i].contCode) {
                this.botStartNode = contentList[i]
                return 1;

            } else {
                //error 
                return -1;

            }
        }
    };

    removeAt(data) {}
    indexOf(data) {}

}

module.exports = { ContNode, ActNode, BotNode };