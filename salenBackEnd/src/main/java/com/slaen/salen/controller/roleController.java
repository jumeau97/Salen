package com.slaen.salen.controller;

import java.util.List;

import com.slaen.salen.entity.role;
import com.slaen.salen.service.Saleninterface.roleInterface;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/role")
public class roleController {

    private roleInterface roleInterface;

    public roleController(roleInterface roleInterface) {
        this.roleInterface = roleInterface;
    }

    @GetMapping(value = "/listeRole")
    public List<role> listeRole() {
        return roleInterface.listeRole();
    }

    @PostMapping(value = "/addRole")
    public role addRole(@RequestBody role role) {
        return roleInterface.addRole(role);
    }

    @GetMapping(value = "/listeById/{id}")
    public role ListeById(@PathVariable(name = "id") long id) {
        return roleInterface.listeById(id);
    }

    @PutMapping(value = "/updateRole/{id}")
    public role updateRole(@PathVariable(name = "id") Long id, @RequestBody role role) {
        role.setIdRole(id);
        return roleInterface.UpdateRole(role);
    }

    @DeleteMapping(value = "deleteById/{id}")
    public void deleteById(@PathVariable(name = "id") Long id) {
        roleInterface.deleteRole(id);
    }

}
