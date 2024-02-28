let lg;
lg = prompt("Type of the language code ('es', 'de', 'en', and 'fr') to TRANSLATE!");
msg = ""
switch (lg) {
  case "es":
    msg = "Buenos dias"
    break;
  case "de":
    msg = "Sou Hallo Welt"
    break;
    case "en":
    msg = "Hello Wold"
    break;
    case "fr":
    msg = "Bonjour le monde"
    break;
  default:
    msg = "Hello Wold"
}
console.log(msg)