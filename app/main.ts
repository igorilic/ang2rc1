import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { PartneriService } from './common/partneri/partneri.service';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    PartneriService
]);
