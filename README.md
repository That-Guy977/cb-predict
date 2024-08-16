# cb-predict

## การโหลด

```sh
git clone https://github.com/that-guy977/cb-predict.git
cd cb-predict
```

## การติดตั้ง

```sh
cd client
npm i
cd ../server
npm i
```

## การใช้งาน

### แอพพลิเคชั่น

```sh
cd client
npm start
```
- Android: ใช้แอป Expo Go สแกน QR
- iOS: ใช้แอปกล้องสแกน QR จะไปเปิดในแอป Expo Go
ก๊อป IP ที่ให้ (`Metro waiting on exp://x.x.x.x:8081`) ไปใส่ [`getCapeValues`](./client/App.js) (`fetch("http://x.x.x.x:3000/cape")`)

### เซอร์เวอร์
```sh
cd server
node .
```
เปิดเว็บไซต์ http://localhost:3000 เพื่อตั้งค่า

