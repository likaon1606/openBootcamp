// Crea un nuevo proyecto de Node
// - Configura el proyecto para utilizar los módulos de ES6
// - En el entrypoint index.js, importa el módulo controller.js
import {suma, multiplica} from './controller.js'
import chalk from 'chalk'

// - El entrypoint index.js debe utilizar las funciones del módulo para devolver 
//la multiplicación de suma(1, 2) y suma(4, 5)
const sum1 = suma(1, 2)
const sum2 = suma(4, 5)

const mult = multiplica(sum1, sum2)
console.log(mult);

// - Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
// - Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
console.log(chalk.green('Soy de color verde'));
