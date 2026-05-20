function MAIOR_MENOR(a, b, c, d, e) {
            const valores = [a, b, c, d, e];
            return `Maior grão: ${Math.max(...valores)} \nMenor grão: ${Math.min(...valores)}`;
        }

        function VOGAL(c) {
            if (!c || c.length !== 1) return 0;
            return ['a', 'e', 'i', 'o', 'u'].includes(c.toLowerCase()) ? 1 : 0;
        }

        function LIMITES(li, ls) {
            let pares = [];
            let somatorio = 0;
            for (let i = li + 1; i < ls; i++) {
                if (i % 2 === 0) {
                    pares.push(i);
                    somatorio += i;
                }
            }
            return `Pares extraídos: [ ${pares.join(', ')} ]\nBlend (Soma): ${somatorio}`;
        }

        function ORDEM(a, b, c) {
            return [a, b, c].sort((x, y) => x - y);
        }

        function POSITIVO_NEGATIVO(x) {
            return x >= 0;
        }

        function PAR_IMPAR(x) {
            return x % 2 === 0;
        }

        // =========================================================================
        // CONECTORES DE INTERFACE (AÇÕES DO CARDÁPIO)
        // =========================================================================
        
        function servirNota(id, msg) {
            document.getElementById(id).innerText = `☕ Recibo:\n${msg}`;
        }

        function uiMaiorMenor(usarPrompt) {
            let a, b, c, d, e;
            if (usarPrompt) {
                a = parseInt(prompt("Valor A:")) || 0; b = parseInt(prompt("Valor B:")) || 0;
                c = parseInt(prompt("Valor C:")) || 0; d = parseInt(prompt("Valor D:")) || 0;
                e = parseInt(prompt("Valor E:")) || 0;
            } else {
                a = parseInt(document.getElementById('f1_a').value) || 0;
                b = parseInt(document.getElementById('f1_b').value) || 0;
                c = parseInt(document.getElementById('f1_c').value) || 0;
                d = parseInt(document.getElementById('f1_d').value) || 0;
                e = parseInt(document.getElementById('f1_e').value) || 0;
            }
            servirNota('out_1', MAIOR_MENOR(a, b, c, d, e));
        }

        function uiVogal(usarPrompt) {
            let char = usarPrompt ? prompt("Digite uma letra:") : document.getElementById('f2_c').value;
            if (char === null) return;
            servirNota('out_2', `Caractere analisado: "${char}"\nResultado da xícara: ${VOGAL(char)}`);
        }

        function uiLimites(usarPrompt) {
            let li, ls;
            if (usarPrompt) {
                li = parseInt(prompt("Limite li:")) || 0;
                ls = parseInt(prompt("Limite ls:")) || 0;
            } else {
                li = parseInt(document.getElementById('f3_li').value) || 0;
                ls = parseInt(document.getElementById('f3_ls').value) || 0;
            }
            if (li >= ls) return servirNota('out_3', "Aviso: Grão inferior maior ou igual ao superior.");
            servirNota('out_3', LIMITES(li, ls));
        }

        function uiOrdem(usarPrompt) {
            let a, b, c;
            if (usarPrompt) {
                a = parseInt(prompt("Valor A:")) || 0; b = parseInt(prompt("Valor B:")) || 0; c = parseInt(prompt("Valor C:")) || 0;
            } else {
                a = parseInt(document.getElementById('f4_a').value) || 0;
                b = parseInt(document.getElementById('f4_b').value) || 0;
                c = parseInt(document.getElementById('f4_c').value) || 0;
            }
            servirNota('out_4', `Fila Alinhada: [ ${ORDEM(a, b, c).join(', ')} ]`);
        }

        function uiPosNeg(usarPrompt) {
            let x;
            if (usarPrompt) {
                let ent = prompt("Digite um número:"); if (ent === null) return;
                x = parseInt(ent) || 0;
            } else {
                x = parseInt(document.getElementById('f5_x').value) || 0;
            }
            servirNota('out_5', `Valor processado: ${x}\nRetorno Booleano: ${POSITIVO_NEGATIVO(x)}`);
        }

        function uiParImpar(usarPrompt) {
            let x;
            if (usarPrompt) {
                let confirmacao = confirm("Clique em [OK] para simular um Grão PAR (0) ou [Cancelar] para digitar via prompt.");
                if (confirmacao) { x = 0; } 
                else {
                    let ent = prompt("Digite um número inteiro:"); if (ent === null) return;
                    x = parseInt(ent) || 0;
                }
            } else {
                x = parseInt(document.getElementById('f6_x').value) || 0;
            }
            servirNota('out_6', `Valor processado: ${x}\nRetorno Booleano: ${PAR_IMPAR(x)}`);
        }