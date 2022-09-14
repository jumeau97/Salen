package com.slaen.salen.service.Saleninterface;

import java.util.List;
import java.util.Optional;

import com.slaen.salen.entity.role;

public interface roleInterface {

    public role addRole(role role);

    public List<role> listeRole();

    public role listeById(long id);

    public role UpdateRole(role role);

    public void deleteRole(long id);



}
