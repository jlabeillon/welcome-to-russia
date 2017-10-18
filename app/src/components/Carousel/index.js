var React = require('react');

var Carousel = require('nuka-carousel');

const App = React.createClass({
  mixins: [Carousel.ControllerMixin],

  render() {

    { /* Cities carousels */ }

    if (window.location.pathname == '/city/moscow') {
    return (
      <Carousel slideIndex='1'>
          <img src="https://www.accessmba.com/application/public/cache/event-moscow-620x370.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="http://russiatrek.org/blog/wp-content/uploads/2014/11/birds-eye-views-of-moscow-russia-12.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://securecdn.pymnts.com/wp-content/uploads/2016/11/moscow-russia-tech-center.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/saint-petersbourg') {
    return (
      <Carousel>
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/a4/e0/27/st-petersburg.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="https://www.voyageursdumonde.fr/vdm/imgProduits/RUS/404816.ori.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://static.promovacances.com/photos/vacances-russie/saint-petersbourg/ville_300290_pgbighd.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg') {
    return (
      <Carousel>
        <img src="http://askural.com/wp-content/uploads/2010/12/P1050466.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="https://i2.wp.com/explorerussia.org/wp-content/uploads/2016/10/Yekaterinburg-City.jpg?w=516&h=344&crop" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://budgettravelrussia.com/Technicals/images/Yekaterinburg%20city.png" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi') {
    return (
      <Carousel>
        <img src="http://img.fifa.com/mm/photo/tournament/competition/02/84/64/38/2846438_full-lnd.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="https://cdni.rt.com/files/news/22/c6/90/00/sochi-was-_the-right-choice_-tourism-and-investment-to-follow-olympic-buzz.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="https://www.sailonboard.com/wp-content/uploads/2016/06/sochi-port-800x530.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan') {
    return (
      <Carousel>
        <img src="https://s.inyourpocket.com/gallery/131443.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://www.airpano.ru/files/Kazan-Russia/images/image1.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="https://s.inyourpocket.com/gallery/117712.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/volgograd') {
    return (
      <Carousel>
        <img src="http://blog.kudoybook.com/wp-content/uploads/images/Volgograd_10272.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://russiatrek.org/blog/wp-content/uploads/2016/10/volgograd-from-above-russia-1.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="https://photos.smugmug.com/Russia/Southern-Russia/i-HLtg2B7/0/0b638d1d/XL/Russia-Astrakan-Volgograd-5-XL.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/saransk') {
    return (
      <Carousel>
        <img src="http://www.vpitravel.com/wp-vpi/wp-content/uploads/2017/08/Saransk_VPI_WCRussia2018.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="https://citiesandstadiums2018.weebly.com/uploads/2/5/7/8/25789968/473390653_orig.jpg?463" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://scd.rfi.fr/sites/filesrfi/imagecache/rfi_16x9_1024_578/sites/images.rfi.fr/files/aef_image/saransk_russie_2017_0.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/samara') {
    return (
      <Carousel>
        <img src="http://god2017.com/wp-content/uploads/2016/06/samara-10.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://img-2005-10.photosight.ru/15/1082720.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://ntt.com.ru/images/gd/samara.jpeg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/rostov') {
    return (
      <Carousel>
        <img src="https://www.airpano.ru/files/Rostov-the-Great-Russia/images/image8.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="https://media1.britannica.com/eb-media/43/144543-004-F9A41A7D.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://russiatrek.org/blog/wp-content/uploads/2017/07/rostov-on-don-from-above-russia-4.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kaliningrad') {
    return (
      <Carousel>
        <img src="http://www.worldatlas.com/r/w728-h425-c728x425/upload/53/45/e6/shutterstock-458840206.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://russiatrek.org/blog/wp-content/uploads/2016/11/kaliningrad-from-above-russia-1.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://www.airpano.ru/files/Kaliningrad-Russia/images/image1.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/nizhny-novgorod') {
    return (
      <Carousel>
        <img src="http://www.planetatalantov.ru/img/photos/photo_0259.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="http://nesiditsa.ru/wp-content/uploads/2012/07/image01717.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
        <img src="https://www.niann.ru/_data/objects/0051/4111/icon.jpg?1506436384" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    { /* Stadiums carousels */ }

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
      <Carousel slideIndex='2'>
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

    { /* Hotels carousels */ }

    if (window.location.pathname == '/city/moscow/hotels/luxury/ararat') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/110/110320187.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/110/110320144.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/110/110320108.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/110/110320221.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/moscow/hotels/luxury/regis') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/579/57914471.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/431/43145913.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/579/57914482.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/431/43146104.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/432/43268489.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/moscow/hotels/luxury/four') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/614/61426067.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/614/61426988.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/544/54474207.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/614/61426968.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

  }
});

module.exports = App;
