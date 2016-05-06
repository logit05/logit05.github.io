var player = {
	meme: 0,
	meme1: 0
};

function memeClick(number){
    meme = meme + number;
	document.getElementById("memeAmount").innerHTML = meme;
};

function buymeme1(){
	var meme1cost = 10;
	if(meme >= meme1cost){
		meme1 = meme1 + 1;
		meme = meme - 10;
		document.getElementById('meme1amount').innerHTML = meme1
		document.getElementById("memeAmount").innerHTML = meme;
	};
};

function set_cookie(cookie_name,value){
	expiry = new Date();   
    expiry.setTime(new Date().getTime() + (10*60*1000)); 
    var c_value=escape(btoa(JSON.stringify(value))) + 
    "; expires="+expiry.toUTCString();
    document.cookie=cookie_name + "=" + c_value;
};

function get_cookie(cookie_name){
	var c_value = document.cookie;
	var c_start = c_value.indexOf(" " + cookie_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(cookie_name + "=");
    }
    if (c_start == -1) return false;
    c_start = c_value.indexOf("=", c_start) + 1;
    var c_end = c_value.indexOf(";", c_start);
    if (c_end == -1) {
        c_end = c_value.length;
    }
    c_value = atob(unescape(c_value.substring(c_start,c_end)));
	return JSON.parse(c_value);
};

function load(){
	var saveGame = get_cookie('memeSave'); 
	if (!save_data) return;
    	player = save_data;
		if (player.meme !== 0) meme = savegame.meme;
		if (player.ame.meme1 !== 0) meme1 = savegame.mem1;
};

function save(){
	set_cookie('memeSave', player);
};

/*
function restart(){
	var restart = {
		meme = 0;
		meme1 = 0;
	}
	localStorage.removeItem("save")
}
*/

window.setInterval(function(){
save();
}, 10000);

window.setInterval(function(){
memeClick(meme1);
}, 1000);

function init() {
    console.log('init');
};

init();