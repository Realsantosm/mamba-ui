import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';
import {BlogShowcaseComponent} from './blog-showcase.component';
import {Blog1Component} from './blog1/blog1.component';
import {Blog2Component} from './blog2/blog2.component';

const routes: Routes = [
	{
		path: '',
		component: BlogShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [BlogShowcaseComponent, Blog1Component, Blog2Component],
})
export class BlogModule {}
