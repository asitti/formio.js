import { TextFieldComponent } from '../textfield/TextField';
export class PasswordComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
      type: 'password'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Password',
      icon: 'fa fa-asterisk',
      group: 'basic',
      documentation: 'http://help.form.io/userguide/#password',
      weight: 20,
      schema: PasswordComponent.schema()
    };
  }

  elementInfo() {
    let info = super.elementInfo();
    info.attr.type = 'password';
    return info;
  }
}
