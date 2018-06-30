let testConfiguration = [{
  filename: './data/page.html',
  url: 'https://www.amazon.cn/gp/product-reviews/B01GYG71CS/ref=gb1h_rvw_d-3_e566_b950dd3f?pf_rd_m=A1AJ19PSB66TGU&pf_rd_t=36701&pf_rd_s=desktop-3&pf_rd_r=WVWKJQRK1QCWED2H34AX&pf_rd_i=desktop&pf_rd_p=af75130c-016e-4966-a8ef-3a0de6b8e566',
  expectedNumberOfObjects: 5,
  expectedAuthorName: '亚马逊买家',
  expectedObject: {
    rating: {
      value: 1,
      total: 5,
    },
    pubDate: new Date(Date.UTC(2016, 9, 10, 12)),
    html: '打开后，没有金属膜封口，担心油的质量不是正牌。',
    authorName: '亚马逊买家',
    authorLink: 'https://www.amazon.cn/gp/pdp/profile/AYA5Z8XEKAI74/ref=cm_cr_arp_d_pdp?ie=UTF8',
    authorLocation: 'Tōkyō',
    link: 'https://www.amazon.cn/gp/product-reviews/B01GYG71CS/ref=gb1h_rvw_d-3_e566_b950dd3f?pf_rd_m=A1AJ19PSB66TGU&pf_rd_t=36701&pf_rd_s=desktop-3&pf_rd_r=WVWKJQRK1QCWED2H34AX&pf_rd_i=desktop&pf_rd_p=af75130c-016e-4966-a8ef-3a0de6b8e566',
    linkToProductPage: 'https://www.amazon.cn/Shell-%E5%A3%B3%E7%89%8C-%E5%B0%8F%E7%81%B0%E5%A3%B3-HX8-5W-40-4L%E8%A3%85%E5%90%88%E6%88%90%E6%9C%BA%E6%B2%B9/dp/B01GYG71CS/ref=cm_cr_arp_d_product_top?ie=UTF8',
    linkToSingleReview: 'https://www.amazon.cn/gp/customer-reviews/R3TXSQDTXWPAZ9/ref=cm_cr_arp_d_rvw_ttl?ie=UTF8&ASIN=B01GYG71CS',
    subtitle: 'HX8  5W-40机油',
    title: 'Shell 壳牌 小灰壳 HX8 5W-40 4L装合成机油(亚马逊进口直采,荷兰品牌)',
    channel: 'amazon.cn',
    language: 'cn',
    country: 'China',
  },
}];

module.exports = testConfiguration;
