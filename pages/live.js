import { Component } from 'react';
import io from 'socket.io-client';

export default class Live extends Component {

    state = {
        reactions: []
    };

    // When the page is displayed
    componentDidMount () {
        this.socket = io();
        this.socket.on('reactionIncoming', (reaction) => { this.displayReaction(reaction) });
    }

    // When the page is closed
    componentWillUnmount () {
        this.socket.off('reactionIncoming', (reaction) => { this.displayReaction(reaction) });
        this.socket.close()
    }

    displayReaction(reaction) {

        if(typeof reaction.type !== 'undefined') {

            const left = Math.random() * ((window.innerWidth - 100) - 50) + 50;

            const joined = this.state.reactions.concat({
                type: reaction.type,
                left
            });

            this.setState({
                reactions: joined
            })
        }
    }

    render() {
        return(
            <div
                style={{
                    height: '100vh',
                    overflow: 'hidden',
                    width: '100%',
                    postion: 'relative'
                }}
            >
                {this.state.reactions.map((reaction, key) => {

                    return (
                        <div
                            style={{
                                position: 'absolute',
                                height: 50,
                                width: 50,
                                backgroundImage: `url(/static/${reaction.type}.png)`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                display: 'block',
                                margin: '0',
                                bottom: -80,
                                left: reaction.left
                            }}
                            className="reaction__bubble"
                            key={key}
                        >
                            &nbsp;
                        </div>
                    )
                })}

                <style>
                    {
                        `
                            .reaction__bubble {
                              animation-duration: 3s;
                              animation-name: moveToTop;
                            }

                            @keyframes moveToTop {
                              from {
                                bottom: -80px;
                              }

                              to {
                                bottom: 100vh;
                              }
                            }
                        `
                    }
                </style>

            </div>
        )
    }
}