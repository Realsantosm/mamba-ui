import {Component} from '@angular/core';
import {BaseComponent} from '@shared/components/base/base.component';

@Component({
	selector: 'custom-feature1',
	templateUrl: './feature1.component.html',
})
export class Feature1Component extends BaseComponent {
	constructor() {
		super();
	}
}
