$(document).ready(function(){
    $('#carousel-images').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    const listaCarrinho= $('#carrinho .card ul');
    const carrinhoSection =$("#carrinho");
    let valorTotal = 0;

    carrinhoSection.hide();

    const total = $("<p><b>Total: R$00,00</b></p>");
    listaCarrinho.parent().append(total);

    const buttonComprar = $("<button>Comprar</button>");
    const buttonLimpar = $("<button>Limpar Lista</button>"); 

    listaCarrinho.parent().append(buttonComprar, buttonLimpar);

    $('#produtos .card button').click(function(){
        carrinhoSection.show();

        const card = $(this).closest(".card");
        const nmProduto = card.find("h3").text();
        const vlProduto = parseFloat(card.find("span b").text().replace("R$", "").replace(",", "."));
        const novoProduto = $(`<li><h3>${nmProduto}</h3> <span>R$${vlProduto.toFixed(2).replace(".", ",")}</span></li>`);
        listaCarrinho.append(novoProduto);

        valorTotal += vlProduto;
        total.html(`<strong>Total: R$${totalValor.toFixed(2).replace(".", ",")}</strong>`);
    });

    buttonComprar.click(function(){
        if(valorTotal >0){
            alert("Compra finalizada! Obrigado pela confiança.");
            listaCarrinho.empty();
            valorTotal = 0;
            total.html("<strong>Total: R$0,00</strong>");
            carrinhoSection.hide();
        }else{
            alert("Adicione itens para comprar.");
        }
    })

    buttonLimpar.click(function(){
        listaCarrinho.empty();
        valorTotal = 0;
        total.html("<strong>Total: R$0,00</strong>");
        carrinhoSection.hide();
    })
})



