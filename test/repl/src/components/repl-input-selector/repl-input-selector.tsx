import { Component, Host, h, Prop, Listen } from '@stencil/core';
import { InputFile } from '../../compiler/declarations';

@Component({
  tag: 'repl-input-selector',
  styleUrl: 'repl-input-selector.css',
  shadow: true
})
export class ReplInputSelector {

  @Prop() inputs: InputFile[] = [];
  @Prop() selectedName: string;

  @Listen('fileSelect')
  onFileSelect(ev: UIEvent) {
    this.selectedName = (ev.detail as any).name;
  }

  componentWillRender() {
    if (this.inputs.length > 0 && !this.inputs.some(i => i.name === this.selectedName)) {
      this.selectedName = this.inputs[0].name;
    }
  }

  render() {
    return (
      <Host>
        {(this.inputs.map(input => (
          <repl-input-selection
            name={input.name}
            isSelected={input.name === this.selectedName}
          />
        )))}
        <button
          class="add-input"
        >+</button>
      </Host>
    );
  }
}
