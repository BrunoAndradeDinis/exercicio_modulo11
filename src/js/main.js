$(document).ready(function () {
  // slick
  $("#adote-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  });
  // slick
  // mask
  $("#telefone").mask("(00) 0 0000-0000", { placeholder: "(16) 9 4002-8922" });
  $("#cep").mask("00000-000", { placeholder: "14400-000" });

  // mask

  // validation
  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      cep: {
        required: true,
      },
      endereco: {
        required: true,
      },
    },
    messages: {
      nome: "Insira o seu Nome!",
      email: "Insira o seu Email",
      telefone: "Insira o seu Telefone",
      cep: "Informe o seu CEP!",
      endereco: "Informe o seu Endereço!",
    },
    submitHandler: function (form) {
      alert("Cadastro realizado com sucesso, aguarde mais informações por e-mail!");
      $("form")[0].reset();
      $(".principal__cadastros").fadeOut()
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      alert(`Existem ${camposIncorretos} campos incorretos!`);
    },
  });
  // validation

  // Evento para finalizar a adoção através do cadastro
  $(".principal__cachorros--cachorro button").click(function () {
    $(".principal__cadastros").fadeIn();

    let cadastro = $('.principal__cadastros').offset().top

    let imgSrc = $(this)
      .closest(".principal__cachorros--cachorro")
      .find("img")
      .attr("src");
    let nomeDoCachorro = $(this)
      .closest(".principal__cachorros--cachorro")
      .find("h3")
      .text();

    // Preenche os dados com a imagem e título
    $(".principal__cadastros--adocao").find("img").attr("src", imgSrc);
    $(".principal__cadastros--adocao").find('h3').text(nomeDoCachorro);

    // Realiza o scroll para preenchimento
    $('html, body').animate({
      scrollTop: cadastro
    }, 100)
  });

});
