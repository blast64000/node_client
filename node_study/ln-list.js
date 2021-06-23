//https://boycoding.tistory.com/33

let contNode = class {
    constructor(data) {
        this.contCode = data.CONT_CD;
        this.contType = data.CONT_TYPE;
        this.contText = data.CONT_TXT;
        this.contActionSet = [];
    }
}

let botLinkedList = class {
    constructor(data) {
        this.botCode = data.BOT_CD;
        this.botName = data.BOT_NM;
        this.botEntryPointer = data.contentNode; //contNode type
    }

    append(data) {
        var node = new Node(data);
        var curr;

        if (this._head == null) {
            this._head = node;
        } else {
            curr = this._head;

            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;

        }
        this._length++;
    }

    removeAt(data) {}

    indexOf(data) {
        var curr = this._head,
            index = -1;
        while (curr) {
            if (curr.data === data) {
                return index;
            }
            index++;
            curr = curr.next;
        }
        return -1;
    }
}