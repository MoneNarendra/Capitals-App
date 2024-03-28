import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {presentCountryId: countryAndCapitalsList[0].id}

  changeCountry = event => {
    this.setState({presentCountryId: event.target.value})
  }

  findingCountry = () => {
    const {presentCountryId} = this.state
    const countryName = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === presentCountryId,
    )
    return countryName.country
  }

  render() {
    const {presentCountryId} = this.state
    const country = this.findingCountry()

    return (
      <div className="capitals-main-container">
        <div className="capitals-inner-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <div className="country-container">
            <select
              className="capital-select"
              value={presentCountryId}
              onChange={this.changeCountry}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option
                  className="each-option"
                  key={eachCountry.id}
                  value={eachCountry.id}
                >
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="country-text">is capital of which country?</p>
          </div>
          <p className="capital-name">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
