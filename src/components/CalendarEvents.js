import React from 'react'
import { Calendar, CalendarControls } from 'react-yearly-calendar';

class CalendarEvents extends React.Component{
    render(){
        return(
            <div>
                <h1>Calendar</h1>
                <Calendar
                  year="2020"
                  onPickDate={this.onDatePicked}
                  showWeekSeparators={false}
                  titles={this.titles}
                  customClasses={this.customClasses}
                />
            </div>
        )
    }
}
export default CalendarEvents