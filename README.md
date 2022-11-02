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


## FirebaseとGitHubの準備

### Firebaseのプロジェクト作成

- 新たにFirebaseのプロジェクトを作成
- Firebase Hostingを使えるようにしておく


### GitHubリポジトリの作成

- GitHubリポジトリを作成してpush


## Firebase Hostingへの手動デプロイ

### Dockerコンテナ内に入る

```sh
docker-compose exec app bash
```

### ビルド

```sh
yarn build
```

### Firebaseログイン

```sh
firebase login
```

### Firebaseの初期設定

- 最初だけ

```sh
firebase init
```

> ? Which Firebase features do you want to set up for this directory? Press Space to select
features, then Enter to confirm your choices.
> → ○ Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

> ? Please select an option
> → Use an existing project

> ? Select a default Firebase project for this directory
> → 予め作成しておいたFirebaseプロジェクトを選択

> ? What do you want to use as your public directory?
> → out

> ? Configure as a single-page app (rewrite all urls to /index.html)?
> No

> ? Set up automatic builds and deploys with GitHub?
> Yes

> ? File out/404.html already exists. Overwrite?
> No

> ? File out/index.html already exists. Overwrite?
> No

> ? For which GitHub repository would you like to set up a GitHub workflow?
> → ${自分のGithubアカウント名}/${リポジトリ名}

> ? Set up the workflow to run a build script before every deploy?
> → Yes

> ? What script should be run before every deploy?
> → yarn install --immutable --immutable-cache --check-cache && yarn build

> Set up automatic deployment to your site's live channel when a PR is merged?
> → Yes

> ? What is the name of the GitHub branch associated with your site's live channel?
> main

### Firebase手動デプロイ

```sh
firebase deploy
```


# カスタマイズ


## zenn-editorのインストール

- docker-compose起動後に実行
```sh
docker-compose exec app yarn add zenn-markdown-html zenn-content-css zenn-embed-elements
```

