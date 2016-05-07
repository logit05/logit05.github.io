var player = 
{
	memeAmount: 0,
	meme1Amount: 0,
};
var defaultStart = player;

function memeClick(number)
{
	player.memeAmount++;
	document.getElementById("memeAmount").innerHTML = memeAmount;
};

function updateMemes() {
	var element = document.getElementById("memeAmount");
  element.innerHTML = player.memeAmount;
}

function buyMeme1()
{
	var meme1Cost = 10;
	if(memeAmount >= meme1cost){
		meme1++;
		memeAmount = memeAmount - 10;
		document.getElementById("meme1Amount").innerHTML = meme1Amount;
		document.getElementById("memeAmount").innerHTML = memeAmount;
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

function save()
{
	set_cookie('memeSave', player);
};

function load()
{
	var saveGame = get_cookie('memeSave'); 
		if (!saveGame) return;
			player = saveGame;
			if (player.memeAmount !== 0) player.memeAmount = savegame.memeAmount;
			if (player.meme1Amount !== 0) player.meme1Amount = savegame.meme1Amount;
};

function restart()
{
	if(confirm("Do you really want to erase all your progress?"))
	{
	set_cookie('memeSave', defaultStart);
	load();
	}
};

setInterval(function()
{
	if (meme1Amount >= 1)
	{
		memeClick(player.meme1Amount);
	}
}, 1000);

function init() 
{
    console.log('init');
};


load();
setInterval(function () 
	{ 
	save(); 
	}, 10000);
init();