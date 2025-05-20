/**
 * ToolbarComponent displays the main navigation bar with branding and language switching.
 * @author
 */
import { Component } from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {MatAnchor} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';
import {MatToolbar} from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  imports: [
    MatAnchor,
    RouterLink,
    LanguageSwitcherComponent,
    MatToolbar,
    TranslatePipe
  ]
})
export class ToolbarComponent {
  constructor(private translate: TranslateService) {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
