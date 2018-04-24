import { Component } from 'react';
import io from 'socket.io-client';
import Head from "next/head";

import Reaction from '../components/Reaction';

export default class Index extends Component {

    componentDidMount() {
        this.socket = io();
    }

    render() {
        return (
            <div>
                <Head>
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css"/>
                </Head>


                <div
                    className="row center-xs middle-xs"
                    style={{
                        height: '100vh'
                    }}
                >

                    <Reaction type="angry" />

                    <Reaction type="haha" />

                    <Reaction type="like" />

                    <Reaction type="love" />

                    <Reaction type="sad" />

                    <Reaction type="wow" />

                </div>

                <style global jsx>
                    {
                        `
                            .reaction__button {
                                transition: all 250ms;
                                cursor: pointer;
                                user-select: none;
                            }
                            .reaction__button:hover {
                                transform: scale(1.1);
                            }
                        `
                    }
                </style>
            </div>
        )
    }
}