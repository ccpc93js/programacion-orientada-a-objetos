// SOLID

// principio de responsabilidad unica

//esta clase cuenta con varias responsabilidades que no deberian ser

/* class OrderService {
    constructor(private readonly _client: SmtpClient) {}

    add(order: Order){
        //01. Codigo para crear la orden

        //02. Notificar al cliente
        var message = new Message();
        message.to = "customer@email.com";
        message.from = "admin@kodoti.com";
        message.body = "Se le asigno un cuerso";
        message.body = "Estimado, su orden ..";

        this.sendCustomerNotification(message);
    }

    sendCustomerNotification(message: Message){
        this._client.send(message);
    }
} 
*/ 
//la solucion seria promover la cohesion es decir la colaboracion entre clases

/* class OrderService {
    constructor(private readonly _mailService: MailService) {}

    add(order: Order){
        //01. Codigo para crear la orden

        //02. Notificar al cliente
        var message = new Message();
        message.to = "customer@email.com";
        message.from = "admin@kodoti.com";
        message.body = "Se le asigno un cuerso";
        message.body = "Estimado, su orden ..";

        this.mailService(message);
    }
} 
*/ 

/* class MailService {
    constructor(private readonly smptClient: SmtpClient) {}

    send(message: Message): void {
        this._smptClient.send(message);
    }
} 
*/ 

// Principio de  abierto cerrado
/*
class NotificationService {
    send(notifications: Array<Notification>){
        notifications.forEach(notification => {
            if(notification.type === "sms"){
                this.sendbySMS(notification.PhoneNumber, notification.Subject)
            }

            if(notification.type === "email"){
                this.sendbyEmail(notification.Email, notification.Subject)
            }
        });
    }

    senbySMS(phoneNumber: string, subject: string){
        //Logica para mandar el SMS
    }

    sendbyEmail(to:string, subject:string){
        //logica para mandar el email
    }
}
*/

//solucion

/*
class NotificationService {
    send(notifications: Array<Notification>){
        notifications.forEach(notification => {
            notification.notify()
        });
    }
}
*/

/*
interface INotification {
    notify(): void;
}
*/

/*
class NoticationEmailService implements INotification {
    constructor(
        private readonly to: string,
        private readonly subject:string
    ){}
    
    notify():void {
        //logica para enviar la notificacion por email
    }
}
*/

/*
class NoticationSMSService implements INotification {
    constructor(
        private readonly to: string,
        private readonly subject:string
    ){}
    
    notify():void {
        //logica para enviar la notificacion por SMS
    }
}
*/


//Principio de sustitucion de Liskov
/*
class Animal {
    run():void{}
    walk():void{}
    hunt():void{}
}

class Tiger extends Animal {

}

class Turtle extends Animal {
    run(){
        throw new Error('no puede correr)
    }
    hunt(){
        throw new Error('no puede cazar)
    }

}
*/

//solucion crear interfaces de las caracteristicas e implementarlas a cada clase Animal creada

/*
interface IHunt {
    hunt(): void
}

interface IRun {
    run(): void
}

interface IWalk {
    walk(): void
}




class Tiger implements Ihunt, Irun, Iwalk {
    hunt(): void{}
    run(): void{}
    walk(): void{}
}

class Tiger implements  Iwalk {

    walk(): void{}
}
*/

//principio de segregacion de interfaz

/*
interface IRepository<T> {
    update(model:T): void;
    create(model:T): void;
    get(id:number): T;
    getAll(): Array<T>;
    remove(id: number): void;
}

class UserRepository implements IRepository<User>{
    update(model: User): void {ToDo}
    create(model: User): void {ToDo}
    get(id: number): User {ToDo}
    getAll(): Array<User> {ToDo}
    remove(id: number): void {ToDo}
}

class UserReportReporsitory implements IRepository<UserReport>
{
    get(id:number): UserReport {ToDo}

    getAll(): Array<User> {ToDo}

    create(model: User): void {
        throw new Error('No se puede implementar');
    }

    update(model: User): void {
        throw new Error('No se puede implementar');
    }

    remove(id: number): void {
        throw new Error('No se puede implementar');      
    }

}

*/

//solucion divide y conquista

/*

interface IReadable<T> {
    get(id: number): T;
    getAll(): Array<T>;
}

interface IReadable<T> {
    update(model: T);
    create(model: T);
}
interface IReadable<T> {
    remove(remove(id: number);
}

class UserRepository implements IReadable<UserReport>{
    get(id: number):  UserReport {ToDo}

    getAll():  Array<UserReport> {ToDo}

}

*/

//Principio de inversion de dependencia

/*

class MailChimpService {
    send(message: Message):void {ToDo}
}


class OrderService {
    constructor(private readonly mailchimpService: MailChimpService) {}

    add(order: Order){
        //01. Codigo para crear la orden

        //02. Notificar al cliente
        var message = new Message();
        message.to = "customer@email.com";
        message.from = "admin@kodoti.com";
        message.body = "Se le asigno un cuerso";
        message.body = "Estimado, su orden ..";

        this.mailchimpService(message);
    }
} 
*/

// solucion

/*
interface IMailservice {
    send(message: Message): void
}

class MailChimpService Implements IMailService {
    send(message: Message): void {ToDo}
}

class SendInBlueService Implements IMailService {
    send(message: Message): void {ToDo}
}

class SendGridService Implements IMailService {
    send(message: Message): void {ToDo}
}


class OrderService {
    constructor(private readonly mailService: IMailService) {}

    add(order: Order){
        //01. Codigo para crear la orden

        //02. Notificar al cliente
        var message = new Message();
        message.to = "customer@email.com";
        message.from = "admin@kodoti.com";
        message.body = "Se le asigno un cuerso";
        message.body = "Estimado, su orden ..";

        this.mailService.send(message);
    }
} 

let orderService = new OrderService(
    new MailChimpService()
)

let orderService = new OrderService(
    new SendInBlueService()
)

let orderService = new OrderService(
    new SendGridService()
)

*/