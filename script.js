const produtos = {
  comidas: [
    {nome: 'Feijoada', preco: 28, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSanAhjxhlIXcUZGuToKnvdkN6gkZo_kADoU_r4MeLZcQ&s=10'},
    {nome: 'Arroz de Forno', preco: 22, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgXpxiKCfP_u3EW4oAUg8iEFIxpXWMSJMsUzGwj6U6Q&s=10'},
    {nome: 'Frango Assado', preco: 25, img: 'https://images.tcdn.com.br/img/img_prod/805420/noticia_2070194493620b284323d19.png'},
    {nome: 'Peixe Grelhado', preco: 30, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpei0wS-w1NdJoYtpZxEaTLj_oDaVCksbPzW50-KmrcqJLJyWqZ98hR1XW&s=10'},
    {nome: 'Carne de Panela', preco: 27, img: 'https://p2.trrsf.com/image/fget/cf/1200/630/middle/images.terra.com/2022/10/08/184240150-carne-de-panela-com-mandioquinha-1.jpg'}
  ],
  lanches: [
    {nome: 'Hambúrguer', preco: 18, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjb1kl8ZyUldHB92xV3VFtdO-YrNCqqWIC5jsxUGvm2w&s=10'},
    {nome: 'Hot Dog', preco: 15, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTzLnGt8SHNqMYscK5jz1lfeXtcOnF2IVSC3uTK7fWysvuO8dE2YXmygA&s=10'},
    {nome: 'Tapioca', preco: 12, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveV8k5kfNU8zWHDy4M2-oaQ3S5S4AxermoETMZItV6g&s=10'},
    {nome: 'Misto Quente', preco: 10, img: 'https://catracalivre.com.br/wp-content/uploads/2023/12/istock-155388694-1.jpg'},
    {nome: 'Sanduíche Natural', preco: 14, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXj7Afgvf1eA4t0OIogX_skcUxjiDEGkQE8RlNURFKw&s=10'}
  ],
  sobremesas: [
    {nome: 'Pudim', preco: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8Tqazms9E1UvOLsg-L9rcrF7JMBo2tkmdpcUv2KoKRw&s=10'},
    {nome: 'Brigadeiro', preco: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJAw7E5TrpXkEIAdl-GwaNL6EuEWZx4hGnmsKUBSBuw&s=10'},
    {nome: 'Mousse de Maracujá', preco: 7, img: 'https://guiadacozinha.com.br/wp-content/uploads/2015/01/mousse-de-maracuja.webp'},
    {nome: 'Torta de Limão', preco: 9, img: 'https://www.receiteria.com.br/wp-content/uploads/torta-de-limao-facil-capa.jpeg'},
    {nome: 'Sorvete', preco: 6, img: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/09/14/dia-do-sorvete-s1jgtxr2stwh.jpg'}
  ],
  refris: [
    {nome: 'Coca-Cola', preco: 6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qyOj-UG9wZsrC-Wxinqdbsi3wVEpMaSWbiHjO0P7Ow&s=10'},
    {nome: 'Guaraná', preco: 6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITz_erE0pm2am0W5saUiBtQvw6JisUYMAudBRNSZ_JQ&s=10'},
    {nome: 'Fanta Laranja', preco: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4sJIYbI1uLL352dttRpAdV_DPr9-D1Bz4ZHn1e1xnw&s=10'},
    {nome: 'Pepsi', preco: 5, img: 'https://t4.ftcdn.net/jpg/02/84/65/61/360_F_284656175_G6SlGTBVl4pg8oXh6jr86cOmKUZjfrym.jpg'},
    {nome: 'Suco De Laranja', preco: 7, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAAWRXoe3wm21FGEmaDzEPm3G2VunYgus52XjoZP3j-WmuezvnBLJibDE&s=10'}
  ]
};

let carrinho = [];

function gerarMenu() {
  Object.keys(produtos).forEach(cat => {
    const area = document.getElementById(cat);
    area.innerHTML = '';
    produtos[cat].forEach((prod, idx) => {
      area.innerHTML += `
      <div class="card">
        <img src="${prod.img}" alt="${prod.nome}">
        <h3>${prod.nome}</h3>
        <p>R$ ${prod.preco.toFixed(2)}</p>
        <button class="add-btn" onclick="addCart('${cat}',${idx})">Adicionar</button>
      </div>
      `;
    });
  });
}
window.onload = gerarMenu;

function addCart(cat, idx) {
  const prod = produtos[cat][idx];
  carrinho.push({ ...prod, id: Date.now() + Math.random() });
  atualizarCarrinho();
}

function atualizarCarrinho() {
  document.getElementById('cart-count').innerText = carrinho.length;
}

function openCart() {
  document.getElementById('cart-modal').style.display = 'flex';
  mostrarItensCarrinho();
}
function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

function mostrarItensCarrinho() {
  const lista = document.getElementById('cart-list');
  lista.innerHTML = "";
  carrinho.forEach((item, i) => {
    lista.innerHTML += `
      <li>
        <img src="${item.img}" alt="" style="width:38px;height:38px;border-radius:5px;margin-right:7px;">
        ${item.nome} - R$ ${item.preco.toFixed(2)}
        <button onclick="removerItem(${i})">Remover</button>
      </li>
    `;
  });
  // Mostra o total em tempo real no carrinho
  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);
  let totalDiv = document.getElementById('cart-total');
  if (!totalDiv) {
    totalDiv = document.createElement('div');
    totalDiv.id = 'cart-total';
    lista.parentNode.appendChild(totalDiv);
  }
  totalDiv.innerHTML = `<strong>Total:</strong> R$ ${total.toFixed(2)}`;
}

function removerItem(idx) {
  carrinho.splice(idx, 1);
  mostrarItensCarrinho();
  atualizarCarrinho();
}

function sendWhatsApp() {
  const nome = document.getElementById('cliente').value;
  const mesa = document.getElementById('mesa').value;
  const obs = document.getElementById('obs').value;
  if (!nome || !mesa || carrinho.length === 0) {
    alert("Preencha nome, mesa e adicione pelo menos um item ao pedido!");
    return;
  }
  let total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  let texto = `*Novo Pedido*
`;
  texto += `👤 *Cliente:* ${nome}
`;
  texto += `🪑 *Mesa:* ${mesa}
`;
  texto += `
*Itens selecionados:*
`;
  carrinho.forEach(item => {
    texto += `• ${item.nome}  -  R$${item.preco.toFixed(2)}
`;
  });
  texto += `
*Total:* R$${total.toFixed(2)}
`;
  if (obs) texto += `
*Observações:* ${obs}
`;

  // Troque SEUNUMEROAQUI pelo número do restaurante (apenas números, ex: 5516999999999)
  const zap = "https://wa.me/+5511934946547?text=" + encodeURIComponent(texto);
  window.open(zap, '_blank');
}