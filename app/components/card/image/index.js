import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CardImageComponent extends Component{
    @tracked isBlue = true;

    @action
    toggleBg() {
      this.isBlue = !this.isBlue;
    }
}