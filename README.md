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

## 🔎 Features
* Automatically react to posts with multiple types of reactions
* Change cookies from Pastebin or any service that supports raw/plain text

## 🤔 How to Use
Locate this part of the code:
```javascript
const config = {
    cookie: "xxx",
    reactType: [1,16,2,3],
};
```
### 🚶‍♂️ Steps:
- Replace `"xxx"` with your Facebook cookies. Example: `cookie: "sb=xxxxxx;datr=xxxxxxxxx;c_user=xxxxxxxx",` (do not remove the quotation marks). Alternatively, you can use a service that shows raw/plain text such as [Pastebin](https://pastebin.com). Example: `cookie: "https://pastebin.com/raw/xxxxxxxx",`
- Update `reactType` with the reactions (using React IDs) you want to use. Refer to the table below. Example: `reactType: [1,16,2,3],` (no quotes, separated by commas). This will randomly apply LIKE, LOVE, WOW, and CARE reactions to each post. If you only want a single reaction, use: `reactType: [1],` which means only the LIKE reaction will be applied.

## 📑 Reaction Table
| Reaction Name | React ID | Emoji |
|---------------|----------|-------|
| LIKE          |        1 | 👍 |
| LOVE          |        2 | ❤ |
| WOW           |        3 | 😮 |
| HAHA          |        4 | 😆 |
| SAD           |        7 | 😢 |
| ANGRY         |        8 | 😡 |
| CARE          |       16 | 🤗 |

## 📲 Contact
[![Facebook](https://img.shields.io/badge/facebook-0866FF?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/dementorize)
[![Telegram](https://img.shields.io/badge/telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Rizemary)
[![Instagram](https://img.shields.io/badge/instagram-FF0069?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/dementorize)

## 💰 Support Me
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/zonenathan)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/Rizemary)
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/zonenathan)
[![Trakteer](https://img.shields.io/badge/trakteer-BE1E2D?style=for-the-badge&logo=data:image/svg%2bxml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMTA0Mi4wMDAwMDBwdCIgaGVpZ2h0PSIxMDQyLjAwMDAwMHB0IiB2aWV3Qm94PSIwIDAgMTA0Mi4wMDAwMDAgMTA0Mi4wMDAwMDAiCiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0Ij4KPG1ldGFkYXRhPgpDcmVhdGVkIGJ5IHBvdHJhY2UgMS4xNiwgd3JpdHRlbiBieSBQZXRlciBTZWxpbmdlciAyMDAxLTIwMTkKPC9tZXRhZGF0YT4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMTA0Mi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMCkiCmZpbGw9IiMwMDAwMDAiIHN0cm9rZT0ibm9uZSI+CjxwYXRoIGQ9Ik00NjEzIDg3MjQgYy0yNTMgLTU1IC00NzcgLTI0OCAtNTY5IC00OTAgLTE5OSAtNTI1IDE4MSAtMTA4NCA3NDAKLTEwODQgbDk4IDAgLTYgMjYgYy0yOCAxMTEgLTI0IDI2NiA5IDM4MiA4MiAyODAgMzA2IDQ4NiA1OTYgNTQ4IDk0IDIxIDk0IDIxCjQ2IDEzOSAtNzggMTkyIC0yMzMgMzUyIC00MjIgNDM0IC0xMzIgNTggLTM0NSA3OCAtNDkyIDQ1eiIvPgo8cGF0aCBkPSJNNTU5NCA3OTgwIGMtMTM2IC0yNSAtMjYyIC05MSAtMzY0IC0xOTAgLTE4OCAtMTg0IC0yNTMgLTQ1OCAtMTcwCi03MTIgMTIgLTM1IDMyIC04MiA0NCAtMTA0IGwyMiAtMzkgNTg5IDAgNTkwIDAgMzIgNjUgYzQ0IDg5IDY1IDE4NiA2NSAzMDAgMAoyNTQgLTExOSA0NjMgLTMzOSA1OTYgLTEyMiA3MyAtMzI1IDExMCAtNDY5IDg0eiIvPgo8cGF0aCBkPSJNMzgwMSA2NzU5IGMtMTM1IC0yNyAtMjI1IC0xNDIgLTIyNSAtMjg5IDAgLTExOSA1OCAtMjE1IDE1OSAtMjY1CjM5IC0yMCA3MSAtMjAgMTQ1NSAtMjMgbDE0MTQgLTIgNTMgMjUgYzY0IDMyIDEyNiAxMDAgMTQ3IDE2MiAyMCA2MCAyMCAxNDcgMAoyMDYgLTIyIDY0IC05MSAxMzkgLTE1NiAxNjggbC01MyAyNCAtMTM3NSAxIGMtNzU2IDEgLTEzOTUgLTIgLTE0MTkgLTd6Ii8+CjxwYXRoIGQ9Ik0zNTEwIDU4ODUgbDAgLTE2NSAtNDIgLTIxIGMtMjEzIC0xMDcgLTM5MyAtMzQxIC00NjQgLTYwNCAtMTggLTY3Ci0xOSAtMTI3IC0xOSAtMTQ1MCAwIC0xMzIzIDEgLTEzODMgMTkgLTE0NTAgOTQgLTM0NyAzNDMgLTU5OSA2ODUgLTY5NCBsOTYKLTI2IDE0MjAgMCAxNDIwIDAgOTAgMjMgYzE5NyA1MSAzOTEgMTc1IDUxNCAzMjkgNzcgOTcgMTUzIDI0OSAxODMgMzY4IGwyMwo5MCAwIDEzNjAgMCAxMzYwIC0yMyA5MCBjLTY2IDI2MyAtMjUwIDQ5NSAtNDg5IDYxOCBsLTgzIDQyIDAgMTQ4IDAgMTQ3Ci0xNjY1IDAgLTE2NjUgMCAwIC0xNjV6IG0yOTAwIC0zNjggbDAgLTEwMyA5OCAtMTkgYzE3NyAtMzMgMjU5IC03MiAzNTMgLTE2Nwo2NSAtNjYgMTIyIC0xNzQgMTM5IC0yNjMgOCAtNDMgMTAgLTQzMCA4IC0xMzU1IGwtMyAtMTI5NSAtMjMgLTU5IGMtNTggLTE1MwotMTc1IC0yNzAgLTMyNyAtMzI4IGwtNjAgLTIzIC0xMzU4IC0zIGMtMTE5MiAtMiAtMTM2NSAwIC0xNDI0IDEzIC0xNzkgNDIKLTMyNyAxODIgLTM4MyAzNjQgLTE5IDYxIC0yMCA5OSAtMjAgMTM2NSAwIDEwNTIgMyAxMzExIDE0IDEzNTEgMjQgOTAgNjggMTY3CjEzNiAyMzUgNzggNzggMTUyIDExOSAyODMgMTU1IGw5NyAyOCAwIDEwMyAwIDEwNCAxMjM1IDAgMTIzNSAwIDAgLTEwM3oiLz4KPHBhdGggZD0iTTQ1NTggNDYxMCBjLTI3IC01IC03NyAtMTggLTExMiAtMzAgLTE4MCAtNjAgLTM0MSAtMjM1IC0zOTEgLTQyNQotMTkgLTc2IC0yMCAtMjQyIDAgLTMyMCAyMiAtODkgODggLTIxNSAxNTQgLTI5NyAzMyAtNDAgMjY5IC0yODIgNTI1IC01MzgKbDQ2NiAtNDY1IDQ3NSA0NzUgYzI2MiAyNjEgNDkzIDQ5OCA1MTUgNTI1IDY0IDgzIDEwNiAxNjAgMTM2IDI1MiAyNSA3NyAyOQoxMDMgMjkgMjAzIC0xIDk5IC00IDEyNiAtMjggMTk1IC03MiAyMDUgLTIzOSAzNTkgLTQ0NyA0MTEgLTk1IDI0IC0yNjEgMTUKLTM1OCAtMTkgLTg5IC0zMSAtMTg3IC04OCAtMjY2IC0xNTYgbC01OSAtNTAgLTU0IDUwIGMtMTYyIDE0NyAtMzkxIDIyMSAtNTg1CjE4OXoiLz4KPC9nPgo8L3N2Zz4K)](https://trakteer.id/d.izzy)
[![Saweria](https://img.shields.io/badge/saweria-FAAE2B?style=for-the-badge&logo=aiqfome)](https://saweria.co/zeryuu)
[![Nyawer](https://img.shields.io/badge/nyawer-D894D8?style=for-the-badge&logo=angellist)](https://nyawer.co/zeryuu)

## 🌐 Other Readme
![](https://img.shields.io/badge/Readme-English%20(Now)-blue) [![](https://img.shields.io/badge/Readme-Indonesian-blue)](https://github.com/403Code/Bot-React/blob/main/README.ID.md)

