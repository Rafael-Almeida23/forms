document.getElementById('formAlistamento').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const inputs = this.querySelectorAll('input');
    let valido = true;
    const dadosFormulario = {};
  
    inputs.forEach(input => {

      dadosFormulario[input.name] = input.value.trim();
  
      if (input.value.trim() === '') {
        input.style.borderColor = 'red';
        valido = false;
      } else {
        input.style.borderColor = '#ccc';
      }
    });
  
    if (!valido) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }

    console.log('Formulário Enviado com Sucesso!');
    console.log(dadosFormulario); 
  
    for (const campo in dadosFormulario) {
        console.log(campo + ": " + dadosFormulario[campo]);
    }
});
