#include "iostream"
#include "cstdlib"
#include "cmath"
#include "ctime"

using namespace std;

int main(){
  srand(time(NULL));
  int wordNumber = rand();
  wordNumber %= 34 +1;
  switch(wordNumber){
    case  1:
      cout << "Artichoke";
      break;
    case  2:
      cout << "Balloon" << endl;
      break;
    case  3:
      cout << "Leather" << endl;
      break;
    case  4:
      cout << "Kaleidoscope" << endl;
      break;
    case  5:
      cout << "Bow" << endl;
      break;
    case  6:
      cout << "Toes" << endl;
      break;
    case  7:
      cout << "Hoes" << endl;
      break;
    case  8:
      cout << "Hammer" << endl;
      break;
    case  9:
      cout << "Guitar" << endl;
      break;
    case  10:
      cout << "Boy" << endl;
      break;
    case  11:
      cout << "Girl" << endl;
      break;
    case  12:
      cout << "Film" << endl;
      break;
    case  13:
      cout << "Explosive" << endl;
      break;
    case  14:
      cout << "Kaleidoscope" << endl;
      break;
    case  15:
      cout << "Explosive" << endl;
      break;
    case  16:
      cout << "Onion" << endl;
      break;
    case  17:
      cout << "Taco" << endl;
      break;
    case  18:
      cout << "Mosquito" << endl;
      break;
    case  19:
      cout << "Monster" << endl;
      break;
    case  20:
      cout << "Neat" << endl;
      break;
    case  21:
      cout << "Beat" << endl;
      break;
    case  22:
      cout << "Meat" << endl;
      break;
    case  23:
      cout << "Liquid" << endl;
      break;
    case  24:
      cout << "Leg" << endl;
      break;
    case 25:
      cout << "Leather" << endl;
      break;
    case 26:
      cout << "Army" << endl;
      break;
    case 27:
      cout << "Throw" << endl;
      break;
    case 28:
      cout << "Grenade" << endl;
      break;
    case 29:
      cout << "Bomb" << endl;
      break;
    case 30:
      cout << "Desctruction" << endl;
      break;
    case 31:
      cout << "Robot" << endl;
      break;
    case 32:
      cout << "Rock" << endl;
      break;
    case 33:
      cout << "Potato" << endl;
      break;
    case 34:
      cout << "Barbecue" << endl;
      break;

  }
  return 0;
}
