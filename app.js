const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

function sendData() {
  tg.sendData("Commande envoyée");
}
