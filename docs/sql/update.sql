
ALTER TABLE `tbl_org_personal`
    ADD COLUMN `third_party` VARCHAR (32) NULL COMMENT '三方平台（DingTalk:钉钉，FeiShu:飞书；WeiXin:微信）' AFTER `fax`
    , ADD COLUMN `third_user_id` VARCHAR (64) NULL COMMENT '三方平台用户ID' AFTER `third_party`;


ALTER TABLE `tbl_org_personal`
    MODIFY COLUMN `third_user_id` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '三方平台的userid' AFTER `dept_id`,
    ADD COLUMN `third_union_id` VARCHAR(100) NULL COMMENT '三方平台的unionId' AFTER `third_user_id`