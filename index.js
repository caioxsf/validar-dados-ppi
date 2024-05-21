import express from 'express';
import path from 'path';

const host = '0.0.0.0';
const porta = 3000;

let listaUsuario=[];

const app = express();

app.use(express.static(path.join(process.cwd(), 'publico')));
app.use(express.urlencoded({extendend: true}));

function cadastrarAluno (requisisao, resposta) 
{
    const nome = requisisao.body.nome;
    const instituicao = requisisao.body.instituicao;
    const curso = requisisao.body.curso;
    const email = requisisao.body.email;
    const telefone = requisisao.body.telefone;

    if(nome && instituicao && curso && email && telefone)
    {
        listaUsuario.push({
            nome: nome,
            instituicao: instituicao,
            curso: curso,
            email: email,
            telefone: telefone
        })
        resposta.redirect('/listarUsuarios');
    }
    else
    {
        resposta.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
            <title>Cadastro de alunos</title>

            <style>
            *
            {
                margin: 0;
                padding: 0;
                font-family: sans-serif;
            }

            form
            {
                border: 1px solid black;
                width: 20%;

                padding: 20px;

                display: flex;
                justify-content: center;
                flex-direction: column;
            }

            input, select
            {
                padding: 5px;
                outline: none;
            }

            option
            {
                font-size: 15px;
            }

            .container-form
            {
                display: flex;
                justify-content: center;

                margin-top: 100px;
            }

            legend
            {
                font-size: 25px;
                margin-bottom: 15px;

                text-align: center;
            }

            label
            {
                position: relative;
                top: 14px;

            }

            .botoes
            {
                display: flex;
                justify-content: center;
                gap: 50px;
            }

            .btn
            {
                width: 50%;
                cursor: pointer;

                background-color: lightskyblue;
                border: 1px solid transparent;
                padding-block: 10px;
                transition: 0.3s ease-in-out;
            }

            .btn:hover
            {
                background-color: lightcoral;
            }

            .cad:hover
            {
                background-color: lightgreen;
            }

            .voltar
            {
                display: flex;
                justify-content: center;
                margin-top: 50px;
                
            }

            .inicio
            {
                padding: 12px;
                background-color: lightskyblue;
                text-decoration: none;
                color: black;
                padding-block: 15px;
                padding-inline: 20px;
                transition: 0.5s ease-in-out;
            }

            .inicio:hover
            {
                background-color: lightgray;
            }
            </style>
              
        </head>
        <body>
        
            <div class="container-form">
                <form method="POST" action='/cadastrarAlunos'>
        
                    <legend>Cadastro de aluno</legend>
            
                    <label for="">Nome do aluno</label><br>
                    <input type="text" id="nome" name="nome" value=${nome} ><br>`
        );

        if(nome == "")
        {
            resposta.write(`
                <p style="color: white; background-color: lightcoral; padding: 8px; position: relative; bottom: 15px;">Nome invalido</p>
            `)
        }

        resposta.write(`
            <label for="">Instituição</label><br>
            <input type="text" id="instituicao" name="instituicao" value=${instituicao} ><br>
        `);

        if(instituicao == "")
        {
            resposta.write(`
                <p style="color: white; background-color: lightcoral; padding: 8px; position: relative; bottom: 15px;">Instituição invalida</p>
            `)
        }

        resposta.write(`
        <label for="">Curso</label><br>
            <select name="curso" id="curso" >
                <option value="Administração">Administração</option>
                <option value="Arquitetura e Urbanismo">Arquitetura e Urbanismo</option>
                <option value="Análise e Desenv. Sist.">Análise e Desenvolvimento de Sistemas</option>
                <option value="Biomedicina">Biomedicina</option>
                <option value="Ciência da Computação">Ciência da Computação</option>
                <option value="Ciências Biológicas">Ciências Biológicas</option>
                <option value="Ciências Contábeis">Ciências Contábeis</option>
                <option value="Design de Interiores">Design de Interiores</option>
                <option value="Direito">Direito</option>
                <option value="Educação Física">Educação Física</option>
                <option value="Enfermagem">Enfermagem</option>
                <option value="Engenharia Civil">Engenharia Civil</option>
                <option value="Engenharia de Alimentos">Engenharia de Alimentos</option>
                <option value="Engenharia de Computação">Engenharia de Computação</option>
                <option value="Engenharia de Controle e Automação">Engenharia de Controle e Automação</option>
                <option value="Engenharia de Produção">Engenharia de Produção</option>
                <option value="Engenharia Elétrica">Engenharia Elétrica</option>
                <option value="Engenharia Mecânica">Engenharia Mecânica</option>
                <option value="Estética e Cosmética">Estética e Cosmética</option>
                <option value="Farmácia">Farmácia</option>
                <option value="Fisioterapia">Fisioterapia</option>
                <option value="Medicina">Medicina</option>
                <option value="Medicina Veterinária">Medicina Veterinária</option>
                <option value="Nutrição">Nutrição</option>
                <option value="Odontologia">Odontologia</option>
                <option value="Pedagogia">Pedagogia</option>
                <option value="Psicologia">Psicologia</option>
                <option value="Publicidade e Propaganda">Publicidade e Propaganda</option>
                <option value="Relações Internacionais">Relações Internacionais</option>
                <option value="Serviço Social">Serviço Social</option>
                <option value="Sistemas de Informação">Sistemas de Informação</option>
              </select><br><br>`);

        if(curso == "")
        {
            resposta.write(`
            <p style="color: white; background-color: lightcoral; padding: 8px; position: relative; bottom: 15px;">Curso invalido</p>
            `)
        }

        resposta.write(`
            <label for="">Email principal</label><br>
            <input type="email" name="email" id="email" value=${email} ><br>
        `);

        if(email == "")
        {
            resposta.write(`
            <p style="color: white; background-color: lightcoral; padding: 8px; position: relative; bottom: 15px;">Email invalido</p>
            `)
        }

        resposta.write(`
            <label for="">Telefone</label><br>
            <input type="text"  name="telefone" id="telefone" value=${telefone} ><br>`);

        if(telefone == "")
        {
            resposta.write(`
            <p style="color: white; background-color: lightcoral; padding: 8px; position: relative; bottom: 15px;">Telefone invalido</p>
            `)
        }

        resposta.write(`
                <div class="botoes">
                        <input type="submit" class="btn cad" value="Cadastrar">
                        <input type="reset" class="btn">
                    </div>
            
                </form>
            </div>

            <div class="voltar">
                <a href="index.html" class="inicio">Voltar página inicial</a>
            </div>


        </body>
        </html>`)

        resposta.end();
    }
}

app.get('/listarUsuarios', (req,resp) => {
    resp.write("<!DOCTYPE html>");
    resp.write("<html lang='en'>");
    resp.write("<head>");
    resp.write("    <meta charset='UTF-8'>");
    resp.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">');
    resp.write("    <meta name='viewport' content='width=device-width, initial-scale=1.0'>");
    resp.write("    <title>Alunos cadastrados</title>");
    resp.write("</head>");
    resp.write("<body>");
    resp.write("<table class='table table-dark table-striped m-5 w-50'>");
    resp.write('<tr>');
    resp.write('<th>Nome</th>');
    resp.write('<th>Instituição</th>');
    resp.write('<th>Email</th>');
    resp.write('<th>Telefone</th>');
    resp.write('<th>Nome</th>');
    resp.write('<th><a href="/cadastro.html" style="color: green;text-decoration: none;">Cadastrar Aluno</a></th>');
    resp.write('</tr>');

    for(let i=0;i<listaUsuario.length;i++)
    {
        resp.write('<tr>');
        resp.write(`<td>${listaUsuario[i].nome}</td>`);
        resp.write(`<td>${listaUsuario[i].instituicao}</td>`);
        resp.write(`<td>${listaUsuario[i].curso}</td>`);
        resp.write(`<td>${listaUsuario[i].email}</td>`);
        resp.write(`<td>${listaUsuario[i].telefone}</td>`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write("</body>");
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>');
    resp.write("</html>");
    resp.end();
    
});
app.post('/cadastrarAlunos', cadastrarAluno);

app.listen(porta,host,() => {
    console.log(`Servidor rodando em http://${host}:${porta}`);
})

