//Mode Psychédélique
var button2 = document.getElementById('button2');
var button1 = document.getElementById('button1');
var body = document.getElementById('body');
var popup = document.getElementById('popup');
var btnClose = document.getElementById('btnClose');
var paragraphe1 = document.getElementById('paragraphe1');
var paragraphe2 = document.getElementById('paragraphe2');
var paragraphe3 = document.getElementById('paragraphe3');
var paragraphe4 = document.getElementById('paragraphe4');
var paragraphe5 = document.getElementById('paragraphe5');
var paragraphe6 = document.getElementById('paragraphe6');
var paragraphe7 = document.getElementById('paragraphe7');
var paragraphe8 = document.getElementById('paragraphe8');
var paragraphe9 = document.getElementById('paragraphe9');

var heading1 = document.getElementById('head1');
var heading2 = document.getElementById('head2');
var heading3 = document.getElementById('head3');
var heading4 = document.getElementById('head4');
var heading5 = document.getElementById('head5');
var heading6 = document.getElementById('head6');
var heading7 = document.getElementById('head7');
var heading8 = document.getElementById('head8');
var heading9 = document.getElementById('head9');
var heading10 = document.getElementById('head10');
//var paragraphe = document.getElementsTagName('par');


button2.addEventListener('click',PsychédéliqueMode);
btnClose.addEventListener('click',closePopup);

button1.addEventListener('click',Normal);

setTimeout(Popup,10000);

function Popup() {
	popup.style.display = 'inline';
}

function PsychédéliqueMode() {
	body.style.background = 'magenta';
	paragraphe1.style.color = '';
	paragraphe2.style.color = '';
	paragraphe3.style.color = '';
	paragraphe4.style.color = '';
	paragraphe5.style.color = '';
	paragraphe6.style.color = '';
	paragraphe7.style.color = '';
	paragraphe8.style.color = '';
	paragraphe9.style.color = '';
	paragraphe1.style.fontFamily = 'papyrus';
	paragraphe2.style.fontFamily = 'papyrus';
	paragraphe3.style.fontFamily = 'papyrus';
	paragraphe4.style.fontFamily = 'papyrus';
	paragraphe5.style.fontFamily = 'papyrus';
	paragraphe6.style.fontFamily = 'papyrus';
	paragraphe7.style.fontFamily = 'papyrus';
	paragraphe8.style.fontFamily = 'papyrus';
	paragraphe9.style.fontFamily = 'papyrus';
	heading1.style.color = 'green';
	heading2.style.color = 'green';
	heading3.style.color = 'green';
	heading4.style.color = 'green';
	heading5.style.color = 'green';
	heading6.style.color = 'green';
	heading7.style.color = 'green';
	heading8.style.color = 'green';
	heading9.style.color = 'green';
	heading10.style.color = 'green';
	heading1.style.fontFamily = 'comic sans';
	heading2.style.fontFamily = 'comic sans';
	heading3.style.fontFamily = 'comic sans';
	heading4.style.fontFamily = 'comic sans';
	heading5.style.fontFamily = 'comic sans';
	heading6.style.fontFamily = 'comic sans';
	heading7.style.fontFamily = 'comic sans';
	heading8.style.fontFamily = 'comic sans';
	heading9.style.fontFamily = 'comic sans';
	heading10.style.fontFamily = 'comic sans';
}


function closePopup() {
	popup.style.display = 'none';
}

//Mode Normal 

function Normal() {
	body.style.background = 'white';
	paragraphe1.style.color = '';
	paragraphe2.style.color = '';
	paragraphe3.style.color = '';
	paragraphe4.style.color = '';
	paragraphe5.style.color = '';
	paragraphe6.style.color = '';
	paragraphe7.style.color = '';
	paragraphe8.style.color = '';
	paragraphe9.style.color = '';
	paragraphe1.style.fontFamily = '';
	paragraphe2.style.fontFamily = '';
	paragraphe3.style.fontFamily = '';
	paragraphe4.style.fontFamily = '';
	paragraphe5.style.fontFamily = '';
	paragraphe6.style.fontFamily = '';
	paragraphe7.style.fontFamily;
	paragraphe8.style.fontFamily = '';
	paragraphe9.style.fontFamily = '';
	heading1.style.color = '';
	heading2.style.color = '';
	heading3.style.color = '';
	heading4.style.color = '';
	heading5.style.color = '';
	heading6.style.color = '';
	heading7.style.color = '';
	heading8.style.color = '';
	heading9.style.color = '';
	heading10.style.color = '';
	heading1.style.fontFamily = '';
	heading2.style.fontFamily = '';
	heading3.style.fontFamily = '';
	heading4.style.fontFamily = '';
	heading5.style.fontFamily = '';
	heading6.style.fontFamily = '';
	heading7.style.fontFamily = '';
	heading8.style.fontFamily = '';
	heading9.style.fontFamily = '';
	heading10.style.fontFamily = '';
}
