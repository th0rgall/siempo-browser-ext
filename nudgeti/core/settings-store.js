/* globals Store */
/* eslint-disable no-unused-vars */
var settingsStore = new Store('settings', {
  minutes: '2',
  repeat: '2',
  blacklist: [
    {id: '1', hostname: 'www.360.cn'},
    {id: '2', hostname: 'www.abcnews.go.com'},
    {id: '3', hostname: 'www.accuweather.com'},
    {id: '4', hostname: 'www.bbc.co.uk'},
    {id: '5', hostname: 'www.bloomberg.com'},
    {id: '6', hostname: 'www.cbc.ca'},
    {id: '7', hostname: 'www.cbsnews.com'},
    {id: '8', hostname: 'www.chinadaily.com.cn'},
    {id: '9', hostname: 'www.chron.com'},
    {id: '10', hostname: 'www.cnbc.com'},
    {id: '11', hostname: 'www.drudgereport.com'},
    {id: '12', hostname: 'www.dw.com'},
    {id: '13', hostname: 'www.economictimes.indiatimes.com'},
    {id: '14', hostname: 'www.forbes.com'},
    {id: '15', hostname: 'www.fortune.com'},
    {id: '16', hostname: 'www.foxnews.com'},
    {id: '17', hostname: 'www.foxnews.com'},
    {id: '18', hostname: 'www.globaltimes.cn'},
    {id: '19', hostname: 'www.hollywoodreporter.com'},
    {id: '20', hostname: 'www.huffingtonpost.com'},
    {id: '21', hostname: 'www.indianexpress.com'},
    {id: '22', hostname: 'www.indiatimes.com'},
    {id: '23', hostname: 'www.latimes.com'},
    {id: '24', hostname: 'www.money.cnn.com'},
    {id: '25', hostname: 'www.nationalgeographic.com'},
    {id: '26', hostname: 'www.naver.com'},
    {id: '27', hostname: 'www.nbcnews.com'},
    {id: '28', hostname: 'www.news.com.au'},
    {id: '29', hostname: 'www.news.yahoo.com'},
    {id: '30', hostname: 'www.newsweek.com'},
    {id: '31', hostname: 'www.nypost.com'},
    {id: '32', hostname: 'www.nytimes.com'},
    {id: '33', hostname: 'www.reuters.com'},
    {id: '34', hostname: 'www.sfgate.com'},
    {id: '35', hostname: 'www.shutterstock.com'},
    {id: '36', hostname: 'www.theatlantic.com'},
    {id: '37', hostname: 'www.thedailybeast.com'},
    {id: '38', hostname: 'www.theguardian.com'},
    {id: '39', hostname: 'www.thehill.com'},
    {id: '40', hostname: 'www.thehindu.com'},
    {id: '41', hostname: 'www.time.com'},
    {id: '42', hostname: 'www.timesofindia.indiatimes.com'},
    {id: '43', hostname: 'www.usatoday.com'},
    {id: '44', hostname: 'www.usnews.com'},
    {id: '45', hostname: 'www.variety.com'},
    {id: '46', hostname: 'www.washingtonpost.com'},
    {id: '47', hostname: 'www.weather.com'},
    {id: '48', hostname: 'www.weather.gov'},
    {id: '49', hostname: 'www.wsj.com'},
    {id: '50', hostname: 'www.wunderground.com'},
    {id: '51', hostname: 'www.accuweather.com'},
    {id: '52', hostname: 'www.alibaba.com'},
    {id: '53', hostname: 'www.aliexpress.com'},
    {id: '54', hostname: 'www.amazon.ca'},
    {id: '55', hostname: 'www.knowyourmeme.com'},
    {id: '56', hostname: 'www.amazon.co.jp'},
    {id: '57', hostname: 'www.amazon.co.uk'},
    {id: '58', hostname: 'www.amazon.com'},
    {id: '59', hostname: 'www.amazon.de'},
    {id: '60', hostname: 'www.amazon.in'},
    {id: '61', hostname: 'www.answers.yahoo.com'},
    {id: '62', hostname: 'www.apple.com'},
    {id: '63', hostname: 'www.avito.ru'},
    {id: '64', hostname: 'www.baidu.com'},
    {id: '65', hostname: 'www.bbc.co.uk'},
    {id: '66', hostname: 'www.bbc.com'},
    {id: '67', hostname: 'www.bestbuy.ca'},
    {id: '68', hostname: 'www.bet365.com'},
    {id: '69', hostname: 'www.bing.com'},
    {id: '70', hostname: 'www.blogspot.com'},
    {id: '71', hostname: 'www.bloomberg.com'},
    {id: '72', hostname: 'www.bongacams.com'},
    {id: '73', hostname: 'www.booking.com'},
    {id: '74', hostname: 'www.businessinsider.com'},
    {id: '75', hostname: 'www.buzzfeed.com'},
    {id: '76', hostname: 'www.cbc.ca'},
    {id: '77', hostname: 'www.chathamdailynews.ca'},
    {id: '78', hostname: 'www.cnn.com'},
    {id: '79', hostname: 'www.cnzz.com'},
    {id: '80', hostname: 'www.coccoc.com'},
    {id: '81', hostname: 'www.complex.com'},
    {id: '82', hostname: 'www.craigslist.ca'},
    {id: '83', hostname: 'www.craigslist.org'},
    {id: '84', hostname: 'www.ctvnews.ca'},
    {id: '85', hostname: 'www.dailymail.co.uk'},
    {id: '86', hostname: 'www.detail.tmall.com'},
    {id: '87', hostname: 'www.diply.com'},
    {id: '88', hostname: 'www.earther.com'},
    {id: '89', hostname: 'www.ebay.ca'},
    {id: '90', hostname: 'www.ebay.co.uk'},
    {id: '91', hostname: 'www.ebay.com'},
    {id: '92', hostname: 'www.economist.com'},
    {id: '93', hostname: 'www.en.wikipedia.org'},
    {id: '94', hostname: 'www.facebook.com'},
    {id: '95', hostname: 'www.fc2.com'},
    {id: '96', hostname: 'www.financialpost.com'},
    {id: '97', hostname: 'www.fivethirtyeight.com'},
    {id: '98', hostname: 'www.gizmodo.com'},
    {id: '99', hostname: 'www.globalnews.ca'},
    {id: '100', hostname: 'www.globaltv.com'},
    {id: '101', hostname: 'www.globo.com'},
    {id: '102', hostname: 'www.gmw.cn'},
    {id: '103', hostname: 'www.go2cloud.org'},
    {id: '104', hostname: 'www.google.co.id'},
    {id: '105', hostname: 'www.google.co.in'},
    {id: '106', hostname: 'www.google.co.jp'},
    {id: '107', hostname: 'www.google.co.kr'},
    {id: '108', hostname: 'www.google.co.th'},
    {id: '109', hostname: 'www.google.co.uk'},
    {id: '110', hostname: 'www.google.com.ar'},
    {id: '111', hostname: 'www.google.com.au'},
    {id: '112', hostname: 'www.google.com.br'},
    {id: '113', hostname: 'www.google.com.co'},
    {id: '114', hostname: 'www.google.com.eg'},
    {id: '115', hostname: 'www.google.com.hk'},
    {id: '116', hostname: 'www.google.com.mx'},
    {id: '117', hostname: 'www.google.com.ph'},
    {id: '118', hostname: 'www.google.com.sa'},
    {id: '119', hostname: 'www.google.com.tr'},
    {id: '120', hostname: 'www.google.com.tw'},
    {id: '121', hostname: 'www.google.com.ua'},
    {id: '122', hostname: 'www.google.com.vn'},
    {id: '123', hostname: 'www.google.de'},
    {id: '124', hostname: 'www.google.es'},
    {id: '125', hostname: 'www.google.fr'},
    {id: '126', hostname: 'www.google.it'},
    {id: '127', hostname: 'www.google.nl'},
    {id: '128', hostname: 'www.google.pl'},
    {id: '129', hostname: 'www.google.ru'},
    {id: '130', hostname: 'www.groupon.com'},
    {id: '131', hostname: 'www.hao123.com'},
    {id: '132', hostname: 'www.huffingtonpost.ca'},
    {id: '133', hostname: 'www.huffingtonpost.com'},
    {id: '134', hostname: 'www.imdb.com'},
    {id: '135', hostname: 'www.imgur.com'},
    {id: '136', hostname: 'www.instagram.com'},
    {id: '137', hostname: 'www.jd.com'},
    {id: '138', hostname: 'www.jezebel.com'},
    {id: '139', hostname: 'www.kijiji.ca'},
    {id: '140', hostname: 'www.kongregate.com'},
    {id: '141', hostname: 'www.live.com'},
    {id: '142', hostname: 'www.livejasmin.com'},
    {id: '143', hostname: 'www.mail.ru'},
    {id: '144', hostname: 'www.mashable.com'},
    {id: '145', hostname: 'www.medium.com'},
    {id: '146', hostname: 'www.mentalfloss.com'},
    {id: '147', hostname: 'www.metro.co.uk'},
    {id: '148', hostname: 'www.msn.com'},
    {id: '149', hostname: 'www.nationalpost.com'},
    {id: '150', hostname: 'www.netflix.com'},
    {id: '151', hostname: 'www.news.google.com'},
    {id: '152', hostname: 'www.news.google.com'},
    {id: '153', hostname: 'www.news.yahoo.co.jp'},
    {id: '154', hostname: 'www.newyorker.com'},
    {id: '155', hostname: 'www.nicovideo.jp'},
    {id: '156', hostname: 'www.nytimes.com'},
    {id: '157', hostname: 'www.office.com'},
    {id: '158', hostname: 'www.ok.ru'},
    {id: '159', hostname: 'www.onclckds.com'},
    {id: '160', hostname: 'www.ottawacitizen.com'},
    {id: '161', hostname: 'www.ottawasun.com'},
    {id: '162', hostname: 'www.paypal.com'},
    {id: '163', hostname: 'www.pinterest.com'},
    {id: '164', hostname: 'www.pixnet.net'},
    {id: '165', hostname: 'www.polygon.com'},
    {id: '166', hostname: 'www.popads.net'},
    {id: '167', hostname: 'www.pornhub.com'},
    {id: '168', hostname: 'www.qq.com'},
    {id: '169', hostname: 'www.quora.com'},
    {id: '170', hostname: 'www.rakuten.co.jp'},
    {id: '171', hostname: 'www.redtube.com'},
    {id: '172', hostname: 'www.samsung.com'},
    {id: '173', hostname: 'www.sina.com.cn'},
    {id: '174', hostname: 'www.sohu.com'},
    {id: '175', hostname: 'www.soso.com'},
    {id: '176', hostname: 'www.soundcloud.com'},
    {id: '177', hostname: 'www.splinternews.com'},
    {id: '178', hostname: 'www.splinternews.com'},
    {id: '179', hostname: 'www.t.co'},
    {id: '180', hostname: 'www.taobao.com'},
    {id: '181', hostname: 'www.techcrunch.com'},
    {id: '182', hostname: 'www.telegraph.co.uk'},
    {id: '183', hostname: 'www.thegadgetflow.com'},
    {id: '184', hostname: 'www.theguardian.com'},
    {id: '185', hostname: 'www.theregister.co.uk'},
    {id: '186', hostname: 'www.thestar.com'},
    {id: '187', hostname: 'www.theverge.com'},
    {id: '188', hostname: 'www.tianya.cn'},
    {id: '189', hostname: 'www.tmall.com'},
    {id: '190', hostname: 'www.torontosun.com'},
    {id: '191', hostname: 'www.tumblr.com'},
    {id: '192', hostname: 'www.tweetdeck.twitter.com'},
    {id: '193', hostname: 'www.twitch.tv'},
    {id: '194', hostname: 'www.twitter.com'},
    {id: '195', hostname: 'www.txxx.com'},
    {id: '196', hostname: 'www.uol.com.br'},
    {id: '197', hostname: 'www.upi.com'},
    {id: '198', hostname: 'www.vice.com'},
    {id: '199', hostname: 'www.vk.com'},
    {id: '200', hostname: 'www.vox.com'},
    {id: '201', hostname: 'www.walmart.com'},
    {id: '202', hostname: 'www.washingtonpost.com'},
    {id: '203', hostname: 'www.weibo.com'},
    {id: '204', hostname: 'www.whatsapp.com'},
    {id: '205', hostname: 'www.wikipedia.org'},
    {id: '206', hostname: 'www.wordpress.com'},
    {id: '207', hostname: 'www.xhamster.com'},
    {id: '208', hostname: 'www.xnxx.com'},
    {id: '209', hostname: 'www.xvideos.com'},
    {id: '210', hostname: 'www.yahoo.co.jp'},
    {id: '211', hostname: 'www.yahoo.com'},
    {id: '212', hostname: 'www.yandex.ru'},
    {id: '213', hostname: 'www.youtube.com'},
    {id: '214', hostname: 'www.zdnet.com'}
  ],
  sound: '0'
})
