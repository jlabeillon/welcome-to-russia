const React = require('react');

const Carousel = require('nuka-carousel');

const App = React.createClass({
  mixins: [Carousel.ControllerMixin],

  render() {

    { /* Cities carousels */ }

    if (window.location.pathname == '/city/moscow') {
    return (
      <Carousel slideIndex={1}>
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
      <Carousel slideIndex={1}>
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
      <Carousel slideIndex={2}>
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

    if (window.location.pathname == '/city/moscow/hotels/authentic/tchaikovsky') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/110/110255644.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/110/110255663.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/109/109866143.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/109/109868393.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/109/109865697.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/moscow/hotels/authentic/radisson') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/273/27344996.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/202/20217130.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/202/20219376.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/794/79443857.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/202/20219342.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/moscow/hotels/authentic/ivan') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/105/105971628.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/962/96227420.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/102/102366245.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/102/102033589.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/962/96227161.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/moscow/hotels/eco/novinsky') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/330/33011516.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/330/33011416.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/684/6846333.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/684/6846646.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/moscow/hotels/eco/cosmos') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/102/102645666.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/102/102645704.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/653/65352192.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/143/14394103.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/102/102648220.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/moscow/hotels/eco/izmailovo') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/657/65783336.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/655/65554516.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/655/65554563.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/659/65931295.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/811/81177986.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/petersbourg/hotels/luxury/four') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/995/99549698.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/995/99548578.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/995/99549709.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/116/116317577.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/995/99549745.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/petersbourg/hotels/luxury/lotte') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/111/111599304.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/111/111600513.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/104/104522476.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/111/111574026.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/111/111603044.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/petersbourg/hotels/luxury/belmond') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/679/67926418.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/903/90374555.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/328/32872864.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/714/71408012.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/903/90374313.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/petersbourg/hotels/authentic/pushka') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/915/91567156.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/915/91567158.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/915/91567159.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/101/10160847.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/915/91566022.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/petersbourg/hotels/authentic/ekaterina') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/534/53489671.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/534/53489657.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/534/53489666.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/624/62416640.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/624/62416038.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/petersbourg/hotels/authentic/hermitage') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/111/111239661.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/111/111239187.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/111/111232764.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/207/20777490.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/209/20954791.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/petersbourg/hotels/eco/piter') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/520/52051416.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/641/64156854.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/641/64156872.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/petersbourg/hotels/eco/capital') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/618/61889624.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/618/61887553.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/121/12195547.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/petersbourg/hotels/eco/gora') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/794/79415544.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/113/113437677.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/794/79414874.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg/hotels/luxury/hyatt') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/103/103884283.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/103/103884323.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/103/103884291.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg/hotels/luxury/vysotsky') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/270/27074371.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/272/27253401.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/272/27250339.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg/hotels/luxury/ramada') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/799/79974443.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/799/79974582.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/802/80288684.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg/hotels/authentic/red') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/937/93726351.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/937/93727718.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/937/93727635.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg/hotels/authentic/chekhov') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/770/77060928.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/109/109403283.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/109/109403509.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg/hotels/authentic/renomme') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/110/110103108.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/110/110103083.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/109/109403509.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg/hotels/eco/bolshoy') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/116/116094130.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/116/116650757.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/851/85133329.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg/hotels/eco/ural') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/116/116092287.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/116/116092225.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/962/96294595.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/yekaterinburg/hotels/eco/lhouse') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/392/39282986.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/392/39254663.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/392/39255024.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi/hotels/luxury/pullman') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/293/29312552.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/293/29312544.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/933/93319567.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi/hotels/luxury/hyatt') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/113/113609189.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/113/113609163.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/113/113609173.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi/hotels/luxury/rodina') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/333/33321034.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/325/32566813.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/333/33320986.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi/hotels/authentic/anna') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/100/10039574.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/100/10051898.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/643/6433918.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi/hotels/authentic/chebotarev') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/282/28281605.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/100/100396685.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/282/28281190.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi/hotels/authentic/tsvetnoy') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/109/109205992.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/111/111025098.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/109/109214501.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi/hotels/eco/victor') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/333/33383232.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/333/33386739.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/333/33387943.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi/hotels/eco/prima') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/951/95182502.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/953/95305923.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/953/95305741.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/sochi/hotels/eco/marika') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/487/48719599.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/487/48719529.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/487/48720017.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan/hotels/luxury/hilton') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/754/75487003.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/754/75486650.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/754/75485901.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan/hotels/luxury/shalyapin') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/625/62599482.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/197/19795547.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/625/62599481.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan/hotels/luxury/luciano') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/623/6239833.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/621/6218757.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/621/6219964.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan/hotels/authentic/kikhot') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/109/109278156.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/109/109278460.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/110/110633067.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan/hotels/authentic/sapozhok') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/652/65248492.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/601/60113993.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/601/60114058.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan/hotels/authentic/tatarskaya') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/637/63734672.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/599/59947604.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/599/59947410.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan/hotels/eco/moskovskaya') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/408/40830304.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/408/40830131.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/385/38554268.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan/hotels/eco/kamala') {
    return (
      <Carousel>
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/708/70811369.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/665/66543002.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://t-ec.bstatic.com/images/hotel/max1024x768/645/64503344.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }

    if (window.location.pathname == '/city/kazan/hotels/eco/gvardeiskaya') {
    return (
      <Carousel>
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/162/16277305.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/103/103618621.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
          <img src="https://s-ec.bstatic.com/images/hotel/max1024x768/162/16277324.jpg" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
      </Carousel>
      )
    }
  }
});

module.exports = App;
