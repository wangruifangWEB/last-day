var aggdPlugin = ChimeePlayer.popupFactory({
  name: 'time-ad',
  className: 'time-ad',
  title: false,
  body: '<em>广告示例</em><a href="https://jia.360.cn" target="_blank"><img src="https://p.ssl.qhimg.com/t018fe4570caeb23e44.png"></a>',
  offset: '0px 10px auto auto',
  operable: false
});
ChimeePlayer.install(aggdPlugin);

var player = new ChimeePlayer({
  wrapper: '.chimee-container',
  /*src: location.protocol+'//chimee.org/vod/1.mp4',*/
  src:"wohaipa.mp4",
  isLive: false,
  box:'native',
  autoplay: false,
  controls: true,
  plugin: [aggdPlugin.name]
});