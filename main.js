var player = 
{
	memeAmount: 0,
	meme1Amount: 0,
	meme1Cost: 1,
	meme2Amount: 0,
	meme2Cost: 10,
	meme3Amount: 0,
	meme3Cost: 100,
	meme4Amount: 0,
	meme4Cost: 1000,
	meme5Amount: 0,
	meme5Cost: 10000,
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
	document.getElementById("meme2Amount").innerHTML = player.meme2Amount;
	document.getElementById("meme3Amount").innerHTML = player.meme3Amount;
	document.getElementById("meme4Amount").innerHTML = player.meme4Amount;
	document.getElementById("meme5Amount").innerHTML = player.meme5Amount;
	
}

function updateMemesPro() 
{
	document.getElementById("meme1pro").innerHTML = player.meme1pro;
	document.getElementById("meme2pro").innerHTML = (2 * player.meme2pro);
	document.getElementById("meme3pro").innerHTML = (3 * player.meme3pro);
	document.getElementById("meme4pro").innerHTML = (4 * player.meme4pro);
	document.getElementById("meme5pro").innerHTML = (5 * player.meme5pro);
	
}

function updateMemesCosts() 
{
	document.getElementById("meme1CostBtn").innerHTML = player.meme1Cost;
	document.getElementById("meme2CostBtn").innerHTML = player.meme2Cost;
	document.getElementById("meme3CostBtn").innerHTML = player.meme3Cost;
	document.getElementById("meme4CostBtn").innerHTML = player.meme4Cost;
	document.getElementById("meme5CostBtn").innerHTML = player.meme5Cost;
	
}

function buyMeme1()
{
	if(player.memeAmount >= player.meme1Cost)
	{
		player.meme1Amount++;
		player.memeAmount = player.memeAmount - player.meme1Cost;
		player.meme1Cost = 2 * player.meme1Cost;
		document.getElementById("meme1Amount").innerHTML = player.meme1Amount;
		document.getElementById("memeAmount").innerHTML = player.memeAmount;
		document.getElementById("meme1CostBtn").innerHTML = player.meme1Cost;
		document.getElementById("meme1pro").innerHTML = player.meme1Amount;
	};
	
};

function buyMeme2()
{
	if(player.memeAmount >= player.meme2Cost)
	{
		player.meme2Amount++;
		player.memeAmount = player.memeAmount - player.meme2Cost;
		player.meme2Cost = 3 * player.meme2Cost;
		document.getElementById("meme2Amount").innerHTML = player.meme2Amount;
		document.getElementById("memeAmount").innerHTML = player.memeAmount;
		document.getElementById("meme2CostBtn").innerHTML = player.meme2Cost;
		document.getElementById("meme2pro").innerHTML = (2 *player.meme2Amount);
	};
	
};

function buyMeme3()
{
	if(player.memeAmount >= player.meme3Cost)
	{
		player.meme3Amount++;
		player.memeAmount = player.memeAmount - player.meme3Cost;
		player.meme3Cost = 4 * player.meme3Cost;
		document.getElementById("meme3Amount").innerHTML = player.meme3Amount;
		document.getElementById("memeAmount").innerHTML = player.memeAmount;
		document.getElementById("meme3CostBtn").innerHTML = player.meme3Cost;
		document.getElementById("meme3pro").innerHTML = (3 *player.meme3Amount);
	};
	
};

function buyMeme4()
{
	if(player.memeAmount >= player.meme4Cost)
	{
		player.meme4Amount++;
		player.memeAmount = player.memeAmount - player.meme4Cost;
		player.meme4Cost = 5 * player.meme4Cost;
		document.getElementById("meme4Amount").innerHTML = player.meme4Amount;
		document.getElementById("memeAmount").innerHTML = player.memeAmount;
		document.getElementById("meme4CostBtn").innerHTML = player.meme4Cost;
		document.getElementById("meme4pro").innerHTML = (4 *player.meme4Amount);
	};
	
};

function buyMeme5()
{
	if(player.memeAmount >= player.meme5Cost)
	{
		player.meme5Amount++;
		player.memeAmount = player.memeAmount - player.meme5Cost;
		player.meme5Cost = 6 * player.meme5Cost;
		document.getElementById("meme5Amount").innerHTML = player.meme5Amount;
		document.getElementById("memeAmount").innerHTML = player.memeAmount;
		document.getElementById("meme5CostBtn").innerHTML = player.meme5Cost;
		document.getElementById("meme5pro").innerHTML = (5 *player.meme5Amount);
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
			if (player.meme2Amount !== 0) player.meme2Amount = saveGame.meme2Amount;
			if (player.meme3Amount !== 0) player.meme3Amount = saveGame.meme3Amount;
			if (player.meme4Amount !== 0) player.meme4Amount = saveGame.meme4Amount;
			if (player.meme5Amount !== 0) player.meme5Amount = saveGame.meme5Amount;
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
	if (player.meme2Amount > 0)
	{
		player.memeAmount = player.memeAmount + (2 * player.meme2Amount);
	}
	if (player.meme3Amount > 0)
	{
		player.memeAmount = player.memeAmount + (3 * player.meme2Amount);
	}
	if (player.meme4Amount > 0)
	{
		player.memeAmount = player.memeAmount + (4 * player.meme2Amount);
	}
	if (player.meme5Amount > 0)
	{
		player.memeAmount = player.memeAmount + (5 * player.meme2Amount);
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