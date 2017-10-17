var React = require('react');

var Carousel = require('nuka-carousel');

const App = React.createClass({
  mixins: [Carousel.ControllerMixin],

  render() {

    if (window.location.pathname == '/city/moscow/stadium/luzhniki') {
    return (
      <Carousel>
          <img src="http://img.fifa.com/mm/photo/tournament/loc/02/87/47/41/2874741_full-lnd.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://www.mk.ru/upload/entities/2017/06/28/articlesImages/image/e2/50/d0/0c/255056ab3488f137f95aeca7341ac6aa.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://b1.m24.ru/c/858772.483xp.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/moscow/stadium/otkrytiye') {
    return (
      <Carousel>
          <img src="https://www.istructe.org/getmedia/2ff444eb-68ce-4d8d-94c0-7248e9d45ad2/Otkritie-Arena-(Spartak-Stadium)-5.jpg.aspx?width=900&height=550&ext=.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://stadiumdb.com/pictures/stadiums/rus/otkritie_arena/otkritie_arena02.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://img-fotki.yandex.ru/get/6829/118032170.aa/0_15e127_5f779393_orig" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/petersbourg/stadium') {
    return (
      <Carousel>
          <img src="https://confederationscup.net/media/4e89cb13d80f4246807948909092.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://cdn1.img.ria.ru/images/149656/57/1496565752.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://confederationscup.net/media/stadiums/piter.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg/stadium') {
    return (
      <Carousel>
          <img src="http://www.e1.ru/news/images/new1/465/504/images/YHcoKtSn4YA.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://www.e1.ru/news/images/new1/470/405/images/2424.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://ru2018.org/upload/000/u1/019/3e4fae7a.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi/stadium') {
    return (
      <Carousel>
          <img src="http://ss.sport-express.ru/userfiles/materials/98/985007/large.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://architime.ru/specarch/populous/4.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://www.amic.ru/images/news/news/383926_size2.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan/stadium') {
    return (
      <Carousel>
          <img src="https://i.ytimg.com/vi/8EouwKAUyV8/maxresdefault.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://ru2018.org/upload/000/u1/019/df14ce75.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://kudago.com/media/images/place/88/0a/880a09b113c0dca754899ce3c9e7807a.JPG" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/volgograd/stadium') {
    return (
      <Carousel>
      <img src="http://vlg-media.ru/images/photos/big/bdda5ff05a171028717bedc3a103a007.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      <img src="http://images.aif.ru/011/816/b9b76ab6ff8bb8203ecad9a92d1a22bd.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      <img src="http://4-tec.ru/media/projects/1/volgogradstadium_1764848523_autox426.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/saransk/stadium') {
    return (
      <Carousel>
          <img src="https://ru2018.org/upload/000/u1/022/1cc784ac.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/Mordovia-Arena_stadium%28building%29.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://images.vfl.ru/ii/1489572212/217fc9c1/16468002.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/samara/stadium') {
    return (
      <Carousel>
          <img src="https://ru2018.org/upload/000/u1/021/af886f6e.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://st.volga.news/image/w1300/h900/max/6a215450-8b80-4b0c-8499-015ab376d0b2.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://pp.vk.me/c604419/v604419932/4a5e8/jp0P_jTpEvA.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/samara/stadium') {
    return (
      <Carousel>
          <img src="https://ru2018.org/upload/000/u1/021/af886f6e.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://st.volga.news/image/w1300/h900/max/6a215450-8b80-4b0c-8499-015ab376d0b2.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://pp.vk.me/c604419/v604419932/4a5e8/jp0P_jTpEvA.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/rostov/stadium') {
    return (
      <Carousel>
          <img src="https://i.ytimg.com/vi/B4UMRNlYkSk/maxresdefault.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://cdn1.img.rsport.ru/images/112456/67/1124566708.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://www.donnews.ru/resize/480/-/media/images/2017/10/08/1.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kaliningrad/stadium') {
    return (
      <Carousel>
          <img src="http://sportin.su/assets/gallery/42/1276.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://cdn1.img.rsport.ru/images/112366/49/1123664987.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://www.newkaliningrad.ru/upload/iblock/daa/daa2e66f9134a1b88a4a1eceb49125c1.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/novgorod/stadium') {
    return (
      <Carousel>
      <img src="https://cdn1.img.rsport.ru/images/112481/61/1124816188.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://www.niann.ru/_data/objects/0050/3540/icon.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://static.ngs.ru/news/99/preview/a78d1feee43c437a5b0f42c6adf34386070a08e4_1200.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

  }
});

module.exports = App;
