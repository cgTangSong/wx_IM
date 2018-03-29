// pages/test/test.js
// var RongIMLib = require("/pages/RongIMLib.xiaochengxu-1.0.0.js");
var RongIMLib = require("../RongIMLib.xiaochengxu-1.0.0.js");
var RongIMClient = RongIMLib.RongIMClient;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        messageList: [],            //聊天信息列表
        cursorSpacing: 6000,        //信息输入框距底部距离
        content: null,              //输入的信息内容
    },

    onLoad: function(){
        var that = this;
        
    
    },
    
    // 输入聊天信息时
    bindInput: function(e){
        var that = this;

        // console.log(e.detail.value);
    },

    //聊天输入框聚焦时
    inputFocus: function(){
        var that = this;

        that.setData({
            cursorSpacing: 5000
        })
    },

    // 发送消息
    sendMessage: function(){
        var that = this;



        that.setData({
            content: null
        })
    },  
})