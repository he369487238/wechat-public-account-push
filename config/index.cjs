/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxbc31c7ab827189e8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f5dc0163165827034d9072dc04c4f912',


  PROVINCE: '广东',
  CITY: '湛江',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o82II6ii-avYFDpiJHRQ2QHEPNZM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'AqjrjkKHUw20WPw_5-bN_9WTTp-2G97rAQf2y3wiy70',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-18',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号

        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '宝宝', year: '2002', date: '08-18',
        },
        {
          type: '节日', name: '第一次亲亲纪念日', year: '2018', date: '02-17',
        },        

      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2018-02-17' },
        // 结婚纪念日
       
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	hkqXHJXWb41klGJRtu7ULY5BvRd1XIrwiZv-snpQzuw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o82II6swQLHW_xWNFWuvmRLKgJlM',
    }
  ],

}

module.exports = USER_CONFIG

