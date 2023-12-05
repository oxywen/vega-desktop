<template>
  <div class="line-lyric flex-row" v-if="data && data.length > 0">
    <span class="icon flex-row">
      <svg
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
      >
        <path
          d="M810.666667 640V170.666667a42.666667 42.666667 0 0 0-16.213334-33.28 42.666667 42.666667 0 0 0-35.84-8.533334l-384 85.333334A42.666667 42.666667 0 0 0 341.333333 256v355.84a148.906667 148.906667 0 1 0 85.333334 135.68 186.026667 186.026667 0 0 0 0-22.186667V290.133333l298.666666-66.133333v302.506667a148.906667 148.906667 0 1 0 85.333334 135.253333 194.986667 194.986667 0 0 0 0-21.76z"
          fill="currentColor"
        ></path>
      </svg>
    </span>
    <div class="lyric-text-container">
      <div
        class="lyric-text-wrap"
        :style="{ animationName: 'scroll-wrap', animationDuration: data[index].duration + 'ms' }"
        :key="data[index].text"
      >
        <div
          class="lyric-text"
          :style="{
            animationName: 'scroll-content',
            animationDuration: data[index].duration + 'ms'
          }"
        >
          {{ data[index].text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import dayjs from 'dayjs'
interface LyricItem {
  timestamp: number
  text: string
  duration?: number
}

const index = ref(0)
const playing = ref(false)
const data = ref<LyricItem[]>([])
const timer = ref<number>()

const example = `[00:00.00] 作词 : 冥凰
[00:01.00] 作曲 : 青木月光
[00:02.00] 编曲 : 闫津
[00:15.45]日本原曲：夢と葉桜
[00:18.80]OP（原属词曲版权公司）：XING MUSIC ENTERTAINMENT.INC.
[00:21.67]原唱：初音ミク
[00:24.52]本作品经过原词曲作者以及版权公司授权
[00:25.83]出品：网易青云LAB
[00:27.83]
[00:31.08]乌篷点纱灯 岩上青石悄着新纹
[00:36.79]喃喃细雨时 归来燕子它不等人
[00:42.62]五指方扣桨 蓑衣翁正系桥下绳
[00:48.78]春雨轻敛去 绣花鞋落起唢呐声
[00:54.34]爆竹燃暗淡月弯弯
[01:00.46]锣鼓转踏醒路长长
[01:06.67]烛火晃斑驳儿时廊旁谁家白墙
[01:13.57]照湿谁家闺女脸庞
[01:18.96]
[01:19.28]摇啊摇 十五摇过春分就是外婆桥
[01:25.12]盼啊盼 阿嬷阿嬷地甜甜叫
[01:31.33]吵啊吵 米花糖挂嘴角 总是吃不饱
[01:37.37]美啊美 小脚桥上翘啊翘
[01:54.12]
[01:57.06]乌篷点纱灯 岩上青石悄着新纹
[02:02.79]喃喃细雨时 归来燕子它不等人
[02:08.79]五指方扣桨 蓑衣翁正系桥下绳
[02:15.00]春雨轻敛去 绣花鞋落起唢呐声
[02:20.40]步儿缓 踩的泪潸潸
[02:26.58]穿弄堂 望去忆满满
[02:32.74]石阶上 转身零落多少银铃啷啷
[02:39.65]收起了多少晨与晚
[02:44.54]
[02:44.76]摇啊摇 十五摇过秋分就是外婆桥
[02:51.20]乐啊乐 阿嬷阿嬷地紧紧抱
[02:57.42]跳啊跳 牛郎织女遥遥总是够不着
[03:03.60]眨啊眨 对着它们笑啊笑
[03:09.09]
[03:09.48]摇啊摇 十五摇过春分就是外婆桥
[03:15.72]盼啊盼 阿嬷阿嬷地甜甜叫
[03:21.76]吵啊吵 米花糖挂嘴角 总是吃不饱
[03:27.90]美啊美 小脚桥上翘啊翘
[03:35.42]
[03:46.90]企划：谢宇航/李喆渊
[03:48.90]推广：王智明/李喆渊
[03:50.60]制作人：王佳依
[03:53.97]监制：姚政
[04:00.02]笛子：雷墨
[04:03.18]和声：金天
[04:06.08]录音：陈程
[04:09.39]缩混：陈程
[04:13.27]网易云音乐特别企划“听，海风”
[04:18.39]
[99:00.01]本歌曲来自〖网易音乐人〗
[99:00.02]10亿现金激励，千亿流量扶持！
[99:00.03]合作：st399@vip.163.com
`
const prefix = '1970-01-01T00:'
const suffix = 'Z'
const reg = new RegExp(/[[]\d{2}[:]\d{2}[.]\d{2}]/g)
const load = (str: string) => {
  data.value = []
  index.value = 0
  const list = str.split('\n')
  list.forEach((val, i) => {
    const r = val.match(reg)
    if (r && r.length > 0) {
      let str = r[0]
      const text = val.replace(str, '')
      const time = str.replace('[', '').replace(']', '')
      const datestamp = dayjs(prefix + time + suffix).valueOf()
      if (i > 0) {
        const last = data.value[i - 1]
        last.duration = datestamp - last.timestamp
      }
      data.value.push({
        timestamp: datestamp,
        text: text
      })
    }
  })
  play()
}

const play = () => {
  const curr = data.value[index.value]
  const next = data.value[index.value + 1]
  if (next) {
    const nextTime = next.timestamp - curr.timestamp
    timer.value = setTimeout(() => {
      index.value++
      play()
    }, nextTime)
  } else {
    index.value = 0
    data.value = []
    clearTimeout(timer.value)
  }
}

load(example)
</script>

<style lang="less">
.line-lyric {
  line-height: 100%;
  height: 100%;
  width: 20rem;
  padding: 0 0.5rem;
  justify-content: left;

  .icon {
    margin-right: 0.25rem;
  }
  .lyric-text-container {
    overflow: hidden;
  }
  .lyric-text-wrap {
    width: 100%;
    animation: scroll-wrap 3s linear forwards;
  }
  .lyric-text {
    float: left;
    white-space: nowrap;
    min-width: 100%;
    animation: scroll-content 3s linear forwards;
  }
}

@keyframes scroll-wrap {
  0%,
  25% {
    transform: translateX(0);
  }
  75%,
  100% {
    transform: translateX(100%);
  }
}

@keyframes scroll-content {
  0%,
  25% {
    transform: translateX(0);
  }
  75%,
  100% {
    transform: translateX(-100%);
  }
}
</style>
