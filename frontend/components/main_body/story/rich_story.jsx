import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';

class TestStory extends Component {
  constructor(props){
    super(props);
    this.state = {value: RichTextEditor.createEmptyValue()};
    this.bodyUpdate = this.bodyUpdate.bind(this);
    this.save = this.save.bind(this);
  }


  bodyUpdate(text){
    this.setState({ value: text});
  }

  save(e){
    e.preventDefault();
    console.log(this.state.value.toString('html'));
    this.renderText();
  }

  renderText(){
    var $log = $('#log');
    const str = this.state.value.toString('html');
    const html = $.parseHTML( str );
    $log.append( html );
  }

  render () {
    const toolbarConfig = {
      display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
      INLINE_STYLE_BUTTONS: [
        {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'}
      ],
      BLOCK_TYPE_DROPDOWN: [
        {label: 'Normal', style: 'unstyled'},
        {label: 'Heading Large', style: 'header-one'},
        {label: 'Heading Medium', style: 'header-two'},
        {label: 'Heading Small', style: 'header-three'}
      ],
      BLOCK_TYPE_BUTTONS: [
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'}
      ]
    };
    return (
      <div>
        <RichTextEditor
          toolbarConfig={toolbarConfig}
          value={this.state.value}
          onChange={this.bodyUpdate}
          placeholder="your great story"
          />
        <button onClick={this.save}>Save!</button>

      <div id="log">
        <h2>This is where the text should go:</h2>
      </div>
      <p>More spaces! <strong>And bold!</strong></p>
      </div>
    );
  }
}

export default TestStory;
