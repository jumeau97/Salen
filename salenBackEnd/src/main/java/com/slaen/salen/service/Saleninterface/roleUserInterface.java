package com.slaen.salen.service.Saleninterface;

import java.util.List;

import com.slaen.salen.entity.roleUser;

public interface roleUserInterface {

    public roleUser addRoleUser(roleUser roleUser);

    public List<roleUser> listeRoleUser();

    public roleUser listeById(long id);

    public roleUser UpdateRoleUser(roleUser roleUser);

    public void deleteRoleUser(long id);

}
