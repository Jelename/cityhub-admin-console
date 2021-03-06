import  React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'
import Instagram from '../instagram/Instagram'
import Event from '../events/Event'
import Events from '../events/Events'
import Joke from '../events/Joke'
import { connect } from 'react-redux';
import {getUsers} from '../../../actions/users'
import { fetchSliderData } from '../../../actions/sliderData'
import { fetchHostData } from '../../../actions/host'
import MessageBar from '../../dashboard/messages/MessageBar';

class TestCarousel extends Component {
    // state={autoPlay: true}
    param = this.props.match.params.location


    componentDidMount() {
        this.props.fetchSliderData(this.param)
        this.props.fetchHostData()
        const timer = setInterval(() => window.location.reload(), 1000 * 120);
        this.setState({timer});


        if (this.props.users === null) this.props.getUsers()

    }


    // componentWillUnmount() {
    //     this.clearInterval(this.state.timer);
    // }

    render() {
        // const {message} = this.props
        const currentCity=this.props.match.params.location

        return (
            <div>
                <Carousel autoPlay={setTimeout(() => this.state.autoPlay, 2000)} interval={10000} infiniteLoop showThumbs={false} showIndicators={false} showStatus={false} stopOnHover={false} swipeable={false}>
                {this.props.slider.map(item => {
                    if (item.source === "instagram") {
                        return (
                            <div key={item}><Instagram data={item} /></div>
                        )
                    }

                    if (item.source === "eventsList") {
                        return (
                            <div key={item}><Events data={item} params={this.param} host={this.props.host}/></div>
                        )
                    }

                    if (item.source === "joke") {
                        return (
                            <div key={item}><Joke data={item} host={this.props.host}/></div>
                        )
                    }

                    if (item.source === "event") {
                        return (
                            <div key={item}><Event data={item} host={this.props.host}/></div>
                        )
                    }
            })}
            </Carousel>
            {
             <MessageBar currentCity={currentCity}/>
             }
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        slider: state.sliderData,
        host: state.host,
        users: state.users === null ? null : state.users,
    }
}

export default connect(mapStateToProps, { fetchSliderData, fetchHostData, getUsers })(TestCarousel)
