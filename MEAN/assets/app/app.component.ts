import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: ['.author {\n' +
    '      display: inline-block;\n' +
    '      font-style: italic;\n' +
    '      font-size: 12px;\n' +
    '      width: 80%;\n' +
    '    }\n' +
    '.config {\n' +
    '      display: inline-block;\n' +
    '      text-align: right;\n' +
    '      font-size: 12px;\n' +
    '      width: 19%;\n' +
    '    }']
})
export class AppComponent {
    message = {
        content: 'Some Content',
        author: 'Stephen'
};
}