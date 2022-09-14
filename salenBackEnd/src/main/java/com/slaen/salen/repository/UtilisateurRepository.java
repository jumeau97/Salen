package com.slaen.salen.repository;

import com.slaen.salen.entity.AffecterPlaceUtilisateur;
import com.slaen.salen.entity.Mairie;
import com.slaen.salen.entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource
@CrossOrigin("*")
public interface UtilisateurRepository extends JpaRepository<Utilisateur, Long> {

    // public Page<Utilisateur> listeUtilisateurByPage(Pageable pageable);
    Utilisateur findByCodeUtilisateur(String code);


    // @Query(value = "FROM Utilisateur u where u.username=:login and
    // u.password=:password")
    public Utilisateur findByUsernameAndPassword(@Param(value = "login") String login,
            @Param(value = "password") String password);

    public Utilisateur findByUsernameAndPasswordAndRole(@Param(value = "login") String login,
                                                 @Param(value = "password") String password,
                                                        @Param(value="role") String role);


//    @Query("from Utilisateur u where u.role='recouvreur'")

    public List<Utilisateur> findUtilisateurByRole(String role);

   // Afficher par role et mairie
    @Query("SELECT u FROM Utilisateur  u WHERE u.role=:role AND u.mairie.idMairie=:mairie")
    List<Utilisateur> findAllByRoleAndMairie(@Param(value = "role") String role, @Param(value = "mairie")long mairie);




}
