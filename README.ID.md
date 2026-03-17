<p align="center">
 <img src="https://raw.githubusercontent.com/403Code/403Code/main/picture/fb-bot-react.gif" width="500">
</p>
<h4 align="center">
 <img src="https://raw.githubusercontent.com/403Code/403Code/main/picture/bot-react.png">
  Otomatisasi Bot Reaksi Facebook dengan Google Script
</h4>
<div align="center">
  <a href="https://github.com/403Code">
    <img alt="Commit Terakhir" src="https://img.shields.io/github/last-commit/403Code/Bot-React.svg"/>
  </a>
  <a href="https://github.com/403Code">
    <img alt="Jumlah Bahasa" src="https://img.shields.io/github/languages/count/403Code/Bot-React.svg"/>
  </a>
  <a href="https://github.com/403Code">
    <img alt="Bahasa Utama" src="https://img.shields.io/github/languages/top/403Code/Bot-React.svg"/>
  </a>
  <a href="https://github.com/403Code">
    <img alt="Ukuran Repository" src="https://img.shields.io/github/repo-size/403Code/Bot-React.svg"/>
  </a>
  <a href="https://github.com/403Code">
    <img alt="Bintang" src="https://img.shields.io/github/stars/403Code/Bot-React.svg"/>
  </a>
  <a href="https://github.com/403Code">
    <img alt="Fork" src="https://img.shields.io/github/forks/403Code/Bot-React.svg"/>
  </a>
</div>
<p align="center">
  Dibuat dengan ❤️ oleh <a href="https://github.com/403Code">Nanta</a>
</p>

---

## 🔎 Fitur
* Memberikan reaksi ke postingan dengan banyak jenis reaksi
* Mengganti cookie dari Pastebin atau sumber raw/plain text lainnya
* Opsi auto-follow (aktif/nonaktif)
* 🌐 Lebih stabil dengan menggunakan `www.facebook.com`
* 🔔 ![new](https://raw.githubusercontent.com/403Code/403Code/main/picture/new.gif) Integrasi Discord Webhook untuk log aktivitas

---

## 🤔 Cara Penggunaan

Pergi ke bagian kode berikut:

```javascript
const config = {
  cookie: "xxx",
  reactType: [1,16,2,3],
  webhookUrl: "xxx",
};
```

### 🚶‍♂️ Langkah-langkah:

- Ganti `"xxx"` pada **cookie** dengan cookie Facebook milikmu  
  Contoh:
  ```javascript
  cookie: "sb=xxxxxx;datr=xxxxxxxxx;c_user=xxxxxxxx",
  ```
  (jangan hapus tanda kutip)

  Atau gunakan link raw:
  ```javascript
  cookie: "https://pastebin.com/raw/xxxxxxxx",
  ```

- Atur **reactType** berdasarkan tabel di bawah  
  Contoh:
  ```javascript
  reactType: [1,16,2,3],
  ```
  Ini akan memberikan reaksi LIKE, CARE, LOVE, dan WOW secara acak  

  Untuk satu jenis reaksi:
  ```javascript
  reactType: [1],
  ```

- Atur **webhookUrl** dengan URL webhook Discord milikmu  
  Contoh:
  ```javascript
  webhookUrl: "https://discord.com/api/webhooks/xxxx",
  ```
  Ini akan mengirimkan log aktivitas ke server Discord kamu  

---

## 📑 Tabel Reaksi

| Nama Reaksi | ID Reaksi | Emoji |
|-------------|-----------|-------|
| SUKA        | 1         | 👍 |
| SUPER       | 2         | ❤ |
| WOW         | 3         | 😮 |
| HAHA        | 4         | 😆 |
| SEDIH       | 7         | 😢 |
| MARAH       | 8         | 😡 |
| PEDULI      | 16        | 🤗 |

---

## 📲 Kontak
[![Facebook](https://img.shields.io/badge/facebook-0866FF?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/dementorize)
[![Telegram](https://img.shields.io/badge/telegram-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/Rizemary)
[![Instagram](https://img.shields.io/badge/instagram-FF0069?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/dementorize)

---

## 💰 Dukung Saya
[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/zonenathan)
[![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/Rizemary)
[![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/zonenathan)
[![Trakteer](https://img.shields.io/badge/trakteer-BE1E2D?style=for-the-badge)](https://trakteer.id/d.izzy)
[![Saweria](https://img.shields.io/badge/saweria-FAAE2B?style=for-the-badge)](https://saweria.co/zeryuu)
[![Nyawer](https://img.shields.io/badge/nyawer-D894D8?style=for-the-badge)](https://nyawer.co/zeryuu)

---

## 🌐 Readme Lainnya
![](https://img.shields.io/badge/Readme-English-blue) [![](https://img.shields.io/badge/Readme-Indonesian%20(Sekarang)-blue)](https://github.com/403Code/Bot-React/blob/main/README.ID.md)
