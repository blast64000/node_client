//https://boycoding.tistory.com/33

var Node = function(data) {
    this.data = data
    this.next = null;
}

var LinkedList = function() {
    var _length = 0;
    var _head = null;
}

LinkedList.prototype.append = function(data) {
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
};
LinkedList.prototype.removeAt = function(data) {};
LinkedList.prototype.indexOf = function(data) {
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
};