  //máscara CEP
  function mascara(t, mask) {
      var i = t.value.length;
      var saida = mask.substring(1, 0);
      var texto = mask.substring(i)
      if (texto.substring(0, 1) != saida) {
          t.value += texto.substring(0, 1);
      }
  }

  function cadastrarPessoas() {
      var email = document.getElementById("email").value;
      var senha = document.getElementById("password").value;
      var repitasenha = document.getElementById("passwordConfirmation").value;
      var nomecompleto = document.getElementById("fullName").value;
      var cep = document.getElementById("zipCode").value;
      var rua = document.getElementById("street").value;
      var numero = document.getElementById("number").value;
      var complemento = document.getElementById("complement").value;
      var bairro = document.getElementById("neighbourbood").value;
      var pais = document.getElementById("country").value;
      var estado = document.getElementById("state").value;
      var cidade = document.getElementById("city").value;

  }