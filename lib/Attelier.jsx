import React, { PropTypes } from 'react';
import Sidebar from './Sidebar.jsx';
import Workspace from './Workspace.jsx';
import './styles/attelier.less';

class Attelier extends React.Component {

  static defaultProps = {
    components: []
  };

  static propTypes = {
    components: PropTypes.arrayOf(PropTypes.shape({
      component: PropTypes.func,
      componentName: PropTypes.string
    }))
  };

  constructor(props) {
    super(props);
    this.state = {
      components: [],
      stagedComponent: null
    };
  }

  render() {
    let { components } = this.props;
    let { stagedComponent } = this.state;
    return (
      <div className="attelier">
        <Sidebar components={components} onSelect={this._onSelectComponent} />
        <Workspace component={stagedComponent} />
      </div>
    );
  }

  _onSelectComponent = (component) => {
    this.setState({stagedComponent: component});
  };
}

export default Attelier;
