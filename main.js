var player = 
{
	meme0: 0,
	meme1: 0,
	meme1amount: 0,
	memeAmount: 0,
};
var defaultStart = player;

function memeClick(number)
{
	player.meme0++;
	document.getElementById("memeAmount").innerHTML = meme0;
};

function buymeme1()
{
	var meme1cost = 10;
	if(meme0 >= meme1cost){
		meme1 = meme1 + 1;
		meme0 = meme0 - 10;
		document.getElementById("meme1amount").innerHTML = meme1;
		document.getElementById("memeAmount").innerHTML = meme0;
	};
};

function set_cookie(cookie_name,value)
{
	expiry = new Date();   
    expiry.setTime(new Date().getTime() + (10*60*1000)); 
    var c_value=escape(btoa(JSON.stringify(value))) + 
    "; expires="+expiry.toUTCString();
    document.cookie=cookie_name + "=" + c_value;
};

function get_cookie(cookie_name)
{
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

function load()
{
	var saveGame = get_cookie('memeSave'); 
		if (!saveGame) return;
			player = saveGame;
			if (player.meme0 !== 0) meme0 = savegame.meme;
			if (player.meme1 !== 0) meme1 = savegame.mem1;
};

function save()
{
	set_cookie('memeSave', player);
};


function restart()
{
	if(confirm("Do you really want to erase all your progress?")){
	set_cookie('memeSave', defaultStart);
	load();
	}
};


setInterval(function()
{
memeClick(meme1);
}, 1000);

function init() 
{
    console.log('init');
};





load();
setInterval(function () { save(); }, 10000);
init();