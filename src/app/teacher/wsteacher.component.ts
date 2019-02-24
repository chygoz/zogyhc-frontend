import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

@Injectable()
export class teacherWebSocketService {
    private webSubject = new Subject();
    private webSocket = new WebSocket('ws://chol-njs.herokuapp.com/');
    constructor() {
        if (this.webSocket) {
            // // Connection opened
            // this.webSocket.addEventListener('open',  (event) => {
            //     this.webSocket.send(`Hello server I'm extension 😘`);
            // });
            // on message from server
            // this.webSocket.addEventListener('message', (event) => {
            //     console.log(event.data);
            //     this.webSubject.next(event.data);
            // });
            // teacher
        }
    }

    public onWebSocket(): Observable<any> {
        return this.webSubject.asObservable();
    }

    public sendMessage(message: string): void {
        this.webSocket.send(message);
    }

}