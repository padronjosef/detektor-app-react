import React from 'react'
import { Link } from 'react-router-dom'

import './styles/BadgeNew.css'
import header from '../images/conf-logo.png'
import BadgeForm from '../components/BadgeForm'
import Badge from '../components/Badge'
import PageLoading from '../components/PageLoading'
import api from '../api'
import md5 from "md5";

class BadgeNew extends React.Component {
  state= {
    loading: false,
    error: null,

    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  hadnleSubmit = async e => {
    e.preventDefault()
    this.setState({ loading: true, error: null })

    let email = this.state.form.email;
    let hash = md5(email);
    try {
      this.state.form.avatarUrl = `https://s.gravatar.com/avatar/${hash}?d=identicon`;

      this.props.history.push('/badges')
      await api.badges.create(this.state.form)
      this.setState({ loading: false })
    } catch (error) {
      this.setState ({ loading: false, error: error })
    }
  }

  render() {
    if (this.state.loading) {
      return <PageLoading />
    }
    return (
      <React.Fragment>
        <Link to="/badges">
          <div className="BadgeNew_hero">
            <img className="img-fluid" src={header} alt="logo"/>
          </div>
        </Link>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName={this.state.form.firstName || 'First_Name'}
                lastName={this.state.form.lastName || 'Last_Name'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'Job_Title'}
                email={this.state.form.email || 'example@email.com'}
                avatarUrl={this.state.form.avatarUrl || 'https://scontent.fbog2-1.fna.fbcdn.net/v/t1.0-9/58379116_1482626721871762_8224097773172031488_n.jpg?_nc_cat=110&_nc_ht=scontent.fbog2-1.fna&oh=98e3183a77a4cc665021353a285ef8db&oe=5D6849C8'}
              />
            </div>
            
            <div className="col">
            <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.hadnleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default BadgeNew

