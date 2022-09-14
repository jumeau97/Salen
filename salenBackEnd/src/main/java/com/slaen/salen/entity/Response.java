package com.slaen.salen.entity;

public class Response {

    private String status = null;
    private String message = null;
    private Object response = null;

    public Response() {
    }

    public Response(String status, String message, Object response) {
        this.status = status;
        this.message = message;
        this.response = response;
    }

    public Response(String state, String msg) {
        this.message = msg;
        this.status = state;
    }

    public static Response with(Object object, String msg) {
        return new Response("OK", msg, object);
    }

    public static Response success(String msg) {
        return new Response("OK", msg);
    }

    public static Response error(String msg) {
        return new Response("KO", msg);
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Object getResponse() {
        return response;
    }

    public void setResponse(Object response) {
        this.response = response;
    }

}
