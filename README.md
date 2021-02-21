# 考核

目前只做了2k屏幕的大屏展示。

## Author

https://dog.xmu.edu.cn

## 安装依赖包

从你知道的位置拿到CustomData.js或者运行下面命令

```sh
cp src/logic/CustomData.template.js src/logic/CustomData.js
```

安装

```sh
yarn install
```

## 运行

### 开发，可修改

```sh
yarn start
```

### 正式环境，JavaScript Minified

```sh
yarn build
cd build
python -m http.server
```

## TODO

- hide Calendar vertical scrollbar

## tar

```sh
tar --exclude='./build' --exclude='./node_modules' --exclude='./.git' -zcvf ../securitycalendar.tgz .
```

## Switch CustomData and template

```sh
cp src/logic/CustomData.js src/logic/CustomData.temp.js
mv src/logic/CustomData.template.js src/logic/CustomData.js
mv src/logic/CustomData.temp.js src/logic/CustomData.template.js
```
