'use client';
import React from 'react';
import Calendar from '@ericz1803/react-google-calendar';
// import { css } from '@emotion/react';

const API_KEY = 'AIzaSyDZryW_6MUxm3Jd9gYdk6yWxVYm0WLcVgU'; // change the API Key later

let calendars = [
  { calendarId: '09opmkrjova8h5k5k46fedmo88@group.calendar.google.com' }, // change the calendar Id later
];

export default function Calendars() {
  return (
    <section id="calendar">
      <div className="App">
        <body>
          <div
            style={{
              width: '50%',
              paddingTop: '50px',
              paddingBottom: '50px',
              margin: 'auto',
              maxWidth: '1200px',
            }}>
            <Calendar
              apiKey={API_KEY}
              calendars={calendars}
            />
          </div>
        </body>
      </div>
    </section>
  );
}
