const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: "flatfusion.mcsh.io",  // ← আপনার Java IP
  port: 25565,                 // ← Java পোর্ট, Direct IP হলে 11046
  username: "Semx",
  version: "1.20.1"            // ← আপনার সার্ভারের ভার্সন দিন
});

bot.on('login', () => {
  console.log("✅ বট জয়েন করেছে, লগইন করছে...");
  bot.chat("/login Salman2211@#");
});

bot.on('spawn', () => {
  console.log("✅ বট স্পন হয়েছে, নড়াচড়া শুরু করছে...");
  setInterval(startMoving, 8000);
});

function startMoving() {
  bot.setControlState('jump', true);
  setTimeout(() => bot.setControlState('jump', false), 200);
  bot.setControlState('forward', true);
  setTimeout(() => bot.setControlState('forward', false), 300);
  bot.setControlState('back', true);
  setTimeout(() => bot.setControlState('back', false), 300);
  bot.look(Math.random() * Math.PI * 2, 0, true);
}

bot.on('error', (err) => console.log("❌ Error:", err));
bot.on('end', () => console.log("⚠️ বট ডিসকানেক্ট হয়েছে।"));
