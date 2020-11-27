后端问题：
1、newGetCookieFromOpenid接口 当bind为true时 hasUnionId会是false么？
2、如果有， newGetCookieFromOpenid接口 会返回一个有效的unionid？（供绑定使用）
3、由于newBindOpenPlatform绑定接口之前的入参也有unionid 所以是现在绑定的入参不需要更改？
4、login接口 需要新增一个是否连贯操作的标识，用来判断后端时候做绑定操作。
5、现在是不是登录后不需要再绑定了。


客户端问题：
1、后端自己来用真实的userNo绑定了 那我们这边的登录后的绑定是不是都不需要了？
2、如果增加一个字段 判断是否是[授权+登录]的连续操作，会不会影响客户端的旧版本？
