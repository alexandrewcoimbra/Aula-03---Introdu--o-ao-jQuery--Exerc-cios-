$(document).ready(() => {

    const $clicker = $("#clicker")
    const $secret = $("#secret")

    $clicker.click(() => {
      if ($secret.is(":visible")) {
        $secret.hide();
        $clicker.text("Mostrar");
      } else {
        $secret.show();
        $clicker.text("Esconder");
      }
    });
  });