package com.gt.mall.bean;

import java.util.Date;

public class AlipayUser {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_alipay_user.id
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_alipay_user.bus_id
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    private Integer busId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_alipay_user.partner
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    private String partner;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_alipay_user.seller_id
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    private String sellerId;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_alipay_user.pay_key
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    private String payKey;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_alipay_user.ctime
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    private Date ctime;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column t_alipay_user.status
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    private Integer status;
    
    private String sellerEmail;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_alipay_user.id
     *
     * @return the value of t_alipay_user.id
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_alipay_user.id
     *
     * @param id the value for t_alipay_user.id
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_alipay_user.bus_id
     *
     * @return the value of t_alipay_user.bus_id
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public Integer getBusId() {
        return busId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_alipay_user.bus_id
     *
     * @param busId the value for t_alipay_user.bus_id
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public void setBusId(Integer busId) {
        this.busId = busId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_alipay_user.partner
     *
     * @return the value of t_alipay_user.partner
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public String getPartner() {
        return partner;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_alipay_user.partner
     *
     * @param partner the value for t_alipay_user.partner
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public void setPartner(String partner) {
        this.partner = partner == null ? null : partner.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_alipay_user.seller_id
     *
     * @return the value of t_alipay_user.seller_id
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public String getSellerId() {
        return sellerId;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_alipay_user.seller_id
     *
     * @param sellerId the value for t_alipay_user.seller_id
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public void setSellerId(String sellerId) {
        this.sellerId = sellerId == null ? null : sellerId.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_alipay_user.pay_key
     *
     * @return the value of t_alipay_user.pay_key
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public String getPayKey() {
        return payKey;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_alipay_user.pay_key
     *
     * @param payKey the value for t_alipay_user.pay_key
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public void setPayKey(String payKey) {
        this.payKey = payKey == null ? null : payKey.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_alipay_user.ctime
     *
     * @return the value of t_alipay_user.ctime
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public Date getCtime() {
        return ctime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_alipay_user.ctime
     *
     * @param ctime the value for t_alipay_user.ctime
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public void setCtime(Date ctime) {
        this.ctime = ctime;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column t_alipay_user.status
     *
     * @return the value of t_alipay_user.status
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public Integer getStatus() {
        return status;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column t_alipay_user.status
     *
     * @param status the value for t_alipay_user.status
     *
     * @mbggenerated Fri Dec 02 14:46:17 CST 2016
     */
    public void setStatus(Integer status) {
        this.status = status;
    }

	public String getSellerEmail() {
		return sellerEmail;
	}

	public void setSellerEmail(String sellerEmail) {
		this.sellerEmail = sellerEmail;
	}
}