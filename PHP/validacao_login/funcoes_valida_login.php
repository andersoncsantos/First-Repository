<?php
function valida_login($login, $senha){
    $login_bd = 'anderson.santos';
    $senha_bd = '1234';

    if($login == $login_bd && $senha == $senha_bd){
        return true;
    }
        return false;
}

?>