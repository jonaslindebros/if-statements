import { Component } from 'react'
import PropTypes from 'prop-types'

export class If extends Component {
  render() {
    if (this.props.isEqualTo) {
      if (this.props.operator === this.props.isEqualTo) {
        return this.props.children
      } else {
        return null
      }
    }
    if (this.props.isGreaterThan) {
      if (this.props.operator > this.props.isGreaterThan) {
        return this.props.children
      } else {
        return null
      }
    }
    if (this.props.isLessThan) {
      if (this.props.operator < this.props.isLessThan) {
        return this.props.children
      } else {
        return null
      }
    }
    if (this.props.statement === true) {
      return this.props.children
    }
    return null
  }
}

If.propTypes = {
  /**
   * Operator that contains the value that will be tested.
   */
  operator: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /**
   * If value is equal to the operator the children will be passed through.
   */
  isEqualTo: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /**
   * If value is greater than the operator the children will be passed through.
   */
  isGreaterThan: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /**
   * If value is less than the operator the children will be passed through.
   */
  isLessThan: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  /**
   * Write statement directly into the component
   */
  statement: PropTypes.bool,
}

export default If