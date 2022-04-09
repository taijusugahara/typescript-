export {}

// class Mahoutsukai {}
// class Soryo{}

// class Taro extends Mahoutsukai{}

interface Kenja {
  ionazun():void;
}

interface Senshi{
  kougeki():void;
}

class Jiro implements Kenja,Senshi{
  ionazun(): void {
    console.log('ionazun')
  }
  kougeki(): void {
    console.log('攻撃')
  }
}
const jiro = new Jiro();

jiro.ionazun()
jiro.kougeki()