// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  mairieurl:"http://localhost:9012/salen/api/mairie",
  
  communeurl:"http://localhost:9012/salen/api/commune" ,
  marcheurl:"http://localhost:9012/salen/api/marcher" ,
  utilisateururl:"http://localhost:9012/salen/api/utilisateur" ,
  marchandurl:"http://localhost:9012/salen/api/marchand" ,
  roleurl:"http://localhost:9012/salen/api/role" ,
  hostName:"http://localhost:9012/salen",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
