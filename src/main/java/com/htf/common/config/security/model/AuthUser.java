package com.htf.common.config.security.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.htf.common.utils.NullUtil;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * @author acumes
 * @date 2018/8/4 14:13
 */
public class AuthUser extends AbstractAuthUser {

    /**
     * 用户默认角色
     */
    private static final String TRIP_USER_ROLE = "ROLE_USER";
    /**
     * id
     */
    private String id;
    /**
     * 手机号
     */
    private String mobile;

    private String loginName;
    /**
     * 密码
     */
    private String password;
    /**
     * 冻结
     */
    private String enabled;

    /**
     * 權限
     */
    private List<String> permissions;


    public AuthUser(){}

    public AuthUser(
            String id,
        String loginName,
        String password,
        String enabled,
        String mobile,
        List<String> permissions
    ) {
        this.id = id;
        this.loginName = loginName;
        this.password = password;
        this.enabled = enabled;
        this.mobile = mobile;
        this.permissions = permissions;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public List<String> getPermissions() {
        return permissions;
    }

    public void setPermissions(List<String> permissions) {
        this.permissions = permissions;
    }

    @Override
    public boolean isEnabled() {

        return "1".equals(this.enabled) ? true : false;
    }

    @Override
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEnabled() {
        return enabled;
    }

    public void setEnabled(String enabled) {
        this.enabled = enabled;
    }

    @Override
    public String getUsername() {
        return loginName;
    }

    @Override
    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<GrantedAuthority> authorities = new HashSet<>();
        if(NullUtil.hasItem(this.getPermissions())){
            for(String role : this.getPermissions()){
                authorities.add(new SimpleGrantedAuthority("ROLE_" + role.toUpperCase().replace(":","")));
            }
        }
//        authorities.add(new SimpleGrantedAuthority(TRIP_USER_ROLE));

        return authorities;
    }



}
