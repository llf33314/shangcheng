<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<html lang="en">
<head>
    <title>团购管理-编辑团购</title>
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

</head>
<body>
<jsp:include page="/jsp/common/headerCommon.jsp"/>
<c:if test="${!empty groupBuy }">
    <c:if test="${!empty groupBuy.priceList }">
        <c:forEach var="obj" items="${groupBuy.priceList }">
            <script type="text/javascript">
                var obj = {
                    "id": "${obj.id}",
                    "groupPrice": "${obj.groupPrice}",
                    "isJoinGroup": "${obj.isJoinGroup}"
                };
                proSpecObj["${obj.specificaIds}"] = obj;
            </script>
        </c:forEach>
    </c:if>
</c:if>
<div id="newGroup">
    <c:if test="${!empty shoplist }">
        <form id="groupForm">
            <div class="groupDiv">
                <span class="font14"><em>*</em> 所属店铺：</span>
                <c:if test="${!empty shoplist }">
                    <select name="shopId" class="shopId" id="<c:if test="${!empty groupBuy}">${groupBuy.shopId }</c:if>" <c:if test="${!empty groupBuy}">disabled="disabled"</c:if>>
                        <c:forEach var="shop" items="${shoplist }">
                            <option value="${shop.id }">${shop.sto_name }</option>
                        </c:forEach>
                    </select>
                </c:if>
            </div>
            <div class="groupDiv">
                <span class="font14"><em>*</em> 选择商品：</span>
                <div class="goodDiv">
                    <a onclick="choosePro()" href="javascript:void(0);" class="js-add-goods add-goods"
                       <c:if test="${!empty groupBuy && groupBuy.imgUrl != ''}">style="background-image:url(${http }${groupBuy.imgUrl });background-size:cover;background-position:50% 50%;"</c:if>>
                        <c:if test="${empty groupBuy || groupBuy.imgUrl == ''}">
                            <i class="icon-add"></i>
                        </c:if>
                    </a>
                </div>
                <input type="hidden" name="productId" id="productId" value="<c:if test="${!empty groupBuy }">${groupBuy.productId }</c:if>">
                <input type="hidden" id="defaultProId" value="<c:if test="${!empty groupBuy }">${groupBuy.productId }</c:if>">
                <input type="hidden" id="isSpec" value="<c:if test="${!empty groupBuy }">${groupBuy.isSpecifica }</c:if>">
            </div>
            <div class="groupDiv">
                <span class="font14"></span>
                <div class="proName red" style="margin-left:100px;">如需修改商品信息，请在商品管理中更新</div>
            </div>
            <div class="groupDiv">
                <span class="font14"><em>*</em> 商品名称：</span>
                <span class="proName"><c:if test="${!empty groupBuy }">${groupBuy.proName }</c:if></span>
            </div>
            <div class="groupDiv">
                <span class="font14"><em>*</em> 商品原价：</span>
                <span class="proPrice">￥
				<c:if test="${!empty groupBuy && groupBuy.proPrice>0}">${groupBuy.proPrice }</c:if>
				<c:if test="${empty groupBuy || groupBuy.proPrice==0}">0.00</c:if>
				</span>
            </div>
            <div class="groupDiv">
                <span class="font14"><em>*</em> 活动名称：</span>
                <input type="hidden" name="id" id="ids" value="<c:if test="${!empty groupBuy }">${groupBuy.id }</c:if>">
                <input type="text" class="inpt" placeholder="" name="gName" id="gName" maxlength="100" notNull="1" datatype=""
                       value="<c:if test="${!empty groupBuy }">${groupBuy.gName }</c:if>">
                <span class="red">活动名称最多输入50位汉字或100位字符</span>
            </div>
            <div class="noMoneyDiv">
                <div class="groupDiv">
                    <span class="font14"><em>*</em> 生效时间： </span>
                    <input type="text" class="inpt" name="gStartTime" id="gStartTime" notNull="1"
                           value="<c:if test="${!empty groupBuy}">${groupBuy.gStartTime }</c:if>"> 至
                    <input type="text" class="inpt" name="gEndTime" id="gEndTime" notNull="1"
                           value="<c:if test="${!empty groupBuy}">${groupBuy.gEndTime }</c:if>">
                    <span class="red">生效时间不能为空</span>
                </div>
                <div class="groupDiv">
                    <span class="font14"><em>*</em> 参团人数： </span>
                    <input type="text" class="inpt" name="gPeopleNum" notNull="1" id="gPeopleNum" maxlength="5"
                           datatype="^[0-9]{0,5}$"
                           value="<c:if test="${!empty groupBuy && !empty groupBuy.gPeopleNum && groupBuy.gPeopleNum > 0}">${groupBuy.gPeopleNum }</c:if>">
                    <span class="red">参团人数最多只能是大于0的5位数字</span>
                </div>
                <div class="groupDiv">
                    <span class="font14">商品限购： </span>
                    开启限购&nbsp;&nbsp;<input type="text" class="inpt" name="gMaxBuyNum" id="maxNum"
                                           style="width:142px;" maxlength="5"
                                           datatype="^[0-9]{0,5}$"
                                           value="<c:if test="${!empty groupBuy && !empty groupBuy.gMaxBuyNum && groupBuy.gMaxBuyNum > 0}">${groupBuy.gMaxBuyNum }</c:if>"> 件/人，
                    <span class="red" style="color:#000;">商品限购最多只能是大于0的5位数字</span>
                </div>
                <div class="groupDiv proPrices"
                     style="
                     <c:if test='${!empty groupBuy }'>
                     <c:if test='${!empty groupBuy.priceList }'>display:none;</c:if></c:if>">
                    <span class="font14"><em>*</em> 团购价： </span>
                    <input type="text" class="inpt" name="gPrice" id="gPrice" notNull="1"
                           maxlength="8"
                           datatype="^[0-9]{1,5}(\.\d{1,2})?$"
                           value="<c:if test="${!empty groupBuy && !empty groupBuy.gPrice && groupBuy.gPrice > 0}">${groupBuy.gPrice }</c:if>">
                    <span class="red">团购价最多只能是大于0的5位数</span>
                </div>
                <div class="packageDiv" id="createTable">
                    <div class="groupDiv">
                        <span class="font14"> </span>
                        <table class="table" style="width:auto;display:none;">
                            <thead>
                            <tr>
                                <th>是否参团</th>
                                <th>颜色</th>
                                <th>原价</th>
                                <th>拼团价</th>
                                <th>库存</th>
                            </tr>
                            </thead>
                            <tbody id="J_Tbody">
                            </tbody>
                            <tfoot>
                            <tr height="44px">
                                <td colspan="5">
                                    <div class="batch-opts">
                                        批量设置 <span class="js-batch-type" style="display: inline;">
										<a class="js-batch-price" href="javascript:;"
                                           errormsg="价格最多只能输入6位小数">团购价</a>
									</span>
                                        <span class="js-batch-form" style="display:none;">
                                            <input type="text" class="js-batch-txt input-mini" placeholder="" vali="" maxlength="10">
                                            <a href="javascript:;" class="js-batch-save">保存</a>
                                            <a href="javascript:;" class="js-batch-cancel">取消</a>
									</span>
                                    </div>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div class="groupDiv">
                <a href="javascript:editGroup();" class="addBtn">确定</a>
                <a href="mGroupBuy/index.do" style="cursor: pointer;color:white;" class="backBtn">返回</a>
            </div>
        </form>
    </c:if>
    <c:if test="${empty shoplist }">
        您的店铺已经设置了物流信息，<a href="javascript:void(0);" onclick="shopIndex();">请前往店铺管理添加新的店铺</a>
    </c:if>
</div>
<script src="/js/plugin/laydate/laydate.js" type="text/javascript" charset="utf-8"></script>
<script type="text/javascript">
    var shopId = $(".shopId").attr("id");
    $(".shopId").find("option[value=" + shopId + "]").attr("selected", true);
</script>
<script type="text/javascript" src="/js/mall/groupbuy/group_new_inven.js"></script>
<script type="text/javascript" src="/js/mall/groupbuy/groupbuy.js"></script>
</body>
</html>