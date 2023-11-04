$(document).ready(() => {

    const $counter = $("#counter")
    const $increase = $("#increase")
    const $decrease = $("#decrease")

    let value = 0

    $increase.click(() => {
        value++
        $counter.text(value)
    });

    $decrease.click(() => {
        if (value > 0) {
            value--
        $counter.text(value)
        }
      });
  });