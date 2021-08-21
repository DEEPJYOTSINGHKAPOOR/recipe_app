import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighLightDirective implements OnInit {


    @Input() defaultColor: string = 'transparent';
    @Input() highlightColor: string = 'red';

    @HostBinding('style.backgroundColor') backgroundColor: string = this.highlightColor;

    constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {

    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue');
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(evendData: Event) {
        this.backgroundColor = this.defaultColor;
    }

}