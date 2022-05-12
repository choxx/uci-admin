import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class UciEventsService {
    telemetryEvent: Subject<any>;
    actionEvent: EventEmitter<any>;
    constructor();
    emitTelemetry(event: any): void;
    static ɵfac: i0.ɵɵFactoryDef<UciEventsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<UciEventsService>;
}
