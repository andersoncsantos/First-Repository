<?php

//conexao com o banco de dados
    class bd {
        
        //host
        private $host = 'localhost';

        //usuario
        private $user = 'root';

        //senha
        private $password = '';

        //banco de dados
        private $database = 'twitter_clone';

        public function conecta_mysql(){
             //cria a variável de conexão
            $connection = mysqli_connect($this->host, $this->user, $this->password, $this->database);
 
            //ajusta o charset de comunicação entre a aplicação e o banco de dados
            mysqli_set_charset($connection,"utf8");
 
            // verificando se houve erro de conexão
            if(mysqli_connect_errno()) {
                echo "Erro ao tentar se conectar com o BD MySQL: " . mysqli_connect_error();
            }
             
            return $connection;
        }

    }

?>