
ALTER TABLE `tbl_org_personal`
    ADD COLUMN `third_party` VARCHAR (32) NULL COMMENT '三方平台（DingTalk:钉钉，FeiShu:飞书；WeiXin:微信）' AFTER `fax`
    , ADD COLUMN `third_user_id` VARCHAR (64) NULL COMMENT '三方平台用户ID' AFTER `third_party`;

