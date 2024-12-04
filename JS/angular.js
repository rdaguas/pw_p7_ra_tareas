const { Component, NgModule } = ng.core;
const { BrowserModule } = ng.platformBrowser;
const { platformBrowserDynamic } = ng.platformBrowserDynamic;

// Componente principal
@Component({
  selector: 'app-nav', // Asegúrate de que coincide con el HTML
  template: `<h1>¡Hola Mundo con Angular!</h1>`
})
class AppComponent {}

// Módulo principal
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
class AppModule {}

// Inicialización de la aplicación
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
