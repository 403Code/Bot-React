<p align="center">
 <img src="https://raw.githubusercontent.com/403Code/403Code/main/picture/fb-bot-react.gif" width="500">
</p>
<h4 align="center">
 <img src="https://raw.githubusercontent.com/403Code/403Code/main/picture/bot-react.png">
  Facebook Reaction Bot Automation with Google Script
</h4>
<div align="center">
  <a href="https://github.com/403Code">
    <img alt="Last Commit" src="https://img.shields.io/github/last-commit/403Code/Bot-React.svg"/>
  </a>
  <a href="https://github.com/403Code">
    <img alt="Language Count" src="https://img.shields.io/github/languages/count/403Code/Bot-React.svg"/>
  </a>
  <a href="https://github.com/403Code">
    <img alt="Top Language" src="https://img.shields.io/github/languages/top/403Code/Bot-React.svg"/>
  </a>
  <a href="https://github.com/403Code">
    <img alt="Repository Size" src="https://img.shields.io/github/repo-size/403Code/Bot-React.svg"/>
  </a>
  <a href="https://github.com/403Code">
    <img alt="Stars" src="https://img.shields.io/github/stars/403Code/Bot-React.svg"/>
  </a>
  <a href="https://github.com/403Code">
    <img alt="Forks" src="https://img.shields.io/github/forks/403Code/Bot-React.svg"/>
  </a>
</div>
<p align="center">
  Made with ❤️ by <a href="https://github.com/403Code">Nanta</a>
</p>

---

## 🔎 Features
* Reacting posts with multiple reactions
* Change cookies from Pastebin or any raw/plain text source
* Auto-follow option (enable/disable)
* 🌐 More stable using `www.facebook.com`
* 🔔 ![new](https://raw.githubusercontent.com/403Code/403Code/main/picture/new.gif) Discord Webhook integration for activity logs

---

## 🤔 How to use

Go to this part of the code:

```javascript
const config = {
  cookie: "xxx",
  reactType: [1,16,2,3],
  webhookUrl: "xxx",
};
```

### 🚶‍♂️ Steps:

- Change `"xxx"` in **cookie** with your Facebook cookies  
  Example:
  ```javascript
  cookie: "sb=xxxxxx;datr=xxxxxxxxx;c_user=xxxxxxxx",
  ```
  (keep the quotes)

  Or use raw link:
  ```javascript
  cookie: "https://pastebin.com/raw/xxxxxxxx",
  ```

- Set **reactType** based on the table below  
  Example:
  ```javascript
  reactType: [1,16,2,3],
  ```
  This will randomly react with LIKE, CARE, LOVE, and WOW  

  For single reaction:
  ```javascript
  reactType: [1],
  ```

- Set **webhookUrl** with your Discord webhook URL  
  Example:
  ```javascript
  webhookUrl: "https://discord.com/api/webhooks/xxxx",
  ```
  This will send activity logs to your Discord server  

---

## 📑 Reacts Table

| Reaction Name | React ID | React Emoji |
|---------------|----------|-------------|
| LIKE / SUKA   | 1        | 👍 |
| LOVE / SUPER  | 2        | ❤ |
| WOW           | 3        | 😮 |
| HAHA          | 4        | 😆 |
| SAD / SEDIH   | 7        | 😢 |
| ANGRY / MARAH | 8        | 😡 |
| CARE / PEDULI | 16       | 🤗 |

---

## 📲 Contact
[![Facebook](https://img.shields.io/badge/facebook-0866FF?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/dementorize)
[![Telegram](https://img.shields.io/badge/telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Rizemary)
[![Instagram](https://img.shields.io/badge/instagram-FF0069?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/dementorize)

---

## 💰 Support me
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/zonenathan)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/Rizemary)
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/zonenathan)
[![Trakteer](https://img.shields.io/badge/trakteer-BE1E2D?style=for-the-badge)](https://trakteer.id/d.izzy)
[![Saweria](https://img.shields.io/badge/saweria-FAAE2B?style=for-the-badge)](https://saweria.co/zeryuu)
[![Nyawer](https://img.shields.io/badge/nyawer-D894D8?style=for-the-badge)](https://nyawer.co/zeryuu)

## 🌐 Other Readme
![](https://img.shields.io/badge/Readme-English%20(Now)-blue) [![](https://img.shields.io/badge/Readme-Indonesian-blue)](https://github.com/403Code/Bot-React/blob/main/README.ID.md)

