// ------ TEMPLATES VARIABLES ------
const templateMetas = document.querySelector(".template-metas").content,
fragmento = document.createDocumentFragment();

//------ METAS PERSONALES VARIABLES ------
const cajaMetaPersonales = document.querySelector(".caja-metas-personales"),
  botonesMetasPersonales = document.querySelectorAll(".boton-personal"),
  separadorMetasPersonales = document.querySelector(".separador-personales");

let metasPersonales;

for(let i = 0; i <= (document.querySelectorAll(".boton-personal").length - 1); i++) {
  let divMetasPersonales  = document.createElement("div");
  divMetasPersonales.classList.add("metas-personales");

  cajaMetaPersonales.appendChild(divMetasPersonales);
}

metasPersonales = document.querySelectorAll(".metas-personales");

//Primera Meta personal variables
  const infoPrimeraMetapersonal = [
    {
      pregunta: "OBJETIVO O META",
      respuesta: [ "Enseñar en redes sociales, compartir mis conocimientos.",
      ]
    },
    {
      pregunta: "TIEMPO",
      respuesta: ["Largo plazo",
      ]
    },
    {
      pregunta: "ESTRATEGIA",
      respuesta: ["<span>*Crear mi página para subir mis programas</span>\
      <span>*Subir videos tutoriales</span>\
      <span>*Exposición de temas</span>",
      ],
    },
    {
      pregunta: "APOYO EXTERNO",
      respuesta: ["Mi computadora",
      ]
    }
  ];

  infoPrimeraMetapersonal.forEach(me => {
    templateMetas.querySelector(".pregunta").textContent = me.pregunta;
    templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
    
    let clone1 = document.importNode(templateMetas, true);
    fragmento.appendChild(clone1);
  });

document.querySelectorAll(".metas-personales")[0].appendChild(fragmento);

//Segunda meta personal variables
const infoSegundaMetapersonal = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Crear campañas de ayuda a los animales.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Sensibilizando a la sociedad y haciendo conciencia por medio de videos</span>\
      <span>*Generar recursos para poder sustentar las campañas de ayuda (haciendo actividades para recaudar fondos)</span>\
      <span>*Crear un refugio para perros donde se plantee la adopción a familias aptas.</span>\
      <span>*Buscar voluntarios para apoyar</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*Voluntarios</span>\
    <span>*Recurso externo</span>\
    <span>*Espacio o lugar</span>",
    ]
  }
];

infoSegundaMetapersonal.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-personales")[1].appendChild(fragmento);

//Tercera meta personal variables
const infoTerceraMetapersonal = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Ser fuerte mentalmente, emocionalmente y tener seguridad en mí mismo.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Mediano plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Generar seguridad y confianza en mí mismo</span>\
      <span>*Verbalizando frases positivas sobre mí mismo</span>\
      <span>*Creer en mis capacidades y habilidades</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*Mi psicóloga</span>",
    ]
  }
];

infoTerceraMetapersonal.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-personales")[2].appendChild(fragmento);

//Cuarta meta personal variables
const infoCuartaMetapersonal = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Llegar a mi prime en el futbol.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Mediano plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Tener una disciplina en los entrenamientos</span>\
      <span>*Mentalizarme para poder controlar los nervios</span>\
      <span>*Cuidar mi salud tanto física como mental</span>\
      <span>*Cuidar mi alimentación</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*Mi psicóloga</span>\
    <span>*Mi papá</span>\
    <span>*Mi mamá</span>",
    ]
  }
];

infoCuartaMetapersonal.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-personales")[3].appendChild(fragmento);

//Quinta meta personal variables
const infoQuintaMetapersonal = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Tener el mejor físico.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Cuidar mi alimentación</span>\
      <span>*Disciplinarme cargando pesas</span>\
      <span>*Rutinas de ejercicio</span>\
      <span>*Hacerme el hábito de tomar agua</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*El material (las pesas, mancuernas, barras)</span>",
    ]
  }
];

infoQuintaMetapersonal.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-personales")[4].appendChild(fragmento);

//Sexta meta personal variables
const infoSextaMetapersonal = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Aprender varios idiomas (inglés, portugués, francés, italiano, alemán).",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Continuar con mi curso</span>\
      <span>*Tomar cursos por mi cuenta para aprender idiomas</span>\
      <span>*Buscar o investigar sobre grupos para poder establecer conversaciones de varios idiomas</span>\
      <span>*Practicar y cantar canciones en idiomas</span>\
      <span>*Conseguir material (videos, libros para reforzar el idioma)</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*Los profesores de inglés</span>\
      <span>*Los profesores de futuros cursos</span>\
      <span>*Materiales como libros, videos, audios y grupos conversacionales</span>",
    ]
  }
];

infoSextaMetapersonal.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-personales")[5].appendChild(fragmento);

//Séptima meta personal variables
const infoSeptimaMetapersonal = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Aprender a bailar de todo.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Mediano plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Buscar videos de baile para aprender de ellas</span>\
      <span>*Llevar a la practica el baile</span>\
      <span>*Involucrarse en actividades donde practique el baile</span>\
      <span>*Adquirir condición para ser más agil en el baile</span>\
      <span>*Tener confianza y seguridad en mí mismo a la hora de bailar</span>\
      <span>*Aprender a coordinar en el baile</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*Videos de instructores de baile</span>\
      <span>*Aquellas personas involucradas en el baile</span>",
    ]
  }
];

infoSeptimaMetapersonal.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-personales")[6].appendChild(fragmento);

//Octava meta personal variables
const infoOctavaMetapersonal = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Casarme y tener una familia propia con opcion a adoptar.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Llegar a formalizar una relación</span>\
      <span>*Tener una estabilidad laboral y económica</span>\
      <span>*Encontrar a alguien con la misma ideología que yo sobre la adopción</span>\
      <span>*Cumplir con los requisitos para la adopción y hacer el proceso</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*Un trabajo</span>\
      <span>*Proceso de adopción</span>",
    ]
  }
];

infoOctavaMetapersonal.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-personales")[7].appendChild(fragmento);

//Novena meta personal variables
const infoNovenaMetapersonal = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Tener mi casa propia.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Tener un trabajo, una estabilidad económica</span>\
      <span>*Consultar créditos para casas, y buscar cual me convenga más</span>\
      <span>*Saber administrarme</span>\
      <span>*Priorizar gastos</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*Tener un trabajo de base</span>\
      <span>*El crédito</span>",
    ]
  }
];

infoNovenaMetapersonal.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-personales")[8].appendChild(fragmento);

//Decima meta personal variables
const infoDecimaMetapersonal = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Viajar para conocer muchos lugares.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Ahorrar, juntar dinero y destinarlo para el viaje</span>\
      <span>*Planear con anticipación el viaje</span>\
      <span>*Investigar y decidir a donde viajar</span>\
      <span>*Organizar mis tiempos, con el trabajo y ocupaciones</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*Tener un trabajo de base</span>\
      <span>*Agencia de viaje y aplicaciones</span>",
    ]
  }
];

infoDecimaMetapersonal.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-personales")[9].appendChild(fragmento);

//------ METAS PERSONALES VARIABLES ------
const cajaMetaProfesionales = document.querySelector(".caja-metas-profesionales"),
  botonesMetasProfesionales = document.querySelectorAll(".boton-profesionales"),
  separadorMetasProfesionales = document.querySelector(".separador-profesionales");

let metasProfesionales;

for(let i = 0; i <= (document.querySelectorAll(".boton-profesionales").length - 1); i++) {
  let divMetasProfesionales  = document.createElement("div");
  divMetasProfesionales.classList.add("metas-profesionales");

  cajaMetaProfesionales.appendChild(divMetasProfesionales);
}

metasProfesionales = document.querySelectorAll(".metas-profesionales");

//Primera meta profesional
const infoPrimeraMetaProfesional = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Trabajar en alguna gran empresa de tecnología.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Relacionarme con contactos</span>\
      <span>*Seguir ampliando mis conocimientos</span>\
      <span>*Buscar certificarme en una área importante</span>\
      <span>*Seguir estudiando inglés y buscando posibilidades en otro idioma</span>\
      <span>*Mostrar una actitud de disposición</span>\
      <span>*La seguridad y confianza en mí mismo</span>\
      <span>*Llegar a un alto nivel de programación</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*Cursos y plataformas de estudio</span>\
      <span>*Los contactos</span>",
    ]
  }
];

infoPrimeraMetaProfesional.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-profesionales")[0].appendChild(fragmento);

//Segunda meta profesional
const infoSegundaMetaProfesional = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Tener alguna empresa.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Juntar el capital para emprender mi negocio</span>\
      <span>*Comprar la materia prima para el negocio</span>\
      <span>*Hacer un estudio para buscar la mejor ubicación para el negocio</span>\
      <span>*la publicidad del negocio</span>\
      <span>*Ingresos pasivos</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*Proveedores</span>\
      <span>*La capital</span>\
      <span>*Personas de confianza</span>",
    ]
  }
];

infoSegundaMetaProfesional.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-profesionales")[1].appendChild(fragmento);

//------ METAS FAMILIARES VARIABLES ------
const cajaMetaFamiliares = document.querySelector(".caja-metas-familiares"),
  botonesMetasFamiliares = document.querySelectorAll(".boton-familiares"),
  separadorMetasFamiliares = document.querySelector(".separador-familiares");

let metasFamiliares;

for(let i = 0; i <= (document.querySelectorAll(".boton-familiares").length - 1); i++) {
  let divMetasFamiliares  = document.createElement("div");
  divMetasFamiliares.classList.add("metas-familiares");

  cajaMetaFamiliares.appendChild(divMetasFamiliares);
}

metasFamiliares = document.querySelectorAll(".metas-familiares");

//Primera meta familiar
const infoPrimeraMetaFamiliar = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Ayudar a mis papás económicamente y en todo lo que necesiten.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Solvencia económica</span>\
      <span>*Administrarme económicamente</span>\
      <span>*Tener un trabajo estable</span>\
      <span>*Tener un ahorro</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*El trabajo</span>\
      <span>*El dinero</span>",
    ]
  }
];

infoPrimeraMetaFamiliar.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-familiares")[0].appendChild(fragmento);

//Segunda meta familiar
const infoSegundaMetaFamiliar = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Llevar a mi papá y/o familia al mundial 2026.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Solvencia económica</span>\
      <span>*Administrarme económicamente</span>\
      <span>*Tener un trabajo estable</span>\
      <span>*Tener un ahorro</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*El trabajo</span>\
      <span>*El dinero</span>\
      <span>*El ahorro</span>",
    ]
  }
];

infoSegundaMetaFamiliar.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-familiares")[1].appendChild(fragmento);

//Tercera meta familiar
const infoTerceraMetaFamiliar = [
  {
    pregunta: "OBJETIVO O META",
    respuesta: [ "Llevar a mi papá y/o familia a muchos partidos importantes.",
    ]
  },
  {
    pregunta: "TIEMPO",
    respuesta: ["Largo plazo",
    ]
  },
  {
    pregunta: "ESTRATEGIA",
    respuesta: ["<span>*Solvencia económica</span>\
      <span>*Administrarme económicamente</span>\
      <span>*Tener un trabajo estable</span>\
      <span>*Tener un ahorro</span>",
    ],
  },
  {
    pregunta: "APOYO EXTERNO",
    respuesta: ["<span>*El trabajo</span>\
      <span>*El dinero</span>\
      <span>*El ahorro</span>",
    ]
  }
];

infoTerceraMetaFamiliar.forEach(me => {
  templateMetas.querySelector(".pregunta").textContent = me.pregunta;
  templateMetas.querySelector(".respuesta").innerHTML = me.respuesta;
  
  let clone1 = document.importNode(templateMetas, true);
  fragmento.appendChild(clone1);
});

document.querySelectorAll(".metas-familiares")[2].appendChild(fragmento);

//------ CAMBIO THEME VARIABLES ------
const cambioThemeBtn = document.querySelector(".cambio-theme"),
  luna = document.querySelector(".luna"),
  sol = document.querySelector(".sol");

var storageDarkMode;

const titulosModoDark = document.querySelector("[data-titulos-modo-dark]"),
  subtitulosModoDark = document.querySelectorAll("[data-subtitulos-modo-dark]"),
  body = document.querySelector("body"),
  metas = document.querySelectorAll("[data-metas-modo-dark]"),
  separadores = document.querySelectorAll(".separadores"),
  textoOcultarBtn = document.querySelector(".texto-ocultar-boton");

  var storageDarkMode;

  //------ BOTON OCULTAR THEME  BOTON  ------
  const ocultarBtn = document.querySelector(".boton-ocultar-boton");

//------ FUNCIONES ------

// -- Metas personales --

//Primer meta personal
botonesMetasPersonales[0].addEventListener("click", () => {
  metasPersonales[0].classList.toggle("activar-elemento");
  separadorMetasPersonales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasPersonales.length - 1); i++) {
    if(i != 0) {
      metasPersonales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasPersonales[0].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasPersonales.length - 1); i++) {
    if(i != 0) {
      botonesMetasPersonales[i].classList.remove("activar-boton");
    }
  }
});

//Segunda meta personal
botonesMetasPersonales[1].addEventListener("click", () => {
  metasPersonales[1].classList.toggle("activar-elemento");
  separadorMetasPersonales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasPersonales.length - 1); i++) {
    if(i != 1) {
      metasPersonales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasPersonales[1].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasPersonales.length - 1); i++) {
    if(i != 1) {
      botonesMetasPersonales[i].classList.remove("activar-boton");
    }
  }
});

//Tercera meta personal
botonesMetasPersonales[2].addEventListener("click", () => {
  metasPersonales[2].classList.toggle("activar-elemento");
  separadorMetasPersonales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasPersonales.length - 1); i++) {
    if(i != 2) {
      metasPersonales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasPersonales[2].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasPersonales.length - 1); i++) {
    if(i != 2) {
      botonesMetasPersonales[i].classList.remove("activar-boton");
    }
  }
});

//Cuarta meta personal
botonesMetasPersonales[3].addEventListener("click", () => {
  metasPersonales[3].classList.toggle("activar-elemento");
  separadorMetasPersonales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasPersonales.length - 1); i++) {
    if(i != 3) {
      metasPersonales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasPersonales[3].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasPersonales.length - 1); i++) {
    if(i != 3) {
      botonesMetasPersonales[i].classList.remove("activar-boton");
    }
  }
});

//Quinta meta personal
botonesMetasPersonales[4].addEventListener("click", () => {
  metasPersonales[4].classList.toggle("activar-elemento");
  separadorMetasPersonales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasPersonales.length - 1); i++) {
    if(i != 4) {
      metasPersonales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasPersonales[4].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasPersonales.length - 1); i++) {
    if(i != 4) {
      botonesMetasPersonales[i].classList.remove("activar-boton");
    }
  }
});

//Sexta meta personal
botonesMetasPersonales[5].addEventListener("click", () => {
  metasPersonales[5].classList.toggle("activar-elemento");
  separadorMetasPersonales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasPersonales.length - 1); i++) {
    if(i != 5) {
      metasPersonales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasPersonales[5].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasPersonales.length - 1); i++) {
    if(i != 5) {
      botonesMetasPersonales[i].classList.remove("activar-boton");
    }
  }
});

//Septima meta personal
botonesMetasPersonales[6].addEventListener("click", () => {
  metasPersonales[6].classList.toggle("activar-elemento");
  separadorMetasPersonales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasPersonales.length - 1); i++) {
    if(i != 6) {
      metasPersonales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasPersonales[6].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasPersonales.length - 1); i++) {
    if(i != 6) {
      botonesMetasPersonales[i].classList.remove("activar-boton");
    }
  }
});

//Octava meta personal
botonesMetasPersonales[7].addEventListener("click", () => {
  metasPersonales[7].classList.toggle("activar-elemento");
  separadorMetasPersonales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasPersonales.length - 1); i++) {
    if(i != 7) {
      metasPersonales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasPersonales[7].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasPersonales.length - 1); i++) {
    if(i != 7) {
      botonesMetasPersonales[i].classList.remove("activar-boton");
    }
  }
});

//Novena meta personal
botonesMetasPersonales[8].addEventListener("click", () => {
  metasPersonales[8].classList.toggle("activar-elemento");
  separadorMetasPersonales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasPersonales.length - 1); i++) {
    if(i != 8) {
      metasPersonales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasPersonales[8].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasPersonales.length - 1); i++) {
    if(i != 8) {
      botonesMetasPersonales[i].classList.remove("activar-boton");
    }
  }
});

//Decima meta personal
botonesMetasPersonales[9].addEventListener("click", () => {
  metasPersonales[9].classList.toggle("activar-elemento");
  separadorMetasPersonales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasPersonales.length - 1); i++) {
    if(i != 9) {
      metasPersonales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasPersonales[9].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasPersonales.length - 1); i++) {
    if(i != 9) {
      botonesMetasPersonales[i].classList.remove("activar-boton");
    }
  }
});

// -- Metas profesionales --

//Primera meta profesional 
botonesMetasProfesionales[0].addEventListener("click", () => {
  metasProfesionales[0].classList.toggle("activar-elemento");
  separadorMetasProfesionales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasProfesionales.length - 1); i++) {
    if(i != 0) {
      metasProfesionales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasProfesionales[0].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasProfesionales.length - 1); i++) {
    if(i != 0) {
      botonesMetasProfesionales[i].classList.remove("activar-boton");
    }
  }
});

//Segunda meta profesional 
botonesMetasProfesionales[1].addEventListener("click", () => {
  metasProfesionales[1].classList.toggle("activar-elemento");
  separadorMetasProfesionales.classList.add("activar-elemento");

  for(let i = 0; i <= (metasProfesionales.length - 1); i++) {
    if(i != 1) {
      metasProfesionales[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasProfesionales[1].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasProfesionales.length - 1); i++) {
    if(i != 1) {
      botonesMetasProfesionales[i].classList.remove("activar-boton");
    }
  }
});

// -- Metas personales --

//Primera meta familiar 
botonesMetasFamiliares[0].addEventListener("click", () => {
  metasFamiliares[0].classList.toggle("activar-elemento");
  separadorMetasFamiliares.classList.add("activar-elemento");

  for(let i = 0; i <= (metasFamiliares.length - 1); i++) {
    if(i != 0) {
      metasFamiliares[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasFamiliares[0].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasFamiliares.length - 1); i++) {
    if(i != 0) {
      botonesMetasFamiliares[i].classList.remove("activar-boton");
    }
  }
});

//Segunda meta familiar 
botonesMetasFamiliares[1].addEventListener("click", () => {
  metasFamiliares[1].classList.toggle("activar-elemento");
  separadorMetasFamiliares.classList.add("activar-elemento");

  for(let i = 0; i <= (metasFamiliares.length - 1); i++) {
    if(i != 1) {
      metasFamiliares[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasFamiliares[1].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasFamiliares.length - 1); i++) {
    if(i != 1) {
      botonesMetasFamiliares[i].classList.remove("activar-boton");
    }
  }
});

//Tercera meta familiar 
botonesMetasFamiliares[2].addEventListener("click", () => {
  metasFamiliares[2].classList.toggle("activar-elemento");
  separadorMetasFamiliares.classList.add("activar-elemento");

  for(let i = 0; i <= (metasFamiliares.length - 1); i++) {
    if(i != 2) {
      metasFamiliares[i].classList.remove("activar-elemento");
    }
  }

  botonesMetasFamiliares[2].classList.toggle("activar-boton");
  for(let i = 0; i <= (botonesMetasFamiliares.length - 1); i++) {
    if(i != 2) {
      botonesMetasFamiliares[i].classList.remove("activar-boton");
    }
  }
});

//-- Cambio theme --
cambioThemeBtn.addEventListener("click", () => {
  if(localStorage.getItem("darkMode") == "desactivado") {
    localStorage.setItem('darkMode', 'activado');
    storageDarkMode = localStorage.getItem('darkMode');
  }

  else if(localStorage.getItem("darkMode") == "activado") {
    localStorage.setItem('darkMode', 'desactivado');
    storageDarkMode = localStorage.getItem('darkMode');
  }

  else {
    localStorage.setItem('darkMode', 'activado');
    storageDarkMode = localStorage.getItem('darkMode');
  }

  luna.classList.toggle("luna-escondida");
  sol.classList.toggle("sol-saliendo");
  cambioThemeBtn.classList.toggle("cambio-theme-oscuro");

  titulosModoDark.classList.toggle("titulos-theme-oscuro");

  subtitulosModoDark.forEach(ti => {
    ti.classList.toggle("subtitulos-theme-oscuro");
  });

  body.classList.toggle("fondo-theme-oscuro");

  metas.forEach(me => {
    me.classList.toggle("metas-theme-oscuro");
  });

  separadores.forEach(sep => {
    sep.classList.toggle("separador-theme-oscuro");
  })

  textoOcultarBtn.classList.toggle("texto-theme-oscuro");
});

window.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem("darkMode") == "desactivado") {
    luna.classList.remove("luna-escondida");
    sol.classList.add("sol-saliendo");
    cambioThemeBtn.classList.remove("cambio-theme-oscuro");
    
    titulosModoDark.classList.remove("titulos-theme-oscuro");

    subtitulosModoDark.forEach(ti => {
      ti.classList.remove("subtitulos-theme-oscuro");
    });

    body.classList.remove("fondo-theme-oscuro");

    metas.forEach(me => {
      me.classList.remove("metas-theme-oscuro");
    });

    separadores.forEach(sep => {
      sep.classList.remove("separador-theme-oscuro");
    })

    textoOcultarBtn.classList.remove("texto-theme-oscuro");
  }

  else if(localStorage.getItem("darkMode") == "activado") {
    sol.classList.remove("sol-saliendo");
    luna.classList.add("luna-escondida");
    cambioThemeBtn.classList.add("cambio-theme-oscuro");

    titulosModoDark.classList.add("titulos-theme-oscuro");

    subtitulosModoDark.forEach(ti => {
      ti.classList.add("subtitulos-theme-oscuro");
    });

    body.classList.add("fondo-theme-oscuro");

    metas.forEach(me => {
      me.classList.add("metas-theme-oscuro");
    });

    separadores.forEach(sep => {
      sep.classList.add("separador-theme-oscuro");
    })

    textoOcultarBtn.classList.add("texto-theme-oscuro");
  }

  else {
    localStorage.setItem('darkMode', 'activado');
    storageDarkMode = localStorage.getItem('darkMode');
  }
});

//-- Boton ocultar theme boton --
ocultarBtn.addEventListener("click", () => {
  cambioThemeBtn.classList.toggle("desactivar-theme-boton");
})
