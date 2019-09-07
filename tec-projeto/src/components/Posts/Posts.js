import React, { Component } from 'react'

import './Posts.scss'

import PostImg from '../../assets/test.png'
import PostImgEgg from '../../assets/egg.png'

class Posts extends Component {

    /*async componentDidMount() {
        const response = await this.api.getProjects()

        const portfolio = response.data.map((project, i) => {
            return (
                <div className="Post">
                    <h1>Feed Post</h1>

                    <div className="perfilPost">
                        <img src={PostImgEgg} alt="Italian Trulli" className="imgPerfil" />
                        <h3 className="perfilName">{project.author}</h3>
                    </div>

                    <div className="cards">
                        <h2>{project.title}</h2>
                        <p>{project.text}</p>

                        <img src={PostImg} alt="Italian Trulli" className="imgPost" />
                    </div>
                </div>
            );
        })

    this.setState({loading: false, portfolio: portfolio})
    }*/

        render() {

            /*const { loading, portfolio } = this.state*/
            return (
                <div className="Post">
                    <h1>Feed Post</h1>

                    <div className="perfilPost">
                        <img src={PostImgEgg} alt="Italian Trulli" className="imgPerfil" />
                        <h3 className="perfilName">Carlos Calage</h3>
                    </div>

                    <div className="cards">
                        <h2>Titulo do cardPost</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <img src={PostImg} alt="Italian Trulli" className="imgPost" />
                    </div>

                    <div className="perfilPost">
                        <img src={PostImgEgg} alt="Italian Trulli" className="imgPerfil" />
                        <h3 className="perfilName">Carlos Calage</h3>
                    </div>

                    <div className="cards">
                        <h2>Titulo do cardPost</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>

                    <div className="perfilPost">
                        <img src={PostImgEgg} alt="Italian Trulli" className="imgPerfil" />
                        <h3 className="perfilName">Carlos Calage</h3>
                    </div>

                    <div className="cards">
                        <h2>Titulo do cardPost</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>

                    <div className="perfilPost">
                        <img src={PostImgEgg} alt="Italian Trulli" className="imgPerfil" />
                        <h3 className="perfilName">Carlos Calage</h3>
                    </div>

                    <div className="cards">
                        <h2>Titulo do cardPost</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </div>
                </div>
            )
        }
    }

    export default Posts