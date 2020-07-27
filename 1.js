setTimeout(function() {
    setText();
}, 0);

var setText = function() {
    document.getElementById('text').innerHTML = JSON.stringify(data); 
};

var f = function() {
    data = [22];
    setText();
};


var data = [
    '29.07'
];
