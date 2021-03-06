﻿function hideLay() {
    $(".fade").hide();
    $("#payLayer").hide();
    $("#coupon").hide();
}

function showLay() {
    $(".fade").show();
    $("#payLayer").show();
}
function payWay(num) {
    if (num == 1) {
        $('.orderPayWay').val(1);
        $('#onlinePayment').html("微信支付 >");
    } else if (num == 2) {
        $('.orderPayWay').val(2);
        $('#onlinePayment').html("储值卡支付 >");
    } else if (num == 3) {
        $('.orderPayWay').val(3);
        $('#onlinePayment').html("支付宝支付 >");
    }
    hideLay();
}
var userid = $("input.userid").val();
/**
 * 交纳定金
 */
$(".recog-btn").click(function () {
    var isCheck = $("#agrea").is(":checked");
    if (!isCheck) {
        alert("请同意阅读协议");
    } else {
        var index = layer.open({
            title: "",
            content: "",
            type: 2,
            shadeClose: false
        });
        var data = $("#marginForm").serializeObject();
        $.ajax({
            url: "phonePresale/79B4DE7C/addDeposit.do",
            type: "POST",
            data: {presale: JSON.stringify(data)},
            timeout: 300000,
            dataType: "json",
            success: function (data) {
                layer.closeAll();
                if (data != null) {
                    if (data.result == true) {
                        if (data.payWay == 2) {//储值卡支付，进入支付回调
                            var marginMoney = $('.marginMoney').val();
                            var userid = $(".userid").val();
                            location.href = "/phonePresale/79B4DE7C/payWay.do?orderMoney=" + marginMoney + "&orderId=" + data.id + "&payWay=" + data.payWay + "&no=" + data.no + "&uId=" + userid;
                        } else if (data.payWay == 3) {//支付宝支付，进入支付回调
                            var marginMoney = $('.marginMoney').val();
                            var proId = $("input.proId").val();
                            var shopId = $("input.shopId").val();
                            var userid = $("input.userid").val();
                            var path = $("input.path").val();
                            var return_url = path + "/phoneOrder/" + proId + "/" + userid + "/" + shopId + "/79B4DE7C/presalePaySuccess.do";
                            var alipaySubject = $("input.alipaySubject").val();
                            location.href = "/alipay/79B4DE7C/alipayApi.do?out_trade_no=" + data.no + "&subject=商城预售缴纳定金&total_fee=" + marginMoney + "&busId=" + data.busId + "&model=3&businessUtilName=mallDepositAlipayNotifyUrlBuinessService&return_url=" + return_url;
                        } else {
                            location.href = "/wxPay/79B4DE7C/wxMallAnDeposit.do?id=" + data.id;
                        }
                    } else {
                        var tip = layer.open({
                            content: data.msg,
                            btn: ['确认'],
                            shadeClose: false,
                            yes: function () {
                                if (data.code == 1) {
                                    var proId = $(".proId").val();
                                    var aucId = $(".aucId").val();
                                    var shopId = $(".shopId").val();
                                    location.href = "/mallPage/" + proId + "/" + shopId + "/79B4DE7C/phoneProduct.do";
                                }
                                layer.closeAll();
                            }
                        });
                    }
                }
            }, error: function () {
                alert("交纳定金失败，稍后请重新交纳");
                layer.closeAll();
            }
        });
    }

});


/** 自定义一个序列化表单的方法* */
$.fn.serializeObject = function () {
    var o = {};
    $(this).find("input").each(function (index) {
        if ($(this).attr("name") != undefined) {
            if ($(this).attr("type") == "text" || $(this).attr("type") == "password" || $(this).attr("type") == "hidden") {
                o[$(this).attr("name")] = $(this).val();
            }

            if ($(this).attr("type") == "checkbox" || $(this).attr("type") == "radio") {
                if ($(this).is(":checked")) {
                    o[$(this).attr("name")] = 1;
                } else {
                    o[$(this).attr("name")] = 0;
                }
            }
        }
    });

    $(this).find("select").each(function (index) {
        if ($(this).attr("name") != undefined) {
            o[$(this).attr("name")] = $(this).val();
        }
    });

    $(this).find("textarea").each(function (index) {
        if ($(this).attr("name") != undefined) {
            o[$(this).attr("name")] = $(this).val();
        }
    });
    return o;
};

