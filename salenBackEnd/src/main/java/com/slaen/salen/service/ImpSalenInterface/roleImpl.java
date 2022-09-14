package com.slaen.salen.service.ImpSalenInterface;

import com.slaen.salen.entity.role;
import com.slaen.salen.repository.roleRepository;
import com.slaen.salen.service.Saleninterface.roleInterface;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class roleImpl implements roleInterface {
    private roleRepository roleRepository;

    public roleImpl(roleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public role addRole(role role) {
        return roleRepository.save(role);
    }

    @Override
    public List<role> listeRole() {
        return roleRepository.findAll();
    }

    @Override
    public role listeById(long id) {
        return roleRepository.findById(id).get();
    }

    @Override
    public role UpdateRole(role role) {
        return roleRepository.save(role);
    }

    @Override
    public void deleteRole(long id) {
        roleRepository.deleteById(id);
    }

}
