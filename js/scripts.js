$(document).ready(function(){
  let ruby = 0;
  let python = 0;
  let javaScript = 0;
  let cSharp = 0;
  $("form#prgrm-select").submit(function(event) {
    event.preventDefault();
    let favAnimal = $("input:radio[name=animal]:checked").val();
    let superPower = $("input:radio[name=super-power]:checked").val();
    let prgrmLang = $("input:radio[name=languages]:checked").val();
    let favColor = $("input:radio[name=color]:checked").val();
    let favSport = $("input:radio[name=sport]:checked").val();

    if (favAnimal === "cat") {
      ruby += 0;
    } else if (favAnimal === "bear") {
      javaScript += 8;
    } else if (favAnimal === "python") {
      python += 4;
    } else if (favAnimal === "dolphin") {
      cSharp += 16;
    } else {
      cSharp += 16;
    }
  })
});