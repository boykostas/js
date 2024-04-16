$(function () {
  var zero = /^0+/gm;
  var digit = /\D/g;
  $("#num").keyup(function () {
    inner = $(this).val();
    if (zero.test(inner) || digit.test(inner)) {
      inner = inner.replace(zero, "");
      inner = inner.replace(digit, "");
      $(this).val(inner);
    }
    converter.readNum(inner);
  });
});

var converter = {
  readNum: function (num) {
    var num = num.split("");
    //создаём массив и наполняем его массивами по 3 числа
    var text = [];
    do {
      tmp = [];
      for (i = 0; i < 3; i++) {
        dig = num.pop();
        if (dig) tmp.push(dig);
      }
      text.push(tmp);
    } while (num.length > 0);
    this.generate(text);
  },
  generate: function (txt) {
    var output = [];
    //из каждого массива трёх чисел генерируем строку
    for (i = 0; i < txt.length; i++) {
      //пишем в строку количество тысяч словами
      line = this.sto(txt[i].reverse().join(""), i);
      //добавляем название степени тысячи и окончание
      if (txt[i].reverse().join("") !== "000") {
        line +=
          this.names(i) + this.ends(parseInt(txt[i].reverse().join("")), i);
      }
      output.push(line);
    }
    //выводим готовую строку
    $("#text").html(output.reverse().join(" "));
  },
  names: function (pos) {
    //возвращаем корень слова
    return numbers[pos];
  },
  sto: function (sto, pos) {
    //переводим число в слова. женский род для тысячи, если pos == 1
    if (sto.length < 3) {
      do {
        sto = "0" + sto;
      } while (sto.length < 3);
    }
    sto = sto.split("");
    var out = "";
    switch (sto[0]) {
      case "1":
        out += "сто";
        break;
      case "2":
        out += "двести";
        break;
      case "3":
        out += "триста";
        break;
      case "4":
        out += "четыреста";
        break;
      case "5":
        out += "пятьсот";
        break;
      case "6":
        out += "шестьсот";
        break;
      case "7":
        out += "семьсот";
        break;
      case "8":
        out += "восемьсот";
        break;
      case "9":
        out += "девятьсот";
        break;
    }
    out += " ";
    tail = parseInt(sto[1] + sto[2]);
    if (tail >= 10 && tail < 20) {
      switch (tail) {
        case 10:
          out += "десять";
          break;
        case 11:
          out += "одиннадцать";
          break;
        case 12:
          out += "двенадцать";
          break;
        case 13:
          out += "тринадцать";
          break;
        case 14:
          out += "четырнадцать";
          break;
        case 15:
          out += "пятнадцать";
          break;
        case 16:
          out += "шестнадцать";
          break;
        case 17:
          out += "семнадцать";
          break;
        case 18:
          out += "восемнадцать";
          break;
        case 19:
          out += "девятнадцать";
          break;
      }
      out += " ";
    } else {
      switch (parseInt(sto[1])) {
        case 2:
          out += "двадцать";
          break;
        case 3:
          out += "тридцать";
          break;
        case 4:
          out += "сорок";
          break;
        case 5:
          out += "пятьдесят";
          break;
        case 6:
          out += "шестьдесят";
          break;
        case 7:
          out += "семдесят";
          break;
        case 8:
          out += "восемьдесят";
          break;
        case 9:
          out += "девяносто";
          break;
      }
      out += " ";
      switch (parseInt(sto[2])) {
        case 1:
          if (pos == 1) out += "одна";
          else out += "один";
          break;
        case 2:
          if (pos == 1) out += "две";
          else out += "два";
          break;
        case 3:
          out += "три";
          break;
        case 4:
          out += "четыре";
          break;
        case 5:
          out += "пять";
          break;
        case 6:
          out += "шесть";
          break;
        case 7:
          out += "семь";
          break;
        case 8:
          out += "восемь";
          break;
        case 9:
          out += "девять";
          break;
      }
      out += " ";
    }
    return out.replace(/( +)+/g, " ");
  },
  ends: function (a, pos) {
    //фунцкия возвращает окончания нужного рода, в зависимости от числа a. Можно не греть голову
    var b = ["", "а", "ов"];
    if (pos == 1) {
      b = ["а", "и", ""];
    }
    if (pos !== 0) {
      var c, d;
      a = a % 100;
      if (a >= 11 && a <= 19) {
        c = b[2];
      } else {
        d = a % 10;
        switch (d) {
          case 1:
            c = b[0];
            break;
          case 2:
          case 3:
          case 4:
            c = b[1];
            break;
          default:
            c = b[2];
        }
      }
      return c;
    } else return "";
  },
};
numbers = [
  "",
  "тысяч",
  "миллион",
  "миллиард",
  "триллион",
  "триллиард",
  "квадриллион",
  "квинтиллион",
  "секстиллион",
  "септиллион",
  "октиллион",
  "нониллион",
  "дециллион",
  "ундециллион",
  "додециллион",
  "тредециллион",
  "кваттуордециллион",
  "квиндециллион",
  "седециллион",
  "септдециллион",
  "октодециллион",
  "новемдециллион",
  "вигинтиллион",
  "анвигинтиллион",
  "дуовигинтиллион",
  "тревигинтиллион",
  "кватторвигинтиллион",
  "квинвигинтиллион",
  "сексвигинтиллион",
  "септемвигинтиллион",
  "октовигинтиллион",
  "новемвигинтиллион",
  "тригинтиллион",
  "антригинтиллион",
  "дуотригинтиллион",
  "септдециллиард",
];
