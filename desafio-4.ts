var apiKey:string | undefined = '3f301be7381a03ad8d352314dcc3ec1d';
//let apiKey;
let requestToken:string;
let username:string | undefined;
let password:string;
let sessionId: string;
let listId = '7101979';

let loginButton = document.getElementById('login-button') as HTMLButtonElement;
let searchButton = document.getElementById('search-button') as HTMLButtonElement;
let clearSearch = document.getElementById('clear-search-button') as HTMLButtonElement;
let searchContainer = document.getElementById('search-container') as HTMLDivElement;

loginButton.addEventListener('click', async () => {
    await criarRequestToken();
    await logar();
    await criarSessao();
})

searchButton.addEventListener('click', async () => {
    let lista = document.getElementById("lista");
    if (lista) {
        lista.outerHTML = "";
    }
    let queryElement = document.getElementById('search') as HTMLInputElement;
    let query = queryElement.value;
    let listaDeFilmes:unknown = await procurarFilme(query);
    let ul = document.createElement('ul') as HTMLUListElement;
    ul.id = "lista"
    for (const item of listaDeFilmes.results) {
        let li = document.createElement('li') as HTMLLIElement;
        li.appendChild(document.createTextNode(item.original_title))
        ul.appendChild(li)
    }
    console.log(listaDeFilmes);
    searchContainer.appendChild(ul);
})

clearSearch.addEventListener('click', () => {
    let ul = document.getElementById('lista') as HTMLUListElement;
    // ul.parentElement?.removeChild(ul);
    ul.remove();
})

function preencherSenha() {
    let input = document.getElementById('senha') as HTMLInputElement;
    password = input.value
    mudarCorInput(input, 'cor-borda')
    validateLoginButton();
  }
  
  function preencherLogin() {
    let input = document.getElementById('login') as HTMLInputElement;
    username = input.value; 
    mudarCorInput(input, 'cor-borda')
    validateLoginButton();
  }
  
  function preencherApi() {
    let input = document.getElementById('api-key') as HTMLInputElement;
    apiKey = input.value;
    mudarCorInput(input, 'cor-borda')
    validateLoginButton();
  }

  function mudarBordaSerchInput (){
    let input = document.getElementById('search') as HTMLInputElement;
    mudarCorInput(input, 'cor-borda');
  }

function validateLoginButton() {
    if (password && username && apiKey) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

function mudarCorInput(input:HTMLInputElement, className: string){
    let valor = input.value;
    valor?input.classList.add(className):input.classList.remove(className);
}



class HttpClient {
    static async get({ url, method, body = null }) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open(method, url, true);

            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    })
                }
            }
            request.onerror = () => {
                reject({
                    status: request.status,
                    statusText: request.statusText
                })
            }

            if (body) {
                request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                body = JSON.stringify(body);
            }
            request.send(body);
        })
    }
}

async function procurarFilme(query: string) {
    query = encodeURI(query)
    console.log(query)
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
        method: "GET"
    })
    return result
}

async function adicionarFilme(filmeId) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
        method: "GET"
    })
    console.log(result);
}

async function criarRequestToken() {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
        method: "GET"
    })
    requestToken = result.request_token
}

async function logar() {
    await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
        method: "POST",
        body: {
            username: `${username}`,
            password: `${password}`,
            request_token: `${requestToken}`
        }
    })
}

async function criarSessao() {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
        method: "GET"
    })
    sessionId = result.session_id;
}

async function criarLista(nomeDaLista, descricao) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
        method: "POST",
        body: {
            name: nomeDaLista,
            description: descricao,
            language: "pt-br"
        }
    })
    console.log(result);
}

async function adicionarFilmeNaLista(filmeId, listaId) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
        method: "POST",
        body: {
            media_id: filmeId
        }
    })
    console.log(result);
}

async function pegarLista() {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
        method: "GET"
    })
    console.log(result);
}