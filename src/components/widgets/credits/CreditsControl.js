import React from 'react'

const creditsOptions = [
  'director',
  'photographer',
  'skateboarder',
  'videographer'
]

const creditsPeople = [
  'alec',
  'andrew',
  'ben',
  'brandon',
  'chad',
  'danny',
  'don',
  'geralle',
  'kevin-romar',
  'youngblood'
]

export default class Control extends React.Component {
//  static propTypes = {
//    onChange: PropTypes.func.isRequired,
//    forID: PropTypes.string,
//    value: PropTypes.node,
//    classNameWrapper: PropTypes.string.isRequired,
//  }

  static defaultProps = {
    value: [
      {
        "type": "skateboarder",
        "person": "don"
      },
      {
        "type": "director",
        "person": "chad"
      },
      {
        "type": "skateboarder",
        "person": "geralle"
      }
    ]
  }

  state = {
    focusedField: {
      // index: 0
      // prop: 'type'
    }
  }

  // this.props.value
    // [
    //   { type: 'skateboarder', person: 'don' }
    // ]
    // handleChange: function(e) {
    //   const separator = this.props.field.get('separator', ', ')
    //   this.props.onChange(e.target.value.split(separator).map((e) => e.trim()));
    // },

    setHasFocus = (e) => {
      this.setState({
        focusedField: {
          index: Number(e.target.dataset.fieldIndex),
          prop: e.target.dataset.targetProp
        }
      })
    }

    handleChangeForIndex = (index) => {
      return (e) => {
        const creditValues = this.getCurrentCredits()
        if (index > creditValues.length - 1) { // create a new item if needed
          creditValues.push({})
        }

        // console.log('e.target.dataset', e.target.dataset, 'e.target.value', e.target.value, index)

        const updatedCreditValues = creditValues.map((creditValue, i) => {
          if (i === index) {
            // console.log('e.target.dataset', e.target.dataset)
            return {
              ...creditValue,
              [e.target.dataset.targetProp]: e.target.value
            }
          }

          return creditValue
        })
        
        // console.log('creditValues', creditValues)
        // console.log('updatedCreditValues', updatedCreditValues)

        this.props.onChange(updatedCreditValues)
      }
    }

    getCurrentCredits = () => {
      return JSON.parse(JSON.stringify(this.props.value || [{}]))
    }

    renderInputRow = (creditValue = null, valueIndex = 0) => {
      const { focusedField } = this.state
      // console.log('focusedField', focusedField)

      return (
        <>
          <select
            id={!!creditValue ? undefined : this.props.forID}
            data-field-index={valueIndex}
            className="credits-select"
            value={creditValue ? creditValue.type : ''}
            data-target-prop="type"
            onChange={this.handleChangeForIndex(valueIndex)}
            onFocus={this.setHasFocus}
            autoFocus={focusedField.index === valueIndex && focusedField.prop === 'type'}
          >
            <option></option>
            {creditsOptions.map(optionName => (
              <option>{optionName}</option>
            ))}
          </select>
          <select
            data-field-index={valueIndex}
            className="credits-select"
            value={creditValue ? creditValue.person : ''}
            data-target-prop="person"
            onChange={this.handleChangeForIndex(valueIndex)}
            onFocus={this.setHasFocus}
            autoFocus={focusedField.index === valueIndex && focusedField.prop === 'person'}
          >
            <option></option>
            {creditsPeople.map(optionName => (
              <option>{optionName}</option>
            ))}
          </select>
        </>
      )

      return [
        // h('input', {
        //   id: !!creditValue ? undefined : this.props.forID,
        //   'data-field-index': valueIndex,
        //   type: 'text',
        //   className: 'credits-input',
        //   value: creditValue ? creditValue.type : '',
        //   'data-target-prop': 'type',
        //   placeholder: 'skateboarder',
        //   onChange: this.handleChangeForIndex(valueIndex),
        //   onFocus: this.setHasFocus,
        //   autoFocus: focusedField.index === valueIndex && focusedField.prop === 'type'
        // }),
        // h('input', {
        //   'data-field-index': valueIndex,
        //   type: 'text',
        //   className: 'credits-input',
        //   value: creditValue ? creditValue.person : '',
        //   'data-target-prop': 'person',
        //   placeholder: 'don',
        //   onChange: this.handleChangeForIndex(valueIndex),
        //   onFocus: this.setHasFocus,
        //   autoFocus: focusedField.index === valueIndex && focusedField.prop === 'person'
        // }),
      ]
    }
  
    render() {
      const { forID, classNameWrapper } = this.props;
      // const separator = this.props.field.get('separator', ', ');
      const creditValues = this.getCurrentCredits();
      // console.log('credits this.props.value', this.props.value)
      // console.log('credits render creditValues', creditValues)
  
      return (
        <div
          id={forID}
          className={classNameWrapper}
        >
          <div className="credits-grid-inputs">
            <label>Credit Type</label>
            <label>Credit Person</label>
            {creditValues.map(this.renderInputRow)}
            {this.renderInputRow(null, creditValues.length)}
          </div>
        </div>
      )
    }
}