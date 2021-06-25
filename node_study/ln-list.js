//https://boycoding.tistory.com/33

let ContNode = class {
    constructor(data) {
        this.contCode = data.CONT_CD;
        this.contType = data.CONT_TYPE;
        this.contText = data.CONT_TXT;
        this.contActionSet = [];
    }
}

let ActNode = class {
    constructor(data) {
        this.actCode = data.ACT_CD;
        this.actSetCode = data.ACT_SET_CD;
        this.actType = data.ACT_TYPE;
        this.actName = data.ACT_NM;
        this.nextContCode = data.ACT_CONT_CD;
    }
}

let BotLinkedList = class {
    constructor(chatBotList) {
        this.botCode = chatBotList.BOT_CD;
        this.botName = chatBotList.BOT_NM;
        this.botContentList = [];
        //this.botEntryPointer = chatBotList.entryNode;
    }

    initContentArray(contentList, actionList) {

        for (i = 0; i < contentList.length; i++) {

            this.botContentList[i] = new ContNode(contentList.content);


            for (j = 0; j < this.actionList.length; j++) {

                if (this.botContentList[i].contCode === actionList[j].nextContCode)
                    this.botContentList[i].contActionSet.append(actionList[j]);
            }
        }
    }
    removeAt(data) {}
    indexOf(data) {}

}