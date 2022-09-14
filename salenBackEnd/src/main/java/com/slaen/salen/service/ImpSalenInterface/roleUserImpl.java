package com.slaen.salen.service.ImpSalenInterface;

import com.slaen.salen.entity.roleUser;
// import com.slaen.salen.repository.roleRepository;
import com.slaen.salen.repository.roleUserRepository;
import com.slaen.salen.service.Saleninterface.roleUserInterface;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class roleUserImpl implements roleUserInterface {

    private roleUserRepository roleUserRepository;

    public roleUserImpl(roleUserRepository roleUserRepository) {
        this.roleUserRepository = roleUserRepository;
    }

    @Override
    public roleUser addRoleUser(roleUser roleUser) {
        return roleUserRepository.save(roleUser);
    }

    @Override
    public List<roleUser> listeRoleUser() {
        return roleUserRepository.findAll();
    }

    @Override
    public roleUser listeById(long id) {
        return roleUserRepository.findById(id).get();
    }

    @Override
    public roleUser UpdateRoleUser(roleUser roleUser) {
        return roleUserRepository.save(roleUser);
    }

    @Override
    public void deleteRoleUser(long id) {
        roleUserRepository.deleteById(id);
    }

}
