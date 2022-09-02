let str = '# SNS通知服务用户手册\n\nSNS(Simple Notification Service)服务,为应用提供统一、简单、稳定的通知接口服务,支持短信、邮件，极大简化系统通知模块开发。\n\n注意，荣耀租户使用SNS发送短信时，默认只能发送通知类、验证码短信，不能发送营销短信。如果需要发送营销短信，请至少提前一周联系王玉涵进行报备，联系肖畅进行营销短信相关配置。\n\n业务支持人员:\n\n| 租户   | 联系人| \n| -- | --- |\n| 荣耀   | 热线邮箱/电话 |\n| 荣耀   | 肖畅          | \n| 荣耀   | 宗祖军        | \n| 荣耀   | 柳旭          | \n| 荣耀   | 冯良宵        | \n| 超聚变 | tianlujun     | \n| HEDS   | 刘泽光        | \n| HEDS   | 温超强        | \n\n## 1.服务使用流程说明\n\n服务使用流程：\n\n\n\n## **服务订阅开通  ->  服务授权  ->   业务试用-开发调试**\n\n\n\n所有通知通过网关接入，接入地址：**网关基础地址+服务地址**。\n\n网关基础地址：\n\n| 租户   | **接入位置**             | **网关域名**                                                 | IP 地址 |\n| ------ | ------------------------ | ------------------------------------------------------------ | ------- |\n| 荣耀   | 物理多租区               | http://apigp.heds.hihonor.com                                |         |\n| 荣耀   | 中国主通道               | http://apig.hihonor.com                                      |         |\n| 荣耀   | HEDS-Extranet区          | http://apige.hihonor.heds.xxxxxx.com                         |         |\n| 荣耀   | 俄罗斯通用区             | http://apig-ru.hihonor.com                                   |         |\n| 超聚变 | 物理多租区               | http://apigp.hieds.net                                       |         |\n| 超聚变 | 中国主通道               | http://apig.xfusion.com                                      |         |\n| 超聚变 | HEDS Extranet区          | http://apige-xfusion.heds.huawei.com                         |         |\n| HEDS   | 中国逻辑多租区           | [http://apig.heds.huawei.com ](http://apig.heds.huawei.com/api/sns/sms/send/v2) |         |\n| HEDS   | 租户侧通用区             | http://apig.hieds.net                                        |         |\n| HEDS   | 租户侧物理多租区         | http://apige.hieds.net                                       |         |\n| HEDS   | 中国荣耀通用区           | http://apig.heds.hihonor.com                                 |         |\n| HEDS   | 中国荣耀物理多租区       | http://apige.heds.hihonor.com                                |         |\n| HEDS   | 俄罗斯逻辑多租区         | http://apig-ru.heds.huawei.com                               |         |\n| HEDS   | 俄罗斯荣耀通用区         | http://apig4heds-ru.heds.hihonor.com                         |         |\n| HEDS   | 法国逻辑多租区           | http://apig-fr.heds.huawei.com                               |         |\n| HEDS   | 法国荣耀通用区           | http://apig4heds-fr.heds.hihonor.com                         |         |\n| HEDS   | 马来西亚逻辑多租区       | http://apig-my.heds.huawei.com                               |         |\n| HEDS   | 马来西亚荣耀通用区       | http://apig4heds-my.heds.hihonor.com                         |         |\n| HEDS   | 中国荣耀物理多租区(测试) | http://apige-beta.hihonor.heds.huawei.com                    |         |\n| HEDS   | 天翼云逻辑区             | http://apig-ty.heds.huawei.com                               |         |\n| HEDS   | 移动云逻辑区             | http://apig-yd.heds.huawei.com                               |         |\n\n\n\n### 1.1 服务开通\n\n| 租户   | API网关开通订阅地址                                          | SNS服务开通订阅地址                                          | 备注                                                         |\n| ------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |\n| 荣耀   | http://heds.hihonor.com/portal/#/sec/intro?servicealias=apigw&service_code=hrn:his:servicemarket::service:apigw | http://heds.hihonor.com/portal/#/sec/intro?servicealias=sns&service_code=hrn:his:servicemarket::service:sns | 荣耀内部接入SNS服务的方法主要参考以下文档:https://welink.huaweicloud.com/km/#/medium/cms/community/560959475863814144/blogs/604163560757530624?sid=563142557509378048 |\n| 超聚变 | http://heds.xfusion.com/portal/#/sec/intro?servicealias=apigw&service_code=hrn:his:servicemarket::service:apigw | http://heds.xfusion.com/portal/#/sec/intro?servicealias=sns&service_code=hrn:his:servicemarket::service:sns |                                                              |\n| HEDS   | https://console.heds.huawei.com/buy/#/apply_vtpv/serviceApplyByFront_MetaData?service_code=hrn:his:servicemarket::service:apigw | https://console.heds.huawei.com/buy/#/apply_vtpv/serviceApplyByFront_MetaData?service_code=hrn:his:servicemarket::service:sns |                                                              |\n\n\n\n### 1.2 服务授权、业务配置\n\n邮件联系刘泽光服务授权，邮件内容如下：\n\n标题：SNS(简单通知服务)授权\n\n内容：\n\n应用ID\t+\t需要使用的服务：xxx（邮件、短信、语音）\n\n\n\n### 1.3 服务试用\n\n#### 1.3.1 荣耀租户\n\n服务使用之前需要确认用户配置是否正确，用户配置地址：http://console.heds.hihonor.com/sns/#/tenant/tenantManage/list\n               短信配置：默认的签名为“荣耀”，海外暂无，如果要调整或者指定多个签名需要联系刘泽光\n\n#### 1.3.2 超聚变租户\n\n服务使用之前需要确认用户配置是否正确，用户配置地址：http://console.heds.xfusion.com/sns/#/tenant/tenantManage/list\n\n​\t\t短信配置：默认的签名为“超聚变”，海外暂无，如果要调整或者指定多个签名需要联系刘泽光\n\n\n\n#### 1.3.3 HEDS租户\n\n服务使用之前需要确认用户配置是否正确，用户配置地址：https://console.heds.huawei.com/sns/#/tenant/tenantManage/list\n\n​\t\t短信配置：默认的签名为“华为”，海外"huawei"，如果要调整或者指定多个签名需要联系刘泽光\n\n### 1.4 开发调试\n\n​\t服务具体参数可以参考服务说明使用\n\n​\t网关使用可以参考网关SDK：\n\n​\t荣耀：http://console.heds.hihonor.com/apigw_portals/#/sdk，\n\n​\t超聚变：http://console.heds.xfusion.com/apigw_portals/#/sdk，\n\n​\tHEDS：http://console.heds.huawei.com/apigw_portals/#/sdk，\n\n​\t两种认证方式二选一 \n\n#### 1.4.1 请求认证\n\n请求Header参数：\n\n| 参数名称     | 是否必选 | 参数类型 | 默认值 | 说明                           |\n| ------------ | -------- | -------- | ------ | ------------------------------ |\n| X-HW-ID      | 是       | String   | 无     | 应用ID                         |\n| X-HW-APPKEY  | 是       | String   | 无     | API网关应用的请求密钥          |\n| Content-Type | 是       | String   | 无     | application/json;charset=utf-8 |\n\n#### 1.4.2 签名认证\n\n请求Header参数：\n\n| 参数名称     | 是否必选 | 参数类型 | 默认值 | 说明                                                         |\n| ------------ | -------- | -------- | ------ | ------------------------------------------------------------ |\n| X-HW-ID      | 是       | String   | 无     | 应用ID                                                       |\n| X-HW-DATE    | 是       | String   | 无     | API请求的时间，采用GMT时间，格式为yyyymmdd\'T\'24HMMSS\'Z\'      |\n| X-HW-SIGN    | 是       | String   | 无     | 签名采用SHA256进行计算，具体计算方式如下：                   SHA256 (SERVICE_URI \\|HTTP_METHOD\\|PARAMETERS\\|DATE\\|APP_ID\\|APP_KEY)  签名采用HMAC-SHA1或者HMAC-SHA256进行计算，具体计算方式如下：                                                                         HMAC-SHA256(APP_KEY,SERVICE_URI \\|HTTP_METHOD\\|PARAMETERS\\|DATE\\|APP_ID) |\n| Content-Type | 是       | String   | 无     | application/json;charset=utf-8                               |\n\n**X-HW-SIGN 取值说明如下：**\n\n| 参数名称    | 取值说明                                                     | 取值样例                       |\n| ----------- | ------------------------------------------------------------ | ------------------------------ |\n| SERVICE_URI | API请求路径                                                  | /sns/sms/send/v2               |\n| HTTP_METHOD | API请求方法                                                  | POST                           |\n| PARAMETERS  | API调用参数，格式为：key1=value1\\|key2=value2，请注意PARAMETERS是需要以key进行排序后再进行拼接，排序方法按照ASCII字母数字序进行排列 | age=20\\|name=jim(**可为空**)   |\n| DATE        | API请求的时间，取值与X-HW-DATE一致                           | 20160829T193023Z               |\n| APP_ID      | 提供调用者的APPID，APPID在账号注册阶段提供                   | 应用ID                         |\n| APP_KEY     | 提供调用者的APPKEY，APPKEY在账号注册阶段提供，请注意APP_KEY是APPID的私钥，需要进行严格的保密，如果出现泄漏或疑似泄漏，请及时更新密钥，在SHA256的签名模式中，需要将APP_KEY进行拼接，如果在HMAC-SHA1和HMAC-SHA256的签名模式中，不需要拼接APP_KEY | APP_KEY**（API网关签名密钥）** |\n\n\n\n\n\n## 2.服务说明\n\n\n\n### 2.1 短信服务\n\n系统调用SNS服务接口发送短信，支持全球绝大多数国家和地区。短信发送之后，短信是否送达到用户手机，运营商会将结果返回，称为短信回执。用户收到短信之后对短信进行回复，回复的结果通过运营商返回，称为短信回复。\n\n#### 2.1.1 接口说明\n\n##### 2.1.2.1 短信发送\n\n应用系统调用SNS-SMS服务接口发送短信，服务支持批量发送，支持内网应用调用也支持外网应用调用\n\n接口类型说明：\n\n| 服务地址     | /api/sns/sms/send/v2 |\n| ------------ | -------------------- |\n| **请求方法** | **POST**             |\n| **通讯协议** | **HTTPS**       |\n\n请求参数：\n\n| 参数名称        | 是否必选 | 参数类型      | 默认值 | 说明                                                         |\n| --------------- | -------- | ------------- | ------ | ------------------------------------------------------------ |\n| app_id          | 是       | String(1-100) | 无     | 应用ID                                                       |\n| mobiles         | 是       | String        | 无     | 收信人手机号码,多个电话号码使用英文逗号分隔，批量发送不超过200个电话号码 |\n| content         | 是       | String        | 无     | 短信内容，长度不超过1000字符                                 |\n| template_id     | 否       | string        | 无     | 模板id，template_id和content不能同时使用                     |\n| template_params | 否       | string        | 无     | 模板参数，json字符串                                         |\n| user_extend     | 否       | String        | 无     | 用于扩展字段，提交结果和回执中都会返回给应用，长度不超过150字符 |\n| sign_id         | 否       | string        | 无     | 租户有多签名的情况下需要通过传签名ID发送短信，签名ID联系刘泽光、贾永哲获取 |\n| extend_num      | 否       | string        | 无     | 扩展号，纯数字,业务短号+扩展号不超过4位,一般业务短号为固定2位,业务可以自定义2位扩展号。需要回复的短信填写,用户回复内容中会带回 |\n\n**注：如需使用短信回复功能，请联系刘泽光、贾永哲配置业务短号！**\n\n响应参数：\n\n| 参数名称    | 是否必选 | 参数类型 | 默认值 | 说明                                                   |\n| ----------- | -------- | -------- | ------ | ------------------------------------------------------ |\n| resp_code   | 是       | String   | 无     | 请求返回的结果码：200 请求成功 4xx参数错误 5xx系统异常 |\n| resp_msg    | 是       | String   | 无     | 请求返回的结果码描述。                                 |\n| detail      | 是       | String   | 无     | 返回信息详情                                           |\n| data        | 否       | string   | 无     | 短信message id，当返回响应出现异常时不包含此字段。     |\n| user_extend | 否       | string   | 无     | 用户扩展字段，可自定义                                 |\n\n##### 2.1.2.2 短信回执\n\n运营商会将短信发送结果会将结果返回到SNS，国内的短信是准确的，海外短信回执数据不准确。\n\n短信回执获取有两种方式：\n\n###### （1）系统主动推送\n\n系统主动推送到租户系统，回调地址需要在租户管理页面维护（推荐使用）。如果回调地址存在跨租户访问问题，可以联系刘泽光进行处理！\n\n![img](http://image.huawei.com/tiny-lts/v1/images/8afa1267eae1245ec9ac_1490x390.png)\n\n推送方法：POST\n\n通讯协议：HTTPS\n\n推送参数：\n\n| 参数名称      | 是否必选 | 参数类型 | 默认值 | 说明                                     |\n| ------------- | -------- | -------- | ------ | ---------------------------------------- |\n| app_id        | 是       | String   | 无     | 应用ID                                   |\n| mobile        | 是       | String   | 无     | 收信人手机号码                           |\n| sms_msg_id    | 是       | String   | 无     | 回执中的message_id                       |\n| user_extend   | 否       | string   | 无     | 扩展字段                                 |\n| recipt_status | 是       | string   | 无     | 短信回执状态：“0”发送失败，“1”发送成功。 |\n| callback_type | 是       | string   | recipt | 回执“recipt”，回复“reply”                |\n| sign_id       | 是       | string   | 无     | 签名ID                                   |\n\n\n\n###### （2）租户主动查询：\n\n荣耀租户开通方法:\n\n发送邮件给刘泽光\n\n邮件内容:\n\n您好,xxxx项目因为业务需求,需要开通短信回执主动查询功能。\n\n1:项目id为xxxxxxxxxx\n\n2: 想要订阅的接口地址为/api/sns/sms/receipts/query\n\n| 服务地址     | /api/sns/sms/receipts/query |\n| ------------ | --------------------------- |\n| **请求方法** | **POST**                    |\n| **通讯协议** | **HTTP,HTTPS**              |\n\n请求参数：\n\n| 参数名称        | 是否必选 | 参数类型 | 默认值 | 说明                     |\n| --------------- | -------- | -------- | ------ | ------------------------ |\n| app_id          | 是       | String   | 无     | 应用ID                   |\n| mobile          | 否       | String   | 无     | 收信人手机号码           |\n| message_id      | 否       | String   | 无     | 短信发送返回的message_id |\n| send_time_start | 否       | date     | 无     | 2018-03-12 01:00:00      |\n| send_time_end   | 否       | date     | 无     | 2018-03-12 01:00:00      |\n\n返回参数：\n\n| 参数名称  | 是否必选 | 参数类型 | 默认值 | 说明                                                   |\n| --------- | -------- | -------- | ------ | ------------------------------------------------------ |\n| resp_code | 是       | String   | 无     | 请求返回的结果码：200 请求成功 4xx参数错误 5xx系统异常 |\n| resp_msg  | 是       | String   | 无     | 请求返回的结果码描述                                   |\n| data      | 是       | String   | 无     | 回执详细                                               |\n\ndata详细说明：\n\n| 参数名称       | 是否必选 | 参数类型 | 默认值 | 说明                                 |\n| -------------- | -------- | -------- | ------ | ------------------------------------ |\n| receipt_status | 是       | String   | 无     | 回执状态：“0”发送失败，“1”发送成功。 |\n| mobile         | 是       | String   | 无     | 收信人手机号码                       |\n| message_id     | 是       | String   | 无     | 短信message_id                       |\n| app_id         | 是       | String   | 无     | 应用ID                               |\n| user_extend    | 否       | String   | 无     | 扩展字段                             |\n\n##### 2.1.2.3 短信回复\n\n用户收到短信之后对短信进行回复，运营商会将回复内容返回到SNS，SNS会将回复内容返回到应用系统。\n\n短信回复内容获取支持主动推动和租户系统主动查询\n\n###### （1）系统主动推送\n\n系统主动推送到租户系统，回调地址需要在租户管理页面维护（推荐使用）。如果回调地址存在跨租户访问问题，可以联系刘泽光进行处理！\n\n![img](http://image.huawei.com/tiny-lts/v1/images/0f878267eae18a72191d_1489x388.png)\n\n推送方法：POST\n\n通讯协议：HTTPS\n\n推送参数：\n\n| 参数名称      | 是否必选 | 参数类型 | 默认值 | 说明                                                      |\n| ------------- | -------- | -------- | ------ | --------------------------------------------------------- |\n| mobile        | 是       | String   | 无     | 收信人手机号码                                            |\n| app_id        | 是       | String   | 无     | 应用ID                                                    |\n| sms_msg_id    | 是       | String   | 无     | 回复中的message_id                                        |\n| callback_type | 是       | String   | reply  | 回复“reply”                                               |\n| reply_content | 是       | String   | 无     | 回复内容,如果用户回复超长短信，会分多条返回，每条70个字符 |\n| send_time     | 是       | String   | 无     | 短信发送时间                                              |\n| sign_id       | 是       | String   | 无     | 签名ID                                                    |\n| extend_num    | 是       | String   | 无     | 扩展号                                                    |\n\n###### **（2）租户主动查询**\n\n荣耀租户开通方法:\n\n发送邮件给刘泽光\n\n邮件内容:\n\n您好,xxxx项目因为业务需求,需要开通短信回复主动查询功能。\n\n1:项目id为xxxxxxxxxx\n\n2: 想要订阅的接口地址为/api/sns/sms/replys/query\n\n3:请帮忙配置业务短号\n\n| 服务地址     | /api/sns/sms/replys/query |\n| ------------ | ------------------------- |\n| **请求方法** | **POST**                  |\n| **通讯协议** | **HTTP,HTTPS**            |\n\n请求参数：\n\n| 参数名称        | 是否必选 | 参数类型 | 默认值 | 说明                |\n| --------------- | -------- | -------- | ------ | ------------------- |\n| app_id          | 是       | String   | 无     | 应用ID              |\n| mobile          | 否       | String   | 无     | 收信人手机号码      |\n| send_time_start | 否       | date     | 无     | 2018-03-12 01:00:00 |\n| send_time_end   | 否       | date     | 无     | 2018-03-12 01:00:00 |\n\n返回参数：\n\n| 参数名称  | 是否必选 | 参数类型 | 默认值 | 说明                                                         |\n| --------- | -------- | -------- | ------ | ------------------------------------------------------------ |\n| resp_code | 是       | String   | 无     | 请求返回的结果码：200 请求成功 4xx参数错误 5xx系统异常       |\n| resp_msg  | 是       | String   | 无     | 请求返回的结果码描述                                         |\n| total     | 否       | String   | 无     | 回复条数                                                     |\n| data      | 否       | json     | 无     | 回执详细<br>reply_time：回复时间<br>reply_msg_id：回复message_id<br>mobile：收信人手机号码<br>reply_content：回复内容<br>app_id：应用ID<br>extend_num：扩展号<br>sign_id：签名ID |\n| detail    | 否       | String   | 无     | 错误信息                                                     |\n\n\n\n#### 2.1.3 注意事项\n\n（1）用系统接入需要提供日发送量，开通服务默认10分钟最大发送量为**1000**，**10 **分钟内发送量超过阀值，SNS会停止业务系统短信发送功能；\n\n（2）规范电话号码格式，不规范的电话号码易导致系统解析号码异常；\n\n（3）海外短信尽量使用英文，海外短信有个别国家不支持中文；\n\n（4）长短信（超过68中文字符，136英文字符短信）要分片发送，分片发送在手机端拼装，海外短信尽量精简，提高发送成功率。\n\n（5）**短信通道保密级别属于内部公开,应用系统接入之前需要自行安全评估,对通过短信发送的内容是否涉密进行确认。**\n\n\n\n### 2.2 邮件服务\n\n邮件服务是指用户调用SNS-mail接口发送邮件，同时支持内网邮箱可外网邮箱，同时支持内网应用调用和外网应用调用。发送外网邮箱需要单独申请可以发送外网邮箱的账号，同时将账号托管在SNS平台。\n\n邮箱账号申请需要租户业务管理员分配邮箱账号\n\n#### 2.2.1 服务约束\n\n  (1)\t \t内容约束\n\n不得发送与工作内网无关邮件,平台不会对邮件做安全审计,需要调用方进行内容是否涉密确认。\n\n（2）\t性能约束\n\n服务接口支持200TPS，请求太频繁会返回请求过多异常。\n\n#### 2.2.2 接口说明\n\n##### 2.2.2.1  邮件发送\n\n| 服务地址     | /api/sns/mail/send |\n| ------------ | ------------------ |\n| **请求方法** | **POST**           |\n| **通讯协议** | **HTTPS**     |\n\n请求参数：\n\n| 参数名称        | 是否必选 | 参数类型 | 默认值 | 说明                                                         |\n| --------------- | -------- | -------- | ------ | ------------------------------------------------------------ |\n| app_id          | 是       | String   | 无     | 应用ID                                                       |\n| to              | 是       | String   | 无     | 收件人邮箱地址，最多200个收件人，多个收信人使用逗号分隔      |\n| cc              | 否       | String   | 无     | 收件人邮箱地址，最多200个收件人，多个收信人使用逗号分隔      |\n| bcc             | 否       | String   | 无     | 收件人邮箱地址，最多200个收件人，多个收信人使用逗号分隔【收件人+抄送人+密送人  不得超过200个收件人】 |\n| reply_to        | 否       | String   | 无     | 用户回复到该邮箱，不超过1000字符，多个收信人使用逗号分隔     |\n| subject         | 否       | String   | 无     | 邮件主题， 大于250字符的时候 剩下的会被...代替               |\n| content         | 是       | String   | 无     | 邮件内容                                                     |\n| email_username  | 否       | String   | 无     | 邮箱账号【租户管理】-[编辑]-【邮件业务】-【账号管理】界面中有很多个账号，用户在发送邮件时，可指定使用【账号管理】某个账号来发送邮件 |\n| importance      | 否       | String   | 无     | 邮件重要性：High,Normal,Low                                  |\n| template_id     | 否       | String   | 无     | 模板ID                                                       |\n| template_params | 否       | String   | 无     | 模板参数，json字符串                                         |\n| attachment_list | 否       | String   | 无     | 附件<br />file_name：附件名称<br />file_content：附件内容，将文件进行Base64编码发送 |\n\n返回参数：\n\n| 参数名称  | 是否必选 | 参数类型 | 默认值 | 说明                                                   |\n| --------- | -------- | -------- | ------ | ------------------------------------------------------ |\n| resp_code | 是       | String   | 无     | 请求返回的结果码：200 请求成功 4xx参数错误 5xx系统异常 |\n| resp_msg  | 是       | String   | 无     | 请求返回的结果码描述                                   |\n| data      | 是       | String   | 无     | 回执详细<br/>mail_id:邮件message_id                    |\n\n\n\n##### 2.2.2.1  邮件回执\n\n发送邮件后，可以通过两种方式获取回执，一旦获取到回执数据后，以后就不会再获取到同样的回执数据。\n\n邮件回执获取有两种方式：\n\n###### （1）系统主动推送\n\n系统主动推送到租户系统，回调地址需要在租户管理页面维护（推荐使用）。如果回调地址存在跨租户访问问题，可以联系刘泽光进行处理！\n\n推送方法：POST\n\n推送参数：\n\n| 参数名称    | 是否必选 | 参数类型 | 默认值 | 说明         |\n| ----------- | -------- | -------- | ------ | ------------ |\n| message     | 是       | String   | 无     | 回执详细信息 |\n| mail_id     | 是       | String   | 无     | 邮件消息ID   |\n| status_code | 是       | String   | 无     | 邮件发送状态 |\n| app_id      | 是       | string   | 无     | 应用ID       |\n\n\n\n###### （2）租户主动查询\n\n用户在租户管理  →  邮件业务  →  邮件回执，设置需要回执且回执获取方式为主动查询时，主动查询生效，否则主动请求查询接口则会拒绝服务。\n邮件发送刘泽光\n\n邮件内容:\n\n您好,xxxx项目因为业务需求,需要开通邮件回执主动查询功能。\n\n1:项目id为xxxxxxxxxx\n\n2: 想要订阅的接口地址为api/sns/mail/receipts/query\n\n| 服务地址     | api/sns/mail/receipts/query |\n| ------------ | --------------------------- |\n| **请求方法** | **POST**                    |\n| **通讯协议** | **HTTPS**              |\n\n请求参数：\n\n| 参数名称        | 是否必选 | 参数类型 | 默认值 | 说明                            |\n| --------------- | -------- | -------- | ------ | ------------------------------- |\n| mail_id         | 否       | String   | 无     | 邮件消息ID                      |\n| app_id          | 是       | String   | 无     | 应用ID                          |\n| send_time_start | 否       | String   | 无     | 时间格式：`yyyy-MM-dd HH:mm:ss` |\n| send_time_end   | 否       | String   | 无     | 时间格式：`yyyy-MM-dd HH:mm:ss` |\n\n返回参数：\n\n| 参数名称  | 是否必选 | 参数类型 | 默认值 | 说明                                                         |\n| --------- | -------- | -------- | ------ | ------------------------------------------------------------ |\n| resp_code | 是       | String   | 无     | 请求返回的状态码：200 请求成功 4xx参数错误 5xx系统异常       |\n| resp_msg  | 是       | String   | 无     | 请求返回的结果码描述                                         |\n| total     | 否       | String   | 无     | data记录总数                                                 |\n| data      | 否       | String   | 无     | 回执详细<br>app_id：应用ID<br>mail_id：邮件消息ID<br>status_code：邮件发送状态<br>message：回执详细信息 |\n| detail    | 否       | String   | 无     | 错误信息                                                     |\n\n\n## 3.获取网关签名秘钥\n\n进入网关服务管理页：\n\n​\t荣耀：http://console.heds.hihonor.com/apigw_portals/#/\n\n​\t超聚变：http://console.heds.xfusion.com/apigw_portals/#/\n\n​\tHEDS：http://console.heds.huawei.com/apigw_portals/#/\n\n应用管理→选择对应应用→签名密钥\n\n\n\n\n\n## 4.网关使用参考\n\n用户手册地址：\n\n​\t荣耀：http://console.heds.hihonor.com/apigw_portals/#/manual/user?helpKey=manual，\n\n​\t超聚变：http://console.heds.xfusion.com/apigw_portals/#/manual/user?helpKey=manual，\n\n​\tHEDS：http://console.heds.huawei.com/apigw_portals/#/manual/user?helpKey=manual，\n\nSDK地址：\n\n​\t荣耀：http://console.heds.hihonor.com/apigw_portals/#/sdk，\n\n​\t超聚变：http://console.heds.xfusion.com/apigw_portals/#/sdk，\n\n​\tHEDS：http://console.heds.huawei.com/apigw_portals/#/sdk，'

export default str