import { Injectable } from '@angular/core';
import { regionesI, comunasI } from '../interfaces/regiones.interface';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

  private region: regionesI[] =
    [
      { id: 13, name: "Metropolitana de Santiago", },
      { id: 1, name: "Tarapacá", },
      { id: 2, name: "Antofagasta", },
      { id: 3, name: "Atacama", },
      { id: 4, name: "Coquimbo", },
      { id: 5, name: "Valparaíso", },
      { id: 6, name: "Libertador Gral. Bernardo O'Higgins", },
      { id: 7, name: "Maule" },
      { id: 8, name: "Biobío", },
      { id: 9, name: "la Araucanía", },
      { id: 10, name: "Los Lagos", },
      { id: 11, name: "Aisén del Gral. Carlos Ibáñez del Campo", },
      { id: 12, name: "Magallanes y de la Antártica Chilena", },
      { id: 14, name: "Los Ríos", },
      { id: 15, name: "Arica y Parinacota", },
      { id: 16, name: "Ñuble" },

    ]

  private comuna: comunasI[] =
    [
      { regionesId: 13, name: "Alhué", id: 13502 },
      { regionesId: 13, name: "Buin", id: 13402 },
      { regionesId: 13, name: "Calera de Tango", id: 13403 },
      { regionesId: 13, name: "Cerrillos", id: 13102 },
      { regionesId: 13, name: "Cerro Navia", id: 13103 },
      { regionesId: 13, name: "Colina", id: 13301 },
      { regionesId: 13, name: "Conchalí", id: 13104 },
      { regionesId: 13, name: "Curacaví", id: 13503 },
      { regionesId: 13, name: "El Bosque", id: 13105 },
      { regionesId: 13, name: "El Monte", id: 13602 },
      { regionesId: 13, name: "Estación Central", id: 13106 },
      { regionesId: 13, name: "Huechuraba", id: 13107 },
      { regionesId: 13, name: "Independencia", id: 13108 },
      { regionesId: 13, name: "Isla de Maipo", id: 13603 },
      { regionesId: 13, name: "La Cisterna", id: 13109 },
      { regionesId: 13, name: "La Florida", id: 13110 },
      { regionesId: 13, name: "La Granja", id: 13111 },
      { regionesId: 13, name: "La Pintana", id: 13112 },
      { regionesId: 13, name: "La Reina", id: 13113 },
      { regionesId: 13, name: "Lampa", id: 13302 },
      { regionesId: 13, name: "Las Condes", id: 13114 },
      { regionesId: 13, name: "Lo Barnechea", id: 13115 },
      { regionesId: 13, name: "Lo Espejo", id: 13116 },
      { regionesId: 13, name: "Lo Prado", id: 13117 },
      { regionesId: 13, name: "Macul", id: 13118 },
      { regionesId: 13, name: "Maipú", id: 13119 },
      { regionesId: 13, name: "María Pinto", id: 13504 },
      { regionesId: 13, name: "Melipilla", id: 13501 },
      { regionesId: 13, name: "Ñuñoa", id: 13120 },
      { regionesId: 13, name: "Padre Hurtado", id: 13604 },
      { regionesId: 13, name: "Paine", id: 13404 },
      { regionesId: 13, name: "Pedro Aguirre Cerda", id: 13121 },
      { regionesId: 13, name: "Peñaflor", id: 13605 },
      { regionesId: 13, name: "Peñalolén", id: 13122 },
      { regionesId: 13, name: "Pirque", id: 13202 },
      { regionesId: 13, name: "Providencia", id: 13123 },
      { regionesId: 13, name: "Pudahuel", id: 13124 },
      { regionesId: 13, name: "Puente Alto", id: 13201 },
      { regionesId: 13, name: "Quilicura", id: 13125 },
      { regionesId: 13, name: "Quinta Normal", id: 13126 },
      { regionesId: 13, name: "Recoleta", id: 13127 },
      { regionesId: 13, name: "Renca", id: 13128 },
      { regionesId: 13, name: "San Bernardo", id: 13401 },
      { regionesId: 13, name: "San Joaquín", id: 13129 },
      { regionesId: 13, name: "San José de Maipo", id: 13203 },
      { regionesId: 13, name: "San Miguel", id: 13130 },
      { regionesId: 13, name: "San Pedro", id: 13505 },
      { regionesId: 13, name: "San Ramón", id: 13131 },
      { regionesId: 13, name: "Santiago", id: 13101 },
      { regionesId: 13, name: "Talagante", id: 13601 },
      { regionesId: 13, name: "Til Til", id: 13303 },
      { regionesId: 13, name: "Vitacura", id: 13132 },

      { regionesId: 1, name: "Alto Hospicio", id: 1107 },
      { regionesId: 1, name: "Camiña", id: 1402 },
      { regionesId: 1, name: "Colchane", id: 1403 },
      { regionesId: 1, name: "Huara", id: 1404 },
      { regionesId: 1, name: "Iquique", id: 1101 },
      { regionesId: 1, name: "Pica", id: 1405 },
      { regionesId: 1, name: "Pozo Almonte", id: 1401 },

      { regionesId: 2, name: "Antofagasta", id: 2101 },
      { regionesId: 2, name: "Calama", id: 2201 },
      { regionesId: 2, name: "María Elena", id: 2302 },
      { regionesId: 2, name: "Mejillones", id: 2102 },
      { regionesId: 2, name: "Ollagüe", id: 2202 },
      { regionesId: 2, name: "San Pedro de Atacama", id: 2203 },
      { regionesId: 2, name: "Sierra Gorda", id: 2103 },
      { regionesId: 2, name: "Taltal", id: 2104 },
      { regionesId: 2, name: "Tocopilla", id: 2301 },

      { regionesId: 3, name: "Alto del Carmen", id: 3302 },
      { regionesId: 3, name: "Caldera", id: 3102 },
      { regionesId: 3, name: "Chañaral", id: 3201 },
      { regionesId: 3, name: "Copiapó", id: 3101 },
      { regionesId: 3, name: "Diego de Almagro", id: 3202 },
      { regionesId: 3, name: "Freirina", id: 3303 },
      { regionesId: 3, name: "Huasco", id: 3304 },
      { regionesId: 3, name: "Tierra Amarilla", id: 3103 },
      { regionesId: 3, name: "Vallenar", id: 3301 },

      { regionesId: 4, name: "Andacollo", id: 4103 },
      { regionesId: 4, name: "Canela", id: 4202 },
      { regionesId: 4, name: "Combarbalá", id: 4302 },
      { regionesId: 4, name: "Coquimbo", id: 4102 },
      { regionesId: 4, name: "Illapel", id: 4201 },
      { regionesId: 4, name: "La Higuera", id: 4104 },
      { regionesId: 4, name: "La Serena", id: 4101 },
      { regionesId: 4, name: "Los Vilos", id: 4203 },
      { regionesId: 4, name: "Monte Patria", id: 4303 },
      { regionesId: 4, name: "Ovalle", id: 4301 },
      { regionesId: 4, name: "Paihuano", id: 4105 },
      { regionesId: 4, name: "Punitaqui", id: 4304 },
      { regionesId: 4, name: "Río Hurtado", id: 4305 },
      { regionesId: 4, name: "Salamanca", id: 4204 },
      { regionesId: 4, name: "Vicuña", id: 4106 },


      { regionesId: 5, name: "Algarrobo", id: 5602 },
      { regionesId: 5, name: "Cabildo", id: 5402 },
      { regionesId: 5, name: "Calle Larga", id: 5302 },
      { regionesId: 5, name: "Cartagena", id: 5603 },
      { regionesId: 5, name: "Casablanca", id: 5102 },
      { regionesId: 5, name: "Catemu", id: 5702 },
      { regionesId: 5, name: "Concón", id: 5103 },
      { regionesId: 5, name: "El Quisco", id: 5604 },
      { regionesId: 5, name: "El Tabo", id: 5605 },
      { regionesId: 5, name: "Hijuelas", id: 5503 },
      { regionesId: 5, name: "Isla de Pascua", id: 5201 },
      { regionesId: 5, name: "Juan Fernández", id: 5104 },
      { regionesId: 5, name: "La Calera", id: 5502 },
      { regionesId: 5, name: "La Cruz", id: 5504 },
      { regionesId: 5, name: "La Ligua", id: 5401 },
      { regionesId: 5, name: "Limache", id: 5802 },
      { regionesId: 5, name: "Llay-Llay", id: 5703 },
      { regionesId: 5, name: "Los Andes", id: 5301 },
      { regionesId: 5, name: "Nogales", id: 5506 },
      { regionesId: 5, name: "Olmué", id: 5803 },
      { regionesId: 5, name: "Panquehue", id: 5704 },
      { regionesId: 5, name: "Papudo", id: 5403 },
      { regionesId: 5, name: "Petorca", id: 5404 },
      { regionesId: 5, name: "Puchuncaví", id: 5105 },
      { regionesId: 5, name: "Putaendo", id: 5705 },
      { regionesId: 5, name: "Quillota", id: 5501 },
      { regionesId: 5, name: "Quilpué", id: 5801 },
      { regionesId: 5, name: "Quintero", id: 5107 },
      { regionesId: 5, name: "Rinconada", id: 5303 },
      { regionesId: 5, name: "San Antonio", id: 5601 },
      { regionesId: 5, name: "San Esteban", id: 5304 },
      { regionesId: 5, name: "San Felipe", id: 5701 },
      { regionesId: 5, name: "Santa María", id: 5706 },
      { regionesId: 5, name: "Santo Domingo", id: 5606 },
      { regionesId: 5, name: "Valparaíso", id: 5101 },
      { regionesId: 5, name: "Villa Alemana", id: 5804 },
      { regionesId: 5, name: "Viña del Mar", id: 5109 },
      { regionesId: 5, name: "Zapallar", id: 5405 },

      { regionesId: 6, name: "Chépica", id: 6302 },
      { regionesId: 6, name: "Chimbarongo", id: 6303 },
      { regionesId: 6, name: "Codegua", id: 6102 },
      { regionesId: 6, name: "Coinco", id: 6103 },
      { regionesId: 6, name: "Coltauco", id: 6104 },
      { regionesId: 6, name: "Doñihue", id: 6105 },
      { regionesId: 6, name: "Graneros", id: 6106 },
      { regionesId: 6, name: "La Estrella", id: 6202 },
      { regionesId: 6, name: "Las Cabras", id: 6107 },
      { regionesId: 6, name: "Litueche", id: 6203 },
      { regionesId: 6, name: "Lolol", id: 6304 },
      { regionesId: 6, name: "Machalí", id: 6108 },
      { regionesId: 6, name: "Malloa", id: 6109 },
      { regionesId: 6, name: "Marchihue", id: 6204 },
      { regionesId: 6, name: "Mostazal", id: 6110 },
      { regionesId: 6, name: "Nancagua", id: 6305 },
      { regionesId: 6, name: "Navidad", id: 6205 },
      { regionesId: 6, name: "Olivar", id: 6111 },
      { regionesId: 6, name: "Palmilla", id: 6306 },
      { regionesId: 6, name: "Paredones", id: 6206 },
      { regionesId: 6, name: "Peralillo", id: 6307 },
      { regionesId: 6, name: "Peumo", id: 6112 },
      { regionesId: 6, name: "Pichidegua", id: 6113 },
      { regionesId: 6, name: "Pichilemu", id: 6201 },
      { regionesId: 6, name: "Placilla", id: 6308 },
      { regionesId: 6, name: "Pumanque", id: 6309 },
      { regionesId: 6, name: "Quinta de Tilcoco", id: 6114 },
      { regionesId: 6, name: "Rancagua", id: 6101 },
      { regionesId: 6, name: "Rengo", id: 6115 },
      { regionesId: 6, name: "Requínoa", id: 6116 },
      { regionesId: 6, name: "San Fernando", id: 6301 },
      { regionesId: 6, name: "San Vicente", id: 6117 },
      { regionesId: 6, name: "Santa Cruz", id: 6310 },

      { regionesId: 7, name: "Cauquenes", id: 7201 },
      { regionesId: 7, name: "Chanco", id: 7202 },
      { regionesId: 7, name: "Colbún", id: 7402 },
      { regionesId: 7, name: "Constitución", id: 7102 },
      { regionesId: 7, name: "Curepto", id: 7103 },
      { regionesId: 7, name: "Curicó", id: 7301 },
      { regionesId: 7, name: "Empedrado", id: 7104 },
      { regionesId: 7, name: "Hualañé", id: 7302 },
      { regionesId: 7, name: "Licantén", id: 7303 },
      { regionesId: 7, name: "Linares", id: 7401 },
      { regionesId: 7, name: "Longaví", id: 7403 },
      { regionesId: 7, name: "Maule", id: 7105 },
      { regionesId: 7, name: "Molina", id: 7304 },
      { regionesId: 7, name: "Parral", id: 7404 },
      { regionesId: 7, name: "Pelarco", id: 7106 },
      { regionesId: 7, name: "Pelluhue", id: 7203 },
      { regionesId: 7, name: "Pencahue", id: 7107 },
      { regionesId: 7, name: "Rauco", id: 7305 },
      { regionesId: 7, name: "Retiro", id: 7405 },
      { regionesId: 7, name: "Río Claro", id: 7108 },
      { regionesId: 7, name: "Romeral", id: 7306 },
      { regionesId: 7, name: "Sagrada Familia", id: 7307 },
      { regionesId: 7, name: "San Clemente", id: 7109 },
      { regionesId: 7, name: "San Javier", id: 7406 },
      { regionesId: 7, name: "San Rafael", id: 7110 },
      { regionesId: 7, name: "Talca", id: 7101 },
      { regionesId: 7, name: "Teno", id: 7308 },
      { regionesId: 7, name: "Vichuquén", id: 7309 },
      { regionesId: 7, name: "Villa Alegre", id: 7407 },
      { regionesId: 7, name: "Yerbas Buenas", id: 7408 },

      { regionesId: 8, name: "Alto Biobío", id: 8314 },
      { regionesId: 8, name: "Antuco", id: 8302 },
      { regionesId: 8, name: "Arauco", id: 8202 },
      { regionesId: 8, name: "Cabrero", id: 8303 },
      { regionesId: 8, name: "Cañete", id: 8203 },
      { regionesId: 8, name: "Chiguayante", id: 8103 },
      { regionesId: 8, name: "Concepción", id: 8101 },
      { regionesId: 8, name: "Contulmo", id: 8204 },
      { regionesId: 8, name: "Coronel", id: 8102 },
      { regionesId: 8, name: "Curanilahue", id: 8205 },
      { regionesId: 8, name: "Florida", id: 8104 },
      { regionesId: 8, name: "Hualpén", id: 8112 },
      { regionesId: 8, name: "Hualqui", id: 8105 },
      { regionesId: 8, name: "Laja", id: 8304 },
      { regionesId: 8, name: "Lebu", id: 8201 },
      { regionesId: 8, name: "Los Álamos", id: 8206 },
      { regionesId: 8, name: "Los Ángeles", id: 8301 },
      { regionesId: 8, name: "Lota", id: 8106 },
      { regionesId: 8, name: "Mulchén", id: 8305 },
      { regionesId: 8, name: "Nacimiento", id: 8306 },
      { regionesId: 8, name: "Negrete", id: 8307 },
      { regionesId: 8, name: "Penco", id: 8107 },
      { regionesId: 8, name: "Quilaco", id: 8308 },
      { regionesId: 8, name: "Quilleco", id: 8309 },
      { regionesId: 8, name: "San Pedro de La Paz", id: 8108 },
      { regionesId: 8, name: "San Rosendo", id: 8310 },
      { regionesId: 8, name: "Santa Bárbara", id: 8311 },
      { regionesId: 8, name: "Santa Juana", id: 8109 },
      { regionesId: 8, name: "Talcahuano", id: 8110 },
      { regionesId: 8, name: "Tirúa", id: 8207 },
      { regionesId: 8, name: "Tomé", id: 8111 },
      { regionesId: 8, name: "Tucapel", id: 8312 },
      { regionesId: 8, name: "Yumbel", id: 8313 },

      { regionesId: 9, name: "Angol", id: 9201 },
      { regionesId: 9, name: "Carahue", id: 9102 },
      { regionesId: 9, name: "Cholchol", id: 9121 },
      { regionesId: 9, name: "Collipulli", id: 9202 },
      { regionesId: 9, name: "Cunco", id: 9103 },
      { regionesId: 9, name: "Curacautín", id: 9203 },
      { regionesId: 9, name: "Curarrehue", id: 9104 },
      { regionesId: 9, name: "Ercilla", id: 9204 },
      { regionesId: 9, name: "Freire", id: 9105 },
      { regionesId: 9, name: "Galvarino", id: 9106 },
      { regionesId: 9, name: "Gorbea", id: 9107 },
      { regionesId: 9, name: "Lautaro", id: 9108 },
      { regionesId: 9, name: "Loncoche", id: 9109 },
      { regionesId: 9, name: "Lonquimay", id: 9205 },
      { regionesId: 9, name: "Los Sauces", id: 9206 },
      { regionesId: 9, name: "Lumaco", id: 9207 },
      { regionesId: 9, name: "Melipeuco", id: 9110 },
      { regionesId: 9, name: "Nueva Imperial", id: 9111 },
      { regionesId: 9, name: "Padre Las Casas", id: 9112 },
      { regionesId: 9, name: "Perquenco", id: 9113 },
      { regionesId: 9, name: "Pitrufquén", id: 9114 },
      { regionesId: 9, name: "Pucón", id: 9115 },
      { regionesId: 9, name: "Purén", id: 9208 },
      { regionesId: 9, name: "Renaico", id: 9209 },
      { regionesId: 9, name: "Saavedra", id: 9116 },
      { regionesId: 9, name: "Temuco", id: 9101 },
      { regionesId: 9, name: "Teodoro Schmidt", id: 9117 },
      { regionesId: 9, name: "Toltén", id: 9118 },
      { regionesId: 9, name: "Traiguén", id: 9210 },
      { regionesId: 9, name: "Victoria", id: 9211 },
      { regionesId: 9, name: "Vilcún", id: 9119 },
      { regionesId: 9, name: "Villarrica", id: 9120 },

      { regionesId: 10, name: "Ancud", id: 10202 },
      { regionesId: 10, name: "Calbuco", id: 10102 },
      { regionesId: 10, name: "Castro", id: 10201 },
      { regionesId: 10, name: "Chaitén", id: 10401 },
      { regionesId: 10, name: "Chonchi", id: 10203 },
      { regionesId: 10, name: "Cochamó", id: 10103 },
      { regionesId: 10, name: "Curaco de Vélez", id: 10204 },
      { regionesId: 10, name: "Dalcahue", id: 10205 },
      { regionesId: 10, name: "Fresia", id: 10104 },
      { regionesId: 10, name: "Frutillar", id: 10105 },
      { regionesId: 10, name: "Futaleufú", id: 10402 },
      { regionesId: 10, name: "Hualaihué", id: 10403 },
      { regionesId: 10, name: "Llanquihue", id: 10107 },
      { regionesId: 10, name: "Los Muermos", id: 10106 },
      { regionesId: 10, name: "Maullín", id: 10108 },
      { regionesId: 10, name: "Osorno", id: 10301 },
      { regionesId: 10, name: "Palena", id: 10404 },
      { regionesId: 10, name: "Puerto Montt", id: 10101 },
      { regionesId: 10, name: "Puerto Octay", id: 10302 },
      { regionesId: 10, name: "Puerto Varas", id: 10109 },
      { regionesId: 10, name: "Puqueldón", id: 10206 },
      { regionesId: 10, name: "Purranque", id: 10303 },
      { regionesId: 10, name: "Puyehue", id: 10304 },
      { regionesId: 10, name: "Queilén", id: 10207 },
      { regionesId: 10, name: "Quellón", id: 10208 },
      { regionesId: 10, name: "Quemchi", id: 10209 },
      { regionesId: 10, name: "Quinchao", id: 10210 },
      { regionesId: 10, name: "Río Negro", id: 10305 },
      { regionesId: 10, name: "San Juan de la Costa", id: 10306 },
      { regionesId: 10, name: "San Pablo", id: 10307 },

      { regionesId: 11, name: "Aysén", id: 11201 },
      { regionesId: 11, name: "Chile Chico", id: 11401 },
      { regionesId: 11, name: "Cisnes", id: 11202 },
      { regionesId: 11, name: "Cochrane", id: 11301 },
      { regionesId: 11, name: "Coyhaique", id: 11101 },
      { regionesId: 11, name: "Guaitecas", id: 11203 },
      { regionesId: 11, name: "Lago Verde", id: 11102 },
      { regionesId: 11, name: "O'Higgins", id: 11302 },
      { regionesId: 11, name: "Río Ibáñez", id: 11402 },
      { regionesId: 11, name: "Tortel", id: 11303 },


      { regionesId: 12, name: "Antártica", id: 12202 },
      { regionesId: 12, name: "Cabo de Hornos", id: 12201 },
      { regionesId: 12, name: "Laguna Blanca", id: 12102 },
      { regionesId: 12, name: "Natales", id: 12401 },
      { regionesId: 12, name: "Porvenir", id: 12301 },
      { regionesId: 12, name: "Primavera", id: 12302 },
      { regionesId: 12, name: "Punta Arenas", id: 12101 },
      { regionesId: 12, name: "Río Verde", id: 12103 },
      { regionesId: 12, name: "San Gregorio", id: 12104 },
      { regionesId: 12, name: "Timaukel", id: 12303 },
      { regionesId: 12, name: "Torres del Paine", id: 12402 },

      { regionesId: 14, name: "Corral", id: 14102 },
      { regionesId: 14, name: "Futrono", id: 14202 },
      { regionesId: 14, name: "La Unión", id: 14201 },
      { regionesId: 14, name: "Lago Ranco", id: 14203 },
      { regionesId: 14, name: "Lanco", id: 14103 },
      { regionesId: 14, name: "Los Lagos", id: 14104 },
      { regionesId: 14, name: "Máfil", id: 14105 },
      { regionesId: 14, name: "Mariquina", id: 14106 },
      { regionesId: 14, name: "Paillaco", id: 14107 },
      { regionesId: 14, name: "Panguipulli", id: 14108 },
      { regionesId: 14, name: "Río Bueno", id: 14204 },
      { regionesId: 14, name: "Valdivia", id: 14101 },

      { regionesId: 15, name: "Arica", id: 15101 },
      { regionesId: 15, name: "Camarones", id: 15102 },
      { regionesId: 15, name: "General Lagos", id: 15202 },
      { regionesId: 15, name: "Putre", id: 15201 },

      { regionesId: 16, name: "Bulnes", id: 16102 },
      { regionesId: 16, name: "Chillán", id: 16101 },
      { regionesId: 16, name: "Chillán Viejo", id: 16103 },
      { regionesId: 16, name: "Cobquecura", id: 16202 },
      { regionesId: 16, name: "Coelemu", id: 16203 },
      { regionesId: 16, name: "Coihueco", id: 16302 },
      { regionesId: 16, name: "El Carmen", id: 16104 },
      { regionesId: 16, name: "Ninhue", id: 16204 },
      { regionesId: 16, name: "Ñiquén", id: 16303 },
      { regionesId: 16, name: "Pemuco", id: 16105 },
      { regionesId: 16, name: "Pinto", id: 16106 },
      { regionesId: 16, name: "Portezuelo", id: 16205 },
      { regionesId: 16, name: "Quillón", id: 16107 },
      { regionesId: 16, name: "Quirihue", id: 16201 },
      { regionesId: 16, name: "Ránquil", id: 16206 },
      { regionesId: 16, name: "San Carlos", id: 16301 },
      { regionesId: 16, name: "San Fabián", id: 16304 },
      { regionesId: 16, name: "San Ignacio", id: 16108 },
      { regionesId: 16, name: "San Nicolás", id: 16305 },
      { regionesId: 16, name: "Treguaco", id: 16207 },
      { regionesId: 16, name: "Yungay", id: 16109 },

    ]


  getRegion(): regionesI[] {
    return this.region;
  }

  getComunas(): comunasI[] {
    return this.comuna;
  }


}

