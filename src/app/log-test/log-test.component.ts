import { Component } from '@angular/core';
import { LoggerModule,NGXLogger } from 'ngx-logger';
@Component({
  selector: 'app-log-test',
  template: '<button (click)="logMessage()">Log Message</button>'
})
export class LogTestComponent {
  constructor(private logger: NGXLogger) { }

  logMessage() {
    this.logger.debug('This is a debug message');
    this.logger.info('This is an info message');
    this.logger.warn('This is a warning message');
    this.logger.error('This is an error message');
  }
}
