import {Component, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver, Type, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-container-component',
    template: `
    <div>
        <div #componentsContainer></div>
    </div>`
})
export class ContainerComponent implements OnInit, OnDestroy {
    @ViewChild('componentsContainer', {read: ViewContainerRef}) componentsContainer: ViewContainerRef;

    private innerRef: ComponentRef<any>;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

    ngOnInit(): void {
      const factories = Array.from(this.componentFactoryResolver['_factories'].keys());
      const factoryClass = <Type<any>> factories.find((factory: any) => factory.name === 'InnerComponent');
      const innerComponentFactory = this.componentFactoryResolver.resolveComponentFactory(factoryClass);
      this.innerRef = this.componentsContainer.createComponent(innerComponentFactory);
    }

    ngOnDestroy(): void {
      if (this.innerRef) {
        this.innerRef.destroy();
      }
    }
}
