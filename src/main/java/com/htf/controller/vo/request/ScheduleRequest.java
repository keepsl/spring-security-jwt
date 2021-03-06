package com.htf.controller.vo.request;

import lombok.Data;

import java.util.Date;

/**
 * @author acumes
 * @date 2018/9/19 17:16
 */
@Data
public class ScheduleRequest {
    /* 任务id */
    private Long jobId;
    /* spring bean名称 */
    private String beanName;
    /* 方法名 */
    private String methodName;
    /* 参数 */
    private String params;
    /* cron表达式 */
    private String cronExpression;
    /* 任务状态  0：正常  1：暂停 */
    private Byte status;
    /* 备注 */
    private String remark;
}
