import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { MatButton } from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from '../loading/loading.component';

@Component({
    selector: 'app-search',
    imports: [MatTableModule, NgIf, MatButton, LoadingComponent],
    templateUrl: './search.component.html',
    styleUrl: './search.component.css'
})
export class SearchComponent
{
    displayedColumns: string[] = ['id', 'destination', 'flightNumber', 'scheduledAt', 'actions'];
    dataSource: FlightModel[] | null = null;

    public constructor(public utilsService: UtilsService)
    {
        FlightService.getFlights(0, 8)
            .then(rsp => this.dataSource = rsp.data.content);
    }
}
