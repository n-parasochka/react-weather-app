import * as React from 'react';

interface ToolTipPropTypes {
  tooltip: any;
}

export class ToolTip extends React.Component<ToolTipPropTypes, any> {
  render() {
    let visibility = 'hidden';
    let transform = '';
    let x = 0;
    let y = 0;
    let width = 150;
    let height = 70;
    const transformText = 'translate(' + width / 2 + ',' + (height / 2 - 14) + ')';
    let transformArrow = '';

    if (this.props.tooltip.type === 'network') {
      width = 160;
      height = 50;
    }

    if (this.props.tooltip.display === true) {
      const position = this.props.tooltip.pos;

      x = position.x;
      y = position.y;
      visibility = 'visible';

      if (y > height) {
        transform = 'translate(' + (x - width / 2 + 30) + ',' + (y - height - 20) + ')';
        transformArrow = 'translate(' + (width / 2 - 20) + ',' + (height - 2) + ')';
      } else if (y < height) {
        transform = 'translate(' + (x - width / 2 + 30) + ',' + (Math.round(y) + 20) + ')';
        transformArrow = 'translate(' + (width / 2 - 20) + ',' + 0 + ') rotate(180,20,0)';
      }
    } else {
      visibility = 'hidden';
    }

    return (
      <g transform={transform}>
        <rect
          className='shadow'
          width={width}
          height={height}
          rx='5'
          ry='5'
          visibility={visibility}
          fill='#6391da'
          opacity='.95'
        />
        <polygon
          className='shadow'
          points='10,0  30,0  20,10'
          transform={transformArrow}
          fill='#6391da'
          opacity='.95'
          visibility={visibility}
        />
        <text visibility={visibility} transform={transformText}>
          <tspan x='0' textAnchor='middle' fontSize='0.6rem' fill='#ffffff'>
            {this.props.tooltip.data.key}
          </tspan>
          <tspan x='0' textAnchor='middle' dy='20' fontSize='0.6rem' fill='#a9f3ff'>
            {this.props.tooltip.type === 'network'
              ? this.props.tooltip.data.group
              : this.props.tooltip.data.description}
          </tspan>
        </text>
      </g>
    );
  }
}
