import { DOCUMENT } from '@angular/common';
import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'localization in Angular 10';
  languageList = [
    { code: 'en', label: 'English', selected: true },
    { code: 'hi', label: 'हिंदी', selected: false },
    { code: 'es', label: 'Spanish', selected: false },
  ];
  baseUrl = '';
  selectedLanguage = 'en';
  constructor(@Inject(LOCALE_ID) protected localeId: string) {
    this.languageList.map(language => {
      if (language.code === localeId) {
        language.selected = true;
      } else {
        language.selected = false;
      }
    });
  }
  ngOnInit(): void {
    this.baseUrl = 'https://piyalidas10.github.io/localization';
  }

  navigateTo(language): any {
    if (language) {
      console.log(language);
      window.location.href = this.baseUrl + language;
    }
    return false;
  }
}
