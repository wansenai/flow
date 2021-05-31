package com.dragon.flow.exception;

/**
 * 流程自定义异常
 */
public class FlowException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    private String key;
    private Object[] values;

    public FlowException() {
        super();
    }

    public FlowException(String message, Throwable throwable) {
        super(message, throwable);
    }

    public FlowException(String message) {
        super(message);
    }

    public FlowException(Throwable throwable) {
        super(throwable);
    }

    public FlowException(String key, String message) {
        super(message);
        this.key = key;
    }

    public FlowException(String key, Object value, String message) {
        super(message);
        this.key = key;
        this.values = new Object[]{value};
    }

    public FlowException(String key, Object[] values, String message) {
        super(message);
        this.key = key;
        this.values = values;
    }

    public String getKey() {
        return key;
    }

    public Object[] getValues() {
        return values;
    }
}
