import 'isomorphic-fetch';
// Here the import will import the global keyword "fetch" that will work server-side and client-side

/**
 * Will send the reaction to the server by using a HTTP request
 * @param {string} type
 */
const postReaction = (type) => {

    // Here in the body we use a shorthand that avoid to write a long object like :
    // { type: type }
    fetch('/react', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type })
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            // Here "err" can be an error returned by the server but also an internal error of code
            console.error(err);
        })
}

export default (props) => (
    <a
        style={{
            height: 200,
            backgroundImage: `url(/static/${props.type}.png)`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            display: 'block',
            margin: '0'
        }}
        className="col-xs-1 reaction__button"
        onClick={postReaction.bind(this, props.type)}
    >
       &nbsp;
    </a>
)