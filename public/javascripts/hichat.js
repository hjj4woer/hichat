window.onload = function(){
    var hichat1 = new hichat();
    hichat1.init();
};

var hichat = function () {
    this.socket = null;
};

hichat.prototype = {
    init: function(){
        var that = this;

        this.socket = io.connect();
        this.socket.on('connect', function () {
            $('#info').textContent = 'get yourself a nickname :}';
            $('#nickWrapper').style.display = 'block';
            $('#nicknameInput').focus();
        });
    }
};