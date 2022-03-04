// Vue
var app = new Vue({
    el: '#outer',
    data: {
        hitokoto: '获取中...',
        hitokoto_hitokoto: '获取中...',
        hitokoto_from_who: '获取中...',
        hitokoto_from: '获取中...',
        hitokoto_type: '获取中...',
        all_hitokoto_type: {"a":"动画","b":"漫画","c":"游戏","d":"文学","e":"原创","f":"来自网络","g":"其他","h":"影视","i":"诗词","j":"网易云","k":"哲学","l":"抖机灵"},
    },
    created () {
        fetch('https://v1.hitokoto.cn/')
            .then(response => response.json())
            .then(json => {
                this.hitokoto = json
                link.href = 'https://hitokoto.cn/?uuid=' + json.uuid
                this.hitokoto_hitokoto = json.hitokoto
                this.hitokoto_from_who = json.from_who
                this.hitokoto_from = json.from
                this.hitokoto_type = this.all_hitokoto_type[json.type]

                console.log(json)
                console.log("一言正文："+json.hitokoto + "\n\n一言作者："+json.from_who + "\n\n一言出处："+json.from + "\n\n句子长度："+json.length + "\n\n一言类型："+json.type+"（"+app.hitokoto_type+"）" + "\n\n一言标识（ID）："+json.id + "\n\n一言唯一标识（UUID）："+json.uuid + "\n\n添加者："+json.creator + "\n\n添加者用户标识（Creator UID）："+json.creator_uid + "\n\n添加时间："+json.created_at + "\n\n提交方式："+json.commit_from + "\n\n审核员标识："+json.reviewer)
            })
            //.catch(console.error)
    },
    methods: {
        getHitokoto: function () {
            fetch('https://v1.hitokoto.cn/')
                .then(response => response.json())
                .then(json => {
                    this.hitokoto = json
                    link.href = 'https://hitokoto.cn/?uuid=' + json.uuid
                    this.hitokoto_hitokoto = json.hitokoto
                    this.hitokoto_from_who = json.from_who
                    this.hitokoto_from = json.from
                    this.hitokoto_type = this.all_hitokoto_type[json.type]
                    
                    console.log(json)
                    console.log("一言正文："+json.hitokoto + "\n\n一言作者："+json.from_who + "\n\n一言出处："+json.from + "\n\n句子长度："+json.length + "\n\n一言类型："+json.type+"（"+app.hitokoto_type+"）" + "\n\n一言标识（ID）："+json.id + "\n\n一言唯一标识（UUID）："+json.uuid + "\n\n添加者："+json.creator + "\n\n添加者用户标识（Creator UID）："+json.creator_uid + "\n\n添加时间："+json.created_at + "\n\n提交方式："+json.commit_from + "\n\n审核员标识："+json.reviewer)
                })
                //.catch(console.error)
        },
    }
})

// Darkmode
function addDarkmodeWidget() {
    new Darkmode().showWidget();
    const options = {
        bottom: '75px', // default: '32px'
        right: '20px', // default: '32px'
        label: '🌓', // default: ''
        autoMatchOsTheme: false // default: true
    }
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

// APlayer
var aurl="https://cdn.jsdelivr.net/gh/CYYHH3/Music@main";
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    volume: 0.5,
    lrcType: 3,
    fixed: true,
    audio: [
        {
            name: '起风了',
            artist: '周深',
            url: aurl+'/music/起风了 — 周深/起风了.mp3',
            cover: aurl+'/music/起风了 — 周深/起风了-compressed.png',
            lrc: aurl+'/music/起风了 — 周深/起风了.lrc'
        },
        {
            name: 'Let Yourself Go',
            artist: 'Ooyy / Snake City',
            url: aurl+'/music/Let Yourself Go — Ooyy, Snake City/Let Yourself Go.mp3',
            cover: aurl+'/music/Let Yourself Go — Ooyy, Snake City/Let Yourself Go-compressed.png',
            lrc: aurl+'/music/Let Yourself Go — Ooyy, Snake City/Let Yourself Go.lrc'
        },
        {
            name: '恋のうた',
            artist: 'Yunomi / 鬼頭明里',
            url: aurl+'/music/恋のうた — Yunomi, 鬼頭明里/恋のうた.mp3',
            cover: aurl+'/music/恋のうた — Yunomi, 鬼頭明里/恋のうた-compressed.png',
            lrc: aurl+'/music/恋のうた — Yunomi, 鬼頭明里/恋のうた.lrc'
        },
        {
            name: '恋のうた (Short Version)',
            artist: 'Yunomi',
            url: aurl+'/music/恋のうた — Yunomi, 鬼頭明里/恋のうた (Short Version).mp3',
            cover: aurl+'/music/恋のうた — Yunomi, 鬼頭明里/恋のうた-compressed.png',
            lrc: aurl+'/music/恋のうた — Yunomi, 鬼頭明里/恋のうた (Short Version).lrc'
        },
        {
            name: 'only my railgun -version2020-',
            artist: 'fripSide',
            url: aurl+'/music/only my railgun -version2020- — fripSide/only my railgun -version2020-.mp3',
            cover: aurl+'/music/only my railgun -version2020- — fripSide/only my railgun -version2020- (compressed).jpg',
            lrc: aurl+'/music/only my railgun -version2020- — fripSide/only my railgun -version2020-.lrc'
        },
        {
            name: 'Lose Control',
            artist: 'Hedley',
            url: aurl+'/music/Lose Control — Hedley/Lose Control.mp3',
            cover: aurl+'/music/Lose Control — Hedley/Hello-compressed.png',
            lrc: aurl+'/music/Lose Control — Hedley/Lose Control.lrc'
        },
        {
            name: '怪可爱的',
            artist: 'YYGQ',
            url: aurl+'/music/怪可爱的 — YYGQ/怪可爱的.mp3',
            cover: aurl+'/music/怪可爱的 — YYGQ/怪可爱的.png',
            lrc: aurl+'/music/怪可爱的 — YYGQ/怪可爱的.lrc'
        },
        {
            name: 'Love and War',
            artist: 'Fleurie',
            url: aurl+'/music/Love and War — Fleurie/Love and War.mp3',
            cover: aurl+'/music/Love and War — Fleurie/Love and War-compressed.png',
            lrc: aurl+'/music/Love and War — Fleurie/Love and War.lrc'
        },
        {
            name: "Ready Let's Go",
            artist: 'DARKMINDS',
            url: aurl+'/music/Ready Lets Go — DARKMINDS/Ready Lets Go.mp3',
            cover: aurl+'/music/Ready Lets Go — DARKMINDS/Ready Lets Go-compressed.png',
            lrc: aurl+'/music/Ready Lets Go — DARKMINDS/Ready Lets Go.lrc'
        },
        {
            name: "Dimples",
            artist: 'oomiee',
            url: aurl+'/music/Dimples — oomiee/Dimples.mp3',
            cover: aurl+'/music/Dimples — oomiee/Dimples-compressed.jpg',
            lrc: aurl+'/music/Dimples — oomiee/Dimples.lrc',
        }
    ]
});
ap.lrc.hide()