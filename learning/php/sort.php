<?php

$lista = ['miel', 'extraterrestre', 'al', 'automovil','auto', 'revestir'];

sort($lista, $SORT_STRING);

foreach ($lista as $clave => $valor) {
    echo "lista[" . $clave . "] = " . $valor . "\n";
}
