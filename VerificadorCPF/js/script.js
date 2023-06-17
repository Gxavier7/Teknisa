function validarCPF() {
	const cpf = document.getElementById("CPF").value;

	if (cpf.length != 11) {
		mostrarResultado("CPF deve ter 11 dígitos", "red");
		return false;
	}

	if (verificarDigitosRepetidos(cpf)) {
		mostrarResultado("CPF não deve conter repetição do mesmo dígito", "red");
		return false;
	}

	const digito1 = verificarDigitoVerificador(cpf, 1);
	const digito2 = verificarDigitoVerificador(cpf, 2);

	if (digito1 && digito2) {
		mostrarResultado("CPF válido - " + cpf, "green");
	} else {
		mostrarResultado("CPF inválido - " + cpf, "red");
	}
}

function verificarDigitoVerificador(cpf, posicao) {
	const sequencia = cpf.slice(0, 8 + posicao).split("");

	let soma = 0;
	let multiplicador = 9 + posicao;

	for (const numero of sequencia) {
		soma += multiplicador * Number(numero);
		multiplicador--;
	}

	const restoDivisao = (soma * 10) % 11;
	const digito = cpf.slice(8 + posicao, 9 + posicao);

	return restoDivisao == digito;
}

function mostrarResultado(texto, cor) {
	const span = document.getElementById("resultado");

	span.innerHTML = texto;
	span.style.color = cor;
}

function verificarDigitosRepetidos(cpf) {
	return cpf.split("").every((d) => d === cpf[0]);
}
