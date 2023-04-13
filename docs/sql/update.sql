ALTER TABLE `tbl_org_personal`
    ADD COLUMN `third_party` VARCHAR (32) NULL COMMENT '三方平台（DingTalk:钉钉，FeiShu:飞书；WeiXin:微信）' AFTER `fax`
    , ADD COLUMN `third_user_id` VARCHAR (64) NULL COMMENT '三方平台用户ID' AFTER `third_party`;

ALTER TABLE `tbl_org_personal`
    MODIFY COLUMN `third_user_id` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_bin NULL DEFAULT NULL COMMENT '三方平台的userid' AFTER `dept_id`,
    ADD COLUMN `third_union_id` VARCHAR(100) NULL COMMENT '三方平台的unionId' AFTER `third_user_id`;


-- 20230409
ALTER TABLE `tbl_flow_extend_procinst`
    ADD COLUMN `user_info` json NULL COMMENT '用户信息' AFTER `current_user_code`;

ALTER TABLE  `tbl_flow_extend_procinst`
    ADD COLUMN `form_data` json NULL COMMENT '表单数据' AFTER `user_info`;

ALTER TABLE `tbl_flow_extend_hisprocinst`
    ADD COLUMN `user_info` json NULL COMMENT '发起人的信息' AFTER `current_user_code`,
ADD COLUMN `form_data` json NULL COMMENT '表单数据' AFTER `user_info`;



ALTER TABLE `tbl_flow_comment_info` ADD COLUMN `create_time` datetime(0) NULL DEFAULT NULL COMMENT '创建时间' AFTER `message`;
ALTER TABLE `tbl_flow_comment_info` ADD COLUMN `creator` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建人' AFTER `create_time`;
ALTER TABLE `tbl_flow_comment_info` ADD COLUMN `update_time` datetime(0) NULL DEFAULT NULL COMMENT '修改时间' AFTER `creator`;
ALTER TABLE `tbl_flow_comment_info` ADD COLUMN `updator` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '修改人' AFTER `update_time`;
ALTER TABLE `tbl_flow_comment_info` MODIFY COLUMN `del_flag` int(1) NULL DEFAULT NULL COMMENT '删除标识（0已删除；1未删除）' AFTER `updator`;