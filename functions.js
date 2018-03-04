function randomWord() {

    var wordNumber = Math.floor(Math.random() * 34) + 1;

     wordNumber %= 34 +1;

     switch(wordNumber){

       case  1:

         alert  ("Artichoke");

         break;

       case  2:

         alert  ("Balloon");

         break;

       case  3:

         alert  ("Leather");

         break;

       case  4:

         alert  ("Kaleidoscope");

         break;

       case  5:

         alert  ("Bow");

         break;

       case  6:

         alert  ("Toes");

         break;

       case  7:

         alert  ("Hoes");

         break;

       case  8:

         alert  ("Hammer");

         break;

       case  9:

         alert  ("Guitar");

         break;

       case  10:

         alert  ("Boy");

         break;

       case  11:

         alert  ("Girl");

         break;

       case  12:

         alert  ("Film");

         break;

       case  13:

         alert  ("Explosive");

         break;

       case  14:

         alert  ("Kaleidoscope");

         break;

       case  15:

         alert  ("Explosive");

         break;

       case  16:

         alert  ("Onion");

         break;

       case  17:

         alert  ("Taco");

         break;

       case  18:

         alert  ("Mosquito");

         break;

       case  19:

         alert  ("Monster");

         break;

       case  20:

         alert  ("Neat");

         break;

       case  21:

         alert  ("Beat");

         break;

       case  22:

         alert  ("Meat");

         break;

       case  23:

         alert  ("Liquid");

         break;

       case  24:

         alert  ("Leg");

         break;

       case 25:

         alert  ("Leather");

         break;

       case 26:

         alert  ("Army");

         break;

       case 27:

         alert  ("Throw");

         break;

       case 28:

         alert  ("Grenade");

         break;

       case 29:

         alert  ("Bomb");

         break;

       case 30:

         alert  ("Desctruction");

         break;

       case 31:

         alert  ("Robot");

         break;

       case 32:

         alert  ("Rock");

         break;

       case 33:

         alert  ("Potato");

         break;

       case 34:

         alert  ("Barbecue");

         break;



    }

}

function randomHexNumber () {

    var digit1 = Math.floor(Math.random() * 17);

    var digit2 = Math.floor(Math.random() * 17);

    var digit3 = Math.floor(Math.random() * 17);

    var digit4 = Math.floor(Math.random() * 17);

    var digit5 = Math.floor(Math.random() * 17);

    var digit6 = Math.floor(Math.random() * 17);

    if (digit1 > 9) {

        if (digit1 == 10) {

            digit1 = 'A';

        } else if (digit1 == 11) {

            digit1 = 'B';

        } else if (digit1 == 12) {

            digit1 = 'C';

        } else if (digit1 == 13) {

            digit1 = 'D';

        } else if (digit1 == 14) {

            digit1 = 'E';

        } else {

            digit1 = 'F';

        }

    }

    if (digit2 > 9) {

        if (digit2 == 10) {

            digit2 = 'A';

        } else if (digit2 == 11) {

            digit2 = 'B';

        } else if (digit2 == 12) {

            digit2 = 'C';

        } else if (digit2 == 13) {

            digit2 = 'D';

        } else if (digit2 == 14) {

            digit2 = 'E';

        } else {

            digit2 = 'F';

        }

    }

    if (digit3 > 9) {

        if (digit3 == 10) {

            digit3 = 'A';

        } else if (digit3 == 11) {

            digit3 = 'B';

        } else if (digit3 == 12) {

            digit3 = 'C';

        } else if (digit3 == 13) {

            digit3 = 'D';

        } else if (digit3 == 14) {

            digit3 = 'E';

        } else {

            digit3 = 'F';

        }

    }

    if (digit4 > 9) {

        if (digit4 == 10) {

            digit4 = 'A';

        } else if (digit4 == 11) {

            digit4 = 'B';

        } else if (digit4 == 12) {

            digit4 = 'C';

        } else if (digit4 == 13) {

            digit4 = 'D';

        } else if (digit4 == 14) {

            digit4 = 'E';

        } else {

            digit4 = 'F';

        }

    }

    if (digit5 > 9) {

        if (digit5 == 10) {

            digit5 = 'A';

        } else if (digit5 == 11) {

            digit5 = 'B';

        } else if (digit5 == 12) {

            digit5 = 'C';

        } else if (digit5 == 13) {

            digit5 = 'D';

        } else if (digit5 == 14) {

            digit5 = 'E';

        } else {

            digit5 = 'F';

        }

    }

    if (digit6 > 9) {

        if (digit6 == 10) {

            digit6 = 'A';

        } else if (digit6 == 11) {

            digit6 = 'B';

        } else if (digit6 == 12) {

            digit6 = 'C';

        } else if (digit6 == 13) {

            digit6 = 'D';

        } else if (digit6 == 14) {

            digit6 = 'E';

        } else {

            digit6 = 'F';

        }

    }

    var number = ['#', digit1, digit2, digit3, digit4, digit5, digit6];

    var hex = number.join('');

    return hex;

}
