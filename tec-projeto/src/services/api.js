import React, { Component } from 'react'
import axios from 'axios'

export const ApiContext = React.createContext()

const client = axios.create({
  baseURL: 'http://host',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})


export class ApiProvider extends Component {

  requests = {
    getProjects: () => client.get('/name'),
    getMembers: () => client.get('/text'),
    getPosts: () => client.get('/imgPerfil')
  }


  render() {
    return (
      <ApiContext.Provider value={this.requests}>
        {this.props.children}
      </ApiContext.Provider>
    )
  }
}
