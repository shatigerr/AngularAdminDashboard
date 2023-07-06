import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-element',
  templateUrl: './side-bar-element.component.html',
  styleUrls: ['./side-bar-element.component.css']
})
export class SideBarElementComponent {
@Input() title!:String;
@Input() icon!:String;
@Input() link!:String;
}
