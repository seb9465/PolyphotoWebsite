import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-button-menu',
    templateUrl: './button-menu.component.html',
    styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {
    @Input()
    textSize: number;

    private text: string;

    constructor() {
        this.text = 'hello';
    }

    ngOnInit() {
    }

}
