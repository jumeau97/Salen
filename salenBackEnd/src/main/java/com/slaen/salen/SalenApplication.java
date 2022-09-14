package com.slaen.salen;

import com.slaen.salen.entity.*;
import com.slaen.salen.repository.*;
import com.slaen.salen.service.ImpSalenInterface.ImplInitService;
import com.slaen.salen.service.Saleninterface.InterfaceInitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Date;

@SpringBootApplication
public class SalenApplication implements CommandLineRunner {
	@Autowired
	private InterfaceInitService interfaceInitService;

	private RegionRepository regionRepository;
	private CercleRepository cercleRepository;
	private RepositoryRestConfiguration repositoryRestConfiguration;
	private CommuneRepository communeRepository;
	private MairieRepository mairieRepository;
	private PlaceRepository placeRepository;
	private UtilisateurRepository utilisateurRepository;
	private MarcherRepository marcherRepository;
	private roleRepository roleRepository;
	private MarchandRepository marchandRepository;
	private AffecterPlaceUtilisateurRepository affecterPlaceUtilisateurRepository;
	private AffecterPlaceMarchandRepository affecterPlaceMarchandRepository;

	public SalenApplication(RegionRepository regionRepository, CercleRepository cercleRepository,
			RepositoryRestConfiguration repositoryRestConfiguration, CommuneRepository communeRepository,
			MairieRepository mairieRepository, PlaceRepository placeRepository,
			UtilisateurRepository utilisateurRepository, MarcherRepository marcherRepository,
			roleRepository roleRepository, MarchandRepository marchandRepository, AffecterPlaceUtilisateurRepository affecterPlaceUtilisateurRepository,
							AffecterPlaceMarchandRepository affecterPlaceMarchandRepository) {
		this.regionRepository = regionRepository;
		this.cercleRepository = cercleRepository;
		this.repositoryRestConfiguration = repositoryRestConfiguration;
		this.communeRepository = communeRepository;
		this.mairieRepository = mairieRepository;
		this.placeRepository = placeRepository;
		this.utilisateurRepository = utilisateurRepository;
		this.marcherRepository = marcherRepository;
		this.roleRepository = roleRepository;
		this.marchandRepository= marchandRepository;
		this.affecterPlaceUtilisateurRepository=affecterPlaceUtilisateurRepository;
		this.affecterPlaceMarchandRepository=affecterPlaceMarchandRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(SalenApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		/*Marchand marchand1=marchandRepository.save(new Marchand("COULIBALY", "Oumou", new Date(), "74845276"));
		Marchand marchand2=marchandRepository.save(new Marchand("TRAORE", "Amadou", new Date(), "74845276"));
		Marchand marchand3=marchandRepository.save(new Marchand("COULIBALY", "Adama", new Date(), "74845276"));
		Marchand marchand4=marchandRepository.save(new Marchand("SANOGO", "Bourama", new Date(), "74845276"));
		repositoryRestConfiguration.exposeIdsFor(Region.class, Cercle.class);*/

		Region region1 = regionRepository.save(new Region("Kayes"));
		Region region2 = regionRepository.save(new Region("Koulikoro"));
		Region region3 = regionRepository.save(new Region("Sikasso"));
		Region region4 = regionRepository.save(new Region("Segou"));
		Region region5 = regionRepository.save(new Region("Mopti"));
		Region region6 = regionRepository.save(new Region("Gao"));
		Region region7 = regionRepository.save(new Region("Tombouctou"));
		Region region8 = regionRepository.save(new Region("Kidal"));
		Region region9 = regionRepository.save(new Region("Taoudeni"));
		Region region10 = regionRepository.save(new Region("Tessalite"));
		Region region11 = regionRepository.save(new Region("District de Bamako"));

		Cercle cercle1 = cercleRepository.save(new Cercle("Bamako", region1));
		Cercle cercle2= cercleRepository.save(new Cercle("Koulikoro", region2));


		// commune de koulikoro
		Commune commune7 = communeRepository.save(new Commune(" Dinandougou", cercle2));
		Commune commune8 = communeRepository.save(new Commune(" Doumba", cercle2));
		Commune commune9 = communeRepository.save(new Commune(" Koula", cercle2));
		Commune commune10 = communeRepository.save(new Commune("koulikoro", cercle2));
		Commune commune11= communeRepository.save(new Commune("MÃ©guÃ©tan", cercle2));
		Commune commune12= communeRepository.save(new Commune("Nyamina", cercle2));
		Commune commune13= communeRepository.save(new Commune("Sirakorola", cercle2));
		Commune commune14 = communeRepository.save(new Commune("Tienfala", cercle2));
		Commune commune15 = communeRepository.save(new Commune("Tienfala", cercle2));



		Mairie mairie1 = mairieRepository.save(new Mairie("CP Koulikoro", "Koulikoro gare", "Principale", commune10));
		//Mairie mairie2 = mairieRepository.save(new Mairie("Mairie de Koulikoroba", "Koulikoroba", "Secondaire", commune10));
		//Mairie mairie3 = mairieRepository.save(new Mairie("Mairie Senou", "Faladie", "Secondaire", commune6));
		//Mairie mairie4 = mairieRepository
		//		.save(new Mairie("Mairie Banankabougou", "Banankabougou", "Secondaire", commune6));

		Marcher marcher1 = marcherRepository.save(new Marcher("Marcher de koulikoro", mairie1));
		//Marcher marcher2 = marcherRepository.save(new Marcher("Marcher de souban", mairie1));

		//Mairie mairie1 = mairieRepository.save(new Mairie("Mairie Sogoniko", "Sogoniko", "Principale", commune10));
		Utilisateur user0=utilisateurRepository.save(new Utilisateur("BAH", "Nouhoum dit Goura", "Koulikoro","123456", "79248897", "goura@gmail.com",
				 "goura", "123456",mairie1, "super_admin"));
		/*Utilisateur user1=utilisateurRepository.save(new Utilisateur("TAMBOURA", "Nouhoum", "Koulikoroba", "123","87 97 65 33", "ntam@gmail.com",
				 "boss1","123456", mairie2, "admin"));
		Utilisateur user2=utilisateurRepository.save(new Utilisateur("DIARRA", "Mamadou", "Koulikoroba","123", "88 97 00 33", "ma@gmail.com",
				 "boss2", "123456",mairie1, "recouvreur"));*/


		roleRepository.save(new role("admin"));
		roleRepository.save(new role("recouvreur"));

		interfaceInitService.initJour();

//		interfaceInitService.initAffectationMP();
		interfaceInitService.initTicket();

	}

}
