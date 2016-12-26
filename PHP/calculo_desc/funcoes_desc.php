<?php
function calcula_desc($valor_total, $desconto){

$valor_desconto = $valor_total * ($desconto/100);
$valor_total_com_desc = $valor_total - $valor_desconto;

return $valor_total_com_desc;
}


?>


