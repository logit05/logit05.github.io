var player = 
{
	memeAmount: 0,
	meme1Amount: 0,
	meme1Cost: 10,
};
var defaultStart = player;

function memeClick(number)
{
	player.memeAmount++;
	document.getElementById("memeAmount").innerHTML = memeAmount;
	updateMemes();
};

function updateMemes()
{
	var element = document.getElementById("memeAmount");
	element.innerHTML = player.memeAmount;
}

function updateMemesOwned() 
{
	document.getElementById("meme1Amount").innerHTML = player.meme1Amount;
	
}

function updateMemesCosts() 
{
	document.getElementById("meme1CostBtn").innerHTML = player.meme1Cost;
	
}

function buyMeme1()
{
	if(player.memeAmount >= player.meme1Cost)
	{
		player.meme1Amount++;
		player.memeAmount = player.memeAmount - player.meme1Cost;
		player.meme1Cost = 10 * player.meme1Amount;
		document.getElementById("meme1Amount").innerHTML = player.meme1Amount;
		document.getElementById("memeAmount").innerHTML = player.memeAmount;
		document.getElementById("meme1CostBtn").innerHTML = player.meme1Cost;
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
	lastEdited();
	var saveGame = get_cookie('memeSave'); 
		if (!saveGame) return;
			player = saveGame;
			if (player.memeAmount !== 0) player.memeAmount = saveGame.memeAmount;
			if (player.meme1Amount !== 0) player.meme1Amount = saveGame.meme1Amount;
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
	updateMemes();
	updateMemesOwned();
	updateMemesCosts();
}, 100);

setInterval(function()
{
	if (player.meme1Amount > 0)
	{
		player.memeAmount = player.memeAmount + player.meme1Amount;
	}
}, 1000);

function init() 
{
    console.log('init');
};

function lastEdited() 
      {
      var time = document.lastModified;
      document.getElementById("time").innerHTML = time;
      }

load();

setInterval(function()
{
	save();
}, 10000);

 
init();