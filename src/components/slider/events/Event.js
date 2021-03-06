import React, {PureComponent} from 'react'
import '../main/carousel.css'
import logo from '../images/cityhub-logo-black.svg'
const QRCode = require('qrcode.react')

export default class Event extends PureComponent {
    state = {}

    render() {
        const timeOld = this.props.data.start_date
        const newTime = JSON.stringify(timeOld)
        const startTime = newTime.slice(1, 11)

        const timeOldEnd = this.props.data.end_date
        const newTimeEnd = JSON.stringify(timeOldEnd)
        const endTime = newTimeEnd.slice(1, 11)


        return (
            <div>
                <img src={logo} className='logoStyle' alt=''/>
                <div className='divSlide'>
                    <img src={this.props.data.image} className='instaImage' alt=''/>
                </div>
                <div className='legend'>
                    <img src={this.props.host.Picture} className='hostPic' alt=''/>
                    <h3 className='hostName'>{this.props.host.FirstName}<br /> <span className='cityHub'>CityHub</span></h3>
                    <div className='speech-bubble'>
                        <div className='liningStyle'>
                            <div className='titleBlock'>
                                <h1 className='eventStyle'>{this.props.data.title}</h1>
                            </div>
                            <h3 className='eventTextStyle'>{this.props.data.description}</h3>
                            <p className='dateStyle'><i>where: {this.props.data.address}</i></p>
                            <p>{this.startTime}</p>
                            {timeOld !== null && <p className='dateStyle'><i>when: {startTime} / {endTime}</i></p>}
                        </div>
                    </div>
                    <div className='QRsetting'>
                    <QRCode value={ `${window.location.origin}/singleevent/${this.props.data.id}` } />
                    {console.log(`${window.location.origin}/singleevent/${this.props.data.id}`)}
                    </div>
                </div>
            </div>
        )
    }
}



