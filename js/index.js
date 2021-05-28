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
                if (json.type=="a"){
                    this.hitokoto_type = this.all_hitokoto_type.a
                }
                else if (json.type=="b"){
                    this.hitokoto_type = this.all_hitokoto_type.b
                }
                else if (json.type=="c"){
                    this.hitokoto_type = this.all_hitokoto_type.c
                }
                else if (json.type=="d"){
                    this.hitokoto_type = this.all_hitokoto_type.d
                }
                else if (json.type=="e"){
                    this.hitokoto_type = this.all_hitokoto_type.e
                }
                else if (json.type=="f"){
                    this.hitokoto_type = this.all_hitokoto_type.f
                }
                else if (json.type=="g"){
                    this.hitokoto_type = this.all_hitokoto_type.g
                }
                else if (json.type=="h"){
                    this.hitokoto_type = this.all_hitokoto_type.h
                }
                else if (json.type=="i"){
                    this.hitokoto_type = this.all_hitokoto_type.i
                }
                else if (json.type=="j"){
                    this.hitokoto_type = this.all_hitokoto_type.j
                }
                else if (json.type=="k"){
                    this.hitokoto_type = this.all_hitokoto_type.k
                }
                else if (json.type=="l"){
                    this.hitokoto_type = this.all_hitokoto_type.l
                }
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
                    if (json.type=="a"){
                        this.hitokoto_type = this.all_hitokoto_type.a
                    }
                    else if (json.type=="b"){
                        this.hitokoto_type = this.all_hitokoto_type.b
                    }
                    else if (json.type=="c"){
                        this.hitokoto_type = this.all_hitokoto_type.c
                    }
                    else if (json.type=="d"){
                        this.hitokoto_type = this.all_hitokoto_type.d
                    }
                    else if (json.type=="e"){
                        this.hitokoto_type = this.all_hitokoto_type.e
                    }
                    else if (json.type=="f"){
                        this.hitokoto_type = this.all_hitokoto_type.f
                    }
                    else if (json.type=="g"){
                        this.hitokoto_type = this.all_hitokoto_type.g
                    }
                    else if (json.type=="h"){
                        this.hitokoto_type = this.all_hitokoto_type.h
                    }
                    else if (json.type=="i"){
                        this.hitokoto_type = this.all_hitokoto_type.i
                    }
                    else if (json.type=="j"){
                        this.hitokoto_type = this.all_hitokoto_type.j
                    }
                    else if (json.type=="k"){
                        this.hitokoto_type = this.all_hitokoto_type.k
                    }
                    else if (json.type=="l"){
                        this.hitokoto_type = this.all_hitokoto_type.l
                    }
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
    }
    const darkmode = new Darkmode(options);
    darkmode.showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

// APlayer
var url="https://cdn.jsdelivr.net/gh/CYYHH3/Music@main";
const ap = new APlayer({
    container: document.getElementById('aplayer'),
    volume: 0.5,
    lrcType: 3,
    audio: [
        {
            name: '起风了',
            artist: '周深',
            url: url+'/music/起风了/起风了.mp3',
            cover: url+'/music/起风了/起风了.png',
            lrc: url+'/music/起风了/起风了.lrc'
        },
        {
            name: 'Let Yourself Go',
            artist: 'Ooyy / Snake City',
            url: url+'/music/Let Yourself Go/Let Yourself Go.mp3',
            cover: url+'/music/Let Yourself Go/Let Yourself Go.png',
            lrc: url+'/music/Let Yourself Go/Let Yourself Go.lrc'
        },
        {
            name: '恋のうた',
            artist: 'Yunomi / 鬼頭明里',
            url: url+'/music/恋のうた/恋のうた.mp3',
            cover: url+'/music/恋のうた/恋のうた.png',
            lrc: url+'/music/恋のうた/恋のうた.lrc'
        },
        {
            name: '恋のうた (Short Version)',
            artist: 'Yunomi',
            url: url+'/music/恋のうた/恋のうた (Short Version).mp3',
            cover: url+'/music/恋のうた/恋のうた.png',
            lrc: url+'/music/恋のうた/恋のうた (Short Version).lrc'
        },
        {
            name: 'Lose Control',
            artist: 'Hedley',
            url: url+'/music/Lose Control/Lose Control.mp3',
            cover: url+'/music/Lose Control/Hello.png',
            lrc: url+'/music/Lose Control/Lose Control.lrc'
        },
        {
            name: '怪可爱的',
            artist: 'YYGQ',
            url: url+'/music/怪可爱的/怪可爱的.mp3',
            cover: url+'/music/怪可爱的/怪可爱的.png',
            lrc: url+'/music/怪可爱的/怪可爱的.lrc'
        },
        {
            name: 'Love and War',
            artist: 'Fleurie',
            url: url+'/music/Love and War/Love and War.mp3',
            cover: url+'/music/Love and War/Love and War.png',
            lrc: url+'/music/Love and War/Love and War.lrc'
        },
        {
            name: "Ready Let's Go",
            artist: 'DARKMINDS',
            url: url+'/music/Ready Lets Go/Ready Lets Go.mp3',
            cover: url+'/music/Ready Lets Go/Ready Lets Go.png',
            lrc: url+'/music/Ready Lets Go/Ready Lets Go.lrc'
        },
        {
            name: "Dimples",
            artist: 'oomiee',
            url: url+'/music/Dimples/Dimples.mp3',
            cover: url+'/music/Dimples/Dimples.png',
            lrc: url+'/music/Dimples/Dimples.lrc',
        }
    ]
});
ap.lrc.hide()
