import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { CanvasData } from "./ws.typees";

@Injectable()
export class classroomWebSocketService {
    private webSubject = new Subject<CanvasData>();
    private webSocket = new WebSocket('ws://chol-njs.herokuapp.com/');
    constructor() {
        if (this.webSocket) {
            // Connection opened
            this.webSocket.addEventListener('open',  (event) => {
                this.webSocket.send(`Hello server I'm extension 😘`);
            });
            // on message from server
            this.webSocket.addEventListener('message', (event) => {
                try {
                    //console.log(JSON.parse(event.data));
                    this.webSubject.next(JSON.parse(event.data));
                }catch (error) {
                    
                }
                this.webSubject.next(event.data);
            });
        }
    }

    public onWebSocket(): Observable<any> {
        return this.webSubject.asObservable();
    }

}