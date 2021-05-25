const v = new Vue({
  el: '#content',
  data:
        {
          date: new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getUTCDate() + '日',
          time: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
          news:
                [
                  {
                    src: '../resource/news1.jpg',
                    title: '药理学与毒物学进入ESI前1%!',
                    href: 'https://baidu.com',
                  },
                  {
                    src: '../resource/news2.jpg',
                    title: '科研大讨论!',
                    href: 'https://google.hk',
                  },
                  {
                    src: '../resource/news3.jpg',
                    title: '喜获优秀成果奖一等奖!',
                    href: 'https://developer.mozilla.org/zh-CN/',
                  },
                  {
                    src: '../resource/news4.jpg',
                    title: '杭州-莫干山青年学者论坛',
                    href: 'https://www.acm.org',
                  },
                ],
        },
  mounted: function() {
    this.timer = setInterval(() => {
      this.date = new Date().getFullYear() + '年' + new Date().getMonth() + '月' + new Date().getUTCDate() + '日';
      this.time = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    }, 1000);
  },
  beforeDestroy: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
});
