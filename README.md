# SUPER DAVID SMASH BROS

## Descripción general

Este proyecto es realizado para la tercera entrega del BootCamp de desarrollador FullStack
impartido por GeeksHubs Academy. Dicho proyecto está realizado por el alumno **David Sánchez Ariza**
y su idea con él es recrear de forma muy simple un combate del mítico juego _Super Smash Bros_ de la
compañía _NINTENDO_, además de sacar adelante el ejercicio propuesto en el curso.

## Estado del proyecto

El juego es totalmente funcional, a pesar de no contar con animaciones a la hora de realizar los
ataques cada jugador con su personaje. La idea es seguir añadiendo ciertas mejoras y detalles para
hacer el juego cada vez más fluido y con una interfaz más agradable. No se descarta en el futuro
dotar de animaciones a los personajes y que se muevan al realizar las acciones de combate.
Dicho proyecto siempre estará abierto a posibles cambios, tanto en estructura como en diseño,
pudiendo sufrir modificaciones para su mejora a lo largo del curso y posteriores meses.
Si alguien tuviera cualquier tipo de sugernecia o idea acerca de ello no habría problema en
contactar conmigo para ponerlo en común y realizar los cambios sugeridos tras tratarlo y comentarlo.

### Requisitos para la visualización del proyecto y cómo ejecutar el juego

Para poder visualizar el proyecto no se necesita nada especial, simplemente abrir la página
desde el link que hay más abajo y ya podemos ejecutar nuestros combates. Cualquier navegador
actualmente abrirá dicha página y soportará las tecnologías y procesos utilizados en el desarrollo
de la misma. Puesto que es una página web online no es necesario descargar ni instalar **NINGÚN**
archivo, solo acceder al link siguiente.
[Super David Smash Bros](dvdsanar.github.io/juego_lucha)

Nada más abrir la página nos encontramos con una pantalla de inicio que nos recibe y nos indica que
para inciar debemos hacer click en cualquier parte de la pantalla.
Tras ello la siguiente imagen es la selección de personajes, en la que cada jugador elegirá su
personaje pulsando encima de el, y se asignará automaticamente, apareciendo en la parte de abajo el
personaje elegido por cada jugador. Al cabo de 5 segundos de haber seleccionado el segundo jugador
a su personaje el juego nos llevará a la tercera y última pantalla donde se realizará el "combate".
En esta tercera pantalla lo primero que debemos hacer es hacer click para inciar el combate, sabremos
que esto se ha realizado ya que la imagen que tenemos en el centro desaparecerá, haciendo que los ataques
de cada jugador tengan efecto. Como en todo juego de lucha al atacar la vida rival bajará y una
vez que baje a 0 habremos ganado.
El jugador que baje la vida rival antes será el vencedor y será anunciado en la pantalla, desactivando
el resto de acciones. Para poder "golpear" y bajar la vida del rival se utilizarán las teclas "A","S","D"
por parte del jugador 1, y las teclas "J","K","L" por parte del jugador 2.
Para comenzar una nueva pelea solo tendremos que recargar nuestra página y volveremos al incio.

### Tecnologías utilizadas en el desarrollo

Para el desarrollo de este proyecto se ha utilizado los lenguajes de marcas _HTML_ y _CSS_,
además de utilizar el lenguaje de programación _JavaScript_ para introducir la funcionalidad.
A traves de _HTML_ se ha hecho la estructura de la página, dividiendo esta en: 3 pantallas que van
apareciendo o desapareciendo convenientemente para cada escenario, que en este caso son:

- Incio
- Selección de personajes
- Combate
  Dentro de cada una de lás pantallas realizaremos la acción determinada que corresponda: comenzar
  a jugar, elegir a nuestros luchadores, combatir.
  El estilo de todas las pantallas se ha dado a través de sus respectivas páginas de estilos
  linkeada en el archivo index.html en el lenguaje _CSS_. La página en general tiene un estilo
  común que sirve de base para el resto de pantallas, las cuales tienen sus propios estilos en hojas
  de estilo separadas.
  El uso de _JavaScript_ ha sido la base de este proyecto ya que es con el que hemos dotado de toda
  la funcionalidad a nuestro proyecto. Entre esta funcionalidad contamos con cambiar las pantallas,
  selección de personajes y visualización de los mismos, realización de los ataques y reducción de
  la vida rival en función de ellos, dar comienzo al combate, aparición del vencedor de la pelea, etc.

### Fallos Reconocidos

Hasta ahora no se han encontrado fallos en el proyecto ya que la funcionalidad es muy limitada y en
cierto modo es todo muy sencillo. A pesar de ello si se encuentra algún tipo de error tanto
funcional como de sintaxis dentro de la página no dude en ponerse en contacto con el autor del
proyecto para poder subsanarlo cuanto antes.

#### Derechos de autor

Este proyecto ha sido realizado por **David Sánchez Ariza** durante el curso de Desarrollador Full Stack
impartido por GeeksHubs academy en Madrid a fecha de febrero de 2022.
En el proyecto han colaborado páginas de uso público como [W3Schools](https://www.w3schools.com/)
o [Developer Mozilla](https://developer.mozilla.org/es/)
