package com.gt.mall.service.web.purchase;

import com.gt.mall.base.BaseService;
import com.gt.mall.entity.purchase.PurchaseCompanyMode;
import com.gt.mall.util.PageUtil;

import java.util.Map;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author yangqian
 * @since 2017-07-31
 */
public interface PurchaseCompanyModeService extends BaseService<PurchaseCompanyMode > {
    /**
     * 分页查询数据
     * @param parms
     * @return
     */
    PageUtil findList(Map<String,Object> parms);

}
