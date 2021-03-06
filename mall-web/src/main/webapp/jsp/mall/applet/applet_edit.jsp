<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<html lang="en">
<head>
    <title>商城小程序编辑</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0">
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <%
        String path = request.getContextPath();
        String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
    %>
    <base href="<%=basePath%>"/>
    <link rel="stylesheet" type="text/css" href="/css/common.css?<%=System.currentTimeMillis()%>"/>
    <link rel="stylesheet" type="text/css" href="/css/mall/group.css?<%= System.currentTimeMillis()%>"/>
    <link rel="stylesheet" type="text/css" href="/css/mall/manageList.css"/>
    <script src="/js/plugin/jquery-1.8.3.min.js"></script>
    <script src="/js/plugin/jquery-ui.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="/js/plugin/layer/layer.js"></script>
    <script type="text/javascript" src="/js/public.js"></script>
    <script type="text/javascript" src="/js/mall/mall_public.js"></script>
    <script type="text/javascript">

        var dProvinceObj = new Object();
        var dDetailObj = new Object();

        var proObj = new Object();

        var proSpecArr = new Array();

        var proSpecObj = new Object();
    </script>
    <style type="text/css">
        .font14 {
            width: 120px !important;
        }
    </style>
</head>
<body>
<jsp:include page="/jsp/common/headerCommon.jsp" />
<div id="newGroup">
    <c:if test="${!empty shoplist }">
        <div class="con-head">
            <a class="navColor" href="/mApplet/index.do">图片设置</a>
        </div>
        <form id="groupForm">
            <div class="groupDiv">
                <span class="font14"><em>*</em>图片链接跳转：</span>
                <input type="radio" class="type" name="type" value="1"
                       <c:if test="${imageMap.type == 1 || empty imageMap}">checked="checked"</c:if> /> 商品详情
                <input type="radio" class="type" name="type" value="0"
                       <c:if test="${imageMap.type == 0}">checked="checked"</c:if> /> 不跳转
            </div>
            <div class="groupDiv">
                <span class="font14"><em>*</em>上传图片：</span>
                <div class="goodDiv">
                    <a onclick="chooseImage()" href="javascript:void(0);" class="js-add-goods add-goods add-products"
                       <c:if test="${!empty imageMap && imageMap.imageUrl != ''}">style="background-image:url(${http }${imageMap.imageUrl });background-size:cover;background-position:50% 50%;"</c:if>>
                        <c:if test="${empty imageMap || imageMap.imageUrl == ''}">
                            <i class="icon-add"></i>
                        </c:if>
                    </a>
                    <input type="hidden" class="imageUrl" value="<c:if test="${!empty imageMap && imageMap.imageUrl != ''}">${imageMap.imageUrl }</c:if>"/>
                </div>
            </div>
            <div class="proDIv">
                <div class="groupDiv">
                    <span class="font14"><em>*</em>选择商品：</span>
                    <div class="goodDiv">
                        <a onclick="choosePro()" href="javascript:void(0);" class="js-add-goods add-goods pro_a"
                           <c:if test="${!empty imageMap && imageMap.image_url != ''}">style="background-image:url(${http }${imageMap.image_url });background-size:cover;background-position:50% 50%;"</c:if>>
                            <c:if test="${empty imageMap || imageMap.image_url == ''}">
                                <i class="icon-add"></i>
                            </c:if>
                        </a>
                    </div>
                    <input type="hidden" id="ids" value="<c:if test="${!empty imageMap }">${imageMap.id }</c:if>">
                    <input type="hidden" id="productId" value="<c:if test="${!empty imageMap }">${imageMap.pro_id }</c:if>">
                    <input type="hidden" id="defaultProId" value="<c:if test="${!empty imageMap }">${imageMap.pro_id }</c:if>">
                    <input type="hidden" id="isSpec" value="<c:if test="${!empty imageMap }">${imageMap.is_specifica }</c:if>">
                    <input type="hidden" id="shopId" value="<c:if test="${!empty imageMap }">${imageMap.shop_id }</c:if>">
                </div>
                <div class="groupDiv">
                    <span class="font14"></span>
                    <div class="proName red" style="margin-left:100px;">如需修改商品信息，请在商品管理中更新</div>
                </div>
                <div class="groupDiv">
                    <span class="font14"><em>&nbsp;&nbsp;</em>商品名称：</span>
                    <span class="proName"><c:if test="${!empty imageMap }">${imageMap.pro_name }</c:if></span>
                </div>
            </div>
            <div class="groupDiv">
                <a href="javascript:editAuction();" class="addBtn">确定</a>
                <a href="/mApplet/index.do" style="cursor: pointer;color:white;" class="backBtn">返回</a>
            </div>
        </form>
    </c:if>
    <c:if test="${empty shoplist }">
        <h1 class="groupH1"><strong>您还没有店铺，请先去店铺管理创建店铺</strong></h1>
    </c:if>
</div>
<input type="hidden" class="imageHttp" value="${http }"/>
<script src="/js/plugin/laydate/laydate.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript" src="/js/mall/applet/applet_image.js"></script>
</body>
</html>