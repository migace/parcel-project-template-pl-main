function scroll(e) {
  const href = $(this).attr('href');

  e.preventDefault();

  $('html, body').animate(
    {
      scrollTop: $(href).offset().top,
    },
    800,
  );

  location.hash = href;
}

$('a[href*="#"]').click(scroll);
