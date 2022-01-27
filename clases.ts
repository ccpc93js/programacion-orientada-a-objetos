
class Smartphone {
    public color: string;
    private brand:string;
    private _battery:number;

    constructor(color: string, brand: string){
        this.color = color;
        this.brand = brand;
    }

    makeAPhoneCall(): void {
        if(this._battery === 0){
            throw "El celular no cuenta con la bateria necesaria"
        }

        this._battery -= 10;
    }

    get battry(): number{
        return  this.battry;
    };

    recharge(){
        this._battery = 100;
    }
}


//astraccion
let obj = new Smartphone('White', 'Iphone');
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
obj.makeAPhoneCall();
 

//herencia

class Android extends Smartphone {
    constructor(color: string){
        super(color, 'android');
    }
} 


class IPhone extends Smartphone {
    constructor(color: string){
        super(color, 'iphone');
    }
} 


let android = new Android('Red');
let iphone = new IPhone('White');

// //polimorfismo

// abstract
abstract class User {
public profession: string;

    constructor(profession: string) {
        this.profession = profession;
    }

    goToWork(): void {

    }
}


class Doctor extends User {
    constructor() {
        super('Doctor');
    }
}

class Police extends User {
    constructor() {
        super('Police');
    }
}



//interfaces

interface IUser {
    profession: string;
    goToWork(): void;
}


interface IUserExtraInformation {
    phoneNumber: string;
}


class DoctorTwo implements IUser, IUserExtraInformation{
    constructor(phoneNumber: string){
        this.profession = 'DoctorTwo'
        this.phoneNumber = phoneNumber;
    }
    profession: string;
    phoneNumber: string;

    goToWork(): void {
    }

}

class PoliceTwo implements IUser {
    constructor(){
        this.profession = 'PoliceTwo'
    }

    profession: string;
    goToWork(): void {
    }

}

// polimorfismo

function printProfession(model:IUser){
    console.log(model.profession);
}

let police =new PoliceTwo();
let doctor = new DoctorTwo('9999999')

printProfession(police);
printProfession(doctor);


// /relaciones:

// -asociacion

// de uno a uno
class UserA {
    public address?: Address;

    constructor(
        public userId: number,
        public name: string,
        public profession: string
    ){}
}
class Address {
    constructor(
      public addressId: number,
      public addressLine1: string,
      public addressLine2: string,
      public city:string,
      public postCode: string
    ){}
}

// de uno a muchos

class UserB {
    public address?: Address;
    public phones: Array<PhoneNumber> = []

    constructor(
        public userId: number,
        public name: string,
        public profession: string
    ){}
}

class PhoneNumber {
    constructor(
        public phoneNumberId: number,
        public number: string
    ){}
}

// de muchos a muchos

class UserC {
    public address?: Address;
    public phones: Array<PhoneNumber> = []
    public jobs: Array<Job> = []

    constructor(
        public userId: number,
        public name: string,
        public profession: string
    ){}
}

class Job {
    public users: Array<UserA> = [];

    constructor(
       public jobId: number,
       public name: string 
    ) {}
}

// colaboracion

class UserRepository {
    private users: Array<UserA> =[
        new UserA(1,"Eduardo", "sofware Developer"),
        new UserA(2, "Jose", "Police")
    ]

    retrieve(userId: number) : UserA {
        return this.users.find(x => x.userId == userId) as UserA;
    }

    add(user: UserA): void {
        this.users.push(user);
    }
}

