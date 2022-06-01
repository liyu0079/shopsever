const AlipaySdk = require('alipay-sdk').default; // 引入 SDK
const alipaySdk =  new  AlipaySdk({
  appId: '2021000119699628', // 开放平台上创建应用时生成的 appId
  signType: 'RSA2', // 签名算法,默认 RSA2
  gateway: 'https://openapi.alipaydev.com/gateway.do', // 支付宝网关地址 ，沙箱环境下使用时需要修改
  alipayPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlNxoNNDj0CanJFbi+pIy7p7JLP6h14uIdQ4CeNBtll/F1V/K9eYuFITg3L7Yok6ClACWpGsCA+UA/befYWBSxCHMxwokxM/kACQ0psRF/BSrwxObrLwYO1bgvFp8ewadl07RZsgJF9v8sjaN4M+0D1IantIt5OSC7lLtW7hac1RLyX0Msb8x77C9itf/6GW8fJIbeGEuz/q+h+seJVx0j/HBLcdF2y6fiEmnocMUgEaVVCSOX2EKrJ5ItGXn7+wCBBl9Xdbx5dWELwRs1u2KVUVxI9W2T5yGY9UlarThabFbCbeQVJxqvflM5+Hv39HUmUZGGSqM8OdIBNM773cwqwIDAQAB', // 支付宝公钥，需要对结果验签时候必填
  privateKey: 'MIIEogIBAAKCAQEAo3+tsuASCDiFPzZGvGuavzTpLIbc/VyB4q67OKiW8XVQ3vTB9TlbLVxgXIGuQFtQT+tbnAZ0oPMztE+QPc7TxJBQoxveLEZRR6EoFKQuFBiHl8Mp73qqdISJbf6YFFl0Pj1g4jW1+yLO10Gss8RqiNwtX73v+Ez2oR3ni+VHBNTiaZFEPn1i8h3Z6T3Kfasb6+c9sQu+GqBGcJIi8ApGPkpcCiilDzhYDDUXeRrp6Susn2I0RWKlL6O07DeugEJeiMqiQjO7lvGC61PgsxUCZA2ClnP/nsfwN7d0cRsnEO4DBb3butOmcwu2XWbEvhSsEylOR+uOj/JXUkYiKEeaPQIDAQABAoIBAEFPaFBSx4E3KqrkgH8VsLv+Y8JgoPgoMs4dJDZuydTsGwDk3nGZlr1Y8DkjqDqW/07dYjvCLGZ6n8XAHotCCj+zsjJlmGsxL5igXIVaS/nFDqzlzeOWqW5f3xHsKE3AqfmOxRu3ftkxv1QnLNimdjPzV8Ct+6TBAae8bVjpnmPkDQ4e/k4lYV0jM570g2K4OSmG7bvrSU3Sej2w1rWdzOX0Yq50xRJCohJHMEzfFgA51Tm2ZkBRAsResD1Op+x5veMU9Xn8VJuu9t5zbGpNEF4Y8rrqBdp46kQHRSwdnfJP6/I+cfwMxL1PPL5a8qdCtaiKUvBNWA862rFNl9cg2WECgYEA6pbMYVSp+IqD9Nzs2Qn1gqoLdtjMbtoMJqjgF1pYgx3IAAMX605Yxef6X0wmfp5TvnLz6BSuIj2Vgsbps5ZIwB7lTdqd9Eazu+n3Ur+xD897Xdev0RTz0pSN5THU9sZOzn4/ROw/sQPWiU22eQtZRlPq0ua8o0kW+bcPluolyTUCgYEAsmvYrzEY1yFktcQUIpQcRwyQIAn2cgFSTV4I0ZUBP9G6alDmn2EuOoEnsacMqX4RDcr/jX79651JwLYZzEwH2m2VfWhmCtOLvRNkDmD6IlQsl5HOQZouWPxSCr2AWj5NRo9QUDzxuuDE/iV9GnqyHj3mT7OErQTmR5Kz4zc9tekCgYBXqHu8ju9ogRHn6LnULCWCatoX0dEqRu4tcAM0lrzmWbWHU6CXe9IuOY3UGFd2DuGKE9hSS4/6GXsJwBxJ0AllSOY0XlGRmu3EdRvG3vxhxQz7NwJqpWKquHoBP8qtX9LI1GH99i2ijqWW7uQVfQkh/2+K2U950HD2ZNI9eUcfVQKBgBR4WRjoeiAcfbB4+ZJqCcCBCXwTiInV6vpjYoGhJc6LomaWN49rl+EwdjxknQhJJW2+r4ktW7aPiimo+ta8ll4SGoeT1blCQhMESYN4ztnnbGJLYS2Xod+lu0fuK+6unTEOOjmqdFVrek5qQKssDol3spfMUdmD6WOmyiq0aMkZAoGACvVHkwN92WCfzfcrKC2XcLXbYwuNqegNYNCw0pN7CcC5hPfpZjPckCh5crRbRMHKrP6P47IIa4z4Lu7JXBuDak3RxiW6sb7zxscuZQoWnDXz6IUfXtl6U7S/2vnkxyuFEt7eQWq1YfPJ98i9fRui98l71/bx66/iAPf/ZoaabH0=', // 应用私钥字符串
});
module.exports = alipaySdk;