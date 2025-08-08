# `https://act.22dm.com`资源备份

此仓库用于 2023 年起`https://act.22dm.com`网站（羊羊活动和游戏网站）的资源备份。自羊羊 18 周年起至今（2025 年 8 月），该网站的架构（推断）为使用 Vue，通过 Vue-Router 进行路由管理，并最后进行代码压缩混淆。即，所有新的活动和游戏都在同一个项目中，显著区别于以往的单独项目，故建立新的仓库存储。（目前[XYY-huijiwiki](https://github.com/XYY-huijiwiki)有多个名称和内容与此仓库相似的仓库，待未来整理）

由于每次更新都会进行代码压缩混淆，网站源代码的任何微小改动都会导致所有最终生成的代码发生巨大变化，使得制作离线版本的网站变得不切实际（除非未来网站停止更新）。因此，本仓库只是单纯存储网站原始资源文件，这些文件无法被直接部署为网站。

## 进度

- [x] drift-bottle
  - [x] file-upload
- [x] 18th-h5
- [x] wish
  - [x] wish-v1
- [x] wolfsburg
- [x] cicf
- [x] diy
  - [x] diy-v1
- [x] 2023
- [x] bottle2
  - [x] bottle2-v1
- [x] bubble（缺几张`bigbabol`的 gif 图）
- [x] bubble-v2（缺几张`bigbabol`的 gif 图）
- [x] 525
- [x] 705
- [x] 708
- [x] 0109
  - [x] 0109-ball
  - [x] 0109-key
  - [x] 0109-vvv
- [x] 202507
  - [x] 202507-vvv
- [x] 20250726（活动进行中，可能需要更新）
- [x] movie（活动进行中，可能需要更新）

## 资源历史

已知的同路径同名文件变更记录于此。

历史

| 旧                                                                                                                                               | 新                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![role-1.old.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/icon/role-1.old.png)<br/>**role-1.old.png**                      | ![role-1.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/icon/role-1.png)<br/>**role-1.png**                      |
| ![game-tips-1.old.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/background/game-tips-1.old.png)<br/>**game-tips-1.old.png** | ![game-tips-1.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/background/game-tips-1.png)<br/>**game-tips-1.png** |
| ![game-tips-2.old.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/background/game-tips-2.old.png)<br/>**game-tips-2.old.png** | ![game-tips-2.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/background/game-tips-2.png)<br/>**game-tips-2.png** |
| ![game-tips-3.old.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/background/game-tips-3.old.png)<br/>**game-tips-3.old.png** | ![game-tips-3.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/background/game-tips-3.png)<br/>**game-tips-3.png** |
| ![game-tips-4.old.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/background/game-tips-4.old.png)<br/>**game-tips-4.old.png** | ![game-tips-4.png](./cpe-oss-h5.oss-cn-shenzhen.aliyuncs.com/h5/202507/vvv/image/background/game-tips-4.png)<br/>**game-tips-4.png** |

## API 历史

<details>

<summary>Tips for collapsed sections</summary>

### `init`

```bash
curl 'http://ixyy.22dm.com/cgame/init?activityKey=202507' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Accept-Language: de-DE,de;q=0.9,en-GB;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5' \
  -H 'Cache-Control: no-cache' \
  -H 'DNT: 1' \
  -H 'Origin: http://127.0.0.1:5500' \
  -H 'Pragma: no-cache' \
  -H 'Proxy-Connection: keep-alive' \
  -H 'Referer: http://127.0.0.1:5500/' \
  -H 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/138.0.0.0' \
  --insecure
```

#### 2025 年 7 月 5 日 22:00

```json
{
  "code": 0,
  "msg": "Success",
  "data": {
    "k": "197db0ed0115c215e48",
    "playerCount": 0,
    "playCount": 0,
    "extra": {
      "maxLevel": 6,
      "everyLevelScore": 3000,
      "showRank": 0,
      "skin": [1, 1, 1, 1, 1, 1],
      "levelScore": [3, 4, 5, 5, 5, 5],
      "skinTitle": ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
      "puzzleImgList": ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
      "everyTimeScore": 50,
      "puzzleIdList": [3, 4],
      "everyFindScore": 200,
      "speedFly": 350,
      "levelTime": [60, 60, 60, 60, 60, 60],
      "whiteList": ["ofN_u6nBbWm3k8KmgyWetjEKIGaE"],
      "levetTips": [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 4],
        [4, 1],
        [2, 3]
      ]
    },
    "playerCountToday": 0,
    "playCountToday": 0
  }
}
```

#### 2025 年 7 月 6 日 19:30

```json
{
  "code": 0,
  "msg": "Success",
  "data": {
    "k": "197df7e3a08f6b18f26",
    "playerCount": 0,
    "playCount": 0,
    "extra": {
      "maxLevel": 7,
      "everyLevelScore": 3000,
      "showRank": 0,
      "skin": [1, 1, 1, 1, 1, 1, 1],
      "levelScore": [3, 4, 5, 5, 5, 5, 5],
      "skinTitle": ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
      "puzzleImgList": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5-0706.jpg",
        "6-0706.jpg"
      ],
      "everyTimeScore": 50,
      "puzzleIdList": [5, 6],
      "everyFindScore": 200,
      "speedFly": 350,
      "levelTime": [60, 60, 60, 60, 60, 60, 60],
      "whiteList": ["ofN_u6nBbWm3k8KmgyWetjEKIGaE"],
      "levetTips": [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 4],
        [4, 1],
        [2, 3],
        [2, 3]
      ]
    },
    "playerCountToday": 0,
    "playCountToday": 0
  }
}
```

#### 2025 年 7 月 8 日 22:30

```json
{
  "code": 0,
  "msg": "Success",
  "data": {
    "k": "197ea7013822cd53f83",
    "playerCount": 0,
    "playCount": 0,
    "extra": {
      "maxLevel": 7,
      "everyLevelScore": 3000,
      "showRank": 0,
      "skin": [1, 1, 1, 1, 1, 1, 1, 2, 2],
      "levelScore": [3, 4, 5, 5, 5, 5, 5, 6, 6],
      "skinTitle": ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
      "puzzleImgList": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5-0706.jpg",
        "6-0706.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg"
      ],
      "everyTimeScore": 50,
      "puzzleIdList": [9, 10],
      "everyFindScore": 200,
      "speedFly": 350,
      "levelTime": [60, 60, 60, 60, 60, 60, 60, 60, 50],
      "whiteList": ["ofN_u6nBbWm3k8KmgyWetjEKIGaE"],
      "levetTips": [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 4],
        [4, 1],
        [2, 3],
        [2, 3],
        [3, 3],
        [3, 3]
      ]
    },
    "playerCountToday": 0,
    "playCountToday": 0
  }
}
```

#### 2025 年 7 月 9 日 23:30

```json
{
  "code": 0,
  "msg": "Success",
  "data": {
    "k": "197efcda99f1841b756",
    "playerCount": 0,
    "playCount": 0,
    "extra": {
      "maxLevel": 10,
      "everyLevelScore": 3000,
      "showRank": 0,
      "skin": [1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
      "levelScore": [3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6],
      "skinTitle": ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
      "puzzleImgList": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5-0706.jpg",
        "6-0706.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg"
      ],
      "everyTimeScore": 50,
      "puzzleIdList": [11, 12],
      "everyFindScore": 200,
      "speedFly": 350,
      "levelTime": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
      "whiteList": [],
      "levetTips": [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 4],
        [4, 1],
        [2, 3],
        [2, 3],
        [3, 3],
        [3, 3],
        [2, 4],
        [3, 3],
        [3, 3],
        [3, 3],
        [3, 3],
        [3, 3]
      ],
      "giftTime": 15
    },
    "playerCountToday": 0,
    "playCountToday": 0
  }
}
```

#### 2025 年 7 月 20 日 12:00

```json
{
  "code": 0,
  "msg": "Success",
  "data": {
    "k": "19826033e40c0a94276",
    "playerCount": 0,
    "playCount": 0,
    "extra": {
      "maxLevel": 15,
      "everyLevelScore": 3000,
      "showRank": 1,
      "skin": [1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
      "levelScore": [3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6],
      "skinTitle": ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
      "puzzleImgList": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5-0706.jpg",
        "6-0706.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg"
      ],
      "everyTimeScore": 50,
      "puzzleIdList": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      "everyFindScore": 200,
      "speedFly": 350,
      "levelTime": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
      "whiteList": [],
      "levetTips": [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 4],
        [4, 1],
        [2, 3],
        [2, 3],
        [3, 3],
        [3, 3],
        [2, 4],
        [3, 3],
        [3, 3],
        [3, 3],
        [3, 3],
        [3, 3]
      ],
      "giftTime": 15
    },
    "playerCountToday": 0,
    "playCountToday": 0
  }
}
```

#### 2025 年 8 月 6 日 22:00

```json
{
  "code": 0,
  "msg": "Success",
  "data": {
    "k": "1987fb1cca59be6dfb4",
    "playerCount": 0,
    "playCount": 0,
    "extra": {
      "maxLevel": 15,
      "everyLevelScore": 3000,
      "showRank": 1,
      "skin": [1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
      "levelScore": [3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6],
      "skinTitle": ["布拉拉国", "蓝星世界", "花花树世界", "绘本世界"],
      "puzzleImgList": [
        "1.jpg",
        "2.jpg",
        "3.jpg",
        "4.jpg",
        "5-0706.jpg",
        "6-0706.jpg",
        "7.jpg",
        "8.jpg",
        "9.jpg",
        "10.jpg",
        "11.jpg",
        "12.jpg",
        "13.jpg",
        "14.jpg",
        "15.jpg",
        "16.jpg",
        "17.jpg",
        "18.jpg",
        "19.jpg",
        "20.jpg",
        "21.jpg",
        "22.jpg",
        "23.jpg",
        "24.jpg",
        "25.jpg",
        "26.jpg"
      ],
      "everyTimeScore": 50,
      "puzzleIdList": [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
      "everyFindScore": 200,
      "speedFly": 350,
      "levelTime": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
      "whiteList": [],
      "levetTips": [
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 4],
        [4, 1],
        [2, 3],
        [2, 3],
        [3, 3],
        [3, 3],
        [2, 4],
        [3, 3],
        [3, 3],
        [3, 3],
        [3, 3],
        [3, 3]
      ],
      "giftTime": 15
    },
    "playerCountToday": 0,
    "playCountToday": 0
  }
}
```

</details>

## Lottie 动画

以下文件为 Lottie 动画文件，可以在[这个网站](https://openlottiepreviewer.com)上预览动画效果。

- [705/image/tutu.json](./cpe-app-oss.oss-cn-shenzhen.aliyuncs.com/h5/705/image/tutu.json)
- [0109-ball/image/tutu.json](./cpe-app-oss.oss-cn-shenzhen.aliyuncs.com/h5/0109-ball/image/tutu.json)

## 文件获取方法

### 打开开发者模式

1. 在非浏览器环境下（避免自动跳转微信页面）获取`https://act.22dm.com/index.html`文件。
2. 找到形如`<script type="module" crossorigin src="/assets/index-ee9247d9.js"></script>`的一行代码，其中`ee9247d9`为哈希值，每次网站更新后都会改变。
3. 在浏览器中打开`https://act.22dm.com/assets/index-ee9247d9.js`（根据第二步获得的哈希值修改网址）。
4. 按 F12 打开开发者工具，切换到“网络”选项卡。
5. 刷新页面，回到开发者工具找到`index-ee9247d9.js`文件，右键点击并选择“替代内容”。
6. 在代码编辑器中搜索`localhost`，替换为`act.22dm.com`，然后保存（按 Ctrl+S）。
7. 现在进入任何活动或游戏页面均为开发者模式，不会跳转微信页面。每次网站更新后需要重复全部步骤。

### 获取资源文件

1. 复制一个活动或游戏的网址，在浏览器中新建标签页，按 F12 打开开发者工具，后在浏览器地址栏粘贴网址并回车进入该活动或游戏页面。
2. <del>在开发者工具的“网络”选项卡中，找到所有类似`assets/index-57fc7dff.js`的内容（`index`可能为不同名字，`57fc7dff`一定是 8 个字母或数字，`.js`和`.css`都需要），下载到`/act.22dm.com/assets`文件夹里（或放在不同文件夹里，处理完毕后再合并）。重名文件内容一定相同（理论上可能不同，实际上不考虑这种情况），只需保留一个即可。</del>（已实现自动化）
3. <del>对于所有获得的`.css`文件，以`assets/index-f3908863.css`为例，运行以下命令（Linux 系统一般可以直接运行，Windows 系统见下文备注），即可下载绝大部分资源文件。</del>（已实现自动化）

```bash
wget --no-check-certificate -e robots=off -r -l inf -k -p -E -nc -N -H -P . https://act.22dm.com/assets/index-f3908863.css
```

4. 其他文件主要是音频文件和奖励图片（如抽奖获得的剧照）。
   1. 在开发者模式下进行游戏。在开发者工具的“网络”选项卡中，一般背景音乐会直接显示在文件列表中，右键点击并选择“在新标签页中打开”即可下载。在当前游戏页面中出现的 js 文件中，搜索`.mp3`，找到所有音频文件的文件名，一般所有音频都在同一个目录下，可以根据背景音乐的网址推测出其他音频的网址，逐个下载。
   2. 奖励图片一般命名特别规律，比如`1.jpg`、`2.jpg`等。在开发者工具的“网络”选项卡中，只要找到任何一张奖励图片，即可推测出其他奖励图片的网址，逐个下载；在当前游戏页面中出现的 js 文件中，搜索`.jpg`和`.png`，找到所有特殊命名的奖励图片文件名，根据前面其他奖励图片的网址推测出这些特别命名的奖励图片的网址，逐个下载；在开发者工具的“网络”选项卡中，找到所有来自`ixyy.22dm.com`的 json 文件，阅读内容，推测出奖励图片的网址，逐个下载。
5. 不得不假设过往的活动和游戏不再有任何更新，否则工作量太大，根本无法完成网站的内容备份。

### Windows 系统使用 wget 的备注

1. 在[这个网站](https://eternallybored.org/misc/wget/)下载对应版本的 exe 文件，命名为`wget.exe`。建议将该 exe 文件放在一个空文件夹下，以防下载文件时发生冲突。
2. 在文件管理器中打开 exe 文件所在的文件夹，按住 Shift 键并右键点击空白处，选择“在此处打开 PowerShell 窗口”或“在此处打开命令窗口”。在此处运行上述 wget 命令即可，文件会下载到当前文件夹下。

### 相关正则表达式

可以用于查找的正则表达式。

- JS 和 CSS 文件：`assets/[^'"]-[0-9a-z]{8}\.(js|css)`
- 图片/音频/视频文件：`\.(png|jpg|jpeg|bmp|mp3|mp4|wav|gif|webp|svg)`

## 待办

- [ ] 整理 API 历史，添加更多 API 记录。
- [ ] 整理`/old`文件夹内的内容（为早期备份的微信小程序素材）
