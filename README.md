# Next.jsのサンプルブログ

- 下記サイトの写経
  - https://zenn.dev/miketako3/articles/9b2b1a9ec13901


## dockerでのローカル環境 新規構築手順

```sh
docker pull node
```

### プロジェクトの新規作成

```sh
docker run --rm -it -v $PWD:/home/app -w /home/app node yarn create next-app --example blog-starter next-js-blog-example
cd next-js-blog-example
```

### dockerの実行

```sh
docker run --rm -it -v $PWD:/home/app -w /home/app -p 3000:3000 node yarn dev
```

## docker-compose

### Dockerfile更新時のビルド

```sh
docker-compose build --no-cache
```

### docker-composeの起動

```sh
docker-compose up -d
```

### docker-composeの終了

```sh
docker-compose down
```