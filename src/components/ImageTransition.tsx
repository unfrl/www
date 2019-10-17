import * as React from 'react'

const styles = {
    loading: {
        opacity: 0,
    },
    loaded: {
        opacity: 1,
        transition: 'opacity 0.25s linear'
    },
}

class ImageTransition extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            imageLoaded: false
        }
    }

    public render() {
        const style = Object.assign({}, this.props.style || {}, this.state.imageLoaded ? styles.loaded : styles.loading);
        
        return (
            <img {...this.props} onLoad={this.handleLoad} style={style} />
        )
    }

    private handleLoad = () => {
        this.setState({ imageLoaded: true });
    }
}

export default ImageTransition;