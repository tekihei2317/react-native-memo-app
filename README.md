# react-native-memo-app

メモアプリです。React Native + tRPC + Express + Prismaの構成の検証で作りました。

## 環境構築

```bash
pnpm install
docker compose up -d

# APIの起動
cd backend
pnpm run dev

# モバイルの起動（別のシェルを使う）
cd mobile-app
pnpm run start
```

## 参考

- [基礎から学ぶReact Native入門](https://www.amazon.co.jp/dp/B08WCK35NR/)
- [t3-oss/create-t3-turbo](https://github.com/t3-oss/create-t3-turbo)
